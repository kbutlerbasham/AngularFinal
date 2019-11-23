import { Component, OnInit } from '@angular/core';

import { Description } from '../models/description';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  model: Description = new Description();
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Submit Successful: ', this.model);
}

}
