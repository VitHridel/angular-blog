import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleLogFormComponent } from './console-log-form.component';

describe('ConsoleLogFormComponent', () => {
  let component: ConsoleLogFormComponent;
  let fixture: ComponentFixture<ConsoleLogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsoleLogFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleLogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
