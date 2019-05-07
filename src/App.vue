<template lang="pug">
  v-app
    TwGlobalNavigation
    
    v-content
      p lorem ipsum
</template>


<script>
import TwGlobalNavigation from "./components/TwGlobalNavigation";

export default {
  name: "App",
  components: {
    TwGlobalNavigation
  },
  data() {
    return {
      //
    };
  }
};
</script>
