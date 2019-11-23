import { Component, OnInit, Input } from '@angular/core';
import{Lego} from '../Lego.model';
@Component({
  selector: 'app-lego-istruzioni',
  templateUrl: './lego-istruzioni.component.html',
  styleUrls: ['./lego-istruzioni.component.css']
})
export class LegoIstruzioniComponent implements OnInit {
  @Input() lego: Lego;
  constructor() { }

  ngOnInit() {
  }

}
