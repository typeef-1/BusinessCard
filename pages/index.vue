<script setup>
let ok=ref(true);
// Прям чуть чуть js
</script>

<template>
  <div class="relative flex min-h-screen flex-col bg-slate-50 text-gray-800  overflow-x-hidden" v-if="ok"
    style="font-family: 'Plus Jakarta Sans', 'Noto Sans', sans-serif;">
    <!-- не придумал как настроить шрифт иначе :( :( :( :( :( :( sorry-->
    <div class="layout-container flex h-full grow flex-col">
      <div class="px-4 md:px-40 flex flex-1 justify-center py-5">
        <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
          <header class="flex items-center justify-between whitespace-nowrap border-b border-solid">
            <div class="flex items-center gap-4 text-[#0e141b]">
              <div class="size-4">
                <!-- здесь будет картинка -->
              </div>
              <h2 class="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">ЛПНС</h2>
            </div>
            <div class="flex flex-1 justify-end gep-8">
              <div class="flex flex-1 justify-end gap-8">
                <a class="text-[#0e141b] text-sm font-medium leading-normal" href="#">Работа</a>
                <a class="text-[#0e141b] text-sm font-medium leading-normal" href="#">Прайс</a>
                <a class="text-[#0e141b] text-sm font-medium leading-normal" href="#">Достижения</a>
                <a class="text-[#0e141b] text-sm font-medium leading-normal" href="#">Контакты</a>
              </div>
            </div>
          </header>
          <div class="@container mt-8">
            <div class="@md:p-4">
              <div
                class="bg-[url(https://i.pinimg.com/736x/bd/5f/99/bd5f991e7faa5befa88dd14f8dccdd32.jpg)] flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @md:gap-8 rounded-xl items-center justify-center p-4">
                <div class="flex flex-col gap-2 text-center">
                  <h1 class="text-white text-xl font-black leading-tight tracking-[-0.033em] @md:text-3xl">
                    ЛПНС - лучший прогер на свете
                  </h1>
                  <h2 class="text-white text-sm font-normal leading-tight @md:text-base">
                    Я самый лучший веб-разработчик по своему скромному мнению, получивший 1024 шишки в МШП
                  </h2>
                </div>
                <button @click="ok=!ok" href="https://rutube.ru/video/a28817bd560a6ef3e3de9317982c791c/" class="mt-4 px-6 py-2.5 rounded-lg bg-[#10213f] hover:bg-[#153e69] text-white font-semibold shadow-[0_4px_12px_rgba(0,0,0,0.2)] ring-1 ring-inset ring-white/10 transition-all duration-300 tracking-wide">
                  Проверить (кликабельно)
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-10 py-10 @container">
            <div class="flex flex-col gap-4">
              <h1 class="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight @md:text-4xl">
                Где я уже наследил?
              </h1>
              <p class="text-[#0e141b] text-base font-normal max-w-[720px]">
                Я работал над самыми популярными сайтами в мире: мыло-ромашка, интернет-магазин "недоставим" и подбор
                персонала в "коты матросы". Вы не узнаете моего имени, но подозрения будут.
              </p>
            </div>
          </div>
          <h2 class="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 ">Мои творения
          </h2>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 p-4">
            <div class="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
              <div
                class="bg-[url(https://get.wallhere.com/photo/digital-art-mountains-forest-river-1911279.jpg)] aspect-video bg-cover bg-center transform transition-transform duration-300 group-hover:scale-105">
              </div>
              <div class="p-3">
                <p class="text-[#0e141b] text-base font-medium"> Мыло-ромашка </p>
                <p class="text-[#4e7397] text-sm">2023</p>
              </div>
            </div><div class="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
              <div
                class="bg-[url(https://i.pinimg.com/736x/a8/7b/66/a87b66b8337ed8239efa234826febf6e.jpg)] aspect-video bg-cover bg-center transform transition-transform duration-300 group-hover:scale-105">
              </div>
              <div class="p-3">
                <p class="text-[#0e141b] text-base font-medium"> Недоставим </p>
                <p class="text-[#4e7397] text-sm">2022</p>
              </div>
            </div><div class="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
              <div
                class="bg-[url(https://i0.wp.com/abrakadabra.fun/uploads/posts/2022-02/1644861105_7-abrakadabra-fun-p-gori-minimalizm-risunok-25.jpg?ssl=1)] aspect-video bg-cover bg-center transform transition-transform duration-300 group-hover:scale-105">
              </div>
              <div class="p-3">
                <p class="text-[#0e141b] text-base font-medium"> Коты матросы </p>
                <p class="text-[#4e7397] text-sm">2021</p>
              </div>
            </div><div class="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
              <div
                class="bg-[url(https://avatars.mds.yandex.net/i?id=6cca982a1c902c135137c0520c4a63a1_l-3451557-images-thumbs&n=13)] aspect-video bg-cover bg-center transform transition-transform duration-300 group-hover:scale-105">
              </div>
              <div class="p-3">
                <p class="text-[#0e141b] text-base font-medium"> Этот сайт </p>
                <p class="text-[#4e7397] text-sm">2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <iframe width="720" height="405" src="https://rutube.ru/play/embed/a28817bd560a6ef3e3de9317982c791c/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
  <!-- Не обижайтесь :( -->
  </div>
</template>