import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  @Input() dashboard;
  @Input() tags = true;
  @Output() download = new EventEmitter<string>();
  @Output() selectedChange = new EventEmitter();

  downloadDoc(url) {
    this.download.emit(url);
  }

  changeTag(tag){
    this.selectedChange.emit(tag);
  }
}
