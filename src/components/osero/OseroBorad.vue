<script setup lang="ts">
import { ref,defineProps,onMounted } from 'vue';
import OseroRow from './OseroRow.vue';
import { Board } from '@/models/osero';

const props = defineProps<{
    board: Board;
}>();
const board = ref(props.board)
const canTurn = ref<[number, number][]>([]);
const whiteCount=ref<number>(0)
const blackCount=ref<number>(0)
const puttingStone=(x:number,y:number)=>{
    canTurn.value=board.value.serarch(x,y)
    console.log(canTurn.value)
    console.log(canTurn)
    if(canTurn.value.length!=0){
        board.value.put(x,y)
        board.value.change()
        board.value.changeColor(canTurn.value,x,y)
    }
    whiteCount.value = board.value.whiteCount;
    blackCount.value = board.value.blackCount;
}

onMounted(()=>{
    whiteCount.value = board.value.whiteCount;
    blackCount.value = board.value.blackCount;
})
</script>

<template>
    <div>
        <div  v-if="board.turnColor=='black'">
            <h2>黒の手番</h2>
            <h2>{{ blackCount }}個</h2>
        </div>
        <div  v-if="board.turnColor=='white'">
            <h2>白の手番</h2>
            <h2>{{ whiteCount }}個</h2>
        </div>
        <OseroRow class="d-flex" v-for="(row,index) in board.rows" 
            :key="index" 
            :row="row"
            :canTurn="canTurn"
            @puttingStone="puttingStone"/>
        <!-- <OseroRow v-for="(index) in 8" :key="index" :row="props.board.rows[index]"/> -->
    </div>
</template>

