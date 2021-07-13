function seebigimage() {
    let imageurl = document.querySelector('.main-image img').src.split('_medium.png').join('_large.png');
    document.querySelector('.popup-desk').innerHTML = '<div class="div-popup lightbox"><img src="' + imageurl + '"><div class="cross">+</div></div>';
    let winsize = {
        w: document.documentElement.clientWidth - 120,
        h: document.documentElement.clientHeight - 120
    };
    let sides = document.querySelector('.main-image img').clientWidth / document.querySelector('.main-image img').clientHeight;
   
    if (winsize.w / sides > winsize.h) {
        let correction = (winsize.w - (winsize.h * sides)) / 2;
        document.querySelector('.div-popup').style = 'margin: 0 ' + correction + 'px';//.popup
        winsize.w = winsize.h * sides;
    } else {
        winsize.h = winsize.w / sides;
    }
   
    document.querySelector('.lightbox img').style = 'width:' + winsize.w + 'px;height:' + winsize.h + 'px';
    
    document.querySelector('.cross').addEventListener('click',function(){
        document.querySelector('.popup-desk').dispatchEvent(new Event("click"));
    });
    
    document.querySelector('.popup-desk').classList.add('active');
}
function changeimage(event) { 
    let imageurl = event.target.src.split('_small.png').join('_medium.png');
    document.querySelector('.main-image img').src = imageurl;
}