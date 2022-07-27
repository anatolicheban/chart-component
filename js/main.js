
let data = [
    {
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
]

const columns = document.querySelectorAll('.spending__day-col')
const days = document.querySelectorAll('.spending__day-name')
const totalSum = document.querySelector('.spending__total-value')




function showDays() {
    for (let i = 0; i < data.length; i++) {
        days[i].innerHTML = `${data[i].day}`
    }
}

showDays();

let amount = []

function getAmount(arr) {
    for (let i = 0; i < data.length; i++) {
        arr.push(data[i].amount)
    }
}

getAmount(amount)

let maxValue = Math.max(...amount)

function columnsHeight(e) {
    for (let i = 0; i < amount.length; i++) {
        e[i].style.height = ((amount[i] / maxValue) * 100) + '%'
    }
}

columnsHeight(columns)

let amountSum = amount.map(i => x += i, x = 0).reverse()[0]
totalSum.innerHTML = amountSum + '$'

function showDayValue() {
    for (let i = 0; i < data.length; i++) {
        columns[i].dataset.dayval = amount[i] + '$'
    }
}

showDayValue()
