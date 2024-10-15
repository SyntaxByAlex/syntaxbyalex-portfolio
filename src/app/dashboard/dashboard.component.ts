import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { DashboardMobileComponent } from './components/dashboard-mobile/dashboard-mobile.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    IconsModule,
    DashboardMobileComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  public isMenuMobile = signal(false);

  public toggleMenuMobile() {
    this.isMenuMobile.set(!this.isMenuMobile());
  }
}
