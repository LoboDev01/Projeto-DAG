class Pedido {
    constructor() {
        
        this.arrayPedidos = [];
        this.editId = null;
    }

    salvar() {
       let pedido = this.lerDados();
       
       if(this.validaCampos(pedido)) {
            if(this.editId == null) {
                this.adicionar(pedido);
            } else {
                this.atualizar(this.editId, pedido);
            }
              this.listaTabela();
                this.cancelar();
       }

       

    }

    listaTabela() {
        console.log("teste")
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        
        for(let i = 0; i < this.arrayPedidos.length; i++) {
            let tr = tbody.insertRow();

            let td_numeroPedido = tr.insertCell();
            let td_horaPedido = tr.insertCell();
            let td_cliente = tr.insertCell();
            let td_vendedor = tr.insertCell();
            let td_status = tr.insertCell();
            let td_separando = tr.insertCell();
            let td_finalizado = tr.insertCell();
            let td_tempoFinal = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_numeroPedido.innerText = this.arrayPedidos[i].numeroPedido;
            td_horaPedido.innerText = this.arrayPedidos[i].horaPedido;
            td_cliente.innerText = this.arrayPedidos[i].cliente;
            td_vendedor.innerText = this.arrayPedidos[i].vendedor;
            td_status.innerText = this.arrayPedidos[i].status;
            td_separando.innerText = this.arrayPedidos[i].separando ?? "";
            td_finalizado.innerText = this.arrayPedidos[i].finalizado ?? "";
            td_tempoFinal.innerText = this.arrayPedidos[i].tempotd_tempoFinal ?? "";

            let imgEdit = document.createElement('img');
            imgEdit.src = "assets/editar.svg"
            imgEdit.setAttribute("onclick", "pedido.preparaEdicao("+ JSON.stringify(this.arrayPedidos[i]) +")")
            

            let imgDelete = document.createElement('img');
            imgDelete.src = "assets/excluir.png";
            imgDelete.setAttribute("onclick", "pedido.deletar("+ this.arrayPedidos[i].numeroPedido +")")

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);
            
        }
    }


    adicionar(pedido) {
        this.arrayPedidos.push(pedido);
       
    }

    atualizar(id, pedido) {
        for (let i = 0; i < this.arrayPedidos.length; i++){
            if(this.arrayPedidos[i].id == id) {
                this.arrayPedidos[i].numeroPedido = pedido.numeroPedido;
                this.arrayPedidos[i].horaPedido = pedido.horaPedido;
                this.arrayPedidos[i].cliente = pedido.cliente;
                this.arrayPedidos[i].vendedor = pedido.vendedor;
                this.arrayPedidos[i].status = pedido.status;
            }
        }
    }

    preparaEdicao(dados) {
        this.editId = dados.id;

        document.getElementById("numeroPedido").value = dados.numeroPedido;
        document.getElementById("horaPedido").value = dados.horaPedido;
        document.getElementById("cliente").value = dados.cliente;
        document.getElementById("vendedor").value = dados.vendedor;
        document.getElementById("status").value = dados.status;

        document.getElementById('btn1').innerText = 'Atualizar';
        
    }
    
    lerDados() {
        let pedido = {}

        pedido.id = document.getElementById("numeroPedido").value;;
        pedido.numeroPedido = document.getElementById("numeroPedido").value;
        pedido.horaPedido = document.getElementById("horaPedido").value;
        pedido.cliente = document.getElementById("cliente").value;
        pedido.vendedor = document.getElementById("vendedor").value;
        pedido.status = document.getElementById("status").value;

        return pedido;
    }

    validaCampos(pedido) {
        let msg = '';

        if(pedido.numeroPedido === '') {
            msg += '- informe o numero do pedido \n';
        }

        if(pedido.horaPedido === '') {
            msg += '-informe a hora do pedido \n';
        }

        if(pedido.cliente === '') {
            msg += '- informe o cliente \n';
        }

        if(pedido.vendedor === '') {
            msg += '- selecione o vendedor \n';
        }

        if(pedido.status === '') {
            msg += '- selecione o status do pedido \n';
        }

        if(msg !== '') {
            alert(msg);
            return false
        }

        return true;
    }

    cancelar() {
        document.getElementById("numeroPedido").value = '';
        document.getElementById("horaPedido").value = '';
        document.getElementById("cliente").value = '';
        document.getElementById("vendedor").value = '';
        document.getElementById("status").value = '';

        document.getElementById('btn1').innerText = 'Salvar';
        this.editId = null;

    }

    deletar(numeroPedido) {
        if(confirm('Deseja realmente deletar o pedido ' + numeroPedido)){
            let tbody = document.getElementById('tbody');
            
            for(let i = 0; i < this.arrayPedidos.length; i++) {
                if(this.arrayPedidos[i].numeroPedido == numeroPedido) {
                    this.arrayPedidos.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
        }
    }
}

var pedido = new Pedido();

