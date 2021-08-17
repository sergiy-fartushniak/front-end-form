import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {



  ngOnInit(): void {}
  name = '';

  inputHandler(event: any) {
    this.name = event.target.value
    console.log(this.name);
  }
}
