$(document).ready(function () {
    const d = new Date();
    var h = d.getHours() * 30;
    var m = d.getMinutes() * 6;
    var s = d.getSeconds() * 6;
    var arrow_h = $(".move>div:nth-of-type(2)");
    var arrow_m = $(".move>div:nth-of-type(3)");
    var arrow_s = $(".move>div:nth-of-type(4)");
    $(arrow_h).css({
        'transform': `rotate(`+ h + `deg)`
    });
    $(arrow_m).css({
        'transform': `rotate(`+ m + `deg)`
    });
     $(arrow_s).css({
         'transform': `rotate(`+ s + `deg)`
     });
    // function se() {
    //     if (s%360===0){
    //             m++;
    //             $(arrow_m).css({
    //                 'transform': `rotate(`+ m + `deg)`
    //             });
    //             if(m%360===0){
    //                 h++;
    //                 $(arrow_h).css({
    //                     'transform': `rotate(`+ h + `deg)`
    //                 });
    //             }
    //     }
    //     s=s+2;
    //     $(arrow_s).css({
    //         'transform': `rotate(`+ s + `deg)`
    //     });
    // }
    function se() {
        if (s>=360){
                m++;
                $(arrow_m).css({
                    'transform': `rotate(`+ m + `deg)`
                });
                if(m>360){
                    h++;
                    $(arrow_h).css({
                        'transform': `rotate(`+ h + `deg)`
                    });
                    m= m - 360
                }
                s=s-360
        }
        s=s+2;
        $(arrow_s).css({
            'transform': `rotate(`+ s + `deg)`
        });

    }
    setInterval(se,900);
});