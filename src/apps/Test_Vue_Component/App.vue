<template>
  <div id="room" class="darkwall">
    <Title msg="Test Vue Component" />
    <div class="viewer"></div>
  </div>
</template>

<script setup>
import Title from "../../components/CenterTitle.vue";

import "../../assets/top.css";
import "../../assets/room.css";
</script>

<style scoped>
.viewer {
  width: 640px;
  height: 480px;
  animation: intro 1s cubic-bezier(0.58, 0.09, 0.21, 0.99);
  border: 2px solid #f00;
}
.viewer:hover {
  background: #ff0;
}
@keyframes intro {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
