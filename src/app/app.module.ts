import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ChatComponent } from './components/chat/chat.component';


const firebaseConfig = {
  apiKey: "AIzaSyDJ_PjedhFRdisWseGJIK9ejyLSgUhTn0Y",
  authDomain: "tell-me-chatapp.firebaseapp.com",
  projectId: "tell-me-chatapp",
  storageBucket: "tell-me-chatapp.appspot.com",
  messagingSenderId: "604565049286",
  appId: "1:604565049286:web:f36b11147ded462cfaacc7"
};

const routes: Routes = [
  {
      pathMatch: 'full',
      path: "", 
      redirectTo: 'home'
  },
  {
      path:"login",
      component: LoginComponent
  },
  {
      path:"register",
      component: RegisterComponent
  },
  {
      path: "home",
      component: HomeComponent
  },
  {
      path: "**",
      component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PageNotFoundComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppRoutingModule { }
