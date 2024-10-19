import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'card-project',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardProjectComponent {

  private router = inject(Router)

  public goToUrl(url: string): void {
    this.router.navigateByUrl(url)
  }
}
