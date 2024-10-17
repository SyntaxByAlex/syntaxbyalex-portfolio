import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IconsModule } from '../../../icons/icons.module';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-dashboard-mobile',
  standalone: true,
  imports: [
    CommonModule,
    IconsModule
  ],
  templateUrl: './dashboard-mobile.component.html',
  styleUrl: './dashboard-mobile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DashboardMobileComponent {

  @Input() isMenuMobile: boolean = false;
  @Output() onToggleMenuMobileEvent = new EventEmitter();
  public router = inject(Router)

  public goToUrl(url: string): void {
    this.router.navigateByUrl(url)
    this.onToggleMenuMobileEvent.emit();
  }

  public toggleMenuMobile() {
    this.onToggleMenuMobileEvent.emit();
  }
}
