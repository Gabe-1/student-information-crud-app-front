import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LearnerListComponent } from './components/learner-list/learner-list.component';
import { LearnerDetailsComponent } from './components/learner-details/learner-details.component';
import { LearnerCreateComponent } from './components/learner-create/learner-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'learners', pathMatch: 'full' },
  { path: 'products', component: LearnerListComponent },
  { path: 'products/:id', component: LearnerDetailsComponent },
  { path: 'create', component: LearnerCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
