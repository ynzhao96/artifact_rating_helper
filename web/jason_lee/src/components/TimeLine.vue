<template>
  <div class="timeline">
    <StoryTab v-for="c in config.stories" :key="c.key" :story="c" @open-modal="openModal()"></StoryTab>
  </div>
  <StoryModal :showModal="showModal" @close-modal="closeModal" />
</template>

<script setup>
import StoryTab from './StoryTab.vue';
import StoryModal from './StoryModal.vue';
import config from '../../public/config.json';

import { ref } from 'vue';

// 对话框打开的状态
const showModal = ref(false);

const openModal = () => {
  showModal.value = true
}
const closeModal = () => {
  showModal.value = false;
}
</script>

<style scoped>
.timeline {
  margin-top: calc(40vh);
  margin-left: 100px;
  width: 3000px;
  display: flex;
  flex-direction: row;
}
</style>