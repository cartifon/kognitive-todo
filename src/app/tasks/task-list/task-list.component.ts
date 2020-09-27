import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TaskService } from '../services/task.service';
import { TaskEntity } from '../task.entity';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  taskList$ = this.taskService.taskList$;
  selectedOwner$ = this.taskService.selectedOwner$;

  taskListForOwnerSelected$ = combineLatest([
    this.taskList$,
    this.selectedOwner$
  ])
    .pipe(
      map(([taskList, ownerSelected]) =>
        taskList.data.filter(task => ownerSelected ? task.owner === ownerSelected : true)
      ),
      shareReplay(1)
    );

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  finishTask(task: TaskEntity): void {
    if (task.status === 'Done') {
      task.status = 'Pending';
    } else {
      task.status = 'Done';
    }
  }

  getInfo(task: TaskEntity): string {
    return task.attr.title || task.attr.body || task.attr.description;
  }

}
