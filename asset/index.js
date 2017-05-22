define(['zepto', './carlogo'], function (undef, Carlogo) {
    /*
     var cars=[];
     $('ul.brand_ul').each(function(){
     $(this).children('li').each(function(){
     var img=$(this).children('a').children('img')[0],
     span=$(this).children('a').children('span');
     //console.log(img.src)
     var mt=img.src.match(/(\d+)\.\w+$/i);
     if(mt)
     cars.push({
     name:span.text(),
     no:mt[1]
     })
     })
     });*/




    var pageIndex = 0,
        $logoContainer;
    var render = function () {
        $logoContainer.html(Carlogo.render(pageIndex)).addClass('roll')
        var images = $logoContainer.children('img');
        var len = images.length;
        var deg = Math.floor(360 / len);
        for (var i = 0; i < images.length; i++) {
            images[i].style.transform = 'rotateY(' + deg * i + 'deg) translateZ(160px)'; //deg前面不要加空格
        }
    }
    return {
        init: function ($mod) {

            var $bg = $('.J_bg', $mod);
            var $editor = $('.J_editor', $mod);
            var $coolthings = $('.J_coolthings', $mod);
            var $central = $('.J_central', $mod).on('click', function () {
                    $logoContainer.css('animationPlayState', "running").show()
                    $editor.addClass('fadeout');
                    $bg.removeClass('fadeout')
                    $('img', $bg).remove();
                    $coolthings.show().addClass('fadein')
                    setTimeout(function () {
                        $editor.hide();
                    }, 1000)
                }),
                $text1 = $('.J_text1', $mod).on('click', function () {


                }),$text2=$('.J_text2',$mod);

            $logoContainer = $('.J_logo', $mod).on('click', function (e) {
                var tar = e.target;
                if (tar.tagName.toLowerCase() == 'img') {
                    var no = tar.getAttribute('data-no'),
                        name = tar.getAttribute('data-name');

                    $logoContainer.css('animationPlayState', "paused");
                    var cloneNode;
                    $bg.prepend(cloneNode = $(tar).clone().removeAttr('style')).addClass('fadein');
                    setTimeout(function () {
                        $editor.show().removeClass('fadeout');
                        $central.html(no ? '<img src="' + Carlogo.fullpath(no) + '"/>' : '').attr('data-no',no);
                        $bg.removeClass('fadein').addClass('fadeout')
                        $coolthings.addClass('fadeout')
                        $logoContainer.hide();
                        setTimeout(function () {
                            $coolthings.hide();
                        }, 300)
                    }, 1500)
                    //cloneNode.addClass('transition').css('transform','rotateY(0)');//.css('opacity',0).addClass('fasein')


                    //alert('你选择了:'+name)
                    //$logoContainer.addClass('fadeout')
                }
            });

            render()


            $mod.on('click', '.J_reset', function (e) {
                var role = e.target.getAttribute('data-role')

                switch (role) {
                    case 'next':
                        pageIndex++;
                        render()
                        break
                    case 'prev':
                        if (pageIndex > 0) {
                            pageIndex--;
                            render()
                        }
                        break
                }


            });

            $($mod).on('submit',function(e){
                var f= e.target;

                var settings = {
                    tpl: 1,
                    bgcolor: 1,
                    // color1:1
                    text1: $text1.val(),
                    text2:$text2.val(),
                    carlogo:$central.attr('data-no')
                };
                //console.log(settings)

                for(var k in settings){
                    var hid= f[k];
                    if(!hid){
                        var hid=document.createElement('input');
                        hid.type='hidden';
                        hid.name=k;

                        f.appendChild(hid)
                    }
                    hid.value=settings[k];
                }
                return false;



            });


        }
    }
})


/**
 * Created by wurui on 01/04/2017.
 */



