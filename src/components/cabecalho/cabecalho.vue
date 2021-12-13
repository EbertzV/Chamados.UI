<template>
    <div id="Cabecalho" class="cabecalho">
            <h1 class="titulo">v-tech</h1>
            <h1 class="slogan">Painel de chamados</h1>
    </div>
</template>

<script>
export default {
    name: 'Cabecalho'
}
</script>
<style scoped>
    h1{
        letter-spacing: 7px;
        color: #0C0032;
        font-family: "Aldrich";
    }

    .cabecalho{
        position: fixed 0px 0px auto auto;
        background-color: #3500D3;
        padding: 1% 1% 1% 1%;
        overflow:auto;
    }

    .titulo{
        float: left;
        text-transform: uppercase;
    }

    .slogan{
        float: right;
    }
</style>