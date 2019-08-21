<template>
<div class="list">
    <nav class="navbar" id="nav-list">
        <form class="form-inline">
            <div class="first-row">
                <h3>Reducto</h3>
                <font-awesome-icon icon="trash-alt" style="font-size:24px" id="icon-trash"/>
            </div>
            <div class="second-row">
                <font-awesome-icon icon="plus-square" style="font-size:24px" id="icon-plus" @click="handleSubmit"/>
                <input type="text" class="text" @change="handleChange" placeholder="..." v-model="add">
            </div>
        </form>
    </nav>
    <Table />
</div>
</template>

<script>
import Table from '@/components/Table'
export default {
  name: 'List',
  components: {Table},
  data () {
    return {
      text: '',
      msgs: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    }
  },
  methods: {
    handleChange: function () {
      this.text = this.add
    },
    handleSubmit: function () {
      this.msgs.push(this.text)
      console.log(this.msgs)
    }
  }
}
</script>

<style scoped>
.list{
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: -940px;
    margin-left: 250px;
}
nav{
    background-color:#9b59b6;
    color: #fff;
}
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

input{
    background: transparent;
    border-top: 0;
    border-right: 0;
    border-left: 0;
    outline: none;
    color: #fff;
    font-size: 20px;
    padding: 20px 0 0 0;
    transition: 0.5s;
}
input:focus{
    padding: 25px 0 0 0;
}
.icons{
    display:flex;
    flex-direction: column;
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
