import { Component, OnInit, Input , ViewChild} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
@Input('preview') 
set preview(event: any){
  let temp = this.htmlPreview.nativeElement.contentWindow.document
  temp.open();
  temp.write(event);
  temp.close();
}
@ViewChild('htmlPreview', { static: true }) htmlPreview: any;
frame:any = '';
  constructor() { }

  ngOnInit(): void {
  }

}
