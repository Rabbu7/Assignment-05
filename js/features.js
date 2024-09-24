document.getElementById('title-history')
.addEventListener('click',function(){

     document.getElementById('history-page').classList.remove('hidden');
     document.getElementById('donation-page').classList.add('hidden');
})

document.getElementById('title-donation')
.addEventListener('click',function(){

     document.getElementById('donation-page').classList.remove('hidden');
     document.getElementById('history-page').classList.add('hidden');
})