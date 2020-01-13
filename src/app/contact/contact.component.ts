import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public FullName: string = '';
  public EmailAddress: string = '';
  public Comments: string = '';

  constructor(private http: HttpClient) {



  }
  public onSendClick() {
    var postData = {
      "Name": this.FullName,
      "Email": this.EmailAddress,
      "Comments": this.Comments
    };

    this.http.post<any>('https://andrewmilici.me/mailer.php', postData).subscribe(data => {

    });

  }
  ngOnInit() {
  }



}
