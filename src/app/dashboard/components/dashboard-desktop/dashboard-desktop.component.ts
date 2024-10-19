import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-desktop',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dashboard-desktop.component.html',
  styleUrl: './dashboard-desktop.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardDesktopComponent {

  private router = inject(Router);

  public goToUrl(url: string): void {
    this.router.navigateByUrl(url);
  }
}
