import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilartistPage } from './profilartist.page';

describe('ProfilartistPage', () => {
  let component: ProfilartistPage;
  let fixture: ComponentFixture<ProfilartistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilartistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
