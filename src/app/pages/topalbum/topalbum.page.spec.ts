import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopalbumPage } from './topalbum.page';

describe('TopalbumPage', () => {
  let component: TopalbumPage;
  let fixture: ComponentFixture<TopalbumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TopalbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
