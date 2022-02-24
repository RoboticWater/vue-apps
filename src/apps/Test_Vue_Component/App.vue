<template>
  <!-- <div id="room" class="darkwall">
  <Title msg="Reality Media" />
	<img src="../../assets/images/rotunda-map.png" width="250" >
	<div class="displaytext">AR allows us to extend our physical reality; VR creates for us a different reality.</div>
  </div>  -->
  <Title msg="Test Vue Component" />
  <div id="room" class="darkwall">
  <div class="viewer"></div>
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
