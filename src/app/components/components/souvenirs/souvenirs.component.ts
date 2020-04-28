import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-souvenirs',
  templateUrl: './souvenirs.component.html',
  styleUrls: ['./souvenirs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SouvenirsComponent implements OnInit {
  @Input() souvenirs;
  @Output() download = new EventEmitter<string>();
  selectedDashboards = [];
  count = 8;
  constructor() { }

  ngOnInit() {
    this.selectedDashboards = this.souvenirs.slice(0, this.count);
  }

  loadData(event) {
    this.selectedDashboards = this.souvenirs.slice((event - 1) * this.count, event * this.count);
  }

  downloadDoc(url) {
    this.download.emit(url);
  }

}
