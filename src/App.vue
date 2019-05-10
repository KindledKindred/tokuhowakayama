<template lang="pug">
  #app
    v-app
      TwGlobalNavigation
      router-view
</template>


<script>
import TwGlobalNavigation from "./components/TwGlobalNavigation";
import Home from "./views/Home";

export default {
  name: "App",
  components: {
    TwGlobalNavigation,
    Home
  }
};
</script>

<style lang="stylus">
.mt-10vh {
  margin-top: 10vh;
}

.mt-20vh {
  margin-top: 20vh;
}

.my-20vh {
  margin-top: 20vh;
  margin-bottom: 20vh;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
