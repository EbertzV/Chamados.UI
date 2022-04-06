<template>
    <div id="DetalhesChamado" class="conteudo">
        <div class="cabecalho-conteudo">
            <h2>Detalhes do chamado</h2>
        </div>
        <div class="chamado">
            <form action="submit">
                <label for="id">Id</label>
                <input type="text" v-bind="id" disabled="true">
            </form>
        </div>
    </div>
</template>
<script>
import {data} from '../../shared/data';
export default {
    name: "DetalhesChamado",
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

    h3{
        display: inline;
    }

    .titulo{
        font-family:"Aldrich";
        display: inline;
    }
</style>