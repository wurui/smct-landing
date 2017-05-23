define(['./cars'], function (CarList) {
    // var CarList='大众,宝马,奔驰,奥迪,保时捷,兰博基尼,法拉利,福特,路虎,悍马,劳斯莱斯,凯迪拉克,丰田,玛莎拉蒂,英菲尼迪,本田,比亚迪,中国一汽,NISSAN,别克,马自达,雷克萨斯,宾利,沃尔沃,科尼塞克,雪铁龙,奇瑞,斯巴鲁,帝豪,捷豹,阿斯顿马丁,讴歌,长城,林肯,三菱,长安,迈巴赫,欧宝,Jeep,帕加尼,吉利,英伦,众泰,夏利,东风,标致,雪佛兰,克莱斯勒,奔腾,道奇,全球鹰,泰卡特,阿尔宾娜,特斯拉,西尔贝,特拉贝特,布加迪,华普,菲亚特,铃木,卡尔森,巴博斯,西亚特,荣威,雷诺,莲花,名爵,现代,斯柯达,鲁夫,瑞麒,威兹曼,阿尔法罗密欧,起亚,世爵,水星,上海汽车,海马,斯堪尼亚,野马,猎豹,宝腾,宾尼法利纳,阿林内拉,纳智捷,蓝旗亚,帕诺兹,霍顿,莫斯勒,北京汽车,迪亚托,江淮,金龙,达西亚,宝骏,比扎瑞尼,阿斯卡利,雷诺三星,绅宝,沃克斯豪尔,文图瑞,罗孚,摩根,日野,中兴,依维柯,中华,庞蒂亚克,阿巴斯,威麟,大宇,迈凯轮,特威尔,Elfin,法波德,双龙,土星,博通,金杯,神龙,陆风,五十铃,大通,天马,德.托马索,大发,力帆,江铃,奥兹莫比尔,普利茅斯,利兰,黄海,华泰,双环,乔西亚,美鹿,哈飞,皇冠,全顺,宝龙,赛豹,昌河,北汽汽车,跃进,开瑞,福田,北京轻型汽车,精灵,福迪,莫斯科人牌,威旺,吉奥,DS,五菱,Mini,启辰,边赤,光冈,Gumpert,Joss,休列兹,庆铃,波罗乃兹,海格,江南,拉达,拉贡达,塞恩,达夫,长丰,戈兹,英致,伊卡鲁斯,东南,小奇迹汽车,汇众,理念,尼奥普兰,新凯,大迪,中欧,太脱拉,塔塔,卡玛斯,兹尔,阿米卡尔,阿维托托尔,达奇拉,阿瑞尔,尤兹,帕拉戴,红旗,克尔维特,北汽制造,王子,达特桑,普茨迈斯特,川崎,切克,德拉哈耶,凯特汉姆,斯图兹,阿吉尔,霍希,阿德勒,阿斯奎斯,麦克,福登,纳西,马特拉,莎尔玛生,马科斯,奥拉德,雅马哈,帅成,中顺,布里斯托,奥斯汀,吉列塔,阿沙,利兰奥斯汀,奇基亚罗,蒂格尼,星客特,爱西,道奇 蝰蛇,永源,德拉格,舍科马,勇士,MAN,吉德姆,瓦特堡,泽德尔,罗切斯尼德,斯托拉,福特 美洲狮,欧美佳,之诺,巴姆,日产总统,通用 上将,罗维恩,阿尔维斯,宇宙,戴姆勒,西亚塔,卡威乐,雪佛兰卡玛洛,阿姆斯通赛德利,乔瑟,美亚,末广,科纳特,博格瓦德,豹,爱森纳奇,格拉斯,德底昂宝通,长安商用,盖特博德,徘徊者,旅行,腾势,莫里斯,美特伯提坦,斯托维尔,凯斯鲍尔,杰森,沃新恩,法必斯,图纳,达西,卡玛洛火鸟,斯太尔,托纳多,布罗克韦,斯坦古尼,波吉奥,潘哈德勒瓦索尔,比特尔,恒天,伊达格,拉兹,东急,奥兹莫比尔曙光,大宇客车,通用 凤凰,爱斯乐,特尔科,比格兰,麦思齐美特,福特雷鸟,伊索,法斯特,扎格托,法希维加,斯托瑞罗,阿罗,西斯帕罗苏扎,尼斯,阿特斯,韦兰特,近畿,耶尔奇,阿维茨,穆茨,索埃勒,西玛莎,摩来提,思齐来瑞,霍米尔,威莱特,罗森加特,尤尼克,毕加索,丰和,住友,依兹,依多尼斯,西马克,因特美卡尼卡,正德尔,普罗通,鹰牌,亚细亚,罗纳塔,伊诺森蒂,吉安尼尼,烈贵,欧姆,斗山,美加,福特君主,奥斯汀-希利,戴尔马特,达科斯,大宇伊斯帕罗,凯旋,罗奈恩底垂,小松,格哥摩,埃姆菲,比亚乔,航天圆通,捷克阿维亚,安奎拉,美尼尔,晓星,霍切奇斯,维格奈,贝利埃,恩苏,塔伯特,爱斯德拉,马瑞斯,村田,日产柴,西采塔,默克'.split(',');
    var pageSize = 8;
    var carlogoPath = function (n) {
        return '//www.shaomachetie.com/img/cars/' + n + '.png'
        //return '//www.shaomachetie.com/static/smct/img/carlogo/' + name + '.jpg';
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
                html += '<img data-no="' + car.no + '" data-name="' + car.name + '" src="' + carlogoPath(car.no) + '"/>'

            }
            this.preload(idex + 1)
            return html;
        }

        ,
        fullpath: function (no) {
            return carlogoPath(no)
        }
    }
})


/**
 * Created by wurui on 01/04/2017.
 */



