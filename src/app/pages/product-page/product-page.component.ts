import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  product:any;
  constructor(private apiService: ApiService,private route: ActivatedRoute){}
 
  ngOnInit(){
  let id = this.route.snapshot.params['id'];

  this.apiService.getProductById(id).subscribe((data)=>{
    this.product=data;
  });
}
}
