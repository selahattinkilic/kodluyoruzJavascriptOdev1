   let isim =prompt('Lutfen Adinizi Giriniz');
function saatayarla()
{
 
    let bilgi=document.querySelector("#myName");
    bilgi.innerHTML=isim;
    let date =new Date();
    let dateInfo= document.querySelector("#date")
    value1=date.getDay()
    value2=date.getMonth()
    value3=date.getFullYear()
    value4=date.getHours()
    value5=date.getSeconds()
    value6=date.getMinutes()

    dateInfo.innerHTML=`${value1} / ${value2} / ${value3} tarihinde , saat  ${value4} : ${value6} : ${value5}`
}
setInterval(saatayarla,1000)

