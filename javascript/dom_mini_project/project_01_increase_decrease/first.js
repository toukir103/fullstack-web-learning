const counterElement = document.getElementById('counter');
const plusbtn = document.getElementById('plusBtn');
const minusbtn = document.getElementById('minusBtn');

let counter = 0;

const updateCounter=(vlue)=>{

    counter = counter + vlue;
    if (counter>=10) {
        plusbtn.setAttribute('disabled',true);
    }
    else{
        plusbtn.removeAttribute('disabled',false);
    }
    counterElement.innerText = counter; 
    if (counter<=0) {
        minusbtn.setAttribute('disabled',true);
    }
    else{
        minusbtn.removeAttribute('disabled',false);
    }

}

plusbtn.addEventListener('click', () => {
    updateCounter(1);

});
minusbtn.addEventListener('click', () => {
    updateCounter(-1);
   
  
});


