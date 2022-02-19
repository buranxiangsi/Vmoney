<template>
  <Layout>
    <div class="myApp">
      <div class="account">
        <FromItem
          class-prefix="wode"
          fieldName="账户"
          type="text"
          placeholder="在这里输入账户名"
          :value.sync="user.name"
        ></FromItem>
      </div>
      <div class="password">
        <FromItem
          class-prefix="wode"
          fieldName="密码"
          type="password"
          placeholder="在这里输入密码"
          :value.sync="user.password"
        ></FromItem>
      </div>
      <div class="my-button">
        <Button @click="login">登录</Button>
        <Button>注册</Button>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import FromItem from '@/components/Money/FromItem.vue';
@Component({
  components: { FromItem, Button },
})
export default class Wode extends Vue {
  get userList() {
    return this.$store.state.userList;
  }
  user: User = {
    name: '',
    password: null,
  };
  created() {
    this.$store.commit('fetchUsers');
  }
  login() {
    if (!this.user.name) {
        return window.alert('请输入账户');
      }
    if(!this.user.password){
      return window.alert('请输入密码')
    }
    console.log(this.user)
    this.$store.commit('createUser', this.user);
    if (this.$store.state.createRecordError === null) {
      window.alert('已保存');
      this.user.name = '';
      this.user.password = null;
    }
  }

}
</script>

<style lang="scss" scoped>
.myApp {
  height: 400px;
  margin-top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ::v-deep .wode-formItem {
    margin-bottom: 30px;
    font-size: 16px;
    box-shadow: 0px 0px 0.5px 1px rgb(45, 169, 226);
    border-radius: 25px;
  }

  .my-button {
    .button {
      padding: 0 35px;
      background: #2da9e2;
      margin: 8px 18px;
      border-radius: 25px;
    }
  }
}
</style>
