const fs = require('fs')
const data = JSON.parse(fs.readFileSync('./res/data.json'))
const locale = JSON.parse(fs.readFileSync('./res/localeStrings.json'))
const utils = require('./utils.js')

/*const PDFDocument  = require('pdfkit')
var doc = new PDFDocument();



let flp = 35
doc.fontSize(16).text(data.strName, 50, flp).moveDown()
doc.fontSize(10).text(utils.placeToString(data), 50, flp+=20)
doc.fontSize(10).text(utils.yearsOld(data.yyyymmddBirth,locale[data.locale]), 50, flp+=15)
for(let s of data.studies){
    doc.fontSize(10).text(utils.schoolToString(s,locale[data.locale]))
}
doc.pipe(fs.createWriteStream(utils.fileName(data)));
// end and display the document in the iframe to the right
doc.end();*/

const markdownpdf = require("markdown-pdf")
const loc = locale[data.locale]
var md = `# ${data.strName}
`
md+=utils.placeToString(data) +'\n'
   +utils.yearsOld(data.yyyymmddBirth,loc)+'\n'
         
for(let s of data.studies){
    md+=utils.schoolToString(s,locale[data.locale])+'\n'
}        

md+='___\n\n\n'

for(let w of data.works){
    md+=`### ${w.func} - ${w.comp} (${w.city})
`

    if(w.to==null){
        md+='*'+loc.since+' '+w.from+'*'
    }else{
        md+='*'+loc.from+' '+w.from+' '+loc.to+' '+w.to+'*'
    }
    md+='\n'
    md+=w.desc+'\n'
    md+='**Techs:** `'+w.techs+'`'
    md+='\n\n'
}
var outputPath = utils.fileName(data)
 
markdownpdf().from.string(md).to(outputPath, function () {
  console.log("Criado o seu arquivo! ", outputPath)
})