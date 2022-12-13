import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // Inbound properties
  @Input()
  name = '';
  counter = 0;
  interval: any;

  @ContentChild('headertemplaterefvar') headertemplaterefvar: any;
  @ContentChild('paragraphtemplaterefvar') paragraphtemplaterefvar: any;
  @ContentChild('footertemplaterefvar') footertemplaterefvar: any;
  /**
   *
   */
  constructor() {
    // console.log('Child component initialized');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    // changes['name'].currentValue = changes['name'].currentValue + ' ' + 'Singh';
    // console.log('ngOnChanges called from child component');
    // console.log(changes['name'].currentValue);
  }
  ngOnInit(): void {
    // this.interval = setInterval(() => {
    //   this.counter = this.counter + 1;
    //   console.log(this.counter);
    // }, 1000);
    // console.log('OnInit is called from CHILD.');
    // console.log(this.headertemplaterefvar);
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck called from CHILD.');
    // console.log(this.headertemplaterefvar);
  }
  //component only
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called from CHILD.');
    this.paragraphtemplaterefvar.nativeElement.textContent =
      this.paragraphtemplaterefvar.nativeElement.textContent + ': ' + 'CHILD';
    console.log(this.paragraphtemplaterefvar);
  }

  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked called from CHILD.');
    // console.log(this.headertemplaterefvar);
  }

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit called from CHILD.');
  }
  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked called from CHILD.');
  }
  ngOnDestroy(): void {
    // clearInterval(this.interval);
    // console.log('OnDestroy is called from CHILD.');
  }
}
