import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewestPage } from './newest.page';

describe('NewestPage', () => {
  let component: NewestPage;
  let fixture: ComponentFixture<NewestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
