<script setup lang="ts">

</script>
<template>
    <div class=" container ">
        <div class=" d-flex justify-content-center mt-5">
            <router-link :to="{path:'home',query:{level:'easy'}}" class="btn btn-primary btn-sm " href="#" role="button">Game Start(easy)</router-link>
            <router-link :to="{path:'home',query:{level:'hard'}}" class="btn btn-primary btn-sm " href="#" role="button">Game Start(hard)</router-link>
        </div>
    </div>
</template>