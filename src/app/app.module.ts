import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { MainContentComponent } from './component/main-content/main-content.component';
import { PatientsContentComponent } from './component/patients-content/patients-content.component';
import { FormSectionComponent } from './component/form-section/form-section.component';
import { TableSectionComponent } from './component/table-section/table-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    PatientsContentComponent,
    FormSectionComponent,
    TableSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
