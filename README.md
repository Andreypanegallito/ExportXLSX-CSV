# ExportXLSXCSV

Repositório para explicar e demostrar como exportar para xlsx e csv usando a lib xlsx, link: [SheetJS](https://sheetjs.com/)

É um breve resumo que pode te ajudar a dar o pontapé inicial.

## Primeiros passos

Após estar com seu projeto criado, será necessário instalar a lib do xlsx

Comando: `npm install xlsx`

## Código no html e javascript

Para poder funcionar, você deve colocar a tabela no html e chamar a função que irei deixar para fazer a conversão da tabela html para excel ou CSV.

### Tabela no html

```
<table id='table' class='table'>
  <thead>
    <tr>
      <th>Teste</th>
      <th>Descrição</th>
      <th>Data</th>
      <th>Resultado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Teste de Velocidade</td>
      <td>Avalia a rapidez de execução de tarefas</td>
      <td>01/09/2024</td>
      <td>Aprovado</td>
    </tr>
  </tbody>
</table>
```

### Função no javascript

Esse exemplo é para exportar somente uma tabela do html

```
exportToXLSX() {
    const wb = XLSX.utils.book_new();
    let tables = document.getElementById('table') as any;

    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.table_to_sheet(tables),
      'Planilha'
    );

    XLSX.writeFile(wb, 'planilha.xlsx');
  }
```

### Função no javascript para exportar 2 ou mais tabelas

Esse exemplo é para exportar duas ou mais tabelas, porém, para cada tabela será criado uma planilha/workbook

```
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

  XLSX.writeFile(wb, 'planilhas.xlsx');
}
```
