import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from '../../user/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskList$ = this.userService.getTaskList().pipe(
    shareReplay(1)
  );

  private ownerSelectedSubject = new BehaviorSubject<string>('33');
  ownerSelectedAction$ = this.ownerSelectedSubject.asObservable();

  selectedOwner$ = combineLatest([
    this.taskList$,
    this.ownerSelectedAction$
  ])
    .pipe(
      map(([taskList, ownerSelected]) =>
        taskList.data.find(task => task.owner === ownerSelected)?.owner
      ),
      shareReplay(1)
    );


  constructor(private userService: UserService) { }

  selectedOwnerChanged(selectedOwner: string): void {
    this.ownerSelectedSubject.next(selectedOwner);
  }
}
