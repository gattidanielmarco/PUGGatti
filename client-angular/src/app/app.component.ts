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
  selectedLego:Lego;
  private BASE_URL: string='/';
  constructor(private http: HttpClient){
    http.get<Lego[]>('https://3000-df41e9bd-4ebd-4971-b27c-826d98ba66a6.ws-eu01.gitpod.io/l').subscribe((data: Lego[]) => {this.results = data['legos'];});
  }
  visuaDati(p: string){
    console.log(p);
    this.selectedLego = this.results.find(l => l.numero === p);
    console.log(this.selectedLego);
  }

}
