import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideTakenListComponent } from './ride-taken-list.component';

describe('RideTakenListComponent', () => {
  let component: RideTakenListComponent;
  let fixture: ComponentFixture<RideTakenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RideTakenListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RideTakenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
