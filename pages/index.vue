<template>
  <div class="w-full h-[200%] flex flex-col justify-between items-start">
    <Title>Lukas Rudat</Title>
    <div class="w-full h-1/2 p-6 flex flex-col justify-between items-start">
      <div class="w-full h-[90%] flex justify-between items-start">
        <div class="w-5/12 flex flex-col justify-evenly items-center">
          <div
            class="shadow-xl w-full h-full bg-l-blue bg-opacity-25 dark:bg-opacity-10 rounded-md p-4 py-20 text-lg">
            <h1 class="text-[6.5rem] h-[150px] w-full">
              {{ $t("welcomeTitle") }}
            </h1>
            <p>
              {{ $t("welcomeDescription") }}
            </p>
          </div>
        </div>
        <div class="w-6/12 h-full flex flex-col justify-between items-center">
          <div
            class="size-[200px] rounded-[100%] overflow-hidden border-[5px] border-black">
            <ThreeToD />
          </div>
          <div
            class="shadow-xl h-[400px] w-full rounded-md p-4 bg-l-red bg-opacity-25 dark:bg-opacity-10 flex">
            <div class="w-2/3 h-full pr-4 flex flex-col justify-between">
              <div>
                <div class="flex items-center space-x-2">
                  <h2 class="text-2xl">Terror Nightmare Towers</h2>
                  <p class="self-end">(TNT)</p>
                </div>
                <p>
                  {{ $t("indexProjectDesc") }}
                </p>
              </div>
              <NuxtLink
                to="/projects/tnt"
                class="w-32 h-10 mr-20 hover:bg-l-red border-2 hover:border-l-red duration-200 border-indigo-700 rounded-md p-3 flex justify-center items-center"
                >{{ $t("indexProjectLink") }}</NuxtLink
              >
            </div>
            <img
              src="/static/images/TNT.png"
              alt="Random Picture"
              class="w-1/3 rounded-sm object-contain" />
          </div>
        </div>
      </div>
      <div class="w-full h-[10%] flex justify-center items-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="h-[60%]">
          <path
            fill="#545454"
            d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
        </svg>
      </div>
    </div>
    <div class="w-full h-1/2 p-6">
      <div class="w-full h-full overflow-auto">
        <ContactForm />
      </div>
    </div>
  </div>
</template>
