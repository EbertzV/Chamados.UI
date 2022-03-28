<template>
    <div id="Menu" class="menu">
        <ul>
            <li><a href="#/Chamados">Chamados</a></li>
            <li><a href="#/Tecnicos">Técnicos</a></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "Menu"
}
</script>
<style scoped>
    .menu{
        background-color: black;
        float: left;
        padding: 0% 2% 0% 1%;
        height: 100%;
        margin-right: 50px;
    }

    ul{
        padding: 0% 1% 0% 1%;
        color: white;
        font-family:"Aldrich";
        list-style-type: none;
    }

    ul li{
        margin-bottom: 20%;
    }
</style>