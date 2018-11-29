import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.scss']
})
export class CssComponent implements OnInit {
  pages = [
    {
      'link': 'link',
      'title': 'Підключення',
    },
    {
      'link': 'properties',
      'title': 'Властивості',
    },
    {
      'link': 'reset',
      'title': 'Онулення стилів',
    },
    {
      'link': 'box-model',
      'title': 'Блочна модель',
    }, {
      'link': 'pseudo',
      'title': 'Псевдокласи & Псевдоелементи',
    }, {
      'link': 'inherit',
      'title': 'Спецефічність і успадкування',
    }, {
      'link': 'units',
      'title': 'Одиниці',
    }, {
      'link': 'colors',
      'title': 'Кольори',
    }, {
      'link': 'fonts',
      'title': 'Шрифти',
    }, {
      'link': 'position',
      'title': 'Позиціонування',
    },
    {
      'link': 'flexbox',
      'title': 'Flexbox',
    },
    {
      'link': 'html5-css3',
      'title': 'HTML5/CSS3',
    },
    {
      'link': 'animations',
      'title': 'CSS3 animations',
    },
    {
      'link': 'vendor',
      'title': 'Vendor prefix',
    },
    {
      'link': 'adaptation',
      'title': 'Адаптація',
    }, {
      'link': 'css-pro',
      'title': 'CSS-pro',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
