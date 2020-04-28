import {Component, OnInit} from '@angular/core';
import {NzModalService}    from 'ng-zorro-antd';

@Component({
  selector: 'app-bad-palette',
  templateUrl: './bad-palette.component.html',
  styleUrls: ['./bad-palette.component.scss'],
})
export class BadPaletteComponent implements OnInit {
  palettes = [{img: 'https://photos.wbstatic.net/brand-book/Group461.png', text: 'Логотип расположен в противоположную сторону'}, {img: 'https://photos.wbstatic.net/brand-book/Group462.png', text: 'Не равномерный градиент под недопустимым углом'}, {img: 'https://photos.wbstatic.net/brand-book/Group463.png', text: 'Противоположный градиент'}, {img: 'https://photos.wbstatic.net/brand-book/Group464.png', text: 'Расположение логотипа в наклоне'}];
  constructor(private modalService: NzModalService) { }

  ngOnInit() {
  }

  close() {
    this.modalService.closeAll();
  }
}
