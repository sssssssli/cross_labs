import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, 
    IonCardTitle, IonCardContent, IonItem, IonInput, IonButton} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { Calculate2 } from '../tab2/class/calculate2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, 
    IonCardTitle, IonCardContent, IonItem, IonInput, IonButton, ExploreContainerComponent, MyHeaderComponent, FormsModule]
})
export class Tab2Page {
  numbers: number[] = [];
  product: number = 0;
  
  calculate(a: any, b: any) {
    try {
      let numA = parseInt(a);
      let numB = parseInt(b);
      if (isNaN(numA) || isNaN(numB)) {
        throw new Error("Введіть коректні числа");
      }
      let calc = new Calculate2(numA, numB);
      this.numbers = calc.getNumbers();
      this.product = calc.getProduct();
    } catch (error) {
      alert('Введіть коректні числа');
    }
  }
  constructor() {}
}
      
