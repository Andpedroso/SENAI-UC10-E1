import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HardwareComponent } from './views/hardware/hardware.component';
import { CelularesComponent } from './views/celulares/celulares.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';

import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HardwareComponent,
    CelularesComponent,
    JogosComponent,
    CadastroComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
