import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSignalementRechercheComponent } from './list-signalement-recherche.component';

describe('ListSignalementRechercheComponent', () => {
  let component: ListSignalementRechercheComponent;
  let fixture: ComponentFixture<ListSignalementRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSignalementRechercheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSignalementRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
