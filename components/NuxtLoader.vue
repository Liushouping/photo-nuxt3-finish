<script setup>
// const loader = ref(true);
// onMounted(() => {
//   setTimeout(() => {
//   	loader.value = false;
//   }, 1500);
// });
const nuxtApp = useNuxtApp();
  const loader = ref(false);
  nuxtApp.hook("page:start", () => {
    loader.value = true;
  });
  nuxtApp.hook("page:finish", () => {
    loader.value = false;
  });
</script>
<template>
	<transition name="home">
  	<div 
  	ref="loader"
  	v-if="loader"
  	class="fixed top-0 left-0 w-full h-screen bg-[#fef9f1] flex justify-center items-center z-[999]">
  		<div class="pulsar"></div>
  	</div>
	</transition>
</template>

<style>
.home-enter-active, .home-leave-active { transition: opacity 1.5s; }
.home-enter, .home-leave-active { opacity: 0; }
.pulsar {
  --uib-size: 40px;
  --uib-speed: 1.5s;
  --uib-color: black;

  position: relative;
  height: var(--uib-size);
  width: var(--uib-size);
}

.pulsar::before,
.pulsar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: var(--uib-color);
  animation: pulse var(--uib-speed) ease-in-out infinite;
  transform: scale(0);
}

.pulsar::after {
  animation-delay: calc(var(--uib-speed) / -2);
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(0);
    opacity: 1;
  }
  50% {
    transform: scale(1);
    opacity: 0.25;
  }
}
</style>