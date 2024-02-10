<script setup lang="ts">
import { ref , onMounted,} from 'vue';
import { defineProps } from 'vue';
import { Cell } from '@/models/osero'

const props = defineProps<{
    cell: Cell;
}>();
const cell = ref(props.cell)
const cellState = ref('')
// console.log(props.cell.cellState)

// const installation =()=>{
//     stoneColor.value=("stone-black")
// }

// コマの色の指定
const updateCellState =()=>{
    console.log(cell.value)
    if (cell.value.cellState === 'white') {
        return 'stone-white';
    } else if (cell.value.cellState === 'black') {
        return 'stone-black';
    } else {
        return 'none';
    }
}
onMounted(()=>{
    cellState.value=updateCellState()
}) 


</script>
<template>
    <div class="cell-wrapper">
        <div class="cell" @click="cell.putCell"></div>
        <div class="stone" :class="cellState"></div>
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