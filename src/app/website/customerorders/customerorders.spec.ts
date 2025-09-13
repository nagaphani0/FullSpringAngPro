import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customerorders } from './customerorders';

describe('Customerorders', () => {
  let component: Customerorders;
  let fixture: ComponentFixture<Customerorders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Customerorders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customerorders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
