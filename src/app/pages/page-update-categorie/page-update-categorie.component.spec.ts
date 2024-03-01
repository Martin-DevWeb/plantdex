import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUpdateCategorieComponent } from './page-update-categorie.component';

describe('PageUpdateCategorieComponent', () => {
  let component: PageUpdateCategorieComponent;
  let fixture: ComponentFixture<PageUpdateCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageUpdateCategorieComponent]
    });
    fixture = TestBed.createComponent(PageUpdateCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
