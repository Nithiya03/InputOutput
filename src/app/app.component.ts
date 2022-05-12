import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title='';
    child:string='';
   usertext:string = 'nithiya';
   onChildChange(event:string):void
{
 this.child=event;
}}
