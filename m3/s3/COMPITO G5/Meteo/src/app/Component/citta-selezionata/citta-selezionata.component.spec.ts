import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CittaSelezionataComponent } from './citta-selezionata.component';

describe('CittaSelezionataComponent', () => {
  let component: CittaSelezionataComponent;
  let fixture: ComponentFixture<CittaSelezionataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CittaSelezionataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CittaSelezionataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
