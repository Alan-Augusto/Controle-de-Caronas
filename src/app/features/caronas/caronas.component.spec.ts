import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaronasComponent } from './caronas.component';

describe('CaronasComponent', () => {
  let component: CaronasComponent;
  let fixture: ComponentFixture<CaronasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaronasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaronasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
