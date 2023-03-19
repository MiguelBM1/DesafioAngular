import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasnoticiasComponent } from './masnoticias.component';

describe('MasnoticiasComponent', () => {
  let component: MasnoticiasComponent;
  let fixture: ComponentFixture<MasnoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasnoticiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasnoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
