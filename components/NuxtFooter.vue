<script setup>
	function BackToTop() {
		window.scrollTo(0, 0);
	}
</script>
<template>
	<div class="relative bg-gray-900 font-Anton">
		<div class="relative z-20">
			<div 
			@click="BackToTop"
			class="border border-[0.5px] border-gray-900 w-full relative flex justify-center items-center cursor-pointer">
				<span class="absolute border border-[1] border-gray-900 bg-white w-[45px] h-[45px] rounded-full flex justify-center items-center">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-900">
						<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
					</svg>
				</span>
			</div>
		</div>
	    <div class="max-w-2xl mx-auto text-white py-10">
	        <div class="text-center">
	            <h3 class="text-3xl mb-3">Download our app </h3>
	            <p> Stay fit. All day, every day. </p>
	            <div class="flex justify-center my-10">
	                <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
	                    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" class="w-7 md:w-8">
	                    <div class="text-left ml-3">
	                        <p class='text-xs text-gray-200'>Download on </p>
	                        <p class="text-sm md:text-base"> Google Play Store </p>
	                    </div>
	                </div>
	                <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
	                    <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" class="w-7 md:w-8">
	                    <div class="text-left ml-3">
	                        <p class='text-xs text-gray-200'>Download on </p>
	                        <p class="text-sm md:text-base"> Apple Store </p>
	                    </div>
	                </div>
	            </div>
	        </div>
	        <div class="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-50">
	            <p class="order-2 md:order-1 mt-8 md:mt-0"> &copy; Beautiful Footer, 2022. </p>
	            <div class="order-1 md:order-2">
	                <span class="px-2">About us</span>
	                <span class="px-2">Contact us</span>
	                <span class="px-2">Privacy Policy</span>
	            </div>
	        </div>
	    </div>
	</div>
</template>