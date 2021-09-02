//點擊事件
/*
document.querySelector('html').onclick=function(){
    alert('doggy!');
}
*/


const banner_image_now=document.querySelector('img');

banner_image_now.onclick=function(){
    const banner_now_src=banner_image_now.getAttribute('src');
    if(banner_now_src === './images/2B.jpg'){
        banner_image_now.setAttribute('src','./images/9S.jpg')
    }
    else{
        banner_image_now.setAttribute('src','./images/2B.jpg')
    }
}