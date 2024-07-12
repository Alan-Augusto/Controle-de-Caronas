export interface TableColumn {
    header: string;
    field: string;
    type: string;
    icon?: string;
    width?: string;
}

export interface TableAction {
    label: string;
    icon: string;
    action: (row: any, target:any) => void;
}

export interface TableConfig {
    columns: TableColumn[];
    actions: TableAction[];
}