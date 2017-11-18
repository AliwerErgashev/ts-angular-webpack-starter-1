import { AboutPageComponent } from './components/about-page/about-page.component'
import { HomePageComponent } from './components/home-page/home-page.component'
import { LoginPageComponent } from './components/login-page/login-page.component'
import { UserListPageComponent } from './components/user-list-page/user-list-page.component'

export const routes = [
  { component: AboutPageComponent, path: 'about' },
  { component: HomePageComponent, path: '' },
  { component: LoginPageComponent, path: 'login' },
  { component: UserListPageComponent, path: 'users' },
]
