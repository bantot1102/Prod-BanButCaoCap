import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ssuachua } from './s-suachua.component';

describe('SsuachuaComponent', () => {
  let component: Ssuachua;
  let fixture: ComponentFixture<Ssuachua>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ssuachua ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ssuachua);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
