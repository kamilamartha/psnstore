import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { BarramenuComponent } from './components/barramenu/barramenu.component';
import { EtiquetaComponent } from './components/card/etiqueta/etiqueta.component';
import { PrecoComponent } from './components/card/preco/preco.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    BarramenuComponent,
    EtiquetaComponent,
    PrecoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
