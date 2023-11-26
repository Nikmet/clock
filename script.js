const main = document.querySelector("main");
const time = document.querySelector(".time");
const date = document.querySelector(".day");

setInterval(() => {
    const formaterDay = new Intl.DateTimeFormat("ru", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const formaterTime = new Intl.DateTimeFormat("ru", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });

    date.textContent = formaterDay.format(new Date());
    time.textContent = formaterTime.format(new Date());

}, 1000);
