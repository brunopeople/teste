import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogadorService} from './jogador.service';

import { HttpClientModule} from '@angular/common/http';
import { JogadorAddComponent } from './jogador-add/jogador-add.component';
import { JogadorGetComponent } from './jogador-get/jogador-get.component';
import { JogadorEditComponent } from './jogador-edit/jogador-edit.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JogadorAddComponent,
    JogadorGetComponent,
    JogadorEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlimLoadingBarModule,
    ReactiveFormsModule
  ],
  providers: [
  JogadorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
