import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})


export class ButtonComponent implements OnInit {

    titleAddButton:string="Add task" ;

    me_style_button = {
    "background-color":"green",
    "color":"white",
    "border-radius.px":"5px",
  }

 

 @Output() buttonClicked = new EventEmitter();


  constructor() { 
    
  }
  
  ngOnInit(): void {
  }

  
  onClick(){
    this.buttonClicked.emit()
  }

}
