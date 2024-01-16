// $(document).ready(function(){

//     window.addEventListener("mousemove",function(e){
//         document.querySelector(".pageX").innerHTML=e.clientX;
//         document.querySelector(".pageY").innerHTML=e.clientY;
//     });

//     window.addEventListener("mousemove",function(e){
//         document.querySelector(".cursor").style.left=e.clientX-10 +"px";
//         document.querySelector(".cursor").style.top=e.clientY-10 +"px";

//     });
// });

$(document).ready(function () {
    $(window).resize(function () {
        winSize();
    });
    winSize();
    function winSize() {
        winW = $(window).outerWidth();
        // console.log(winW)
        // picImg.outerWidth()
        const picWrap = document.querySelector('.pic_wrap');
        const picImg = picWrap.querySelector('.pic_img');
        const picInner = picImg.querySelector('.pic_inner');
        const pic = picInner.querySelectorAll('.pic');
        const picBtn = picWrap.querySelector('.pic_btn');
        const BtnPrev = picBtn.querySelector('.prev');
        const BtnNext = picBtn.querySelector('.next');

        let picCount = pic.length;
        // console.log(sliderCount)//5개
        let picWidth = document.querySelector('.pic').offsetWidth;
        // console.log(sliderWidth)//800px
        let count = 0;
        picInner.style.transform = "translateX(0px)";
        function gotoSlider(num) {
            picInner.style.transform = "translateX(" + -picWidth * num + "px)";
            picInner.style.transition = " all 0.5s";
            count = num;
        }
        //transform: translateX(-800px);
        //transition: all 0.5s;

        function moveNext() {
            let nextIndex = (count + 1) % picCount; //1 0 2 나머지
            gotoSlider(nextIndex);
        }

        function movePrev() {
            let prevIndex = (count - 1) % picCount; //1 0 2 나머지
            if (count == 0) {
                prevIndex = picCount - 1;
            }
            gotoSlider(prevIndex);
        }

        BtnNext.addEventListener('click', moveNext);
        BtnPrev.addEventListener('click', movePrev);
    }

    //버튼 클릭으로 배경색, 텍스트 컬러, 사진 바꾸기
    const circle2 = document.getElementById("circle2");
    const arrow = document.getElementById("arrow");
    const desc = document.getElementById("desc");
    const con3_h2 = document.getElementById("con3_h2");
    const fig1 = document.getElementById("fig1");
    const fig2 = document.getElementById("fig2");
    const fig3 = document.getElementById("fig3");
    const txt_long = document.getElementById("txt_long");
    const strong = document.getElementById("strong");
    const p = document.getElementById("p");

    span.addEventListener("click", function () {
        console.log(circle2.classList.contains("on"))
        if (circle2.classList.contains("on")) {
            // box1.style.backgroundImage = "url(../images/bgbg2.png)"
            // arrow.src = "../images/arrow3.png"
            document.body.style.backgroundColor = "#222";
            desc.style.color = "white"
            con3_h2.style.color = "white"
            strong.style.color = "white"
            fig1.style.color = "white"
            fig2.style.color = "white"
            fig3.style.color = "white"
            txt_long.style.borderTop = "3px solid #fff"
            txt_long.style.borderBottom = "3px solid #fff"
            p.style.color = "white"
        }
        else {
            // box1.style.backgroundImage = "url(../images/bgbg.png)"
            // arrow.src = "../images/arrow2.png"
            document.body.style.backgroundColor = "#fff";
            desc.style.color = "black"
            con3_h2.style.color = "black"
            strong.style.color = "black"
            fig1.style.color = "black"
            fig2.style.color = "black"
            fig3.style.color = "black"
            p.style.color = "#778eae"
            txt_long.style.borderTop = "3px solid #778eae"
            txt_long.style.borderBottom = "3px solid #778eae"
            p.style.color = "#778eae"
            h2_2.style.color = "black"
        }
    });
});