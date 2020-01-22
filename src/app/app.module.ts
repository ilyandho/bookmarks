import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LinkSectionComponent } from './components/link-section/link-section.component';
import { LinkSectionHeaderComponent } from './components/link-section-header/link-section-header.component';
import { LinksComponent } from './components/links/links.component';
import { LinkComponent } from './components/link/link.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LinkSectionComponent,
    LinkSectionHeaderComponent,
    LinksComponent,
    LinkComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
