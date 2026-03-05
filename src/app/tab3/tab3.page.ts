import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonCard, IonCardHeader, 
    IonCardTitle, IonCardContent, IonItem, IonInput, IonButton, IonGrid, IonRow, IonCol} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { Calculate3 } from '../tab3/class/calculate3';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [CommonModule,IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, 
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonButton, IonGrid, IonRow, IonCol, MyHeaderComponent],
})
export class Tab3Page {
  matrix: number[][] = [];
  sum: number = 0;

  generate(n: any) {
    try {
      let size = parseInt(n);
      if (isNaN(size) || size <= 0) {
        alert("Введіть вірне число.");
        return;
      }
      let calc = new Calculate3(size);
      this.matrix = calc.getMatrix();
      this.sum = calc.getSum();
    } catch (error) {
      alert("Сталася помилка при генерації матриці.");
    }
  }
  constructor() {}
}
