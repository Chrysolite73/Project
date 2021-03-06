$(function(){
	$('.submenu_mover').click(function(){
		if ($(this).parent().hasClass('open')) {
			$('.catmenu_item.open').removeClass('open').find('.submenu').animate({
				height: 0
			}, 1000);
		} else if ($('.catmenu_item.open').length > 0) {
			let _this = this;
			$('.catmenu_item.open').removeClass('open').find('.submenu').animate({
				height: 0
			}, 1000, function(){
				let q = 0;
				$(_this).parent().find('.submenu a').each(function() {
					q += $(this).height();
				});
				$(_this).parent().addClass('open').find('.submenu').animate({
					height: q
				}, 1000);
			});
		} else {
			let q = 0;
			$(this).parent().find('.submenu a').each(function() {
				q += $(this).height();
			});
			$(this).parent().addClass('open').find('.submenu').animate({
					height: q
			}, 1000);
		}
	});
	
	$('button.login').click(function(){
        $('.popup-desk').addClass('active');
        $('.popup-desk').html('<div class="div-popup"><p class="popup-header">Личный кабинет</p><input type="text" class="personal_data" name="fullname" placeholder="Логин"><input type="password" class="personal_data" name="password" placeholder="Пароль"><button type="submit" class="form_button">Войти</button><a href="https://yandex.ru/" class="register form_button">Зарегистрироваться</a></div>');
        $('.login').html("Вход / регистрация");
    });
    
    $('.popup-desk').click(function(e){
        if (e.target == this) {
            $(this).removeClass('active');
            $('.popup-desk').empty();
            $('.login').html("Личный кабинет");
        }
    });
    
    $(document).on('click', '.register', function(e){
        e.preventDefault();
        if ($('.login').html()=="Вход / регистрация") {
            $('.popup-desk').html('<div class="div-popup"><p class="popup-header">Технические работы.<br>Регистрации не будет до 1 августа 2021.</p><a href="https://yandex.ru/" class="register form_button">Войти</a></div>');
            $('.login').html("Личный кабинет");
        } else {
            $('.popup-desk').html('<div class="div-popup"><p class="popup-header">Личный кабинет</p><input type="text" class="personal_data" name="fullname" placeholder="Логин"><input type="password" class="personal_data" name="password" placeholder="Пароль"><button type="submit" class="form_button">Войти</button><a href="https://yandex.ru/" class="register form_button">Зарегистрироваться</a></div>');
            $('.login').html("Вход / регистрация");
        }
    });
   
   //order
	
    $(document).on('click', '.order .del > div', function(){
        tovarDelete(this);
    });
    
    $(document).on('input', '.order .num > input', function(){
        tovarChange(this);
    });
    
    $('#date').click(function(){
        if ($('#date').val()) {
            selected_day = makeSelectedDate($('#date').val());
            makePopup(selected_day.getFullYear(),selected_day.getMonth());
        } else {
            makePopup(TODAY.getFullYear(),TODAY.getMonth());
        }
        $('#date').mask('00-00-0000');
    });
    
    
    $('#orderdata').on('submit', function(e){// отправка формы
        e.preventDefault();
        orderAction();
    })
    
    if ($('.product').length) {
        $('.main-image').on('click', 'img', seebigimage);
        $('.small-image').on('click', 'img', changeimage);
    }
    
   /* if ($('.small-image > img').length) {
        $('.small-image > img').each(function(){
            $(this).css({
                'margin-top': (160 - $(this).height()) / 2,
                'margin-left': (160 - $(this).width()) / 2
            })
        });
    }*/
});
