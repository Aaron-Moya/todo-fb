import { inject, Injectable } from '@angular/core';
import { Firestore, collection, CollectionReference, collectionData } from '@angular/fire/firestore';
import Task from '../interfaces/task';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TaskService {
      private firestore = inject(Firestore);

      private tasksCollection = collection(this.firestore, 'tasks') as CollectionReference<Task>;

      tasks$: Observable<Task[]> = collectionData(this.tasksCollection, { idField: 'id' });
}
