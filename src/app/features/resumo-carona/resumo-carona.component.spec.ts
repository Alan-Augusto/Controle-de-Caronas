import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoCaronaComponent } from './resumo-carona.component';

describe('ResumoCaronaComponent', () => {
  let component: ResumoCaronaComponent;
  let fixture: ComponentFixture<ResumoCaronaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumoCaronaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumoCaronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
