const ist=document.querySelector('.ist')
const pkt=document.querySelector('.pkt')
const btn=document.querySelector('.button')
const time=document.querySelector('#time')
const date=document.querySelector('#date')
const finaldata=document.querySelector('.finaldata')
function updateTime(){
    let dateist=new Date()
    let datepkt=new Date()
    let optionspkt={hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    hour12:true,
timeZone:'Asia/Karachi'}
let optionsist={hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
hour12:true}
    let currentsecondist=dateist.toLocaleString('en-GB',optionsist)
    let currentsecondpkt=datepkt.toLocaleString('en-GB',optionspkt)
    ist.textContent=currentsecondist
    pkt.textContent=currentsecondpkt

}

setInterval(updateTime,1000)

btn.addEventListener('click',checkfields)

function checkfields(){
const completestring=date.value+' '+time.value+':00'
const dateval=new Date(completestring)
if (time.value==='' && date.value===''){
    alert('Please Chose the values')
}
else{
    let days=String(dateval.getDate()+2).padStart(2,'0')
    let month=String(dateval.getMonth()).padStart(2,'0')
    let year=String(dateval.getFullYear()).slice(2)
    let finaldate=`${days}/${month}/${year}`
    finaldata.textContent=`War will end at ${ist.innerHTML} ist and ${pkt.innerHTML} pkt on ${finaldate}`
}
}
const copy=document.getElementById('copy')
finaldata.addEventListener('click',()=>{navigator.clipboard.writeText(finaldata.innerHTML);copy.style.display='block';finaldata.style.color='#4bb543';finaldata.style.cursor='default'})
