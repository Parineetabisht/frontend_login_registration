import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

credentials={
username:'',
password:''
}

onSubmit(){
if((this.credentials.username!='' && this.credentials.password!='') &&(this.credentials.username!=null && this.credentials.password!=null))
{
  console.log("Submit the form to server");
}
else{
  console.log("Fields are empty");
}

}
}
