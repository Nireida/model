import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagsComponent implements OnInit {
  @Input() tags: Array<string>;
  @Output() selectedChange = new EventEmitter<string>();
  @Input() selected = '';

  constructor() { }

  ngOnInit() {
  }

  click(tag) {
    this.selected = tag;
    this.selectedChange.emit(this.selected);
  }
}
