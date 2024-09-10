let Nome = document.getElementById("Nome")
let Email = document.getElementById("Email")
let Mensagem = document.getElementById("Mensagem")
let Nnome = document.getElementById("Nnome")
let Nemail = document.getElementById("Nemail")
let Nmensagem = document.getElementById("Nmensagem")

function VerificarForm(){

    if(Nome.value.length && Email.value.length && Mensagem.value.length){
        alert("Mensagem Enviada com Sucesso!")

    }
    else{
        if(!Nome.value.length){
            Nome.style.border = "1px solid red"
            Nnome.style.opacity = "100%"
            
        }

        if(!Email.value.length){
            Email.style.border = "1px solid red"
            Nemail.style.opacity = "100%"
        }

        if(!Mensagem.value.length){
            Mensagem.style.border = "1px solid red"
            Nmensagem.style.opacity = "100%"
        }

    }

}

function DesvermelharNome(){
    if(Nome.value.length){
        Nome.style.border = "1px solid black"
        Nnome.style.opacity = "0%"
    }
}

function DesvermelharEmail(){
    if(Email.value.length){
        Email.style.border = "1px solid black"
        Nemail.style.opacity = "0%"
    }
}

function DesvermelharMensagem(){
    if(Mensagem.value.length){
        Mensagem.style.border = "1px solid black"
        Nmensagem.style.opacity = "0%"
    }
}
