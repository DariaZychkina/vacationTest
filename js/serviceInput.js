let serv ="Ногтевой сервис";
let servItem ="";
const servItems = [["Педикюр", "Депиляция/эпиляция", "Маникюр + снятие + покрытие гель-лаком", "Маникюр + снятие", "Маникюр"], ["11", "22"]];


document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы
    var openModalBtn = document.getElementById('service');
    var modalService = document.getElementById('myModalService');

    // Обработчик для кнопки открытия модального окна
    openModalBtn.onclick = function() {
        //создание текста
        as =`<div id="modalContentService" onselectstart="return false">
                <div id="serviseBtns">
                    <div class="row">
                        <button class="btnService">Ногтевой сервис</button>
                        <button class="btnService">Косметология</button>
                        <button class="btnService">Массаж</button>
                        <button class="btnService">Депиляция/эпиляция</button>
                        <button class="btnService">Визаж</button>
                    </div>
                    <div class="row">
                        <button class="btnService">Брови</button>
                        <button class="btnService">Ресницы</button>
                    </div>
                </div>
                <div id="list">

                </div>
                <div id="successServ">Продолжить</div>
            </div>`;

        //вставляем текст
        modalService.innerHTML = as;

        //кнопки выбора услуги
        var btns = document.getElementsByClassName("btnService");
        btns[0].style.backgroundColor = "#929292";
        btns[0].style.color="#fff"
        for(let i=0; i<btns.length; i++) {
            btns[i].onclick = (e) => {
                for(let j=0; j<btns.length; j++) {
                    btns[j].style.backgroundColor = "#F0F0F0";
                    btns[j].style.color = "#000";
                }
                e.target.style.backgroundColor = "#929292"
                e.target.style.color="#fff"
                var listServ = document.getElementById("list");
                listServ.innerHTML = "";
                for(let k=0; k< servItems[i].length; k++) {
                    var elem = document.createElement('div');
                    elem.style.height = 62;
                    elem.className = "listelem";
                    elem.innerHTML = servItems[i][k];
                    elem.onclick = (e) => {
                        var select = document.getElementsByClassName("listelem");
                        for(let s=0; s<select.length; s++) {
                            select[s].style.backgroundColor = "#fff";
                            select[s].style.color = "#000";
                        }
                        e.target.style.backgroundColor = "#929292"
                        e.target.style.color="#fff"

                        servItem = e.target.textContent;
                    }
                    listServ.prepend(elem);
                }
                serv = btns[i].textContent;
            }
        }

        //подтверждение
        let result = document.getElementById("successServ");
        result.onclick = () => {
           var strResult = serv + ', ' + servItem;
           openModalBtn.innerHTML = "";
           openModalBtn.innerHTML = strResult;
           modalService.style.display = 'none';
        }

        modalService.style.display = 'block';
    };
});