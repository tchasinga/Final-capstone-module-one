let AlertShow = false;

setInterval(() => {
  document.title = AlertShow ? 'Welcom to my Capstone' : 'Hi there || is Tchasinga';

  AlertShow = !AlertShow;
}, 2000);