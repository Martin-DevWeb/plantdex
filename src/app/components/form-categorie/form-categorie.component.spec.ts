import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCategorieComponent } from './form-categorie.component';

describe('FormCategorieComponent', () => {
  let component: FormCategorieComponent;
  let fixture: ComponentFixture<FormCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCategorieComponent]
    });
    fixture = TestBed.createComponent(FormCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
