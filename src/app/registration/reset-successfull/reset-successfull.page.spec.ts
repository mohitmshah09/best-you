import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResetSuccessfullPage } from './reset-successfull.page';

describe('ResetSuccessfullPage', () => {
  let component: ResetSuccessfullPage;
  let fixture: ComponentFixture<ResetSuccessfullPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetSuccessfullPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResetSuccessfullPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
