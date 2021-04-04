$(function(){
    $(document).on('click', '.product-to-cart.disable', function(e){
        console.log("e", e.target)
        $('#product-size-error').addClass('show-error');
    })
})

//Так же есть изменения в custom.js.
// - смена размера  + вывод уведомления "Выберите один или несколько размеров" (строка 143)
// изменение текста на кнопке Добавить в корзину (строка 62)