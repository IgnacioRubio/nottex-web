import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';

// nottex modules
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { NottexComponent } from './nottex/nottex.component';
import { NottexListComponent } from './nottex/nottex-list/nottex-list.component';
import { NottexItemComponent } from './nottex/nottex-list/nottex-item/nottex-item.component';
import { NottexEditComponent } from './nottex/nottex-edit/nottex-edit.component';
import { NottexAddComponent } from './nottex/nottex-add/nottex-add.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NottexComponent,
    NottexListComponent,
    NottexItemComponent,
    NottexEditComponent,
    NottexAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
