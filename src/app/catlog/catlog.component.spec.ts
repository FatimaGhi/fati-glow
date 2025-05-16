import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatlogComponent } from './catlog.component';

describe('CatlogComponent', () => {
  let component: CatlogComponent;
  let fixture: ComponentFixture<CatlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
