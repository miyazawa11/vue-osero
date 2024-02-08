<script setup lang="ts">
import OseroCell from './OseroCell.vue';
import { Row } from '@/models/osero';
const row! = new Row();

</script>

<template>
    <div>
        <OseroCell v-for="(cell,index) in row.cells"/>
    </div>
</template>