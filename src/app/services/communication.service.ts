import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  @Output() nottexAddedSource = new EventEmitter<void>();

  nottexAdded() {
    this.nottexAddedSource.emit();
  }
}
