let backCome = "Relation Community";

let AlertShow = false;

setInterval(() => {
  document.title = AlertShow ? 'Welcom to my Capstone' : 'Hi there || is Tchasinga';

  AlertShow = !AlertShow;
}, 2000);

const Changer = document.querySelector('.RelationCode') ;

Changer.addEventListener('mouseover', () =>{
    Changer.innerHTML ="Be Connected with us in our World..!!";
    Changer.style.cursor = 'pointer';
    Changer.style.transition = 'all 0.4s ease-out'
})

Changer.addEventListener('mouseout', () =>{
    Changer.innerHTML = backCome;
});

const Changer2 = document.querySelector('.textTag') ;

const textLoad = () =>{
     setTimeout(() =>{
        Changer2.innerHTML = "Hi there, Welcom";
     },0);

     setTimeout(() =>{
        Changer2.innerHTML = "WOLRD HEALTH COMMUNITY OF THE GLOBAL 2023";
     },8000);

     setTimeout(() =>{
        Changer2.innerHTML = "Keep your Health and Life safe !!";
     },6000);

     setTimeout(() => {
        Changer2.innerHTML = "We are here to help you";
     },5000)

}
textLoad();
  setInterval(textLoad,20000);

  