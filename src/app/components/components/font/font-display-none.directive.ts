import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[noneAfterTime]'
})
export class FontDisplayNoneDirective implements OnInit {
  @Input() time;

  constructor(private input: ElementRef) {
  }

  ngOnInit(): void {
    console.log(this.time);
    setTimeout(() => { this.input.nativeElement.style.display = 'none'; }, +this.time * 1000);
  }
}
