import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ApiService } from '../../api.service';
@Component({
  selector: 'app-home',
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products:any;

  constructor(private apiService: ApiService){
    this.apiService.getProducts().subscribe((data)=> {
      this.products=data;
    });
  }

}
