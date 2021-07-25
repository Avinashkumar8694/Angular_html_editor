import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { filter } from 'rxjs/operators';
import {
  MonacoEditorConstructionOptions,
  MonacoEditorLoaderService,
} from '@materia-ui/ngx-monaco-editor';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  @ViewChild('MonacoEditorComp', { static: false })
  monacoComponent: any;
  @Input('_code') _code: any;
  @Output('codeEmitter') codeEmitter = new EventEmitter<any>();
  $timer: any = null;
  editorOptions: MonacoEditorConstructionOptions = {
    theme: 'MonacoTheme',
    language: 'html',
    roundedSelection: true,
    autoIndent: 'full',
  };
  MonacoCode: any;

  constructor(private monacoLoaderService: MonacoEditorLoaderService) {
    this.monacoLoaderService.isMonacoLoaded$
      .pipe(filter(loaded => !!loaded))
      .subscribe((res) => {
        this.registerTheme();
        this.MonacoCode = `${this._code}`;
      });
  }

  ngOnInit(): void {}

  registerTheme() {
    monaco.editor.defineTheme('MonacoTheme', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        {
          token: 'comment',
          foreground: 'ffa500',
          fontStyle: 'italic underline',
        },
        {
          token: 'comment.js',
          foreground: '008800',
          fontStyle: 'bold',
        },
        {
          token: 'comment.css',
          foreground: '0000ff',
        },
      ],
      colors: {},
    });
  }

  updateUI(event: any) {
    if (this.$timer) {
      clearTimeout(this.$timer);
    }
    this.$timer = setTimeout(() => {
      this.codeEmitter.emit(this.MonacoCode);
    }, 1200);
  }
}
