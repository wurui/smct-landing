define(['zepto', './carlogo'], function (undef, Carlogo) {

    var pageIndex = 0,
        totalPage = Carlogo.totalPage,
        $logoContainer;
    var render = function () {
        pageIndex = (totalPage + pageIndex) % totalPage;
        $logoContainer.html(Carlogo.render(pageIndex)).addClass('roll')
        var images = $logoContainer.children('img');
        var len = images.length;
        var deg = Math.floor(360 / len);
        for (var i = 0; i < images.length; i++) {
            images[i].style.transform = 'rotateY(' + deg * i + 'deg) translateZ(160px)'; //deg前面不要加空格
        }
    };
    return {
        init: function ($mod) {

            var $topmask = $('.J_topmask', $mod);
            var $editor = $('.J_editor', $mod);
            var $coolthings = $('.J_coolthings', $mod);
            var $central = $('.J_central', $mod).on('tap', function (e) {
                    if (e.target.tagName.toLowerCase() == 'img') {
                        $logoContainer.css('animationPlayState', "running");
                        $editor.addClass('fadeout');

                        $coolthings.show().addClass('fadein')

                    }
                }),
                $text1 = $('.J_text1', $mod).on('tap', function () {


                }), $text2 = $('.J_text2', $mod);

            $logoContainer = $('.J_logo', $mod).on('tap', function (e) {
                var tar = e.target;
                if (tar.tagName.toLowerCase() == 'img') {
                    var no = tar.getAttribute('data-no'),
                        name = tar.getAttribute('data-name');

                    $logoContainer.css('animationPlayState', "paused");


                    var cloneNode=$(tar).clone().removeAttr('style');
                    $topmask.empty().removeClass('fadeout').prepend(cloneNode).append('<h3 class="goldtitle">已选车标</h3>').addClass('fadein');

                    setTimeout(function () {
                        $editor.show().removeClass('fadeout');
                        $central.html(no ? '<img src="' + Carlogo.fullpath(no) + '"/>' : '').attr('data-no', no);
                        $topmask.removeClass('fadein').addClass('fadeout')

                        $coolthings.hide().removeClass('fadein');

                    }, 1500);
                }
            });


            var $timer = $('.J_Timer', $mod),
                $loading = $('.J_loading', $mod),
                $pointer = $('.J_pointer', $mod),
                start_ts = Date.now(),
                TO, timer = setInterval(function () {
                    $timer.html(((Date.now() - start_ts) / 1000).toFixed(1));
                }, 100)
            Carlogo.preload(0, function () {


                render();
                setTimeout(function () {
                    $loading.addClass('fadeout');
                    setTimeout(function(){
                        $loading.remove();
                    },500)

                }, 1000)
                clearInterval(timer);
            }, function (data) {
                var deg = -240 + data.loaded / data.total * 8 * 30;
                $pointer.removeClass('falling').css('transform', 'rotate(' + deg + 'deg)');
                if (TO)clearTimeout(TO)
                TO = setTimeout(function () {
                    $pointer.addClass('falling')
                }, 500)

                //$('.J_count',$loading).html(data.loaded)
                //$('.J_total',$loading).html(data.total)
            })


            var btnPrev = $('.J_reset[data-role="prev"]')[0], btnNext = $('.J_reset[data-role="next"]')[0],
                checkBtn = function () {

                    btnPrev && (btnPrev.disabled = pageIndex == 0);
                    btnNext && (btnNext.disabled = pageIndex == totalPage - 1);

                };
            $mod.on('tap', '.J_reset', function (e) {
                var tar = e.target;
                var role = tar.getAttribute('data-role')

                switch (role) {
                    case 'next':

                        pageIndex++;
                        checkBtn();

                        render()
                        break
                    case 'prev':

                        pageIndex--;
                        checkBtn();

                        render()

                        break
                }


            });

            $($mod).on('submit', function (e) {
                var f = e.target;

                var settings = {
                    tpl: 1,
                    bgcolor: 1,
                    // color1:1
                    text1: $text1.val(),
                    text2: $text2.val(),
                    carlogo: $central.attr('data-no')
                };
                //console.log(settings)

                for (var k in settings) {
                    var hid = f[k];
                    if (!hid) {
                        var hid = document.createElement('input');
                        hid.type = 'hidden';
                        hid.name = k;

                        f.appendChild(hid)
                    }
                    hid.value = settings[k];
                }
                return true;


            });


        }
    }
})


/**
 * Created by wurui on 01/04/2017.
 */



