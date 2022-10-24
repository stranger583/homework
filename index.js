

//   load.waitUntil(event.preloadResponse.then(function(response) {
//     // do something with the response
//   }));


Vue.config.devtools = true;
let vue = new Vue({
    el:"#app",
    data:{
        navType:"default",
        count:1,
        lists:[
            {
                img:"./img/ing1.png",
                text:"UX DESIGN",
            },
            {
                img:"./img/ing2.png",
                text:"UI DESIGN",
            },
            {
                img:"./img/ing3.png",
                text:"WEBSITE</br>DEVELOPMENT",
            },
            {
                img:"./img/ing4.png",
                text:"MOBILE APP</br>DEVELOPMENT",
            },
            {
                img:"./img/ing5.png",
                text:"ECOMMERCE",
            },
            {
                img:"./img/ing6.png",
                text:"CUSTOMER LOYALTY",
            },
            {
                img:"./img/ing7.png",
                text:"DIGITAL</br>TRANSFORMATION",
            },
            {
                img:"./img/ing8.png",
                text:"DIGITAL MARKETING",
            },
            {
                img:"./img/ing9.png",
                text:"BRANDING",
            },
        ]
    },
    mounted(){
        let that = this;
        $(".swiper-button-next").click(function(){
            that.count +=1;
        })
        $(".swiper-button-prev").click(function(){
            that.count -=1;
        })
        
    },
    methods:{
        nav_open(){
            let holder = document.getElementsByClassName("holder")[0]
            let holder_button = document.getElementsByClassName("holder_button")[0]
            let logo_white = document.getElementsByClassName("logo_white")[0]
            let logo_blue = document.getElementsByClassName("logo_blue")[0]
            let slidMenu = document.getElementsByClassName("slidMenu")[0]
            let nav = document.getElementById("nav");
            logo_blue.classList.toggle("none");
            holder_button.classList.toggle("none");
            logo_white.classList.toggle("block");
            nav.classList.toggle('open');
            if(this.navType === 'default'){
                logo_blue.style.display = "none";
                $("#nav>div").css('backgroundColor','rgba(255,255,255,1)')
                slidMenu.classList.add("nav_in");
                slidMenu.classList.remove("nav_out");
                $(".holder").css('backgroundColor','rgba(255,255,255,0)')
                this.navType = 'primary';
            }else{
                if(scrollY == 0){
                    $(".holder").css('backgroundColor','rgba(255,255,255,0)')
                    $("#nav>div").css('backgroundColor','rgba(255,255,255,1)')
                }else{
                    $(".holder").css('backgroundColor','rgba(255,255,255,0.9)')
                    $("#nav>div").css('backgroundColor','#414042')

                }
                logo_blue.style.display = "block";
                slidMenu.classList.add("nav_out");
                slidMenu.classList.remove("nav_in");
                this.navType = 'default';
            }
        }
            
        
    }
})

$(document).ready(function() {
    $(".logo_blue").css("display","none")
    $("#nav>div").css('backgroundColor','rgba(255,255,255,1)')
    $(window).scroll(function() {
        if(scrollY === 0){
            $(".holder").css('backgroundColor','rgba(255,255,255,0)')
            $("#nav>div").css('backgroundColor','rgba(255,255,255,1)')
            $(".logo_blue").css("display","none")
        }else{
            $(".holder").css('backgroundColor','rgba(255,255,255,0.9)')
            $("#nav>div").css('backgroundColor','#414042')
            if(vue.navType == 'default'){
                $(".logo_blue").css("display","block")
            }
        }
    });
  });

  gsap.registerPlugin(ScrollTrigger);
  gsap.to([
    ".banner_text1 p", ".salad img",".salad p",".banner_text1 div",".salad div"
], {
    keyframes: [
        {
            duration: 0,
            opacity: 0
        }, {
            duration: .7,
            y: 150,
            opacity: 0
        }, {
            duration: 1,
            y: 0,
            opacity: 1,
            ease: "sine.inOut"
        }
    ]
});
gsap.to([
    ".banner_text2 img",".banner_text2 h1"
], {
    keyframes: [
        {
            duration: 0,
            opacity: 0
        }, {
            duration: .5,
            x: 60,
            opacity: 0
        }, {
            duration: .7,
            x: 0,
            opacity: 1,
            ease: "sine.inOut"
        }
    ]
});



gsap
.timeline({
    scrollTrigger: {
        trigger: ".awards_title",
        start: "-=500",
        end: "-=500",
        scrub: 3
    }
})
.fromTo(".awards_title img", {
    clipPath: "inset(2rem 10rem 3rem 0rem)"
}, {
    duration: 2,
    ease: "sine.inOut",
    clipPath: "inset(0rem 0rem 0rem 0rem)"
})
