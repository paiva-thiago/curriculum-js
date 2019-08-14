const yearsOld = function(x,loc){
    let curM =  new Date().getMonth()+1  
    let curD =  new Date().getDate()  
    let curY =  new Date().getFullYear()  
    let arrDate = x.split('-')
    let birM = Number(arrDate[1])
    let birD = Number(arrDate[2])
    let birY = Number(arrDate[0])
    let years = curY-birY;
    if(!((curM>=birM)&&(curD>=birD))){
        years = years-1
    }
    return String(years).concat(' ').concat(loc.years)
}

const now = ()=>{
    let d = new Date()
    let yyyy = String(d.getFullYear())
    let mm = String(d.getMonth()+1).padStart(2,'0')
    let dd = String(d.getDate()).padStart(2,'0')
    let hh = String(d.getHours()).padStart(2,'0')
    let mi = String(d.getMinutes()).padStart(2,'0')
    let ss = String(d.getSeconds()).padStart(2,'0')
    return yyyy.concat(mm).concat(dd).concat(hh).concat(mi).concat(ss);    
}

const placeToString = (x)=>x.strCity.concat(', ').concat(x.strState).concat(', ').concat(x.strCountry)

const schoolToString = (x,l)=>x.title.concat(' ').concat(l.in).concat(' ').concat(x.name).concat(' (').concat(x.school).concat('/').concat(x.year).concat(')')

const fileName = (x)=>'./cv/CV-'.concat(x.strName.replace(/\s/g,'').concat('-').concat(now()).concat('.pdf'))

module.exports = {
    yearsOld,
    placeToString,
    schoolToString,
    fileName
}