import { NgModule } from '@angular/core'

import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'

import { routes } from './routes'

import { RpcService } from './services/rpc.service'
import { UserService } from './services/user.service'

import { AboutPageComponent } from './components/about-page/about-page.component'
import { HomePageComponent } from './components/home-page/home-page.component'
import { LoginPageComponent } from './components/login-page/login-page.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { RootComponent } from './components/root/root.component'
import { UserListPageComponent } from './components/user-list-page/user-list-page.component'

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
    UserListPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [
    RpcService,
    UserService
  ]
})
export class RootModule { }
