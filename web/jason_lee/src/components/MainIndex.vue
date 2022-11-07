<template>
  <div class="backgroundclass">
    <span class="name">2022MEM班级时间轴 By 032-李大运</span>
    <TimeLine />
  </div>
</template>

<script>
import TimeLine from './TimeLine.vue';
export default {
  name: 'MainIndex',
  components: {
    TimeLine
  }
}
</script>

<style lang="scss" scoped>
.backgroundclass {
  background-image: url('../../public/bg.png');
  overflow-x: auto;
}

.name {
  float: left;
  color: white;
  font-size: 25px;
  margin-top: 10px;
  margin-left: 15px;
}

::-webkit-scrollbar {
  height: 60px;
}

::-webkit-scrollbar-thumb {
  background-color: transparent;
  border: gray solid 5px;
  border-radius: 6px;
  height: 66px;
}

::-webkit-scrollbar-track {
  height: 60px;
  background: black;
}
</style>