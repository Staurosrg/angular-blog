import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuTitle } from './components/menu-title/menu-title';
import { BigCard } from './components/big-card/big-card';
import { SmallCard } from './components/small-card/small-card';
import { Home } from './pages/home/home';

@NgModule({
  declarations: [
    App,
    MenuTitle,
    BigCard,
    SmallCard,
    Home
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
