<template>
    <div id="TelaInicial">
        <Cabecalho/>
        <Menu/>
        <Chamados/>
        <Rodape/>
    </div>
</template>
<script>
import Cabecalho from '../cabecalho/cabecalho.vue'
import Rodape from '../rodape/rodape.vue'
import Chamados from '../chamados/chamados.vue'
import Menu from '../menu/menu.vue'
export default {
    name: 'TelaInicial',
    components: {
        Cabecalho,
        Rodape,
        Chamados,
        Menu
    }
}
</script>