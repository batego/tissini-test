import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, Sections } from 'src/app/interfaces/request.response';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  private idUser: any;
  url = environment.files;
  categories: Sections[] | undefined;
  // products: Product[] | undefined;
  category_id = 55;

  responsiveOptions: any;
  categ: any[] = [];

  constructor(private authService: AuthService,
    private categoryService: CategoriaService,
    private router: Router) {
    
    let { id } = JSON.parse(this.authService.leerToken('emprendedora'));
    this.idUser = id;
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    
    this.categoryService.getMultivendor(this.idUser).subscribe((res: any) => {
      // console.log('Multivendedor: ', res);
    });

    this.categoryService.getCategories().subscribe((res: any) => {
      // console.log('Categories: ', res);
    });

    this.categoryService.getSections().subscribe((res: Sections[]) => {
      this.categories = res;
      // this.products = res
      // console.log('sections: ', this.categories);
    });
  }

  verProductos(id: any): void {    
    this.router.navigate(['home/items', id]);
    // console.log(event);
  }
}
