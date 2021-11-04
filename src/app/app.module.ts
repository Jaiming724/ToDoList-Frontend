import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ContainerComponent} from './components/container/container.component';
import {TitleComponent} from './components/title/title.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {TaskItemComponent} from './components/task-item/task-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {TaskFooterComponent} from './components/task-footer/task-footer.component';
import {HttpClientModule} from "@angular/common/http";
import {AddTaskComponent} from './components/add-task/add-task.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {Route, RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [{path: '', component: ContainerComponent}]

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    TitleComponent,
    TasksComponent,
    TaskItemComponent,
    TaskFooterComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    HttpClientModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
