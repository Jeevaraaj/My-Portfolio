import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSAMapComponent } from './dsa-map.component';

describe('DSAMapComponent', () => {
  let component: DSAMapComponent;
  let fixture: ComponentFixture<DSAMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DSAMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DSAMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
