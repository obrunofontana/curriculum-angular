import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MzInputModule,
  MzDatepickerModule,
  MzRadioButtonModule,
  MzButtonModule,
  MzSelectModule,
  MzCollapsibleModule,
  MzTextareaModule,
  MzValidationModule,
  MzCollectionModule,
  MzToastModule,
  MzCardModule,
  MzModalModule,
  MzNavbarModule
  
} from 'ngx-materialize';
import { ListCurriculumComponent } from './list-curriculum/list-curriculum.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCadastroComponent,
    ListCurriculumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MzInputModule,
    MzDatepickerModule,
    MzRadioButtonModule,
    MzButtonModule,
    MzSelectModule,
    MzCollapsibleModule,
    MzTextareaModule,
    MzCollectionModule,
    MzToastModule,
    MzValidationModule,
    BrowserAnimationsModule,
    FormsModule,
    MzCardModule,
    MzModalModule,
    MzNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
