import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { SeatBookingComponent } from './seat_booking.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, SeatBookingComponent] // Add CommonModule here
})
export class AppComponent {
  title = 'myapp';
}
