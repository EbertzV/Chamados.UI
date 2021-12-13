<template>
    <div id="Rodape" class="rodape">
        <p>V-Tech</p>
        <p>Painel de gestão de chamados</p>
    </div>
</template>
<script>
export default {
    name: 'Rodape'
}
</script>
<style scoped>
    .rodape{
        position: absolute;
        bottom: 0px;
        right: 0px;
        left: 0px;
        background-color: #3500D3;
        opacity: 65%;
        padding: 2%;
    }

    p{
        font-family: "Arial";
        display: inline;
        margin-right: 5%;
        color: #282828;
        opacity: unset;
        text-decoration: solid;
    }
</style>