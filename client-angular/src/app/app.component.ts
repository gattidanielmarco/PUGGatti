import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Lego }from'./Lego.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-angular';
  results:Lego[];
  private BASE_URL: string='/';
  constructor(private http: HttpClient){}
  visuaDati4767(): void{
    this.http.get<Lego[]>('https://3000-df41e9bd-4ebd-4971-b27c-826d98ba66a6.ws-eu01.gitpod.io/l?id=4676').subscribe((data: Lego[]) => {
      this.results = data['legos'];

    });
  }
  visuaDati10188(): void{
    this.http.get<Lego[]>('https://3000-df41e9bd-4ebd-4971-b27c-826d98ba66a6.ws-eu01.gitpod.io/l?id=10188').subscribe((data: Lego[]) => {
      this.results = data['legos'];
    });
  }
  visuaDati4768(): void{
    this.http.get<Lego[]>('https://3000-df41e9bd-4ebd-4971-b27c-826d98ba66a6.ws-eu01.gitpod.io/l?id=4678').subscribe((data: Lego[]) => {
      this.results = data['legos'];
    });
  }
}
