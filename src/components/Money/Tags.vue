<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag"
        :class="{selected: selectedTags.indexOf(tag)>=0}"
        @click="toggle(tag)"
      >{{tag}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  @Prop() readonly dataSource: string[] | undefined;
  selectedTags: string[] = [];
  toggle(tag: string){
    const index = this.selectedTags.indexOf(tag)
    if(index >= 0){
      console.log(index)
      this.selectedTags.splice(index,1)
    }else{
      console.log(index)
      this.selectedTags.push(tag)
    }
  }
  create(){
    const name = window.prompt('请输入标签')
    if(name===''){
      window.alert('标签名不能为空')
    }else{
      if(this.dataSource){
        this.$emit('update:dataSource', 
          [...this.dataSource, name])
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  flex-flow: 1;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  > .current {
    display: flex;
    > li {
      $bg: #d9d9d9;
      background: $bg;
      $h: 24px;
      height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      line-height: $h; //一行字才能用，垂直居中
      margin-top: 4px;
      &.selected{
        background: darken($bg, 50%);
        color: white;
      }
    }
  }
  > .new {
    padding: 16px 0;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>
