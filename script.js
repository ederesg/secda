document.getElementById("material-form").addEventListener("submit", function(event){
    event.preventDefault();
    
    const formData = {
        nome: document.getElementById("nome").value,
        setor: document.getElementById("setor").value,
        tipo: document.getElementById("tipo").value,
        descricao: document.getElementById("descricao").value,
        quantidade: document.getElementById("quantidade").value,
        prioridade: document.getElementById("prioridade").value,
        justificativa: document.getElementById("justificativa").value
    };

    fetch("https://seuservidor.com/registro", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("mensagem").textContent = "Solicitação enviada com sucesso!";
    })
    .catch(error => {
        console.error("Erro:", error);
        document.getElementById("mensagem").textContent = "Erro ao enviar a solicitação.";
    });
});
