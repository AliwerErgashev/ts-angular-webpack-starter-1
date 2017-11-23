import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import { AboutPageComponent } from './components/about-page/about-page.component'
import { HomePageComponent } from './components/home-page/home-page.component'
import { LoginPageComponent } from './components/login-page/login-page.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { RootComponent } from './components/root/root.component'
import { UserItemPageComponent } from './components/user-item-page/user-item-page.component'
import { UserListPageComponent } from './components/user-list-page/user-list-page.component'
import { routes } from './routes'
import { AuthGuard } from './services/auth.guard'
import { LoginService } from './services/login.service'
import { RpcService } from './services/rpc.service'
import { UserService } from './services/user.service'

@NgModule({
  bootstrap: [
    RootComponent,
  ],
  declarations: [
    AboutPageComponent,
    HomePageComponent,
    LoginPageComponent,
    NavbarComponent,
    RootComponent,
    UserItemPageComponent,
    UserListPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [
    AuthGuard,
    LoginService,
    RpcService,
    UserService,
  ],
})
export class RootModule { }
