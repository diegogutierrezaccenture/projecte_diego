import { Routes } from '@angular/router';

import { CommentsComponent } from './comments/comments.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {
        path: '',
        title: 'App Home Page',
        component: CommentsComponent,
    },
    {
        path: 'user',
        title: 'App User Page',
        component: UserComponent,
    },
];