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

        var tarefa = window.document.createElement('span')
        tarefa.textContent = camptext.value

        var apagar = window.document.createElement('button')
        apagar.innerText = "x"
        apagar.style.marginLeft = "30px"

        var p = window.document.createElement('p')

        p.appendChild(checkbox)
        p.appendChild(tarefa)
        p.appendChild(apagar)

        div.appendChild(p)
        
        camptext.value = ""
        i++
        apagar.addEventListener("click", funcaoapagar);
        checkbox.addEventListener("click", check)
    }
    
    atualizarcontador()
    
}

function check(event) {

    if (event.target.type === "checkbox") {

        if (event.target.checked) {
            console.log("Checkbox marcada");
            i--
            atualizarcontador()
        } else {
            console.log("Checkbox desmarcada");
            i++
            atualizarcontador()
        }

    }

 
}

function atualizarcontador () {
    res.innerText = `${i} tarefas pendentes`
}

function funcaoapagar (event) {
    
    let botaoClicado = event.target;

    let tarefa = botaoClicado.parentElement;

    tarefa.remove();
    
}





