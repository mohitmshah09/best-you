import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditWorkPage } from './edit-work.page';

describe('EditWorkPage', () => {
  let component: EditWorkPage;
  let fixture: ComponentFixture<EditWorkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWorkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditWorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
