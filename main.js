/* Dados DOM */
const form = document.querySelector('#formulario');
const ul = document.querySelector('.listas-de-ideas');
const inputIdea = document.querySelector('#input-idea');
const descriptionIdea = document.querySelector('#idea-description');

/* Event Listeners */
form.addEventListener("submit", start);
inputIdea.addEventListener('keypress', startWithEnter);

/* Start all functions */
function start(e) {
    e.preventDefault();
    
    if(!inputIdea.value) return;

    makeList(ul);
}

function startWithEnter(ev) {
    if(ev.key === 'Enter') {
        if(!inputIdea.value) return;

        start(ev);
    }
}

/* div creator */
function divCreator(ul) {
    const div = document.createElement('div');
    div.setAttribute('class', 'lista-de-idea');

    ul.appendChild(div);
    return div;
}

/* li creator */
function liCreator(valueIdea, detailsIdea) {
    const li = document.createElement('li');
    li.setAttribute('class', 'ul-li');
    li.innerText = valueIdea;
    li.title = detailsIdea;

    inputIdea.value = '';
    descriptionIdea.value = '';

    return li;
}

/* list creator */
function makeList(ul) {
    const div = divCreator(ul);
    const li = liCreator(inputIdea.value, descriptionIdea.value);

    const checkboxesForm = createForm(div);

    div.appendChild(li);
    div.appendChild(checkboxesForm);

    addBtn(div, li);
    delBtn(div, li);

    checkboxesForm.addEventListener('change', checkCompletion);
}

/* btn add */
function addBtn(div, li) {
    const btnAdd = document.createElement('button');
    btnAdd.innerText = '➕';
    
    btnAdd.setAttribute('class', 'add');
    btnAdd.setAttribute('title', 'Adicionar idea');

    div.insertBefore(btnAdd, li);
}

/* btn del */
function delBtn(div, li) {
    const btnClear = document.createElement('button');
    btnClear.innerText = '❌';
    btnClear.setAttribute('class', 'clear');
    btnClear.setAttribute('title', 'Descartar idea');

    div.insertBefore(btnClear, li);
}

/* Btn functions */
document.addEventListener('click', function(event) {
    const el = event.target;
    
    /* Clear btn function */
    if(el.classList.contains('clear')) {
        el.parentElement.remove();
    }

    /* Add btn function */
    if(el.classList.contains('add')) {
        const checkboxesForm = el.parentNode.querySelector('.checkboxes-form');
        
        makeLabel(checkboxesForm);
    }
});

function createForm() {
    const checkboxesForm = document.createElement('form');
    checkboxesForm.setAttribute('class', 'checkboxes-form');

    return checkboxesForm;
}

function makeLabel(checkboxesForm) {
    const label = document.createElement('label');
    let nameLabel = prompt('¿Qué debes hacer para cumplir este objetivo?');

    if(!nameLabel) return;

    label.setAttribute('for', 'task-check');
    label.setAttribute('id', 'label-checkbox');

    label.innerText = nameLabel;

    checkboxesForm.appendChild(label);

    createCheckboxes(label);
}

function createCheckboxes(label) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'task-check';

    label.appendChild(checkbox);
}

/* Finaliza la tarea */
function checkCompletion() {
    const checkboxes = document.querySelectorAll('.checkboxes-form input[type="checkbox"]');
    const allChecked = [...checkboxes].every((checkbox) => checkbox.checked);
  
    if (allChecked) {
      alert('¡Tarea finalizada!');
    }

    saveForm(checkboxes);
}

// div #lista-de-idea creator OK
// li creator OK 
// btn + creator OK
// btn - creator OK
// btn - function OK
// btn + function OK
// form creator OK
// label para checkboxes OK
// Cuándo todos estén checked: msg  OK
// Guardar info: JSON
