import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input, ViewChild, ElementRef } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}


@Component({
  selector: 'app-collection-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collection-slider.component.html',
  styleUrl: './collection-slider.component.css'
})
export class CollectionSliderComponent {
  @Input() title: string = '';
  @Input() products: Product[] = [];
  @ViewChild('sliderElement') sliderElement!: ElementRef;

  scrollLeft() {
    const slider = this.sliderElement.nativeElement;
    slider.scrollLeft -= 500;
  }

  scrollRight() {
    const slider = this.sliderElement.nativeElement;
    slider.scrollLeft += 500;
  }
}
