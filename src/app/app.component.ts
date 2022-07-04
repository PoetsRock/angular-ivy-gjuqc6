import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  VERSION,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  // @ViewChild(Document) public domDocument!: Document;
  public domDocument!: Document;
  name = 'Angular ' + VERSION.major;

  public constructor(
    @Inject(DOCUMENT) private document: Document,
    private readonly elRef: ElementRef
  ) {}

  public ngAfterViewInit() {
    console.log('this.document:\n', this.document);
    console.log('domDocument:\n', this.domDocument);
    console.log('Document:\n', Document);

    // this.document['_elementRef'].nativeElement;
    const root = this.document.querySelectorAll('my-app');
    console.log('root:\n', root);
  }
}
