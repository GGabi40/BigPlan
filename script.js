/* Dados DOM */
const form = document.querySelector('#formulario');
const ul = document.querySelector('.listas-de-ideas');
const inputIdea = document.querySelector('#input-idea');
const description = document.querySelector('#idea-description');

/* Imp! Organizar código para q se guarde
en JSON. */

/* 
-- TODO:
[X] EVENT LISTENER
[X] START INPUT -> con Enter key o form submit
[] CREADOR DIV (dentro del ul)
[] CREADOR LI (dentro de div)
[] CREADOR LISTA -> 
*/

ideaList = [];

class Idea {
    constructor(idea, description) {
        this.idea = idea;
        this.description = description;
        this.completed = false;
    }

    /* Create div and li */
    render() {
        const div = document.createElement('div');
        div.setAttribute('class', 'lista-de-idea');

        const li = document.createElement('li');
        li.setAttribute('class', 'ul-li');
        li.innerText = this.idea;
        li.title = this.description;

        const checkboxesForm = this.createForm();
        const addButton =  this.createAddButton(div, li);
        const delButton = this.createDeleteButton(div);

        ul.appendChild(div);

        // checkboxesForm.addEventListener('change', this.chechCompletion.bind(this));
    }

    /* Create form of checkboxes */
    createForm() {
        const checkboxesForm = document.createElement('form');
        checkboxesForm.setAttribute('class', 'checkboxes-form');
        return checkboxesForm;
    }

    /* Create Add Button */
    createAddButton(div, li) {
        const btnAdd = document.createElement('button');
        btnAdd.innerText = '➕';
        btnAdd.setAttribute('class', 'add');
        btnAdd.setAttribute('title', 'Adicionar idea');
        div.appendChild(btnAdd);
        div.appendChild(li);

        btnAdd.addEventListener('click', () => {
            const checkboxesForm = div.querySelector('.checkboxes-form');
            this.makeLabel(checkboxesForm);
        });
    }

    /* Create Del Button */
    
}


form.addEventListener('submit', newIdea);
inputIdea.addEventListener('keypress', newIdeaEnter);

function newIdea(e) {
    e.preventDefault();

    if(!inputIdea.value) return;

    const newIdea = new Idea(inputIdea.value, description.value);

    ideaList.push(newIdea);
    newIdea.render();

    inputIdea.value = '';
    description.value = '';
}


function newIdeaEnter(event) {
    if(event.key === 'Enter') {
        if(!inputIdea.value) return;

        newIdea(event);
    }
}