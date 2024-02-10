<script setup lang="ts">
import OseroRow from './OseroRow.vue';
import { Row } from '@/models/osero';
</script>

<template>
    <div class="d-flex">
        <OseroRow v-for="(x,index) in 8" :key="index" :x="x" :row="new Row(x)"/>
    </div>
</template>