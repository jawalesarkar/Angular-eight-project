import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomdComponent } from './homd.component';

describe('HomdComponent', () => {
  let component: HomdComponent;
  let fixture: ComponentFixture<HomdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomdComponent]
    });
    fixture = TestBed.createComponent(HomdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
