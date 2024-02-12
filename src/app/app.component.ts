import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientewebComponent } from "./components/clienteweb/clienteweb.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ClientewebComponent]
})
export class AppComponent {
  title = 'pelisweb';
}
