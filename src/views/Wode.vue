<template>
  
  <Layout>
     <div class="myApp">
       <div class="account">
         <FromItem
           fieldName="账户"
           type="text"
           placeholder="在这里输入账户名"
           :value.sync="x"
         ></FromItem>
       </div>
       <div class="password">
         <FromItem
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
    max-width: 90%;
    margin-top: 50%;
    margin-left: auto;
    margin-right: auto;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .account{
      margin-bottom: 40px;
      border-bottom: 1px solid  rgb(45, 169, 226) ;
     
      
    }
     .formItem{
        font-size: 2rem;
        background: #2da9e2;
      }
    .password{
      margin-bottom: 40px;
      border-bottom: 1px solid  rgb(45, 169, 226) ;
    }
    .my-button{
      .button{
      padding: 0 35px;
      background: #2da9e2;
      margin: 8px 18px;
    }
    }
   
    
}

</style>