$(function($) {
    $("#datepicker").datepicker();
    $.datepicker.regional['he'] = {
        closeText: 'סגור',
        prevText: '&#x3c;הקודם',
        nextText: 'הבא&#x3e;',
        currentText: 'היום',
        monthNames: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני',
            'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
        ],
        monthNamesShort: ['ינו', 'פבר', 'מרץ', 'אפר', 'מאי', 'יוני',
            'יולי', 'אוג', 'ספט', 'אוק', 'נוב', 'דצמ'
        ],
        dayNames: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
        dayNamesShort: ['א\'', 'ב\'', 'ג\'', 'ד\'', 'ה\'', 'ו\'', 'שבת'],
        dayNamesMin: ['א\'', 'ב\'', 'ג\'', 'ד\'', 'ה\'', 'ו\'', 'שבת'],
        weekHeader: 'Wk',
        dateFormat: 'dd/mm/yy',
        firstDay: 0,
        isRTL: true,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['he']);

    $('.btn-cal').on('click', function() {
        $(this).css({
            'background-color': 'rgb(135, 121, 145)',
            'border-color': '#fff'
        })
    });



});


$('#bg').on('load', function() {
    $('h1').addClass('flipInX').attr('data-wow-duration', '1.5s');
    $('h2').addClass('pulse').attr('data-wow-duration', '1.5s');

    $('.one').addClass('bounceIn');
    $('.two').addClass('bounceIn').css('-webkit-animation-delay', '2s');
    $('.three').addClass('bounceIn').css('-webkit-animation-delay', '3s');
    $('.four').addClass('bounceIn').css('-webkit-animation-delay', '4s');
    $('.five').addClass('bounceIn').css('-webkit-animation-delay', '5s');
    $('.six').addClass('bounceIn').css('-webkit-animation-delay', '6s');
})