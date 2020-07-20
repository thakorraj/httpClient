import { Component, OnInit } from '@angular/core';
import { RestServiceService,Product } from '../rest-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  panelOpenState = false;
  products: Product[] = [];

  constructor(public rest: RestServiceService,
    private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.rest.getProducts().subscribe((resp: any) => {
      this.products = resp.students;
      console.log(this.products);
    });
  }

}
