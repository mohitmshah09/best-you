import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Screen4Page } from './screen4.page';

describe('Screen4Page', () => {
  let component: Screen4Page;
  let fixture: ComponentFixture<Screen4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Screen4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
