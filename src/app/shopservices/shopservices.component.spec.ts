import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopservicesComponent } from './shopservices.component';

describe('ShopservicesComponent', () => {
  let component: ShopservicesComponent;
  let fixture: ComponentFixture<ShopservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
