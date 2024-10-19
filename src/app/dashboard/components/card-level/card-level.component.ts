import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'card-level',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './card-level.component.html',
  styleUrl: './card-level.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardLevelComponent {

  @Input() label: string = ''
}
