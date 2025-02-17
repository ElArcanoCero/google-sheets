function SOLICITAR() {

  var sheet = SpreadsheetApp.getActiveSheet();

  const destinatario = "practicanteingemec@coordinadora.com";
  const asunto = "Solicitud Tags Peajes";
  const mensaje1 = sheet.getRange('B5').getValue();
  const mensaje2 = sheet.getRange('C5').getValue();
  const mensaje3 = sheet.getRange('G5').getValue();
  const mensaje4 = sheet.getRange('E5').getValue();
  const mensaje5 = sheet.getRange('F5').getValue();


  if (mensaje1!= "" & mensaje4!= "" & mensaje5!= "" &mensaje3!= ""){
      const mensaje = "Cordial saludo."+ '\n\n' +
        "Se añadió una nueva solicitud de tag de peajes."+ '\n'+ 
        "Móvil: " + mensaje1 + '\n'+ "Placa: " + mensaje2 + '\n'+
        "Motivo: " + mensaje3 + '\n'+ "Terminal que solicita: "+ mensaje4; 

      GmailApp.sendEmail(destinatario, asunto, mensaje);

      var spreadsheet = SpreadsheetApp.getActive();
      spreadsheet.getRange('B5:H5').activate();
      spreadsheet.setActiveSheet(spreadsheet.getSheetByName('HISTORIAL'), true);
      spreadsheet.getRange('4:4').activate();
      spreadsheet.getActiveSheet().insertRowsBefore(spreadsheet.getActiveRange().getRow(), 1);
      spreadsheet.getActiveRange().offset(0, 0, 1, spreadsheet.getActiveRange().getNumColumns()).activate();
      spreadsheet.getRange('C4').activate();
      spreadsheet.getRange('SOLICITUD!B5:H5').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
      spreadsheet.getRange('B4').activate();
      spreadsheet.getRange('O2').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
      spreadsheet.setActiveSheet(spreadsheet.getSheetByName('SOLICITUD'), true);
      spreadsheet.getRange('E5:H5').activate();
      spreadsheet.setCurrentCell(spreadsheet.getRange('H5'));
      spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});
      spreadsheet.getRange('B5').activate();
      spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true}); 

      }else SpreadsheetApp.getUi().alert("Debe diligenciar todos los campos");

};