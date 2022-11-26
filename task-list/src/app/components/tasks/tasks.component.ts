import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../service/task.service' // se importa el servicio
import {Task} from '../TASK' // se importa por el nombre de la interface y se le pasa path
//import {TASK} from '../mock-task' // se importa el arreglo de objetos y se le pasa el path, pero teniendo un servicio
//no hay necesidad de importar el mock. se va a trabajar desde el service


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
// para acceder a los datos del mock y de la interfaz se crea una variable.
// esto nos permite acceder a nuestro arreglos desde el component.html con las directivas ngFor.
tasks: Task[] = []; 

// ahora desde el constructor de crea una variable de tipo private y del servicio
  constructor(private taskService:TaskService) { }

  ngOnInit(): void { // ngOnInit es una funcion que se ejecuta cuando se monta el componente.
    this.taskService.getTask().subscribe(tasksSer => 
      this.tasks = tasksSer)
       // se subscribe a la funcion getTask del servicio https://www.delftstack.com/es/howto/angular/angular-subscribe/
  }
 deleteTask(task:Task){
  this.taskService
  .deleteTask(task)
  .subscribe(()=>(this.tasks = this.tasks.filter(t =>
       t.id !== task.id)))
  
}

}
