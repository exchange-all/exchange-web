import { defineNuxtPlugin } from "#app";
import Highcharts from "highcharts";
import HighchartsVue from "highcharts-vue";
import stockInit from "highcharts/modules/stock";

if (typeof Highcharts === "object") {
  stockInit(Highcharts);
}

export default defineNuxtPlugin((app) => {
  app.vueApp.use(HighchartsVue);
});
