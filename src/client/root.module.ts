import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { AboutPageComponent } from "./components/about-page/about-page.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RootComponent } from "./components/root/root.component";

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { component: AboutPageComponent, path: "about" },
      { component: HomePageComponent, path: "" },
      { component: LoginPageComponent, path: "login" },
    ], { useHash: true }),
  ],
})
export class RootModule { }
