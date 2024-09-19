
function Entrar(p) {
    p.preventDefault()
    if (document.getElementById('Usuario').value == 'Paulin' && document.getElementById('Senha').value == '111') {
        alert('Login feito com sucesso!')
        location.href = './cadastro.html'
    }
    else {
        alert('Ta errado ai animal')
    }   
}

let contatos = [];

const inputNome = document.getElementById('Nome');
const inputSobrenome = document.getElementById('Sobrenome');
const inputEndereco = document.getElementById('Endereço');
const inputTelefone = document.getElementById('Telefone');

let currentIndex = -1;

function Adicionar(nome, sobrenome, endereco, telefone) {
    contatos.push({ nome: nome, sobrenome: sobrenome, endereco: endereco, telefone: telefone });
}

function DesativarBotao(buttons) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

function AtivarBotao(buttons) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }
}

function DesativarCRUD() {
    DesativarBotao([document.getElementById('Incluir'), document.getElementById('Editar'), document.getElementById('Excluir')]);
}

function AtivarCRUD() {
    AtivarBotao([document.getElementById('Incluir'), document.getElementById('Editar'), document.getElementById('Excluir')]);
}

function DesativarSalvarCancelar() {
    DesativarBotao([document.getElementById('Salvar'), document.getElementById('Cancelar')]);
}

function AtivarSalvarCancelar() {
    AtivarBotao([document.getElementById('Salvar'), document.getElementById('Cancelar')]);
}

function incluir() {
    inputNome.value = '';
    inputSobrenome.value = '';
    inputEndereco.value = '';
    inputTelefone.value = '';
    currentIndex = -1;

    inputNome.disabled = false;
    inputSobrenome.disabled = false;
    inputEndereco.disabled = false;
    inputTelefone.disabled = false;

    DesativarCRUD
();
    AtivarSalvarCancelar();

    inputNome.focus();
}

function salvar() {
    if (inputNome.value == '' || inputSobrenome.value == '' || inputEndereco.value == '' || inputTelefone.value == '') {
        alert('Todos os campos precisam estar preenchidos!');
    } else {
        if (currentIndex === -1) {
            Adicionar(inputNome.value, inputSobrenome.value, inputEndereco.value, inputTelefone.value);
        } else {
            contatos[currentIndex] = {
                nome: inputNome.value,
                sobrenome: inputSobrenome.value,
                endereco: inputEndereco.value,
                telefone: inputTelefone.value
            };
        }
        cancelar();
    }
}

function editar() {
    if (currentIndex === -1) {
        alert('Nenhum contato selecionado para editar!');
    } else {
        inputNome.disabled = false;
        inputSobrenome.disabled = false;
        inputEndereco.disabled = false;
        inputTelefone.disabled = false;

        DesativarCRUD
    ();
        AtivarSalvarCancelar();

        inputNome.focus();
    }
}

function excluir() {
    if (currentIndex === -1) {
        alert('Nenhum contato selecionado para excluir!');
    } else {
        var confirma = confirm('Deseja realmente excluir este contato?');
        if (confirma) {
            contatos.splice(currentIndex, 1);
            cancelar();
        }
    }
}

function cancelar() {
    inputNome.disabled = true;
    inputSobrenome.disabled = true;
    inputEndereco.disabled = true;
    inputTelefone.disabled = true;

    inputNome.value = '';
    inputSobrenome.value = '';
    inputEndereco.value = '';
    inputTelefone.value = '';
    currentIndex = -1;

    AtivarCRUD();
    DesativarSalvarCancelar
();
}

function mostrarContato(index) {
    if (contatos.length > 0 && index >= 0 && index < contatos.length) {
        inputNome.value = contatos[index].nome;
        inputSobrenome.value = contatos[index].sobrenome;
        inputEndereco.value = contatos[index].endereco;
        inputTelefone.value = contatos[index].telefone;
        currentIndex = index;

        inputNome.disabled = true;
        inputSobrenome.disabled = true;
        inputEndereco.disabled = true;
        inputTelefone.disabled = true;

        AtivarCRUD();
        DesativarSalvarCancelar
    ();
    }
}

function allback() {
    mostrarContato(0);
}

function back() {
    if (currentIndex > 0) {
        mostrarContato(currentIndex - 1);
    }
}

function next() {
    if (currentIndex < contatos.length - 1) {
        mostrarContato(currentIndex + 1);
    }
}

function allnext() {
    mostrarContato(contatos.length - 1);
}

cancelar();
