<script setup lang="ts">
import { ref,defineProps,onMounted } from 'vue';
import OseroRow from './OseroRow.vue';
import { Board } from '@/models/osero';

const props = defineProps<{
    board: Board;
}>();
const board = ref(props.board)
const canTurn = ref<[number, number][]>([]);
const turn = ref<[number, number][]>([]);
const whiteCount=ref<number>(0)
const blackCount=ref<number>(0)
// let end:boolean=false
const end=ref<boolean>(false)
const puttingStone=(x:number,y:number)=>{
    turn.value=board.value.serarch(x,y)
    console.log(turn.value)
    console.log(turn)
    if(turn.value.length!=0){
        board.value.put(x,y) //石を置く
        board.value.changeColor(turn.value,x,y)  //ひっくり返し
        board.value.change()  //変更
    }
    //それぞれの色の個数を把握
    whiteCount.value = board.value.whiteCount;
    blackCount.value = board.value.blackCount;
    //すべて埋まっているかcheck
    end.value=board.value.endCheck();
    canTurn.value=board.value.searchCell()
    console.log("canTurn",canTurn.value)
    // console.log("turn",turn.value)
}

onMounted(()=>{
    whiteCount.value = board.value.whiteCount;
    blackCount.value = board.value.blackCount;
})
</script>

<template>
    <div>
        <div  v-if="!end&&board.turnColor=='black'">
            <h2>黒の手番</h2>
            <h2>{{ blackCount }}個</h2>
        </div>
        <div  v-if="!end&&board.turnColor=='white'">
            <h2>白の手番</h2>
            <h2>{{ whiteCount }}個</h2>
        </div>
        <div v-if="end">
            <h2>終了</h2>
            <h2 v-if="blackCount>whiteCount">黒の価値</h2>
            <h2 v-else-if="blackCount==whiteCount">引き分け</h2>
            <h2 v-else-if="blackCount<whiteCount">白の価値</h2>
        </div>
        <OseroRow class="d-flex" v-for="(row,index) in board.rows" 
            :key="index" 
            :row="row"
            :canTurn="canTurn"
            @puttingStone="puttingStone"/>
        <!-- <OseroRow v-for="(index) in 8" :key="index" :row="props.board.rows[index]"/> -->
    </div>
</template>

