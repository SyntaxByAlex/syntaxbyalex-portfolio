import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardLevelComponent } from '../../components/card-level/card-level.component';
import { CardProjectComponent } from '../../components/card-project/card-project.component';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [
    CommonModule,
    CardLevelComponent,
    CardProjectComponent
  ],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectsComponent { }
