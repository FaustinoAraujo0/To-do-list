var tarefas = document.getElementById("tarefas");
var camptext = document.getElementById('text')



camptext.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        adicionar()
    }
})

var i = 0
var res = document.getElementById('res')

function adicionar() { 
    
    var camptext = document.getElementById('text')
    
    if (camptext.value === "") {
        window.alert("Digite uma tarefa!")
    }else {
        var div = document.getElementById('tarefas')

        var checkbox = window.document.createElement('input')
        checkbox.type = "checkbox"
        checkbox.setAttribute('class', 'checkt')

        var tarefa = window.document.createElement('span')
        tarefa.textContent = camptext.value
        tarefa.setAttribute('class', 'classt')

        var apagar = window.document.createElement('button')
        apagar.innerHTML = '<i class="fa-regular fa-trash-can"></i>'
        apagar.setAttribute('class', 'apagart')

        var div2 = window.document.createElement('div')
        div2.setAttribute('class', 'divlista')

        div2.appendChild(checkbox)
        div2.appendChild(tarefa)
        div2.appendChild(apagar)

        div.appendChild(div2)
        
        camptext.value = ""
        i++
        apagar.addEventListener("click", funcaoapagar);
        checkbox.addEventListener("click", function(event) {
            check(event, tarefa)
        })
    }
    
    atualizarcontador()
    
}

function check(event, tf) {

    if (event.target.type === "checkbox") {

        if (event.target.checked) {
            console.log("Checkbox marcada");
            i--
            tf.style.textDecoration = "line-through"
            atualizarcontador()
        } else {
            console.log("Checkbox desmarcada");
            i++
            tf.style.textDecoration = "none"
            atualizarcontador()
        }

    }

 
}

function atualizarcontador () {
    res.innerText = `${i} tarefas pendentes`
}

function funcaoapagar (event) {
    
     let botaoClicado = event.currentTarget;
    let tarefa = botaoClicado.parentElement;
    let checkbox = tarefa.querySelector("input[type='checkbox']");

    if (!checkbox.checked) {
        i--;
    }

    tarefa.remove();
    atualizarcontador();
    
}

function cleanall() {
    var elementos = window.document.getElementsByClassName("divlista")

    while (elementos.length > 0) {
        elementos[0].remove();
    }

    i = 0;
    atualizarcontador()
}





