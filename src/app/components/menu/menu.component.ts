import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/services/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor( private dataService: DataService) { }

  componentes: Observable<Componente[]>;

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

}
