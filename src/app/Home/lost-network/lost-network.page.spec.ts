import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LostNetworkPage } from './lost-network.page';

describe('LostNetworkPage', () => {
  let component: LostNetworkPage;
  let fixture: ComponentFixture<LostNetworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostNetworkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LostNetworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
