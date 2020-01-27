import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../app-animations';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-standard-layout',
  templateUrl: './standard-layout.component.html',
  styleUrls: ['./standard-layout.component.css'],
  animations: [fadeAnimation]
})
export class StandardLayoutComponent implements OnInit {

  public CurrentRoute: number = 0;
  public SubtitleText: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  ngOnInit() {
    this.SubtitleText = '';
  }

  navigateTo(e) {
    this.CurrentRoute = e;
    switch (e) {
      case 1: // About
        this.router.navigate(['/about']);
        break;
      case 2: //Projects
        this.router.navigate(['/projects']);
        break;
      case 4: //Contact
        this.router.navigate(['/contact']);
        break;
    }
  }

  downloadResume() {
    const pdfUrl = 'https://andrewmilici.me/assets/AndrewMiliciResume.pdf';
    const pdfName = 'AndrewMiliciResume.pdf';
    FileSaver.saveAs(pdfUrl, pdfName);
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
        this.SubtitleText = "Projects (and some sample code)";
        break;
      case 3:
        this.SubtitleText = "Download a copy of my resume";
        break;
      case 4:
        this.SubtitleText = "Contact";
        break;
    }

  }

  buttonMouseOut() {
    switch (this.CurrentRoute) {
      case 0:
        this.SubtitleText = "Home";
        break;
      case 1:
        this.SubtitleText = "About Me";
        break;
      case 2:
        this.SubtitleText = "Projects (and some sample code)";
        break;
      case 3:
        this.SubtitleText = "Download a copy of my resume";
        break;
      case 4:
        this.SubtitleText = "Contact";
        break;
    }
  }
}
