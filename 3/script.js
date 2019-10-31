//кол-во прав ответов
let correct = 0;
//обработчмк клика (проверка теста)
$('#finishBtn').click(function () {
        //проверка 1 вопроса
        let q1 = $('#q1').val();
        console.log(q1);
        if (q1 == 'united states of america') {
            correct = correct + 10;
        }
        //проверка 2 вопроса
        if ($('#q2v3').is(':checked') == true) {
            correct = correct + 10;
        }
        //проверка 3 вопроса
        if ($("#q3v1").prop("checked") == false && $("#q3v2").prop("checked") == true && $("#q3v3").prop("checked") == true) {
            correct = correct + 10;
        }
        //проверка 4 вопроса
        let q4 = $('#q4').val();
        console.log(q4);
        if (q4 == 'Harverd Dropout') {
            correct = correct + 10;
        }
        //проверка 5 вопроса
        let q5 = $('#q5').val();
        console.log(q5);
        if (q5 == '225000$') {
            correct = correct + 10;
        }
        //проверка 6 вопроса
        if ($('#q6v3').is(':checked') == true) {
            correct = correct + 10;
        }
        //проверка 8 вопроса
        if ($('#q8v3').is(':checked') == true) {
            correct = correct + 10;
        }
        //проверка 7 вопроса
        if ($("#q7v1").prop("checked") == true && $("#q7v2").prop("checked") == true && $("#q7v3").prop("checked") == false) {
            correct = correct + 10;
        }
        //вывод правильных ответов
        //alert('набранно очков: ' + correct);
        $('#test').hide();
        $('#result').html('<h6>тест пройден на</h6>' + correct + '%');
        $('#result').animate({
            left: "250px",
            top: "150px",
            fontSize: "150px",
            width: "600px",
            height: "600px",
            borderRadius: "300px",
            lineHeight: "600px"
        }, 2000);
        $('#result h6').animate({opacity: '1.0', bottom: '100px', right: '235px'}, 5000);
        $('#againBtn').animate({opacity: '1.0', bottom: '100px', right: '100px'}, 7700);

    }
);
//обработчик клика по кнопке помощи
$('#helpBtn').click(function () {
    //показываем диалоговое окно
    $('#dialogHelp').dialog({width:"500px"});
});
//обработчик клика по кнопке помощи1
$('#hint1').click(function () {
    //показываем диалоговое окно
    $('#dialogHint1').dialog();
});

// активация аккордиона
$('#accordion-1').accordion({
    collapsible:true
});
//подсказки к текстовому полю
$(function() {
    var availableTutorials  =  [
        "united states of america",
        "Russia",
        "Saudi Arabia",
        "South America",
        "Moscow",
        "Himki",
        "Finland"
    ];
    $( "#q1" ).autocomplete({
        source: availableTutorials
    });
});
//подсказки при наведении
$(function() {
    $("#q1").tooltip();
});
//вкладки в окне помощи
$(function() {
    $( "#tabs-1" ).tabs();
});