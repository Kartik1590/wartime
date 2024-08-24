const ist=document.querySelector('.ist')
const pkt=document.querySelector('.pkt')
const btn=document.querySelector('.button')
const time=document.querySelector('#time')
const date=document.querySelector('#date')
const finaldata=document.querySelector('.finaldata')
const selecttype=document.querySelector('#selectType');
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
let timeval=time.value;
let dateval=String(date.value+" "+new Date().toLocaleTimeString());
let currentTime=new Date(dateval)
currentTime.setHours(currentTime.getHours()+timeval.split(':').map(e=>Number(e))[0])
currentTime.setMinutes(currentTime.getMinutes()+timeval.split(':').map(e=>Number(e))[1])
if (time.value==='' || date.value===''){
    alert('Please Chose the values')
}
else{
    if(selecttype.value==='warstart'){
    finaldata.textContent=`War will end at ${currentTime.toLocaleString('en-GB',{hour: 'numeric',
    minute: 'numeric',
    hour12:true,
    timeZone:'Asia/Kolkata'})} ist and ${currentTime.toLocaleString('en-GB',{hour: 'numeric',
    minute: 'numeric',
    hour12:true,
    timeZone:'Asia/Karachi'})} pkt on ${currentTime.toLocaleDateString()}`}
    else{
        let currenttime2=currentTime
        currenttime2.setDate(currentTime.getDate()+1)
        finaldata.textContent=`War will end at ${currentTime.toLocaleString('en-GB',{hour: 'numeric',
            minute: 'numeric',
            hour12:true,
            timeZone:'Asia/Kolkata'})} ist and ${currentTime.toLocaleString('en-GB',{hour: 'numeric',
            minute: 'numeric',
            hour12:true,
            timeZone:'Asia/Karachi'})} pkt on ${currenttime2.toLocaleDateString()}`
        
    }
}
}
const copy=document.getElementById('copy')
finaldata.addEventListener('click',()=>{navigator.clipboard.writeText(finaldata.innerHTML);copy.style.display='block';finaldata.style.color='#4bb543';finaldata.style.cursor='default'})
flatpickr('#time',{
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true,
    maxTime:'23:59'
})
flatpickr('#date',{
    
    dateFormat: "Y-m-d",
    maxDate: new Date().fp_incr(7),
    
})