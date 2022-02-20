<template>
      <div>
      <label class="fromItem" :class="classPrefix && `${classPrefix}-formItem`  ">
        <span>{{this.fieldName}}</span>
        <template v-if="type==='date'">
          <input :type="type||'text'" 
            :value="x(value)"
            @input="onValueChanged($event.target.value)"
            :placeholder="placeholder"
            :maxlength="maxlength"
             />
        </template>
        <template v-else>
           <input :type="type||'text'" 
            :value="value"
            @input="onValueChanged($event.target.value)"
            :placeholder="placeholder"
            :maxlength="maxlength"
            :minlength="minlength"
             />
        </template>
       
      </label>
    </div>
</template>
<script lang="ts">
import dayjs from "dayjs";
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class FromItem extends Vue{

  @Prop({default: ''}) readonly value!:string;
  @Prop({required:true}) fieldName!:string;
  @Prop() placeholder?: string;
  @Prop() type?:string;
  @Prop() classPrefix?:string;
  @Prop() maxlength?:number;
  @Prop() minlength?:number;
  onValueChanged(value:string){
    this.$emit('update:value', value)
  }
  x(isoString:string){
    return  dayjs(isoString).format('YYYY-MM-DD')
  }

}
  
</script>
<style lang="scss" scoped>
  .fromItem {
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 44px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-left: 16px;
  }
}
</style>