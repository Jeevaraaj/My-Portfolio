import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonMapComponent } from './python-map.component';

describe('PythonMapComponent', () => {
  let component: PythonMapComponent;
  let fixture: ComponentFixture<PythonMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PythonMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
