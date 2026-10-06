/* ==========================================
   ПОЛНЫЙ ПЛАН
========================================== */

const plans = {

    1: {
        emoji: "🔵",
        name: "Понедельник",
        description: "Самый загруженный день: университет 08:30–15:40",
        sections: [
            {
                title: "Утро",
                items: [
                    ["05:00", "Подъём"],
                    ["05:05–05:30", "🏃 Пробежка"],
                    ["05:30–05:50", "🚿 Душ"],
                    ["05:50–06:10", "🍳 Завтрак"],
                    ["06:10–06:55", "📖 Повторение материала"],
                    ["06:55–07:20", "📚 Подготовка к сегодняшним парам"],
                    ["07:20–07:30", "🎒 Собрать вещи"],
                    ["07:30", "🚶 Выход"]
                ]
            },
            {
                title: "Университет",
                items: [
                    ["08:30–15:40", "🎓 Пары"]
                ]
            },
            {
                title: "Вечер",
                items: [
                    ["~16:30", "🏠 Домой"],
                    ["16:30–17:00", "🍽️ Еда + отдых"],
                    ["17:00–19:00", "📝 ДЗ"],
                    ["19:00–19:30", "🍽️ Ужин"],
                    ["19:30–20:30", "🎬 TikTok"],
                    ["20:30–21:15", "🌙 Вечерняя прогулка"],
                    ["21:15–21:40", "🎒 Собрать вещи + посмотреть расписание"],
                    ["21:40–22:00", "😌 Спокойное время без учёбы"],
                    ["22:00", "😴 Сон"]
                ]
            }
        ]
    },


    2: {
        emoji: "🟢",
        name: "Вторник",
        description: "Университет 08:30–13:30",
        sections: [
            {
                title: "Утро",
                items: [
                    ["05:00", "Подъём"],
                    ["05:05–05:30", "🏃 Пробежка"],
                    ["05:30–05:50", "🚿 Душ"],
                    ["05:50–06:10", "🍳 Завтрак"],
                    ["06:10–07:00", "📖 Повторение понедельника"],
                    ["07:00–07:20", "📚 Подготовка к парам"],
                    ["07:20–07:30", "🎒 Сборы"],
                    ["07:30", "🚶 Выход"]
                ]
            },
            {
                title: "Университет",
                items: [
                    ["08:30–13:30", "🎓 Пары"]
                ]
            },
            {
                title: "После университета",
                items: [
                    ["~14:00", "🏠 Домой"],
                    ["14:00–15:00", "🍽️ Обед + отдых"],
                    ["15:00–17:00", "📝 ДЗ"],
                    ["17:00–18:00", "📚 Подготовка к среде"],
                    ["18:00–19:30", "🎬 TikTok"],
                    ["19:30–20:15", "🍽️ Ужин"],
                    ["20:15–21:00", "🌙 Вечерняя прогулка"],
                    ["21:00–21:40", "😌 Свободное время"],
                    ["21:40–22:00", "🌙 Подготовка ко сну"],
                    ["22:00", "😴 Сон"]
                ]
            }
        ]
    },


    3: {
        emoji: "🟡",
        name: "Среда",
        description: "Первая пара в 08:00, поэтому утро немного короче",
        sections: [
            {
                title: "Утро",
                items: [
                    ["05:00", "Подъём"],
                    ["05:05–05:25", "🏃 Лёгкая пробежка"],
                    ["05:25–05:50", "🚿 Душ + завтрак"],
                    ["05:50–06:40", "📖 Повторение"],
                    ["06:40–07:10", "📚 Подготовка к парам"],
                    ["07:10–07:20", "🎒 Сборы"],
                    ["~07:20", "🚶 Выход"]
                ]
            },
            {
                title: "Университет",
                items: [
                    ["08:00–14:00", "🎓 Пары"]
                ]
            },
            {
                title: "После университета",
                items: [
                    ["~14:30", "🏠 Домой"],
                    ["14:30–15:15", "🍽️ Обед + отдых"],
                    ["15:15–17:15", "📝 ДЗ"],
                    ["17:15–18:00", "📚 Подготовка"],
                    ["18:00–19:30", "🎬 TikTok"],
                    ["19:30–20:15", "🍽️ Ужин"],
                    ["20:15–21:00", "🌙 Вечерняя прогулка"],
                    ["21:00–21:40", "😌 Свободное время"],
                    ["22:00", "😴 Сон"]
                ]
            }
        ]
    },


    4: {
        emoji: "🟠",
        name: "Четверг",
        description: "Университет только 10:00–12:00",
        sections: [
            {
                title: "Утро",
                items: [
                    ["05:00", "Подъём"],
                    ["05:05–05:30", "🏃 Пробежка"],
                    ["05:30–05:50", "🚿 Душ"],
                    ["05:50–06:10", "🍳 Завтрак"],
                    ["06:10–07:00", "📖 Повторение"],
                    ["07:00–08:00", "📚 Подготовка / чтение"],
                    ["08:00–08:30", "😌 Отдых"],
                    ["08:30–09:15", "📝 Небольшое учебное дело"],
                    ["09:15–09:40", "🎒 Сборы"],
                    ["~09:40", "🚶 Выход"]
                ]
            },
            {
                title: "Университет",
                items: [
                    ["10:00–12:00", "🎓 Пары"]
                ]
            },
            {
                title: "После университета",
                items: [
                    ["~12:30", "🏠 Домой"],
                    ["12:30–13:30", "🍽️ Обед + отдых"],
                    ["13:30–16:00", "📝 ДЗ"],
                    ["16:00–16:30", "😌 Отдых"],
                    ["16:30–17:30", "📚 Подготовка к пятнице"],
                    ["17:30–19:30", "🎬 TikTok"],
                    ["19:30–20:15", "🍽️ Ужин"],
                    ["20:15–21:00", "🌙 Вечерняя прогулка"],
                    ["21:00–21:40", "😌 Свободное время"],
                    ["22:00", "😴 Сон"]
                ]
            }
        ]
    },


    5: {
        emoji: "🟣",
        name: "Пятница",
        description: "Университет 10:00–14:00",
        sections: [
            {
                title: "Утро",
                items: [
                    ["05:00", "Подъём"],
                    ["05:05–05:30", "🏃 Пробежка"],
                    ["05:30–05:50", "🚿 Душ"],
                    ["05:50–06:10", "🍳 Завтрак"],
                    ["06:10–07:00", "📖 Повторение"],
                    ["07:00–08:00", "📚 Подготовка"],
                    ["08:00–09:00", "😌 Свободное время"],
                    ["09:00–09:30", "🎒 Сборы"],
                    ["~09:30", "🚶 Выход"]
                ]
            },
            {
                title: "Университет",
                items: [
                    ["10:00–14:00", "🎓 Пары"]
                ]
            },
            {
                title: "После университета",
                items: [
                    ["~14:30", "🏠 Домой"],
                    ["14:30–15:30", "🍽️ Обед + отдых"],
                    ["15:30–17:30", "📝 ДЗ"],
                    ["17:30–20:00", "🎬 TikTok"],
                    ["20:00–20:30", "🍽️ Ужин"],
                    ["20:30–21:15", "🌙 Вечерняя прогулка"],
                    ["21:15–22:00", "😌 Свободное время"],
                    ["22:00", "😴 Сон"]
                ]
            }
        ]
    },


    6: {
        emoji: "🟤",
        name: "Суббота",
        description: "Главный день для TikTok",
        sections: [
            {
                title: "Утро",
                items: [
                    ["05:00", "Подъём"],
                    ["05:15–05:45", "🏃 Пробежка"],
                    ["05:45–06:15", "🚿 Душ + завтрак"],
                    ["06:15–07:15", "📖 Повторение всей недели"],
                    ["07:15–09:00", "📚 Учёба / закрыть хвосты"],
                    ["09:00–10:00", "😌 Отдых"],
                    ["10:00–12:00", "📝 Оставшиеся задания"],
                    ["12:00–13:00", "🍽️ Обед"]
                ]
            },
            {
                title: "TikTok и отдых",
                items: [
                    ["13:00–16:00", "🎬 TikTok — основной монтаж"],
                    ["16:00–18:00", "🎮 Отдых / свои дела"],
                    ["18:00–19:00", "📚 Подготовка к следующей неделе"],
                    ["19:00–20:00", "🍽️ Ужин"],
                    ["20:00–21:00", "🌙 Вечерняя прогулка"],
                    ["21:00–22:00", "😌 Свободное время"],
                    ["22:00", "😴 Сон"]
                ]
            }
        ]
    },


    0: {
        emoji: "⚪",
        name: "Воскресенье",
        description: "Не превращаем воскресенье в ещё один учебный день",
        sections: [
            {
                title: "Утро",
                items: [
                    ["05:00", "Подъём"],
                    ["05:15–05:35", "🚶 Лёгкая пробежка или прогулка"],
                    ["05:35–06:15", "🚿 Душ + завтрак"],
                    ["06:15–07:00", "📖 Спокойное повторение"],
                    ["07:00–09:00", "😌 Свободное время"]
                ]
            },
            {
                title: "День",
                items: [
                    ["09:00–11:00", "📚 Подготовка к понедельнику"],
                    ["11:00–13:00", "😌 Отдых"],
                    ["13:00–14:00", "🍽️ Обед"],
                    ["14:00–16:00", "🎬 TikTok"],
                    ["16:00–18:00", "😌 Полностью свободное время"]
                ]
            },
            {
                title: "Вечер",
                items: [
                    ["18:00–18:30", "📅 Проверить расписание на неделю"],
                    ["18:30–19:00", "🎒 Собрать рюкзак / одежду"],
                    ["19:00–20:00", "🍽️ Ужин"],
                    ["20:00–21:00", "🌙 Вечерняя прогулка"],
                    ["21:00–22:00", "😌 Спокойный вечер"],
                    ["22:00", "😴 Сон"]
                ]
            }
        ]
    }

};


/* ==========================================
   СОСТОЯНИЕ
========================================== */

let selectedDate = new Date();

let calendarDate = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
);

let currentPage = "today";

let state = JSON.parse(
    localStorage.getItem("myday_v3") || "{}"
);


/* ==========================================
   ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
========================================== */

function dateKey(date) {

    const year = date.getFullYear();

    const month = String(
        date.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
        date.getDate()
    ).padStart(2, "0");

    return `${year}-${month}-${day}`;
}


function getPlan(day) {

    return plans[day] || null;

}


function getTasksForDay(date) {

    const plan = getPlan(
        date.getDay()
    );

    if (!plan) return [];

    return plan.sections.flatMap(
        section => section.items
    );

}


function getDayState(date) {

    const key = dateKey(date);

    if (!state[key]) {
        state[key] = {};
    }

    return state[key];

}


function save() {

    localStorage.setItem(
        "myday_v3",
        JSON.stringify(state)
    );

}


/* ==========================================
   СТРАНИЦА "СЕГОДНЯ"
========================================== */

function renderDate() {

    const days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота"
    ];

    const months = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря"
    ];

    document.getElementById(
        "dayName"
    ).textContent =
        days[selectedDate.getDay()];

    document.getElementById(
        "fullDate"
    ).textContent =
        `${selectedDate.getDate()} ${months[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`;

}


function renderTasks() {

    const container =
        document.getElementById("tasks");

    const tasks =
        getTasksForDay(selectedDate);

    const dayState =
        getDayState(selectedDate);

    container.innerHTML = "";

    tasks.forEach((task, index) => {

        const div =
            document.createElement("div");

        const done =
            dayState[index] === true;

        div.className =
            "task" + (done ? " done" : "");

        div.innerHTML = `

            <input
                type="checkbox"
                ${done ? "checked" : ""}
                data-index="${index}"
            >

            <div class="task-content">

                <div class="task-time">
                    ${task[0]}
                </div>

                <div class="task-title">
                    ${task[1]}
                </div>

            </div>
        `;

        div.querySelector("input")
            .addEventListener(
                "change",
                event => {

                    dayState[index] =
                        event.target.checked;

                    save();

                    renderTasks();

                    renderCalendar();

                }
            );

        container.appendChild(div);

    });


    updateProgress();

}


function updateProgress() {

    const tasks =
        getTasksForDay(selectedDate);

    const dayState =
        getDayState(selectedDate);

    const completed =
        tasks.filter(
            (_, index) => dayState[index]
        ).length;

    const percent =
        tasks.length
            ? Math.round(
                completed /
                tasks.length *
                100
            )
            : 0;

    document.getElementById(
        "progressText"
    ).textContent =
        `${percent}%`;

    document.getElementById(
        "progressBar"
    ).style.width =
        `${percent}%`;

    document.getElementById(
        "completedText"
    ).textContent =
        `${completed} из ${tasks.length} выполнено`;

    document.getElementById(
        "taskCount"
    ).textContent =
        `${tasks.length} задач`;

}


/* ==========================================
   ПОЛНЫЙ ПЛАН
========================================== */

function renderFullPlan() {

    const container =
        document.getElementById("fullPlan");

    container.innerHTML = "";

    const dayOrder = [
        1, 2, 3, 4, 5, 6, 0
    ];

    dayOrder.forEach(day => {

        const plan = plans[day];

        const wrapper =
            document.createElement("div");

        wrapper.className =
            "day-plan";

        wrapper.innerHTML = `

            <div class="day-plan-header">

                <h2>
                    ${plan.emoji}
                    ${plan.name}
                </h2>

                <p>
                    ${plan.description}
                </p>

            </div>
        `;


        plan.sections.forEach(section => {

            const title =
                document.createElement("div");

            title.className =
                "plan-period";

            title.textContent =
                section.title;

            wrapper.appendChild(title);


            section.items.forEach(item => {

                const row =
                    document.createElement("div");

                row.className =
                    "plan-item";

                row.innerHTML = `

                    <div class="plan-item-time">
                        ${item[0]}
                    </div>

                    <div class="plan-item-title">
                        ${item[1]}
                    </div>

                `;

                wrapper.appendChild(row);

            });

        });


        container.appendChild(wrapper);

    });

}


/* ==========================================
   КАЛЕНДАРЬ
========================================== */

function renderCalendar() {

    const calendar =
        document.getElementById("calendar");

    calendar.innerHTML = "";

    const year =
        calendarDate.getFullYear();

    const month =
        calendarDate.getMonth();


    const monthNames = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
    ];

    document.getElementById(
        "monthTitle"
    ).textContent =
        `${monthNames[month]} ${year}`;


    let firstDay =
        new Date(
            year,
            month,
            1
        ).getDay();

    firstDay =
        firstDay === 0
            ? 6
            : firstDay - 1;


    const daysInMonth =
        new Date(
            year,
            month + 1,
            0
        ).getDate();


    for (
        let i = 0;
        i < firstDay;
        i++
    ) {

        const empty =
            document.createElement("div");

        empty.className =
            "day empty";

        calendar.appendChild(empty);

    }


    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const date =
            new Date(
                year,
                month,
                day
            );

        const key =
            dateKey(date);

        const div =
            document.createElement("div");

        div.className = "day";

        if (
            key === dateKey(new Date())
        ) {
            div.classList.add("today");
        }

        if (
            key === dateKey(selectedDate)
        ) {
            div.classList.add("selected");
        }


        div.appendChild(
            document.createTextNode(day)
        );


        const tasks =
            getTasksForDay(date);

        const saved =
            state[key] || {};

        const completed =
            tasks.filter(
                (_, index) => saved[index]
            ).length;


        if (completed > 0) {

            const dot =
                document.createElement("i");

            if (
                completed === tasks.length
                && tasks.length > 0
            ) {

                dot.className =
                    "full-dot";

            } else {

                dot.className =
                    "dot";

            }

            div.appendChild(dot);

        }


        div.addEventListener(
            "click",
            () => {

                selectedDate =
                    new Date(
                        year,
                        month,
                        day
                    );

                showPage("today");

            }
        );


        calendar.appendChild(div);

    }

}


/* ==========================================
   СТРАНИЦЫ
========================================== */

function showPage(page) {

    currentPage = page;

    document
        .querySelectorAll(".page")
        .forEach(element => {
            element.classList.remove(
                "active-page"
            );
        });


    document
        .querySelectorAll(".tab")
        .forEach(element => {
            element.classList.remove(
                "active"
            );
        });


    if (page === "today") {

        document
            .getElementById("todayPage")
            .classList.add("active-page");

        document
            .querySelector('[data-page="today"]')
            .classList.add("active");

        document.getElementById(
            "pageTitle"
        ).textContent = "Мой день";

        renderDate();
        renderTasks();

    }


    if (page === "plan") {

        document
            .getElementById("planPage")
            .classList.add("active-page");

        document
            .querySelector('[data-page="plan"]')
            .classList.add("active");

        document.getElementById(
            "pageTitle"
        ).textContent = "Мой план";

        renderFullPlan();

    }


    if (page === "calendar") {

        document
            .getElementById("calendarPage")
            .classList.add("active-page");

        document
            .querySelector('[data-page="calendar"]')
            .classList.add("active");

        document.getElementById(
            "pageTitle"
        ).textContent = "Календарь";

        renderCalendar();

    }

}


/* ==========================================
   СОБЫТИЯ
========================================== */

document
    .querySelectorAll(".tab")
    .forEach(tab => {

        tab.addEventListener(
            "click",
            () => {

                showPage(
                    tab.dataset.page
                );

            }
        );

    });


document.getElementById(
    "prevDay"
).addEventListener(
    "click",
    () => {

        selectedDate.setDate(
            selectedDate.getDate() - 1
        );

        renderDate();
        renderTasks();
        renderCalendar();

    }
);


document.getElementById(
    "nextDay"
).addEventListener(
    "click",
    () => {

        selectedDate.setDate(
            selectedDate.getDate() + 1
        );

        renderDate();
        renderTasks();
        renderCalendar();

    }
);


document.getElementById(
    "todayBtn"
).addEventListener(
    "click",
    () => {

        selectedDate = new Date();

        calendarDate =
            new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth(),
                1
            );

        showPage("today");

    }
);


document.getElementById(
    "calendarToday"
).addEventListener(
    "click",
    () => {

        selectedDate = new Date();

        calendarDate =
            new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth(),
                1
            );

        showPage("today");

    }
);


document.getElementById(
    "prevMonth"
).addEventListener(
    "click",
    () => {

        calendarDate.setMonth(
            calendarDate.getMonth() - 1
        );

        renderCalendar();

    }
);


document.getElementById(
    "nextMonth"
).addEventListener(
    "click",
    () => {

        calendarDate.setMonth(
            calendarDate.getMonth() + 1
        );

        renderCalendar();

    }
);


/* ==========================================
   SERVICE WORKER
========================================== */

if ("serviceWorker" in navigator) {

    window.addEventListener(
        "load",
        () => {

            navigator.serviceWorker
                .register(
                    "service-worker.js"
                )
                .catch(
                    error =>
                        console.log(
                            "Service Worker:",
                            error
                        )
                );

        }
    );

}


/* ==========================================
   ЗАПУСК
========================================== */

renderDate();
renderTasks();
renderFullPlan();
renderCalendar();