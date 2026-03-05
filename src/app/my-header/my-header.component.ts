import { Component, Input, OnInit } from '@angular/core';
import { IonToolbar, IonButtons, IonTitle, IonHeader } from '@ionic/angular/standalone';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  imports: [IonHeader, IonToolbar, IonButtons, IonTitle],
  styleUrls: ['./my-header.component.scss'],
})
export class MyHeaderComponent  implements OnInit {
  @Input() name: string = 'Лабораторні роботи';
  constructor() { }

  ngOnInit() {}

}
