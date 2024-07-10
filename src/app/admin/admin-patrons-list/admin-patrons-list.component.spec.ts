import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPatronsListComponent } from './admin-patrons-list.component';

describe('AdminPatronsListComponent', () => {
  let component: AdminPatronsListComponent;
  let fixture: ComponentFixture<AdminPatronsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPatronsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPatronsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
