import { Component } from '@angular/core';
import { MenuOption } from '../../models/menuOption.model'; // Ajusta la ruta según tu estructura de carpetas

@Component({
  selector: 'app-nav-lateral',
  templateUrl: './nav-lateral.component.html',
  styleUrls: ['./nav-lateral.component.css']
})
export class NavLateralComponent {

  menuOptions: MenuOption[] = [
    { label: 'Inicio', route: '/' },
    { label: 'Tarjetas', route: '/cards' },
  ];
}
