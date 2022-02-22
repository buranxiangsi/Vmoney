<template>
<Layout>我的页面</Layout>
  
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator';
import Layout from "../components/Layout.vue";

@Component({
  components:{Layout}
})
export default class UserName extends Vue{
  get currentUser() {
    return this.$store.state.currentUser;
  }
  create(){
    const name = this.$route.params.name
    console.log(name)
    this.$store.commit('fetchUsers')
    this.$store.commit('setCurrentUser', name);
    if(!this.currentUser){
      this.$router.replace('/404');
    }

  }
}
  

</script>