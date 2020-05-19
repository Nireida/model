import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        width: '110px',
        height: '110px',
      })),
      state('middle', style({
        width: '110px',
        height: '110px',
        backgroundColor: 'white',
        zIndex: '1000'
      })),
      state('final', style({
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        zIndex: '1000',
        color: 'white',
        top: '-8px',
        left: 0,
      })),
      state('end', style({
        width: '110px',
        height: '110px',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        zIndex: '1000',
        color: 'white',
        opacity: 0,
      })),
      state('big', style({
        transform: 'scale(5)',
        color: 'rgba(0, 0, 0, 0)',
        zIndex: '1000',
        opacity: 0,
      })),
      state('normal', style({
        transform: 'none',
        zIndex: '1',
        opacity: 1,
      })),

      transition('initial=>middle', animate('10ms')),
      transition('middle=>final', animate('250ms')),
      transition('final=>end', animate('350ms')),
      transition('big=>normal', animate('500ms ease')),
    ])
  ]
})
export class AnimationComponent {

  allState;
  currentIndex: number;
  sideBar;
  currentState = 'initial';
  offsetTop = '0 px';
  offsetLeft = '0 px';
  @Input() siderData;
  @Output() sideBarChange = new EventEmitter<string>();

  public changeSideBar(tabName: string, i?: number, event?) {
    if (i || i === 0) {
      this.currentIndex = i;
    }
    if (event) {
      this.offsetTop = (event.target.attributes[2].ownerElement.offsetTop - 8).toString() + 'px';
      this.offsetLeft = (event.target.attributes[2].ownerElement.offsetLeft).toString() + 'px';
    }
    switch (this.currentState) {
      case 'initial': {
        this.currentState = 'middle';
        setTimeout(() => this.currentState = 'final', 10);
        setTimeout(() => {
          this.currentState = 'end';
          this.sideBar = tabName;
          this.sideBarChange.emit(this.sideBar);
        }, 260);
        setTimeout(() => this.allState = 'big', 610);
        break;
      }
      default: break;
    }
    switch (this.allState) {
      case 'big': {
        this.currentIndex = null;
        this.sideBar = tabName;
        this.sideBarChange.emit(this.sideBar);
        this.allState = 'normal';
        this.currentState = 'initial';
        break;
      }
      default: break;
    }
  }
}
