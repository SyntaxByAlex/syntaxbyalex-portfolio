import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {

  public data = [
    {
      title: 'Hueca fest',
      url: 'https://asohuecas.com/wp-content/uploads/2024/06/Recurso-29.png',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ex.'
    },
    {
      title: 'Hueca fest',
      url: 'https://asohuecas.com/wp-content/uploads/2024/06/Recurso-29.png',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ex.'
    },
    {
      title: 'Hueca fest',
      url: 'https://asohuecas.com/wp-content/uploads/2024/06/Recurso-29.png',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ex.'
    },
    {
      title: 'Hueca fest',
      url: 'https://asohuecas.com/wp-content/uploads/2024/06/Recurso-29.png',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ex.'
    },
    {
      title: 'Hueca fest',
      url: 'https://asohuecas.com/wp-content/uploads/2024/06/Recurso-29.png',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ex.'
    }
  ]
}
