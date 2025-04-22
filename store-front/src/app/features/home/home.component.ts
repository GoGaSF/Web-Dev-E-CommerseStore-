import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CollectionSliderComponent } from '../collection-slider/collection-slider.component';
import { SlideshowComponent } from '../slideshow/slideshow.component';
import { CollaborationsComponent } from "../collaborations/collaborations.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive, CollectionSliderComponent, SlideshowComponent, CollaborationsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
