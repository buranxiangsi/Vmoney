<template>
  
  <Layout>
     <div class="myApp">
       <div class="account">
         <FromItem class-prefix="wode"
           fieldName="账户"
           type="text"
           placeholder="在这里输入账户名"
           :value.sync="x"
         ></FromItem>
       </div>
       <div class="password">
         <FromItem class-prefix="wode"
           fieldName="密码"
           type="password"
           placeholder="在这里输入密码"
         ></FromItem>
       </div>
       <div class="my-button">
        <Button>登录</Button>
        <Button>注册</Button>
        
       </div>
       
     </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import Button from "@/components/Button.vue";
import FromItem from "@/components/Money/FromItem.vue";
@Component({
   components:{FromItem,Button}
})
export default class Wode extends Vue{

}
</script>

<style lang="scss" scoped>
.myApp{
    height: 400px;
    margin-top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    ::v-deep .wode-formItem{
      margin-bottom: 30px;
      font-size: 16px;
     box-shadow: 0px 0px 0.5px 1px  rgb(45, 169, 226);
    border-radius: 25px;

    }
     
    .my-button{
      .button{
      padding: 0 35px;
      background: #2da9e2;
      margin: 8px 18px;
      border-radius: 25px;
    }
    }
   
    
}

</style>