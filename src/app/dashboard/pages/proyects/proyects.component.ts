import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectsComponent { }
