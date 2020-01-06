import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { GameComponent } from './game/game.component';
import { ContactComponent } from './contact/contact.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { StandardLayoutComponent } from './layouts/standard-layout/standard-layout.component';




const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: '',
    component: StandardLayoutComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'game',
        component: GameComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
