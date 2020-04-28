import {Component, OnInit} from '@angular/core';
import {NzModalService}    from 'ng-zorro-antd';

@Component({
  selector: 'app-bad-logo',
  templateUrl: './bad-logo.component.html',
  styleUrls: ['./bad-logo.component.scss'],
})
export class BadLogoComponent implements OnInit {
  logos = [{img: 'https://photos.wbstatic.net/brand-book/Group20.png', text: 'Деформировать логотип'}, {img: 'https://photos.wbstatic.net/brand-book/Group20.png', text: 'Применять дополнительные эффекты и менять цвет логотипа'}, {img: 'https://photos.wbstatic.net/brand-book/Group22.png', text: 'Менять шрифт логотипа'}, {img: 'https://photos.wbstatic.net/brand-book/Group23.png', text: 'Использовать логотип на неоднородном фоне'}];
  constructor(private modalService: NzModalService) { }

  ngOnInit() {
  }
  close() {
    this.modalService.closeAll();
  }
}
