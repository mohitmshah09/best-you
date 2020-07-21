import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Screen8Page } from './screen8.page';

describe('Screen8Page', () => {
  let component: Screen8Page;
  let fixture: ComponentFixture<Screen8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Screen8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
