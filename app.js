const inputTask=document.querySelector('.todo__input');
const btnAddTask=document.querySelector('.todo__btn');
const listTasks=document.querySelector('.todo__tasks');
const advisor=document.querySelector('.todo__advisor');

const updateAdvisor=()=>{
    const tasks=document.querySelectorAll('.todo__task');
    if (tasks.length===0) {
        advisor.textContent='Dont have yet';
    } else {
        advisor.textContent='Here your tasks';
    }
};



const createTask=(item)=>{
    const liElement=document.createElement('li');
    liElement.classList.add('todo__task');

    const pElement=document.createElement('p');
    pElement.textContent=item;
    liElement.appendChild(pElement);

    const iconsContainer=document.createElement('div');
    iconsContainer.classList.add('todo__icons');
    liElement.appendChild(iconsContainer);

    const iconElementCheck=document.createElement('img');
    iconElementCheck.setAttribute('src', 'assets/icons8-comprobado.svg');
    iconElementCheck.addEventListener('click',(e)=>{
        pElement.classList.toggle('done--task');
    });
    iconsContainer.appendChild(iconElementCheck);

    const iconElementTrash=document.createElement('img');
    iconElementTrash.setAttribute('src', 'assets/icons8-basura.svg');
    iconElementTrash.addEventListener('dblclick', (e)=>{
        liElement.remove();
        updateAdvisor();
    });
    iconsContainer.appendChild(iconElementTrash);

    listTasks.appendChild(liElement);

    updateAdvisor();
};






const addTask=(event)=>{
    if (inputTask.value) {
        console.log(inputTask);
        createTask(inputTask.value);
        inputTask.value='';
    } else {
        console.log('no tiene texto');
    }

};

btnAddTask.addEventListener('click', addTask);
