import { Injectable } from '@angular/core';

import { Task } from '../models/task';

import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    tasks: Task[] = [
      {
        id: 0,
        title: 'Angular Final',
        completionTime: '20 Hours',
        itemsNeeded: 'Laptop, Exeter, VSCode, Brain',
        description: 'Start, complete, and submit the Angular Final.'
      },
      {
        id: 1,
        title: 'Kidmin Lesson Plan',
        completionTime: '1 Hour',
        itemsNeeded: 'Laptop, Bible, Imagination, Brain',
        description: 'Write the lesson plan for the lesson for this coming Wednesday. '
      },
      {
        id: 2,
        title: 'Daily Bible Reading',
        completionTime: '2 Hours',
        itemsNeeded: 'Bible, Heart, Plan',
        description: 'Spend 2 hours reading the planned reading and reflecting. Spend any extra time tuning into God. '
      }
    ];

    getTasks = (): Observable<Task[]> => {
      return of(this.tasks);
  };

    constructor() {}
}