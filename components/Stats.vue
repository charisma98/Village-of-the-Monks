<template>
  <div
    class="bg-yellow-500 flex flex-col items-cente justify-between text-yellow-900 shadow-lg p-6"
  >
    <div class="flex items-center h-24">
      <div class="w-1/4 text-center">
        <img class="stat-icon mx-auto" src="~/assets/images/cloudy-outline.svg" />
      </div>
      <div>
        <p class="text-xl stat-info tracking-wide">{{ tempature }}°C</p>
        <p class="text-xs text-yellow-800 uppercase">{{ description }}</p>
      </div>
    </div>
    <div class="flex items-center h-24">
      <div class="w-1/4 text-center">
        <img class="stat-icon mx-auto" src="~/assets/images/people-outline.svg" />
      </div>
      <div>
        <p class="text-xl stat-info tracking-wide">1,543</p>
        <p class="text-xs text-yellow-800 uppercase">Population</p>
      </div>
    </div>
    <div class="flex items-center h-24">
      <div class="w-1/4 text-center">
        <img class="stat-icon mx-auto" src="~/assets/images/locate-outline.svg" />
      </div>
      <div>
        <p class="text-xl stat-info tracking-wide">52.543925 -6.957807</p>
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
