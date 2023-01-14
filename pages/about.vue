<script setup>
const localePath = useLocalePath()
</script>
<template>
	<div class="relative w-full h-screen flex flex-col lg:flex-row justify-center items-center space-y-4">
		<div class="w-full lg:w-1/2 px-4 flex justify-center">
			<div class="w-full lg:w-[70%]">
				<h2 class="font-Anton text-[42px]">About us</h2>
				<p class="font-Anton text-[16px]">Woman with hat sitting on chairs beach in beautiful tropical beach. woman relaxing on a tropical beach at koh</p>
				<NuxtLink :to="localePath('/')">home</NuxtLink>
			</div>
		</div>
		<div class="">
			<img src="https://img.freepik.com/free-photo/happy-young-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-office_7861-2535.jpg?w=1800&t=st=1672804266~exp=1672804866~hmac=1e327f327d364f2e471716b58f84168f15318deaadad4ecd1e3e5659b81a82b7">
		</div>
	</div>
</template>