import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  htmlCode: any = '';
  cssCode: any = '';
  jsCode: any = '';
  html: any = '';
  constructor() {
    this.setCode();
  }

  ngOnInit(): void {}

  setCode(code?: any, type?: any) {
    this.htmlCode =
      type && type === 'html' && code
        ? code
        : '<html>\n<head>\n	<!-- HTML comment -->\n</head>\n<body> \n Hello world \n</body>\n</html>';
    this.cssCode = type && type ==='css' && code ? code : `\n/* CSS comment */\n`
    this.jsCode= type && type ==='js' && code ? code : '\n// JavaScript comment\n'
    this.html =
      `<style type="text/css">\n${this.cssCode}\n</style>\n` +
      `<script type="javascript">\n${this.jsCode}\n</script>\n` +
      this.htmlCode;
    localStorage.setItem('html_preview', this.html);
  }

  updatePreview(event: any, type: any) {
    this.setCode(event, type);
  }
}
