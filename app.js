let next = document.querySelector('.next')
let prev  = document.querySelector('.prev')



next.addEventListener('click', function(){
    let items = document.querySelectorAll(' .item')
    document.querySelector(' .slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll(' .item')
    document.querySelector(' .slide').prepend(items[items.length-1])
})

const span = document.querySpan('span');
const alllang = ['en', 'ru'];

span.addEventListener('change', changeURLLanguage);
function changeURLLanguage(){
    let lang = span.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

// function changeLanguage(){
//     let hash = window.location.hash;
//     hash = hash.substr(1);
//     console.log(hash);
//     if (!alllang.includes(hash)){
//         location.href = window.location.pathname + '#en' + lang;
//         location.reload();

//     }
//     span.value = hash;
//     document.querySelector('nav').innerHTML = langArr['nav'][hash];
    
    
// }
// changeLanguage();