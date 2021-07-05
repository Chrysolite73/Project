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
				$(_this).parent().addClass('open').find('.submenu').animate({
					height: ($(_this).parent().find('.submenu a').length * $('.submenu a').height())
				}, 1000);
			});
		} else {
			$(this).parent().addClass('open').find('.submenu').animate({
				height: ($(this).parent().find('.submenu a').length * $('.submenu a').height())
			}, 1000);
		}
	});
	
	$('button.login').click(function(){
        $('.popup-desk').addClass('active');
        $('.popup').html('<p class="popup-header">Личный кабинет</p><input type="text" name="fullname" placeholder="Логин"><input type="password" name="password" placeholder="Пароль"><button type="submit">Войти</button><a href="https://yandex.ru/" class="register">Зарегистрироваться</a>');
        $('.login').html("Вход / регистрация");
    });
    
    $('.popup-desk').click(function(e){
        if (e.target == this) {
            $(this).removeClass('active');
            $('.popup').empty();
            $('.login').html("Личны кабинет");
        }
    });
    
    $(document).on('click', '.register', function(e){
        e.preventDefault();
        if ($('.login').html()=="Вход / регистрация") {
            $('.popup').html('<p class="popup-header">Личный кабинет закрыт на ремонт.<br>Регистрации не будет до 1 января.</p><a href="https://yandex.ru/" class="register">Войти</a>');
            $('.login').html("Личны кабинет");
        } else {
            $('.popup').html('<p class="popup-header">Личный кабинет</p><input type="text" name="fullname" placeholder="Логин"><input type="password" name="password" placeholder="Пароль"><button type="submit">Войти</button><a href="https://yandex.ru/" class="register">Зарегистрироваться</a>');
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
    });
    
    $('#date').mask('00-00-0000');
    
    $('#orderdata').on('submit', function(e){// отправка формы
        e.preventDefault();
        orderAction();
    })
});