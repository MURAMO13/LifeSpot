
// Глобальный объект сессии
let session = new Map();

// Сохранение данных сессии (время и UserAgent)
function handleSession() {
    const startDate = new Date().toLocaleString();
    session.set("startDate", startDate);
    session.set("userAgent", window.navigator.userAgent);
}

// Проверка возраста пользователя
function checkAge() {
    const age = parseInt(prompt("Пожалуйста, введите ваш возраст?"));
    session.set("age", age);

    if (age >= 18) {
        alert("Приветствуем на LifeSpot!\nТекущее время: " + new Date().toLocaleString());
    } else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com";
    }
}

// Вывод данных сессии в консоль
let sessionLog = function () {
    for (let result of session) {
        console.log(result);
    }
};

// Получение пользовательского ввода из поля ввода
const inputParseFunction = function () {
    return document.getElementById('searchInput').value.toLowerCase();
};

// Фильтрация видео по введённому значению
function filterContent(getInputValue) {
    const elements = document.getElementsByClassName('video-container');

    for (let i = 0; i < elements.length; i++) {
        const videoText = elements[i].querySelector(".video-title").innerText.toLowerCase();

        if (!videoText.includes(getInputValue())) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

// Запуск после загрузки DOM
//checkAge();
handleSession();
sessionLog();

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("searchInput");
    input.addEventListener("input", () => filterContent(inputParseFunction));
});

setTimeout(() =>
    alert("Нравится LifeSpot? " + '\n' + "Подпишитесь на наш Instagram @lifespot999!"),
    30000);

