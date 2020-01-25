import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  constructor() { }
  item1:string;
  item2:string;
  price1:number;
  price2:number;
 @Output() generate = new EventEmitter;
 
  generateinvoice()
  {
         let invoice={item1:this.item1,item2:this.item2,price1:this.price1,price2:this.price2,total:+this.price1+ + this.price2};
           this.generate.emit(invoice)

  }

  ngOnInit() {
  }

}
