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
    {
      'link': 'tables',
      'title': 'Tables'
    },
    {
      'link': 'comments',
      'title': 'Коментарі'
    }, {
      'link': 'symbols',
      'title': 'Спецсимволи'
    }, {
      'link': 'inspector',
      'title': 'WEB-inspector'
    }, {
      'link': 'forms',
      'title': 'Form tags'
    }, {
      'link': 'validation',
      'title': 'Валідація HTML'
    }, {
      'link': 'redactor',
      'title': 'Редактор коду'
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
