<template>
    <div id="DetalhesChamado" class="conteudo">
        <div class="cabecalho-conteudo">
            <h2>Detalhes do chamado</h2>
        </div>
        <div class="formulario-inativo">
            <form action="submit">
                <label for="id">Id:</label>
                <input type="text" v-model="chamado.id">

                <label for="id">Descrição:</label>
                <input type="text" v-model="chamado.descricao">

                <label for="id">Detalhes:</label>
                <input type="text" v-model="chamado.detalhes">

                <label for="id">Data de abertura:</label>
                <input type="text" v-model="chamado.dataCriacao">

                <label for="id">Situação atual:</label>
                <input type="text" v-model="chamado.status">
            </form>
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
</style>