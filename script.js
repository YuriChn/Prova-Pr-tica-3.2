document.addEventListener('DOMContentLoaded', function() {
    //*  referencia do HTML *//
    const valorContador = document.getElementById('valor-contador');
    const incrementarBtn = document.getElementById('incrementar-btn');
    const decrementarBtn = document.getElementById('decrementar-btn');
    const resetarBtn = document.getElementById('resetar-btn');
    const mensagemAlerta = document.getElementById('mensagem-alerta');
    
    let contador = 0;
    
    //* Função Update Contador*//
    function atualizarContador() {
        valorContador.textContent = contador;
        
        if (contador > 0) {
            valorContador.style.color = '#4CAF50';
            mensagemAlerta.style.display = 'none';
        } else if (contador < 0) {
            valorContador.style.color = '#f44336';
            mensagemAlerta.textContent = 'O valor será Negativo, Incremente';
            mensagemAlerta.style.display = 'block';
        } else {
            valorContador.style.color = '#4CAF50';
            mensagemAlerta.style.display = 'none';
        }
    }
    
    //* Eventos *//
    incrementarBtn.addEventListener('click', function() {
        contador++;
        atualizarContador();
    });
    
    decrementarBtn.addEventListener('click', function() {
        contador--;
        atualizarContador();
    });
    
    resetarBtn.addEventListener('click', function() {
        contador = 0;
        atualizarContador();
    });
    
    atualizarContador();
});
