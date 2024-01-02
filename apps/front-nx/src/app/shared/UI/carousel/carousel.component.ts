import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IImageFile } from '../../interface/image-file';
import { ICarouselItem } from './carousel.interface';

@Component({
  selector: 'front-nx-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  @Input() images: IImageFile[] = [];
  @Input() id: string = '';
  items: ICarouselItem[] = []
  ngOnInit(): void {
    this.images.forEach(element => {
      console.log(element.styles['large']);
      this.items.push({imageUrl: element.styles['large']});
    });
  }
}
