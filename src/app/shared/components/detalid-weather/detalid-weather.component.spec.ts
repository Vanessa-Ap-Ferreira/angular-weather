import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalidWeatherComponent } from './detalid-weather.component';

describe('DetalidWeatherComponent', () => {
  let component: DetalidWeatherComponent;
  let fixture: ComponentFixture<DetalidWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalidWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalidWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
