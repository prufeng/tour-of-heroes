import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
// import { AppRoutingModule } from './app-routing.module';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { FormsModule } from '@angular/forms';
// import {APP_BASE_HREF} from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { RouterTestingModule } from '../../node_modules/@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeroesComponent,
        MessagesComponent,
        HeroDetailComponent,
        DashboardComponent,
        HeroSearchComponent
      ],
      imports: [
        FormsModule,
        // AppRoutingModule
        RouterTestingModule
      ]
      // providers: [{provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Tour of Heroes'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tour of Heroes');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Tour of Heroes');
  });
});

// @Component({
//   selector: 'app-heros',
//   template: ''
// })
// class MockHeroesComponent{
// }