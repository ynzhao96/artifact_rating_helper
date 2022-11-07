<template>
  <div class="background">
    <TimeLine />
  </div>
</template>

<script setup lang="ts">
import TimeLine from './TimeLine.vue';
</script>

<style scoped>
.background {
  background-image: url('../../public/bg.png');
  overflow-x: auto;
}
</style>