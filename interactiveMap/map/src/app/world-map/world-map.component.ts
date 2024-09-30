import { Component } from '@angular/core';
import { InfoApiService } from '../info-api.service';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent {
  info: any = {};


  constructor (private apiService: InfoApiService) {}

  setCountryData(event: any) {
    this.apiService.setCountryInfo(event.target.id).subscribe((data: any) => {
      this.info = {
        ...data
      }
    });
  }
}
