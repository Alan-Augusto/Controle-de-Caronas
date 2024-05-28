# Sistema de Controle de Caronas

Este é um projeto de sistema de controle de caronas desenvolvido usando Angular e Firebase. O objetivo é permitir que os usuários ofereçam e participem de caronas, registrando informações como data, horário, partida e destino.

## Funcionalidades

- **Cadastro e Login de Usuário**: Usuários podem se registrar e fazer login.
- **Oferecer Carona**: Usuários podem oferecer caronas especificando detalhes como data, hora, partida, destino e assentos disponíveis.
- **Buscar Caronas**: Usuários podem buscar caronas disponíveis com base em critérios específicos.
- **Participar de Carona**: Usuários podem participar de caronas oferecidas por outros.
- **Histórico de Caronas**: Usuários podem visualizar o histórico de caronas oferecidas e pegas.

## Tecnologias Utilizadas

- **Angular**: Framework front-end.
- **Firebase**: Backend como serviço para autenticação e banco de dados (Firestore).

## Estrutura do Projeto

### Estrutura de Dados no Firestore

1. **Coleção de Usuários (users)**
    ```json
    {
      "id": "userId",
      "name": "Nome do Usuário",
      "email": "email@dominio.com",
      "phone": "123456789"
    }
    ```

2. **Coleção de Caronas Oferecidas (ridesOffered)**
    ```json
    {
      "id": "rideId",
      "driverId": "userId",
      "date": "2024-06-01",
      "time": "08:00",
      "departure": "Local de Partida",
      "destination": "Destino",
      "availableSeats": 3
    }
    ```

3. **Coleção de Caronas Pegas (ridesTaken)**
    ```json
    {
      "id": "rideTakenId",
      "rideId": "rideId",
      "passengerId": "userId",
      "date": "2024-06-01",
      "time": "08:00"
    }
    ```

### Componentes Principais

- **RegisterComponent**: Formulário de registro de usuário.
- **LoginComponent**: Formulário de login de usuário.
- **OfferRideComponent**: Formulário para oferecer carona.
- **SearchRideComponent**: Tela de pesquisa de caronas.
- **RideListComponent**: Lista de caronas disponíveis.
- **RideHistoryComponent**: Histórico de caronas oferecidas e pegas.

### Serviços (Services)

- **AuthService**: Gerencia autenticação e informações do usuário.
- **RideService**: Gerencia operações relacionadas a caronas oferecidas (`ridesOffered`).
- **RideTakenService**: Gerencia operações relacionadas a caronas pegadas (`ridesTaken`).

## Instalação

### Pré-requisitos

- Node.js
- Angular CLI
- Conta no Firebase

### Passos

1. Clone o repositório:

    ```sh
    git clone https://github.com/seu-usuario/sistema-de-caronas.git
    cd sistema-de-caronas
    ```

2. Instale as dependências:

    ```sh
    npm install
    ```

3. Configure o Firebase:

    - Crie um novo projeto no Firebase.
    - Ative o Firestore e a Autenticação com Email/Senha.
    - Copie as configurações do Firebase e cole no arquivo `src/environments/environment.ts`.

    ```typescript
    export const environment = {
      production: false,
      firebaseConfig: {
        apiKey: "SUA_API_KEY",
        authDomain: "SEU_AUTH_DOMAIN",
        projectId: "SEU_PROJECT_ID",
        storageBucket: "SEU_STORAGE_BUCKET",
        messagingSenderId: "SEU_MESSAGING_SENDER_ID",
        appId: "SEU_APP_ID"
      }
    };
    ```

4. Inicie o servidor de desenvolvimento:

    ```sh
    ng serve
    ```

    Abra o navegador e acesse `http://localhost:4200`.

## Uso

### Registro e Login

1. Acesse a página de registro para criar uma nova conta.
2. Faça login com as credenciais registradas.

### Oferecer Carona

1. Acesse a página de oferta de carona.
2. Preencha o formulário com os detalhes da carona.
3. Clique em "Oferecer Carona".

### Buscar Caronas

1. Acesse a página de busca de caronas.
2. Use os filtros para encontrar caronas disponíveis.
3. Selecione uma carona da lista para visualizar os detalhes.

### Participar de Carona

1. Encontre uma carona disponível através da busca.
2. Clique em "Participar" para se registrar na carona.

### Histórico de Caronas

1. Acesse a página de histórico de caronas.
2. Visualize as caronas oferecidas e pegas.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`).
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## Contato

Seu Nome - [@seu_usuario](https://twitter.com/seu_usuario) - seu_email@dominio.com

Link do Projeto: [https://github.com/seu-usuario/sistema-de-caronas](https://github.com/seu-usuario/sistema-de-caronas)

---

Com este README, você fornece uma visão geral clara do projeto, incluindo suas funcionalidades, estrutura, instruções de instalação e uso, bem como informações sobre como contribuir.