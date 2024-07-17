import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = { origin:'Movie Parley' };
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get('https://httpbin.org/ip')
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.title = data;
        }, error: (err) => console.log(err)
      });
  }
}
