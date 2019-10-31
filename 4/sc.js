//функия для сложения
function add() {
    //проверяем корректность полей
    if (!checkFields("+")) {
        document.getElementById("result").value = "ВСЕ ПЛОХО!!";
        return;
        /*завершает функцию  */
    }


    //считывание значения из поля x
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    //преобразование из строки в целое число(parseInt)
    var z = parseInt(x) + parseInt(y);
    //записываем результат в поле result
    document.getElementById("result").value = z;
}
function sub() {
    if (!checkFields("-")) {
        document.getElementById("result").value = "ВСЕ ПЛОХО!!";
        /*завершает функцию  */
        return;
    }
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var z = parseInt(x) - parseInt(y);
    document.getElementById("result").value = z;
}

function mul() {
    if (!checkFields("*")) {
        document.getElementById("result").value = "ВСЕ ПЛОХО!!";
        /*завершает функцию  */
        return;
    }
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var z = parseInt(x) * parseInt(y);
    document.getElementById("result").value = z;
}
function div() {
    if (!checkFields("/")) {
        document.getElementById("result").value = "ВСЕ ПЛОХО!!";
        /*завершает функцию  */
        return;
    }
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var z = parseInt(x) / parseInt(y);
    document.getElementById("result").value = z;
}
function x2() {
    if (!checkFields("sqr")) {
        document.getElementById("result").value = "ВСЕ ПЛОХО!!!";
        /*завершает функцию  */
        return;

    }

    var x = document.getElementById("x").value;
    var z = parseInt(x) * parseInt(x);
    document.getElementById("result").value = z;


}
function x3() {
    if (!checkFields("sqr")) {
        document.getElementById("result").value = "ВСЕ ПЛОХО!!!";
        /*завершает функцию  */
        return;

    }

    var x = document.getElementById("x").value;
    var z = (x) * (x) * (x);
    document.getElementById("result").value = z;
}
function xy() {
    if (!checkFields("exp")) {
        document.getElementById("result").value = "ВСЕ ПЛОХО!!!";
        /*завершает функцию  */
        return;

    }

    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    x = parseInt(x);
    y = parseInt(y);
    var z = Math.pow(x, y);
    document.getElementById("result").value = z;

}

// обнуляет поле резуоьтата
function clearResult() {
    document.getElementById("result").value = 0;
}

// проверяет коректнность полей x и y
function checkFields(action) {
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    if (action == '+' || action == '-' || action == '*' || action == '/') {

        if (x == "" || y == "") {
            return false;
        }
    }
    if (action == '/') {
        // проверяем что Y неравен 0
        if (y == 0) {
            return false;
        }
    }
    if (action == 'sqr') {
        if (x == "") {
            return false;
        }
    }
    if (action == 'exp') {
        if (x == "" || y == "") {
            return false;
        }
    }
    //ощибок нет
    return true;
}


