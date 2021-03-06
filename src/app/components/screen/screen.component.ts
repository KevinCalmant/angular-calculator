import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent {
  @Input() calculation: string | null = null;
  @Input() result: number = 0;
}
