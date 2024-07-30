const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

const dayInWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

var monthNumber;
var monthName = "";
var day;
var time;

document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы
    var openModalBtn = document.getElementById('dateTime');
    var modal = document.getElementById('myModal');

    // Обработчик для кнопки открытия модального окна
    openModalBtn.onclick = () => {
        //создание текста
        let as =`<div id="modalContent" onselectstart="return false">
                <h1>Дата и время</h1>
                <div class="month" id="month">
                    <img src="./static/left.svg" id="leftAllow">
                    <div id="nameMonth"></div>
                    <img src="./static/right.svg" id="rightAllow">
                </div>
                <p>Период времени</p>
                <div id="time">
                    <div class="row1">
                        <button class="btnTime">9:00-12:00</button>
                        <button class="btnTime">12:00-15:00</button>
                        <button class="btnTime">15:00-18:00</button>
                    </div>
                    <div class="row1">
                        <button class="btnTime">18:00-21:00</button>
                    </div>
                </div>
                <div id="btnOk">Выбрать</div>
            </div>`;

        //вставляем текст
        modal.innerHTML = as;

        //кнопки выбора времени
        var btns = document.getElementsByClassName("btnTime");
        for(let i=0; i<btns.length; i++) {
            btns[i].onclick = (e) => {
                for(let j=0; j<btns.length; j++) {
                    btns[j].style.backgroundColor = "#fff";
                    btns[j].style.color = "#303030";
                }
                e.target.style.backgroundColor = "#FE6737"
                e.target.style.color="#fff"

                time = btns[i].textContent;
            }
        }

        //месяц
        var now = new Date();
        monthNumber = now.getMonth();
        monthName = monthNames[monthNumber];
        nameMonth.prepend(monthNames[monthNumber]);
        let rallow = document.getElementById("rightAllow");
        let lallow = document.getElementById("leftAllow");
        rallow.onclick = () => {
            monthNumber +=1;
            if(monthNumber > 11) {
                monthNumber = 0;
            }
            nameMonth.innerHTML ="";
            nameMonth.prepend(monthNames[monthNumber]);
            if(nameMonth.textContent == "Январь" || nameMonth.textContent == "Март" || nameMonth.textContent == "Май" || nameMonth.textContent == "Июль" || nameMonth.textContent == "Август" || nameMonth.textContent == "Октябрь" || nameMonth.textContent == "Декабрь") {
                dayTable(32);
            } else if (nameMonth.textContent == "Февраль" ) {
                dayTable(29);
            } else {
                dayTable(31);
            }
            monthName = monthNames[monthNumber];
        };

        lallow.onclick = () => {
            monthNumber -=1;
            if(monthNumber < 0) {
                monthNumber = 11;
            }
            nameMonth.innerHTML ="";
            nameMonth.prepend(monthNames[monthNumber]);
            if(nameMonth.textContent == "Январь" || nameMonth.textContent == "Март" || nameMonth.textContent == "Май" || nameMonth.textContent == "Июль" || nameMonth.textContent == "Август" || nameMonth.textContent == "Октябрь" || nameMonth.textContent == "Декабрь") {
                dayTable(32);
            } else if (nameMonth.textContent == "Февраль" ) {
                dayTable(29);
            } else {
                dayTable(31);
            }
            monthName = monthNames[monthNumber];
        };

        //календарь

        let calendar = document.createElement('div');
        calendar.id = "calendar";
        month = document.getElementById("month");
        month.after(calendar);
        let table = document.createElement('table');
        table.cellSpacing = 16;
        for(let i=0; i<6; i++) {
            let row = table.insertRow();
            for(let j=0; j<7; j++) {
                let cell = row.insertCell();
            }
        }

        calendar.appendChild(table);
        for(let i=0; i<table.rows[0].cells.length; i++) {
            table.rows[0].cells[i].className = "dayInWeek";
            table.rows[0].cells[i].innerHTML = dayInWeek[i];
        }

        if(nameMonth.textContent == "Январь" || nameMonth.textContent == "Март" || nameMonth.textContent == "Май" || nameMonth.textContent == "Июль" || nameMonth.textContent == "Август" || nameMonth.textContent == "Октябрь" || nameMonth.textContent == "Декабрь") {
            dayTable(32);
        } else if (nameMonth.textContent == "Февраль" ) {
            dayTable(29);
        } else {
            dayTable(31);
        }

        //подтверждение
        let result = document.getElementById("btnOk");
        result.onclick = () => {
            var strResult = day + ' ' + monthName.toLowerCase() + ', ' +time;
            openModalBtn.innerHTML = "";
            openModalBtn.innerHTML = strResult;
            modal.style.display = 'none';
        }

        modal.style.display = 'block';
    };

    //заполнение днями
    function dayTable(n) {
        let d= 1;
        let tbl = document.getElementsByTagName('table');
        for(let k=1; k<tbl[0].rows.length; k++) {
            for(let m=0; m<tbl[0].rows[k].cells.length; m++) { 
                tbl[0].rows[k].cells[m].innerHTML= "";
            }
        };
        for(let i=1; i<tbl[0].rows.length; i++) {
            for(let j=0; j<tbl[0].rows[i].cells.length; j++) {
                if (d<n) {
                    tbl[0].rows[i].cells[j].className = "day";
                    tbl[0].rows[i].cells[j].innerHTML = d;
                    d++;
                } else {
                    tbl[0].rows[i].cells[j].className = "";
                }

                tbl[0].rows[i].cells[j].onclick = (e) => {
                    for(let k=1; k<tbl[0].rows.length; k++) {
                        for(let m=0; m<tbl[0].rows[k].cells.length; m++) { 
                            tbl[0].rows[k].cells[m].style.backgroundColor = "white";
                            tbl[0].rows[k].cells[m].style.color = "black";
                        }
                    };
                    e.target.style.backgroundColor = "#FE6737";
                    e.target.style.color="#fff";
                    day = e.target.textContent;
                }
            }
        };
    };
});