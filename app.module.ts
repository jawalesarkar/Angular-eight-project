import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RushiComponent } from './rushi/rushi.component';
import { WhiteComponent } from './white/white.component';
import { BlackComponent } from './black/black.component';
import { RedComponent } from './red/red.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomdComponent } from './homd/homd.component';

@NgModule({
  declarations: [
    AppComponent,
    RushiComponent,
    WhiteComponent,
    BlackComponent,
    RedComponent,
    AboutComponent,
    ContactComponent,
    HomdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
