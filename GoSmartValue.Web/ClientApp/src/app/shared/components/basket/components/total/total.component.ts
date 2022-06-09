import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {

  @Input() discountTotal : any;
  @Input() netTotal : any;
  constructor() { }

  ngOnInit(): void {
  }

}
