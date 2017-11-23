import { Routes } from '@angular/router/src/config'
import { AboutPageComponent } from './components/about-page/about-page.component'
import { HomePageComponent } from './components/home-page/home-page.component'
import { LoginPageComponent } from './components/login-page/login-page.component'
import { UserItemPageComponent } from './components/user-item-page/user-item-page.component'
import { UserListPageComponent } from './components/user-list-page/user-list-page.component'
import { AuthGuard } from './services/auth.guard'

export const routes: Routes = [
  {
    component: AboutPageComponent,
    path: 'about',
    canActivate: [AuthGuard],
    data: {
      requiresAuth: true,
    },
  },
  {
    component: HomePageComponent,
    path: '',
  },
  {
    component: LoginPageComponent,
    path: 'login',
  },
  {
    path: 'users',
    children: [
      {
        component: UserListPageComponent,
        path: '',
      },
      {
        component: UserItemPageComponent,
        path: 'create',
      },
    ],
  },
]
