import { Component } from '@angular/core';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss']
})
export class OpenCloseComponent {
  public sideBar;
  siderData = [{ name: '0', icon: 'idcard', title: 'Комментарии' },
    { name: '1', icon: 'folder', title: 'Файлы' },
    { name: '2', icon: 'idcard', title: 'Комментарии' },
    { name: '3', icon: 'folder', title: 'Файлы' },
    { name: '4', icon: 'folder', title: 'Файлы' },
    { name: '5', icon: 'idcard', title: 'Комментарии' },
    { name: '6', icon: 'folder', title: 'Файлы' },
    { name: '7', icon: 'folder', title: 'Файлы' }];


  getSideBarValue(event) {
    this.sideBar = event;
  }

}
