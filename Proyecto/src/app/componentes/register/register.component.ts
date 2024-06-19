import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private formBuilder:FormBuilder){}

  profileForm = this.formBuilder.group({
    firstName:[''],
    secondName:[''],
    firstLastName:[''],
    secondLastName:[''],

    dob:[''],
    gender:[''],
    telefono: ['', [Validators.pattern('[0-9]*')]],
    docmuento:['']
  });

  
 
  saveForm(){
    console.log('Form data is ', this.profileForm.value);
  }



  //Validaciones
  isInputEmptyuno: boolean = true;
  isInputEmpty: boolean = true;
  firstLastName: boolean = true;
  secondLastName: boolean = true;

  onInputChange(event: any) {
    this.isInputEmptyuno = event.target.value.trim() === '';

  }


onSecondNameInputChange(event: any){
  this.isInputEmpty = event.target.value.trim() === '';
}

OnfirstLastName(event: any){
  this.firstLastName = event.target.value.trim() === '';
}
OnsecondLastName(event: any){
  this.secondLastName = event.target.value.trim() === '';
}

  
}
