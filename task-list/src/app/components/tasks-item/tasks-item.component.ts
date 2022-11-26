import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {Task} from '../TASK' // se importa por el nombre de la interface y se le pasa path
import {TASK} from '../mock-task' // se importa el arreglo de objetos y se le pasa el path
// se debe importar el mock y la interface para poder usarla en el componente.
// ademas tambien se importa el decorador Input.
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // fatTimes es un icono.

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task=TASK[0]; // a la variable del input se le dice que es de tipo Task(que es una interfaz) 
  //y se le asigna el mock (quien es el (TASK) que contienen el arreglo de objetos).
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();// se hace el output para sacar fuera la funcion
  //se crea una variable de tipo EventEmitter.

  faTimes = faTimes; // se declara una variable que se le asigna el icono. sugerible que sea el mismo nombre.

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task: Task){
    this.onDeleteTask.emit(task); // se emite el evento pasando por parametro el tarea hacia el service.
  }
}
