


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
        //設定
        gsap.registerPlugin(ScrollTrigger);
        
        // swiper
        var swiper = new Swiper(".mySwiper", {
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        let that = this;
        // 影片寬度
        let screenHeight = screen.height * 1.025;
        let viedo_width = 1.78 * screenHeight;
        $('.banner_video').width(viedo_width).height(screenHeight)
        $(window).resize(function(){
            let screenHeight = screen.height * 1.025;
            let viedo_width = 1.78 * screenHeight;
            $('.banner_video').width(viedo_width).height(screenHeight)
        });
        $(".swiper-button-next").click(function(){
            that.count +=1;
        })
        $(".swiper-button-prev").click(function(){
            that.count -=1;
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
        
        this.gsap_effect();
        // if(1100 < document.body.scrollWidth){
        //     //gsap 預設
        //     $(".ceo_right p span").css("color","#fff")
        //     $(".awards_award img").css('opacity', '0')
        //     $(".ceo_right p").css('opacity', '0');
        //     $(".ceo_left img").css('opacity', '0');
        //     $(".ceo_left h4").css('opacity', '0');
        //     $(".ceo_left p").css('opacity', '0');
        //     $(".about_video").css('opacity', '0');
        //     $(".ingradients_list").css('opacity', '0');
        //     //gsap效果
        //     this.clip_gsap(".about",".about_gsap_img" );
        //     this.clip_gsap(".awards_title",".awards_title img" );
        //     this.clip_gsap(".brand",".brand_gsap_img" );
        //     this.clip_gsap(".ingradients",".ingradients_gsap_img" );
        //     gsap
        //     .to([".banner_text1 p", ".salad img",".salad p",".banner_text1 div",".salad div"], {
        //         keyframes: [
        //             {
        //                 duration: 0,
        //                 opacity: 0
        //             }, {
        //                 duration: .7,
        //                 y: 150,
        //                 opacity: 0
        //             }, {
        //                 duration: 1,
        //                 y: 0,
        //                 opacity: 1,
        //                 ease: "sine.inOut"
        //             }
        //         ]
        //     });
        // gsap
        //     .to([".banner_text2 img",".banner_text2 h1"], {
        //         keyframes: [
        //             {
        //                 duration: 0,
        //                 opacity: 0
        //             }, {
        //                 duration: .5,
        //                 x: 60,
        //                 opacity: 0
        //             }, {
        //                 duration: .7,
        //                 x: 0,
        //                 opacity: 1,
        //                 ease: "sine.inOut"
        //             }
        //         ]
        //     });
        // gsap
        //     .timeline({
        //         scrollTrigger: {
        //             trigger: ".brand",
        //             start: "top top",
        //             end: "+=700",
        //             scrub: 3
        //         }
        //     })
        //     .fromTo(".client_img", {
        //         clipPath: "inset(0rem 0rem 40rem 0rem)"
        //     }, {
        //         duration: 2,
        //         ease: "sine.inOut",
        //         clipPath: "inset(0rem 0rem 0rem 0rem)"
        //     }),
        // gsap
        //     .timeline({
        //         scrollTrigger: {
        //             trigger: ".ingradients",
        //             start: "-=500",
        //             end: "+=100",
        //             scrub: 3
        //         }
        //     })
        //     .fromTo(".ingradients_text", {
        //         opacity:0,
        //         y:100,
        //     }, {
        //         duration: 2,
        //         ease: "sine.inOut",
        //         opacity:1,
        //         y:0,
        //     }),
        // gsap
        //     .timeline({
        //         scrollTrigger: {
        //             trigger: ".awards",
        //             start: "-=500",
        //             end: "-=500",
        //             scrub: 5
        //         }
        //     })
        //     .to("#award_img1", {
        //         keyframes: [
        //             {
        //                 duration: 0,
        //                 x:100,
        //                 opacity:0,
        //             }, {
        //                 duration: 2.5,
        //                 opacity:1,
        //                 x:0,
        //                 ease: "sine.inOut"
        //             }
        //         ]
        //     })
        //     .to("#award_img2", {
        //         keyframes: [
        //             {
        //                 duration: 0,
        //                 x:100,
        //                 opacity:0,
        //             }, {
        //                 duration: 2.5,
        //                 opacity:1,
        //                 x:0,
        //                 ease: "sine.inOut"
        //             }
        //         ]
        //     })
        //     .to("#award_img3", {
        //         keyframes: [
        //             {
        //                 duration: 0,
        //                 x:100,
        //                 opacity:0,
        //             }, {
        //                 duration: 2.5,
        //                 opacity:1,
        //                 x:0,
        //                 ease: "sine.inOut"
        //             }
        //         ]
        //     })
        //     .to("#award_img4", {
        //         keyframes: [
        //             {
        //                 duration: 0,
        //                 x:100,
        //                 opacity:0,
        //             }, {
        //                 duration: 2.5,
        //                 opacity:1,
        //                 x:0,
        //                 ease: "sine.inOut"
        //             }
        //         ]
        //     })
        // gsap
        //     .timeline({
        //         scrollTrigger: {
        //             trigger: ".about_video",
        //             start: "-=500",
        //             end: "-=500",
        //             scrub: 3
        //         }
        //     })
        //     .to(".about_video", {
        //         keyframes: [
        //             {
        //                 duration: 0,
        //                 opacity:0,
        //             }, {
        //                 duration: 2,
        //                 opacity:1,
        //                 ease: "sine.inOut"
        //             }
        //         ]
        //     })
        // gsap
        //     .timeline({
        //         scrollTrigger: {
        //             trigger: ".ceo_right",
        //             start: "-=500",
        //             end: "-=500",
        //             scrub: 3
        //         }
        //     })
        //     .to(".ceo_right p", {
        //         keyframes: [
        //             {
        //                 opacity:0,
        //                 x:60,
        //             }, {
        //                 duration: 2.5,
        //                 opacity:1,
        //                 x:0,
        //                 ease: "sine.inOut"
        //             }
        //         ]
        //     })
        //     .to(".ceo_right p span", {
        //         keyframes: [
        //             {
        //                 color:"white",
        //             }, {
        //                 duration: 2,
        //                 color:"#FFBC58",
        //                 ease: "sine.inOut"
        //             }
        //         ]
        //     })
        // gsap
        //     .timeline({
        //         scrollTrigger: {
        //             trigger: ".ceo_left",
        //             start: "-=500",
        //             end: "-=500",
        //             scrub: 3
        //         }
        //     })
        //     .to(".ceo_left img", {
        //         keyframes: [
        //             {
        //                 opacity:0,
        //                 y:60,
        //             }, {
        //                 duration: 1.5,
        //                 opacity:1,
        //                 y:0,
        //                 ease: "sine.inOut"
        //             }
        //         ]
        //     })
        //     .to([".ceo_left h4", ".ceo_left p"], {
        //         keyframes: [
        //             {
        //                 opacity:0,
        //                 y:60,
        //             }, {
        //                 duration: 1,
        //                 opacity:1,
        //                 y:0,
        //                 ease: "sine.inOut"
        //             }
        //         ]
        //     })
        // $(".ingradients_list").each(function(){
        //     gsap
        //     .timeline({
        //         scrollTrigger: {
        //             trigger: this,
        //             start: "-=500",
        //             end: "-=500",
        //             scrub: 3
        //         }
        //     })
        //     .to(this, {
        //         keyframes: [
        //             {
        //                 duration: 0,
        //                 opacity:0,
        //             }, {
        //                 duration: 2,
        //                 opacity:1,
        //                 ease: "sine.inOut"
        //             }
        //         ]
        //     })
        // })

        // }
        
        

    },
    methods:{
        nav_open(){
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
        },
        clip_gsap(trig_name, name2){
            gsap
            .timeline({
                scrollTrigger: {
                    trigger: trig_name,
                    start: "-=500",
                    end: "-=500",
                    scrub: 3
                }
            })
            .fromTo(name2, {
                clipPath: "inset(0rem 40rem 0rem 0rem)"
            }, {
                duration: 2,
                ease: "sine.inOut",
                clipPath: "inset(0rem 0rem 0rem 0rem)"
            })
        },
        gsap_effect(){
            if(1100 < document.body.scrollWidth){
                //gsap 預設
                $(".ceo_right p span").css("color","#fff")
                $(".awards_award img").css('opacity', '0')
                $(".ceo_right p").css('opacity', '0');
                $(".ceo_left img").css('opacity', '0');
                $(".ceo_left h4").css('opacity', '0');
                $(".ceo_left p").css('opacity', '0');
                $(".about_video").css('opacity', '0');
                $(".ingradients_list").css('opacity', '0');
                //gsap效果
                this.clip_gsap(".about",".about_gsap_img" );
                this.clip_gsap(".awards_title",".awards_title img" );
                this.clip_gsap(".brand",".brand_gsap_img" );
                this.clip_gsap(".ingradients",".ingradients_gsap_img" );
                gsap
                .to([".banner_text1 p", ".salad img",".salad p",".banner_text1 div",".salad div"], {
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
            gsap
                .to([".banner_text2 img",".banner_text2 h1"], {
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
                        trigger: ".brand",
                        start: "top top",
                        end: "+=700",
                        scrub: 3
                    }
                })
                .fromTo(".client_img", {
                    clipPath: "inset(0rem 0rem 40rem 0rem)"
                }, {
                    duration: 2,
                    ease: "sine.inOut",
                    clipPath: "inset(0rem 0rem 0rem 0rem)"
                }),
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: ".ingradients",
                        start: "-=500",
                        end: "+=100",
                        scrub: 3
                    }
                })
                .fromTo(".ingradients_text", {
                    opacity:0,
                    y:100,
                }, {
                    duration: 2,
                    ease: "sine.inOut",
                    opacity:1,
                    y:0,
                }),
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: ".awards",
                        start: "-=500",
                        end: "-=500",
                        scrub: 5
                    }
                })
                .to("#award_img1", {
                    keyframes: [
                        {
                            duration: 0,
                            x:100,
                            opacity:0,
                        }, {
                            duration: 2.5,
                            opacity:1,
                            x:0,
                            ease: "sine.inOut"
                        }
                    ]
                })
                .to("#award_img2", {
                    keyframes: [
                        {
                            duration: 0,
                            x:100,
                            opacity:0,
                        }, {
                            duration: 2.5,
                            opacity:1,
                            x:0,
                            ease: "sine.inOut"
                        }
                    ]
                })
                .to("#award_img3", {
                    keyframes: [
                        {
                            duration: 0,
                            x:100,
                            opacity:0,
                        }, {
                            duration: 2.5,
                            opacity:1,
                            x:0,
                            ease: "sine.inOut"
                        }
                    ]
                })
                .to("#award_img4", {
                    keyframes: [
                        {
                            duration: 0,
                            x:100,
                            opacity:0,
                        }, {
                            duration: 2.5,
                            opacity:1,
                            x:0,
                            ease: "sine.inOut"
                        }
                    ]
                })
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: ".about_video",
                        start: "-=500",
                        end: "-=500",
                        scrub: 3
                    }
                })
                .to(".about_video", {
                    keyframes: [
                        {
                            duration: 0,
                            opacity:0,
                        }, {
                            duration: 2,
                            opacity:1,
                            ease: "sine.inOut"
                        }
                    ]
                })
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: ".ceo_right",
                        start: "-=500",
                        end: "-=500",
                        scrub: 3
                    }
                })
                .to(".ceo_right p", {
                    keyframes: [
                        {
                            opacity:0,
                            x:60,
                        }, {
                            duration: 2.5,
                            opacity:1,
                            x:0,
                            ease: "sine.inOut"
                        }
                    ]
                })
                .to(".ceo_right p span", {
                    keyframes: [
                        {
                            color:"white",
                        }, {
                            duration: 2,
                            color:"#FFBC58",
                            ease: "sine.inOut"
                        }
                    ]
                })
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: ".ceo_left",
                        start: "-=500",
                        end: "-=500",
                        scrub: 3
                    }
                })
                .to(".ceo_left img", {
                    keyframes: [
                        {
                            opacity:0,
                            y:60,
                        }, {
                            duration: 1.5,
                            opacity:1,
                            y:0,
                            ease: "sine.inOut"
                        }
                    ]
                })
                .to([".ceo_left h4", ".ceo_left p"], {
                    keyframes: [
                        {
                            opacity:0,
                            y:60,
                        }, {
                            duration: 1,
                            opacity:1,
                            y:0,
                            ease: "sine.inOut"
                        }
                    ]
                })
            $(".ingradients_list").each(function(){
                gsap
                .timeline({
                    scrollTrigger: {
                        trigger: this,
                        start: "-=500",
                        end: "-=500",
                        scrub: 3
                    }
                })
                .to(this, {
                    keyframes: [
                        {
                            duration: 0,
                            opacity:0,
                        }, {
                            duration: 2,
                            opacity:1,
                            ease: "sine.inOut"
                        }
                    ]
                })
            })
    
            }
        },
    }
})





