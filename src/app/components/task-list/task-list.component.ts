import { Component, inject, OnInit, signal } from '@angular/core';
import { FirebaseApps, FirebaseApp } from '@angular/fire/app';
import { collection, collectionData, CollectionReference, Firestore, getDocs } from '@angular/fire/firestore';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    standalone: true,
    imports: [],
    selector: 'task-list',
    templateUrl: 'task-list.component.html',
})

export class TaskListComponent {
    private firestore = inject(Firestore);

    private tasksCollection = collection(this.firestore, 'tasks') as CollectionReference<Task>;

    private tasks$ = collectionData(this.tasksCollection, { idField: 'id' });
    tasks = toSignal(this.tasks$, { initialValue: [] as Task[] });
}

interface Task {
  id: string;      // ← se agrega con `idField: 'id'`
  title: string;
  completed: boolean;
  dueDate?: Date;   // por ejemplo, opcional
}
