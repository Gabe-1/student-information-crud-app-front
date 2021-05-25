import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnerCreateComponent } from './components/learner-create/learner-create.component';
import { LearnerDetailsComponent } from './components/learner-details/learner-details.component';
import { LearnerListComponent } from './components/learner-list/learner-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LearnerCreateComponent,
    LearnerDetailsComponent,
    LearnerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
