<script setup lang="ts">
import { ref,defineProps } from 'vue';
import OseroRow from './OseroRow.vue';
import { Board } from '@/models/osero';

const props = defineProps<{
    board: Board;
}>();
const board = ref(props.board)
const puttingStone=(x:number,y:number)=>{
    const canTurn:[number,number][]=board.value.serarch(x,y)
    console.log(canTurn)
    if(canTurn.length!=0){
        board.value.put(x,y)
        board.value.change()
        board.value.changeColor(canTurn,x,y)
        }
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

