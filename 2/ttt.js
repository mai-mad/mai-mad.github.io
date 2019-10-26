let player = 1;
// массив для хранения состояния игры
let map = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];
let scoreX = 0;
let score0 = 0;
let gameState = 'unlock';

$(function () {
    //обработчик клика по клеткам
    $('.tictactoe div').click(function () {
        //проверяем игру на заблокированность
        if (gameState == 'lock') {
            //завершение попытки хода
            return;
        }
        //Вытаскиваем номер клетки по которой кликнули:
        let cell = $(this).attr('class');
        let cellNumber = cell[1];
        //this- указывет на кликнутую клетку
        if (player == 1) {
            // console.log($(this).html() )
            // втавляем икс если клетка была пустой
            if ($(this).html() == '') {
                $(this).html('<i class="fas fa-times"></i>');
                map[cellNumber] = 'x';
                player = 2
            }

        }
        else if (player == 2) {
            if ($(this).html() == '') {
                $(this).html('<i class="far fa-circle"></i>');
                map[cellNumber] = '0';
                player = 1
            }

        }

//проверка выигрыша

        if ((map[0] == 'x' && map[1] == 'x' && map[2] == 'x') ||
            (map[3] == 'x' && map[4] == 'x' && map[5] == 'x') ||
            (map[6] == 'x' && map[7] == 'x' && map[8] == 'x') ||
            (map[0] == 'x' && map[3] == 'x' && map[6] == 'x') ||
            (map[1] == 'x' && map[4] == 'x' && map[7] == 'x') ||
            (map[2] == 'x' && map[5] == 'x' && map[8] == 'x') ||
            (map[0] == 'x' && map[4] == 'x' && map[8] == 'x') ||
            (map[2] == 'x' && map[4] == 'x' && map[6] == 'x')
        ) {
            $('#btnRestart').addClass('pulseActive');
            scoreX++;
            $('#scoreX1').text(scoreX);
            gameState = 'lock';
            win();

        }
        if ((map[0] == '0' && map[1] == '0' && map[2] == '0') ||
            (map[3] == '0' && map[4] == '0' && map[5] == '0') ||
            (map[6] == '0' && map[7] == '0' && map[8] == '0') ||
            (map[0] == '0' && map[3] == '0' && map[6] == '0') ||
            (map[1] == '0' && map[4] == '0' && map[7] == '0') ||
            (map[2] == '0' && map[5] == '0' && map[8] == '0') ||
            (map[0] == '0' && map[4] == '0' && map[8] == '0') ||
            (map[2] == '0' && map[4] == '0' && map[6] == '0')
        ) {
            //включам пульсацию кнопки при победе
            $('#btnRestart').addClass('pulseActive');
            score0++;
            $('#score01').text(score0);
            gameState = 'lock';
            win0()
        }
    })
});

//запуск новой игры
function restart() {
    $('#btnRestart').removeClass('pulseActive');
    gameState = 'unlock';
    player = 1;
    //очистка карты
    for (let i = 0; i < map.length; i++) {
        map[i] = '_';
    }
    $('.tictactoe div').empty();
}
