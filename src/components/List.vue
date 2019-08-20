<template>
<div class="list">
    <nav class="navbar" id="nav-list">
        <form class="form-inline">
            <div class="first-row">
                <h3>Reducto</h3>
                <font-awesome-icon icon="trash-alt" style="font-size:24px" id="icon-trash"/>
            </div>
            <div class="second-row">
                <font-awesome-icon icon="plus-square" style="font-size:24px" id="icon-plus"/>
                <input type="text" class="text">
            </div>

        </form>
    </nav>
    <table class="table">
        <tbody>
            <tr>
                <th>Sunday</th>
            </tr>
            <tr>
                <th>Monday</th>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>

</script>

<style scoped>

form{
    display: inline;
}
.first-row{
    display: flex;
    position: relative;
}

.second-row{
    display: flex;
    margin-top: -15px;
    margin-bottom: 10px;
    margin-top: -25px;
    display: flex;
}
th{
    text-align: left;
}
input{
    background: transparent;
    border-top: 0;
    border-right: 0;
    border-left: 0;
    outline: none;
    color: #fff;
    font-size: 20px;
    padding: 20px 0 0 0;
}

nav{
    background-color:#9b59b6;
    color: #fff;
}

.icons{
    display:flex;
    flex-direction: column;
}

.list{
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: -1030px;
    margin-left: 250px;
}

#nav-list{
    justify-items: center;
    align-items: center;
}

#icon-plus{
    cursor: pointer;
    transition: 0.3s;
    margin-top: 30px;
    margin-right: 10px;
}
#icon-plus:hover{
    color: #2ecc71;
}

#icon-trash{
    display: flex;
    flex-direction: row;
    cursor: pointer;
    transition: 0.3s;
    margin-top: 5px;
    margin-left: 1400px;
}
#icon-trash:hover{
    color: #e74c3c;
}
</style>
