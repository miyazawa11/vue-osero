<script setup lang="ts">
import OseroBorad from '@/components/osero/OseroBorad.vue';
import { Board } from '@/models/osero';
</script>

<template>
    <div class="containar">
        <div class=" d-flex justify-content-center align-items-center">
            <OseroBorad :board="new Board()"/>
        </div>
    </div>
</template>