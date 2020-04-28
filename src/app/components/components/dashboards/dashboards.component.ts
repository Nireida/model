import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DashboardsComponent implements OnInit, OnChanges {
  @Input() dashboards;
  @Input() tags;
  @Output() selectedChange = new EventEmitter();
  @Output() download = new EventEmitter<string>();
  selectedDashboards;
  count = 8;
  constructor() { }

  ngOnInit() {
    this.selectedDashboards = this.dashboards.slice(0, this.count);
  }

  ngOnChanges() {
    this.selectedDashboards = this.dashboards.slice(0, this.count);
  }

  loadData(event) {
    this.selectedDashboards = this.dashboards.slice((event - 1) * this.count, event * this.count);
  }

  downloadDoc(url) {
    this.download.emit(url);
  }
}
