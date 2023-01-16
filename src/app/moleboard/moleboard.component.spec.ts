import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleboardComponent } from './moleboard.component';

describe('MoleboardComponent', () => {
  let component: MoleboardComponent;
  let fixture: ComponentFixture<MoleboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoleboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoleboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
