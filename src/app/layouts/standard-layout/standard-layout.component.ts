import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../app-animations';

@Component({
  selector: 'app-standard-layout',
  templateUrl: './standard-layout.component.html',
  styleUrls: ['./standard-layout.component.css'],
  animations: [fadeAnimation]
})
export class StandardLayoutComponent implements OnInit {

  public SubtitleText: string = '';

  constructor() { }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
  
  ngOnInit() {
    this.SubtitleText = '';
  }

  buttonMouseOver(e) {
    switch (e) {
      case 0:
        this.SubtitleText = "Home";
        break;
      case 1:
        this.SubtitleText = "About Me";
        break;
      case 2:
        this.SubtitleText = "Services that I offer";
        break;
      case 3:
        this.SubtitleText = "Projects (and some sample code)";
        break;
      case 4:
        this.SubtitleText = "Bored? Play a quick game";
        break;
      case 5:
        this.SubtitleText = "Contact";
        break;

    }

  }

  buttonMouseOut() {
    this.SubtitleText = '';
  }

}
