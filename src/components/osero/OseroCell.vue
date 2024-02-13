<script setup lang="ts">
import { ref , onMounted,watch} from 'vue';
import { defineProps,defineEmits } from 'vue';
import { Cell } from '@/models/osero'

//props
const props = defineProps<{
    cell: Cell;
}>();

//emits
const emits = defineEmits<{
    (e:"puttingStone",x:number,y:number):void
}>();

//宣言
const cell = ref(props.cell)
const cellState = ref('')

//関数
// コマの色の指定
const updateCellState =()=>{
    if (cell.value.cellState === 'white') {
        return 'stone-white';
    } else if (cell.value.cellState === 'black') {
        return 'stone-black';
    } else {
        return 'none';
    }
}


const put = () =>{
    if(cell.value.state=="none"){
        emits("puttingStone",cell.value.x,cell.value.y)
        console.log("emits",cell.value.x,cell.value.y)
        cellState.value=updateCellState()
    }
}

onMounted(()=>{
    cellState.value=updateCellState()
}) 

watch(()=>props.cell.cellState, ()=>{
    cellState.value=updateCellState()
    console.log(cell.value)
})
</script>
<template>
    <div class="cell-wrapper">
        <div class="cell"></div>
        <div class="stone" @click="put()" :class="cellState"></div>
    </div>
</template>

<style scoped>
.cell-wrapper{
    position: relative;
}
.cell{
    width: 64px;
    height: 64px;
    border: solid 4px #000;
    background-color: darkgreen;
}
.stone{
    position: absolute;
    top: 2px;
    left: 2px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.stone-white{
    background-color: white;
}
.stone-black{
    background-color: #000;
}
.none{
    background-color: aqua;
}
</style>