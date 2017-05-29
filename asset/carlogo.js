define(['./cars'], function (CarList) {
    var pageSize = 8;
    var carlogoPath = function (n) {
        return 'http://v.oxm1.cc/cars/' + n + '.png'
    };
    var preloadGroup = function (grp, cb,progress_cb) {
        var count = 0, len = grp.length,
            onImgload = function () {
                count++;//alert(this.tagName)

                var img = this;
                img.onload = img.onerror = null;

                progress_cb && progress_cb({total:len,loaded:count})

                if (count == len) {
                    cb && cb();
                }


            };
        for (var i = 0, n; n = grp[i]; i++) {
            var img = new Image();

            img.onload = img.onerror = onImgload;
            img.src = n;
            if (img.readyState == "complete" || img.complete) {

                img.onload && img.onload.call(img)
                img.onload = img.onerror = null;

            }
        }

    };


    return {
        totalPage: Math.ceil(CarList.length / pageSize),
        maxLoadedIndex: -1,
        preload: function (idex,fn,progress_cb) {
            var idex = idex || 0;

            if (idex > this.maxLoadedIndex) {
                this.maxLoadedIndex=idex;
                var cars = CarList.slice(idex * pageSize, (idex + 1) * pageSize);
                var i = 0,arr=[];
                while (i < cars.length) {
                    var car = cars[i++];
                    arr.push(carlogoPath(car.no))
                }
                preloadGroup(arr,fn,progress_cb);
            }
        },
        render: function (idex) {
            var idex = idex || 0,
                cars = CarList.slice(idex * pageSize, (idex + 1) * pageSize);
            var i = 0,
                html = '';
            while (i < cars.length) {
                var car = cars[i++];
                html += '<img data-no="' + car.no + '" class="'+(car.className||'')+'" data-name="' + car.name + '" src="' + carlogoPath(car.no) + '"/>'

            }
            var _this=this;
            setTimeout(function(){
                _this.preload(idex + 1)
            },1)

            return html;
        }

        ,
        fullpath: function (no) {
            return carlogoPath(no)
        },
        getallpath:function(){
            var arr=[];
            CarList.forEach(function(n){
                arr.push(carlogoPath(n.no));
            })
            return arr
        }
    }
})


/**
 * Created by wurui on 01/04/2017.
 */



