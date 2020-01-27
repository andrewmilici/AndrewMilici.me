import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public SubtitleText: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.SubtitleText = '';
  }

  downloadResume() {
    const pdfUrl = 'https://andrewmilici.me/assets/AndrewMiliciResume.pdf';
    const pdfName = 'AndrewMiliciResume.pdf';
    FileSaver.saveAs(pdfUrl, pdfName);
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


}
