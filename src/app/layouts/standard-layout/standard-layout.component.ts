import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../app-animations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-standard-layout',
  templateUrl: './standard-layout.component.html',
  styleUrls: ['./standard-layout.component.css'],
  animations: [fadeAnimation]
})
export class StandardLayoutComponent implements OnInit {

  public SubtitleText: string = '';

  constructor(private http: HttpClient) { }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  ngOnInit() {
    this.SubtitleText = '';
  }

  downloadResume() {
    let resumeUrl = "https://andrewmilici.me/assets/Andrew%20Milici%20Resume.pdf";

    this.http.get(resumeUrl, {
      responseType: 'arraybuffer', headers: null
    }
    ).subscribe(response => this.downloadFile(response, "application/pdf"));
  }

  buttonMouseOver(e) {
    switch (e) {
      case 0:
        this.SubtitleText = "About Me";
        break;
      case 1:
        this.SubtitleText = "Projects (and some sample code)";
        break;
      case 2:
        this.SubtitleText = "Download a copy of my resume";
        break;
      case 3:
        this.SubtitleText = "Contact";
        break;

    }

  }

  buttonMouseOut() {
    this.SubtitleText = '';
  }


  downloadFile(data: any, type: string) {
    let blob = new Blob([data], { type: type });
    let url = window.URL.createObjectURL(blob);
    let pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      alert('Please disable your Pop-up blocker and try again.');
    }
    )
  }

}
