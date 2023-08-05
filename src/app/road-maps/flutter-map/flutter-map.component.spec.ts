import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlutterMapComponent } from './flutter-map.component';

describe('FlutterMapComponent', () => {
  let component: FlutterMapComponent;
  let fixture: ComponentFixture<FlutterMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlutterMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlutterMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
