import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpMapComponent } from './php-map.component';

describe('PhpMapComponent', () => {
  let component: PhpMapComponent;
  let fixture: ComponentFixture<PhpMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhpMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhpMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
