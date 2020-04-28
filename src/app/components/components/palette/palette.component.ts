import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {PALETTE}                                                         from '../../data/brand-book-new-data';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaletteComponent {
  @Input() modal: boolean;
  @Output() modalChange = new EventEmitter<boolean>();
  palette = {...PALETTE};

  openModal() {
    this.modalChange.emit(true);
  }
}
