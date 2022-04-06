<template>
    <div id="Menu" class="menu">
        <ul>
            <li><router-link to="/Chamados">CHAMADOS</router-link></li>
            <li><router-link to="/Tecnicos">TÉCNICOS</router-link></li>
            <i class="fa-solid fa-archway"></i>
        </ul>
    </div>
</template>
<script src="https://kit.fontawesome.com/775707a8dd.js" crossorigin="anonymous"></script>
<script>
export default {
    name: "Menu"
}
</script>
<style scoped>
    .menu{
        float: left;
        background-color: #240090;
        color: white;
        text-decoration: none;
        padding: 0px;
        width: 100%;
        margin-bottom: 20px;
    }

    ul{
        list-style-type: none;
        margin-right: 0px;
        padding-left: 0px;
    }

    ul li{
        display: inline;
        padding: 16px;
        letter-spacing: 3px;
        font-family: "Aldrich";
        text-decoration: none;
    }

    ul li:hover{
        background-color: black;
    }

    ul i{
        float: right;
        margin-right: 10px;
        color: white; 
        text-decoration: none;
    }

    ul li:visited{
        color: white; 
        text-decoration: none;
    }

    ul li:active{
        color: white; 
        text-decoration: none;
    }
</style>