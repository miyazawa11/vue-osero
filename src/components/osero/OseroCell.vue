<script setup lang="ts">
import { ref } from 'vue';
import { defineProps } from 'vue';
import { Cell } from '@/models/osero';
const stoneColor=ref<string>("");
// const installation =()=>{
//     stoneColor.value=("stone-black")
// }
const props = defineProps<{
    cell: Cell;
}>();
</script>
<template>
    <div class="cell-wrapper">
        <div class="cell"></div>
        <div class="stone" :class="stoneColor"></div>
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
</style>