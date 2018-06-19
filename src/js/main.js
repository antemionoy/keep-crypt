//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/air-datepicker/dist/js/datepicker.js
//= ../../bower_components/select2/dist/js/select2.min.js
//= ../../bower_components/remodal/dist/remodal.min.js


function tabs(clickNavItem, parentBox, tabItem, class_selected) {
    $(clickNavItem).on('click', function(e) {
        e.preventDefault();

        $(this)
            .addClass(class_selected).siblings().removeClass(class_selected)
            .closest(parentBox).find(tabItem).removeClass('active')
            .eq($(this).index()).addClass('active');
    });
}

function activeToolTip() {
    var close = $('.tooltip__close');

    $('.item__row--profile').on('click', function(e) {

        if ($(this).siblings('.item__tooltip').hasClass('active')) {
           $(this).siblings('.item__tooltip').toggleClass('active');
        }

        else {
            $('.item__tooltip').removeClass('active');
            $(this).siblings('.item__tooltip').addClass('active');
        }

    });

    $(close).on('click', function(e) {
        $('.item__tooltip').removeClass('active');
    });
}




$(function() {

    activeToolTip();

    tabs('.tabs__link', '.tabs__box', '.tabs__item', 'tabs__link--selected');

    tabs('.choice__item', '.tabs__box', '.tabs__item', 'choice__item--active');


    $('.datepicker-here').datepicker({
        offset: 0,
        position: 'bottom left'
    });

    $('.form__select').select2({
        minimumResultsForSearch: -1,
        width: 'element',
        dropdownAutoWidth: true
    });

});
