import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { HomeFeedPage } from './home-feed.page';

describe('HomeFeedPage', () => {
  let component: HomeFeedPage;
  let fixture: ComponentFixture<HomeFeedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeFeedPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeFeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
