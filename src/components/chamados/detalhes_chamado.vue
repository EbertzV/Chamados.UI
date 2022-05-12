<template>
    <div id="DetalhesChamado" class="conteudo">
        <div class="cabecalho-conteudo">
            <h2>Detalhes do chamado</h2>
        </div>
        <div class="formulario-inativo">
            <form action="submit" class="formulario-conteudo">
                <div class="form-col1">
                    <label for="id">Id:</label>
                    <input type="text" v-model="chamado.id">

                    <label for="descricao">Descrição:</label>
                    <input type="text" v-model="chamado.descricao">

                    <label for="data_abertura">Data de abertura:</label>
                    <input type="text" v-model="chamado.dataCriacao">

                    <label for="situacao">Situação atual:</label>
                    <input type="text" v-model="chamado.status">

                    <label for="tecnico">Técnico responsável:</label>
                    <input type="text" v-model="chamado.tecnico">
                </div>
                <div class="form-col2">
                    <label for="detalhes">Detalhes:</label>
                    <textarea name="detalhes" id="detalhes-chamado" cols="30" rows="10" v-model="chamado.detalhes"></textarea>
                </div>
            </form>
        </div>
        <div class="controle">
            <button><router-link :to="{name: 'Chamados'}">Voltar</router-link></button>
        </div>
    </div>
</template>
<script>
import {data} from '../../shared/data';
export default {
    name: "DetalhesChamado",
    props: {
        id: String
    },
    data(){
        return{
            chamado: {

            }
        }
    },
    async created(){
        await this.carregarChamado(this.id);
    }, 

    methods: {
        async carregarChamado(id){
            this.chamado = await data.recuperarChamado(id);
        }
    }
}
</script>
<style scoped>
    .titulo{
        font-family:"Aldrich";
    }

    .formulario-conteudo{
        display: flex;
        flex-flow: row;
        width: 100%;
        padding: 10px 0px 0px 15px;
    }

    .form-col1{
        display: flex;
        flex-flow: column;
        margin-right: 20%;
        padding: 0px;
    }

    .form-col2{
        display: flex;
        flex-flow: column;
    }

    .form-col2 input{
        height: 35%;
        
        overflow-wrap:normal;
    }

    .formulario-conteudo input{
        width: fit-content;
        margin-right: 0px;
    }

    .controle{
        
        margin-top: 20px;
        margin-right: 20%;
        margin-left: 20%;
    }

    .controle button{
        font-family: "Aldrich";
        letter-spacing: 2px;
        font-size: medium;
        padding: 7px;
        border-radius: 5px;
    }

    .conteudo{
        display: flex;
    }
</style>