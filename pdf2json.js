let fs = require('fs'),
PDFParser = require("pdf2json");

let pdfParser = new PDFParser();
let reSpaces = /%20/gi;

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
  console.log(pdfData.formImage.Pages[0].Texts[6].R[0].T.replace(reSpaces, " "))
  console.log(pdfData.formImage.Pages[0].Texts[7].R[0].T.replace(reSpaces, " "))
  console.log(pdfData.formImage.Pages[0].Texts[8].R[0].T.replace(reSpaces, " "))
  console.log(pdfData.formImage.Pages[0].Texts[9].R[0].T.replace(reSpaces, " "))
  console.log(pdfData.formImage.Pages[0].Texts[10].R[0].T.replace(reSpaces, " "))
  console.log(pdfData.formImage.Pages[0].Texts[11].R[0].T.replace(reSpaces, " "))

  console.log(pdfData.formImage.Pages[0].Texts[12].R[0].T.replace(reSpaces, " "))
  console.log(pdfData.formImage.Pages[0].Texts[13].R[0].T.replace(reSpaces, " "))
  console.log(pdfData.formImage.Pages[0].Texts[14].R[0].T.replace(reSpaces, " "))
  console.log(pdfData.formImage.Pages[0].Texts[15].R[0].T.replace(reSpaces, " "))
  console.log(pdfData.formImage.Pages[0].Texts[16].R[0].T.replace(reSpaces, " "))
  console.log(pdfData.formImage.Pages[0].Texts[17].R[0].T.replace(reSpaces, " "))
  // fs.writeFile("./2017/json/demo.json", JSON.stringify(pdfData), err =>{
  //   console.log('error!')
  // });
});

pdfParser.loadPDF("./2017/pdf/Aisen/Cisnes.pdf", ()=>{
  console.log('done')
});
