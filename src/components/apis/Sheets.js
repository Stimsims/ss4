export const getSheet = (id) => {
    //13f1nrzyZPMAm02WS7DeTADiGCC-i0_LTLCPjwOCj5EQ
    return gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: id,
        majorDimension: 'ROWS',
        range: 'Sheet1!A1:D5',
        sheets: []
    })
}
export const writeToSheet = (id) => {
    console.log(`writeToSheet gapi`, gapi);
    return gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId: id,
        range: 'Sheet1!A1:D5',
        majorDimension: "ROWS",
        includeValuesInResponse: true,
        valueInputOption: 'USER_ENTERED',
        values: [
            ["Item", "Cost", "Stocked", "Ship Date"],
            ["Wheel", "$20.50", "4", "3/1/2016"],
            ["Door", "$15", "2", "3/15/2016"],
            ["Engine", "$100", "1", "30/20/2016"],
            ["Totals", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]
        ]
    })
}

export const addChart = (id) => {
    return gapi.client.sheets.spreadsheets.batchUpdate({
        spreadsheetId: id,
        requests: [
          {
            "addChart": {
              "chart": {
                "spec": {
                  "title": "Model Q1 Total Sales",
                  "pieChart": {
                    "legendPosition": "RIGHT_LEGEND",
                    "threeDimensional": false,
                    "domain": {
                      "sourceRange": {
                        "sources": [
                          {
                           // "sheetId": sourceSheetId,
                            "startRowIndex": 0,
                            "endRowIndex": 4,
                            "startColumnIndex": 0,
                            "endColumnIndex": 1
                          }
                        ]
                      }
                    },
                    "series": {
                      "sourceRange": {
                        "sources": [
                          {
                           // "sheetId": sourceSheetId,
                            "startRowIndex": 0,
                            "endRowIndex": 4,
                            "startColumnIndex": 1,
                            "endColumnIndex": 2
                          }
                        ]
                      }
                    },
                  }
                },
                "position": {
                  "overlayPosition": {
                    "anchorCell": {
                     // "sheetId": sheetId,
                      "rowIndex": 2,
                      "columnIndex": 2
                    },
                    "offsetXPixels": 50,
                    "offsetYPixels": 50
                  }
                }
              }
            }
          }
        ]
      })
}
/*
{
  "range": "Sheet1!A1:D5",
  "majorDimension": "ROWS",
  "values": [
    ["Item", "Cost", "Stocked", "Ship Date"],
    ["Wheel", "$20.50", "4", "3/1/2016"],
    ["Door", "$15", "2", "3/15/2016"],
    ["Engine", "$100", "1", "30/20/2016"],
    ["Totals", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]
  ],
}

export const writeToSheet = (id) => {
    console.log(`writeToSheet gapi`, gapi);
    return gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId: id,
        range: 'Sheet1!A1:D5',
        majorDimension: "ROWS",
        includeValuesInResponse: true,
        valueInputOption: 'USER_ENTERED',
        values: [
            ["Item", "Cost", "Stocked", "Ship Date"],
            ["Wheel", "$20.50", "4", "3/1/2016"],
            ["Door", "$15", "2", "3/15/2016"],
            ["Engine", "$100", "1", "30/20/2016"],
            ["Totals", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]
        ]
    })
}





        getSheet('13f1nrzyZPMAm02WS7DeTADiGCC-i0_LTLCPjwOCj5EQ')
        .then(r => {
            console.log(`getSheet result`, r);
            return writeToSheet(id, null)
        })
        .then(ef => {
            console.log(`writeToSheet result`, ef);
            return addChart('13f1nrzyZPMAm02WS7DeTADiGCC-i0_LTLCPjwOCj5EQ');
        })
        .then(c => {
            console.log(`writeToSheet chart`, c);
        })
        .catch( e => {
            console.log(`create file error`, e);
        })




                createAFile('application/vnd.google-apps.spreadsheet', 'text/csv', name + "4")
        .then(r => {
            console.log(`create file result`, r);
            return editFile(id, `,rose,tulip
            sweet,13,35
            savory,8,33
            umami,32,6
            salty,22,12`);
        })
        .catch( e => {
            console.log(`create file error`, e);
        })
*/