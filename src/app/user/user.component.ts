import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() nom = '';

  @Output() addItemEvent = new EventEmitter<number>();

  addItem() {
    this.addItemEvent.emit(1);
  }

}
