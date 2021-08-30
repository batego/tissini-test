import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;
  rSocial: string = '';

  items: MenuItem[];
  activeItem: MenuItem;

  constructor(private autService: AuthService, private router: Router) {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/home' },
      { label: 'Categorias', icon: 'pi pi-fw pi-calendar', routerLink: '/home/categoria' },
      { label: 'Catalogo', icon: 'pi pi-fw pi-pencil', routerLink: '/home/catalogo' },
      { label: 'Carrito', icon: 'pi pi-fw pi-file', routerLink: '/home/carrito' },
      // { label: 'items', icon: 'pi pi-fw pi-file', routerLink: '/home/items/45' },
      // {
      //   label: 'Salir', icon: PrimeIcons.SIGN_OUT, routerLink: '/home/carrito', command: (event) => {
      //     this.logout()
      //   }
      // },
    ];

    this.activeItem = this.items[1];
  }

  ngOnInit(): void {
    this.info = JSON.parse(this.autService.leerToken('emprendedora'));
    this.rSocial = this.info.store_name;
  }

  logout() {

    Swal.fire({
      title: 'Deseas Salir de la Tienda?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: `Salir`,
      showClass: {
        popup: 'animated fadeInLeft'
      },
      hideClass: {
        popup: 'animated fadeOutUp'
      }
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // Swal.fire('Saved!', '', 'success')
        this.autService.logOut('emprendedora');
        this.autService.logOut('categories');
        this.router.navigateByUrl('/login');
      }
      // else if (result.isDenied) {
      //   Swal.fire('Changes are not saved', '', 'info')
      // }
    })
  }

}
