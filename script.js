const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var cursor = new MouseFollower();


const btns = document.querySelectorAll(".right");

    btns.forEach((btn) => {
      btn.addEventListener("mousemove", function(e){
        const position = btn.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;

        btn.children[0].style.transform = "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)";
      });
    });

    btns.forEach((btn) => {
      btn.addEventListener("mouseout", function(e){
        btn.children[0].style.transform = "translate(0px, 0px)";
      });
    });

    gsap.from(".nav",{
        opacity:0,
        duration:3,
    })


    gsap.from(".homemain",{
        yPercent: 170,
        opacity:0,
        duration:4,
        stagger: 0.05,
        rotationX:180,
        ease: "back.out",

    })
    gsap.from(".vid",{
        yPercent: 200,
        opacity:0,
        duration:6,
        stagger: 0.05,
        rotationX:180,
        ease: "back.out",

    })