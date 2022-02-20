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
          :maxlength="12"
          :minlength="6"
        ></FromItem>
      </div>
      <div class="my-button">
        <Button @click="login">登录</Button>
        <Button @click="login">注册</Button>
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
    password: '',
  };
  created() {
    this.$store.commit('fetchUsers');
  }
  login() {
    if (!this.user.name) {
      return window.alert('请输入账户');
    }
    if (this.user.password && this.user.password.length >= 6) {
      this.$store.commit('createUser', this.user);
      this.$router
    } else {
      window.alert('密码必须大于6小于12位');
    }
    if (this.$store.state.createRecordError === null) {
      this.user.name = '';
      this.user.password = '';
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
      padding: 0 39px;
      background: rgb(45, 169, 226);
      margin: 8px 18px;
      border-radius: 25px;
    }
  }
}
</style>

