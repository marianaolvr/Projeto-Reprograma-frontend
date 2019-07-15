const botao = document.querySelector('.btnEnviar')
botao.addEventListener("click", enviarEmail)
function enviarEmail () {
  this.preventDefault()
  const nomeCompleto = document.querySelector(".inputNomeCompleto").value
  const instituicaoEnsino = document.querySelector(".inputEscola").value
  const endereco = document.querySelector(".inputEndereco").value
  const email = document.querySelector(".inputEmail").value
  const reclamacao = {
    nomeCompleto, instituicaoEnsino, endereco, email
  }

  fetch(
    'https://ahistoriadetodos.herokuapp.com/reclamacoes/send-email',
    {
      method: 'POST',
      body: JSON.stringify(reclamacao),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(() =>{
    nomeCompleto = ''
    instituicaoEnsino = ''
    endereco = ''
    email = ''
  })

  alert("E-mail enviado!")

}




