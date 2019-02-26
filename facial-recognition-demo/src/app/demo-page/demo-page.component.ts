import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.css']
})
export class DemoPageComponent implements OnInit {

  page: Object;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.page = this.contentService.pages['home'];
  }

}
