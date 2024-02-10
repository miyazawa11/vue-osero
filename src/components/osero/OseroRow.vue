<script setup lang="ts">
import { defineProps } from 'vue';
import OseroCell from './OseroCell.vue';
import { Row } from '@/models/osero';
// import{Cell} from '@/models/osero'
// import  {Row}  from '@/models/osero';
// const row = new Row();
const props = defineProps<{
    row: Row;
}>();
</script>

<template>
    <div>
        <OseroCell v-for="(cell,index) in props.row.cells" 
            :key="index" 
            :cell="cell"/>
    </div>
</template>