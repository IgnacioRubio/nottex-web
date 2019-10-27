import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { NottexFormEditComponent } from '@app/nottex/nottex-form-edit/nottex-form-edit.component';

import { NottexService } from '@app/services/nottex.service';
import { Nottex } from '@app/models/nottex.model';


@Component({
  selector: 'app-nottex-item',
  templateUrl: './nottex-item.component.html',
  styleUrls: ['./nottex-item.component.css']
})
export class NottexItemComponent implements OnInit {
  @Input() nottex: Nottex;
  @Output() delete = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();

  constructor(
    private dialog: MatDialog,
    private nottexService: NottexService
  ) { }

  onEdit(nottex: Nottex) {
    // open dialog for editing
    let dialogRef = this.dialog.open(NottexFormEditComponent, {
      height: '400px',
      width: '600px',
      data: {nottex: nottex}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.nottexService.updateNottex(result).subscribe(
          () => this.edit.emit(),
          err => console.error(err)
        );
      }
    });
  }

  onDelete(id: number) {
    this.nottexService.deleteNottex(id).subscribe(
      () => this.delete.emit(),
      err => console.error(err)
    );
  }
  
  ngOnInit() {
  }

}
