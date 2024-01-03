<template>
  <section>
    <h1>Trade Pair: {{ tradingPairName }}</h1>
  </section>
  <ClientOnly>
    <highcharts
      :constructor-type="'stockChart'"
      :options="chartOptions"
    ></highcharts>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const router = useRoute();
const tradingPairParam = ref(router.params.pair);
const tradingPairName = tradingPairParam.value?.toString()?.toUpperCase();

const chartOptions = ref({
  rangeSelector: {
    selected: 1,
  },
  plotOptions: {
    candlestick: {
      color: "#e86339",
      upColor: "#40b86c",
    },
  },
  title: {
    text: `${tradingPairName}`,
  },
  series: [
    {
      type: "candlestick",
      name: `${tradingPairName}`,
      data: [],
      dataGrouping: {
        units: [
          [
            "week", // unit name
            [1], // allowed multiples
          ],
          ["month", [1, 2, 3, 4, 6]],
        ],
      },
    },
  ],
});

onMounted(async () => {
  const res = await fetch(
    "https://demo-live-data.highcharts.com/aapl-ohlc.json"
  );
  const data = await res.json();
  chartOptions.value.series[0].data = data;
});
</script>
