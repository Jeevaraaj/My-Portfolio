import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaMapComponent } from './java-map.component';

describe('JavaMapComponent', () => {
  let component: JavaMapComponent;
  let fixture: ComponentFixture<JavaMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
