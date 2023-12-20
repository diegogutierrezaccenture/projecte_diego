import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from "./comments/comments.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, UserComponent, CommentsComponent]
})
export class AppComponent {
  users = [{ id: 0, name: 'Sarah' }, { id: 1, name: 'Amy' }, { id: 2, name: 'Rachel' }, { id: 3, name: 'Jessica' }, { id: 4, name: 'Poornima' }];
  isEditable = true;
  message = '';

  saludar() {
    alert('Hello, there 👋')
  }

  onMouseOver() {
    this.message = 'Shhht.';
  }

  onMouseLeave() {
    this.message = '';
  }

  items = 0;

  addItem(item: number) {
    this.items += item;
  }
}
