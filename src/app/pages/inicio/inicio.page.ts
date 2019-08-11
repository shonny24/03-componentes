import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { Componente } from '../../services/interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>;


  constructor( private menuCtrl: MenuController,
               private dataService: DataService ) { }

  ngOnInit() {

    this.componentes = this.dataService.getMenuOpts();

  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}

