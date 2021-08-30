import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  products: any;
  url = environment.files;

  constructor(private catService: CategoriaService) {
    this.catService.getProducts(1).subscribe(res => {
      // console.log(res.products);
      this.products = res.products;
    });
  }

  ngOnInit(): void {
  }

 

}
