import { Component, OnInit } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { TaskEntity } from '../../user/services/task.entity';
import { UserService } from '../../user/services/user.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  taskList$ = this.userService.getTaskList().pipe(
    shareReplay(1)
  );

  filteredList: any[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.taskList$.subscribe(taskList => {
      this.filteredList = taskList.data.filter((task: TaskEntity) => {
        return task.owner === '1338';
      });
    });
  }

}
