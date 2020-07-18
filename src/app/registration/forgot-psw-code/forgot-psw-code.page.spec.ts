import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForgotPswCodePage } from './forgot-psw-code.page';

describe('ForgotPswCodePage', () => {
  let component: ForgotPswCodePage;
  let fixture: ComponentFixture<ForgotPswCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPswCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotPswCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
