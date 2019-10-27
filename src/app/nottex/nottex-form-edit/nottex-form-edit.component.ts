import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Nottex } from '@app/models/nottex.model';

@Component({
  selector: 'app-nottex-form-edit',
  templateUrl: './nottex-form-edit.component.html',
  styleUrls: ['./nottex-form-edit.component.css']
})
export class NottexFormEditComponent implements OnInit {
  private _nottex: Nottex;

  nottexForm = this.fb.group({
    title: ['', Validators.required],
    text: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NottexFormEditComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {
    this._nottex = this.data['nottex'];

    this.nottexForm.setValue({
      title: this._nottex.title,
      text: this._nottex.text
    });
  }

  onEdit() {
    const nottexEdited: Nottex = {
      title: this.nottexForm.get("title").value,
      text: this.nottexForm.get("text").value,
      color: this._nottex.color,
      dateCreated: this._nottex.dateCreated,
      id: this._nottex.id
    };

    this.dialogRef.close(nottexEdited);
  }

  ngOnInit() {
  }

}
