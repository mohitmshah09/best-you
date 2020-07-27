import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostPopularPage } from './most-popular.page';

describe('MostPopularPage', () => {
  let component: MostPopularPage;
  let fixture: ComponentFixture<MostPopularPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPopularPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostPopularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
