<template>
  <div id="app" class="tudo">
    <TelaInicial class="tela-inicial"/>
  </div>
</template>
<script>
import TelaInicial from './components/tela_inicial/tela_inicial.vue'
export default {
  name: 'App',
  components: {
    TelaInicial
  }
}
</script>
<style>
  body{
    margin: 0px;
    height: 100%;
  }

  .tudo{
    position: absolute;
    right: 0px;
    left: 0px;
    bottom: 0px;
    top: 0px;
  }

  .tela-inicial{
    position: absolute;
    right: 0px;
    left: 0px;
    bottom: 0px;
    top: 0px;
  }

  .cabecalho-conteudo{
    padding: 0px;
    margin: 0px;
    font-family: "Aldrich";
    text-align: center;
  }

  .minha-tabela{
    border: solid;
    border-radius: 10px;
    padding: 2px;
    letter-spacing: 2px;
    font-family: "Arial";
    width: fit-content;
  }

  .tabela{
    display: flex;
    flex-flow: row;
    justify-content: center;
  }

  .tabela table tr th{
    background-color: black;
    color: white;
    padding-left: 8px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .tabela table :active {
    color: black;
  }

  .tabela table :visited{
    color: black;
  }

  .tabela table tr:hover{
    background-color: grey;
  }

  .tabela table tr td:first-of-type{
    font-weight: bold;
  }

  .tabela table tr td{
    padding-right: 15px;
    padding-left: 15px;
  }

  .formulario-inativo{
    border:ridge;
    border-width: 7px;
    padding: 10px;
    border-radius: 5px;
    font-family: "Aldrich";
    margin-top: 2%;
    margin-right: 20%;
    margin-left: 20%;
  }

  .formulario-inativo label{
    margin-right: 5px;
    margin-bottom: 3px;
  }

  .formulario-inativo input{
    margin-right: 5px;
    margin-bottom: 20px;
    padding: 5px;
    color: #240090;
    border: solid black;
    height: 25px;
    border-radius: 5px;
    font-family: "Arial";
    font-size: medium;
    width: 25%;
  }

  .formulario-inativo textarea{
    padding: 8px;
    border: solid black;
    border-radius: 5px;
    font-family: "Arial";
    font-size: medium;
    color: #240090;
    letter-spacing: 2px;
  }
</style>
