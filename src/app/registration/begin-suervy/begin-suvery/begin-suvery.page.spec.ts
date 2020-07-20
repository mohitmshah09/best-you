import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeginSuveryPage } from './begin-suvery.page';

describe('BeginSuveryPage', () => {
  let component: BeginSuveryPage;
  let fixture: ComponentFixture<BeginSuveryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeginSuveryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeginSuveryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
