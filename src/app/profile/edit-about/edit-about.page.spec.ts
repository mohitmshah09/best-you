import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditAboutPage } from './edit-about.page';

describe('EditAboutPage', () => {
  let component: EditAboutPage;
  let fixture: ComponentFixture<EditAboutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAboutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditAboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
