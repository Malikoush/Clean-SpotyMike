import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoalbumPage } from './infoalbum.page';

describe('InfoalbumPage', () => {
  let component: InfoalbumPage;
  let fixture: ComponentFixture<InfoalbumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoalbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
