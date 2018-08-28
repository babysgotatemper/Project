import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HtmlComponent implements OnInit {
  pages = [
    {
      'link': 'dom',
      'title': 'DOM'
    },
    {
      'link': 'tags',
      'title': 'Tag'
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
