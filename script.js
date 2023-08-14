const addBtn = document.querySelector(".todo-input button");
const inputText = document.querySelector(".todo-input input");
const todoList = document.querySelector(".todo-list");
const removeAllBtn=document.querySelector(".removeAll-btn");

// var editInput = document.createElement("input");
// var editLi = document.createElement("li");
// editInput.type = "text";
// editLi.innerText = "Edit";
// editLi.classList = "edit";
// todoList.appendChild(editInput);
// todoList.appendChild(editLi);


let todoArray=[];

// inputText.onkeyup = () =>
// {
//     let getUserValue = inputText.value;

//     if(getUserValue.trim() != 0)
//     {
//         addBtn.classList.add("active");
//     }
//     else
//     {
//         addBtn.classList.remove("active");
//     }
// }

addBtn.addEventListener('click', function()
{
    let todoObject=
    {
        id: todoArray.length + 1,
        title: inputText.value,
        isEditing: false,
        hasChecked: false
    }

    
    if(todoObject.title.trim().length !== 0)
    {
        todoArray.push(todoObject);
    }
        
    console.log("Todo List after add: ", todoArray);

    showTask();
    addBtn.classList.remove("active");
})

showTask();
function showTask()
{
    const pendingTasksNo = document.querySelector(".pendingTasks");
    pendingTasksNo.textContent = todoArray.length;

    let newTag = "";
    todoArray.forEach((element, index)=>{
        newTag += `<li>${element.title}<span class="icon"><i class="fa-solid fa-trash-can" onclick="removeTask(${index})"></i><i class="fa fa-edit" onclick="editTask(${index})"></i></span></li>`;
    });

    todoList.innerHTML = newTag;
    inputText.value = "";
}

function removeTask(index)
{   
    let removeTodoName = todoArray.id;

    let removeableTaskIndex = todoArray.findIndex(function (todo)
    {
        return todo.title === removeTodoName
    })
    todoArray.splice(removeableTaskIndex, 1);
    console.log("Todos List after remove: ",todoArray);

    showTask();
}

function editTask(index)
{
//     /*var editedTodoName = prompt('Enter the editable task: ', '');
//     todoArray.forEach(function(todo)
//     {
//         if(todo.title === editedTodoName)
//         {
//             todo.isDoing = true;
//         }
//     })

//     if(editedTodoName !== null && editedTodoName != "")
//         todoArray[index].title = editedTodoName;
//     else 
//         editedTodoName = prompt('Enter the editable task: ', '');        

//     console.log("Todo List: ",todoArray);*/    

    //let id = todoArray[index].id;

    // let todoObj = todoArray.find(todoArray => todoArray.id === id);

    // const filteredObj = todoArray.filter(item => item.id === id);
//     let filteredObj = todoArray.filter(function(item)
//     {
//         if(item.id === id)
//             return item;
//     });
//     console.log("Todo List After filter: ",filteredObj.title);

//     inputText.focus();
//     let editedTask = inputText.innerHTML.title;
//     filteredObj.title = editedTask;

    // console.log("Todo List After edit: ",todoArray + " " + editedTask);
    //showTask();

//     var editLi = todoList.querySelector("i");
     editLi.onclick = editTask;
}

var editTask = function()
{
    console.log("Edit task");
    console.log("Change 'edit' to 'save'");

    var editInput = todoList.querySelector('input[type=text]');
    var l = todoList.querySelector("li");
    var containsClass = todoList.classList.contains("editMode");

    if(containsClass)
    {
		l.innerText=editInput.value;
	}
    else
    {
        editInput.value=l.innerText;
    }
    
    todoList.classList.toggle("editMode");
}

removeAllBtn.addEventListener('click', function()
{
    while(todoArray.length)
    {
        todoArray.pop();
    }
    
    console.log("Todos List After Remove All: ",todoArray);
    showTask();
})

function checkDone(key)
{
    const index = todoArray.findIndex(item => item.id === Number(key));
    todoArray[index].hasChecked = !todoArray[index].hasChecked;
    showTask();
}