<script setup>
	// const title = ref('Nuxt 3')
	// const description = ref('Meta Seo description')

	// useHead({
	//     title,
	//     meta: [
	//       {
	//         name: 'description',
	//         content: description,
	//       },
	//       { 
	//       	property: 'og:title', 
	//       	content: `og title` 
	//       },
	//     ]
	// })
	const switchLocalePath = useSwitchLocalePath()
	const cookieshow = useCookie(
  'cookieshow',
	  { 
	  	maxAge: 1 * 10
		}
	)


	const VideoOpen = ref(false);
</script>
<template>
	<div class="w-full">
<!-- 	<div 
	v-if="cookieshow"
	class="fixed top-0 w-full bg-[#ff5500] flex justify-center z-[200]">
		<div class="w-[90%] h-[120px] flex flex-row justify-between items-center">
			<div class="text-white font-Anton text-[24px]">
				<p>{{ cookieshow }}</p>
			</div>
	
			<button 
			@click="cookieset" 
			class="font-Anton text-white text-[18px] bg-gray-500/30 px-2 py-1 tracking-[1px] rounded-sm mt-4">Browse false</button>
		</div>
	</div> -->
	
	<div 
	class="w-full h-screen flex flex-col sm:flex-row justify-center items-center bg-cover bg-center relative" 
	style="background-image: url('https://img.freepik.com/free-photo/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1094.jpg?w=1480&t=st=1673100388~exp=1673100988~hmac=e9345d8b0cea274154ea2c7cfda490778946eb2c87f8988a3eb0de7e00551ff9');">
		<div class="absolute inset-0 bg-gradient-to-t from-black via-gray-900/10 to-transparent z-10"></div>
		<div class="flex flex-col justify-center items-center space-y-3 z-20">
			<span 
			@click="VideoOpen =! VideoOpen;"
			class="bg-white w-[60px] h-[60px] rounded-full flex justify-center items-center cursor-pointer">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
				  <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
				</svg>
			</span>
			<span class="flex space-x-12 justify-center text-[16px] text-white font-Anton tracking-[12px]">- DANIEL KOROAN -</span>
			<span class="text-white text-[32px] sm:text-[48px] font-Anton tracking-[2px]">Landscape <span class="text-[#ff5500]">Photography</span></span>
<!-- 
			<div class="flex flex-col justify-center items-center">
			<p class="font-Anton text-white text-[32px]">{{ cookieshow }}</p>
			<button 
			@click="cookieshow = true" 
			class="font-Anton text-white text-[18px] bg-gray-500/30 px-2 py-1 tracking-[1px] rounded-sm mt-4">Browse true</button>
			<button 
			@click="cookieshow = false" 
			class="font-Anton text-white text-[18px] bg-gray-500/30 px-2 py-1 tracking-[1px] rounded-sm mt-4">Browse false</button>
			<button 
			v-show="cookieshow"
			class="font-Anton text-white text-[18px] bg-gray-900/70 px-2 py-1 tracking-[1px] rounded-sm mt-4">True / False</button>

			</div>
 -->
			<div 
			class="w-full h-[90px] flex flex-row rounded-lg" 
			style="background: linear-gradient(45deg, rgb(0, 0, 0) 10%, rgba(0, 0, 0, 0) 70%);">
				<div class="w-1/4 flex flex-col justify-center items-center tracking-[1px]">
					<h5 class="font-Anton text-gray-300 text-[24px]">149 $</h5>
					<p class="font-Anton text-gray-300">Price</p>
				</div>
				<div class="w-1/4 flex flex-col justify-center items-center tracking-[1px] border-gray-50/10 border-[0.5px] border-l">
					<h5 class="font-Anton text-gray-300 text-[24px]">149 $</h5>
					<p class="font-Anton text-gray-300">Price</p>
				</div>
				<div class="w-1/4 flex flex-col justify-center items-center tracking-[1px] border-gray-50/10 border-[0.5px] border-l">
					<h5 class="font-Anton text-gray-300 text-[24px]">149 $</h5>
					<p class="font-Anton text-gray-300">Price</p>
				</div>
				<div class="w-1/4 flex flex-col justify-center items-center tracking-[1px] border-gray-50/10 border-[0.5px] border-tb">
					<h5 class="font-Anton text-gray-300 text-[24px]">149 $</h5>
					<p class="font-Anton text-gray-300">Price</p>
				</div>
			</div>

			<div class="absolute bottom-0 w-full">
				<div class="w-[90%] mx-auto hidden sm:flex flex-row my-4">
					<div 
					v-for="(i, index) in 4" 
					:class="{ 'border-[#ff5500]' : index === 0 }"
					class="w-1/4 flex flex-row justify-center items-center tracking-[1px] pb-2 border-b-0">
						<div class="w-1/4 flex justify-center items-center">
							<span class="w-[35px] h-[35px] rounded-full bg-white flex justify-center items-center">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-900">
								  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
								</svg>
							</span>
						</div>
						<div class="w-3/4">
							<p class="font-Anton text-white text-[12px]">Price Price Price Price Price Price Price Price Price Price Price Price</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="relative w-full h-[100px]">
		<div class="absolute top-4 custom-shape-divider-top-1672375810">
		    <svg class="fill-black" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
		        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
		    </svg>
		</div>
	</div>

	<div class="relative w-[90%] mx-auto pt-48 pb-24">
		<div class="grid grid-rows-3 grid-flow-col gap-4 px-2 sm:px-4">
		  <div class="row-span-3 bg-gray-900 h-[400px] bg-cover bg-center" 
		  style="background-image: url('https://img.freepik.com/free-photo/beautiful-girl-red-bikini-boat-koh-phi-phi-island-thailand_335224-1384.jpg?w=1480&t=st=1672373124~exp=1672373724~hmac=055e3dce044e3de9912256a8530a07a6e45db608bddf2218c8944e521dd2ddbc);">
		  	<p class="font-Anton text-[24px] sm:text-[32px] text-white pt-4" style="writing-mode: vertical-lr;">The smartest choice</p>
		  </div>
		  <div class="col-span-2 bg-gray-900 bg-cover bg-center" 
		  style="background-image: url('https://img.freepik.com/free-photo/aerial-view-seashore-near-lamai-beach-koh-samui-thailand_335224-1385.jpg?w=1480&t=st=1672374010~exp=1672374610~hmac=c5f1e44e4d4c30ecaab70f5d1859069f50bda50c3ddd6ad1376a934a2c721ba0);">
		  	<p class="font-Anton text-[24px] lg:text-[48px] text-white pl-2 sm:p-4">The smartest choice</p>
		  </div>
		  <div class="row-span-2 col-span-2 bg-gray-900 bg-cover bg-center" 
		  style="background-image: url('https://img.freepik.com/free-photo/cherry-blossoms-castle-himeji-japan_335224-155.jpg?w=1480&t=st=1672373058~exp=1672373658~hmac=b5f2adb0fdab3816a18e04b3f04a558c95be4a2b7b16eb440a3148b02f357363');">
		  	<p class="font-Anton text-[32px] text-white pl-2 sm:pl-4">The smartest choice</p>
		  </div>
		</div>
	</div>

<!-- 	<div class="w-full flex flex-col justify-center items-center h-[1200px]">
		<h1 class="font-Anton bg-gray-200/30 rounded-sm px-2 py-1">{{ $t('greeting') }}</h1>

    <div class="flex flex-col justify-center items-center">
    	<nuxt-link

	      :to="switchLocalePath('en')"
	    >
	      chcange en
	    </nuxt-link>

    	<nuxt-link

	      :to="switchLocalePath('tw')"
	    >
	      change tw
	    </nuxt-link>

	    <nuxt-link

	      :to="switchLocalePath('fr')"
	    >
	      change fr
	    </nuxt-link>

    </div>
	</div> -->

	<div class="relative w-full flex justify-center items-center">
		<div class="absolute top-0 bottom-0 h-full w-full h-[240px] bg-gradient-to-b from-white to-transparent z-[1]"></div>
		<img src="https://img.freepik.com/free-photo/birch-forest-sunny-afternoon-while-autumn-season_146671-19510.jpg?w=1480&t=st=1672376159~exp=1672376759~hmac=4c715a6ba9c4a464525c2bc4dfe19b7b61ce76f69f4d657492779a1c19a4694c" class="w-full">
		<span class="absolute text-white font-Anton text-[72px]">PHOTO</span>
	</div>

	<div class="relative bg-gray-50 w-full h-screen flex flex-col justify-center items-center">
    <div class="w-[90%] font-Anton antialiased flex flex-col justify-center items-center py-6">
      <h5 class="text-[24px] sm:text-[32px]">The smartest choice for <span class="text-[#ff5500]">creatives</span> like you</h5>
      <p class="text-[16px] text-center">Whether you’re looking for designs or photographs, you’ll find the perfect asset on Google.</p>
    </div>
    <div class="absolute top-0 left-0 h-full w-[20px] sm:w-[200px] bg-gradient-to-r from-white to-transparent z-[1]"></div>
      <div class="snap-mandatory snap-x overflow-x-scroll w-[90%] mx-auto overflow-auto p-4">
        <div class="w-[3500px] flex flex-row space-x-4">
          <div 
          v-for="i in 10"
          class="snap-center w-[350px] h-[350px] bg-white border border-gray-300 rounded-lg flex flex-col space-y-6 justify-center items-center">
            <img src="https://nuxt.com/assets/home/ux-fast-light.svg">
            <div>
              <h5 class="text-[48px] font-Anton antialiased">Story</h5>
            </div>
          </div>
        </div>
      </div>
    <div class="absolute top-0 right-0 h-full w-[20px] sm:w-[400px] bg-gradient-to-l from-white to-transparent z-[1]"></div>
  </div>

  <div class="relative bg-gray-800 py-24">
  	<div class="w-full h-full flex flex-col lg:flex-row items-center space-y-6">
  		<div class="w-full lg:w-1/2 flex flex-col justify-center items-center">
  			<div class="w-full sm:w-[70%] px-4">
  				<h5 class="font-Anton text-[21px] text-white tracking-[1px]">Welcome to the new <span class="text-yellow-400">Freepik calendar</span></h5>
  				<h5 class="font-Anton text-[21px] text-white tracking-[1px]"><span class="text-yellow-400">All celebrations and events</span> are at your fingertips</h5>

  				<button class="font-Anton text-white text-[18px] bg-gray-500/30 px-2 py-1 tracking-[1px] rounded-sm mt-4">Browse</button>
  			</div>
  		</div>
  		<div class="w-full lg:w-1/2 flex justify-center items-center">
  			<img src="https://freepik.cdnpk.net/img/home/calendar.webp">
  		</div>
  	</div>
  </div>
	<Teleport to="body">
		<Transition name="slide-up">
	    <div 
	    v-if="VideoOpen" 
	    class="fixed top-0 left-0 w-full h-screen bg-gray-900 flex justify-center items-center z-[101]">
	      <button @click="VideoOpen =! VideoOpen" class="fixed top-4 right-4">
	        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
	      </button>
	      <div class="bg-gray-200 w-[600px] sm:w-full">
	      	<img src="@/assets/image/banner.jpeg">
	      </div>
	    </div>
		</Transition>
	</Teleport>
	</div>
</template>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
}

.slide-up-leave-to {
  opacity: 0;
}

.custom-shape-divider-top-1672375810 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1672375810 svg {
    position: relative;
    display: block;
    width: calc(163% + 1.3px);
    height: 250px;
}
  
</style>