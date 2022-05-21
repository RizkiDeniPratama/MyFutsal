<template>
  <div class="col-lg-3 mb-2 " style="width: 20rem">
    <div class="card h-100 border border-light ">
      <img :src="venue.imageUrl" class="card-img-top " />
      <div class="card-body">
        <div class="row">
          <div class="col-9">
            <h5 class="card-title fw-normal">{{ venue.name }}</h5>
          </div>
          <div class="col-3 text-end"></div>
        </div>
      </div>
      <div class="card-footer bg-body border-0 d-grid gap-2">
        <p class="card-text fw-bold">{{ venue.address }}</p>
        <a href="#" class="btn btn-outline-primary btn-sm">{{venue.field}} Lapangan</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VenueList",
  props: ["venue"],
  mounted() {
    console.log("ini props", this.venue);
  },
};
</script>

<style></style>
