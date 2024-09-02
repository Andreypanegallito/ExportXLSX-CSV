import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ExportXLSX-CSV';
  nameDoc: string = 'ExportXLSX';

  exportToXLSX() {
    const wb = XLSX.utils.book_new();
    let tables = document.getElementById('table') as any;
    let options = [];

    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.table_to_sheet(tables),
      'Planilha'
    );

    XLSX.writeFile(wb, `${this.nameDoc}.xlsx`);
  }

  exportToXLSXWithWorkbook() {
    const wb = XLSX.utils.book_new();
    let tables = document.querySelectorAll('.table') as any;

    tables.forEach((table: any, i: any) => {
      XLSX.utils.book_append_sheet(
        wb,
        XLSX.utils.table_to_sheet(table),
        `Planilha ${i + 1}`
      );
    });

    XLSX.writeFile(wb, `${this.nameDoc}.xlsx`);
  }
}
