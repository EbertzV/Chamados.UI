<template>
    <div id="Tecnicos">
        <div class="cabecalho-conteudo">
            <h2>Controle de técnicos</h2>
        </div>
        <div class="tabelaTecnicos">
            <table>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                </tr>
                <tr v-for="tecnico in tecnicos" :key="tecnico.id">
                    <td>{{tecnico.id}}</td>
                    <td>{{tecnico.nome}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
import {data} from '../../shared/data';
export default {
    name: "Tecnicos",
    data(){
        return{
            tecnicos: []
        }
    }, 
    async created(){
        await this.carregarTecnicos();
    },
    methods: {
        async carregarTecnicos(){
            this.tecnicos = await data.recuperarTecnicos();
        }
    }
}
</script>
<style scoped>
    .tabelaTecnicos{
        display: grid;
        border: solid;
        border-radius: 10px;
        margin-right: 80px;
    }

    .tabelaTecnicos table th{
        text-align: left;
        font-family: "Aldrich";
        background-color: black;
        color: white;
        letter-spacing: 3px;
        padding-left: 8px;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .tabelaTecnicos table td{
        font-family: Arial;
        letter-spacing: 3px;
        padding-left: 10px;
        padding-top: 7px;
        padding-bottom: 7px;
        text-decoration: solid;
    }

    h3{
        display: inline;
    }

    .titulo{
        font-family:"Aldrich";
        display: inline;
    }
</style>