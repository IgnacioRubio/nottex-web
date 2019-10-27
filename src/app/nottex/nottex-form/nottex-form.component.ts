import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';

import { Nottex } from '@app/models/nottex.model';

@Component({
  selector: 'app-nottex-form',
  templateUrl: './nottex-form.component.html',
  styleUrls: ['./nottex-form.component.css']
})
export class NottexFormComponent implements OnInit {
  nottexForm = this.fb.group({
    title: ['', Validators.required],
    text: ['', Validators.required]
  });
  
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NottexFormComponent>
  ) { }

  onSave() {
    const nottexSaved: Nottex = {
      title: this.nottexForm.get("title").value,
      text: this.nottexForm.get("text").value,
      color: 'primary',
      dateCreated: new Date()
    };

    this.dialogRef.close(nottexSaved);
  }
  
  ngOnInit() {
  }

}
