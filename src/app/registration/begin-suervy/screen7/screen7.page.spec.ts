import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Screen7Page } from './screen7.page';

describe('Screen7Page', () => {
  let component: Screen7Page;
  let fixture: ComponentFixture<Screen7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Screen7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
