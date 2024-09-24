document.getElementById('btn-1-add-money')
.addEventListener('click',function(event){
     event.preventDefault();
     const donate1= document.getElementById('donate-1').value;
     validityTest(donate1);
     calculateBalance('donate-1','noakhali-balance');
     addHistory('donate-1','noakhali');
     
})
document.getElementById('btn-2-add-money')
.addEventListener('click',function(event){
     event.preventDefault();
     const donate2= document.getElementById('donate-2').value;
     validityTest(donate2);
     calculateBalance('donate-2','feni-balance');
     addHistory('donate-2','feni');
     
})
document.getElementById('btn-3-add-money')
.addEventListener('click',function(event){
     event.preventDefault();
     const donate3= document.getElementById('donate-3').value;
     validityTest(donate3);
     calculateBalance('donate-3','movement-balance');
     addHistory('donate-3','movement');
     
})