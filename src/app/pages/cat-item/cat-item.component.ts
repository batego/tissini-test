import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/request.response';
import { CategoriaService } from 'src/app/services/categoria.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cat-item',
  templateUrl: './cat-item.component.html',
  styleUrls: ['./cat-item.component.css']
})
export class CatItemComponent implements OnInit {

  // @Input() catItem: Product[] | undefined;
  products: any;
  url = environment.files;

  constructor(private activRoute: ActivatedRoute, private catService: CategoriaService) {
    this.activRoute.params.subscribe(param => {
      // console.log('param', param);
      this.catService.getProducts(param.id).subscribe(res => {
        // console.log(res.products);
        this.products = res.products;
      });
    });
  }

  ngOnInit(): void {
  }

}
