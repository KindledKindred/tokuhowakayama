<template lang="pug">
  #home
    TwTop.mt-4.pt-4
    TwNewspaper
    TwHistory
</template>


<script>
import TwTop from "../components/TwTop";
import TwNewspaper from "../components/TwNewspaper";
import TwHistory from "../components/TwHistory";

export default {
  name: "Home",
  components: {
    TwTop,
    TwNewspaper,
    TwHistory
  },
  data() {
    return {
      //
    };
  }
};
</script>