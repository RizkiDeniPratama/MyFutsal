<template>
  <div>
    <h2>Live Score </h2>
    <div
      id="wg-api-football-livescore"
      data-host="v3.football.api-sports.io"
      data-refresh="60"
      data-key="448484b4555b35825c7937ead01f562e"
      data-theme="light"
      data-show-errors="true"
      class="api_football_loader"
    ></div>
  </div>
</template>

<script>
export default {
  name: "LiveScore",
};
</script>
