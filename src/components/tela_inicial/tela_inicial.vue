<template>
    <div id="TelaInicial" >
        <Cabecalho class="meu-cabecalho"/>
            <div class="conteudo-interno">
                <Menu class="meu-menu"/>
                <router-view class="view"></router-view>
            </div>
    </div>
</template>
<script>
import Cabecalho from '../cabecalho/cabecalho.vue'
import Menu from '../menu/menu.vue'
export default {
    name: 'TelaInicial',
    components: {
        Cabecalho,
        Menu
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

    .view{
        width: 100%;
    }
</style>