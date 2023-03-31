 //Seleção de elementos

const todoInput = document.querySelector("#input-text");
const todoList = document.querySelector(".todo-container");
const todoAddTask = document.querySelector("#add-btn");



//funçoes

const saveTodo = (text)=>{
    const todo = document.createElement("div");
    todo.classList.add("todo-list");
    
    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);
    
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("done-btn");
    doneBtn.innerHTML = "✅";
    todo.append(doneBtn);
    
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.innerText = "❌";
    todo.append(removeBtn);
    console.log(todo);
    
    todoList.append(todo);
    
    todoInput.value = "";
    todoInput.focus();
    
}


//eventos

todoAddTask.addEventListener('click', (e)=>/*função anonima que diz o que sera feito do evento*/{
    e.preventDefault() /*evita com que o 'vazio' seja enviado quando o botão é precionado*/;
    const inputValue = todoInput.value;
   
    if (inputValue){
       saveTodo(inputValue);
    }

 });

document.addEventListener("click", (e)=>{//pega todos os eventos de click
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    if(targetEl.classList.contains("done-btn")){
       parentEl.classList.toggle("done");
    //poderia ter colocado .add, mas nao daria de desfazer a ação se o botao fosse clicado de novo. O .toggle permite isso
}
     if(targetEl.classList.contains("remove-btn")){
      parentEl.remove();
}
});

