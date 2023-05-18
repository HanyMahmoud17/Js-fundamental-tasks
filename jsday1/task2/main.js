var Fnum=prompt("enter fnum :")-0
var Snum=prompt("enter Snum :")-0
var Thnum=prompt("enter Thnum :")*1

if(Fnum > Snum && Fnum > Thnum){
    document.write("fnum is biggest and is :" + ' '+Fnum)
}else if(Fnum < Snum && Snum > Thnum){
    document.write("Snum is biggest and is :" + ' '+Snum)
}else{
    document.write("Thnum is biggest and is :" + ' '+Thnum)
}