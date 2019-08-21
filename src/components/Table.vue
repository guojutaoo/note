<template>
      <table class="table">
        <tbody>
            <tr v-for="msg in localmsgs" v-bind:key="msg.id">
                <th>{{msg}}</th>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
  name: 'Table',
  props: ['msgs'],
  data () {
    return {
      localmsgs: this.msgs
    }
  },
  methods: {
  }
}
</script>

<style>
th{
    text-align: left;
    cursor: pointer;
    transition: 0.3s;
}
th:hover{
    background-color: rgba(0, 0, 0, 0.2);
    transform: translateY(-3%)
}
</style>
