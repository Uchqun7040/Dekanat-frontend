import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MurojaatDialogComponent } from './murojaat-dialog.component';

describe('MurojaatDialogComponent', () => {
  let component: MurojaatDialogComponent;
  let fixture: ComponentFixture<MurojaatDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MurojaatDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MurojaatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
