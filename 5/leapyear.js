const leapYearText = "високосный год";
const notLeapYearText = "невисокосный год";

function leapYear(year)
{
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

// обработка клика
document.getElementById('btn').addEventListener('click', function () {
    //вытаскиваем значение из текстового поля
    let year=document.getElementById('year').value;
    if (leapYear(year)) {
        document.getElementById('msg').innerText = leapYearText;
    }
    else {
        document.getElementById('msg').innerText=notLeapYearText;
    }

    document.getElementById('msg').style.display='block';
});