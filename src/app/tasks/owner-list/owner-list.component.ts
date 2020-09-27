import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {

  taskList$ = this.taskService.taskList$;

  ownerList = new Set();
  statusList = new Set();
  priorityList = new Set();
  selectedOwner$ = this.taskService.selectedOwner$;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskList$.subscribe((taskList) => {
      taskList.data.forEach(task => {
        this.ownerList.add(task.owner);
        this.statusList.add(task.status);
        this.priorityList.add(task.attr.priority);
      });
    });
  }

  selectOwner(owner: string): void {
    this.taskService.selectedOwnerChanged(owner);
  }

}
