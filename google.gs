function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var rowData = [];
    rowData.push('');
    rowData.push(new Date()); // Timestamp
    rowData.push(e.parameter.name);
    rowData.push(e.parameter.email);
    rowData.push(e.parameter.subject);
    rowData.push(e.parameter.message);
    sheet.appendRow(rowData);

    // Return success response with CORS headers
    var response = ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
        .setMimeType(ContentService.MimeType.JSON)
        .setStatusCode(200);

    // Add CORS headers
    response.addHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    response.addHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    response.addHeader('Access-Control-Allow-Headers', 'Content-Type');

    return response;
}
