<template>
    <div id="Chamados" class="conteudo">
        <div class="cabecalho-conteudo">
            <h2>Controle de chamados</h2>
        </div>
        <div class="tabelaChamados">
            <table>
                <tr>
                    <th>Id</th>
                    <th>Descrição</th>
                    <th>Aberto em</th>
                </tr>
                <tr v-for="chamado in chamados" :key="chamado.id">
                    <td><router-link to="/detalhes-chamado">{{chamado.id}}</router-link></td>
                    <td><router-link to="/detalhes-chamado">{{chamado.descricao}}</router-link></td>
                    <td><router-link to="/detalhes-chamado">{{chamado.dataCriacao}}</router-link></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
import {data} from '../../shared/data';
export default {
    name: "Chamados",
    data(){
        return{
            chamados: []
        }
    },

    async created(){
        await this.carregarChamados();
    }, 

    methods: {
        async carregarChamados(){
            this.chamados = await data.recuperarChamados();
            console.log(this.chamados);
        }
    }
}
</script>
<style scoped>
    .conteudo{
        background-color: #240090;
        display: inline;
    }

    .cabecalho-conteudo{
        font-family: "Aldrich";
        text-align: center;
    }

    .tabelaChamados{
        display: grid;
        border: solid;
        border-radius: 10px;
        margin-right: 80px;
    }

    .tabelaChamados table th{
        text-align: center;
        font-family: "Aldrich";
        background-color: black;
        color: white;
        letter-spacing: 3px;
        padding-left: 8px;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .tabelaChamados table td{
        text-align: center;
        font-family: Arial;
        letter-spacing: 3px;
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 7px;
        padding-bottom: 7px;
        text-decoration: solid;
        width: fit-content;
    }

    .tabelaChamados table :active {
        color: black;
    }

    .tabelaChamados table :visited{
        color: black;
    }

    .tabelaChamados table tr:hover{
        background-color: grey;
    }

    .tabelaChamados table tr td:first-of-type{
        font-weight: bold;
    }

    h3{
        display: inline;
    }

    .titulo{
        font-family:"Aldrich";
        display: inline;
    }
</style>