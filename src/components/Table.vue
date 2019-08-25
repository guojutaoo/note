<template>
      <table class="table">
        <tbody>
            <tr v-for="msg in userName" v-bind:key="msg.id">
                <th>{{msg}} <button class="btn btn-success" id="btn-up">Update</button> <button class="btn btn-danger">Delete</button></th>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
  name: 'Table',
  props: ['userName'],
  data () {
    return {
      // localmsgs: this.msgs,
    }
  },
  methods: {
  }
}
</script>

<style>
th{
    position: relative;
    /* display: inline; */
    text-align: left;
    /* cursor: pointer; */
    color: #fff;
    background-color: #3498db;
    transition: 0.3s;
}
th:hover{
    background-color: rgba(0, 0, 0, 0.2);
    transform: translateY(-3%)
}
button{
  position: absolute;
  right: 10px;
  margin-top: -8px;
  margin-left: 100px;
}
#btn-up{
  margin-right: 100px;
}
</style>
