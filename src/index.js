import Papa from "papaparse";
import xlsx from "xlsx";

// TODO: need API improvements
class Csv2Xlsx {
  constructor() {}

  download(source, destination) {
    Papa.parse(source, {
      header: true,
      complete: function (results) {
        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(results.data);
        xlsx.utils.book_append_sheet(wb, ws);
        xlsx.writeFile(wb, destination);
      },
    });
  }
}

export default Csv2Xlsx;
