import { Component} from '@angular/core';
import { MenuOption } from '../../models/menuOption.model'; // Ajusta la ruta según tu estructura de carpetas


@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent {
  menuVisible: boolean = false;
  menuOptions: MenuOption[] = [
    { label: 'Inicio', route: '/', icon: "https://res.cloudinary.com/dylweuvjp/image/upload/v1691038992/b6g4gbjbhpxto6gz7kzf.png" },
    { label: 'Tarjetas', route: '/cards', icon: "https://res.cloudinary.com/dylweuvjp/image/upload/v1691039442/sb8qg5x7pyuvulxqlx3m.png" },
    { label: 'Prestamos', route: '/loans', icon: "https://res.cloudinary.com/dylweuvjp/image/upload/v1691039727/tuskqussj2zlyyh6ylan.png" },
    { label: 'Operaciones', route: '/operations', icon: "https://res.cloudinary.com/dylweuvjp/image/upload/v1691038090/dzyjo9xyzl1ahjovir9u.png" },
    { label: 'Te ofrecemos', route: '/benefits', icon: "https://res.cloudinary.com/dylweuvjp/image/upload/v1691039769/enqqchb4thngqkbd3jo9.png" },
    { label: 'Seguros', route: '/insurance', icon: "https://res.cloudinary.com/dylweuvjp/image/upload/v1691039481/ep1lqgcica3tbcpztks4.png" },
    { label: 'Puntos', route: '/points', icon: "https://res.cloudinary.com/dylweuvjp/image/upload/v1691039547/cnxe7br07sxdy333l9uc.png" },
    { label: 'Ayuda', route: '/help', icon: "https://res.cloudinary.com/dylweuvjp/image/upload/v1691039642/wa1tzpore781zaz0afqp.png" },
    { label: 'Cerrar sesion', route: '/closeSession', icon: "https://res.cloudinary.com/dylweuvjp/image/upload/v1691039670/wnffsl1fhhss7r3otawm.png" },
  ];

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
