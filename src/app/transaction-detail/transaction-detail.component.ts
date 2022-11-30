import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent {

  @Input() transaction?: Transaction;

  constructor() { }

  ngOnInit(): void {
    
  }
}
