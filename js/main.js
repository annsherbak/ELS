
$(document).ready(function(){

    // slick - slider 
    $('.slider').slick({
        infinite: false,
        arrows: true,
        dots:true,
        appendArrows: $('.slider__control'),
        appendDots: $('.slider__control'),
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1120,
              settings: {
                slidesToShow:2,
                slidesToScroll: 1
                }
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToShow:1,
                  slidesToScroll: 1
                }
            }]
    })
    // маска для ввода телефона

        $('input[type="tel"]').inputmask({"mask": "+7(999) 999-99-99"});

    // валидация
    $('#form').validate({
        rules: {

        name: {
            required: true
        },
        tel: {
            required: true,
            phone: true
        },
        checkbox: {
            required: true
        },
        text: {
            required: true
            }
        },
        messages: {
        
        name: {
            required:"Необходимо заполнить поле",
            minLength: "Введите не менее 2-х символов"
        },
        tel: "Необходимо заполнить поле",
        checkbox: "Примите условия Пользовательского соглашения и Политики конфиденциальности",
        text: {
            required:"Необходимо заполнить поле",
            minLength: "Введите не менее 2-х символов"
            }
        },
        submitHandler: function() {
            console.log('готово!')
          },
        errorPlacement: function(error, element) {
            error.appendTo(element.parent(".application__form-item").find(".errorContainer"));
          }
        });
});

