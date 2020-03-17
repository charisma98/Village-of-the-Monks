<template>
  <div
    class="flex flex-col justify-between p-6 text-yellow-900 bg-yellow-500 shadow-lg items-cente"
  >
    <div class="flex items-center h-24">
      <div class="w-1/4 text-center">
        <img class="mx-auto stat-icon" src="~/assets/images/cloudy-outline.svg" />
      </div>
      <div>
        <p class="text-xl tracking-wide stat-info">{{ tempature }}°C</p>
        <p class="text-xs text-yellow-800 uppercase">{{ description }}</p>
      </div>
    </div>
    <div class="flex items-center h-24">
      <div class="w-1/4 text-center">
        <img class="mx-auto stat-icon" src="~/assets/images/people-outline.svg" />
      </div>
      <div>
        <p class="text-xl tracking-wide stat-info">1,543</p>
        <p class="text-xs text-yellow-800 uppercase">Population</p>
      </div>
    </div>
    <div class="flex items-center h-24">
      <div class="w-1/4 text-center">
        <img class="mx-auto stat-icon" src="~/assets/images/locate-outline.svg" />
      </div>
      <div>
        <p class="text-xl tracking-wide stat-info">52.543925 -6.957807</p>
        <p class="text-xs text-yellow-800 uppercase">Coordinates</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
let url =
  "https://api.openweathermap.org/data/2.5/weather?id=2963905&units=metric&APPID=";
let key = "e8368e8bc7f7b7aff54fd8cb7a184839";

export default {
  data() {
    return {
      tempature: "",
      description: ""
    };
  },
  beforeMount() {
    axios.get(url + key).then(res => {
      this.tempature = res.data.main.temp;
      this.description = res.data.weather[0].description;
    });
  }
};
</script>

<style>
.stat-icon {
  width: 42px;
  height: 42px;
  filter: drop-shadow(0 1px 1px rgb(155, 113, 41, 0.5));
}
.stat-info {
  color: #fff;
  text-shadow: 0 1px 1px rgba(181, 129, 41, 0.75),
    0 1px 0 rgb(144, 106, 30, 0.1);
  line-height: 1.25;
}
</style>
