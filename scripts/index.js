const a = 1;
console.log(a);
console.log(2);


//const t1Msg = document.querySelector('h1');
//t1Msg.textContent = 'JS';
document.querySelector('h1').textContent = 'JS';

const textMsg = document.querySelector('h2');
textMsg.textContent = 'Hello world! Used by javascript';

const titleMsg = document.querySelector('#title');
titleMsg.textContent = 'WOW';

document.querySelector('html').onclick=function(){
    alert('doggy!');
}