import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarouselComponent } from '../../carousel/carousel.component';
import { SkillComponent } from '../../components/skill/skill.component';

@Component({
  selector: 'app-detail-project',
  standalone: true,
  imports: [
    CommonModule,
    CarouselComponent,
    SkillComponent
  ],
  templateUrl: './detail-project.component.html',
  styleUrl: './detail-project.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailProjectComponent { }
