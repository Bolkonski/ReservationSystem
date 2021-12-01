import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import { RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import {  QuickToolbarService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService]
})
export class TextEditorComponent implements OnInit {
  content: string;

  @ViewChild('objRTE')
  public rteObj: RichTextEditorComponent;

  constructor() { }

  ngOnInit(): void {
  }

  displayContent(): void {
    this.content = this.rteObj.value;
    console.log(this.content);
    this.rteObj.value = "";
  }
  restoreContent(): void {
    this.rteObj.value = this.content;
  }
}

