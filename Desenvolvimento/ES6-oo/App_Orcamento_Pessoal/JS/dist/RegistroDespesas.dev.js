"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DB =
/*#__PURE__*/
function () {
  function DB() {
    _classCallCheck(this, DB);

    if (localStorage.getItem('id') === null) {
      localStorage.setItem('id', 0);
    }
  }

  _createClass(DB, [{
    key: "getProximoID",
    value: function getProximoID() {
      var proximoID = localStorage.getItem('id');
      return parseInt(proximoID) + 1;
    }
  }, {
    key: "gravarDespesa",
    value: function gravarDespesa(despesa) {
      var id = this.getProximoID();
      localStorage.setItem(id, JSON.stringify(despesa));
      localStorage.setItem('id', id);
    }
  }]);

  return DB;
}();

var dataBase = new DB();

var cadastrarDespesa = function cadastrarDespesa() {
  var ano = document.getElementById("ano");
  var mes = document.getElementById("mes");
  var dia = document.getElementById("dia");
  var tipo = document.getElementById("tipo");
  var descricao = document.getElementById("descricao");
  var valor = document.getElementById("valor");

  if (validarFormulario(ano, mes, dia, tipo, descricao, valor)) {
    var despesa = newDespesaFactory(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value);
    dataBase.gravarDespesa(despesa);
    alert("Despesa cadastrada com sucesso!");
    ano.value = '';
    mes.value = '';
    dia.value = '';
    tipo.value = '';
    descricao.value = '';
    valor.value = '';
    ano.style.border = "1px solid #ced4da";
    mes.style.border = "1px solid #ced4da";
    dia.style.border = "1px solid #ced4da";
    tipo.style.border = "1px solid #ced4da";
    descricao.style.border = "1px solid #ced4da";
    valor.style.border = "1px solid #ced4da";
  }
};

var newDespesaFactory = function newDespesaFactory(ano, mes, dia, tipo, descricao, valor) {
  return {
    ano: ano,
    mes: mes,
    dia: dia,
    tipo: tipo,
    descricao: descricao,
    valor: valor
  };
};

var validarFormulario = function validarFormulario(ano, mes, dia, tipo, descricao, valor) {
  var valido = 0;

  if (ano.value == "" || ano.value == undefined || ano.value == null) {
    ano.style.border = "1px solid red";
  } else {
    ano.style.border = "1px solid #ced4da";
    valido += 1;
  }

  if (mes.value == "" || mes.value == undefined || mes.value == null) {
    mes.style.border = "1px solid red";
  } else {
    mes.style.border = "1px solid #ced4da";
    valido += 1;
  }

  if (dia.value == "" || parseInt(dia.value) > 31 || parseInt(dia.value) < 0 || dia.value == undefined || dia.value == null) {
    dia.style.border = "1px solid red";
  } else {
    dia.style.border = "1px solid #ced4da";
    valido += 1;
  }

  if (tipo.value == "" || tipo.value == undefined || tipo.value == null) {
    tipo.style.border = "1px solid red";
  } else {
    tipo.style.border = "1px solid #ced4da";
    valido += 1;
  }

  if (descricao.value == "" || descricao.value == undefined || descricao.value == null) {
    descricao.style.border = "1px solid red";
  } else {
    descricao.style.border = "1px solid #ced4da";
    valido += 1;
  }

  if (valor.value == "" || valor.value == undefined || valor.value == null) {
    valor.style.border = "1px solid red";
  } else {
    valor.style.border = "1px solid #ced4da";
    valido += 1;
  }

  if (valido == 6) {
    return true;
  } else {
    return false;
  }
};