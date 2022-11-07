<template>
  <div class="block">
    <div class="top"></div>
    <div class="body">
      <img :src="coverImage" class="img">
      <span>{{ props.story.name }}</span>
      <span>{{ props.story.time }}</span>
      <Button class="btn" @click="emit('open-modal')">More</Button>
    </div>
    <div class="bottom">
      <div class="bottom-left"></div>
      <div class="bottom-right"></div>
      <div class="bottom-main">
        <div class="bottom-body"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { defineProps, defineEmits } from 'vue';
import { Button } from 'ant-design-vue';
const props = defineProps({
  story: {
    name: String,
    time: String,
    key: Number
  }
});

const coverImage = computed(() => {
  return `images/${props.story.key}/1.jpg`
})

const emit = defineEmits(['open-modal'])

</script>

<style scoped>
.block {
  width: 238px;
  overflow: hidden;
  margin-right: 200px;
}

.img {
  width: 203px;
  height: 130px;
}

.top {
  background-image: url('../../public/top.png');
  height: 18px;
}

.body {
  display: flex;
  flex-direction: column;
  background-image: url(../../public/back.png);
  align-items: start;
  padding-left: 17.5px;
}

.bottom {
  position: relative;
  height: 30px;
}

.bottom-left {
  position: absolute;
  left: 0;
  top: 0;
  background-image: url('../../public/bottom-left.png');
  width: 20px;
  height: 30px
}

.bottom-body {
  position: absolute;
  left: -200px;
  background-image: url('../../public/bottom.png');
  width: 600px;
  height: 30px;
}

.bottom-main {
  position: relative;
  height: 30px;
  margin: 0 20px 0 20px;
  overflow: hidden;
}

.bottom-right {
  position: absolute;
  right: 0;
  top: 0;
  background-image: url('../../public/bottom-right.png');
  width: 20px;
  height: 30px
}

.btn {
  width: 57px;
  height: 18px;
  background-color: transparent;
  padding: 0;
  border: none;
  background-position: top;
  align-self: end;
  margin-right: 20px;
  background-image: url('../../public/button1.png');
}

.btn:hover {
  width: 57px;
  height: 18px;
  background-color: transparent;
  padding: 0;
  border: none;
  background-position: bottom;
  align-self: end;
  margin-right: 20px;
  background-image: url('../../public/button1.png');
}

.btn:focus {
  width: 57px;
  height: 18px;
  background-color: transparent;
  padding: 0;
  border: none;
  background-position: bottom;
  align-self: end;
  margin-right: 20px;
  background-image: url('../../public/button1.png');
}
</style>