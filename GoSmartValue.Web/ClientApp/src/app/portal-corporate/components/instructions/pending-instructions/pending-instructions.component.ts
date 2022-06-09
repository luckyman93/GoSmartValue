import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-pending-instructions',
  templateUrl: './pending-instructions.component.html',
  styleUrls: ['./pending-instructions.component.scss']
})
export class PendingInstructionsComponent implements OnInit {

  instructions: any[] = [];
  columns = [
    {name:"City", value:'LocationName'},
    {name:"Client Name",value:'ClientName'},
    {name:"Client Number", value:'ClientMobileNumber'},
    {name:"Plot Number",value:'PlotNumber'},
    {name:"Ward",value:'LocalityName'},
    {name:"Valuer",value:'ValuerName'},
    {name:"Preferred Acceess Date",value:'accessDate'}
  ]
  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.getInstructions();
  }

  getInstructions()
  {
    this.productService.getInstructions().subscribe((res:any) => {
      this.instructions = res.instructions;

    });
  }

}
