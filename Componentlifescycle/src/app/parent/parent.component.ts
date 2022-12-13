import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  /**
   *
   */
  constructor() {
    // console.log('Parent component initialized');
  }
  show: boolean = false;
  Name = '';
  headertemplaterefvartext = 'COMPONET LIFECYCLE';

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges called from Parent component');
  }

  onToggleClickHandler() {
    this.show = !this.show;
  }
  ngOnInit(): void {
    // console.log('OnInit is called from PARENT.');
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck called from PARENT.');
  }
}
