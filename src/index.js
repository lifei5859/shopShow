var $ = require('jquery');
// var fullPage = require('./jquery.fullPage');
require('./jquery.fullPage');
require('./jquery.fullPage.css');
require('./index.css');

$('#dowebok').fullpage({
    sectionsColor: ['#fadd67', '#84a2d4', '#ef674d', '#ffeedd', '#d04759', '#84d9ed', '#8ac060'],
    verticalCentered: false,
    navigation: true,
    afterLoad: function (anchorLink, index) {
        $('.section').eq(index - 1).addClass('show');
        console.log(index);
    },
    onLeave: function (index, nextIndex, direction) {
        if (index > 1 && index < 6) {
            $('.section').eq(index - 1).addClass('cut');
        }
    },
    afterRender: function () {
        $('.continue').on('click', function () {
            $.fn.fullpage.moveSectionDown();
        });

        $('.imgs04 .car').on('transitionend', function () {
            $('.imgs04 .add').addClass('cut');
            $('.imgs04 .text').addClass('cut');
        });

        function move(e) {

            var x = $('.imgs08 .hand').width(),
                y = $('.imgs08 .hand').height(),
                cx = $('.imgs08 .content').offset().left,
                cy = $('.imgs08 .content').offset().top,
                nx = e.pageX - cx,
                ny = e.pageY - cy,
                endX = nx - x / 2,
                endY = ny+10;
            // console.log(nx, ny);
            $(this).find('.hand').css({
                top: endY,
                left: endX
            })
            e.preventDefault();
        }
        $('.imgs08').on('mousemove', move);
        $('.imgs08 .btn').on('mouseenter', function (e) {
            e.preventDefault();
            // $('.imgs08 ').off('mousemove');
            // $('.hand').css({
            //     left: 390,
            //     top: 50
            // })
            $(this).children('img').eq(0).css('display', 'none');
            $(this).children('img').eq(1).css('display', 'inline-block');
        });
        $('.imgs08 .btn').on('mouseleave', function (e) {
            e.preventDefault();
            $(this).children('img').eq(0).css('display', 'inline-block');
            $(this).children('img').eq(1).css('display', 'none');
            $('.imgs08').on('mousemove', move);
        });
        $('.again').on('click',function(){
            console.log(888);
            $('.cut,.show').removeClass('cut').removeClass('show');
            $.fn.fullpage.moveTo(1);
        })


    }
});


