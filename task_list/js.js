const form = document.querySelector('.task-form')
const taskInput = document.querySelector('.task-input')
const taskList = document.querySelector('.ul-list')
const titleList = document.querySelector('.title-task-list')
const cancelBtton = form.querySelector('.task-form-button-close')
const addButton = titleList.querySelector('.add-button')
const prioryCheck = form.querySelector('.input-for-priority-selection')

let act = ''
let parNode

// добавление задачи
form.addEventListener('submit', addTask)
// удаление задачи
taskList.addEventListener('click', deleteTask)
// Высокий приоритет задачи
taskList.addEventListener('click', doneTask)

taskList.addEventListener('click', editTask)

cancelBtton.addEventListener('click', () => {
    form.classList.add('hide-element')
})
addButton.addEventListener('click', () => {
    form.classList.remove('hide-element')
    act = 'create'
})


function addTask(event){
    // Отменяем отправку формы
    event.preventDefault()
    // Достаем текст задачи из поля ввода
    const taskText=taskInput.value
    // Формируем разметку для новой задачи
    if (act === 'create'){
            const taskHTML=`
        <div class="create-ul">
            <div class="">
                <label>
                    <input type="checkbox" name="" class="input-for-create-ul"  data-action="done">
                    <span class="fake-checkbox"></span>
                    <img  class ="img-for-high-priory" src="images/hiprio.svg"><span class="text-create-ul" alt="приоритет">${taskText}</span>
                </label>
            </div>
            <div class="button-image">
                <input type="image" src='images/pencil.svg'  class="task-list__edit-button" data-action="edit"></input>
                <input type="image" src='images/trashbin.svg'  class="task-list__del-button" data-action="delete"></input>
            </div>
        </div>`
        taskList.insertAdjacentHTML('beforeend', taskHTML)
    }
    else if (act === 'edit'){
        let priory = parNode.querySelector('.img-for-high-priory')
        let curTask = parNode.querySelector('.text-create-ul')
        curTask.textContent = taskText
        if (prioryCheck.checked) {
            priory.classList.remove('hide-element')
        }
        else{
            priory.classList.add('hide-element')
        }
    }
    
}

function deleteTask(event){
    if (event.target.dataset.action==='delete'){
        const d=document.querySelector('.create-ul')
        d.remove()
    }
}

function editTask(event){
    if (event.target.dataset.action==='edit'){
        parNode = event.target.closest('.create-ul')
        act = 'edit'
        console.log(parNode)
    }
}

function doneTask(event){
    if (event.target.dataset.action==='done'){
        parNode = event.target.closest('.create-ul')
        let taskDone = parNode.querySelector('.text-create-ul')
        if (event.target.checked) {
            taskDone.classList.add('done')
        }
        else {
            taskDone.classList.remove('done')
        }
    }
}