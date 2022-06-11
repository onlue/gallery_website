$(document).ready(function() {
    var $element = $('#bubble-2');
    var phrases = [
        'Каждый выпускной это чудо!',
        'Фотосеты от профессионалов!',
        'Вы будете рады!',
        'Поднимаем настроение!',
    ];
    var index = -1;
    (function loopAnimation() {
        index = (index + 1) % phrases.length;
        bubbleText({
            element: $element,
            newText: phrases[index],
            letterSpeed: 70,
            callback: function() {
                setTimeout(loopAnimation, 1000);
            },
        });
    })();
});
