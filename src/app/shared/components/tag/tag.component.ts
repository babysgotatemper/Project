import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input() name: string;
  @Input() inline: boolean;
  @Input() attr: string[];
  inlineTags = ['img', 'br', 'hr', 'meta', 'input'];

  ngOnInit() {
  }

  isTagInline(name, inline) {
    return ( this.inlineTags.includes(name) || inline );
  }
}
