const relationXtoY=window.innerWidth/window.innerHeight;
let charactersAll=[];

/*--------------------- заголовок -------------------------------------*/
const forH1=document.querySelector('.pseudoh1');
setInterval(checkH1Change,200);

function checkH1Change() {
    let checkForRight=forH1.getBoundingClientRect();
    if  (checkForRight.width===0) {
        forH1.innerHTML=`${h1[Math.floor(Math.random()*h1.length)]}`;
    }
}
/*--------------------- заголовок -------------------------------------*/
/*--------------------- бублы -------------------------------------*/
let speechActive=false; /* триггер звучания речи */
const forThinkBubbles=document.querySelector('.bubbles1');
const forSpeechBubbles=document.querySelector('.bubbles2');
const forTextContent=document.querySelectorAll('.text > span');
const mmmWav=new Audio(`mmm.mp3`);

forTextContent.forEach(function(el,ind){speechText[++ind]=el.innerText});

let timerSpeechStagnation=setTimeout(() => changeBubblies(forThinkBubbles,true,0,true),15000);

function changeBubblies(numBub,onChange,numText,stagnation) {

    if (stagnation) {
        numBub=forThinkBubbles;
        numText=Math.floor(Math.random()*(think.length-charactersAll.length))+charactersAll.length;
    }

    if (!!onChange) {
        if (numBub===forThinkBubbles) {
            numBub.children[0].innerHTML=think[numText];
        }else{
            numBub.children[0].innerHTML=speech[numText];
        }
    }

    if (!onChange) {
        numBub.classList.remove('enter');
        numBub.classList.add('exit');
        let delayTimer=20000+Math.random()*10000;
        timerSpeechStagnation=setTimeout(() => changeBubblies(forThinkBubbles,true,0,true),delayTimer);
        if (numBub===forSpeechBubbles) {speechActive=false;}
    }else{
        numBub.classList.remove('exit');
        numBub.classList.add('enter');
        if (numBub===forSpeechBubbles) {mmmWav.play()};
        setTimeout(() => changeBubblies(numBub,false,0,false),7000);
    }
}
/*--------------------- бублы -------------------------------------*/
/*--------------------- свиток стихи -------------------------------------*/
let scrollTextTop=0; /* это vh */
const crollTextTopMax=0.95; /* это от высоты окна */
const forScrollHeight=document.querySelector('.scrolltext');
const forScrollTextTop=document.querySelector('.text');
const forScrollCloseOpen=document.querySelector('.scrollup');
const scrollUpWav=new Audio(`up.mp3`);
const scrollDownWav=new Audio(`down.mp3`);

document.addEventListener('wheel',scrollHeightResize);
forScrollCloseOpen.addEventListener('click', expandShrinkScroll);

function scrollHeightResize() {
    let positionScrollText=forScrollTextTop.getBoundingClientRect();
    scrollTextTop-=event.deltaY;
    if (scrollTextTop>0) {scrollTextTop=0;}
    if (positionScrollText.bottom<window.innerHeight*crollTextTopMax&&event.deltaY>0) {scrollTextTop+=event.deltaY;}
    forScrollTextTop.style.top=`${scrollTextTop}vh`;
}

function expandShrinkScroll() {

    if (!forScrollHeight.classList.contains('expandscroll')) {
        forScrollHeight.classList.remove('shrinkscroll');
        forScrollHeight.classList.add('expandscroll');
        scrollDownWav.play();
    }else{
        forScrollHeight.classList.remove('expandscroll');
        forScrollHeight.classList.add('shrinkscroll');
        scrollUpWav.play();
    }
}
/*--------------------- свиток стихи -------------------------------------*/
/*--------------------- карусель ---------------------------------------------*/
let forSampleEnterCharacter=document.querySelector('.characters');
const sampleEnterCharacter=forSampleEnterCharacter.outerHTML;

const carouselMusic1=new Audio(`karusel1.ogg`);
const carouselMusic2=new Audio(`karusel2.ogg`);
let carouselSpeed=0.1;
document.addEventListener('wheel',()=>{carouselSpeed+=event.deltaY/20;
    if (event.deltaY>0) {
        carouselMusic2.pause();
        carouselMusic1.play();
    }else{
        carouselMusic1.pause();
        carouselMusic2.play();
    }
});

class EnterCharacter {
    constructor(width,coefHeight,placeEnterCharacter,name,image,cover,boss) {
        this.radiusY=30;
        this.radiusX=55;
        this.centerX=60*relationXtoY;
        this.centerY=50;
        this.position=charactersAll.length;
        this.top=0;
        this.left=0;
        this.width=width;
        this.height=this.width*coefHeight;
        this.placeEnterCharacter=placeEnterCharacter;
        this.name=name;
        this.placeName=placeEnterCharacter.children[1];
        this.image=image;
        this.cover=cover;
        this.boss=boss;
        this.createCharacter();
        this.addEnterCharacterHTML();
        this.stepGo=180;
    }
    createCharacter() {
        this.placeEnterCharacter.classList.remove('hidd');
        this.placeEnterCharacter.style.cssText=`left: ${this.left}vh;
        top: ${this.top}vh;
        width: ${this.width}vh;
        height: ${this.height}vh;`;
        this.placeName.innerHTML=this.name;
        this.placeEnterCharacter.style.backgroundImage=`url(${this.image}.png)`;
        this.placeEnterCharacter.style.backgroundSize=this.cover;
        if (this.boss) {
            this.placeName.nextElementSibling.classList.remove('hidd');
            this.placeName.nextElementSibling.nextElementSibling.classList.remove('hidd');
        }
    }
    moveCharacter() {
        let place=(2*Math.PI/charactersAll.length)*this.position+Math.PI/2;

        this.top=this.centerY-Math.sin(place)*this.radiusY-this.height/2;
        this.left=this.centerX-Math.cos(place)*this.radiusX-this.width/2;

        this.placeEnterCharacter.style.left=`${this.left}vh`;
        this.placeEnterCharacter.style.top=`${this.top}vh`;
    }
    goCharacter() {
        window.requestAnimationFrame(() => this.goCharacter(this));
        this.stepGo+=carouselSpeed;
        let place=(2*Math.PI/charactersAll.length)*this.position+Math.PI/2+this.stepGo*Math.PI/180;

        this.top=this.centerY-Math.sin(place)*this.radiusY-this.height/2;
        this.left=this.centerX-Math.cos(place)*this.radiusX-this.width/2;

        this.placeEnterCharacter.style.left=`${this.left}vh`;
        this.placeEnterCharacter.style.top=`${this.top}vh`;

        if (this.top-this.centerY>0) {
            this.placeEnterCharacter.style.zIndex='15';
        }else{
            this.placeEnterCharacter.style.zIndex='1';
        }
    }

    addEnterCharacterHTML() {
        forSampleEnterCharacter.insertAdjacentHTML('beforeBegin',sampleEnterCharacter);
        forSampleEnterCharacter=document.querySelector('.characters');
    }
}

charactersAll.push(new EnterCharacter (15,1,forSampleEnterCharacter,'Дмитрий<br>Леонтьев','leo','contain',true));
charactersAll.push(new EnterCharacter (10,1,forSampleEnterCharacter,'Павел<br>Костиков','kpa','cover',false));
charactersAll.push(new EnterCharacter (10,1,forSampleEnterCharacter,'Александр<br>Белых','baa','cover',false));
charactersAll.push(new EnterCharacter (10,1,forSampleEnterCharacter,'Александр<br>Мишарин','man','cover',false));
charactersAll.push(new EnterCharacter (10,1,forSampleEnterCharacter,'Александр<br>Поветкин','pab','contain',false));
charactersAll.push(new EnterCharacter (10,1,forSampleEnterCharacter,'Владислав<br>Голиков','gvv','cover',false));
charactersAll.push(new EnterCharacter (10,1,forSampleEnterCharacter,'Антон<br>Смирнов','sav','cover',false));
charactersAll.push(new EnterCharacter (10,1,forSampleEnterCharacter,'Сан Саныч','aaa','cover',false));
charactersAll.push(new EnterCharacter (10,1,forSampleEnterCharacter,'Андрей<br>Сидоров','san','cover',false));

charactersAll.forEach(function(el){el.moveCharacter()});

charactersAll.forEach(function(el){el.goCharacter()});


/*--------------------- аудио ---------------------------------------------*/
let audioSpeech=[];
audioSpeech[0]=new Audio(`leo.mp3`);
for (i=1;i<=8;i++) {
    audioSpeech[i]=new Audio(`${i}.mp3`)
}

const forSpeech=document.querySelectorAll('.characters');

forSpeech.forEach(function(el){el.addEventListener('click',rungun)});

function rungun() {
    forSpeech.forEach(function(el,ind){
        if (el===event.currentTarget&&!speechActive) {
            audioSpeech.forEach(function(el){if (!el.paused) {el.pause()}});
            let audioSpeechCurrent=audioSpeech.length-ind;
            audioSpeech[audioSpeechCurrent].play();
            event.currentTarget.classList.add('pulsarchar');
            speechActive=true;
            forMoveString.innerHTML=speechText[audioSpeechCurrent];
            forMoveString.style.left=`100%`;
            clearTimeout(timerSpeechStagnation);
            setTimeout(() => changeBubblies(forThinkBubbles,true,audioSpeechCurrent,false),3000);
            setTimeout(() => changeBubblies(forSpeechBubbles,true,audioSpeechCurrent,false),13000);
        }
    })
}
/*--------------------- аудио ---------------------------------------------*/
/*--------------------- переключение цензуры ---------------------------------------------*/
const forSwitch=document.querySelector('.original');
const forAbout=document.querySelector('.about');
const forGKS=document.querySelector('.gks');
const forShnaps=document.querySelectorAll('.shnaps');
const forFaustpatron=document.querySelectorAll('.faustpatron');
const buttonWav=new Audio(`button.wav`);
const bossWho=charactersAll.length-charactersAll.findIndex(function(el){return el.boss});

forSwitch.addEventListener('click',onOffOriginal);

function onOffOriginal() {
    event.stopPropagation();
    audioSpeech[0].pause();
    buttonWav.play();

    if (!forSwitch.classList.contains('notorder')) {
        forSwitch.classList.add('notorder');
        forAbout.classList.add('hidd');
        forAbout.nextElementSibling.classList.remove('hidd');
        forGKS.classList.add('gksrus');
        forShnaps[bossWho].classList.add('narzan');
        forFaustpatron[bossWho].classList.add('rozez');
        forSwitch.children[0].innerHTML='перевод';
        audioSpeech[0]=new Audio(`leoua.mp3`);
        speech[0]=speechRus;
        think[0]=thinkRus;
        speechText[0]=speechTextRus;
    }else{
        forSwitch.classList.remove('notorder');
        forAbout.classList.remove('hidd');
        forAbout.nextElementSibling.classList.add('hidd');
        forGKS.classList.remove('gksrus');
        forShnaps[bossWho].classList.remove('narzan');
        forFaustpatron[bossWho].classList.remove('rozez');
        forSwitch.children[0].innerHTML='оригинал';
        audioSpeech[0]=new Audio(`leo.mp3`);
        speech[0]=speechGer;
        think[0]=thinkGer;
        speechText[0]=speechTextGer;
    }
}

/*--------------------- переключение цензуры ---------------------------------------------*/
/*--------------------- бегущая строка внизу ---------------------------------------------*/
const forMoveString=document.querySelector('.pseudodown');
const stringSpeed=6;
function moveString() {
    let positionString=getComputedStyle(forMoveString);
    forMoveString.style.left=`${parseInt(positionString.left)-stringSpeed}px`;
    window.requestAnimationFrame(() => moveString());
}
moveString();
/*--------------------- бегущая строка внизу ---------------------------------------------*/
/*--------------------- хлам ---------------------------------------------*/
const forXlam=document.querySelector('.xlam');
const forXlamRun=document.querySelector('.xlamrun');
let delayTimer=0;
let firstXlam=true;

function xlamFall() {
    let xlamFallWav=new Audio(`fall.mp3`);
    forXlam.classList.add('fall');
    xlamFallWav.play();
    delayTimer=Math.random()*30000+100000;
    setTimeout(xlamFall,delayTimer);
}
forXlam.addEventListener('animationend',() => {forXlam.classList.remove('fall')});
forXlamRun.addEventListener('click',() => {
    if (!!firstXlam) {
        setTimeout(xlamFall,4000);
        firstXlam=false;
        forXlamRun.classList.add('notorder');
    }
});
/*--------------------- хлам ---------------------------------------------*/
