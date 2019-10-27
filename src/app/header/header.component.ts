import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { NottexFormComponent } from '../nottex/nottex-form/nottex-form.component';

import { CommunicationService } from '@app/services/communication.service';

import { NottexService } from '@app/services/nottex.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private nottexService: NottexService,
    private communicationService: CommunicationService 
  ) { }

  ngOnInit() {
  }

  onAddNottex() {
    // open dialog for adding
    let dialogRef = this.dialog.open(NottexFormComponent, {
      height: '400px',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.nottexService.createNottex(result).subscribe(
          () => this.communicationService.nottexAdded(),
          err => console.error(err)
        );
      }
    });
  }
}
