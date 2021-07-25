import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  htmlCode: any = '<html>\n<head>\n	<!-- HTML comment -->\n</head>\n<body> \n Hello world \n</body>\n</html>';
  cssCode: any = `\n/* CSS comment */\n`;
  jsCode: any = '\n// JavaScript comment\n';
  html: any = '';
  constructor() {
    this.setCode();
  }

  ngOnInit(): void {}

  setCode(code?: any, type?: any) {

    if(code && type){
      if(type === 'html'){
        this.htmlCode = code;
      } else if(type === 'css'){
        this.cssCode = code;
      } else if(type === 'js'){
        this.jsCode = code;
      }
    }  
    
    this.html =
      `<style type='text/css'>\n${this.cssCode}\n</style>\n` +
      `<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>\n<script type='text/javascript'>\n${this.jsCode}\n</script>\n` +
      this.htmlCode;
  }

  updatePreview(event: any, type: any) {
    this.setCode(event, type);
  }
}
