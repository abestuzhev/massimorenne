var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|Android)/i) != null;
var mdown = 'mousedown';
var mmove = 'mousemove';
var mup = 'mouseup';
if (isMobile) {
    mdown = 'touchstart';
    mmove = 'touchmove';
    mup = 'touchend';
}
var old_st = 0;
var st = $(window).scrollTop();
var par;

$(function () {

    $("#burger").on("click", function () {
        $('header').toggleClass("active");
    });

    $(".product-size").parent().css({"white-space": "nowrap"});

    $(".api_link.api_auth_restore_url").on("click", function () {
        $(".api-auth-restore").show();
        $(this).hide();
    })

    // $("#kombox-filter label").on("click", function (e) {
    //     $("#set_filter").css({"display": "block", "top": $(this).offset().top - $("#kombox-filter").offset().top});
    //     par = $(this);
    //     setInterval(function () {
    //         $("#set_filter").css({"display": "block", "top": par.offset().top - $("#kombox-filter").offset().top});
    //     },100)
    // });

    $(".lvl1[data-id=type_shoes-30]").find(".lvl2").on("click", function () {
        var par = $(".lvl1[data-id=type_shoes-30]");
        par.find("input").prop('checked', false);
        par.find(".kombox-checked").removeClass("kombox-checked");
        $(this).find("input").prop('checked', true);
        $(this).addClass("kombox-checked");
        $("#set_filter").click();
    });

    $(".auth-block #reg-btn").on("click", function () {
        $(".input-field").removeClass("error");
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if ($('input[name="FIELDS[LOGIN]"]').val() == "" || $('input[name="FIELDS[LOGIN]"]').val() == "Логин") {
            $("input[name='FIELDS[LOGIN]']").parent().addClass("error");
        }
        if (!pattern.test($("input[name='FIELDS[EMAIL]']").val())) {
            $("input[name='FIELDS[EMAIL]']").parent().addClass("error");
        }
        if ($("input[name='FIELDS[PASSWORD]']").val() == "" || $("input[name='FIELDS[PASSWORD]']").val() == "Пароль") {
            $("input[name='FIELDS[PASSWORD]']").parent().addClass("error");
        }
        if ($("input[name='FIELDS[CONFIRM_PASSWORD]']").val() == "" || $("input[name='FIELDS[CONFIRM_PASSWORD]']").val() == "Подтверждение пароля") {
            $("input[name='FIELDS[CONFIRM_PASSWORD]']").parent().addClass("error");
        }
        if ($(".error").length > 0) {
            return false;
        } else {
            // alert(111);
        }
    });
    // $("#feedback-submit").on("click", function () {
    //     $(".error").removeClass("error");
    //     var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    //     if ($('input#name-input').val() == "" || $('input#name-input').val() == "Имя"){
    //         $("input#name-input").parent().addClass("error");
    //     }
    //     if ($('input#company-input').val() == "" || $('input#company-input').val() == "Компания/Тема"){
    //         $("input#company-input").parent().addClass("error");
    //     }
    //     if (!pattern.test($("input#email-input").val())){
    //         $("input#email-input").parent().addClass("error");
    //     }
    //     if ($("textarea#mess-text").val() == "" || $("textarea#mess-text").val() == "Сообщение"){
    //         $("textarea#mess-text").parent().addClass("error");
    //     }
    //     if (!$("#form-consent").hasClass("active")){
    //         $("#form-consent").addClass("error");
    //     }
    //     if ($(".error").length > 0){
    //         return false;
    //     }else{
    //         alert(111);
    //     }
    // });

    $("#recomendation").parent().find("#search-popular").hide();

    if (window.location.href.indexOf("sex-zhenskie") > 0) {
        $("a[href='/catalog/filter/sex-zhenskie/']").addClass("active");
        $(".page-title").html($("a[href='/catalog/filter/sex-zhenskie/']").find("span").html());
    }
    if (window.location.href.indexOf("sale-da") > 0) {
        $("a[href='/catalog/filter/sale-da/']").addClass("active");
        //$(".page-title").html($("a[href='/catalog/filter/sex-zhenskie/']").find("span").html());
    }
    if (window.location.href.indexOf("sex-muzhskie") > 0) {
        $("a[href='/catalog/filter/sex-muzhskie/']").addClass("active");
        $(".page-title").html($("a[href='/catalog/filter/sex-muzhskie/']").find("span").html());
    }
    if (window.location.href.indexOf("sandali_muzhskie_1") > 0) {
        $("a[href='/catalog/sandali_muzhskie_1/']").addClass("active");
        $(".page-title").html($("a[href='/catalog/sandali_muzhskie_1/']").find("span").html());
    }
    $("a.kombox-del-filter").on("click", function () {
        window.location.href = $("#header-menu a.active").attr("href");
        return false;
    })

    $(window).resize(function () {
        if ($("#filter").length > 0) {
            $(".container").css({"min-height": $("#filter").height() + 80});
        }
    });
    $(window).resize();
    $("#form-consent").on("click", function () {
        $(this).toggleClass("active").removeClass("error");
    });

    $("#auth-form-consent").on("click", function () {
        $(this).toggleClass("active");
        $(this).removeClass("error");
        $('.api-accept-label input[name="PRIVACY_ACCEPTED"]').toggle();
    });
    var allw = 0;
    var allt = 0;
    $(".profile--popup").on("click", function () {
        allw = $('#all-content').width();
        allt = st;
        $("#auth-form").show();
        $("#all-content").addClass("fixed");
        $("#all-content").css({"position": "fixed", "width": allw, "top": -allt});
        st = $(window).scrollTop();
        if (st >= 112) {
            if (!$("#header-menu").hasClass("fixed")) {
                $("#header-menu").stop().animate({"width": "100%", "left": 0, "margin-left": 0}, 300);
            }
            $("#header-menu").addClass("fixed");
            $("#header-menu").css({"top": 0});
        } else {
            $("#header-menu").css({"top": 112 - st});
            if ($("#header-menu").hasClass("fixed")) {
                $("#header-menu").stop().animate({"width": "1240", "left": "50%", "margin-left": -620}, 300);
            }
            $("#header-menu").removeClass("fixed");
        }
        return false;
    });
    $("#close-auth-modal").on("click", function () {
        $("#auth-form").hide();
        $("#all-content").removeClass("fixed");
        $("#all-content").css({"position": "relative", "width": "100%", "top": 0});
        st = $(window).scrollTop();
        if (st >= 112) {
            if (!$("#header-menu").hasClass("fixed")) {
                $("#header-menu").stop().animate({"width": "100%", "left": 0, "margin-left": 0}, 300);
            }
            $("#header-menu").addClass("fixed");
            $("#header-menu").css({"top": 0});
        } else {
            $("#header-menu").css({"top": 112 - st});
            if ($("#header-menu").hasClass("fixed")) {
                $("#header-menu").stop().animate({"width": "1240", "left": "50%", "margin-left": -620}, 300);
            }
            $("#header-menu").removeClass("fixed");
        }
        $("body,html").stop().animate({"scrollTop": allt}, 0);
    });


    if ($("#shops-map").length > 0) {
        setTimeout(function () {
            initShopsMap();
        }, 500);
    }
    if ($("#map").length > 0) {
        setTimeout(function () {
            initMap();
        }, 500);
    }

    $(".product-color").on("click", function () {
        $(".product-color").removeClass("active");
        $(this).addClass("active");
    });

    $(".order-type").on("click", function () {
        $(this).parent().find(".order-type").removeClass("active");
        $(this).addClass("active");
        if ($(this).parents(".delivery").length > 0) {
            if ($(this).index() == 0) {
                $("#order-type1").show();
                $("#order-type2").hide();
                $("#order-footer").show();
            } else {
                $("#order-type1").hide();
                $("#order-type2").show();
                $("#order-footer").hide();
                initShopsMap();
            }
        }
    });

    $(document).on("click", ".product-item-to-cart", function () {
        $(this).toggleClass("active");
    });
    $(".input-field .select-title").on("click", function () {
        $(this).parents(".input-field").toggleClass("focus");
    });
    $(".input-field .select-item").on("click", function () {
        $(this).parents(".input-field").toggleClass("focus");
        $(this).parents(".input-field").find(".select-title").html($(this).html());
    });
    $(".filter-block-title").on("click", function () {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(this).parents(".filter-block").find(".filter-settings").slideUp(400);
        } else {
            $(this).parents(".filter-block").find(".filter-settings").slideDown(400);
        }
    });
    $(".filter-collection").on("click", function () {
        $(this).parents(".filter-collections").find(".filter-collection").removeClass("active");
        $(this).toggleClass("active");
    });
    $(".filter-color").on("click", function () {
        $(this).toggleClass("active");
    });

    $(window).scroll(function () {
        if (document.body.clientWidth > 480) {
            st = $(window).scrollTop();
            if (!$("#all-content").hasClass("fixed")) {
                if (st >= 112) {
                    if (!$("#header-menu").hasClass("fixed")) {
                        $("#header-menu").stop().animate({"width": "100%", "left": 0, "margin-left": 0}, 300);
                    }
                    $("#header-menu").addClass("fixed");
                    $("#header-menu").css({"top": 0});
                } else {
                    $("#header-menu").css({"top": 112 - st});
                    if ($("#header-menu").hasClass("fixed")) {
                        $("#header-menu").stop().animate({"width": "1240", "left": "50%", "margin-left": -620}, 300);
                    }
                    $("#header-menu").removeClass("fixed");
                }
            }
        }
    });
    $(window).on("mousewheel", function (objEvent, intDelta) {
        if (document.body.clientWidth > 480) {
            st = $(window).scrollTop();
            if (!$("#all-content").hasClass("fixed")) {
                if (st >= 112) {
                    if (!$("#header-menu").hasClass("fixed")) {
                        $("#header-menu").stop().animate({"width": "100%", "left": 0, "margin-left": 0}, 300);
                    }
                    $("#header-menu").addClass("fixed");
                    $("#header-menu").css({"top": 0});
                } else {
                    $("#header-menu").css({"top": 112 - st});
                    if ($("#header-menu").hasClass("fixed")) {
                        $("#header-menu").stop().animate({"width": "1240", "left": "50%", "margin-left": -620}, 300);
                    }
                    $("#header-menu").removeClass("fixed");
                }
            }
        }
    });
    st = $(window).scrollTop();
    if (st >= 112) {
        if (!$("#header-menu").hasClass("fixed")) {
            $("#header-menu").stop().animate({"width": "100%", "left": 0, "margin-left": 0}, 300);
        }
        $("#header-menu").addClass("fixed");
        $("#header-menu").css({"top": 0});
    } else {
        $("#header-menu").css({"top": 112 - st});
        if ($("#header-menu").hasClass("fixed")) {
            $("#header-menu").stop().animate({"width": "1240", "left": "50%", "margin-left": -620}, 300);
        }
        $("#header-menu").removeClass("fixed");
    }


    var slideNow = 1;
    var slideCount = 8;
    var translateWidth = 0;
    var indslideNow = 1;
    var indslideCount = 2;
    var indtranslateWidth = 0;

    $(document).on('click', '.index-slider-next', function () {
        indexPrevSlide();
    });

    $(document).on('click', '.index-slider-previous', function () {
        indexNextSlide();
    });

    $(document).on('click', '.hit-slider-next', function () {
        nextSlide();
    });

    $(document).on('click', '.hit-slider-previous', function () {
        prevSlide();
    });

    function nextSlide() {
        $('.hit-slider-previous').addClass("active");
        if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount - 3) {
        } else {
            translateWidth = -($('.hit-slide').width() + 174) * (slideNow);
            $('.hit-slider-next').addClass("active");
            $('.hit-slide').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow++;
            if (slideNow == slideCount - 2) {
                $('.hit-slider-next').removeClass("active");
            }
        }
    }

    function prevSlide() {
        $('.hit-slider-next').addClass("active");
        if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        } else {
            $('.hit-slider-previous').addClass("active");
            translateWidth = -($('.hit-slide').width() + 174) * (slideNow - 2);
            $('.hit-slide').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow--;
            if (slideNow == 1) {
                $('.hit-slider-previous').removeClass("active");
            }
        }
    };

    function indexPrevSlide() {
        if (indslideNow == 1 || indslideNow <= 0 || indslideNow > indslideCount) {
            indtranslateWidth = -$('.index-slide-item').width() * (indslideCount - 1);
            $('.index-slider-container').css({
                'transform': 'translate(' + indtranslateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + indtranslateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + indtranslateWidth + 'px, 0)',
            });
            indslideNow = indslideCount;
        } else {
            indtranslateWidth = -$('.index-slide-item').width() * (indslideNow - 2);
            $('.index-slider-container').css({
                'transform': 'translate(' + indtranslateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + indtranslateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + indtranslateWidth + 'px, 0)',
            });
            indslideNow--;
        }
        $('.index-slider-counter span').text(indslideNow);
    };

    function indexNextSlide() {
        if (indslideNow == indslideCount || indslideNow <= 0 || indslideNow > indslideCount) {
            $('.index-slider-container').css('transform', 'translate(0, 0)');
            indslideNow = 1;
        } else {
            indtranslateWidth = -$('.index-slide-item').width() * (indslideNow);
            $('.index-slider-container').css({
                'transform': 'translate(' + indtranslateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + indtranslateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + indtranslateWidth + 'px, 0)',
            });
            indslideNow++;
        }
        $('.index-slider-counter span').eq(0).text(indslideNow);
    }


    $('.product-preview').on("click", function () {
        $(".product-preview").removeClass('active');
        $(this).addClass('active');
        var img = $(this).css('background-image');
        var img_arr = img.split('"');
        $('.easyzoom img').attr('src', img_arr[1]);
    });
    $('.easyzoom').on("mouseover", function () {
        $('.easyzoom img').css({"transform": "scale(2)"});
    });
    $('.easyzoom').on("mouseout", function () {
        $('.easyzoom img').css({"transform": "scale(1)", "left": 0, "top": 0});
    });
    $('.easyzoom').on("mousemove", function (e) {
        var xx = e.pageX - $('.easyzoom').offset().left;
        var yy = e.pageY - $('.easyzoom').offset().top;
        // console.log(xx);
        $('.easyzoom img').css({"left": -xx + $('.easyzoom').width() / 2, "top": -yy + $('.easyzoom').height() / 2});
    });
    $('.easyzoom a').on("click", function (e) {
        return false;
    });


});


$(document).ready(function () {
    $(document).on("click", ".quantity-minus", function () {
        if ($(".quantity input").eq($(this).parents(".cart-item").index() - 2).val() > 1) {
            $(".quantity input").eq($(this).parents(".cart-item").index() - 2).val(($(".quantity input").eq($(this).parents(".cart-item").index() - 2).val() - 1));
        }
    });
    $(document).on("click", ".quantity-plus", function () {
        $(".quantity input").eq($(this).parents(".cart-item").index() - 2).val(($(".quantity input").eq($(this).parents(".cart-item").index() - 2).val() * 1 + 1));
    });
    $(".cart-td.remove img").on("click", function () {
        $(this).parents(".cart-item").remove();
    });

    $(".box-text").hide();
    $(".box-title span").click(function () {
        if ($('.box').hasClass('active')) {
            $('.box').removeClass('active');
        } else {
            $('.box').addClass('active');
        }
        $(this).parent().next().slideToggle();
    });

    $(".strong-link").on("click", function () {
        if ($(this).attr("href") == "") {
            return false;
        }
    })
});

function iniYandexMap() {

}

function initShopsMap() {

    var image = '/index/img/shop_marker.png';

    ymaps.ready(function () {
        var geoObjects = new Array();
        var yaMap = new ymaps.Map(document.getElementById('shops-map-yandex'), {
            center: [59.927529, 30.328686],
            zoom: 10,
            scrollZoom: false,
            controls: ['zoomControl']
        });
        yaMap.behaviors.disable('scrollZoom');
        // let placemark1 = new ymaps.Placemark([59.98770, 30.20312], {}, {
        //     iconLayout: 'default#imageWithContent',
        //     iconImageHref: image,
        //     iconImageSize: [48, 48],
        //     iconImageOffset: [-24, -48],
        //     iconContentOffset: [15, 15],
        // });
        // placemark1.events.add('click', function () {
        //     choiseAddress(jQuery(".shop-region").eq(0).find('.shop-items').eq(1).find('.shop-item').eq(0));
        //     jQuery("#shops-cities a").eq(0).click();
        // });
        // yaMap.geoObjects.add(placemark1);

        let placemark2 = new ymaps.Placemark([59.850120, 30.26837], {}, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: image,
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -48],
            iconContentOffset: [15, 15],
        });
        placemark2.events.add('click', function () {
            choiseAddress(jQuery(".shop-region").eq(0).find('.shop-items').eq(1).find('.shop-item').eq(0));
            jQuery("#shops-cities a").eq(0).click();
        });
        yaMap.geoObjects.add(placemark2);

        let placemark3 = new ymaps.Placemark([59.92822, 30.35993], {}, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: image,
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -48],
            iconContentOffset: [15, 15],
        });
        placemark3.events.add('click', function () {
            choiseAddress(jQuery(".shop-region").eq(0).find('.shop-items').eq(0).find('.shop-item').eq(1));
            jQuery("#shops-cities a").eq(0).click();
        });
        yaMap.geoObjects.add(placemark3);

        let placemark4 = new ymaps.Placemark([60.03351, 30.36795], {}, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: image,
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -48],
            iconContentOffset: [15, 15],
        });
        placemark4.events.add('click', function () {
            choiseAddress(jQuery(".shop-region").eq(0).find('.shop-items').eq(0).find('.shop-item').eq(2));
            jQuery("#shops-cities a").eq(0).click();
        });
        yaMap.geoObjects.add(placemark4);

        let placemark5 = new ymaps.Placemark([60.00559, 30.30035], {}, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: image,
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -48],
            iconContentOffset: [15, 15],
        });
        placemark5.events.add('click', function () {
            choiseAddress(jQuery(".shop-region").eq(0).find('.shop-items').eq(1).find('.shop-item').eq(1));
            jQuery("#shops-cities a").eq(0).click();
        });
        yaMap.geoObjects.add(placemark5);

        let placemark6 = new ymaps.Placemark([59.91271, 30.44732], {}, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: image,
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -48],
            iconContentOffset: [15, 15],
        });
        placemark6.events.add('click', function () {
            choiseAddress(jQuery(".shop-region").eq(0).find('.shop-items').eq(2).find('.shop-item').eq(0));
            jQuery("#shops-cities a").eq(0).click();
        });
        yaMap.geoObjects.add(placemark6);

        let placemark7 = new ymaps.Placemark([59.987719, 30.354026], {}, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: image,
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -48],
            iconContentOffset: [15, 15],
        });
        placemark7.events.add('click', function () {
            choiseAddress(jQuery(".shop-region").eq(0).find('.shop-items').eq(2).find('.shop-item').eq(1));
            jQuery("#shops-cities a").eq(0).click();
        });
        yaMap.geoObjects.add(placemark7);

        let placemark8 = new ymaps.Placemark([59.376499, 28.607795], {}, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: image,
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -48],
            iconContentOffset: [15, 15],
        });
        placemark8.events.add('click', function () {
            choiseAddress(jQuery(".shop-region").eq(4).find('.shop-items').eq(0).find('.shop-item').eq(0));
            jQuery("#shops-cities a").eq(4).click();
        });
        yaMap.geoObjects.add(placemark8);

        // let placemark9 = new ymaps.Placemark([59.819473, 30.316975], {}, {
        //     iconLayout: 'default#imageWithContent',
        //     iconImageHref: image,
        //     iconImageSize: [48, 48],
        //     iconImageOffset: [-24, -48],
        //     iconContentOffset: [15, 15],
        // });
        // placemark9.events.add('click', function () {
        //     choiseAddress(jQuery(".shop-region").eq(0).find('.shop-items').eq(1).find('.shop-item').eq(0));
        //     //choiseAddress(jQuery(".shop-region").eq(0).find('.shop-items').eq(2).find('.shop-item').eq(2));
        //     jQuery("#shops-cities a").eq(0).click();
        // });
        // yaMap.geoObjects.add(placemark9);

        let placemark10 = new ymaps.Placemark([59.905979, 29.077909], {}, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: image,
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -48],
            iconContentOffset: [15, 15],
        });
        placemark10.events.add('click', function () {
            choiseAddress(jQuery(".shop-region").eq(5).find('.shop-items').eq(0).find('.shop-item').eq(0));
            jQuery("#shops-cities a").eq(5).click();
        });
        yaMap.geoObjects.add(placemark10);

        let placemark11 = new ymaps.Placemark([59.793220, 30.331260], {}, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: image,
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -48],
            iconContentOffset: [15, 15],
        });
        placemark11.events.add('click', function () {
            choiseAddress(jQuery(".shop-region").eq(0).find('.shop-items').eq(0).find('.shop-item').eq(0));
            jQuery("#shops-cities a").eq(0).click();
        });
        yaMap.geoObjects.add(placemark11);

        let placemark12 = new ymaps.Placemark([60.940654, 76.547073], {}, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: image,
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -48],
            iconContentOffset: [15, 15],
        });
        placemark12.events.add('click', function () {
            choiseAddress(jQuery(".shop-region").eq(3).find('.shop-items').eq(0).find('.shop-item').eq(0));
            jQuery("#shops-cities a").eq(3).click();
        });
        yaMap.geoObjects.add(placemark12);

        let placemark13 = new ymaps.Placemark([55.823452, 37.495805], {}, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: image,
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -48],
            iconContentOffset: [15, 15],
        });
        placemark13.events.add('click', function () {
            choiseAddress(jQuery(".shop-region").eq(1).find('.shop-items').eq(0).find('.shop-item').eq(0));
            jQuery("#shops-cities a").eq(1).click();
        });
        yaMap.geoObjects.add(placemark13);

        let placemark14 = new ymaps.Placemark([59.202870, 39.813899], {}, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: image,
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -48],
            iconContentOffset: [15, 15],
        });
        placemark14.events.add('click', function () {
            choiseAddress(jQuery(".shop-region").eq(2).find('.shop-items').eq(0).find('.shop-item').eq(0));
            jQuery("#shops-cities a").eq(2).click();
        });
        yaMap.geoObjects.add(placemark14);
        function choiseAddress(link) {
            jQuery("html,body").stop().animate({"scrollTop": 200}, 500);
            jQuery('.shop-item').removeClass('select');
            jQuery(link).addClass('select');
        }


        jQuery("#shops-cities a").on("click", function () {
            jQuery("#shops-cities a").removeClass("active");
            jQuery(this).addClass("active");
            jQuery(".shop-region").hide();
            jQuery(".shop-region").eq(jQuery(this).index()).show();
            if (jQuery(this).index() == 0) {
                yaMap.setCenter([59.927529, 30.328686]);
            } else if (jQuery(this).index() == 1) {
                yaMap.setCenter([55.823452, 37.495805]);
            } else if (jQuery(this).index() == 2) {
                yaMap.setCenter([59.202870, 39.813899]);
            } else if (jQuery(this).index() == 3) {
                yaMap.setCenter([60.940654, 76.547073]);
            } else if (jQuery(this).index() == 4) {
                yaMap.setCenter([59.376499, 28.607795]);
            } else {
                yaMap.setCenter([59.905979, 29.077909]);
            }
            return false;
        });
    });


}

function initMap() {

    var styles = [
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#d3d3d3"
                }
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
                {
                    "color": "#808080"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#b3b3b3"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "weight": 1.8
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#d7d7d7"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ebebeb"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#a7a7a7"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#efefef"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#696969"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#737373"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#d6d6d6"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {},
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#dadada"
                }
            ]
        }
    ]
    var myLatLng = new google.maps.LatLng(
        59.927529, 30.328686
    );
    var markerLatLng = new google.maps.LatLng(
        59.925529, 30.316686
    );
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        scrollwheel: false,
        center: myLatLng,
        disableDefaultUI: true,
        zoomControl: true
    });

    var image = '/index/img/shop_marker.png';


    var marker = new google.maps.Marker({
        position: markerLatLng,
        map: map,
        clickable: true,
        icon: image
    });


    map.setOptions({styles: styles});

}
