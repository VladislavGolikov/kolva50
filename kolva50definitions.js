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
/*--------------------- заголовок -------------------------------------*/

/*--------------------- бублы -------------------------------------*/
const speechTextGer=`
Unser lieber Kamerad, Sergej Iwanowitsch! Ich bin Dmitrij Leontiev
 von der Gasprom Kosmitscheskije Systeme korporazion und ich werden
 Ihre Führer!  Natürlich ich möchte Ihnen zu Ihrem Jubiläum gratulieren
 und diesen  Faustpatronen und fünfzig große Schnapsen präsentieren!
 Alle zurück, Sergej Iwanowitsch, und wir werden viele für seine Schnapsen trinken!
 Ja natürlich, vergisst du deinen Führer nicht! Hände hoch!`;

const speechTextRus=`Дорогой наш товарищ, Сергей Иванович!
 Я, Дмитрий Леонтьев, из корпорации Газпром Космические Системы,
 твой руководитель, хочу поздравить тебя с юбилеем и подарить этот
 букет цветов и еще пятьдесят бутылочек минеральной воды! Сергей Иванович,
 желаю тебе побольше здоровья! Выше руки!`;

const thinkGer=`Чё там про фаустпатрон?`;
const thinkRus=`Ну и говор хохлятский...`;
const speechGer=`Спасибо за поздравление! Но выше руки поднять не могу - заняты рыбой...`;
const speechRus=`Спасибо за поздравление! О! Минералочка?! Сейчас очень кстати.`;

let speech=[];
let speechText=[];
let think=[];
speechText[0]=speechTextGer;
speech[0]=speechGer;
speech[1]='Спасибо за поздравление! Технически поддержу, и, да, я - юбиляр!';
speech[2]='Спасибо за поздравление! Конечно всегда рад помочь!';
speech[3]='Спасибо за поздравление! Всегда расскажу всё, что знаю!';
speech[4]='Спасибо за поздравление! Всегда обращайтесь если что!';
speech[5]='Спасибо за поздравление! Обращайтесь, постараемся всё найти!';
speech[6]='Спасибо за поздравление! Пока есть - последнее отдам!';
speech[7]='Спасибо за поздравление! А мне классно работать с вами!';
speech[8]='Спасибо, спасибо, лучше и не пожелаешь!';

think[0]=thinkGer;
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

