<template>
    <div id="Chamados" class="conteudo">
        <div class="tabelaChamados">
            <div class="titulo">
                <h3>Id</h3>
            </div>
            <div class="titulo">
                <h3>Descricao</h3>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Chamados"
}
</script>
<style scoped>
    .conteudo{
        background-color: #240090;
        display: inline;
    }

    .tabelaChamados{
        display: grid;
    }

    h3{
        display: inline;
    }

    .titulo{
        font-family:"Aldrich";
        display: inline;
    }
</style>