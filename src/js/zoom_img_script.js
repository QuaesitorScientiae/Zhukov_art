window.addEventListener('DOMContentLoaded', () => {
    const image_modal = document.querySelector('.img_modal__Image'),
    close = document.querySelector('.overlay .img_modal__close'),
	dateImg = document.querySelectorAll('.paint_img'),
    overlay = document.querySelector('.overlay');
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
            // console.log(e.target.src);
            // console.log(image_modal.src);
            image_modal.src = e.target.src;                
            }


        });       

    });


    close.addEventListener('click', () =>{
        overlay.style.display = "none";
        document.body.style.overflow = "";
    });

    overlay.addEventListener('click', () =>{
        overlay.style.display = "none";
        document.body.style.overflow = "";
    });      
});