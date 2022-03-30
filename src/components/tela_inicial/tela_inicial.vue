<template>
    <div id="TelaInicial">
        <Cabecalho/>
        <Menu/>
        <router-view></router-view>
        <Rodape/>
    </div>
</template>
<script>
import Cabecalho from '../cabecalho/cabecalho.vue'
import Rodape from '../rodape/rodape.vue'
import Menu from '../menu/menu.vue'
export default {
    name: 'TelaInicial',
    components: {
        Cabecalho,
        Rodape,
        Menu
    }
}
</script>