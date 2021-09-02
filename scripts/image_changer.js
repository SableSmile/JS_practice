//點擊事件
/*
document.querySelector('html').onclick=function(){
    alert('doggy!');
}
*/

//產生 0 <= num < n 的亂數
function getRandom(num){
    //Math.floor()->無條件捨去  Math.random()->0~1之間的小數
    return Math.floor(Math.random()*(num)); 
}

const banner_img_array=['./images/9S.jpg','./images/2B.jpg','./images/checkmate.PNG']
const banner_image_now=document.querySelector('img');


function Banner_show(){
    const index=getRandom(3);
    banner_image_now.setAttribute('src',banner_img_array[index]);
    console.log(index);
}
//setTimeout(Banner_show,5000); //某function或code在n毫秒後執行(僅一次)
setInterval(Banner_show,5000);  //某function或code在n毫秒後執行(無限次)

//點擊圖片後，隨機更換下一張圖片
/* 
banner_image_now.onclick = function (){
    const index=getRandom(3);
    banner_image_now.setAttribute('src',banner_img_array[index]);
    //console.log(index);
}
*/

//利用點擊事件切換圖片
/* 
banner_image_now.onclick=function(){
    const banner_now_src=banner_image_now.getAttribute('src');
    if(banner_now_src === './images/2B.jpg'){
        banner_image_now.setAttribute('src','./images/9S.jpg')
    }
    else{
        banner_image_now.setAttribute('src','./images/2B.jpg')
    }
}
*/

