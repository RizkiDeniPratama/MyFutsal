<template>
  <div>
    <section id="gallery">
      <div class="container">
        <div class="col-auto .mr-auto">
          <div class="row mb-4">
            <div class="row d-flex justify-content-center">
              <CardVenue v-for="(venue, i) in venues" :key="i" :venue="venue" />
            </div>
          </div>
        </div>
        <LiveScore />
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useVenueStore } from "../stores/venue";
import CardVenue from "../components/VenueList.vue";
import LiveScore from "../components/LiveScore.vue";
export default {
  name: "HomePage",
  components: {
    CardVenue,
    LiveScore,
  },
  methods: {
    ...mapActions(useVenueStore, ["getAll"]),
  },
  computed: {
    ...mapState(useVenueStore, ["venues", "errEmpty"]),
  },
  async mounted() {
    await this.getAll();
  },
};
</script>

<style></style>
