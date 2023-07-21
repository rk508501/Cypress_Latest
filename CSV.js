const XLSX = require('xlsx');

function readSheetIntoRows(filePath, sheetName) {
  const workbook = XLSX.readFile('Sample.xlsx');
  const worksheet = workbook.Sheets["ID"];
  const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  return rows;
}

const filePath = 'path/to/spreadsheet.xlsx';
const sheetName = 'ID';
const rows = readSheetIntoRows(filePath, sheetName);
console.log(rows[3]);
