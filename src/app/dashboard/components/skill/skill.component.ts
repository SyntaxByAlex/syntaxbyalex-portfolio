import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'skill',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SkillComponent {

  @Input() skillImg: string = ''
  @Input() skillName: string = ''
}
