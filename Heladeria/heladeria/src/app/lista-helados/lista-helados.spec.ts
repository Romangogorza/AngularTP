import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHelados } from './lista-helados';

describe('ListaHelados', () => {
  let component: ListaHelados;
  let fixture: ComponentFixture<ListaHelados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaHelados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaHelados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
