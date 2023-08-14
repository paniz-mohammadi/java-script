const addBtn = document.querySelector(".todo-input button");
const inputText = document.querySelector(".todo-input input");
const todoList = document.querySelector(".todo-list");
const removeAllBtn = document.querySelector(".todo-info button");

inputText.onkeyup = () =>
{
    let getUserValue = inputText.value;

    if(getUserValue.trim() != 0)
    {
        addBtn.classList.add("active");
    }
    else
    {
        addBtn.classList.remove("active");
    }
}

addBtn.addEventListener('click', function()
{
    let getUserValue = inputText.value;

    const getLocalStorageData = JSON.parse(localStorage.getItem('todo')) || [];
    getlocalStorageData.push(getUserValue);
    localStorage.setItem('todo', JSON.stringify(getLocalStorageData));

    showTask();
    addBtn.classList.remove("active");
})

showTask();
function showTask()
{
    let getlocalStorageData = localStorage.getItem('todo')

    if(getLocalStorageData == null)
    {
        listArray = [];
    }
    else
    {
        listArray = JSON.parse(getLocalStorageData);
    }

    const pendingTasksNo = document.querySelector(".pendingTasks");
    pendingTasksNo.textContent = listArray.length;

    if(listArray.length > 0)
    {
        removeAllBtn.classList.add("active");
    }
    else
    {
        removeAllBtn.classList.remove("active");
    }

    let newTag = "";
    listArray.forEach((element, index)=>{
        newTag += `<li>${element}<span class="icon"><i class="fa-solid fa-trash-can" onclick="removeTask(${index})"></i></span></li>`;
    });

    todoList.innerHTML = newTag;
    inputText.value = "";
}

function removeTask(index)
{
    const getlocalStorageData = localStorage.getItem('todo');
    let listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index,1);
    localStorage.setItem('todo', JSON.stringify(listArray));
    
    showTask();
}

removeAllBtn.addEventListener('click', function()
{
    localStorage.removeItem('todo');
    showTask();
})
