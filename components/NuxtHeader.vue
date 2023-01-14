<script>
 
export default {
  setup(){
  	const localePath = useLocalePath();
	 	function scrollFunction() {
			let navbar = document.getElementById("header");
			if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
			    navbar.style = "background:#fff;";
			} else {
			    navbar.style = "";
			}
		};

	  onMounted(() => {
        window.addEventListener('scroll', scrollFunction, true);
      })
		return {
			localePath,
			scrollFunction,
		}
  },
}
</script>
<template>
	<div 
	id="header"
	class="w-full fixed top-0 z-[100] duration-300"
	style="">
		<div class="w-[90%] h-[60px] mx-auto flex flex-row justify-between items-center">
		<div class="h-full">
			<NuxtLink 
			:to="localePath('/')" 
			class="w-full flex justify-center items-center text-[24px] text-gray-900 font-Anton antialiased px-4 py-2">
		        Photo
		    </NuxtLink>
		</div>
		<div class="h-full flex flex-row space-x-8 items-center justify-center tracking-[1px]">
			<NuxtLink 
			to="/" 
			class="w-full flex justify-center items-center text-[16px] text-gray-900 font-Anton antialiased">
		        Home
		    </NuxtLink>
		    <NuxtLink 
		    to="/about" 
		    class="w-full flex justify-center items-center text-[16px] text-gray-900 font-Anton antialiased">
		        About
		    </NuxtLink>
		    <NuxtLink 
		    to="/contact" 
		    class="w-full flex justify-center items-center text-[16px] text-gray-900 font-Anton antialiased">
		        Contact
		    </NuxtLink>
		</div>

	    </div>
	</div>
</template>