<script setup lang="ts">
import { ref,defineProps } from 'vue';
import OseroRow from './OseroRow.vue';
import { Board } from '@/models/osero';

const props = defineProps<{
    board: Board;
}>();
const board = ref(props.board)
console.log("board",board.value.rows.values)
const puttingStone=(x:number,y:number)=>{
    board.value.put(x,y)
    board.value.serarch(x,y)

}
</script>

<template>
    <div>
        <OseroRow class="d-flex" v-for="(row,index) in board.rows" 
            :key="index" 
            :row="row"
            @puttingStone="puttingStone"/>
        <!-- <OseroRow v-for="(index) in 8" :key="index" :row="props.board.rows[index]"/> -->
    </div>
</template>

