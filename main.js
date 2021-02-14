(()=>{
    let $ = c.getContext("2d"),
        w = c.width = window.innerWidth,
        h = c.height = window.innerHeight,
        random = n=>Math.random()*n,
        stars = new Array(1000).fill().map(()=>{
          return {r: random(w), s: random(0.01), a: random(Math.PI*2)};
        });
  
    console.log(stars)
    function loop(){
      $.fillStyle = "rgba(7, 0, 34, .15)";
      $.fillRect(0,0,w,h);
      stars.forEach(e=>{
        e.a+=e.s;
        $.beginPath();
        $.arc(Math.cos(e.a)*e.r + w/2, Math.sin(e.a)*e.r + h/2, 1,0,Math.PI*2);
        $.closePath();
        $.fillStyle = "white";
        $.fill();
      });
  
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
    window.addEventListener("resize", ()=>{
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
    });
  })();

const buttonStart = document.querySelector('.btn-start'),
      buttonStartName = document.querySelector('.btn-start__name'),
      letter  = document.querySelector('.letter'),
      openedLetter = document.querySelector('.letter img:last-child'),
      closedLetter = document.querySelector('.letter img:first-child'),
      canvasBasic = document.querySelector('#canvas-basic'),
      placeholder = document.querySelector('.placeholder');

buttonStart.addEventListener('mouseover', () => {
    buttonStartName.style.fontSize = '50px';
});
buttonStart.addEventListener('mouseout', () => {
    buttonStartName.style.fontSize = '';
});

buttonStart.addEventListener('click', () => {
    buttonStart.style.width = '100%';
    buttonStart.style.height = '100%';
    buttonStart.style.borderRadius = '0px';
    buttonStart.style.background = 'white';
    buttonStartName.style.display = 'none';
    buttonStart.style.position = 'absolute';

    
    setTimeout(() => {
        buttonStart.style.background = 'linear-gradient(90deg, #f598a8, #f6edb2)';
    }, 200);

    setTimeout(() => {
        document.querySelector('canvas').style.display = 'none';
        document.querySelector('.btn-start__wrapp').style.display = 'none';
        document.body.style.background = 'linear-gradient(90deg, #f598a8, #f6edb2)';
    }, 800);

    setTimeout(() => {
        letter.style.display = 'block';
        throwLetter();
        canvasBasic.style.display = 'block';
        var granimInstance = new Granim({
            element: '#canvas-basic',
            direction: 'diagonal',
            isPausedWhenNotInView: true,
            states : {
                "default-state": {
                    gradients: [
                        ['#ff9966', '#ff5e62'],
                        ['#00F260', '#0575E6'],
                        ['#e1eec3', '#f05053']
                    ]
                }
            }
        });
    }, 1500);

});


const throwLetter = () => {
    // let count = 0;
    // let bubble = 0;
    // if (count === 0) {
    //     bubble = 250;
    // } else {
    //     bubble = -250;
    // }
    
    anime({
        targets: '.letter',
        translateY: 750,
        scale: 1,
        rotate: '1turn'
      });
};

const openLetter = () => {
    openedLetter.style.display = 'block';
    closedLetter.style.display = 'none';
    anime({
        targets: '.letter',
        translateY: 520
    });
    placeholder.style.display = 'block';
};

letter.addEventListener('click', openLetter);


