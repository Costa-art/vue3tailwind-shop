import { unixify } from 'prettier';
import class from '@vue/cli-service';
import class from '@vue/cli-service';
import class from '@vue/cli-service';

<template>
  <div
    class="
      bg-[#ffdf8c]
      h-[1140px]
      w-[1515px]
      container
      mx-auto
      pt-[45px]
      pr-[55px]
      pb-[63px]
      pl-[45px]
      font-nova
    "
  >
    <div class="rounded-lg shadow-lg bg-white min-h-4xl">
      <header class="flex flex-row justify-between">
        <div class="flex flex-row">
          <div class="mt-[54px] ml-[77px] mr-[17px] mb-[45px]">
            <img src="../assets/img/logo.png" alt="logo" />
          </div>
          <div class="mt-[49px] mb-[40px]">
            <p class="text-2xl font-nova font-extrabold uppercase">
              vue3Tailwind PIZZA
            </p>
            <p class="">самая вкусная пицца во вселенной</p>
          </div>
        </div>

        <div class="mt-[52px] mb-[45px]">
          <button class="btn-hd flex flex-row">
            <p
              class="font-bold text-white uppercase border-r border-white pr-4"
            >
              520 ₽
            </p>
            <div class="relative">
              <p class="font-bold text-white pl-9">3</p>
              <img
                class="absolute top-[1px] left-[10px]"
                src="../assets/img/basket.png"
                alt="logo"
              />
            </div>
          </button>
        </div>
      </header>
      <hr class="line-1 mb-[40px]" />

      <nav class="mb-[32px]">
        <ul class="flex flex-row font-nova ml-[67px]">
          <li class="">
            <button
              class="button-bg mr-[10px] hover:bg-gray-900 hover:text-white"
            >
              Все
            </button>
          </li>
          <li>
            <button
              class="button-bg mr-[10px] hover:bg-gray-900 hover:text-white"
            >
              Мясные
            </button>
          </li>
          <li>
            <button
              class="button-bg mr-[10px] hover:bg-gray-900 hover:text-white"
            >
              Вегетарианские
            </button>
          </li>
          <li>
            <button
              class="button-bg mr-[10px] hover:bg-gray-900 hover:text-white"
            >
              Гриль
            </button>
          </li>
          <li>
            <button
              class="button-bg mr-[10px] hover:bg-gray-900 hover:text-white"
            >
              Острые
            </button>
          </li>
          <li>
            <button
              class="button-bg mr-[10px] hover:bg-gray-900 hover:text-white"
            >
              Закрытые
            </button>
          </li>
        </ul>
      </nav>
      <p class="text-3xl font-bold mb-[35px] ml-[67px]">Все пиццы</p>
      <div class=" ml-[67px] flex flex-row">
        <div class="">
          <img src="../assets/img/image2.png" alt="" />
          <p class="text-xl  text-center font-extrabold">Чизбургер-пицца</p>
          <div class=" grid grid-cols-2">
            <div class="">
              <button class="btn-card">bghfghfghfhf</button>
            </div>
            <div class="">vbbvbv</div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>
