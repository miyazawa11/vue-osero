<script setup lang="ts">
import { defineProps } from 'vue';
import OseroCell from './OseroCell.vue';
import { Cell } from '@/models/osero';
// import{Cell} from '@/models/osero'
// import  {Row}  from '@/models/osero';
// const row = new Row();
const props = defineProps<{
    x: number;
}>();
</script>

<template>
    <div>
        <OseroCell v-for="(y,index) in 8" 
            :key="index" 
            :cell="new Cell(props.x,y)"
            @click="console.log(new Cell(props.x,y))"/>
    </div>
</template>