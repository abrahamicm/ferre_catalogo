import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NgxTableBootstrapComponent } from './ngx-table-bootstrap.component';

describe('NgxTableBootstrapComponent', () => {
  let component: NgxTableBootstrapComponent;
  let fixture: ComponentFixture<NgxTableBootstrapComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTableBootstrapComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NgxTableBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
