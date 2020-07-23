import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditIntrestPage } from './edit-intrest.page';

describe('EditIntrestPage', () => {
  let component: EditIntrestPage;
  let fixture: ComponentFixture<EditIntrestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIntrestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditIntrestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
