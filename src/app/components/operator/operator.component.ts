import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss'],
})
export class OperatorComponent implements OnInit {
  @Input() operation: string = '';
  @Input() label: string | null = null;

  isNaN = false;

  ngOnInit(): void {
    this.isNaN = isNaN(+this.operation);
  }
}
