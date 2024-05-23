const form = document.getElementById('formulario')
let linhas = ''

form.addEventListener ('submit', function(e) {
    e.preventDefault()

    const inputNome = document.getElementById('campoNome')
    const inputFone = document.getElementById('campoNumero')

    let linha = '<tr>'
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputFone.value}</td>`
    linha += '<tr>'
    linhas += linha

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
})

