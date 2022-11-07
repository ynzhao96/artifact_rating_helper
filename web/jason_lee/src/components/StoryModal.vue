<template>
  <div>
    <Modal :visible="props.showModal" @cancel="emit('close-modal')" />
  </div>
</template>

<script setup>
import { Modal } from 'ant-design-vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  showModal: Boolean
})

const emit = defineEmits(['close-modal']);
</script>

<style lang="scss" scoped>

</style>