<template>
    <div id="Chamados" class="conteudo">
        <div class="cabecalho-conteudo">
            <h2>Controle de chamados</h2>
        </div>
        <div class="tabela tabelaChamados">
            <table>
                <tr>
                    <th>Id</th>
                    <th>Descrição</th>
                    <th>Aberto em</th>
                </tr>
                <tr v-for="chamado in chamados" :key="chamado.id">
                    <!-- <td><router-link to="/detalhes-chamado/">{{chamado.id}}</router-link></td>
                    <td><router-link to="/detalhes-chamado/">{{chamado.descricao}}</router-link></td>
                    <td><router-link to="/detalhes-chamado/">{{chamado.dataCriacao}}</router-link></td> -->

                    <td><router-link :to="{name: 'DetalhesChamado', params: {id: chamado.id}}">{{chamado.id}}</router-link></td>
                    <td><router-link :to="{name: 'DetalhesChamado', params: {id: chamado.id}}">{{chamado.descricao}}</router-link></td>
                    <td><router-link :to="{name: 'DetalhesChamado', params: {id: chamado.id}}">{{chamado.dataCriacao}}</router-link></td>
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
        }
    }
}
</script>