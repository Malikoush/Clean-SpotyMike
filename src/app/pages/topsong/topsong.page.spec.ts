import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopsongPage } from './topsong.page';

describe('TopsongPage', () => {
  let component: TopsongPage;
  let fixture: ComponentFixture<TopsongPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TopsongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
