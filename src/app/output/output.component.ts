import { Component, OnInit, Input , ViewChild} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
@Input('preview') 
set preview(event: any){
  let iframeRef = this.htmlPreview.nativeElement;
  const blob = new Blob([event], {type: 'text/html'});
  iframeRef.src = window.URL.createObjectURL(blob);
}
@ViewChild('htmlPreview', { static: true }) htmlPreview: any;
frame:any = '';
  constructor() { }

  ngOnInit(): void {
  }

}
