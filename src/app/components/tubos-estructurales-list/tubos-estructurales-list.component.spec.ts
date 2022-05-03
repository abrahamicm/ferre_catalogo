import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TubosEstructuralesListComponent } from './tubos-estructurales-list.component';

describe('TubosEstructuralesListComponent', () => {
  let component: TubosEstructuralesListComponent;
  let fixture: ComponentFixture<TubosEstructuralesListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TubosEstructuralesListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TubosEstructuralesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
