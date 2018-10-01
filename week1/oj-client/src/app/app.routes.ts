// what url use what components, url to

import { Routes, RouterModule } from '@angular/router';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
// routes type
const routes: Routes = [
// if problems/root -> problem list
// if problem id -> component
// if problems/safawefawefefwa -> problems-list-detail
  {
    path: "",
    // root
    redirectTo: "problems",
    pathMatch: "full"
  },

 {
    path: "problems",
    component: ProblemListComponent

  },

  {
    // we difine the params in detail is id, ":" ->varialbe 
    path: "problems/:id",
    component: ProblemDetailComponent
  },

  {
    path: "**",
    redirectTo: "problems"
  },
];

export const routing = RouterModule.forRoot(routes);
// identify object , use Rxxxx.forRoot and return a routermodule
// next is to use
