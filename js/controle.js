let input = document.getElementById("input-tarefa");
let btn_add = document.getElementById("btn-add");
let main = document.getElementById("area-tarefas");
let contador = 0;

function addTarefa(){
    //pegar o valor digitado no input
    let valor_input = input.value;

    //validar os dados digitados
    if((valor_input !== "") && (valor_input !== null) && (valor_input !== undefined)){

        // contador recebe +1 toda vez que um item for criado / Será usado em varias funções
        ++contador;

        let novo_item = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="icone-tarefa">
            <i id="icone${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="texto-tarefa">
            ${input.value}
        </div>
        <div class="area-delete-tarefa">
            <button onclick="deletarTarefa(${contador})" class="delete">
                <i class="mdi mdi-delete"><span>Deletar</span></i>
            </button>
        </div>
    </div>`;

    // O main(area-tarefas) vai receber os itens já existentes, mais 'o novo_item'
    main.innerHTML += novo_item;

    // Zerar o campo input
    input.value = "";
    input.focus();
    }
}



// Função para deletar a tarefa selecionada  
function deletarTarefa(id_tarefa){

    // pega o valor que ta sendo passado na funçãao deletarTarefa(contador) e armazena na id_tarefa
    var tarefa = document.getElementById(id_tarefa);

    // remove a tarefa com o id_tarefa passado
    tarefa.remove();
}




// Marcar a tarefa selecionada
function marcarTarefa(id_tarefa){
    var item = document.getElementById(id_tarefa);
    var classe = item.getAttribute('class');
    console.log(classe);

    if(classe == "item"){
        item.classList.add('clicado');

        var icone = document.getElementById("icone"+id_tarefa);
        icone.classList.remove("mdi-circle-outline");
        icone.classList.add("mdi-check-circle");

        item.parentNode.appendChild(item);
    }
    else{
        item.classList.remove('clicado');

        var icone = document.getElementById("icone"+id_tarefa);
        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");

        item.parentNode.appendChild(item);

    }
}



// Adiciona um item ao clicar na tecla ENTER
input.addEventListener("keyup", function(evento){

    // Se a tecla 13(ENTER) for clicada p botão btn_sdd será clicado automaticamente
    if(evento.keyCode === 13){
        event.preventDefault();
        btn_add.click();
    }
})