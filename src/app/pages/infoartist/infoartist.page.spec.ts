import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoartistPage } from './infoartist.page';

describe('InfoartistPage', () => {
  let component: InfoartistPage;
  let fixture: ComponentFixture<InfoartistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoartistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
