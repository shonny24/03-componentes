import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  /* Se utiliza para obtener alguna elemento del html */
  @ViewChild( IonInfiniteScroll , null) infiniteScroll: IonInfiniteScroll;

  data: any[] = Array (20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    console.log('argar siguientes');

    setTimeout(() => {

      /* para no cargar mas de 50 registros */
      if (this.data.length > 50) {
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);
      /* deja de mostrar el cargando cuando se cargo todos los elementos */
      event.target.complete();

    }, 1000);
  }

}
