import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuSidebarComponent } from './layout/menu-sidebar/menu-sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MessagesDropdownMenuComponent } from './layout/header/messages-dropdown-menu/messages-dropdown-menu.component';
import { NotificationsDropdownMenuComponent } from './layout/header/notifications-dropdown-menu/notifications-dropdown-menu.component';
import { UserDropdownMenuComponent } from './layout/header/user-dropdown-menu/user-dropdown-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MenuSidebarComponent,
    FooterComponent,
    MessagesDropdownMenuComponent,
    NotificationsDropdownMenuComponent,
    UserDropdownMenuComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [LayoutComponent],
  providers: [],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<NgModule> {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
