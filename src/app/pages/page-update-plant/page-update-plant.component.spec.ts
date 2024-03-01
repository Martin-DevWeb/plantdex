import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUpdatePlantComponent } from './page-update-plant.component';

describe('PageUpdatePlantComponent', () => {
  let component: PageUpdatePlantComponent;
  let fixture: ComponentFixture<PageUpdatePlantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageUpdatePlantComponent]
    });
    fixture = TestBed.createComponent(PageUpdatePlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
