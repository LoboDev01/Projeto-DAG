class Pedido {
    constructor() {
        this.arrayPedido = [];
    }

    salvar() {
       let pedido = this.lerDados();
       
       if(this.validaCampos(pedido)); {
         this.adicionar(pedido);  
       }

       this.listaTabela();
       this.cancelar();

    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        
        for(let i = 0; i < this.arrayPedido.length; i++) {
            let tr = tbody.insertRow();

            let td_numeroPedido = tr.insertCell();
            let td_horaPedido = tr.insertCell();
            let td_cliente = tr.insertCell();
            let td_vendedor = tr.insertCell();
            let td_status = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_numeroPedido.innerText = this.arrayPedido[i].numeroPedido;
            td_horaPedido.innerText = this.arrayPedido[i].horaPedido;
            td_cliente.innerText = this.arrayPedido[i].cliente;
            td_vendedor.innerText = this.arrayPedido[i].vendedor;
            td_status.innerText = this.arrayPedido[i].status;


            let imgEdit = document.createElement('img');
            imgEdit.src = "assets/logo_lixeira.png"

            td_acoes.appendChild(imgEdit);
        }
    }


    adicionar(pedido) {
        this.arrayPedido.push(pedido);
       
    }

    
    lerDados() {
        let pedido = {}

        pedido.numeroPedido = document.getElementById("numeroPedido").value;
        pedido.horaPedido = document.getElementById("horaPedido").value;
        pedido.cliente = document.getElementById("cliente").value;
        pedido.vendedor = document.getElementById("vendedor").value;
        pedido.status = document.getElementById("status").value;

        return pedido;
    }

    validaCampos(pedido) {
        let msg = '';

        if(pedido.numeroPedido == '') {
            msg += '- informe o numero do pedido \n';
        }

        if(pedido.horaPedido == '') {
            msg += '-informe a hora do pedido \n';
        }

        if(pedido.cliente == '') {
            msg += '- informe o cliente \n';
        }

        if(pedido.vendedor == '') {
            msg += '- selecione o vendedor \n';
        }

        if(pedido.status == '') {
            msg += '- selecione o status do pedido \n';
        }

        if(msg != '') {
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
    }

    deletar() {

    }

}

var pedido = new Pedido();

