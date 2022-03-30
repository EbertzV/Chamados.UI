<template>
    <div id="Menu" class="menu">
        <ul>
            <li><router-link to="/Chamados">Chamados</router-link></li>
            <li><router-link to="/Tecnicos">Tecnicos</router-link></li>
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