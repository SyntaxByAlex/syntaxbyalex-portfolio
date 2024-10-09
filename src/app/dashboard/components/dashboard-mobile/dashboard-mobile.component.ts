import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IconsModule } from '../../../icons/icons.module';

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
  public toggleMenuMobile() {
    this.onToggleMenuMobileEvent.emit();
  }
}
