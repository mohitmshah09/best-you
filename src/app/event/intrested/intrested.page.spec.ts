import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntrestedPage } from './intrested.page';

describe('IntrestedPage', () => {
  let component: IntrestedPage;
  let fixture: ComponentFixture<IntrestedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrestedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntrestedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
