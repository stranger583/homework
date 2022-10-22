$(document).ready(function(){
	$('#nav').click(function(){
		$(this).toggleClass('open');
	});
});







new Vue({
    el:"#app",
    data:{
        lists:[
            {
                img:"./img/ing1.png",
                text:"UX DESIGN"
            },
            {
                img:"./img/ing2.png",
                text:"UI DESIGN"
            },
            {
                img:"./img/ing3.png",
                text:"WEBSITE</br>DEVELOPMENT"
            },
            {
                img:"./img/ing4.png",
                text:"MOBILE APP</br>DEVELOPMENT"
            },
            {
                img:"./img/ing5.png",
                text:"ECOMMERCE"
            },
            {
                img:"./img/ing6.png",
                text:"CUSTOMER LOYALTY"
            },
            {
                img:"./img/ing7.png",
                text:"DIGITAL</br>TRANSFORMATION"
            },
            {
                img:"./img/ing8.png",
                text:"DIGITAL MARKETING"
            },
            {
                img:"./img/ing9.png",
                text:"BRANDING"
            },
        ]
    },
    mounted(){
        
    },
    methods:{

            
        
    }
})