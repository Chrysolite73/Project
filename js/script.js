$(function(){
    $('.submenu_mover').click(function(){
        if ($(this).parent().hasClass('open')) {
            $('.catmenu_item.open').removeClass('open').find('.submenu').animate({
                height: 0
            }, 1000);
        } else {
            $('.catmenu_item.open').removeClass('open').find('.submenu').animate({
                height: 0
            }, 1000);
            $(this).parent().addClass('open').find('.submenu').animate({
                height: ($(this).parent().find('.submenu a').length * 24)
            }, 1000);
        }
    });
	
	$('#privet').click(function(){alert('Привет!')});
});
