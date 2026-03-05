import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, 
  IonCardTitle, IonCardContent, IonItem, IonInput, IonButton} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { Calculate } from '../tab1/class/calculate';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, 
    ExploreContainerComponent, MyHeaderComponent, IonCard, IonCardHeader, 
    IonCardTitle, IonCardContent, IonItem, IonInput, IonButton],
})
export class Tab1Page {
  d: number = 0;
  calculate(a:any, b:any, c:any) {
    try {
      let numA = parseFloat(a);
      let numB = parseFloat(b);
      let numC = parseFloat(c);
      if (isNaN(numA) || isNaN(numB) || isNaN(numC)) {
        throw new Error("Введіть коректні числа");
      }
      let calc = new Calculate(numA, numB, numC);
      this.d = calc.D();
    } catch (error) {
      alert('Введіть коректні числа');
    }
  }
  constructor() {}
}
