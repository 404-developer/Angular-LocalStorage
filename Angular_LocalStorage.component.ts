import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('form', { read: NgForm, static:true }) form: any;
  
  student:object={}
  student1stuser:any=[];
 olduser:any=[];
  constructor() { }

  ngOnInit(): void {
    this.olduser = JSON.parse(localStorage.getItem('form') || '[]');
    console.log(this.olduser)
   }
  saveForm(event:any)
  {

    this.student=(this.form.value)
  this.student1stuser=this.olduser;
   this.student1stuser.push(this.student)
  localStorage.setItem('form',JSON.stringify(this.student1stuser))
  console.log(this.student);
}
  
    
    }
