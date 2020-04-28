import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {FONT_URLS}                                                from '../../data/brand-book-new-data';

@Component({
  selector: 'app-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FontComponent {
  fontUrls = {...FONT_URLS};
  @Output() download = new EventEmitter<string>();

  downloadFont(font) {
    this.download.emit(this.fontUrls[font]);
  }
}
