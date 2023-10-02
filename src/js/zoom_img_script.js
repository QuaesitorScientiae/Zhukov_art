window.addEventListener('DOMContentLoaded', () => {
    const image_modal = document.querySelector('.img_modal__Image'),
    close = document.querySelector('.overlay .img_modal__close'),
	dateImg = document.querySelectorAll('.paint_img'),
    overlay = document.querySelector('.overlay'),
    scroll = calcScroll();
    // console.log(image_modal);

    dateImg.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target) {e.preventDefault();
            };
            if (window.innerWidth < 1023) {
            //    console.log("mobile");  
            } else {
            overlay.style.display = "block";
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = `${scroll}px`;
            // console.log(e.target.src);
            // console.log(image_modal.src);
            image_modal.src = e.target.src;                
            }


        });       

    });

    function calcScroll () {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;/*  Ширина полосы прокрутки */
        div.remove();

        return scrollWidth;
    }


    close.addEventListener('click', () =>{
        overlay.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
    });

    overlay.addEventListener('click', () =>{
        overlay.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
    });      
});