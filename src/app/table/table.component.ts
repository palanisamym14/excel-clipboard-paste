import { Component, OnInit, HostListener } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  @HostListener('paste', ['$event']) blockPaste(e: any) {
    e.preventDefault();
    const objKeys = ['a', 'b', 'c', 'd']
    const excelData = [];
    const paste = (e.clipboardData).getData('text');
    const inputData = paste.split('\n')
    inputData.forEach((row, idx) => {
      if (row.length > 0) {
        const currentRow = row.split('\t');
        let currentRowObj = {};
        for (let i = 0; i < objKeys.length; i++) {
          if (currentRow.length > i) {
            currentRowObj = { ...currentRowObj, ...{ [objKeys[i]]: currentRow[i] } };
            continue;
          }
          currentRowObj = { ...currentRowObj, ...{ [objKeys[i]]: '' } };
        }
        excelData.push(currentRowObj);
      }
    });
    console.log(excelData)
  }

  constructor() { }

  ngOnInit() {
  }
}
