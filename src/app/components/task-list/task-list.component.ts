import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TaskService } from '../../services/task.service';
import Task from '../../interfaces/task';

@Component({
    standalone: true,
    imports: [],
    selector: 'task-list',
    templateUrl: 'task-list.component.html',
})

export class TaskListComponent {
    private taskService = inject(TaskService);

    tasks = toSignal(this.taskService.tasks$, { initialValue: [] as Task[] });
}
