<template>
    <div id="TelaInicial" >
        <Cabecalho class="meu-cabecalho"/>
        <div class="conteudo-interno">
            <Menu class="meu-menu"/>
            <div class="painel">
                <router-view class="view"></router-view>
            </div>
        </div>
        <Rodape class="meu-rodape"/>
    </div>
</template>
<script>
import Cabecalho from '../cabecalho/cabecalho.vue'
import Menu from '../menu/menu.vue'
import Rodape from '../rodape/rodape.vue'
export default {
    name: 'TelaInicial',
    components: {
        Cabecalho,
        Menu,
        Rodape
    }
}
</script>
<style scoped>
    .tela-inicial{
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .conteudo-interno{
        display: flex;
        width: 100%;
        flex-grow: 1;
        height: 100%;
    }

    .meu-menu{
        flex-basis: 1;
    }

    .painel{
        background-color: grey;
        width: 100%;
        padding: 0px;
        flex-basis: 1;
    }

    .view{
        background-color: white;
        height: 100%;
        margin: 20px 50px 0px 50px;        
        border-radius: 10px;
        border-style:inset;
        padding: 15px;
        display: flex;
        flex-flow: column;
    }

    .meu-rodape{
        position: sticky;
        bottom: 0px;
        right: 0px;
        left: 0px;
    }  
</style>