import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MurojaatComponent } from './murojaat.component';

describe('MurojaatComponent', () => {
  let component: MurojaatComponent;
  let fixture: ComponentFixture<MurojaatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MurojaatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MurojaatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
