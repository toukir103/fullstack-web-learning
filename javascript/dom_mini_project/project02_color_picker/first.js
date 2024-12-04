const createColor = () => {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

const updateColor = () => {
    const color = createColor();
    const colorBox = document.getElementById('colorBox');
    const rgbCode= document.getElementById('rgbCode');
    rgbCode.innerText=color;

    colorBox.style.backgroundColor = color;
}
const copyColorCode = () => {
    const rgbCode = document.getElementById('rgbCode');
    const inputTag = document.createElement('input'); 
    document.body.appendChild(inputTag); 
    inputTag.value = rgbCode.innerText; 

    inputTag.select();
    document.execCommand('copy'); 
    document.body.removeChild(inputTag);
    alert('Color copied to clipboard');
}

  

const copyBtn=document.getElementById('copyBtn');
const changeColor=document.getElementById('changeColor');

changeColor.addEventListener('click',() => {
    updateColor();
});
copyBtn.addEventListener('click',()=>{
    copyColorCode();
})
