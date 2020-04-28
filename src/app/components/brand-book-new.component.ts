import {Component, OnInit}      from '@angular/core';
import {NzModalService}         from 'ng-zorro-antd';
import {BadLogoComponent}       from './components/bad-logo/bad-logo.component';
import {BadPaletteComponent}    from './components/bad-palette/bad-palette.component';
import {ActivatedRoute, Router} from '@angular/router';
import {DASHBOARDS}             from './data/brand-book-new-data';


@Component({
  selector: 'app-brand-book-new',
  templateUrl: './brand-book-new.component.html',
  styleUrls: ['./brand-book-new.component.scss'],
})
export class BrandBookNewComponent implements OnInit {
  dashboards = [...DASHBOARDS];
  souvenirs = [];
  modal = false;
  selectedTags = '';
  selectedDashboards = [];
  tags = ['Все'];

  constructor(private modalService: NzModalService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.souvenirs = this.dashboards.filter(el => el.tags.indexOf('Сувениры') > -1);
    this.dashboards.forEach(el => {
      el.tags.forEach(res => {
        if (this.tags.indexOf(res) < 0) {
          this.tags = [...this.tags, res];
        }
      });
    });
    // const tag = this.route.snapshot.queryParams['tag'];
    // this.selectedTags = tag ? tag : ['Все'];
    this.selectedTags = 'Все';
    this.filterDashboards();
  }

  filterDashboards() {
    if (this.selectedTags.indexOf('Все') > -1) {
      this.selectedDashboards = [...this.dashboards];
    } else {
      this.selectedDashboards = [...this.dashboards.filter(el => this.intersection(el.tags))];
    }
  }


  intersection(elements) {
    let flag = false;
    if (elements) {
      elements.forEach(el => {
        if (this.selectedTags.indexOf(el) > -1) {
          flag = true;
        }
      });
    }
    return flag;
  }

  openModal(page) {
    if (page === 'logo') {
      this.modalService.create({
        nzContent: BadLogoComponent,
        nzFooter: null,
        nzWrapClassName: 'vertical-center-brand-book-modal',
        nzWidth: 884
      });
    } else {
      this.modalService.create({
        nzContent: BadPaletteComponent,
        nzFooter: null,
        nzWrapClassName: 'vertical-center-brand-book-modal',
        nzWidth: 884
      });
    }
  }

  changeParams(value) {
    this.selectedTags = value;
    this.filterDashboards();
  }

  downloadInstruction() {
    const link = document.createElement('a');
    link.setAttribute('href', 'https://mstatic.wbstatic.net/brand-book/wb.pdf');
    link.setAttribute('target', '_blank');
    link.click();
  }

  download(url) {
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.click();
  }
}
