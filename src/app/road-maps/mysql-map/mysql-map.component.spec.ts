import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysqlMapComponent } from './mysql-map.component';

describe('MysqlMapComponent', () => {
  let component: MysqlMapComponent;
  let fixture: ComponentFixture<MysqlMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysqlMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MysqlMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
