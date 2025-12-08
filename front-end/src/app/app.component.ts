import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { headerComponent } from './header/header.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet,CommonModule,headerComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone:true
})
export class AppComponent {
  title = 'front-end';
}
