import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LOGOS}                                                                   from '../../data/brand-book-new-data';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent {
  @Input() modal: boolean;
  @Output() modalChange = new EventEmitter<boolean>();
  @Output() download = new EventEmitter<string>();
  logos = [...LOGOS];

  openModal() {
    this.modalChange.emit(true);
  }

  downloadLogo(url) {
    this.download.emit(url);
  }
}
