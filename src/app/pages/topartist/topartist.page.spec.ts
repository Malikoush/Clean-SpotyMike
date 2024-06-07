import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopartistPage } from './topartist.page';

describe('TopartistPage', () => {
  let component: TopartistPage;
  let fixture: ComponentFixture<TopartistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TopartistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
