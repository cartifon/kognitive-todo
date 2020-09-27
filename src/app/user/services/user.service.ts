import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { TaskEntity } from './task.entity';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  taskListResponse: { message: string, data: any[] };
  constructor() {
    this.initializeTaskList();
  }

  getTaskList(): Observable<{message: string, data: TaskEntity[]}> {
    return of(this.taskListResponse);
  }

  initializeTaskList(): void {

    this.taskListResponse = {
      message: 'Success',
      data: [
        {
          id: 278,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-01',
          due_dt: '2019-06-01',
          reminder_dt: '2019-06-01',
          status: 'Done',
          attr: {
            description: 'Punch In',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 279,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-01',
          due_dt: '2019-06-01',
          reminder_dt: '2019-06-01',
          status: 'Done',
          attr: {
            description: 'Setup LDU',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 280,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-01',
          due_dt: '2019-06-01',
          reminder_dt: '2019-06-01',
          status: 'Done',
          attr: {
            description: 'Check daily communication on Connect',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 281,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-01',
          due_dt: '2019-06-01',
          reminder_dt: '2019-06-01',
          status: 'Done',
          attr: {
            description: 'Update prices & signage change',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 282,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-01',
          due_dt: '2019-06-01',
          reminder_dt: '2019-06-01',
          status: 'Done',
          attr: {
            description: 'Complete daily quiz on Fusion',
            priority: 'High',
            label: [
              'learning'
            ]
          }
        },
        {
          id: 283,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-01',
          due_dt: '2019-06-01',
          reminder_dt: '2019-06-01',
          status: 'Done',
          attr: {
            description: 'Update Freedom Central Board',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 284,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-01',
          due_dt: '2019-06-01',
          reminder_dt: '2019-06-01',
          status: 'Done',
          attr: {
            description: 'Remove LDU',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 285,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-01',
          due_dt: '2019-06-01',
          reminder_dt: '2019-06-01',
          status: 'Done',
          attr: {
            description: 'Clean store',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 286,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-01',
          due_dt: '2019-06-01',
          reminder_dt: '2019-06-01',
          status: 'Done',
          attr: {
            description: 'Punch Out',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 287,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-01',
          due_dt: '2019-06-01',
          reminder_dt: '2019-06-01',
          status: 'Done',
          attr: {
            description: 'Lock safe & door / Activate alarm',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 288,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-01',
          due_dt: '2019-06-01',
          reminder_dt: '2019-06-01',
          status: 'Done',
          attr: {
            description: 'Punch In',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 289,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-01',
          due_dt: '2019-06-01',
          reminder_dt: '2019-06-01',
          status: 'Done',
          attr: {
            description: 'Setup LDU',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 290,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-01',
          due_dt: '2019-06-01',
          reminder_dt: '2019-06-01',
          status: 'Done',
          attr: {
            description: 'Check daily communication on Connect',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 291,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-01',
          due_dt: '2019-06-01',
          reminder_dt: '2019-06-01',
          status: 'Done',
          attr: {
            description: 'Update prices & signage change',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 292,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-01',
          due_dt: '2019-06-01',
          reminder_dt: '2019-06-01',
          status: 'Done',
          attr: {
            description: 'Complete daily quiz on Fusion',
            priority: 'High',
            label: [
              'learning'
            ]
          }
        },
        {
          id: 293,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-01',
          due_dt: '2019-06-01',
          reminder_dt: '2019-06-01',
          status: 'Done',
          attr: {
            description: 'Update Freedom Central Board',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 294,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-01',
          due_dt: '2019-06-01',
          reminder_dt: '2019-06-01',
          status: 'Done',
          attr: {
            description: 'Remove LDU',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 295,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-01',
          due_dt: '2019-06-01',
          reminder_dt: '2019-06-01',
          status: 'Done',
          attr: {
            description: 'Clean store',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 296,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-01',
          due_dt: '2019-06-01',
          reminder_dt: '2019-06-01',
          status: 'Done',
          attr: {
            description: 'Punch Out',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 297,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-01',
          due_dt: '2019-06-01',
          reminder_dt: '2019-06-01',
          status: 'Done',
          attr: {
            description: 'Lock safe & door / Activate alarm',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 298,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-02',
          due_dt: '2019-06-02',
          reminder_dt: '2019-06-02',
          status: 'Done',
          attr: {
            description: 'Punch In',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 299,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-02',
          due_dt: '2019-06-02',
          reminder_dt: '2019-06-02',
          status: 'Done',
          attr: {
            description: 'Setup LDU',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 300,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-02',
          due_dt: '2019-06-02',
          reminder_dt: '2019-06-02',
          status: 'Done',
          attr: {
            description: 'Check daily communication on Connect',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 301,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-02',
          due_dt: '2019-06-02',
          reminder_dt: '2019-06-02',
          status: 'Dismissed',
          attr: {
            description: 'Update prices & signage change',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 302,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-02',
          due_dt: '2019-06-02',
          reminder_dt: '2019-06-02',
          status: 'Done',
          attr: {
            description: 'Complete daily quiz on Fusion',
            priority: 'High',
            label: [
              'learning'
            ]
          }
        },
        {
          id: 303,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-02',
          due_dt: '2019-06-02',
          reminder_dt: '2019-06-02',
          status: 'Done',
          attr: {
            description: 'Update Freedom Central Board',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 304,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-02',
          due_dt: '2019-06-02',
          reminder_dt: '2019-06-02',
          status: 'Done',
          attr: {
            description: 'Remove LDU',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 305,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-02',
          due_dt: '2019-06-02',
          reminder_dt: '2019-06-02',
          status: 'Done',
          attr: {
            description: 'Clean store',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 306,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-02',
          due_dt: '2019-06-02',
          reminder_dt: '2019-06-02',
          status: 'Done',
          attr: {
            description: 'Punch Out',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 307,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-02',
          due_dt: '2019-06-02',
          reminder_dt: '2019-06-02',
          status: 'Done',
          attr: {
            description: 'Lock safe & door / Activate alarm',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 308,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-02',
          due_dt: '2019-06-02',
          reminder_dt: '2019-06-02',
          status: 'Done',
          attr: {
            description: 'Punch In',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 309,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-02',
          due_dt: '2019-06-02',
          reminder_dt: '2019-06-02',
          status: 'Done',
          attr: {
            description: 'Setup LDU',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 310,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-02',
          due_dt: '2019-06-02',
          reminder_dt: '2019-06-02',
          status: 'Done',
          attr: {
            description: 'Check daily communication on Connect',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 311,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-02',
          due_dt: '2019-06-02',
          reminder_dt: '2019-06-02',
          status: 'Done',
          attr: {
            description: 'Update prices & signage change',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 312,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-02',
          due_dt: '2019-06-02',
          reminder_dt: '2019-06-02',
          status: 'Done',
          attr: {
            description: 'Complete daily quiz on Fusion',
            priority: 'High',
            label: [
              'learning'
            ]
          }
        },
        {
          id: 313,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-02',
          due_dt: '2019-06-02',
          reminder_dt: '2019-06-02',
          status: 'Done',
          attr: {
            description: 'Update Freedom Central Board',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 314,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-02',
          due_dt: '2019-06-02',
          reminder_dt: '2019-06-02',
          status: 'Done',
          attr: {
            description: 'Remove LDU',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 315,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-02',
          due_dt: '2019-06-02',
          reminder_dt: '2019-06-02',
          status: 'Done',
          attr: {
            description: 'Clean store',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 316,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-02',
          due_dt: '2019-06-02',
          reminder_dt: '2019-06-02',
          status: 'Done',
          attr: {
            description: 'Punch Out',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 317,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-02',
          due_dt: '2019-06-02',
          reminder_dt: '2019-06-02',
          status: 'Done',
          attr: {
            description: 'Lock safe & door / Activate alarm',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 318,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-03',
          due_dt: '2019-06-03',
          reminder_dt: '2019-06-03',
          status: 'Done',
          attr: {
            description: 'Punch In',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 319,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-03',
          due_dt: '2019-06-03',
          reminder_dt: '2019-06-03',
          status: 'Done',
          attr: {
            description: 'Setup LDU',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 320,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-03',
          due_dt: '2019-06-03',
          reminder_dt: '2019-06-03',
          status: 'Done',
          attr: {
            description: 'Check daily communication on Connect',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 321,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-03',
          due_dt: '2019-06-03',
          reminder_dt: '2019-06-03',
          status: 'Done',
          attr: {
            description: 'Update prices & signage change',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 322,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-03',
          due_dt: '2019-06-03',
          reminder_dt: '2019-06-03',
          status: 'Done',
          attr: {
            description: 'Complete daily quiz on Fusion',
            priority: 'High',
            label: [
              'learning'
            ]
          }
        },
        {
          id: 323,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-03',
          due_dt: '2019-06-03',
          reminder_dt: '2019-06-03',
          status: 'Done',
          attr: {
            description: 'Update Freedom Central Board',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 324,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-03',
          due_dt: '2019-06-03',
          reminder_dt: '2019-06-03',
          status: 'Done',
          attr: {
            description: 'Remove LDU',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 325,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-03',
          due_dt: '2019-06-03',
          reminder_dt: '2019-06-03',
          status: 'Done',
          attr: {
            description: 'Clean store',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 326,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-03',
          due_dt: '2019-06-03',
          reminder_dt: '2019-06-03',
          status: 'Done',
          attr: {
            description: 'Punch Out',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 327,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-03',
          due_dt: '2019-06-03',
          reminder_dt: '2019-06-03',
          status: 'Done',
          attr: {
            description: 'Lock safe & door / Activate alarm',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 328,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-03',
          due_dt: '2019-06-03',
          reminder_dt: '2019-06-03',
          status: 'Done',
          attr: {
            description: 'Punch In',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 329,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-03',
          due_dt: '2019-06-03',
          reminder_dt: '2019-06-03',
          status: 'Done',
          attr: {
            description: 'Setup LDU',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 330,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-03',
          due_dt: '2019-06-03',
          reminder_dt: '2019-06-03',
          status: 'Done',
          attr: {
            description: 'Check daily communication on Connect',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 331,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-03',
          due_dt: '2019-06-03',
          reminder_dt: '2019-06-03',
          status: 'Done',
          attr: {
            description: 'Update prices & signage change',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 332,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-03',
          due_dt: '2019-06-03',
          reminder_dt: '2019-06-03',
          status: 'Done',
          attr: {
            description: 'Complete daily quiz on Fusion',
            priority: 'High',
            label: [
              'learning'
            ]
          }
        },
        {
          id: 333,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-03',
          due_dt: '2019-06-03',
          reminder_dt: '2019-06-03',
          status: 'Done',
          attr: {
            description: 'Update Freedom Central Board',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 334,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-03',
          due_dt: '2019-06-03',
          reminder_dt: '2019-06-03',
          status: 'Done',
          attr: {
            description: 'Remove LDU',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 335,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-03',
          due_dt: '2019-06-03',
          reminder_dt: '2019-06-03',
          status: 'Done',
          attr: {
            description: 'Clean store',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 336,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-03',
          due_dt: '2019-06-03',
          reminder_dt: '2019-06-03',
          status: 'Done',
          attr: {
            description: 'Punch Out',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 337,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-03',
          due_dt: '2019-06-03',
          reminder_dt: '2019-06-03',
          status: 'Done',
          attr: {
            description: 'Lock safe & door / Activate alarm',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 338,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-04',
          due_dt: '2019-06-04',
          reminder_dt: '2019-06-04',
          status: 'Done',
          attr: {
            description: 'Punch In',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 339,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-04',
          due_dt: '2019-06-04',
          reminder_dt: '2019-06-04',
          status: 'Done',
          attr: {
            description: 'Setup LDU',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 340,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-04',
          due_dt: '2019-06-04',
          reminder_dt: '2019-06-04',
          status: 'Done',
          attr: {
            description: 'Check daily communication on Connect',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 341,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-04',
          due_dt: '2019-06-04',
          reminder_dt: '2019-06-04',
          status: 'Done',
          attr: {
            description: 'Update prices & signage change',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 342,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-04',
          due_dt: '2019-06-04',
          reminder_dt: '2019-06-04',
          status: 'Done',
          attr: {
            description: 'Complete daily quiz on Fusion',
            priority: 'High',
            label: [
              'learning'
            ]
          }
        },
        {
          id: 343,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-04',
          due_dt: '2019-06-04',
          reminder_dt: '2019-06-04',
          status: 'Done',
          attr: {
            description: 'Update Freedom Central Board',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 344,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-04',
          due_dt: '2019-06-04',
          reminder_dt: '2019-06-04',
          status: 'Done',
          attr: {
            description: 'Remove LDU',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 345,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-04',
          due_dt: '2019-06-04',
          reminder_dt: '2019-06-04',
          status: 'Done',
          attr: {
            description: 'Clean store',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 346,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-04',
          due_dt: '2019-06-04',
          reminder_dt: '2019-06-04',
          status: 'Done',
          attr: {
            description: 'Punch Out',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 347,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-04',
          due_dt: '2019-06-04',
          reminder_dt: '2019-06-04',
          status: 'Done',
          attr: {
            description: 'Lock safe & door / Activate alarm',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 348,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-04',
          due_dt: '2019-06-04',
          reminder_dt: '2019-06-04',
          status: 'Done',
          attr: {
            description: 'Punch In',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 349,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-04',
          due_dt: '2019-06-04',
          reminder_dt: '2019-06-04',
          status: 'Done',
          attr: {
            description: 'Setup LDU',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 350,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-04',
          due_dt: '2019-06-04',
          reminder_dt: '2019-06-04',
          status: 'Done',
          attr: {
            description: 'Check daily communication on Connect',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 351,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-04',
          due_dt: '2019-06-04',
          reminder_dt: '2019-06-04',
          status: 'Done',
          attr: {
            description: 'Update prices & signage change',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 352,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-04',
          due_dt: '2019-06-04',
          reminder_dt: '2019-06-04',
          status: 'Done',
          attr: {
            description: 'Complete daily quiz on Fusion',
            priority: 'High',
            label: [
              'learning'
            ]
          }
        },
        {
          id: 353,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-04',
          due_dt: '2019-06-04',
          reminder_dt: '2019-06-04',
          status: 'Done',
          attr: {
            description: 'Update Freedom Central Board',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 354,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-04',
          due_dt: '2019-06-04',
          reminder_dt: '2019-06-04',
          status: 'Done',
          attr: {
            description: 'Remove LDU',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 355,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-04',
          due_dt: '2019-06-04',
          reminder_dt: '2019-06-04',
          status: 'Done',
          attr: {
            description: 'Clean store',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 356,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-04',
          due_dt: '2019-06-04',
          reminder_dt: '2019-06-04',
          status: 'Done',
          attr: {
            description: 'Punch Out',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 357,
          creator: '1327',
          owner: '1327',
          assignee: '1327',
          parent_id: null,
          start_dt: '2019-06-04',
          due_dt: '2019-06-04',
          reminder_dt: '2019-06-04',
          status: 'Done',
          attr: {
            description: 'Lock safe & door / Activate alarm',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 358,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-05',
          due_dt: '2019-06-05',
          reminder_dt: '2019-06-05',
          status: 'Done',
          attr: {
            description: 'Punch In',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 359,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-05',
          due_dt: '2019-06-05',
          reminder_dt: '2019-06-05',
          status: 'Done',
          attr: {
            description: 'Setup LDU',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 360,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-05',
          due_dt: '2019-06-05',
          reminder_dt: '2019-06-05',
          status: 'Done',
          attr: {
            description: 'Check daily communication on Connect',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 361,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-05',
          due_dt: '2019-06-05',
          reminder_dt: '2019-06-05',
          status: 'Done',
          attr: {
            description: 'Update prices & signage change',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 362,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-05',
          due_dt: '2019-06-05',
          reminder_dt: '2019-06-05',
          status: 'Done',
          attr: {
            description: 'Complete daily quiz on Fusion',
            priority: 'High',
            label: [
              'learning'
            ]
          }
        },
        {
          id: 363,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-05',
          due_dt: '2019-06-05',
          reminder_dt: '2019-06-05',
          status: 'Done',
          attr: {
            description: 'Update Freedom Central Board',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 364,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-05',
          due_dt: '2019-06-05',
          reminder_dt: '2019-06-05',
          status: 'Done',
          attr: {
            description: 'Remove LDU',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 365,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-05',
          due_dt: '2019-06-05',
          reminder_dt: '2019-06-05',
          status: 'Done',
          attr: {
            description: 'Clean store',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 366,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-05',
          due_dt: '2019-06-05',
          reminder_dt: '2019-06-05',
          status: 'Done',
          attr: {
            description: 'Punch Out',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 367,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-05',
          due_dt: '2019-06-05',
          reminder_dt: '2019-06-05',
          status: 'Done',
          attr: {
            description: 'Lock safe & door / Activate alarm',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 368,
          creator: '1327',
          owner: '1327',
          assignee: '1327',
          parent_id: '357',
          start_dt: '2019-06-05',
          due_dt: '2019-06-05',
          reminder_dt: '2019-06-05',
          status: 'Done',
          attr: {
            description: 'Punch In v2',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 369,
          creator: '1327',
          owner: '1327',
          assignee: '1327',
          parent_id: '357',
          start_dt: '2019-06-05',
          due_dt: '2019-06-05',
          reminder_dt: '2019-06-05',
          status: 'Done',
          attr: {
            description: 'Setup LDU',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 370,
          creator: '1327',
          owner: '1327',
          assignee: '1327',
          parent_id: '357',
          start_dt: '2019-06-05',
          due_dt: '2019-06-05',
          reminder_dt: '2019-06-05',
          status: 'Done',
          attr: {
            description: 'Check daily communication on Connect',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 371,
          creator: '1327',
          owner: '1327',
          assignee: '1327',
          parent_id: '357',
          start_dt: '2019-06-05',
          due_dt: '2019-06-05',
          reminder_dt: '2019-06-05',
          status: 'Done',
          attr: {
            description: 'Update prices & signage change',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 372,
          creator: '1327',
          owner: '1327',
          assignee: '1327',
          parent_id: '357',
          start_dt: '2019-06-05',
          due_dt: '2019-06-05',
          reminder_dt: '2019-06-05',
          status: 'Done',
          attr: {
            description: 'Complete daily quiz on Fusion',
            priority: 'High',
            label: [
              'learning'
            ]
          }
        },
        {
          id: 373,
          creator: '1327',
          owner: '1327',
          assignee: '1327',
          parent_id: '357',
          start_dt: '2019-06-05',
          due_dt: '2019-06-05',
          reminder_dt: '2019-06-05',
          status: 'Done',
          attr: {
            description: 'Update Freedom Central Board',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 374,
          creator: '1327',
          owner: '1327',
          assignee: '1327',
          parent_id: '357',
          start_dt: '2019-06-05',
          due_dt: '2019-06-05',
          reminder_dt: '2019-06-05',
          status: 'Done',
          attr: {
            description: 'Remove LDU',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 375,
          creator: '1327',
          owner: '1327',
          assignee: '1327',
          parent_id: '357',
          start_dt: '2019-06-05',
          due_dt: '2019-06-05',
          reminder_dt: '2019-06-05',
          status: 'Done',
          attr: {
            description: 'Clean store',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 376,
          creator: '1327',
          owner: '1327',
          assignee: '1327',
          parent_id: '357',
          start_dt: '2019-06-05',
          due_dt: '2019-06-05',
          reminder_dt: '2019-06-05',
          status: 'Done',
          attr: {
            description: 'Punch Out',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 377,
          creator: '1327',
          owner: '1327',
          assignee: '1327',
          parent_id: '357',
          start_dt: '2019-06-05',
          due_dt: '2019-06-05',
          reminder_dt: '2019-06-05',
          status: 'Done',
          attr: {
            description: 'Lock safe & door / Activate alarm',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 378,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-06',
          due_dt: '2019-06-06',
          reminder_dt: '2019-06-06',
          status: 'Done',
          attr: {
            description: 'Punch In',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 379,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-06',
          due_dt: '2019-06-06',
          reminder_dt: '2019-06-06',
          status: 'Done',
          attr: {
            description: 'Setup LDU',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 380,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-06',
          due_dt: '2019-06-06',
          reminder_dt: '2019-06-06',
          status: 'Dismissed',
          attr: {
            description: 'Check daily communication on Connect',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 381,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-06',
          due_dt: '2019-06-06',
          reminder_dt: '2019-06-06',
          status: 'Dismissed',
          attr: {
            description: 'Update prices & signage change',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 382,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-06',
          due_dt: '2019-06-06',
          reminder_dt: '2019-06-06',
          status: 'Dismissed',
          attr: {
            description: 'Complete daily quiz on Fusion',
            priority: 'High',
            label: [
              'learning'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 383,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-06',
          due_dt: '2019-06-06',
          reminder_dt: '2019-06-06',
          status: 'Dismissed',
          attr: {
            description: 'Update Freedom Central Board',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 384,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-06',
          due_dt: '2019-06-06',
          reminder_dt: '2019-06-06',
          status: 'Dismissed',
          attr: {
            description: 'Remove LDU',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 385,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-06',
          due_dt: '2019-06-06',
          reminder_dt: '2019-06-06',
          status: 'Dismissed',
          attr: {
            description: 'Clean store',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 386,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-06',
          due_dt: '2019-06-06',
          reminder_dt: '2019-06-06',
          status: 'Dismissed',
          attr: {
            description: 'Punch Out',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 387,
          creator: '35',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2019-06-06',
          due_dt: '2019-06-06',
          reminder_dt: '2019-06-06',
          status: 'Dismissed',
          attr: {
            description: 'Lock safe & door / Activate alarm',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 388,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-06',
          due_dt: '2019-06-06',
          reminder_dt: '2019-06-06',
          status: 'Done',
          attr: {
            description: 'Punch In',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 389,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-06',
          due_dt: '2019-06-06',
          reminder_dt: '2019-06-06',
          status: 'Done',
          attr: {
            description: 'Setup LDU',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 390,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-06',
          due_dt: '2019-06-06',
          reminder_dt: '2019-06-06',
          status: 'Done',
          attr: {
            description: 'Check daily communication on Connect',
            priority: 'High',
            label: [
              'admin'
            ]
          }
        },
        {
          id: 391,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-06',
          due_dt: '2019-06-06',
          reminder_dt: '2019-06-06',
          status: 'Done',
          attr: {
            description: 'Update prices & signage change',
            priority: 'High',
            label: [
              'maintenance'
            ]
          }
        },
        {
          id: 392,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-06',
          due_dt: '2019-06-06',
          reminder_dt: '2019-06-06',
          status: 'Done',
          attr: {
            description: 'Complete daily quiz on Fusion',
            priority: 'High',
            label: [
              'learning'
            ]
          }
        },
        {
          id: 393,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-06',
          due_dt: '2019-06-06',
          reminder_dt: '2019-06-06',
          status: 'Done',
          attr: {
            description: 'Update Freedom Central Board',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 394,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-06',
          due_dt: '2019-06-06',
          reminder_dt: '2019-06-06',
          status: 'Done',
          attr: {
            description: 'Remove LDU',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 395,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-06',
          due_dt: '2019-06-06',
          reminder_dt: '2019-06-06',
          status: 'Done',
          attr: {
            description: 'Clean store',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 396,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-06',
          due_dt: '2019-06-06',
          reminder_dt: '2019-06-06',
          status: 'Done',
          attr: {
            description: 'Punch Out',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 397,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-06-06',
          due_dt: '2019-06-06',
          reminder_dt: '2019-06-06',
          status: 'Done',
          attr: {
            description: 'Lock safe & door / Activate alarm',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 398,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-07',
          due_dt: '2019-06-07',
          reminder_dt: '2019-06-07',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Punch In',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 399,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-07',
          due_dt: '2019-06-07',
          reminder_dt: '2019-06-07',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Setup LDU',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 400,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-07',
          due_dt: '2019-06-07',
          reminder_dt: '2019-06-07',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Check daily communication on Connect',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 401,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-07',
          due_dt: '2019-06-07',
          reminder_dt: '2019-06-07',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Update prices & signage change',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 402,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-07',
          due_dt: '2019-06-07',
          reminder_dt: '2019-06-07',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Complete daily quiz on Fusion',
            priority: 'High',
            label: [
              'learning'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 403,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-07',
          due_dt: '2019-06-07',
          reminder_dt: '2019-06-07',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Update Freedom Central Board',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 404,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-07',
          due_dt: '2019-06-07',
          reminder_dt: '2019-06-07',
          status: 'Pending',
          attr: {
            rollover: 1,
            description: 'Contract & Invoices audit 2019-06-07',
            priority: 'High',
            label: [
              'admin',
              'manager'
            ]
          }
        },
        {
          id: 405,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-07',
          due_dt: '2019-06-07',
          reminder_dt: '2019-06-07',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Remove LDU',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 406,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-07',
          due_dt: '2019-06-07',
          reminder_dt: '2019-06-07',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Clean store',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 407,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-07',
          due_dt: '2019-06-07',
          reminder_dt: '2019-06-07',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Punch Out',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 408,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-07',
          due_dt: '2019-06-07',
          reminder_dt: '2019-06-07',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Lock safe & door / Activate alarm',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 409,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-08',
          due_dt: '2019-06-08',
          reminder_dt: '2019-06-08',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Punch In',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 410,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-08',
          due_dt: '2019-06-08',
          reminder_dt: '2019-06-08',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Setup LDU',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 411,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-08',
          due_dt: '2019-06-08',
          reminder_dt: '2019-06-08',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Check daily communication on Connect',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 412,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-08',
          due_dt: '2019-06-08',
          reminder_dt: '2019-06-08',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Update prices & signage change',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 413,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-08',
          due_dt: '2019-06-08',
          reminder_dt: '2019-06-08',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Complete daily quiz on Fusion',
            priority: 'High',
            label: [
              'learning'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 414,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-08',
          due_dt: '2019-06-08',
          reminder_dt: '2019-06-08',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Update Freedom Central Board',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 415,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-08',
          due_dt: '2019-06-08',
          reminder_dt: '2019-06-08',
          status: 'Pending',
          attr: {
            rollover: 1,
            description: 'Contract & Invoices audit 2019-06-08',
            priority: 'High',
            label: [
              'admin',
              'manager'
            ]
          }
        },
        {
          id: 416,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-08',
          due_dt: '2019-06-08',
          reminder_dt: '2019-06-08',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Remove LDU',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 417,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-08',
          due_dt: '2019-06-08',
          reminder_dt: '2019-06-08',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Clean store',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 418,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-08',
          due_dt: '2019-06-08',
          reminder_dt: '2019-06-08',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Punch Out',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 419,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-08',
          due_dt: '2019-06-08',
          reminder_dt: '2019-06-08',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Lock safe & door / Activate alarm',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 420,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-09',
          due_dt: '2019-06-09',
          reminder_dt: '2019-06-09',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Punch In',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 421,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-09',
          due_dt: '2019-06-09',
          reminder_dt: '2019-06-09',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Setup LDU',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 422,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-09',
          due_dt: '2019-06-09',
          reminder_dt: '2019-06-09',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Check daily communication on Connect',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 423,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-09',
          due_dt: '2019-06-09',
          reminder_dt: '2019-06-09',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Update prices & signage change',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 424,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-09',
          due_dt: '2019-06-09',
          reminder_dt: '2019-06-09',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Complete daily quiz on Fusion',
            priority: 'High',
            label: [
              'learning'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 425,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-09',
          due_dt: '2019-06-09',
          reminder_dt: '2019-06-09',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Update Freedom Central Board',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 427,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-09',
          due_dt: '2019-06-09',
          reminder_dt: '2019-06-09',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Remove LDU',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 428,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-09',
          due_dt: '2019-06-09',
          reminder_dt: '2019-06-09',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Clean store',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 429,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-09',
          due_dt: '2019-06-09',
          reminder_dt: '2019-06-09',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Punch Out',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 430,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-09',
          due_dt: '2019-06-09',
          reminder_dt: '2019-06-09',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Lock safe & door / Activate alarm',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 442,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-11',
          due_dt: '2019-06-11',
          reminder_dt: '2019-06-11',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Punch In',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 443,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-11',
          due_dt: '2019-06-11',
          reminder_dt: '2019-06-11',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Setup LDU',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 444,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-11',
          due_dt: '2019-06-11',
          reminder_dt: '2019-06-11',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Check daily communication on Connect',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 445,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-11',
          due_dt: '2019-06-11',
          reminder_dt: '2019-06-11',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Update prices & signage change',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 446,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-11',
          due_dt: '2019-06-11',
          reminder_dt: '2019-06-11',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Complete daily quiz on Fusion',
            priority: 'High',
            label: [
              'learning'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 447,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-11',
          due_dt: '2019-06-11',
          reminder_dt: '2019-06-11',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Update Freedom Central Board',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 449,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-11',
          due_dt: '2019-06-11',
          reminder_dt: '2019-06-11',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Remove LDU',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 450,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-11',
          due_dt: '2019-06-11',
          reminder_dt: '2019-06-11',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Clean store',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 451,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-11',
          due_dt: '2019-06-11',
          reminder_dt: '2019-06-11',
          status: 'Done',
          attr: {
            rollover: 0,
            description: 'Punch Out',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 452,
          creator: '1254',
          owner: '1254',
          assignee: '1254',
          parent_id: null,
          start_dt: '2019-06-11',
          due_dt: '2019-06-11',
          reminder_dt: '2019-06-11',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Lock safe & door / Activate alarm',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 426,
          creator: '45',
          owner: '45',
          assignee: '45',
          parent_id: null,
          start_dt: '2019-07-11',
          due_dt: '2019-07-11',
          reminder_dt: '2019-07-11',
          status: 'Done',
          attr: {
            rollover: 1,
            description: 'Contract & Invoices audit 2019-07-11',
            priority: 'High',
            label: [
              'admin',
              'manager'
            ]
          }
        },
        {
          id: 448,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-07-11',
          due_dt: '2019-07-11',
          reminder_dt: '2019-07-11',
          status: 'Done',
          attr: {
            rollover: 1,
            description: 'Contract & Invoices audit 2019-07-11',
            priority: 'High',
            label: [
              'admin',
              'manager'
            ]
          }
        },
        {
          id: 431,
          creator: '45',
          owner: '45',
          assignee: '45',
          parent_id: null,
          start_dt: '2019-07-16',
          due_dt: '2019-07-16',
          reminder_dt: '2019-07-16',
          status: 'Done',
          attr: {
            rollover: 0,
            description: 'Punch In',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 432,
          creator: '45',
          owner: '45',
          assignee: '45',
          parent_id: null,
          start_dt: '2019-07-16',
          due_dt: '2019-07-16',
          reminder_dt: '2019-07-16',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Setup LDU',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 433,
          creator: '45',
          owner: '45',
          assignee: '45',
          parent_id: null,
          start_dt: '2019-07-16',
          due_dt: '2019-07-16',
          reminder_dt: '2019-07-16',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Check daily communication on Connect',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 434,
          creator: '45',
          owner: '45',
          assignee: '45',
          parent_id: null,
          start_dt: '2019-07-16',
          due_dt: '2019-07-16',
          reminder_dt: '2019-07-16',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Update prices & signage change',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 435,
          creator: '45',
          owner: '45',
          assignee: '45',
          parent_id: null,
          start_dt: '2019-07-16',
          due_dt: '2019-07-16',
          reminder_dt: '2019-07-16',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Complete daily quiz on Fusion',
            priority: 'High',
            label: [
              'learning'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 436,
          creator: '45',
          owner: '45',
          assignee: '45',
          parent_id: null,
          start_dt: '2019-07-16',
          due_dt: '2019-07-16',
          reminder_dt: '2019-07-16',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Update Freedom Central Board',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 437,
          creator: '45',
          owner: '45',
          assignee: '45',
          parent_id: null,
          start_dt: '2019-07-16',
          due_dt: '2019-07-16',
          reminder_dt: '2019-07-16',
          status: 'Done',
          attr: {
            rollover: 1,
            description: 'Contract & Invoices audit 2019-07-12',
            priority: 'High',
            label: [
              'admin',
              'manager'
            ]
          }
        },
        {
          id: 438,
          creator: '45',
          owner: '45',
          assignee: '45',
          parent_id: null,
          start_dt: '2019-07-16',
          due_dt: '2019-07-16',
          reminder_dt: '2019-07-16',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Remove LDU',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 439,
          creator: '45',
          owner: '45',
          assignee: '45',
          parent_id: null,
          start_dt: '2019-07-16',
          due_dt: '2019-07-16',
          reminder_dt: '2019-07-16',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Clean store',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 440,
          creator: '45',
          owner: '45',
          assignee: '45',
          parent_id: null,
          start_dt: '2019-07-16',
          due_dt: '2019-07-16',
          reminder_dt: '2019-07-16',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Punch Out',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 441,
          creator: '45',
          owner: '45',
          assignee: '45',
          parent_id: null,
          start_dt: '2019-07-16',
          due_dt: '2019-07-16',
          reminder_dt: '2019-07-16',
          status: 'Dismissed',
          attr: {
            rollover: 0,
            description: 'Lock safe & door / Activate alarm',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 453,
          creator: '39',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2019-07-30',
          due_dt: '2019-07-30',
          reminder_dt: '2019-07-30',
          status: 'Done',
          attr: {
            rollover: 0,
            description: 'Punch In',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 454,
          creator: '39',
          owner: '39',
          assignee: '1333',
          parent_id: '459',
          start_dt: '2020-02-18',
          due_dt: '2020-02-18',
          reminder_dt: '2019-02-11',
          status: 'Done',
          attr: {
            rollover: 0,
            description: 'Setup LDU',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 455,
          creator: '39',
          owner: '39',
          assignee: '1333',
          parent_id: '459',
          start_dt: '2020-02-18',
          due_dt: '2020-02-18',
          reminder_dt: '2020-02-18',
          status: 'Done',
          attr: {
            rollover: 0,
            description: 'Check daily communication on Connect',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 456,
          creator: '39',
          owner: '39',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-02-18',
          due_dt: '2020-02-18',
          reminder_dt: '2020-02-19',
          status: 'Done',
          attr: {
            attachments: [
              18,
              34
            ],
            description: 'Update prices & signage change',
            label: [
              'maintenance'
            ],
            priority: 'High',
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 457,
          creator: '39',
          owner: '39',
          assignee: '1333',
          parent_id: '459',
          start_dt: '2020-02-18',
          due_dt: '2020-02-18',
          reminder_dt: '2020-02-18',
          status: 'Done',
          attr: {
            rollover: 0,
            description: 'Complete daily quiz on Fusion',
            priority: 'High',
            label: [
              'learning'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 458,
          creator: '39',
          owner: '39',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-02-18',
          due_dt: '2020-02-18',
          reminder_dt: '2020-02-18',
          status: 'Done',
          attr: {
            rollover: 0,
            description: 'Update Freedom Central Board',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 459,
          creator: '39',
          owner: '39',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-02-18',
          due_dt: '2020-02-18',
          reminder_dt: '2020-02-18',
          status: 'Done',
          attr: {
            rollover: 1,
            description: 'Contract & Invoices audit 2019-07-12',
            priority: 'High',
            label: [
              'admin',
              'manager'
            ]
          }
        },
        {
          id: 460,
          creator: '39',
          owner: '39',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-02-18',
          due_dt: '2020-02-18',
          reminder_dt: '2020-02-18',
          status: 'Done',
          attr: {
            rollover: 0,
            description: 'Remove LDU',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 461,
          creator: '39',
          owner: '39',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-02-18',
          due_dt: '2020-02-18',
          reminder_dt: '2020-02-18',
          status: 'Done',
          attr: {
            rollover: 0,
            description: 'Clean store',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 462,
          creator: '39',
          owner: '39',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-02-18',
          due_dt: '2020-02-18',
          reminder_dt: '2020-02-18',
          status: 'Done',
          attr: {
            rollover: 0,
            description: 'Punch Out',
            priority: 'High',
            label: [
              'admin'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 463,
          creator: '39',
          owner: '39',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-02-18',
          due_dt: '2020-02-18',
          reminder_dt: '2020-02-18',
          status: 'Done',
          attr: {
            rollover: 0,
            description: 'Lock safe & door / Activate alarm',
            priority: 'High',
            label: [
              'maintenance'
            ],
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 474,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-20',
          due_dt: '2020-07-20',
          reminder_dt: '2020-07-20',
          status: 'Done',
          attr: {
            title: 'Complete shift 486136',
            body: 'Complete your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            type: 'timekeeping',
            shift_id: 486136
          }
        },
        {
          id: 475,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: '474',
          start_dt: '2020-07-20',
          due_dt: '2020-07-20',
          reminder_dt: '2020-07-20',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486136',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486136
          }
        },
        {
          id: 476,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: '474',
          start_dt: '2020-07-20',
          due_dt: '2020-07-20',
          reminder_dt: '2020-07-20',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486136',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486136
          }
        },
        {
          id: 477,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: '474',
          start_dt: '2020-07-20',
          due_dt: '2020-07-20',
          reminder_dt: '2020-07-20',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486136',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486136
          }
        },
        {
          id: 478,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-20',
          due_dt: '2020-07-20',
          reminder_dt: '2020-07-20',
          status: 'Done',
          attr: {
            title: 'Complete shift 486136',
            body: 'Complete your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            type: 'timekeeping',
            shift_id: 486136
          }
        },
        {
          id: 479,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-20',
          due_dt: '2020-07-20',
          reminder_dt: '2020-07-20',
          status: 'Done',
          attr: {
            title: 'Complete your orientation',
            body: 'Complete your orientation',
            label: [
              'learning'
            ],
            priority: 'High',
            points: 50,
            type: 'lms',
            enrollment_id: 4
          }
        },
        {
          id: 480,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: '478',
          start_dt: '2020-07-20',
          due_dt: '2020-07-20',
          reminder_dt: '2020-07-20',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486136',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486136
          }
        },
        {
          id: 481,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: '478',
          start_dt: '2020-07-20',
          due_dt: '2020-07-20',
          reminder_dt: '2020-07-20',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486136',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486136
          }
        },
        {
          id: 482,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: '478',
          start_dt: '2020-07-20',
          due_dt: '2020-07-20',
          reminder_dt: '2020-07-20',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486136',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486136
          }
        },
        {
          id: 483,
          creator: '0',
          owner: '45',
          assignee: '45',
          parent_id: null,
          start_dt: '2020-07-20',
          due_dt: '2020-07-20',
          reminder_dt: '2020-07-20',
          status: 'Done',
          attr: {
            title: 'Complete shift 486137',
            body: 'Complete your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            type: 'timekeeping',
            shift_id: 486137
          }
        },
        {
          id: 484,
          creator: '0',
          owner: '45',
          assignee: '45',
          parent_id: '483',
          start_dt: '2020-07-20',
          due_dt: '2020-07-20',
          reminder_dt: '2020-07-20',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486137',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486137
          }
        },
        {
          id: 485,
          creator: '0',
          owner: '45',
          assignee: '45',
          parent_id: '483',
          start_dt: '2020-07-20',
          due_dt: '2020-07-20',
          reminder_dt: '2020-07-20',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486137',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486137
          }
        },
        {
          id: 486,
          creator: '0',
          owner: '45',
          assignee: '45',
          parent_id: '483',
          start_dt: '2020-07-20',
          due_dt: '2020-07-20',
          reminder_dt: '2020-07-20',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486137',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486137
          }
        },
        {
          id: 487,
          creator: '0',
          owner: '45',
          assignee: '45',
          parent_id: null,
          start_dt: '2020-07-20',
          due_dt: '2020-07-20',
          reminder_dt: '2020-07-20',
          status: 'Done',
          attr: {
            title: 'Complete shift 486137',
            body: 'Complete your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            type: 'timekeeping',
            shift_id: 486137
          }
        },
        {
          id: 488,
          creator: '0',
          owner: '45',
          assignee: '45',
          parent_id: null,
          start_dt: '2020-07-20',
          due_dt: '2020-07-20',
          reminder_dt: '2020-07-20',
          status: 'Done',
          attr: {
            title: 'Complete your orientation',
            body: 'Complete your orientation',
            label: [
              'learning'
            ],
            priority: 'High',
            points: 50,
            type: 'lms',
            enrollment_id: 5
          }
        },
        {
          id: 489,
          creator: '0',
          owner: '45',
          assignee: '45',
          parent_id: '487',
          start_dt: '2020-07-20',
          due_dt: '2020-07-20',
          reminder_dt: '2020-07-20',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486137',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486137
          }
        },
        {
          id: 490,
          creator: '0',
          owner: '45',
          assignee: '45',
          parent_id: '487',
          start_dt: '2020-07-20',
          due_dt: '2020-07-20',
          reminder_dt: '2020-07-20',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486137',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486137
          }
        },
        {
          id: 491,
          creator: '0',
          owner: '45',
          assignee: '45',
          parent_id: '487',
          start_dt: '2020-07-20',
          due_dt: '2020-07-20',
          reminder_dt: '2020-07-20',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486137',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486137
          }
        },
        {
          id: 464,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-20',
          status: 'Done',
          attr: {
            body: 'Complete your shift',
            label: [
              'timekeeping'
            ],
            points: 0,
            priority: 'High',
            shift_id: 486134,
            title: 'Complete shift 486134',
            description: 'Complete shift 486134',
            type: 'timekeeping'
          }
        },
        {
          id: 465,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-20',
          status: 'Done',
          attr: {
            body: 'Complete Welcome to Mpwr',
            enrollment_id: 9,
            label: [
              'learning'
            ],
            points: 50,
            priority: 'High',
            title: 'Complete your next course: Welcome to Mpwr',
            type: 'lms'
          }
        },
        {
          id: 466,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: '464',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-20',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486134',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'Medium',
            points: 5,
            type: 'timekeeping',
            shift_id: 486134
          }
        },
        {
          id: 467,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: '464',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-20',
          status: 'Done',
          attr: {
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            points: 5,
            priority: 'High',
            shift_id: 486134,
            title: 'Check out of shift 486134',
            type: 'checkout'
          }
        },
        {
          id: 468,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: '464',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-20',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486134',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486134
          }
        },
        {
          id: 492,
          creator: '0',
          owner: '45',
          assignee: '45',
          parent_id: null,
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Done',
          attr: {
            title: 'Complete shift 486138',
            body: 'Complete your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            type: 'timekeeping',
            shift_id: 486138
          }
        },
        {
          id: 493,
          creator: '0',
          owner: '45',
          assignee: '45',
          parent_id: '492',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486138',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486138
          }
        },
        {
          id: 494,
          creator: '0',
          owner: '45',
          assignee: '45',
          parent_id: '492',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486138',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486138
          }
        },
        {
          id: 495,
          creator: '0',
          owner: '45',
          assignee: '45',
          parent_id: '492',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486138',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486138
          }
        },
        {
          id: 496,
          creator: '0',
          owner: '45',
          assignee: '45',
          parent_id: null,
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Done',
          attr: {
            title: 'Complete shift 486138',
            body: 'Complete your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            type: 'timekeeping',
            shift_id: 486138
          }
        },
        {
          id: 497,
          creator: '0',
          owner: '45',
          assignee: '45',
          parent_id: null,
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Done',
          attr: {
            title: 'Complete your orientation',
            body: 'Complete your orientation',
            label: [
              'learning'
            ],
            priority: 'High',
            points: 50,
            type: 'lms',
            enrollment_id: 5
          }
        },
        {
          id: 498,
          creator: '0',
          owner: '45',
          assignee: '45',
          parent_id: '496',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486138',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486138
          }
        },
        {
          id: 499,
          creator: '0',
          owner: '45',
          assignee: '45',
          parent_id: '496',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486138',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486138
          }
        },
        {
          id: 500,
          creator: '0',
          owner: '45',
          assignee: '45',
          parent_id: '496',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486138',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486138
          }
        },
        {
          id: 501,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Done',
          attr: {
            title: 'Complete shift 486139',
            body: 'Complete your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            type: 'timekeeping',
            shift_id: 486139
          }
        },
        {
          id: 502,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: '501',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Pending',
          attr: {
            title: 'Check in to shift 486139',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486139
          }
        },
        {
          id: 503,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: '501',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Pending',
          attr: {
            title: 'Check out of shift 486139',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486139
          }
        },
        {
          id: 504,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: '501',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486139',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486139
          }
        },
        {
          id: 505,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Pending',
          attr: {
            title: 'Complete shift 486139',
            body: 'Complete your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            type: 'timekeeping',
            shift_id: 486139
          }
        },
        {
          id: 506,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Pending',
          attr: {
            title: 'Complete your orientation',
            body: 'Complete your orientation',
            label: [
              'learning'
            ],
            priority: 'High',
            points: 50,
            type: 'lms',
            enrollment_id: 6
          }
        },
        {
          id: 507,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: '505',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Pending',
          attr: {
            title: 'Check in to shift 486139',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486139
          }
        },
        {
          id: 508,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: '505',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Pending',
          attr: {
            title: 'Check out of shift 486139',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486139
          }
        },
        {
          id: 509,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: '505',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486139',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486139
          }
        },
        {
          id: 510,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Done',
          attr: {
            title: 'Complete shift 486140',
            body: 'Complete your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            type: 'timekeeping',
            shift_id: 486140
          }
        },
        {
          id: 511,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: '510',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486140',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486140
          }
        },
        {
          id: 512,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: '510',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486140',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486140
          }
        },
        {
          id: 513,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: '510',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486140',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486140
          }
        },
        {
          id: 514,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Done',
          attr: {
            title: 'Complete shift 486140',
            body: 'Complete your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            type: 'timekeeping',
            shift_id: 486140
          }
        },
        {
          id: 515,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Done',
          attr: {
            title: 'Complete your orientation',
            body: 'Complete your orientation',
            label: [
              'learning'
            ],
            priority: 'High',
            points: 50,
            type: 'lms',
            enrollment_id: 4
          }
        },
        {
          id: 516,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: '514',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486140',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486140
          }
        },
        {
          id: 517,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: '514',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486140',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486140
          }
        },
        {
          id: 518,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: '514',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486140',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486140
          }
        },
        {
          id: 519,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Dismissed',
          attr: {
            title: 'Complete shift 486141',
            body: 'Complete your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            type: 'timekeeping',
            shift_id: 486141
          }
        },
        {
          id: 520,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: '519',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486141',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486141
          }
        },
        {
          id: 521,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: '519',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486141',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486141
          }
        },
        {
          id: 522,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: '519',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 486141',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486141
          }
        },
        {
          id: 523,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Dismissed',
          attr: {
            title: 'Complete shift 486141',
            body: 'Complete your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            type: 'timekeeping',
            shift_id: 486141
          }
        },
        {
          id: 524,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-27',
          status: 'Done',
          attr: {
            body: 'Complete Welcome to Mpwr',
            enrollment_id: 11,
            label: [
              'learning'
            ],
            points: 50,
            priority: 'High',
            title: 'Complete your next course: Welcome to Mpwr',
            type: 'lms'
          }
        },
        {
          id: 525,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: '523',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486141',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486141
          }
        },
        {
          id: 526,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: '523',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486141',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486141
          }
        },
        {
          id: 527,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: '523',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 486141',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486141
          }
        },
        {
          id: 528,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: null,
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Pending',
          attr: {
            title: 'Complete shift 486142',
            body: 'Complete your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            type: 'timekeeping',
            shift_id: 486142
          }
        },
        {
          id: 529,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: '528',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Pending',
          attr: {
            title: 'Check in to shift 486142',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486142
          }
        },
        {
          id: 530,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: '528',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Pending',
          attr: {
            title: 'Check out of shift 486142',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486142
          }
        },
        {
          id: 531,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: '528',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486142',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486142
          }
        },
        {
          id: 532,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: null,
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Pending',
          attr: {
            title: 'Complete shift 486142',
            body: 'Complete your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            type: 'timekeeping',
            shift_id: 486142
          }
        },
        {
          id: 533,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: null,
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Pending',
          attr: {
            title: 'Complete your orientation',
            body: 'Complete your orientation',
            label: [
              'learning'
            ],
            priority: 'High',
            points: 50,
            type: 'lms',
            enrollment_id: 8
          }
        },
        {
          id: 534,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: '532',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Pending',
          attr: {
            title: 'Check in to shift 486142',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486142
          }
        },
        {
          id: 535,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: '532',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Pending',
          attr: {
            title: 'Check out of shift 486142',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486142
          }
        },
        {
          id: 536,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: '532',
          start_dt: '2020-07-21',
          due_dt: '2020-07-21',
          reminder_dt: '2020-07-21',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486142',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486142
          }
        },
        {
          id: 537,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: null,
          start_dt: '2020-07-22',
          due_dt: '2020-07-22',
          reminder_dt: '2020-07-22',
          status: 'Pending',
          attr: {
            title: 'Complete shift 486143',
            body: 'Complete your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            type: 'timekeeping',
            shift_id: 486143
          }
        },
        {
          id: 538,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: '537',
          start_dt: '2020-07-22',
          due_dt: '2020-07-22',
          reminder_dt: '2020-07-22',
          status: 'Pending',
          attr: {
            title: 'Check in to shift 486143',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486143
          }
        },
        {
          id: 539,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: '537',
          start_dt: '2020-07-22',
          due_dt: '2020-07-22',
          reminder_dt: '2020-07-22',
          status: 'Pending',
          attr: {
            title: 'Check out of shift 486143',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486143
          }
        },
        {
          id: 540,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: '537',
          start_dt: '2020-07-22',
          due_dt: '2020-07-22',
          reminder_dt: '2020-07-22',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486143',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486143,
            survey_completed: 0
          }
        },
        {
          id: 541,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: null,
          start_dt: '2020-07-22',
          due_dt: '2020-07-22',
          reminder_dt: '2020-07-22',
          status: 'Pending',
          attr: {
            title: 'Complete shift 486143',
            body: 'Complete your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            type: 'timekeeping',
            shift_id: 486143
          }
        },
        {
          id: 542,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: null,
          start_dt: '2020-07-22',
          due_dt: '2020-07-22',
          reminder_dt: '2020-07-22',
          status: 'Pending',
          attr: {
            title: 'Complete your orientation',
            body: 'Complete your orientation',
            label: [
              'learning'
            ],
            priority: 'High',
            points: 50,
            type: 'lms',
            enrollment_id: 8
          }
        },
        {
          id: 543,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: '541',
          start_dt: '2020-07-22',
          due_dt: '2020-07-22',
          reminder_dt: '2020-07-22',
          status: 'Pending',
          attr: {
            title: 'Check in to shift 486143',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486143
          }
        },
        {
          id: 544,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: '541',
          start_dt: '2020-07-22',
          due_dt: '2020-07-22',
          reminder_dt: '2020-07-22',
          status: 'Pending',
          attr: {
            title: 'Check out of shift 486143',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486143
          }
        },
        {
          id: 545,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: '541',
          start_dt: '2020-07-22',
          due_dt: '2020-07-22',
          reminder_dt: '2020-07-22',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486143',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486143,
            survey_completed: 0
          }
        },
        {
          id: 546,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-22',
          due_dt: '2020-07-22',
          reminder_dt: '2020-07-22',
          status: 'Done',
          attr: {
            title: 'Complete shift 486144',
            body: 'Complete your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            type: 'timekeeping',
            shift_id: 486144
          }
        },
        {
          id: 547,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: '546',
          start_dt: '2020-07-22',
          due_dt: '2020-07-22',
          reminder_dt: '2020-07-22',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486144',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486144
          }
        },
        {
          id: 548,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: '546',
          start_dt: '2020-07-22',
          due_dt: '2020-07-22',
          reminder_dt: '2020-07-22',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486144',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486144
          }
        },
        {
          id: 549,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: '546',
          start_dt: '2020-07-22',
          due_dt: '2020-07-22',
          reminder_dt: '2020-07-22',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486144',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486144,
            survey_completed: 0
          }
        },
        {
          id: 550,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-22',
          due_dt: '2020-07-22',
          reminder_dt: '2020-07-22',
          status: 'Done',
          attr: {
            title: 'Complete shift 486144',
            body: 'Complete your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            type: 'timekeeping',
            shift_id: 486144
          }
        },
        {
          id: 551,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-22',
          due_dt: '2020-07-22',
          reminder_dt: '2020-07-28',
          status: 'Pending',
          attr: {
            body: 'Complete your orientation',
            enrollment_id: 15,
            label: [
              'learning'
            ],
            points: 50,
            priority: 'High',
            title: 'Test Course',
            type: 'lms'
          }
        },
        {
          id: 552,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: '550',
          start_dt: '2020-07-22',
          due_dt: '2020-07-22',
          reminder_dt: '2020-07-22',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486144',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486144
          }
        },
        {
          id: 553,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: '550',
          start_dt: '2020-07-22',
          due_dt: '2020-07-22',
          reminder_dt: '2020-07-22',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486144',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486144
          }
        },
        {
          id: 554,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: '550',
          start_dt: '2020-07-22',
          due_dt: '2020-07-22',
          reminder_dt: '2020-07-22',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486144',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486144,
            survey_completed: 0
          }
        },
        {
          id: 555,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-24',
          due_dt: '2020-07-24',
          reminder_dt: '2020-07-24',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486145',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486145
          }
        },
        {
          id: 556,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-24',
          due_dt: '2020-07-24',
          reminder_dt: '2020-07-24',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486145',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486145
          }
        },
        {
          id: 557,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-24',
          due_dt: '2020-07-24',
          reminder_dt: '2020-07-24',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486145',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486145,
            survey_completed: 1
          }
        },
        {
          id: 563,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-24',
          due_dt: '2020-07-24',
          reminder_dt: '2020-07-24',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486146',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486146
          }
        },
        {
          id: 564,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-24',
          due_dt: '2020-07-24',
          reminder_dt: '2020-07-24',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486146',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486146
          }
        },
        {
          id: 565,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-24',
          due_dt: '2020-07-24',
          reminder_dt: '2020-07-27',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486146',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486146,
            survey_completed: 0
          }
        },
        {
          id: 566,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-24',
          due_dt: '2020-07-24',
          reminder_dt: '2020-07-24',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486147',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486147
          }
        },
        {
          id: 567,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-24',
          due_dt: '2020-07-24',
          reminder_dt: '2020-07-24',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486147',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486147
          }
        },
        {
          id: 568,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-24',
          due_dt: '2020-07-24',
          reminder_dt: '2020-07-24',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486147',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486147,
            survey_completed: 0
          }
        },
        {
          id: 569,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-07-24',
          due_dt: '2020-07-24',
          reminder_dt: '2020-07-24',
          status: 'Pending',
          attr: {
            title: 'Check in to shift 486148',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486148
          }
        },
        {
          id: 570,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-07-24',
          due_dt: '2020-07-24',
          reminder_dt: '2020-07-24',
          status: 'Pending',
          attr: {
            title: 'Check out of shift 486148',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486148
          }
        },
        {
          id: 571,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-07-24',
          due_dt: '2020-07-24',
          reminder_dt: '2020-07-24',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486148',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486148,
            survey_completed: 0
          }
        },
        {
          id: 572,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-25',
          due_dt: '2020-07-25',
          reminder_dt: '2020-07-25',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486149',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486149,
            rollover: 0
          }
        },
        {
          id: 573,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-25',
          due_dt: '2020-07-25',
          reminder_dt: '2020-07-25',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486149',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486149,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 574,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-25',
          due_dt: '2020-07-25',
          reminder_dt: '2020-07-25',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 486149',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486149,
            survey_completed: 0
          }
        },
        {
          id: 575,
          creator: '0',
          owner: '45',
          assignee: '45',
          parent_id: null,
          start_dt: '2020-07-25',
          due_dt: '2020-07-27',
          reminder_dt: '2020-07-25',
          status: 'Done',
          attr: {
            title: 'Complete your next course: Welcome to Mpwr',
            body: 'Complete Welcome to Mpwr',
            label: [
              'learning'
            ],
            priority: 'High',
            points: 50,
            type: 'lms',
            enrollment_id: 10
          }
        },
        {
          id: 576,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-27',
          due_dt: '2020-07-27',
          reminder_dt: '2020-07-27',
          status: 'Done',
          attr: {
            title: 'Submit your availability for week 202036',
            body: 'Submit your availability for week 202036: Aug 31st - Sep 6th',
            label: [
              'scheduling'
            ],
            priority: 'High',
            points: 10,
            type: 'availability',
            yearweek: 202036
          }
        },
        {
          id: 577,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-27',
          due_dt: '2020-07-27',
          reminder_dt: '2020-07-27',
          status: 'Pending',
          attr: {
            title: 'Submit your availability for week 202036',
            body: 'Submit your availability for week 202036: Aug 31st - Sep 6th',
            label: [
              'scheduling'
            ],
            priority: 'High',
            points: 10,
            type: 'availability',
            yearweek: 202036
          }
        },
        {
          id: 578,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-27',
          due_dt: '2020-07-27',
          reminder_dt: '2020-07-27',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486150',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486150,
            rollover: 0
          }
        },
        {
          id: 579,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-27',
          due_dt: '2020-07-27',
          reminder_dt: '2020-07-27',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486150',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486150,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 580,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-27',
          due_dt: '2020-07-27',
          reminder_dt: '2020-07-27',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486150',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486150,
            survey_completed: 1
          }
        },
        {
          id: 581,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-27',
          due_dt: '2020-07-27',
          reminder_dt: '2020-07-27',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486151',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486151,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 582,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-27',
          due_dt: '2020-07-27',
          reminder_dt: '2020-07-27',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486151',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486151,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 583,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-27',
          due_dt: '2020-07-27',
          reminder_dt: '2020-07-27',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486151',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486151,
            survey_completed: 0
          }
        },
        {
          id: 586,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-28',
          due_dt: '2020-07-28',
          reminder_dt: '2020-07-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486152',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486152,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 587,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-28',
          due_dt: '2020-07-28',
          reminder_dt: '2020-07-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486152',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486152,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 588,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-28',
          due_dt: '2020-07-28',
          reminder_dt: '2020-07-28',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486152',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486152,
            survey_completed: 1
          }
        },
        {
          id: 584,
          creator: '0',
          owner: '45',
          assignee: '45',
          parent_id: null,
          start_dt: '2020-07-27',
          due_dt: '2020-07-29',
          reminder_dt: '2020-07-27',
          status: 'Pending',
          attr: {
            title: 'Complete your next course: Welcome to Mpwr',
            body: 'Complete Welcome to Mpwr',
            label: [
              'learning'
            ],
            priority: 'High',
            points: 50,
            type: 'lms',
            enrollment_id: 13
          }
        },
        {
          id: 585,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-27',
          due_dt: '2020-07-29',
          reminder_dt: '2020-07-27',
          status: 'Pending',
          attr: {
            title: 'Complete your next course: Welcome to Mpwr',
            body: 'Complete Welcome to Mpwr',
            label: [
              'learning'
            ],
            priority: 'High',
            points: 50,
            type: 'lms',
            enrollment_id: 14
          }
        },
        {
          id: 589,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-29',
          due_dt: '2020-07-29',
          reminder_dt: '2020-07-29',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486153',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486153,
            rollover: 0
          }
        },
        {
          id: 590,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-29',
          due_dt: '2020-07-29',
          reminder_dt: '2020-07-29',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486153',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486153,
            rollover: 0
          }
        },
        {
          id: 591,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-29',
          due_dt: '2020-07-29',
          reminder_dt: '2020-07-29',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486153',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486153,
            survey_completed: 0
          }
        },
        {
          id: 592,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-29',
          due_dt: '2020-07-29',
          reminder_dt: '2020-07-29',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486154',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486154,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 593,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-29',
          due_dt: '2020-07-29',
          reminder_dt: '2020-07-29',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486154',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486154,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 594,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-29',
          due_dt: '2020-07-29',
          reminder_dt: '2020-07-29',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486154',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486154,
            survey_completed: 0
          }
        },
        {
          id: 598,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-29',
          due_dt: '2020-07-29',
          reminder_dt: '2020-07-29',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486156',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486156,
            rollover: 0
          }
        },
        {
          id: 599,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-29',
          due_dt: '2020-07-29',
          reminder_dt: '2020-07-29',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486156',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486156,
            rollover: 0
          }
        },
        {
          id: 600,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-29',
          due_dt: '2020-07-29',
          reminder_dt: '2020-07-29',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486156',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486156,
            survey_completed: 0
          }
        },
        {
          id: 601,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-29',
          due_dt: '2020-07-29',
          reminder_dt: '2020-07-29',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486157',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486157,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 602,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-29',
          due_dt: '2020-07-29',
          reminder_dt: '2020-07-29',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486157',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486157,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 603,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-29',
          due_dt: '2020-07-29',
          reminder_dt: '2020-07-29',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 486157',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486157,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 605,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-29',
          due_dt: '2020-07-29',
          reminder_dt: '2020-07-29',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486158',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486158,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 606,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-29',
          due_dt: '2020-07-29',
          reminder_dt: '2020-07-29',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486158',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486158,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 607,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-29',
          due_dt: '2020-07-29',
          reminder_dt: '2020-07-29',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 486158',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486158,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 608,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-29',
          due_dt: '2020-07-29',
          reminder_dt: '2020-07-29',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486159',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486159,
            rollover: 0
          }
        },
        {
          id: 609,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-29',
          due_dt: '2020-07-29',
          reminder_dt: '2020-07-29',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486159',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486159,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 610,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-29',
          due_dt: '2020-07-29',
          reminder_dt: '2020-07-29',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486159',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486159,
            survey_completed: 0
          }
        },
        {
          id: 595,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486155',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486155,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 596,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486155',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486155,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 597,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486155',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486155,
            survey_completed: 1
          }
        },
        {
          id: 611,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486160',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486160,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 612,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486160',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486160,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 613,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486160',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486160,
            survey_completed: 0
          }
        },
        {
          id: 614,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486161',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486161,
            rollover: 0
          }
        },
        {
          id: 615,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486161',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486161,
            rollover: 0
          }
        },
        {
          id: 616,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486161',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486161,
            survey_completed: 0
          }
        },
        {
          id: 617,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486162',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486162,
            rollover: 0
          }
        },
        {
          id: 618,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486162',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486162,
            rollover: 0
          }
        },
        {
          id: 619,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486162',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486162,
            survey_completed: 0
          }
        },
        {
          id: 620,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486163',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486163,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 621,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486163',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486163,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 622,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486163',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486163,
            survey_completed: 0
          }
        },
        {
          id: 623,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486164',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486164,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 624,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486164',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486164,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 625,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 486164',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486164,
            survey_completed: 0
          }
        },
        {
          id: 626,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486165',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486165,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 627,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486165',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486165,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 628,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 486165',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486165,
            survey_completed: 0
          }
        },
        {
          id: 629,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486166',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486166,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 630,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486166',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486166,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 631,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 486166',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486166,
            survey_completed: 0
          }
        },
        {
          id: 632,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486167',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486167,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 633,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486167',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486167,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 634,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 486167',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486167,
            survey_completed: 0
          }
        },
        {
          id: 635,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486168',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486168,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 636,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486168',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486168,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 637,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 486168',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486168,
            survey_completed: 0
          }
        },
        {
          id: 638,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486169',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486169,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 639,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486169',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486169,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 640,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 486169',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486169,
            survey_completed: 0
          }
        },
        {
          id: 641,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486170',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486170,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 642,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486170',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486170,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 643,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 486170',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486170,
            survey_completed: 0
          }
        },
        {
          id: 644,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486171',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486171,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 645,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486171',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486171,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 646,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 486171',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486171,
            survey_completed: 0
          }
        },
        {
          id: 647,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486172',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486172,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 648,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486172',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486172,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 649,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 486172',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486172,
            survey_completed: 0
          }
        },
        {
          id: 650,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486173',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486173,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 651,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486173',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486173,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 652,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486173',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486173,
            survey_completed: 0
          }
        },
        {
          id: 653,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486174',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486174,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 654,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486174',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486174,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 655,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486174',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486174,
            survey_completed: 0
          }
        },
        {
          id: 656,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486175',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486175,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 657,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486175',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486175,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 658,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486175',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486175,
            survey_completed: 0
          }
        },
        {
          id: 659,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486176',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486176,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 660,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486176',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486176,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 661,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486176',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486176,
            survey_completed: 0
          }
        },
        {
          id: 662,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486177',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486177,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 663,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486177',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486177,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 664,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486177',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486177,
            survey_completed: 0
          }
        },
        {
          id: 665,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486178',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486178,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 666,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486178',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486178,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 667,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486178',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486178,
            survey_completed: 0
          }
        },
        {
          id: 668,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486179',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486179,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 669,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486179',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486179,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 670,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486179',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486179,
            survey_completed: 0
          }
        },
        {
          id: 671,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486180',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486180,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 672,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486180',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486180,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 673,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486180',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486180,
            survey_completed: 0
          }
        },
        {
          id: 674,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486181',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486181,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 675,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486181',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486181,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 676,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486181',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486181,
            survey_completed: 0
          }
        },
        {
          id: 677,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486182',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486182,
            rollover: 0
          }
        },
        {
          id: 678,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486182',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486182,
            rollover: 0
          }
        },
        {
          id: 679,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486182',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486182,
            survey_completed: 1
          }
        },
        {
          id: 680,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486183',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486183,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 681,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486183',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486183,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 682,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486183',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486183,
            survey_completed: 0
          }
        },
        {
          id: 683,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486184',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486184,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 684,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486184',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486184,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 685,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-30',
          due_dt: '2020-07-30',
          reminder_dt: '2020-07-30',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486184',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486184,
            survey_completed: 0
          }
        },
        {
          id: 604,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-07-29',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-29',
          status: 'Done',
          attr: {
            title: 'Complete your next course: Welcome to Mpwr',
            body: 'Complete Welcome to Mpwr',
            label: [
              'learning'
            ],
            priority: 'High',
            points: 50,
            type: 'lms',
            enrollment_id: 16
          }
        },
        {
          id: 686,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486185',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486185,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 687,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486185',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486185,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 688,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486185',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486185,
            survey_completed: 1
          }
        },
        {
          id: 689,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486186',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486186,
            rollover: 0
          }
        },
        {
          id: 690,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486186',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486186,
            rollover: 0
          }
        },
        {
          id: 691,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486186',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486186,
            survey_completed: 1
          }
        },
        {
          id: 692,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486187',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486187,
            rollover: 0
          }
        },
        {
          id: 693,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486187',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486187,
            rollover: 0
          }
        },
        {
          id: 694,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486187',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486187,
            survey_completed: 1
          }
        },
        {
          id: 695,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486188',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486188,
            rollover: 0
          }
        },
        {
          id: 696,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486188',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486188,
            rollover: 0
          }
        },
        {
          id: 697,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486188',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486188,
            survey_completed: 1
          }
        },
        {
          id: 698,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486189',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486189,
            rollover: 0
          }
        },
        {
          id: 699,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486189',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486189,
            rollover: 0
          }
        },
        {
          id: 700,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486189',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486189,
            survey_completed: 1
          }
        },
        {
          id: 701,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486190',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486190,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 702,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486190',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486190,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 703,
          creator: '0',
          owner: '43',
          assignee: '43',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486190',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486190,
            survey_completed: 0
          }
        },
        {
          id: 704,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486191',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486191,
            rollover: 0
          }
        },
        {
          id: 705,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486191',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486191,
            rollover: 0
          }
        },
        {
          id: 706,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486191',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486191,
            survey_completed: 0
          }
        },
        {
          id: 707,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486192',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486192,
            rollover: 0
          }
        },
        {
          id: 708,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486192',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486192,
            rollover: 0
          }
        },
        {
          id: 709,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486192',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486192,
            survey_completed: 0
          }
        },
        {
          id: 710,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486193',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486193,
            rollover: 0
          }
        },
        {
          id: 711,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486193',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486193,
            rollover: 0
          }
        },
        {
          id: 712,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486193',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486193,
            survey_completed: 0
          }
        },
        {
          id: 713,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486194',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486194,
            rollover: 0
          }
        },
        {
          id: 714,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486194',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486194,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 715,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486194',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486194,
            survey_completed: 0
          }
        },
        {
          id: 716,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486195',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486195,
            rollover: 0
          }
        },
        {
          id: 717,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486195',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486195,
            rollover: 0
          }
        },
        {
          id: 718,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486195',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486195,
            survey_completed: 0
          }
        },
        {
          id: 719,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486196',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486196,
            rollover: 0
          }
        },
        {
          id: 720,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486196',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486196,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 721,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486196',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486196,
            survey_completed: 0
          }
        },
        {
          id: 722,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486197',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486197,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 723,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486197',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486197,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 724,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-07-31',
          due_dt: '2020-07-31',
          reminder_dt: '2020-07-31',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 486197',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486197,
            survey_completed: 0
          }
        },
        {
          id: 725,
          creator: '0',
          owner: '1334',
          assignee: '1334',
          parent_id: null,
          start_dt: '2020-08-01',
          due_dt: '2020-08-01',
          reminder_dt: '2020-08-01',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486198',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486198,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 726,
          creator: '0',
          owner: '1334',
          assignee: '1334',
          parent_id: null,
          start_dt: '2020-08-01',
          due_dt: '2020-08-02',
          reminder_dt: '2020-08-02',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486198',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486198,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 727,
          creator: '0',
          owner: '1334',
          assignee: '1334',
          parent_id: null,
          start_dt: '2020-08-01',
          due_dt: '2020-08-02',
          reminder_dt: '2020-08-02',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486198',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486198,
            survey_completed: 0
          }
        },
        {
          id: 728,
          creator: '0',
          owner: '1334',
          assignee: '1334',
          parent_id: null,
          start_dt: '2020-08-02',
          due_dt: '2020-08-02',
          reminder_dt: '2020-08-02',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486199',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486199,
            rollover: 0
          }
        },
        {
          id: 729,
          creator: '0',
          owner: '1334',
          assignee: '1334',
          parent_id: null,
          start_dt: '2020-08-02',
          due_dt: '2020-08-02',
          reminder_dt: '2020-08-02',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486199',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486199,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 730,
          creator: '0',
          owner: '1334',
          assignee: '1334',
          parent_id: null,
          start_dt: '2020-08-02',
          due_dt: '2020-08-02',
          reminder_dt: '2020-08-02',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486199',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486199,
            survey_completed: 0
          }
        },
        {
          id: 731,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-04',
          due_dt: '2020-08-04',
          reminder_dt: '2020-08-04',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486200',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486200,
            rollover: 0
          }
        },
        {
          id: 732,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-04',
          due_dt: '2020-08-04',
          reminder_dt: '2020-08-04',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486200',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486200,
            rollover: 0
          }
        },
        {
          id: 733,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-04',
          due_dt: '2020-08-04',
          reminder_dt: '2020-08-04',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 486200',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486200,
            survey_completed: 0
          }
        },
        {
          id: 734,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-04',
          due_dt: '2020-08-04',
          reminder_dt: '2020-08-04',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486201',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486201,
            rollover: 0
          }
        },
        {
          id: 735,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-04',
          due_dt: '2020-08-04',
          reminder_dt: '2020-08-04',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486201',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486201,
            rollover: 0
          }
        },
        {
          id: 736,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-04',
          due_dt: '2020-08-04',
          reminder_dt: '2020-08-04',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 486201',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486201,
            survey_completed: 0
          }
        },
        {
          id: 737,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-04',
          due_dt: '2020-08-04',
          reminder_dt: '2020-08-04',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486202',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486202,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 738,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-04',
          due_dt: '2020-08-04',
          reminder_dt: '2020-08-04',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486202',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486202,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 739,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-04',
          due_dt: '2020-08-04',
          reminder_dt: '2020-08-04',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 486202',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486202,
            survey_completed: 0
          }
        },
        {
          id: 740,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-04',
          due_dt: '2020-08-04',
          reminder_dt: '2020-08-04',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486203',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486203,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 741,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-04',
          due_dt: '2020-08-04',
          reminder_dt: '2020-08-04',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486203',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486203,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 742,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-04',
          due_dt: '2020-08-04',
          reminder_dt: '2020-08-04',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 486203',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486203,
            survey_completed: 0
          }
        },
        {
          id: 743,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-04',
          due_dt: '2020-08-04',
          reminder_dt: '2020-08-04',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486204',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486204,
            rollover: 0
          }
        },
        {
          id: 744,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-04',
          due_dt: '2020-08-04',
          reminder_dt: '2020-08-04',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486204',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486204,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 745,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-04',
          due_dt: '2020-08-04',
          reminder_dt: '2020-08-04',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 486204',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486204,
            survey_completed: 0
          }
        },
        {
          id: 746,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-08-05',
          due_dt: '2020-08-05',
          reminder_dt: '2020-08-05',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486205',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486205,
            rollover: 0
          }
        },
        {
          id: 747,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-08-05',
          due_dt: '2020-08-05',
          reminder_dt: '2020-08-05',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486205',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486205,
            rollover: 0
          }
        },
        {
          id: 748,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-08-05',
          due_dt: '2020-08-05',
          reminder_dt: '2020-08-05',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486205',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486205,
            survey_completed: 1
          }
        },
        {
          id: 749,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-08-05',
          due_dt: '2020-08-05',
          reminder_dt: '2020-08-05',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486206',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486206,
            rollover: 0
          }
        },
        {
          id: 750,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-08-05',
          due_dt: '2020-08-05',
          reminder_dt: '2020-08-05',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486206',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486206,
            rollover: 0
          }
        },
        {
          id: 751,
          creator: '0',
          owner: '1333',
          assignee: '1333',
          parent_id: null,
          start_dt: '2020-08-05',
          due_dt: '2020-08-05',
          reminder_dt: '2020-08-05',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486206',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486206,
            survey_completed: 1
          }
        },
        {
          id: 752,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-05',
          due_dt: '2020-08-05',
          reminder_dt: '2020-08-05',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486207',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486207,
            rollover: 0
          }
        },
        {
          id: 753,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-05',
          due_dt: '2020-08-05',
          reminder_dt: '2020-08-05',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486207',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486207,
            rollover: 0
          }
        },
        {
          id: 754,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-05',
          due_dt: '2020-08-05',
          reminder_dt: '2020-08-05',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486207',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486207,
            survey_completed: 1
          }
        },
        {
          id: 755,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-05',
          due_dt: '2020-08-05',
          reminder_dt: '2020-08-05',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486208',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486208,
            rollover: 0
          }
        },
        {
          id: 756,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-05',
          due_dt: '2020-08-05',
          reminder_dt: '2020-08-05',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486208',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486208,
            rollover: 0
          }
        },
        {
          id: 757,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-05',
          due_dt: '2020-08-05',
          reminder_dt: '2020-08-05',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486208',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486208,
            survey_completed: 1
          }
        },
        {
          id: 758,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-05',
          due_dt: '2020-08-05',
          reminder_dt: '2020-08-05',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486209',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486209,
            rollover: 0
          }
        },
        {
          id: 759,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-05',
          due_dt: '2020-08-05',
          reminder_dt: '2020-08-05',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486209',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486209,
            rollover: 0
          }
        },
        {
          id: 760,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-05',
          due_dt: '2020-08-05',
          reminder_dt: '2020-08-05',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486209',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486209,
            survey_completed: 0
          }
        },
        {
          id: 761,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-05',
          due_dt: '2020-08-05',
          reminder_dt: '2020-08-05',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486210',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486210,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 762,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-05',
          due_dt: '2020-08-05',
          reminder_dt: '2020-08-05',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486210',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486210,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 763,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-05',
          due_dt: '2020-08-05',
          reminder_dt: '2020-08-05',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 486210',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486210,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 765,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-05',
          due_dt: '2020-08-05',
          reminder_dt: '2020-08-05',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486211',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486211,
            rollover: 0
          }
        },
        {
          id: 766,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-05',
          due_dt: '2020-08-05',
          reminder_dt: '2020-08-05',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486211',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486211,
            rollover: 0
          }
        },
        {
          id: 767,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-05',
          due_dt: '2020-08-05',
          reminder_dt: '2020-08-05',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 486211',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486211,
            survey_completed: 0
          }
        },
        {
          id: 771,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-06',
          due_dt: '2020-08-06',
          reminder_dt: '2020-08-06',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486213',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486213,
            rollover: 0
          }
        },
        {
          id: 772,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-06',
          due_dt: '2020-08-06',
          reminder_dt: '2020-08-06',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486213',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486213,
            rollover: 0
          }
        },
        {
          id: 773,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-06',
          due_dt: '2020-08-06',
          reminder_dt: '2020-08-06',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486213',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486213,
            survey_completed: 1
          }
        },
        {
          id: 774,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-06',
          due_dt: '2020-08-06',
          reminder_dt: '2020-08-06',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486214',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486214,
            rollover: 0
          }
        },
        {
          id: 775,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-06',
          due_dt: '2020-08-06',
          reminder_dt: '2020-08-06',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486214',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486214,
            rollover: 0
          }
        },
        {
          id: 776,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-06',
          due_dt: '2020-08-06',
          reminder_dt: '2020-08-06',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486214',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486214,
            survey_completed: 1
          }
        },
        {
          id: 795,
          creator: '0',
          owner: '80',
          assignee: '80',
          parent_id: null,
          start_dt: '2020-08-06',
          due_dt: '2020-08-06',
          reminder_dt: '2020-08-06',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486216',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486216,
            rollover: 0
          }
        },
        {
          id: 796,
          creator: '0',
          owner: '80',
          assignee: '80',
          parent_id: null,
          start_dt: '2020-08-06',
          due_dt: '2020-08-06',
          reminder_dt: '2020-08-06',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486216',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486216,
            rollover: 0
          }
        },
        {
          id: 797,
          creator: '0',
          owner: '80',
          assignee: '80',
          parent_id: null,
          start_dt: '2020-08-06',
          due_dt: '2020-08-06',
          reminder_dt: '2020-08-06',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486216',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486216,
            survey_completed: 1
          }
        },
        {
          id: 764,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-05',
          due_dt: '2020-08-07',
          reminder_dt: '2020-08-05',
          status: 'Pending',
          attr: {
            title: 'Complete your next course: Welcome to Mpwr',
            body: 'Complete Welcome to Mpwr',
            label: [
              'learning'
            ],
            priority: 'High',
            points: 50,
            type: 'lms',
            enrollment_id: 17
          }
        },
        {
          id: 799,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-07',
          due_dt: '2020-08-07',
          reminder_dt: '2020-08-07',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486217',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486217,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 800,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-07',
          due_dt: '2020-08-07',
          reminder_dt: '2020-08-07',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486217',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486217,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 801,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-07',
          due_dt: '2020-08-07',
          reminder_dt: '2020-08-07',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486217',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486217,
            survey_completed: 0
          }
        },
        {
          id: 802,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-07',
          due_dt: '2020-08-07',
          reminder_dt: '2020-08-07',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486218',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486218,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 803,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-07',
          due_dt: '2020-08-07',
          reminder_dt: '2020-08-07',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486218',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486218,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 804,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-07',
          due_dt: '2020-08-07',
          reminder_dt: '2020-08-07',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 486218',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486218,
            survey_completed: 0
          }
        },
        {
          id: 798,
          creator: '0',
          owner: '80',
          assignee: '80',
          parent_id: null,
          start_dt: '2020-08-06',
          due_dt: '2020-08-08',
          reminder_dt: '2020-08-06',
          status: 'Pending',
          attr: {
            title: 'Complete your next course: Welcome to Mpwr',
            body: 'Complete Welcome to Mpwr',
            label: [
              'learning'
            ],
            priority: 'High',
            points: 50,
            type: 'lms',
            enrollment_id: 25
          }
        },
        {
          id: 792,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-10',
          due_dt: '2020-08-10',
          reminder_dt: '2020-08-10',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 486215',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486215,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover',
            system_message: 'shift deleted'
          }
        },
        {
          id: 793,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-10',
          due_dt: '2020-08-10',
          reminder_dt: '2020-08-10',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 486215',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486215,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover',
            system_message: 'shift deleted'
          }
        },
        {
          id: 794,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-10',
          due_dt: '2020-08-10',
          reminder_dt: '2020-08-10',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 486215',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486215,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 823,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-19',
          due_dt: '2020-08-19',
          reminder_dt: '2020-08-19',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500113',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500113,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 824,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-19',
          due_dt: '2020-08-19',
          reminder_dt: '2020-08-19',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500113',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500113,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 825,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-19',
          due_dt: '2020-08-19',
          reminder_dt: '2020-08-19',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500113',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500113,
            survey_completed: 0
          }
        },
        {
          id: 874,
          creator: '0',
          owner: '1299',
          assignee: '1299',
          parent_id: null,
          start_dt: '2020-08-22',
          due_dt: '2020-08-22',
          reminder_dt: '2020-08-22',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500124',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500124,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 875,
          creator: '0',
          owner: '1299',
          assignee: '1299',
          parent_id: null,
          start_dt: '2020-08-22',
          due_dt: '2020-08-22',
          reminder_dt: '2020-08-22',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500124',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500124,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 876,
          creator: '0',
          owner: '1299',
          assignee: '1299',
          parent_id: null,
          start_dt: '2020-08-22',
          due_dt: '2020-08-22',
          reminder_dt: '2020-08-22',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500124',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500124,
            survey_completed: 0
          }
        },
        {
          id: 768,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-24',
          due_dt: '2020-08-24',
          reminder_dt: '2020-08-24',
          status: 'Done',
          attr: {
            title: 'Check in to shift 486212',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 486212,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 769,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-24',
          due_dt: '2020-08-24',
          reminder_dt: '2020-08-24',
          status: 'Done',
          attr: {
            title: 'Check out of shift 486212',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 486212,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 770,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-24',
          due_dt: '2020-08-24',
          reminder_dt: '2020-08-24',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 486212',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 486212,
            survey_completed: 1
          }
        },
        {
          id: 805,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-24',
          due_dt: '2020-08-24',
          reminder_dt: '2020-08-24',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500095',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500095,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 806,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-24',
          due_dt: '2020-08-24',
          reminder_dt: '2020-08-24',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500095',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500095,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 807,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-24',
          due_dt: '2020-08-24',
          reminder_dt: '2020-08-24',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500095',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500095,
            survey_completed: 0
          }
        },
        {
          id: 808,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-24',
          due_dt: '2020-08-24',
          reminder_dt: '2020-08-24',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500091',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500091,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 809,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-24',
          due_dt: '2020-08-24',
          reminder_dt: '2020-08-24',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500091',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500091,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 810,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-24',
          due_dt: '2020-08-24',
          reminder_dt: '2020-08-24',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500091',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500091,
            survey_completed: 0
          }
        },
        {
          id: 835,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-24',
          due_dt: '2020-08-24',
          reminder_dt: '2020-08-24',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500116',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500116,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 836,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-24',
          due_dt: '2020-08-24',
          reminder_dt: '2020-08-24',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500116',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500116,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 837,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-24',
          due_dt: '2020-08-24',
          reminder_dt: '2020-08-24',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500116',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500116,
            survey_completed: 0
          }
        },
        {
          id: 841,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-24',
          due_dt: '2020-08-24',
          reminder_dt: '2020-08-24',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500119',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500119,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 842,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-24',
          due_dt: '2020-08-24',
          reminder_dt: '2020-08-24',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500119',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500119,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 843,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-24',
          due_dt: '2020-08-24',
          reminder_dt: '2020-08-24',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500119',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500119,
            survey_completed: 0
          }
        },
        {
          id: 865,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-24',
          due_dt: '2020-08-24',
          reminder_dt: '2020-08-24',
          status: 'Done',
          attr: {
            title: 'Check in to shift 500120',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500120,
            rollover: 0
          }
        },
        {
          id: 866,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-24',
          due_dt: '2020-08-24',
          reminder_dt: '2020-08-24',
          status: 'Done',
          attr: {
            title: 'Check out of shift 500120',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500120,
            rollover: 0
          }
        },
        {
          id: 867,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-24',
          due_dt: '2020-08-24',
          reminder_dt: '2020-08-24',
          status: 'Done',
          attr: {
            title: 'Complete survey for shift 500120',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500120,
            survey_completed: 1
          }
        },
        {
          id: 838,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-25',
          due_dt: '2020-08-25',
          reminder_dt: '2020-08-25',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500117',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500117,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 839,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-25',
          due_dt: '2020-08-25',
          reminder_dt: '2020-08-25',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500117',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500117,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 840,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-25',
          due_dt: '2020-08-25',
          reminder_dt: '2020-08-25',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500117',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500117,
            survey_completed: 0
          }
        },
        {
          id: 811,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-26',
          due_dt: '2020-08-26',
          reminder_dt: '2020-08-26',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500092',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500092,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 812,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-26',
          due_dt: '2020-08-26',
          reminder_dt: '2020-08-26',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500092',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500092,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 813,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-26',
          due_dt: '2020-08-26',
          reminder_dt: '2020-08-26',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500092',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500092,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 814,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-27',
          due_dt: '2020-08-27',
          reminder_dt: '2020-08-27',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500098',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500098,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 815,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-27',
          due_dt: '2020-08-27',
          reminder_dt: '2020-08-27',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500098',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500098,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 816,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-27',
          due_dt: '2020-08-27',
          reminder_dt: '2020-08-27',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500098',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500098,
            survey_completed: 0
          }
        },
        {
          id: 817,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-27',
          due_dt: '2020-08-27',
          reminder_dt: '2020-08-27',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500099',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500099,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 818,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-27',
          due_dt: '2020-08-27',
          reminder_dt: '2020-08-27',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500099',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500099,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 819,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-27',
          due_dt: '2020-08-27',
          reminder_dt: '2020-08-27',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500099',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500099,
            survey_completed: 0
          }
        },
        {
          id: 820,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-27',
          due_dt: '2020-08-27',
          reminder_dt: '2020-08-27',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500100',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500100,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 821,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-27',
          due_dt: '2020-08-27',
          reminder_dt: '2020-08-27',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500100',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500100,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 822,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-27',
          due_dt: '2020-08-27',
          reminder_dt: '2020-08-27',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500100',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500100,
            survey_completed: 0
          }
        },
        {
          id: 844,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-27',
          due_dt: '2020-08-27',
          reminder_dt: '2020-08-27',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500042',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500042,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 845,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-27',
          due_dt: '2020-08-27',
          reminder_dt: '2020-08-27',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500042',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500042,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 846,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-27',
          due_dt: '2020-08-27',
          reminder_dt: '2020-08-27',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500042',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500042,
            survey_completed: 0
          }
        },
        {
          id: 847,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-27',
          due_dt: '2020-08-27',
          reminder_dt: '2020-08-27',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500043',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500043,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 848,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-27',
          due_dt: '2020-08-27',
          reminder_dt: '2020-08-27',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500043',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500043,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 849,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-27',
          due_dt: '2020-08-27',
          reminder_dt: '2020-08-27',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500043',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500043,
            survey_completed: 0
          }
        },
        {
          id: 850,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-27',
          due_dt: '2020-08-27',
          reminder_dt: '2020-08-27',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500086',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500086,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 851,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-27',
          due_dt: '2020-08-27',
          reminder_dt: '2020-08-27',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500086',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500086,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 852,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-27',
          due_dt: '2020-08-27',
          reminder_dt: '2020-08-27',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500086',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500086,
            survey_completed: 0
          }
        },
        {
          id: 859,
          creator: '0',
          owner: '1299',
          assignee: '1299',
          parent_id: null,
          start_dt: '2020-08-27',
          due_dt: '2020-08-27',
          reminder_dt: '2020-08-27',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500089',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500089,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 860,
          creator: '0',
          owner: '1299',
          assignee: '1299',
          parent_id: null,
          start_dt: '2020-08-27',
          due_dt: '2020-08-27',
          reminder_dt: '2020-08-27',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500089',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500089,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 861,
          creator: '0',
          owner: '1299',
          assignee: '1299',
          parent_id: null,
          start_dt: '2020-08-27',
          due_dt: '2020-08-27',
          reminder_dt: '2020-08-27',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500089',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500089,
            survey_completed: 0
          }
        },
        {
          id: 853,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500087',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500087,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 854,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500087',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500087,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 855,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500087',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500087,
            survey_completed: 0
          }
        },
        {
          id: 856,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500088',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500088,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 857,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500088',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500088,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 858,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500088',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500088,
            survey_completed: 0
          }
        },
        {
          id: 886,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500134',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500134,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 887,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500134',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500134,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 888,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500134',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500134,
            survey_completed: 0
          }
        },
        {
          id: 889,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500135',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500135,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 890,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500135',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500135,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 891,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500135',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500135,
            survey_completed: 0
          }
        },
        {
          id: 892,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500136',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500136,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 893,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500136',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500136,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 894,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500136',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500136,
            survey_completed: 0
          }
        },
        {
          id: 895,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500137',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500137,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 896,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500137',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500137,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 897,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500137',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500137,
            survey_completed: 0
          }
        },
        {
          id: 898,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500138',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500138,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 899,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500138',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500138,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 900,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500138',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500138,
            survey_completed: 0
          }
        },
        {
          id: 901,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500139',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500139,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 902,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500139',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500139,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 903,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500139',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500139,
            survey_completed: 0
          }
        },
        {
          id: 904,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500140',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500140,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 905,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500140',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500140,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 906,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500140',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500140,
            survey_completed: 0
          }
        },
        {
          id: 907,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500141',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500141,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 908,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500141',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500141,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 909,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500141',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500141,
            survey_completed: 0
          }
        },
        {
          id: 910,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500142',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500142,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 911,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500142',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500142,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 912,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500142',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500142,
            survey_completed: 0
          }
        },
        {
          id: 913,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500143',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500143,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 914,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500143',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500143,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 915,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500143',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500143,
            survey_completed: 0
          }
        },
        {
          id: 916,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500144',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500144,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 917,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500144',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500144,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 918,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500144',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500144,
            survey_completed: 0
          }
        },
        {
          id: 919,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500145',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500145,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 920,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500145',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500145,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 921,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500145',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500145,
            survey_completed: 0
          }
        },
        {
          id: 922,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500146',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500146,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 923,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500146',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500146,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 924,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500146',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500146,
            survey_completed: 0
          }
        },
        {
          id: 925,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500147',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500147,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 926,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500147',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500147,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 927,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500147',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500147,
            survey_completed: 0
          }
        },
        {
          id: 928,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500148',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500148,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 929,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500148',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500148,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 930,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500148',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500148,
            survey_completed: 0
          }
        },
        {
          id: 931,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500149',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500149,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 932,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500149',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500149,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 933,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500149',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500149,
            survey_completed: 0
          }
        },
        {
          id: 934,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500150',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500150,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 935,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500150',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500150,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 936,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500150',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500150,
            survey_completed: 0
          }
        },
        {
          id: 937,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500151',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500151,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 938,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500151',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500151,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 939,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500151',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500151,
            survey_completed: 0
          }
        },
        {
          id: 940,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500152',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500152,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 941,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500152',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500152,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 942,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500152',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500152,
            survey_completed: 0
          }
        },
        {
          id: 943,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500153',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500153,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 944,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500153',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500153,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 945,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500153',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500153,
            survey_completed: 0
          }
        },
        {
          id: 946,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500154',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500154,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 947,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500154',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500154,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 948,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500154',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500154,
            survey_completed: 0
          }
        },
        {
          id: 949,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500155',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500155,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 950,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500155',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500155,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 951,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-28',
          due_dt: '2020-08-28',
          reminder_dt: '2020-08-28',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500155',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500155,
            survey_completed: 0
          }
        },
        {
          id: 862,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-29',
          due_dt: '2020-08-29',
          reminder_dt: '2020-08-29',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500090',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500090,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 863,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-29',
          due_dt: '2020-08-29',
          reminder_dt: '2020-08-29',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500090',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500090,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 864,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-29',
          due_dt: '2020-08-29',
          reminder_dt: '2020-08-29',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500090',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500090,
            survey_completed: 0
          }
        },
        {
          id: 952,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500156',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500156,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 953,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500156',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500156,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 954,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500156',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500156,
            survey_completed: 0
          }
        },
        {
          id: 955,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500157',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500157,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 956,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500157',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500157,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 957,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500157',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500157,
            survey_completed: 0
          }
        },
        {
          id: 958,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500158',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500158,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 959,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500158',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500158,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 960,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500158',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500158,
            survey_completed: 0
          }
        },
        {
          id: 961,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500159',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500159,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 962,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500159',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500159,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 963,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500159',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500159,
            survey_completed: 0
          }
        },
        {
          id: 964,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500160',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500160,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 965,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500160',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500160,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 966,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500160',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500160,
            survey_completed: 0
          }
        },
        {
          id: 967,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500161',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500161,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 968,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500161',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500161,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 969,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500161',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500161,
            survey_completed: 0
          }
        },
        {
          id: 970,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500162',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500162,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 971,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500162',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500162,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 972,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500162',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500162,
            survey_completed: 0
          }
        },
        {
          id: 973,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500163',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500163,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 974,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500163',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500163,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 975,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500163',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500163,
            survey_completed: 0
          }
        },
        {
          id: 976,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500164',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500164,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 977,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500164',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500164,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 978,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500164',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500164,
            survey_completed: 0
          }
        },
        {
          id: 979,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500165',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500165,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 980,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500165',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500165,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 981,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-08-30',
          due_dt: '2020-08-30',
          reminder_dt: '2020-08-30',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500165',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500165,
            survey_completed: 0
          }
        },
        {
          id: 826,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-31',
          due_dt: '2020-08-31',
          reminder_dt: '2020-08-31',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500108',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500108,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 827,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-31',
          due_dt: '2020-08-31',
          reminder_dt: '2020-08-31',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500108',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500108,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 828,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-31',
          due_dt: '2020-08-31',
          reminder_dt: '2020-08-31',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500108',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500108,
            survey_completed: 0
          }
        },
        {
          id: 982,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-31',
          due_dt: '2020-08-31',
          reminder_dt: '2020-08-31',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500166',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500166,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 983,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-31',
          due_dt: '2020-08-31',
          reminder_dt: '2020-08-31',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500166',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500166,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 984,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-08-31',
          due_dt: '2020-08-31',
          reminder_dt: '2020-08-31',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500166',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500166,
            survey_completed: 0
          }
        },
        {
          id: 829,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-02',
          due_dt: '2020-09-02',
          reminder_dt: '2020-09-02',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500109',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500109,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 830,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-02',
          due_dt: '2020-09-02',
          reminder_dt: '2020-09-02',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500109',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500109,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 831,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-02',
          due_dt: '2020-09-02',
          reminder_dt: '2020-09-02',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500109',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500109,
            survey_completed: 0
          }
        },
        {
          id: 880,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-02',
          due_dt: '2020-09-02',
          reminder_dt: '2020-09-02',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500126',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500126,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 881,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-02',
          due_dt: '2020-09-02',
          reminder_dt: '2020-09-02',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500126',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500126,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 882,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-02',
          due_dt: '2020-09-02',
          reminder_dt: '2020-09-02',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500126',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500126,
            survey_completed: 0
          }
        },
        {
          id: 871,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-03',
          due_dt: '2020-09-03',
          reminder_dt: '2020-09-03',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500044',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500044,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 872,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-03',
          due_dt: '2020-09-03',
          reminder_dt: '2020-09-03',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500044',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500044,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 873,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-03',
          due_dt: '2020-09-03',
          reminder_dt: '2020-09-03',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500044',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500044,
            survey_completed: 0
          }
        },
        {
          id: 877,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-03',
          due_dt: '2020-09-03',
          reminder_dt: '2020-09-03',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500125',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500125,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 878,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-03',
          due_dt: '2020-09-03',
          reminder_dt: '2020-09-03',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500125',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500125,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 879,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-03',
          due_dt: '2020-09-03',
          reminder_dt: '2020-09-03',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500125',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500125,
            survey_completed: 0
          }
        },
        {
          id: 883,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-04',
          due_dt: '2020-09-04',
          reminder_dt: '2020-09-04',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500127',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500127,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 884,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-04',
          due_dt: '2020-09-04',
          reminder_dt: '2020-09-04',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500127',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500127,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 885,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-04',
          due_dt: '2020-09-04',
          reminder_dt: '2020-09-04',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500127',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500127,
            survey_completed: 0
          }
        },
        {
          id: 778,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-06',
          due_dt: '2020-09-05',
          reminder_dt: '2020-08-06',
          status: 'Pending',
          attr: {
            title: 'Review your past course: Welcome to Mpwr',
            body: 'Review Welcome to Mpwr',
            label: [
              'learning'
            ],
            priority: 'Low',
            type: 'lms',
            enrollment_id: 17,
            permanent_flag: 1
          }
        },
        {
          id: 779,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-06',
          due_dt: '2020-09-05',
          reminder_dt: '2020-08-06',
          status: 'Pending',
          attr: {
            title: 'Review your past course: CTB Portal (English)',
            body: 'Review CTB Portal (English)',
            label: [
              'learning'
            ],
            priority: 'Low',
            type: 'lms',
            enrollment_id: 18,
            permanent_flag: 1
          }
        },
        {
          id: 780,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-06',
          due_dt: '2020-09-05',
          reminder_dt: '2020-08-06',
          status: 'Pending',
          attr: {
            title: 'Review your past course: CTB Portal Exam (English)',
            body: 'Review CTB Portal Exam (English)',
            label: [
              'learning'
            ],
            priority: 'Low',
            type: 'lms',
            enrollment_id: 19,
            permanent_flag: 1
          }
        },
        {
          id: 781,
          creator: '0',
          owner: '214',
          assignee: '214',
          parent_id: null,
          start_dt: '2020-08-06',
          due_dt: '2020-09-05',
          reminder_dt: '2020-08-06',
          status: 'Pending',
          attr: {
            title: 'Review your past course: CT E-learning',
            body: 'Review CT E-learning',
            label: [
              'learning'
            ],
            priority: 'Low',
            type: 'lms',
            enrollment_id: 20,
            permanent_flag: 1
          }
        },
        {
          id: 785,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-06',
          due_dt: '2020-09-05',
          reminder_dt: '2020-08-06',
          status: 'Pending',
          attr: {
            title: 'Review your past course: Welcome to Mpwr',
            body: 'Review Welcome to Mpwr',
            label: [
              'learning'
            ],
            priority: 'Low',
            type: 'lms',
            enrollment_id: 16,
            permanent_flag: 1
          }
        },
        {
          id: 786,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-06',
          due_dt: '2020-09-05',
          reminder_dt: '2020-08-06',
          status: 'Pending',
          attr: {
            title: 'Review your past course: CTB Portal (English)',
            body: 'Review CTB Portal (English)',
            label: [
              'learning'
            ],
            priority: 'Low',
            type: 'lms',
            enrollment_id: 21,
            permanent_flag: 1
          }
        },
        {
          id: 787,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-06',
          due_dt: '2020-09-05',
          reminder_dt: '2020-08-06',
          status: 'Pending',
          attr: {
            title: 'Review your past course: CTB Portal Exam (English)',
            body: 'Review CTB Portal Exam (English)',
            label: [
              'learning'
            ],
            priority: 'Low',
            type: 'lms',
            enrollment_id: 22,
            permanent_flag: 1
          }
        },
        {
          id: 788,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-08-06',
          due_dt: '2020-09-05',
          reminder_dt: '2020-08-06',
          status: 'Pending',
          attr: {
            title: 'Review your past course: CT E-learning',
            body: 'Review CT E-learning',
            label: [
              'learning'
            ],
            priority: 'Low',
            type: 'lms',
            enrollment_id: 23,
            permanent_flag: 1
          }
        },
        {
          id: 832,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-05',
          due_dt: '2020-09-05',
          reminder_dt: '2020-09-05',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500110',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500110,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 833,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-05',
          due_dt: '2020-09-05',
          reminder_dt: '2020-09-05',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500110',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500110,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 834,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-05',
          due_dt: '2020-09-05',
          reminder_dt: '2020-09-05',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500110',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500110,
            survey_completed: 0
          }
        },
        {
          id: 1078,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-07',
          due_dt: '2020-09-07',
          reminder_dt: '2020-09-07',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500121',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500121,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1079,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-07',
          due_dt: '2020-09-07',
          reminder_dt: '2020-09-07',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500121',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500121,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1080,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-07',
          due_dt: '2020-09-07',
          reminder_dt: '2020-09-07',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500121',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500121,
            survey_completed: 0
          }
        },
        {
          id: 985,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-08',
          due_dt: '2020-09-08',
          reminder_dt: '2020-09-08',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500167',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500167,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 986,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-08',
          due_dt: '2020-09-08',
          reminder_dt: '2020-09-08',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500167',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500167,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 987,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-08',
          due_dt: '2020-09-08',
          reminder_dt: '2020-09-08',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500167',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500167,
            survey_completed: 0
          }
        },
        {
          id: 988,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-08',
          due_dt: '2020-09-08',
          reminder_dt: '2020-09-08',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500168',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500168,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 989,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-08',
          due_dt: '2020-09-08',
          reminder_dt: '2020-09-08',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500168',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500168,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 990,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-08',
          due_dt: '2020-09-08',
          reminder_dt: '2020-09-08',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500168',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500168,
            survey_completed: 0
          }
        },
        {
          id: 994,
          creator: '0',
          owner: '33',
          assignee: '33',
          parent_id: null,
          start_dt: '2020-09-09',
          due_dt: '2020-09-09',
          reminder_dt: '2020-09-09',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500170',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500170,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 995,
          creator: '0',
          owner: '33',
          assignee: '33',
          parent_id: null,
          start_dt: '2020-09-09',
          due_dt: '2020-09-09',
          reminder_dt: '2020-09-09',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500170',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500170,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 996,
          creator: '0',
          owner: '33',
          assignee: '33',
          parent_id: null,
          start_dt: '2020-09-09',
          due_dt: '2020-09-09',
          reminder_dt: '2020-09-09',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500170',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500170,
            survey_completed: 0
          }
        },
        {
          id: 1000,
          creator: '0',
          owner: '1337',
          assignee: '1337',
          parent_id: null,
          start_dt: '2020-09-09',
          due_dt: '2020-09-09',
          reminder_dt: '2020-09-09',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500172',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500172,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1001,
          creator: '0',
          owner: '1337',
          assignee: '1337',
          parent_id: null,
          start_dt: '2020-09-09',
          due_dt: '2020-09-09',
          reminder_dt: '2020-09-09',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500172',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500172,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1002,
          creator: '0',
          owner: '1337',
          assignee: '1337',
          parent_id: null,
          start_dt: '2020-09-09',
          due_dt: '2020-09-09',
          reminder_dt: '2020-09-09',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500172',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500172,
            survey_completed: 0
          }
        },
        {
          id: 868,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-10',
          due_dt: '2020-09-10',
          reminder_dt: '2020-09-10',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500122',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500122,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 869,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-10',
          due_dt: '2020-09-10',
          reminder_dt: '2020-09-10',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500122',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500122,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 870,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-10',
          due_dt: '2020-09-10',
          reminder_dt: '2020-09-10',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500122',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500122,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 991,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-10',
          due_dt: '2020-09-10',
          reminder_dt: '2020-09-10',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500169',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500169,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 992,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-10',
          due_dt: '2020-09-10',
          reminder_dt: '2020-09-10',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500169',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500169,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 993,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-10',
          due_dt: '2020-09-10',
          reminder_dt: '2020-09-10',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500169',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500169,
            survey_completed: 0
          }
        },
        {
          id: 997,
          creator: '0',
          owner: '33',
          assignee: '33',
          parent_id: null,
          start_dt: '2020-09-10',
          due_dt: '2020-09-10',
          reminder_dt: '2020-09-10',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500171',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500171,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 998,
          creator: '0',
          owner: '33',
          assignee: '33',
          parent_id: null,
          start_dt: '2020-09-10',
          due_dt: '2020-09-10',
          reminder_dt: '2020-09-10',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500171',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500171,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 999,
          creator: '0',
          owner: '33',
          assignee: '33',
          parent_id: null,
          start_dt: '2020-09-10',
          due_dt: '2020-09-10',
          reminder_dt: '2020-09-10',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500171',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500171,
            survey_completed: 0
          }
        },
        {
          id: 1003,
          creator: '0',
          owner: '1337',
          assignee: '1337',
          parent_id: null,
          start_dt: '2020-09-10',
          due_dt: '2020-09-10',
          reminder_dt: '2020-09-10',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500173',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500173,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1004,
          creator: '0',
          owner: '1337',
          assignee: '1337',
          parent_id: null,
          start_dt: '2020-09-10',
          due_dt: '2020-09-10',
          reminder_dt: '2020-09-10',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500173',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500173,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1005,
          creator: '0',
          owner: '1337',
          assignee: '1337',
          parent_id: null,
          start_dt: '2020-09-10',
          due_dt: '2020-09-10',
          reminder_dt: '2020-09-10',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500173',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500173,
            survey_completed: 0
          }
        },
        {
          id: 1075,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-10',
          due_dt: '2020-09-10',
          reminder_dt: '2020-09-10',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500115',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500115,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1076,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-10',
          due_dt: '2020-09-10',
          reminder_dt: '2020-09-10',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500115',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500115,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1077,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-10',
          due_dt: '2020-09-10',
          reminder_dt: '2020-09-10',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500115',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500115,
            survey_completed: 0
          }
        },
        {
          id: 1006,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500174',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500174,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1007,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500174',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500174,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1008,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500174',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500174,
            survey_completed: 0
          }
        },
        {
          id: 1009,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500175',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500175,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1010,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500175',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500175,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1011,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500175',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500175,
            survey_completed: 0
          }
        },
        {
          id: 1012,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500176',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500176,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1013,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500176',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500176,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1014,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500176',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500176,
            survey_completed: 0
          }
        },
        {
          id: 1015,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500177',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500177,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1016,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500177',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500177,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1017,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500177',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500177,
            survey_completed: 0
          }
        },
        {
          id: 1018,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500178',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500178,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1019,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500178',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500178,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1020,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500178',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500178,
            survey_completed: 0
          }
        },
        {
          id: 1021,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500179',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500179,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1022,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500179',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500179,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1023,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500179',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500179,
            survey_completed: 0
          }
        },
        {
          id: 1024,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500180',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500180,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1025,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500180',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500180,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1026,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500180',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500180,
            survey_completed: 0
          }
        },
        {
          id: 1027,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500181',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500181,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1028,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500181',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500181,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1029,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500181',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500181,
            survey_completed: 0
          }
        },
        {
          id: 1030,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500182',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500182,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1031,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500182',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500182,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1032,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500182',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500182,
            survey_completed: 0
          }
        },
        {
          id: 1033,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500183',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500183,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1034,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500183',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500183,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1035,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500183',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500183,
            survey_completed: 0
          }
        },
        {
          id: 1036,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500184',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500184,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1037,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500184',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500184,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1038,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-12',
          due_dt: '2020-09-12',
          reminder_dt: '2020-09-12',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500184',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500184,
            survey_completed: 0
          }
        },
        {
          id: 1039,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500185',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500185,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1040,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500185',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500185,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1041,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500185',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500185,
            survey_completed: 0
          }
        },
        {
          id: 1042,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500186',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500186,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1043,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500186',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500186,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1044,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500186',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500186,
            survey_completed: 0
          }
        },
        {
          id: 1045,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500187',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500187,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1046,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500187',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500187,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1047,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500187',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500187,
            survey_completed: 0
          }
        },
        {
          id: 1048,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500188',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500188,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1049,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500188',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500188,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1050,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500188',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500188,
            survey_completed: 0
          }
        },
        {
          id: 1051,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500189',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500189,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1052,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500189',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500189,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1053,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500189',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500189,
            survey_completed: 0
          }
        },
        {
          id: 1054,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500190',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500190,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1055,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500190',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500190,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1056,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500190',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500190,
            survey_completed: 0
          }
        },
        {
          id: 1057,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500191',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500191,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1058,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500191',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500191,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1059,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500191',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500191,
            survey_completed: 0
          }
        },
        {
          id: 1060,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500192',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500192,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1061,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500192',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500192,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1062,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500192',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500192,
            survey_completed: 0
          }
        },
        {
          id: 1063,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500193',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500193,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1064,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500193',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500193,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1065,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500193',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500193,
            survey_completed: 0
          }
        },
        {
          id: 1066,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500194',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500194,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1067,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500194',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500194,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1068,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500194',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500194,
            survey_completed: 0
          }
        },
        {
          id: 1069,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500195',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500195,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1070,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500195',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500195,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1071,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-13',
          due_dt: '2020-09-13',
          reminder_dt: '2020-09-13',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500195',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500195,
            survey_completed: 0
          }
        },
        {
          id: 1072,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-16',
          due_dt: '2020-09-16',
          reminder_dt: '2020-09-16',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500196',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500196,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1073,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-16',
          due_dt: '2020-09-16',
          reminder_dt: '2020-09-16',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500196',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500196,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1074,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-16',
          due_dt: '2020-09-16',
          reminder_dt: '2020-09-16',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500196',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500196,
            survey_completed: 0
          }
        },
        {
          id: 1081,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-17',
          due_dt: '2020-09-17',
          reminder_dt: '2020-09-17',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500200',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500200,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1082,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-17',
          due_dt: '2020-09-17',
          reminder_dt: '2020-09-17',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500200',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500200,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1083,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-17',
          due_dt: '2020-09-17',
          reminder_dt: '2020-09-17',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500200',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500200,
            survey_completed: 0
          }
        },
        {
          id: 1087,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-17',
          due_dt: '2020-09-17',
          reminder_dt: '2020-09-17',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500210',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500210,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1088,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-17',
          due_dt: '2020-09-17',
          reminder_dt: '2020-09-17',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500210',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500210,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1089,
          creator: '0',
          owner: '88',
          assignee: '88',
          parent_id: null,
          start_dt: '2020-09-17',
          due_dt: '2020-09-17',
          reminder_dt: '2020-09-17',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500210',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500210,
            survey_completed: 0
          }
        },
        {
          id: 1084,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500209',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500209,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1085,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500209',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500209,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1086,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500209',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500209,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1090,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-17',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-17',
          status: 'Pending',
          attr: {
            title: 'Complete your next course: CT Portal (MyCTBLearning)',
            body: 'Complete CT Portal (MyCTBLearning)',
            label: [
              'learning'
            ],
            priority: 'High',
            type: 'external',
            url: 'https://myctblearning.com',
            enrollment_id: 26
          }
        },
        {
          id: 1091,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500235',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500235,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1092,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500235',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500235,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1093,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500235',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500235,
            survey_completed: 0
          }
        },
        {
          id: 1094,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500236',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500236,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1095,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500236',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500236,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1096,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500236',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500236,
            survey_completed: 0
          }
        },
        {
          id: 1097,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500237',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500237,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1098,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500237',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500237,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1099,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500237',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500237,
            survey_completed: 0
          }
        },
        {
          id: 1100,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500238',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500238,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1101,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500238',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500238,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1102,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500238',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500238,
            survey_completed: 0
          }
        },
        {
          id: 1103,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500239',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500239,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1104,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500239',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500239,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1105,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500239',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500239,
            survey_completed: 0
          }
        },
        {
          id: 1106,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500240',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500240,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1107,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500240',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500240,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1108,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500240',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500240,
            survey_completed: 0
          }
        },
        {
          id: 1109,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500241',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500241,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1110,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500241',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500241,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1111,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500241',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500241,
            survey_completed: 0
          }
        },
        {
          id: 1112,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500242',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500242,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1113,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500242',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500242,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1114,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500242',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500242,
            survey_completed: 0
          }
        },
        {
          id: 1115,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500243',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500243,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1116,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500243',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500243,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1117,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500243',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500243,
            survey_completed: 0
          }
        },
        {
          id: 1118,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500244',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500244,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1119,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500244',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500244,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1120,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500244',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500244,
            survey_completed: 0
          }
        },
        {
          id: 1121,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500245',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500245,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1122,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500245',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500245,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1123,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-19',
          due_dt: '2020-09-19',
          reminder_dt: '2020-09-19',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500245',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500245,
            survey_completed: 0
          }
        },
        {
          id: 1127,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-21',
          due_dt: '2020-09-21',
          reminder_dt: '2020-09-21',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500207',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500207,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1128,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-21',
          due_dt: '2020-09-21',
          reminder_dt: '2020-09-21',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500207',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500207,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1129,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-21',
          due_dt: '2020-09-21',
          reminder_dt: '2020-09-21',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500207',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500207,
            survey_completed: 0
          }
        },
        {
          id: 1145,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500256',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500256,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1146,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500256',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500256,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1147,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500256',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500256,
            survey_completed: 0
          }
        },
        {
          id: 1157,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500260',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500260,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1158,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500260',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500260,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1159,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500260',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500260,
            survey_completed: 0
          }
        },
        {
          id: 1160,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500261',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500261,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1161,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500261',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500261,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1162,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500261',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500261,
            survey_completed: 0
          }
        },
        {
          id: 1163,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500262',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500262,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1164,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500262',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500262,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1165,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500262',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500262,
            survey_completed: 0
          }
        },
        {
          id: 1166,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500263',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500263,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1167,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500263',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500263,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1168,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500263',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500263,
            survey_completed: 0
          }
        },
        {
          id: 1169,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500264',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500264,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1170,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500264',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500264,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1171,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500264',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500264,
            survey_completed: 0
          }
        },
        {
          id: 1172,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500265',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500265,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1173,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500265',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500265,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1174,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500265',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500265,
            survey_completed: 0
          }
        },
        {
          id: 1175,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500266',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500266,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1176,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500266',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500266,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1177,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500266',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500266,
            survey_completed: 0
          }
        },
        {
          id: 1178,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500267',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500267,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1179,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500267',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500267,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1180,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500267',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500267,
            survey_completed: 0
          }
        },
        {
          id: 1181,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500268',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500268,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1182,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500268',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500268,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1183,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500268',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500268,
            survey_completed: 0
          }
        },
        {
          id: 1184,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500269',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500269,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1185,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500269',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500269,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1186,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500269',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500269,
            survey_completed: 0
          }
        },
        {
          id: 1187,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500270',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500270,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1188,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500270',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500270,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1189,
          creator: '0',
          owner: '35',
          assignee: '35',
          parent_id: null,
          start_dt: '2020-09-23',
          due_dt: '2020-09-23',
          reminder_dt: '2020-09-23',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500270',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500270,
            survey_completed: 0
          }
        },
        {
          id: 1124,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-24',
          due_dt: '2020-09-24',
          reminder_dt: '2020-09-24',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500206',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500206,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1125,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-24',
          due_dt: '2020-09-24',
          reminder_dt: '2020-09-24',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500206',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500206,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1126,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-24',
          due_dt: '2020-09-24',
          reminder_dt: '2020-09-24',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500206',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500206,
            survey_completed: 0
          }
        },
        {
          id: 1136,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-24',
          due_dt: '2020-09-24',
          reminder_dt: '2020-09-24',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500253',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500253,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1137,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-24',
          due_dt: '2020-09-24',
          reminder_dt: '2020-09-24',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500253',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500253,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1138,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-24',
          due_dt: '2020-09-24',
          reminder_dt: '2020-09-24',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500253',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500253,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1139,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-24',
          due_dt: '2020-09-24',
          reminder_dt: '2020-09-24',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500254',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500254,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1140,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-24',
          due_dt: '2020-09-24',
          reminder_dt: '2020-09-24',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500254',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500254,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1141,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-24',
          due_dt: '2020-09-24',
          reminder_dt: '2020-09-24',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500254',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500254,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1142,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-24',
          due_dt: '2020-09-24',
          reminder_dt: '2020-09-24',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500255',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500255,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1143,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-24',
          due_dt: '2020-09-24',
          reminder_dt: '2020-09-24',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500255',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500255,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1144,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-24',
          due_dt: '2020-09-24',
          reminder_dt: '2020-09-24',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500255',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500255,
            survey_completed: 0
          }
        },
        {
          id: 1190,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-24',
          due_dt: '2020-09-24',
          reminder_dt: '2020-09-24',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500203',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500203,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1191,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-24',
          due_dt: '2020-09-24',
          reminder_dt: '2020-09-24',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500203',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500203,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1192,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-24',
          due_dt: '2020-09-24',
          reminder_dt: '2020-09-24',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500203',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500203,
            survey_completed: 0
          }
        },
        {
          id: 1130,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500251',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500251,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1131,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500251',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500251,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1132,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500251',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500251,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1133,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500252',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500252,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1134,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500252',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500252,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1135,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500252',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500252,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1148,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500257',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500257,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1149,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500257',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500257,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1150,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500257',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500257,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1151,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500258',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500258,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1152,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500258',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500258,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1153,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500258',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500258,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1154,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500259',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500259,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1155,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500259',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500259,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1156,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500259',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500259,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1193,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500271',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500271,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1194,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500271',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500271,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1195,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500271',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500271,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1196,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500272',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500272,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1197,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500272',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500272,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1198,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500272',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500272,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1199,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500273',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500273,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1200,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500273',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500273,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1201,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500273',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500273,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1202,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500274',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500274,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1203,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500274',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500274,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1204,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500274',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500274,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1205,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500275',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500275,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1206,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500275',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500275,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1207,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500275',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500275,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1208,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500276',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500276,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1209,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500276',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500276,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1210,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500276',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500276,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1211,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500277',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500277,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1212,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500277',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500277,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1213,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500277',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500277,
            survey_completed: 0
          }
        },
        {
          id: 1214,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500278',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500278,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1215,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500278',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500278,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1216,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500278',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500278,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1244,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500289',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500289,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1245,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500289',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500289,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1246,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500289',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500289,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1247,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500290',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500290,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1248,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500290',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500290,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1249,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500290',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500290,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1250,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500291',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500291,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1251,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500291',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500291,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1252,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500291',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500291,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1253,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500292',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500292,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1254,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500292',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500292,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1255,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500292',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500292,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1256,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500293',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500293,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1257,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500293',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500293,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1258,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500293',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500293,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1259,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500294',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500294,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1260,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500294',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500294,
            rollover: 0,
            system_notes: 'Dismissed by system due to no rollover'
          }
        },
        {
          id: 1261,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-25',
          due_dt: '2020-09-25',
          reminder_dt: '2020-09-25',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500294',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500294,
            survey_completed: 0
          }
        },
        {
          id: 1268,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-26',
          due_dt: '2020-09-26',
          reminder_dt: '2020-09-26',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500298',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500298,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1269,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-26',
          due_dt: '2020-09-26',
          reminder_dt: '2020-09-26',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500298',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500298,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1270,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-26',
          due_dt: '2020-09-26',
          reminder_dt: '2020-09-26',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500298',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500298,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1271,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-26',
          due_dt: '2020-09-26',
          reminder_dt: '2020-09-26',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500299',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500299,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1272,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-26',
          due_dt: '2020-09-26',
          reminder_dt: '2020-09-26',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500299',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500299,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1273,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-26',
          due_dt: '2020-09-26',
          reminder_dt: '2020-09-26',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500299',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500299,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1274,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-26',
          due_dt: '2020-09-26',
          reminder_dt: '2020-09-26',
          status: 'Dismissed',
          attr: {
            title: 'Check in to shift 500300',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500300,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1275,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-26',
          due_dt: '2020-09-26',
          reminder_dt: '2020-09-26',
          status: 'Dismissed',
          attr: {
            title: 'Check out of shift 500300',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500300,
            rollover: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1276,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-26',
          due_dt: '2020-09-26',
          reminder_dt: '2020-09-26',
          status: 'Dismissed',
          attr: {
            title: 'Complete survey for shift 500300',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500300,
            survey_completed: 0,
            system_message: 'shift deleted'
          }
        },
        {
          id: 1220,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-29',
          due_dt: '2020-09-29',
          reminder_dt: '2020-09-29',
          status: 'Pending',
          attr: {
            title: 'Check in to shift 500247',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500247,
            rollover: 0
          }
        },
        {
          id: 1221,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-29',
          due_dt: '2020-09-29',
          reminder_dt: '2020-09-29',
          status: 'Pending',
          attr: {
            title: 'Check out of shift 500247',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500247,
            rollover: 0
          }
        },
        {
          id: 1222,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-09-29',
          due_dt: '2020-09-29',
          reminder_dt: '2020-09-29',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500247',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500247,
            survey_completed: 0
          }
        },
        {
          id: 1223,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-29',
          due_dt: '2020-09-29',
          reminder_dt: '2020-09-29',
          status: 'Pending',
          attr: {
            title: 'Check in to shift 500249',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500249,
            rollover: 0
          }
        },
        {
          id: 1224,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-29',
          due_dt: '2020-09-29',
          reminder_dt: '2020-09-29',
          status: 'Pending',
          attr: {
            title: 'Check out of shift 500249',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500249,
            rollover: 0
          }
        },
        {
          id: 1225,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-09-29',
          due_dt: '2020-09-29',
          reminder_dt: '2020-09-29',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500249',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500249,
            survey_completed: 0
          }
        },
        {
          id: 1217,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-10-01',
          due_dt: '2020-10-01',
          reminder_dt: '2020-10-01',
          status: 'Pending',
          attr: {
            title: 'Check in to shift 500246',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500246,
            rollover: 0
          }
        },
        {
          id: 1218,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-10-01',
          due_dt: '2020-10-01',
          reminder_dt: '2020-10-01',
          status: 'Pending',
          attr: {
            title: 'Check out of shift 500246',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500246,
            rollover: 0
          }
        },
        {
          id: 1219,
          creator: '0',
          owner: '39',
          assignee: '39',
          parent_id: null,
          start_dt: '2020-10-01',
          due_dt: '2020-10-01',
          reminder_dt: '2020-10-01',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500246',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500246,
            survey_completed: 0
          }
        },
        {
          id: 1226,
          creator: '0',
          owner: '101',
          assignee: '101',
          parent_id: null,
          start_dt: '2020-10-01',
          due_dt: '2020-10-01',
          reminder_dt: '2020-10-01',
          status: 'Pending',
          attr: {
            title: 'Check in to shift 500250',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500250,
            rollover: 0
          }
        },
        {
          id: 1227,
          creator: '0',
          owner: '101',
          assignee: '101',
          parent_id: null,
          start_dt: '2020-10-01',
          due_dt: '2020-10-01',
          reminder_dt: '2020-10-01',
          status: 'Pending',
          attr: {
            title: 'Check out of shift 500250',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500250,
            rollover: 0
          }
        },
        {
          id: 1228,
          creator: '0',
          owner: '101',
          assignee: '101',
          parent_id: null,
          start_dt: '2020-10-01',
          due_dt: '2020-10-01',
          reminder_dt: '2020-10-01',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500250',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500250,
            survey_completed: 0
          }
        },
        {
          id: 1232,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-10-06',
          due_dt: '2020-10-06',
          reminder_dt: '2020-10-06',
          status: 'Pending',
          attr: {
            title: 'Check in to shift 500233',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500233,
            rollover: 0
          }
        },
        {
          id: 1233,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-10-06',
          due_dt: '2020-10-06',
          reminder_dt: '2020-10-06',
          status: 'Pending',
          attr: {
            title: 'Check out of shift 500233',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500233,
            rollover: 0
          }
        },
        {
          id: 1234,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-10-06',
          due_dt: '2020-10-06',
          reminder_dt: '2020-10-06',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500233',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500233,
            survey_completed: 0
          }
        },
        {
          id: 1235,
          creator: '0',
          owner: '67',
          assignee: '67',
          parent_id: null,
          start_dt: '2020-10-07',
          due_dt: '2020-10-07',
          reminder_dt: '2020-10-07',
          status: 'Pending',
          attr: {
            title: 'Check in to shift 500280',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500280,
            rollover: 0
          }
        },
        {
          id: 1236,
          creator: '0',
          owner: '67',
          assignee: '67',
          parent_id: null,
          start_dt: '2020-10-07',
          due_dt: '2020-10-07',
          reminder_dt: '2020-10-07',
          status: 'Pending',
          attr: {
            title: 'Check out of shift 500280',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500280,
            rollover: 0
          }
        },
        {
          id: 1237,
          creator: '0',
          owner: '67',
          assignee: '67',
          parent_id: null,
          start_dt: '2020-10-07',
          due_dt: '2020-10-07',
          reminder_dt: '2020-10-07',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500280',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500280,
            survey_completed: 0
          }
        },
        {
          id: 1229,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-10-08',
          due_dt: '2020-10-08',
          reminder_dt: '2020-10-08',
          status: 'Pending',
          attr: {
            title: 'Check in to shift 500232',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500232,
            rollover: 0
          }
        },
        {
          id: 1230,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-10-08',
          due_dt: '2020-10-08',
          reminder_dt: '2020-10-08',
          status: 'Pending',
          attr: {
            title: 'Check out of shift 500232',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500232,
            rollover: 0
          }
        },
        {
          id: 1231,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-10-08',
          due_dt: '2020-10-08',
          reminder_dt: '2020-10-08',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500232',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500232,
            survey_completed: 0
          }
        },
        {
          id: 1238,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-10-20',
          due_dt: '2020-10-20',
          reminder_dt: '2020-10-20',
          status: 'Pending',
          attr: {
            title: 'Check in to shift 500285',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500285,
            rollover: 0
          }
        },
        {
          id: 1239,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-10-20',
          due_dt: '2020-10-20',
          reminder_dt: '2020-10-20',
          status: 'Pending',
          attr: {
            title: 'Check out of shift 500285',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500285,
            rollover: 0
          }
        },
        {
          id: 1240,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-10-20',
          due_dt: '2020-10-20',
          reminder_dt: '2020-10-20',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500285',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500285,
            survey_completed: 0
          }
        },
        {
          id: 1241,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-10-22',
          due_dt: '2020-10-22',
          reminder_dt: '2020-10-22',
          status: 'Pending',
          attr: {
            title: 'Check in to shift 500286',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500286,
            rollover: 0
          }
        },
        {
          id: 1242,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-10-22',
          due_dt: '2020-10-22',
          reminder_dt: '2020-10-22',
          status: 'Pending',
          attr: {
            title: 'Check out of shift 500286',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500286,
            rollover: 0
          }
        },
        {
          id: 1243,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-10-22',
          due_dt: '2020-10-22',
          reminder_dt: '2020-10-22',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500286',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500286,
            survey_completed: 0
          }
        },
        {
          id: 1262,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-10-27',
          due_dt: '2020-10-27',
          reminder_dt: '2020-10-27',
          status: 'Pending',
          attr: {
            title: 'Check in to shift 500295',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500295,
            rollover: 0
          }
        },
        {
          id: 1263,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-10-27',
          due_dt: '2020-10-27',
          reminder_dt: '2020-10-27',
          status: 'Pending',
          attr: {
            title: 'Check out of shift 500295',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500295,
            rollover: 0
          }
        },
        {
          id: 1264,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-10-27',
          due_dt: '2020-10-27',
          reminder_dt: '2020-10-27',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500295',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500295,
            survey_completed: 0
          }
        },
        {
          id: 1265,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-10-29',
          due_dt: '2020-10-29',
          reminder_dt: '2020-10-29',
          status: 'Pending',
          attr: {
            title: 'Check in to shift 500296',
            body: 'Check in to your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkin',
            shift_id: 500296,
            rollover: 0
          }
        },
        {
          id: 1266,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-10-29',
          due_dt: '2020-10-29',
          reminder_dt: '2020-10-29',
          status: 'Pending',
          attr: {
            title: 'Check out of shift 500296',
            body: 'Check out of your shift',
            label: [
              'timekeeping'
            ],
            priority: 'High',
            points: 5,
            type: 'checkout',
            shift_id: 500296,
            rollover: 0
          }
        },
        {
          id: 1267,
          creator: '0',
          owner: '1338',
          assignee: '1338',
          parent_id: null,
          start_dt: '2020-10-29',
          due_dt: '2020-10-29',
          reminder_dt: '2020-10-29',
          status: 'Pending',
          attr: {
            title: 'Complete survey for shift 500296',
            body: 'Complete the survey for your shift',
            label: [
              'survey'
            ],
            priority: 'High',
            points: 5,
            type: 'survey',
            shift_id: 500296,
            survey_completed: 0
          }
        }
      ]
    }
  }

}
