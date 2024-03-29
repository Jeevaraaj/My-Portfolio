import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMapComponent } from './angular-map.component';

describe('AngularMapComponent', () => {
  let component: AngularMapComponent;
  let fixture: ComponentFixture<AngularMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
