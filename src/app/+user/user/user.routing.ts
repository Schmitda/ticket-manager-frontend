import {Routes} from '@angular/router';
import {AddEditUserComponent} from '../add-edit-user/add-edit-user.component';
import {ViewTicketComponent} from '../../+ticket/view-ticket/view-ticket.component';

export const userRoutes: Routes = [
  {
    path: 'add',
    component: AddEditUserComponent
  },
  {
    path: 'edit/:id',
    component: AddEditUserComponent
  },
  {
    path: 'list',
    component: AddEditUserComponent
  },
  {
    path: 'view/:id',
    component: ViewTicketComponent
  }
];
