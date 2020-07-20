import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Screen6Page } from './screen6.page';

describe('Screen6Page', () => {
  let component: Screen6Page;
  let fixture: ComponentFixture<Screen6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Screen6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
