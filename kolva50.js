let charactersAll=[];
let forSampleEnterCharacter=document.querySelector('.characters');
const sampleEnterCharacter=forSampleEnterCharacter.outerHTML;
const relationXtoY=window.innerWidth/window.innerHeight;
let buttonWav=new Audio(`button.wav`);
let scrollUpWav=new Audio(`up.mp3`);
let scrollDownWav=new Audio(`down.mp3`);
let mmmWav=new Audio(`mmm.mp3`);

/*--------------------- заголовок -------------------------------------*/
let h1=[];
h1.push('Поздравляем с днем рождения!');
h1.push('Поздравляем с юбилеем!');
h1.push('Сергей Иванович, с полтинником!');
h1.push('Сергей Иванович, с пятидесятилетием!');
h1.push('Желаем здоровья!');
h1.push('Желаем счастья!');
h1.push('Желаем 50 евро в час!');
h1.push('Желаем 50 недель отпуска!');
h1.push('Желаем еще 50 лет жизни!');
h1.push('Желаем 50 дней спокойной работы!');
h1.push('Желаем удачи!');

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
let speech=[];
let speechText=[];
let think=[];
speech[0]='Спасибо за поздравление! Но выше руки поднять не могу - заняты рыбой!';
speech[1]='Спасибо за поздравление! Технически поддержу, и, да, я - юбиляр!';
speech[2]='Спасибо за поздравление! Конечно всегда рад помочь!';
speech[3]='Спасибо за поздравление! Всегда расскажу всё, что знаю!';
speech[4]='Спасибо за поздравление! Всегда обращайтесь если что!';
speech[5]='Спасибо за поздравление! Обращайтесь, постараемся всё найти!';
speech[6]='Спасибо за поздравление! Пока есть - последнее отдам!';
speech[7]='Спасибо за поздравление! А мне классно работать с вами!';
speech[8]='Спасибо, спасибо, лучше и не пожелаешь!';

think[0]='Что там про фаустпатрон...';
think[1]='Вот и молчали бы про техподдержку...';
think[2]='Про себя лучше прикиньте...';
think[3]='Почему едкое слово...';
think[4]='У меня мастерская что ли тут...';
think[5]='В гробу я эти серийники видал...';
think[6]='Кое-кому надо надавать по рукам...';
think[7]='И зачем было болтать про синие кресты...';
think[8]='Сами и не пейте...';

think[9]='Только бы рыбу не дарили...';
think[10]='Стою тут как ёлочка на новый год...';
think[11]='Так... Так... Так...';
think[12]='Ждёмс...';
think[13]='Надо бы всё списать...';
think[14]='Скорее бы обед...';
think[15]='Чёртова ЖАБА опять глючит...';
think[16]='Трам-пам-пам... Не трам-пам-пам...';

speechText[0]=`
Unser lieber Kamerad, Sergej Iwanowitsch! Ich bin Dmitrij Leontiev
 von der Gasprom Kosmitscheskije Systeme korporazion und ich werden
 Ihre Führer!  Natürlich ich möchte Ihnen zu Ihrem Jubiläum gratulieren
 und diesen  Faustpatronen und fünfzig große Schnapsen präsentieren!
 Alle zurück, Sergej Iwanowitsch, und wir werden viele für seine Schnapsen trinken!
 Ja natürlich, vergisst du deinen Führer nicht! Hände hoch!`;
speechText[1]=`
Про техподдержку сегодня молчим.
Для разговора есть повод другой:
С Сервером мы Юбиляра сравним -
И досконально, не левой ногой…

Наш юбиляр – это Кольва Сергей.
В корне отличен от многих других,
Он выступает в десятке ролей:
Серверных, жизненых и бытовых.`;
speechText[2]=`
Разве есть Сервер Сергею под стать?
Домыслы эти уместны ужель?
Если прикинуть, да порассуждать:
Можно везде проследить параллель!

Что дело Сервера? - Все отдавать.
Может сравниться с ним только Сергей:
Делом, советом друзьям помогать,
Хоть в день обычный, а хоть в Юбилей!`;
speechText[3]=`
Быть центром сети  - так Сервер живет,
По протоколу всех соединит.
Каждый Сергея рассказ – анекдот,
В свой кабинет тянет он как магнит.

Или хранилище - серверный САН,
Этот семантики мощный каркас!
Так и Сергей не полезет в карман,
Чтоб слово едкое вставить в рассказ!`;
speechText[4]=`
Есть назначение Сервера – шлюз.
(Нравится всем обращаться к нему.)
Словно Сергей сразу всех мастей туз -
Все всё несут лишь к нему одному!

Технику или с проблемой какой -
В двести пять «А» есть единственный путь!
Часто завален он весь с головой,
Универсальность - не козырь отнюдь…`;
speechText[5]=`
Скорость, надежность, крутой алгоритм.
Пятидесятый отличный раид.
Кредо Сергея - размеренный ритм,
Дела и время разумный гибрид.

Сервер для поиска ищет пути.
Есть у него инструмент – перебор.
А железяки серийник найти -
Только Сергей в этом деле матёр!`;
speechText[6]=`
Сервер политикой ставит порог
На поведение злых юзеров.
Ну а Сергей на словах весьма строг.
В жизни реальной не так уж суров…

Как Сервер Данных, хранящий запас,
Может всегда еще файлы принять -
Так и Сергей в двести пятой для нас -
Выдаст свое, лишь бы  в ЗИП не гонять.`;
speechText[7]=`
Сервер помечен крестом изолент.
Это секретный Сергея сигнал,
Что в данной технике ценности нет,
Что ее кто-то конкретно сломал!

Серверу классно работать в шкафу:
Чистый, прохладный и новый на взгляд!
Коль про Сергея не выдать инфу,
То, кто не знает, не даст пятьдесят!`;
speechText[8]=`
И наконец пожеланье: Сергей,
Пусть будет (как перерыв на обед)
Долгая жизнь, сладок сам юбилей,
К нынешним  летам добавить сто лет!

В благополучии, вот та ступень -
Минимум был чтоб: полсотни друзей,
Пятьдесят евро зарплаты за день,
Пятьдесят литров напитков!.. Не пей…`;

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
let carouselMusic1=new Audio(`karusel1.ogg`);
let carouselMusic2=new Audio(`karusel2.ogg`);
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
    constructor(width,coefHeight,placeEnterCharacter,name,image,cover) {
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

charactersAll.push(new EnterCharacter (15,1,forSampleEnterCharacter,'Дмитрий<br>Леонтьев','leo','contain'));
charactersAll.push(new EnterCharacter (10,1,forSampleEnterCharacter,'Павел<br>Костиков','kpa','cover'));
charactersAll.push(new EnterCharacter (10,1,forSampleEnterCharacter,'Александр<br>Белых','baa','cover'));
charactersAll.push(new EnterCharacter (10,1,forSampleEnterCharacter,'Александр<br>Мишарин','man','cover'));
charactersAll.push(new EnterCharacter (10,1,forSampleEnterCharacter,'Александр<br>Поветкин','pab','contain'));
charactersAll.push(new EnterCharacter (10,1,forSampleEnterCharacter,'Владислав<br>Голиков','gvv','cover'));
charactersAll.push(new EnterCharacter (10,1,forSampleEnterCharacter,'Антон<br>Смирнов','sav','cover'));
charactersAll.push(new EnterCharacter (10,1,forSampleEnterCharacter,'Сан Саныч','aaa','cover'));
charactersAll.push(new EnterCharacter (10,1,forSampleEnterCharacter,'Андрей<br>Сидоров','san','cover'));

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
            audioSpeech.forEach(function(el){if (!el.paused) {el.pause()}})
            let audioSpeechCurrent=9-ind;
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

forSwitch.addEventListener('click',onOffOriginal);
forShnaps[9].classList.remove('hidd');
forFaustpatron[9].classList.remove('hidd');


function onOffOriginal() {
    event.stopPropagation();
    audioSpeech[0].pause();
    buttonWav.play();

    if (!forSwitch.classList.contains('notorder')) {
        forSwitch.classList.add('notorder');
        forAbout.classList.add('hidd');
        forAbout.nextElementSibling.classList.remove('hidd');
        forGKS.classList.add('gksrus');
        forShnaps[9].classList.add('narzan');
        forFaustpatron[9].classList.add('rozez');
        forSwitch.children[0].innerHTML='перевод';
        audioSpeech[0]=new Audio(`leoua.mp3`);
        speech[0]=`Спасибо за поздравление! О! Минералочка?! Сейчас очень кстати.`;
        think[0]=`Ну и говор хохлятский...`;
        speechText[0]=`Дорогой наш товарищ, Сергей Иванович!
         Я, Дмитрий Леонтьев, из корпорации Газпром Космические Системы,
          твой руководитель, хочу поздравить тебя с юбилеем и подарить этот
          букет цветов и еще пятьдесят бутылочек минеральной воды! Сергей Иванович,
           желаю тебе побольше здоровья! Выше руки!`;
    }else{
        forSwitch.classList.remove('notorder');
        forAbout.classList.remove('hidd');
        forAbout.nextElementSibling.classList.add('hidd');
        forGKS.classList.remove('gksrus');
        forShnaps[9].classList.remove('narzan');
        forFaustpatron[9].classList.remove('rozez');
        forSwitch.children[0].innerHTML='оригинал';
        audioSpeech[0]=new Audio(`leo.mp3`);
        speech[0]=`Спасибо за поздравление! Но выше руки поднять не могу - заняты рыбой...`;
        think[0]=`Чё там про фаустпатрон?`;
        speechText[0]=`Unser lieber Kamerad, Sergej Iwanowitsch!
         Ich bin Dmitrij Leontiev von der Gasprom Kosmitscheskije
         Systeme korporazion und ich werden Ihre Führer!  Natürlich
         ich möchte Ihnen zu Ihrem Jubiläum gratulieren und diesen
         Faustpatronen und fünfzig große Schnapsen präsentieren! Alle
         zurück, Sergej Iwanowitsch, und wir werden viele für seine
          Schnapsen trinken! Ja natürlich, vergisst du deinen Führer nicht! Hände hoch!`;
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
    let xlamFallWav=new Audio(`fall8.mp3`);
    forXlam.classList.add('fall');
    xlamFallWav.play();
    delayTimer=Math.random()*30000+100000;
    setTimeout(xlamFall,delayTimer);
}
document.addEventListener('animationend',() => {forXlam.classList.remove('fall')});
forXlamRun.addEventListener('click',() => {if (!!firstXlam) {setTimeout(xlamFall,4000);
    firstXlam=false;
    forXlamRun.classList.add('notorder');
}});