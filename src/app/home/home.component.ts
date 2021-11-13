import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = ['wfh8dDlNFOk', 'lHGeqh3XhRY', 'RCAhiGJsUUE'].map((string) => `https://source.unsplash.com/${string}/1920x1080`);

}
