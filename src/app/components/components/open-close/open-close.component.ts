import { Component } from '@angular/core';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss']
})
export class OpenCloseComponent {
  public sideBar;
  siderData = [{ name: 'comments', icon: 'idcard', title: 'Комментарии' },
    { name: 'files', icon: 'folder', title: 'Файлы' },
    { name: 'comments', icon: 'idcard', title: 'Комментарии' },
    { name: 'files', icon: 'folder', title: 'Файлы' },
    { name: 'files', icon: 'folder', title: 'Файлы' },
    { name: 'comments', icon: 'idcard', title: 'Комментарии' },
    { name: 'files', icon: 'folder', title: 'Файлы' },
    { name: 'files', icon: 'folder', title: 'Файлы' },
    { name: 'comments', icon: 'idcard', title: 'Комментарии' },
    { name: 'files', icon: 'folder', title: 'Файлы' },
    { name: 'history', icon: 'profile', title: 'История' }];


  getSideBarValue(event) {
    this.sideBar = event;
  }

}
