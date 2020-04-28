import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignatureComponent {
  @Output() download = new EventEmitter<string>();
  downloadDoc() {
    this.download.emit('https://mstatic.wbstatic.net/brand-book/signature.rar');
  }
}
