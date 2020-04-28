import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentationComponent implements OnInit {
  documentation = [{title: 'Визитка', name: 'visitka-message', url: 'https://mstatic.wbstatic.net/brand-book/card.rar'}, {title: 'Конверт', name: 'konvert-message', url: 'https://mstatic.wbstatic.net/brand-book/envelope.rar'}, {title: 'Бланк', name: 'blank-message', url: 'https://mstatic.wbstatic.net/brand-book/blank.rar'}];
  position = 'none';
  @Output() download = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  open(event) {
    this.position = event;
  }
  downloadChosen(url) {
    this.position = 'none';
    this.download.emit(url);
  }

  downloadActive() {
    const url = this.documentation.filter(el => el.name === this.position)[0].url;
    this.downloadChosen(url);
  }
}
