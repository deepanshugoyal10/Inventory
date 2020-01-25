import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template';
  details=[];
  
  total:number;
  
savedetails(i:any)
{
  this.total=i.total;
  this.details.push(i);
  
}



}
