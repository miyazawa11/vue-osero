<script setup lang="ts">
import OseroBorad from '@/components/osero/OseroBorad.vue';
import { Board } from '@/models/osero';
import { useRouter } from 'vue-router';
const router = useRouter()
let referrer = router.currentRoute.value.referrer;
console.log(referrer);
</script>

<template>
    <div class="containar">
        <div class="d-flex justify-content-center align-items-center flex-row">
            <OseroBorad :board="new Board()"/>
        </div>
    </div>
</template>