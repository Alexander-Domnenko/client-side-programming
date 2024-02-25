function multiplicationTable(){
const body = document.body
const table = document.createElement('table')
body.prepend(table)
for (i = 10; i > 0; i--) {
    const tr = document.createElement('tr')
    table.prepend(tr)
    for (j = 10; j > 0; j--) {
        const td = document.createElement('td')
        tr.prepend(td);
        td.textContent=i*j
        td.style.border='2px solid black'
        td.style.width='20px'
        td.style.height='20px'
        if (i===1 || j===1 || (i===j)){
            td.style.backgroundColor='gray'
        }
    }
}
}

function calendar() {
    const date = new Date()
    const datelastMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() // последний день месяца
    const datelastWeek = new Date(date.getFullYear(), date.getMonth(), datelastMonth).getDay() // день недели последнего дня месяца
    const datefirstWeek = new Date(date.getFullYear(), date.getMonth(), 1).getDay() // день недели первого дня месяца
    // console.log(datelastMonth, datelastWeek, datefirstWeek)
    const shortDayWeek = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun']
    const body = document.body
    const table = document.createElement('table')
    body.prepend(table)
    table.style.border = '2px solid black'
    const tr = document.createElement('tr')
    table.prepend(tr)
    for (let i = 0; i < 7; i++) {
        const th = document.createElement('th')
        th.textContent = shortDayWeek[i]
        tr.append(th)
        th.style.border = '2px solid black'
    }
    for (let i = 0; i < 6; i++) {
        const tr = document.createElement('tr')
        table.append(tr)
        for (let j = 1; j < 8; j++) {
            const td = document.createElement('td')
            tr.append(td)
            td.style.border = '2px solid black'
            td.style.width = '30px'
            td.style.height = '30px'
            if ((i === 0 && j < datefirstWeek) || (i * 7 + j - datefirstWeek + 1 >= datelastMonth + 1)) {
                td.textContent = ""
            }
            else {
                td.textContent = (i * 7 + j) - datefirstWeek + 1
            }
        }
    }
}
calendar()
multiplicationTable()



// d=new Date()
// d.getFullYear()год
// d.getMonth()месяц от 0 до 11
// d.getDate()текущая дата от 1 до 31
// d.getDay()текущий день с ВС 0 до 6
