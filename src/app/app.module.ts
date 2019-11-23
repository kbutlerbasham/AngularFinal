import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';

import { TasksService } from './services/tasks.service';
import { CreateNewComponent } from './create-new/create-new.component';

import { FormsModule } from '@angular/forms';
import { CreateFormComponent } from './create-form/create-form.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    CreateNewComponent,
    CreateFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
