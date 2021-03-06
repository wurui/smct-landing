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
    var getFileData = function (file, fn) {
        if(!file){
            return fn(null)
        }
        var reader = new FileReader()
        reader.onload = function (e) {
            fn(e.target.result, file);

        }
        reader.readAsDataURL(file);
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
                $text1 = $('.J_text1', $mod), $text2 = $('.J_text2', $mod),
                setLogo=function(no){
                    $logoContainer.css('animationPlayState', "paused");
                    var subtitle='已选车标'
                    if(/^\d+$/.test(no)){
                        var imgSrc=Carlogo.fullpath(no);
                    }else{
                        subtitle='已选图标';
                        imgSrc=no;
                        no='base64'
                    }

                    $topmask.removeClass('bgfadeout').html('<img src="' + imgSrc + '"/><h3 class="goldtitle">'+subtitle+'</h3>').addClass('fadein');


                    setTimeout(function () {
                        $coolthings.hide().removeClass('fadein');

                        $editor.show().removeClass('fadeout');
                        $central.html(imgSrc ? '<img src="' + imgSrc + '"/>' : '').attr('data-no', no);
                        $topmask.removeClass('fadein').addClass('bgfadeout')


                    }, 1500);
                };

            $logoContainer = $('.J_logo', $mod).on('tap', function (e) {
                var tar = e.target;
                if (tar.tagName.toLowerCase() == 'img') {
                    var no = tar.getAttribute('data-no'),
                        name = tar.getAttribute('data-name');

                    //var cloneNode = $(tar).clone().removeAttr('style');

                    setLogo(no);

                }
            });


            var $timer = $('.J_Timer', $mod),
                $loading = $('.J_loading', $mod),
                $pointer = $('.J_pointer', $mod),
                refreshTime=function () {console.log('ts',Date.now() - start_ts)
                    var ts=Date.now() - start_ts;
                    $timer.html((ts / 1000).toFixed(1));
                    return ts;
                },
                start_ts = Date.now(),
                TO, timer = setInterval(refreshTime, 100),
                clearResult=function(){
                    $loading.addClass('fadeout');
                    setTimeout(function () {
                        $loading.remove();
                    }, 500)
                },
                showHongbao=function(){
                    if(localStorage.getItem('hongbao')){
                        return false
                    }
                    var ts=refreshTime(),
                        num= 1,
                        msg='';

                    switch (true){
                        case ts<100:
                            num=15.88;
                            msg='你就是传说中的极速高手'
                            break
                        case ts<200:
                            num=12.88;
                            msg='我会静静地欣赏你的尾灯'
                            break
                        case ts<500:
                            num=12.58;
                            msg='好吧,我吃土'
                            break
                        case ts<1000:
                            num=12.28;
                            msg='不错哟,速度与基情下次找你了'
                            break
                        case ts<2000:
                            num=12.28;
                            msg='很少人能让你吃土'
                            break
                        case ts<5000:
                            num=9.88;
                            msg='没事,尾灯也很漂亮'
                            break
                        case ts>=5000:
                            msg='龟速一点,安全第一吧'
                            num=9.98;
                            break
                    }
                    $loading.addClass('load-end')
                    localStorage.setItem('hongbao','极速车手#'+num);
                    $('.J_Result',$mod).html(msg+'<br/><big>获得'+num+'元极速车手红包</big><br/><small>该红包用于购买扫码车贴</small>')
                    return true

                };
            Carlogo.preload(0, function () {

                clearInterval(timer);
                render();

                setTimeout(clearResult, showHongbao()?3000:50)

            }, function (data) {
                var deg = -240 + data.loaded / data.total * 8 * 30;
                $pointer.css({
                    'transform': 'rotate(' + deg + 'deg)',
                    transitionDuration: '.5s'
                });

                if (TO)clearTimeout(TO)
                TO = setTimeout(function () {
                    $pointer.css({
                        'transform': 'rotate(-240deg)',
                        transitionDuration: '5s'
                    });
                }, 500)


                //$('.J_count',$loading).html(data.loaded)
                //$('.J_total',$loading).html(data.total)
            })


            var btnPrev = $('.J_reset[data-role="prev"]')[0], btnNext = $('.J_reset[data-role="next"]')[0],
                checkBtn = function () {

                    btnPrev && (btnPrev.disabled = pageIndex == 0);
                    btnNext && (btnNext.disabled = pageIndex == totalPage - 1);

                };
            var lastTapTS = 0;
            $mod.on('tap', '.J_reset', function (e) {
                var tar = e.target;
                var role = tar.getAttribute('data-role')
                //console.log(tar.disabled)
                if (tar.disabled) {
                    return false;
                }
                if (Date.now() - lastTapTS < 200) {
                    return false
                }
                lastTapTS = Date.now();

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

            $mod.on('submit', function (e) {
                var f = e.target;

                var img_no=$central.attr('data-no');
                var settings = {
                    tpl: 1,
                    bgcolor: 1,
                    // color1:1
                    text1: $text1.val(),
                    text2: $text2.val(),
                    carlogo: img_no
                };
                if(img_no=='base64'){
                    
                    settings.base64=$central.children('img')[0].src
                }


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
            $('.J_uploadfile',$mod).on('change',function(e){
                getFileData(this.files[0],function(base64){
                    //console.log(base64);
                    base64 && setLogo(base64)
                });

            })


        }
    }
})


/**
 * Created by wurui on 01/04/2017.
 */



