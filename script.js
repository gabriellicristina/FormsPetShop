document.getElementById('cadastroForm').addEventListener('submit', cadastrarCachorro);

function cadastrarCachorro(event) {
  event.preventDefault();

  var nomeCachorro = document.getElementById('nomeCachorro').value;
  var nomeDono = document.getElementById('nomeDono').value;
  var telefone = document.getElementById('telefone').value;
  var diaAgendamento = document.getElementById('diaAgendamento').value;

  var novoCachorro = {
    nomeCachorro: nomeCachorro,
    nomeDono: nomeDono,
    telefone: telefone,
    diaAgendamento: diaAgendamento
  };

  exibirCachorro(novoCachorro);
  limparFormulario();
}

function exibirCachorro(cachorro) {
  var listaCachorros = document.getElementById('listaCachorros');
  var itemCachorro = document.createElement('li');
  itemCachorro.textContent = `Nome do Cachorro: ${cachorro.nomeCachorro}, Nome do Dono: ${cachorro.nomeDono}, Telefone: ${cachorro.telefone}, Dia do Agendamento: ${cachorro.diaAgendamento}`;
  listaCachorros.appendChild(itemCachorro);
}

function limparFormulario() {
  document.getElementById('nomeCachorro').value = '';
  document.getElementById('nomeDono').value = '';
  document.getElementById('telefone').value = '';
  document.getElementById('diaAgendamento').value = '';
}

limparFormulario();
exibirCachorrosCadastrados();

function exibirCachorrosCadastrados() {
  var listaCachorros = document.getElementById('listaCachorros');
  listaCachorros.innerHTML = '';

  // Aqui você pode substituir esse trecho pelo seu código de obtenção dos cachorros cadastrados.
  // Vou adicionar um exemplo para ilustrar:
  var cachorrosCadastrados = [
    { nomeCachorro: 'Rex', nomeDono: 'João', telefone: '123456789', diaAgendamento: '2023-07-20' },
    { nomeCachorro: 'Mel', nomeDono: 'Maria', telefone: '987654321', diaAgendamento: '2023-07-21' },
  ];

  cachorrosCadastrados.forEach(function(cachorro) {
    var itemCachorro = document.createElement('li');
    itemCachorro.textContent = `Nome do Cachorro: ${cachorro.nomeCachorro}, Nome do Dono: ${cachorro.nomeDono}, Telefone: ${cachorro.telefone}, Dia do Agendamento: ${cachorro.diaAgendamento}`;
    listaCachorros.appendChild(itemCachorro);
  });
}