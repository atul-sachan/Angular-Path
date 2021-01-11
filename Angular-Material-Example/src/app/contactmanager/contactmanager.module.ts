import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "../material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';

const routes: Routes = [
  {
    path: '', component: ContactmanagerAppComponent,
    children: [
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent }

    ]
  },
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [ContactmanagerAppComponent, ToolbarComponent, SidenavComponent, MainContentComponent, NotesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers:[UserService]
})
export class ContactmanagerModule { }
