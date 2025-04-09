let isha=document.getElementById("isha");
let fajr=document.getElementById("fajr");
let sunrise=document.getElementById("sunrise");
let dhuhr=document.getElementById("dhuhr");
let asr=document.getElementById("asr");
let magreb=document.getElementById("maghrib");
let citys=document.querySelector(".citys select");
let sel=document.querySelectorAll(".citys select option")
let nameCity=document.querySelector(".name-city");
let hest=document.querySelector(".hestory")
let hestory;





fetch(`https://api.aladhan.com/v1/timingsByCity?country=IQ&city=BG`)
.then(respons=>respons.json())
.then(result=>{
    hest.innerHTML=result.data.date.gregorian.date
    console.log(result.data.date.gregorian)
    
    hest.innerHTML+= " " + result.data.date.hijri.weekday.ar

})




async  function settime(city,namecity){
let data='';

    await new Promise((resolve,reject)=>{
    fetch(`https://api.aladhan.com/v1/timingsByCity?country=IQ&city=${city}`)
        .then(respons=>respons.json())
        .then(respons=>{
            data=respons;
            resolve();
        })
    })

    await new Promise((res,rej)=>{
        isha.innerHTML=data.data.timings.Isha;
        magreb.innerHTML=data.data.timings.Maghrib;
        dhuhr.innerHTML=data.data.timings.Dhuhr;
        fajr.innerHTML=data.data.timings.Fajr;
        sunrise.innerHTML=data.data.timings.Sunrise;
        asr.innerHTML=data.data.timings.Asr;
        res();
    })

    nameCity.innerHTML=namecity;


    // fetch(`https://api.aladhan.com/v1/timingsByCity?country=IQ&city=${city}`)
    // .then((response) => response.json())
    // .then(response=>{
    //     isha.innerHTML=response.data.timings.Isha;
    //     magreb.innerHTML=response.data.timings.Maghrib;
    //     dhuhr.innerHTML=response.data.timings.Dhuhr;
    //     fajr.innerHTML=response.data.timings.Fajr;
    //     sunrise.innerHTML=response.data.timings.Sunrise;
    //     asr.innerHTML=response.data.timings.Asr;

    //     console.log(response.da)
    // });
    // nameCity.innerHTML=namecity;
}



settime("BG","بغداد")


citys.addEventListener("change", function() {
        let selectedOption = citys.options[citys.selectedIndex];
        settime(selectedOption.id,selectedOption.innerHTML);
});
