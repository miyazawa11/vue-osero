<script setup lang="ts">
import { defineProps,defineEmits } from 'vue';
import OseroCell from './OseroCell.vue';
import { Row } from '@/models/osero';
// import{Cell} from '@/models/osero'
// import  {Row}  from '@/models/osero';
// const row = new Row();
const props = defineProps<{
    row: Row;
    canTurn:[number,number][]
}>();
const emits = defineEmits<{
    (e:"puttingStone",x:number,y:number):void
}>()
const puttingStone=(x:number,y:number)=>{
    emits("puttingStone",x,y)
}
</script>

<template>
    <div>
        <OseroCell class="d-flex" v-for="(cell,index) in props.row.cells" 
            :key="index" 
            :cell="cell"
            :canTurn="props.canTurn"
            @puttingStone="puttingStone"/>
    </div>
</template>