"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DataBase =
/*#__PURE__*/
function () {
  function DataBase() {
    _classCallCheck(this, DataBase);
  }

  _createClass(DataBase, [{
    key: "recuperarListaDespesas",
    value: function recuperarListaDespesas() {
      var despesas = Array();
      var id = localStorage.getItem('id'); //recuperar todas despesas cadastradas no localStorage

      for (var i = 1; i <= id; i++) {
        var despesa = JSON.parse(localStorage.getItem(i));

        if (despesa != null) {
          despesa.id = i;
          despesas.push(despesa);
        }
      }

      return despesas;
    }
  }, {
    key: "pesquisar",
    value: function pesquisar(despesa) {
      var despesasFiltradas = Array();
      despesasFiltradas = this.recuperarListaDespesas(); //ano

      if (despesa.ano != '') {
        despesasFiltradas = despesasFiltradas.filter(function (d) {
          return d.ano == despesa.ano;
        });
      } //mes


      if (despesa.mes != '') {
        despesasFiltradas = despesasFiltradas.filter(function (d) {
          return d.mes == despesa.mes;
        });
      } //dia


      if (despesa.dia != '') {
        despesasFiltradas = despesasFiltradas.filter(function (d) {
          return d.dia == despesa.dia;
        });
      } //tipo


      if (despesa.tipo != '') {
        despesasFiltradas = despesasFiltradas.filter(function (d) {
          return d.tipo == despesa.tipo;
        });
      } //descricao


      if (despesa.descricao != '') {
        despesasFiltradas = despesasFiltradas.filter(function (d) {
          return d.descricao == despesa.descricao;
        });
      } //valor


      if (despesa.valor != '') {
        despesasFiltradas = despesasFiltradas.filter(function (d) {
          return d.valor == despesa.valor;
        });
      }

      return despesasFiltradas;
    }
  }]);

  return DataBase;
}();

var data = new DataBase();

var gerarListaDespesas = function gerarListaDespesas(despesas) {
  var listaDespesas = document.getElementById("listaDespesas");
  listaDespesas.innerHTML = ''; //percorrer o array despesas listando cada despesa de forma dinâmica

  despesas.forEach(function (despesa) {
    //criando a linha (tr)
    var linha = listaDespesas.insertRow(); //criando a coluna (td)

    switch (despesa.tipo) {
      case '1':
        despesa.tipo = "Alimentação";
        break;

      case '2':
        despesa.tipo = "Educação";
        break;

      case '3':
        despesa.tipo = "Lazer";
        break;

      case '4':
        despesa.tipo = "Saúde";
        break;

      case '5':
        despesa.tipo = "Transporte";
        break;
    }

    linha.insertCell(0).innerHTML = "".concat(despesa.dia, "/").concat(despesa.mes, "/").concat(despesa.ano);
    linha.insertCell(1).innerHTML = despesa.tipo;
    linha.insertCell(2).innerHTML = despesa.descricao;
    linha.insertCell(3).innerHTML = "R$".concat(despesa.valor); //criar botão de exclusão

    var btn = document.createElement('button');
    btn.className = "btn btn-danger";
    btn.innerHTML = "<i class='fas fa-times'></i>";
    linha.insertCell(4).append(btn);

    btn.onclick = function () {
      if (confirm("Você tem certeza de que deseja deletar este registro?\nEsta ação não poderá ser desfeita futuramente")) {
        localStorage.removeItem(despesa.id);
        window.location.reload();
        alert("Registro removido com sucesso!");
      }
    };
  });
};

var carregaListaDespesas = function carregaListaDespesas() {
  var despesas = Array();
  despesas = data.recuperarListaDespesas();
  gerarListaDespesas(despesas);
};

var pesquisarDespesa = function pesquisarDespesa() {
  var ano = document.getElementById("ano").value;
  var mes = document.getElementById("mes").value;
  var dia = document.getElementById("dia").value;
  var tipo = document.getElementById("tipo").value;
  var descricao = document.getElementById("descricao").value;
  var valor = document.getElementById("valor").value;
  var despesa = newDespesaFactory(ano, mes, dia, tipo, descricao, valor);
  var despesas = data.pesquisar(despesa);
  gerarListaDespesas(despesas);
};