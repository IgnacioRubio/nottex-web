import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
import { MatInputModule } from '@angular/material/input';

// nottex modules
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

// components
import { NottexComponent } from './nottex/nottex.component';
import { NottexListComponent } from './nottex/nottex-list/nottex-list.component';
import { NottexItemComponent } from './nottex/nottex-list/nottex-item/nottex-item.component';
import { NottexFormComponent } from './nottex/nottex-form/nottex-form.component';
import { NottexFormEditComponent } from './nottex/nottex-form-edit/nottex-form-edit.component';

// services
import { NottexService } from './services/nottex.service';
import { CommunicationService } from './services/communication.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NottexComponent,
    NottexListComponent,
    NottexItemComponent,
    NottexFormComponent,
    NottexFormEditComponent
  ],
  imports: [
    ReactiveFormsModule,
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
    MatDialogModule,
    MatInputModule
  ],
  entryComponents: [
    NottexFormComponent,
    NottexFormEditComponent
  ],
  providers: [
    NottexService,
    CommunicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
