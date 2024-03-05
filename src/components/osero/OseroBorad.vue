<script setup lang="ts">
import { ref,defineProps,onMounted } from 'vue';
import OseroRow from './OseroRow.vue';
import { Board } from '@/models/osero';
import {easyCPU} from '@/models/osero';
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
onMounted(()=>{
    canTurn.value=board.value.searchCell()
    whiteCount.value = board.value.whiteCount;
    blackCount.value = board.value.blackCount;

})
// if(Object.values(route.query).some(value => value === 'easy')){
    const CPU:easyCPU=new easyCPU()
    console.log("CPU",CPU)
// }
// else if(Object.values(route.query).some(value => value === 'hard')){
//     const CPU=new hardCPU()
// }
const afterPuttingStone=()=>{
    //それぞれの色の個数を把握
    whiteCount.value = board.value.whiteCount;
    blackCount.value = board.value.blackCount;
    //すべて埋まっているかcheck
    end.value=board.value.endCheck();
    console.log(end.value)
    canTurn.value=board.value.searchCell()
}
const put=(x:number,y:number)=>{
    turn.value=board.value.serarch(x,y)
    if(turn.value.length!=0){
        board.value.put(x,y) //石を置く
        board.value.changeColor(turn.value,x,y)  //ひっくり返し
        board.value.change()  //変更
    }
    afterPuttingStone()
}
const puttingStoneCPU=()=>{
    canTurn.value=board.value.searchCell()
    const puttingPlace:[number,number]=CPU.putting(canTurn.value)
    put(puttingPlace[0],puttingPlace[1])
}

const puttingStone=(x:number,y:number)=>{
    // put(x,y)
    // setTimeout(()=>puttingStoneCPU(),100);
    for(let i=0;i<10;i++){
        setTimeout(()=>puttingStoneCPU(),100);
    }
}

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

