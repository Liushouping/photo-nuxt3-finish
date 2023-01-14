<template>
  <div>
  <NuxtLoader />
  <NuxtLoadingIndicator color="#ff5500"/>

  <NuxtHeader />
  
  <!-- <div> -->
  <!-- <NuxtLayout> -->
    <NuxtPage />
  <!-- </NuxtLayout> -->
  <!-- </div> -->

  <LazyNuxtFooter />
  </div>
</template>

<style>
/*  .rotate-enter-active,
  .rotate-leave-active {
    transition: all 0.5s;
  }
  .rotate-enter-from,
  .rotate-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }*/
</style>