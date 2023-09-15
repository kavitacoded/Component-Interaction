import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public msg:string="Hello From Parent"
  constructor() { }

  public SendClick(){
   this.msg="hello";
  }

  ngOnInit(): void {
  }

}
