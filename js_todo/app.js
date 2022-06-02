//get the element to javascript
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterTodo = document.querySelector(".filter-todo");

//add event listener
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteTodo);
filterTodo.addEventListener("click",filterOption);


//add todo
function addTodo(e){
    e.preventDefault();
 const todoDiv = document.createElement('div');
 todoDiv.classList.add("todo");

 const newTodo = document.createElement('li');
 newTodo.innerText = todoInput.value;
 newTodo.classList.add("todo-item");
 
 todoInput.value = "";
 todoDiv.appendChild(newTodo);
 console.log(todoDiv);

 //create the completedButton
const completedButton = document.createElement("button")
completedButton.innerHTML='<i class="fa fa-check"></i>';
// console.log(completedButton)
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

//create the trash Button
const trashButton = document.createElement("button")
trashButton.innerHTML='<i class="fa fa-trash"></i>';
// console.log(trashButton)
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);
todoList.appendChild(todoDiv);
}

//add is done

//delete a todo
function deleteTodo(e){
    e.preventDefault();
   const item= e.target;
   if(item.classList[0]==="trash-btn"){
       const todo = item.parentElement;
    //    console.log(todo);
    todo.classList.add("fall")
    todo.addEventListener("transitionend",(e)=>{
        todo.remove();
    });
   }
   if(item.classList[0]==="complete-btn"){
       const todo = item.parentElement;
       todo.classList.toggle("completed");
   }
}

//filter todo
function filterOption(e){
    e.preventDefault();
    const todos = todoList.childNodes;
    // console.log(todo);
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
                case "completed":
                    if(todo.classList.contains("completed")){
                        todo.style.display="flex";
                    }else{
                        todo.style.display="none";
                    }
                    break;
                    case "uncompleted":
                    if(!todo.classList.contains("completed")){
                        todo.style.display="flex";
                    }else{
                        todo.style.display="none";
                    }
        }
    })
}