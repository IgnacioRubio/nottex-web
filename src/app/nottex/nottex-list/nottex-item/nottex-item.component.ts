import { Component, OnInit, Input } from '@angular/core';

import { Nottex } from 'src/app/models/nottex.model';

@Component({
  selector: 'app-nottex-item',
  templateUrl: './nottex-item.component.html',
  styleUrls: ['./nottex-item.component.css']
})
export class NottexItemComponent implements OnInit {
  @Input() nottex: Nottex;

  constructor() { }

  ngOnInit() {
  }

}
