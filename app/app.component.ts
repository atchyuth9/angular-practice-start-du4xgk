import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pipe',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class Pipess implements OnInit {
  constructor(private fb: FormBuilder) {}
  frmRegister = this.fb.group({
    Name: [],
  });

  ngOnInit(): void {}

  
  
}