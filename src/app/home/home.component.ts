import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public SubtitleText: string = '';

  constructor() { }

  ngOnInit() {
    this.SubtitleText = '';
  }

  buttonMouseOver(e) {
    switch (e) {
      case 0:
        this.SubtitleText = "About Me";
        break;
      case 1:
        this.SubtitleText = "Services that I offer";
        break;
      case 2:
        this.SubtitleText = "Projects (and some sample code)";
        break;
      case 3:
        this.SubtitleText = "Bored? Play a quick game";
        break;
      case 4:
        this.SubtitleText = "Contact";
        break;

    }

  }

  buttonMouseOut() {
    this.SubtitleText = '';
  }

}
