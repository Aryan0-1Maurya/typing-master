/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/

Swal.fire({
    icon: "success",
    title: "Welcome All the best from Developer",
    text:"Use the 'ignore case' button, if your phone has auto-uppercase feature. Pls upvote it and show your support thanks :)",
    showConfirmButton: false,
    timer: 3800,
    showClass: {
      popup: `
 animate__animated
 animate__fadeInUp
 animate__faster
`,
    },
    hideClass: {
      popup: `
 animate__animated
 animate__fadeOutDown
 animate__faster
`,
    },
  });
texts = [
    `Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much. They were the last people you'd expect to be involved in anything strange or mysterious, because they just didn't hold with such nonsense. They never entered into any kind of a serious conflict with anyone.`, 

    `Mr. Dursley was the director of a firm called Grunnings, which made drills. He was a big, beefy man with hardly any neck, although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors.`, 

    `The aryan had everything they wanted, but they also had a secret, and their greatest fear was that somebody would discover it. They didn't think they could bear it if anyone found out about the Potters. Mrs. Potter was Mrs. Dursley's sister, but they hadn't met for several years; in fact, Mrs. Dursley pretended she didn't have a sister.`, 

    '& you know about ARYAN MauryA is SingEr and RappeR and alsO PrograMMer so all the BesT from Developer ~',

    `The aryan shuddered to think what the neighbors would say if the Potters arrived in the street. The aryan knew that the Potters had a small son, too, but they had never even seen him. This boy was another good reason for keeping the Potters away; they didn't want Dudley mixing with a child like that, they were a bit over-protective.`,

    `When Mr. and Mrs. Dursley woke up on the dull, gray Tuesday our story starts, there was nothing about the cloudy sky outside to suggest that strange and mysterious things would soon be happening all over the country. Mr. Dursley hummed as he picked out his most boring tie for work, and Mrs. Dursley gossiped away happily as she wrestled a screaming Dudley into his high chair.`, 

    `None of them noticed a large, tawny owl flutter past the window. At half past eight, Mr. Dursley picked up his briefcase, pecked Mrs. Dursley on the cheek, and tried to kiss Dudley good-bye but missed, because Dudley was now having a tantrum and throwing his cereal at the walls. "Little tyke," chortled Mr. Dursley as he left the house. He got into his car and backed out of number four's drive.`, 
    
    `It was on the corner of the street that he noticed the first sign of something peculiar - a cat reading a map. For a second, Mr. Dursley didn't realize what he had seen - then he jerked his head around to look again. There was a tabby cat standing on the corner of Privet Drive, but there wasn't a map in sight. What could he have been thinking of? It must have been a trick of the light.`, 
    
    `As Mr. Dursley drove around the corner and up the road, he watched the cat in his mirror. It was now reading the sign that said Privet Drive - no, looking at the sign; cats couldn't read maps or signs. Mr. Dursley gave himself a little shake and put the cat out of his mind. As he drove toward town he thought of nothing except a large order of drills he was hoping to get that day.`, 

    `But on the edge of town, drills were driven out of his mind by something else. As he sat in the usual morning traffic jam, he couldn't help noticing that there seemed to be a lot of strangely dressed people about. People in cloaks. Mr. Dursley couldn't bear people who dressed in funny clothes - the getups you saw on young people! He supposed this was some stupid new fashion.`, 

    `They were whispering excitedly together. Mr. Dursley was enraged to see that a couple of them weren't young at all; why, that man had to be older than he was, and wearing an emerald-green cloak! The nerve of him! But then it struck Mr. Dursley that this was probably some silly stunt -these people were obviously collecting for something…yes, that would be it.`, 
    
    `Mr. Dursley always sat with his back to the window in his office on the ninth floor. If he hadn't, he might have found it harder to concentrate on drills that morning. He didn't see the owls swooping past in broad daylight, though people down in the street did; they pointed and gazed open-mouthed as owl after owl sped overhead.`, 
    
    `Most of them had never seen an owl even at nighttime. Mr. Dursley, however, had a perfectly normal, owl-free morning. He yelled at five different people. He made several important telephone calls and shouted a bit more. He was in a very good mood until lunchtime, when he thought he'd stretch his legs and walk across the road to buy himself a bun from the bakery.`
]

var text,textarea, doneTill="", chosen="",leftOver="", t, ignored = false,val=0,calc=[0,0],consistency=[],oldVal=0,notStarted=true,wrong=0,toggle=0;
for (let i in texts) {
    texts[i]=texts[i]+" ";
}

window.onload = function() {
    text=document.getElementById("text");
    textarea=document.getElementsByTagName("textarea")[0];
    text.innerHTML=chosen=leftOver=texts[Math.floor(Math.random()*texts.length)];
    textarea.addEventListener("input",CheckAndClear);
}

function CheckAndClear() {
    if (notStarted && doneTill=="" && textarea.value.length!=0) {
        t = setInterval(function() {
            val+=1;
            document.getElementById("time").innerHTML = "Timer- "+(Math.floor(val/6000)<10 ? "0" : "")+Math.floor(val/6000)+":"+(Math.floor(val/100)%60<10 ? "0" : "")+Math.floor(val/100)%60+":"+(val%100<10 ? "0": "")+val%100;
        },10);
        notStarted=false;
    }
    var x = textarea.value = (ignored ? textarea.value.toLowerCase() : textarea.value);
    consistency.push(val-oldVal);
    if (leftOver=="") {
        Finish();
        if (t) {
            clearInterval(t);
        }
    }
    document.getElementById("alert").style.top="-50px";
    text.innerHTML=`<b>${doneTill}</b>`;
    for (var i = 0; i < x.length; i++) {
        if (x[i]==leftOver[i]) {
            text.innerHTML+=`<b>${x[i]}</b>`;
        }
        if (x[i]!=leftOver[i]) {
            wrong++;
            document.getElementById("alert").style.top="0";
            text.innerHTML+=`<span>${leftOver[i]}</span>`;
        }
    }
    text.innerHTML+=leftOver.slice(i);
    if (x==leftOver.slice(0,-1)) {
        ShowResult();
    }
    for (let i = 0; i < x.length; i++) {
        if (x[i]==" " && leftOver.startsWith(x.slice(0,i+1))) {
            leftOver=leftOver.slice(i+1);
            doneTill+=x.slice(0,i)+" ";
            x = x.slice(i+1)
        }
    }
    textarea.value = x;
    oldVal=val;
}

window.IgnoreCase = function() {
    toggle++;
    if (toggle%2) {
        ignored = true;
        text.innerHTML=text.innerHTML.toLowerCase();
        leftOver=leftOver.toLowerCase();
        doneTill=doneTill.toLowerCase();
        document.getElementById("case").innerHTML = "Consider Case";
    }
    else {
        ignored = false;
        text.innerHTML = chosen;
        leftOver = text.innerHTML.slice(text.innerHTML.length-leftOver.length);
        CheckAndClear();
        document.getElementById("case").innerHTML = "Ignore Case";
    }
}

function Finish() {
    clearInterval(t);
    t = false;
}

function ShowResult() {
    clearInterval(t);
    document.getElementById("result-page").style.left="0";
    var wpm = doneTill!="" ? Math.round(doneTill.split(" ").length*600000/val)/100 : 0;
    var review = (wpm<10 ? "Need Improvement" : (wpm<20 ? "Okay" : (wpm<30 ? "Impressive" : (wpm<50 ? "Outstanding" : "Hacker!"))));
    document.getElementById("rp-rating").innerHTML = "Speed review: "+review;
    document.getElementById("rp-wpm").innerHTML = "Words Per Minute: "+wpm;
    try {
        var avg = consistency.reduce((a,b)=>a+b)/consistency.length;
        var n = consistency.map(a => Math.abs((avg-a)/5));
        var n_avg = n.reduce((a,b)=>a+b)/n.length;
        var final_consis = Math.round(10000*(1-n_avg/avg))/100;
        document.getElementById("rp-consistency").innerHTML = "Consistency: "+final_consis+"%";
    }
    catch (e) {document.getElementById("rp-consistency").innerHTML = "Consistency: 0%";}
    document.getElementById("rp-accuracy").innerHTML = "Accuracy: "+Math.round(10000*(1 - wrong/chosen.length/5))/100;
}

window.Replay = function() {
    document.getElementById("result-page").style.left="-100vw";
    text.innerHTML=chosen=leftOver=texts[Math.floor(Math.random()*texts.length)];
    doneTill="";
    textarea.value = "";
    val = 0;
    document.getElementById("time").innerHTML = "Timer- 00:00:00";
    notStarted=true;
    consistency=[];
    oldVal = 0;
    wrong = 0;
    ignored = false;
}

/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/