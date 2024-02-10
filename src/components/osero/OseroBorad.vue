<script setup lang="ts">
import { defineProps } from 'vue';
import OseroRow from './OseroRow.vue';
import { Board } from '@/models/osero';

const props = defineProps<{
    board: Board;
}>();

</script>

<template>
    <div class="d-flex">
        <OseroRow v-for="(row,index) in props.board.rows" 
            :key="index" 
            :row="row"/>
        <!-- <OseroRow v-for="(index) in 8" :key="index" :row="props.board.rows[index]"/> -->
    </div>
</template>

