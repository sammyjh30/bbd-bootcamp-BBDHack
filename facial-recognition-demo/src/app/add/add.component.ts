import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  page: Object;
  
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.page = this.contentService.pages['add'];
  }

}
