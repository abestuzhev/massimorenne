$(document).ready(function () {
    $("#filter-btn").on("click", function () {
        $("#filter").addClass("active");
    });
    $("#close-filter").on("click", function () {
        $("#filter").removeClass("active");
    });


    $("#feedback-submit").on("click", function () {
        $("#contacts-feedback .error").removeClass("error");
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if ($("#name-input").val() == "" || $("#name-input").val() == "Имя" ){
            $("#name-input").parent().addClass("error");
        }
        if ($("#company-input").val() == "" || $("#company-input").val() == "Компания/Тема" ){
            $("#company-input").parent().addClass("error");
        }
        if (!pattern.test($("input#email-input").val())){
            $("#email-input").parent().addClass("error");
        }
        if ($("#mess-text").val() == "" || $("#mess-text").val() == "Сообщение" ){
            $("#mess-text").parent().addClass("error");
        }
        if (!$("#form-consent").hasClass("active")){
            $("#form-consent").addClass("error");
        }
        if ($("#contacts-feedback .error").length == 0){
            $.post("/emailsend/send.php", {
                name: $("#name-input").val(),
                email: $("#email-input").val(),
                company: $("#company-input").val(),
                message: $("#mess-text").val(),
            }).done(function (data) {
                console.log(data);
                $("#name-input").val("Имя");
                $("#company-input").val("Компания/Тема");
                $("#email-input").val("Email");
                $("#mess-text").val("Сообщение");
            });

        }

        return false;
    });

    //Добавление в избранное из списка товаров и рекомендуемых товаров
    $(document).on('click', '.product-item-to-like', function () {

        var $id = $(this).data("id");
        $.ajax({
            url: "/ajax/add2favorite.php",
            type: "POST",
            dataType: "json",
            data: {product_id: $id},
            success: function (basket_id) {
                $(this).toggleClass("active");
            },
        });
    });
    //Добавление в избранное из карточки товара
    $(document).on('click', '.product-to-like', function () {
        if (!$(this).hasClass("disable")){
            $(this).addClass("disable");
            var $id = $(".parent-price.active .product-new-price").data("id");
            $(this).html("Добавлено");

            $.ajax({
                url: "/ajax/add2favorite.php",
                type: "POST",
                dataType: "json",
                data: {product_id: $id},
                success: function (basket_id) {
                    $(this).toggleClass("active");
                },
            });
        }
    });
    //Добавление в корзину из карточки товара
    $(document).on('click', '.product-to-cart', function () {
        var $id = $(".parent-price.active").data("id");
        if ($(this).hasClass("disable")){
            return false;
        }
        if ($("#header-right .cart span").length == 0 ){
            $("#header-right .cart").append('<span class="cart_count">1</span>');
        }else{
            $("#header-right .cart span").html($("#header-right .cart span").html()*1+1);
        }
        $(this).html("<span class='product-to-cart__text'><span>Добавлено</span><span class='product-to-cart__subtext'>Перейти в корзину</span></span>");

        $.ajax({
            url: "/ajax/add2basket.php",
            type: "POST",
            dataType: "json",
            data: {product_id: $id},
            success: function (basket_id) {
                $(this).toggleClass("active");
            },
        });
    });
    //Аякс пагинация
    $(document).on('click', '#show-more', function (event) {
        event.preventDefault();
        var targetContainer = $('.product-items-block'),          //  Контейнер, в котором хранятся элементы
            url = $('#show-more').attr('data-url');    //  URL, из которого будем брать элементы

        if (url !== undefined) {
            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'html',
                success: function (data) {

                    //  Удаляем старую навигацию
                    $('#show-more').remove();

                    var elements = $(data).find('.product-item'),  //  Ищем элементы
                        pagination = $(data).find('#show-more');//  Ищем навигацию

                    targetContainer.append(elements);   //  Добавляем посты в конец контейнера
                    targetContainer.append(pagination); //  добавляем навигацию следом

                }
            })
        }
    });
    //Аякс фильтр
    //BX.ready(function(){
    //    BX.addCustomEvent("onKomboxFilterCatalogLoading", BX.delegate(function(data){
    //        var $data = $(data);
    //        var content = $data.find('.cat-items');
    //        var cur_content = $('.cat-items');
    //        console.log(content);
    //        console.log(data);
    //        console.log(cur_content);
    //        cur_content.after(content);
    //        cur_content.replaceWith(content);
    //    }, this));
    //});

    //----------------------------------------------------------------------
    //Смена цены при смене размера (старая версия)
    // $(".product-size").on("click", function(){
    //     $('.product-to-cart').removeClass("disable");
    //     if ($(this).parents(".filter-settings").length > 0){
    //         $(this).toggleClass("active");
    //     }else{
    //         $('.parent-price').removeClass('active');
    //         $('.product-quantity').removeClass('active');
    //         var $id = $(this).data('id');
    //         $('.parent-price[data-id="'+$id+'"]').toggleClass('active');
    //         $('.product-quantity[data-id="'+$id+'"]').toggleClass('active');
    //         $(".product-size").removeClass("active");
    //
    //         $(this).addClass("active");
    //     }
    // });

    // $(document).on("click", ".product-test", function(){
    //     $(this).toggleClass("is-active");
    // });

    //Смена цены при смене размера (новая версия)
    $(document).on("click", ".product-size", function(){
        $('.product-to-cart').removeClass("disable");
        $(this).toggleClass("active");

        // $('.parent-price').removeClass('active');
        // $('.product-quantity').removeClass('active');
        // var $id = $(this).data('id');
        // $('.parent-price[data-id="'+$id+'"]').toggleClass('active');
        // $('.product-quantity[data-id="'+$id+'"]').toggleClass('active');

        // if( $('.product-data .product-size.active').length < 1 ) {
        //     $('#product-size-error').addClass('show-error');
        //     $('.product-to-cart').addClass("disable");
        //     $('.product-to-cart').html("Добавить в корзину");
        // }else {
        //     $('#product-size-error').removeClass('show-error');
        // }
    });
});

