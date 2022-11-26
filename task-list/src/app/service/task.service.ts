import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
//como las tareas estan en un servidor y no sabemos cuanto puede tardar
// la carga de datos, esto hace que sea asicronico, no se sabe cuanto va a tardar.
import {HttpClient,HttpHandler} from '@angular/common/http'
//se importa desde angular common el paquete de protocolo http. Esto nos permite hacer peticiones 
//get post put delete ect. Y tambien se debe de importar en el modulo raiz. root.
import {Task} from '../components/TASK'


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl:string = 'http://localhost:5000/task'; //se le pasa a una variable la direccion de servidor
  //donde tenemos guardado nlos datos en la BD fiticia.(json.serve)


  constructor(
    private http:HttpClient, // se crea un variable de tipo protocolo httpclient para poder manejar peticiones
    private httpHandler:HttpHandler
 
  ) { }

  getTask():Observable<Task[]>{
    //const tasks = of(TASK);
    //return tasks;
    // al hacer uso de esta base de datos esta que era el mock lo descartamos.
    return this.http.get<Task[]>(this.apiUrl); //esto nos devuelve la lista de tareas que viene desde el db.json de los archivos.
  }
  deleteTask(task:Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
