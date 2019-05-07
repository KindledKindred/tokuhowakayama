<template lang="pug">
  v-app
    v-toolbar(app)
      v-toolbar-title.headline
        span 和歌山特報
      v-spacer
      v-btn(
        flat
        href="/"
      )
        span.mx-auto 採用情報
    
    v-content
      p lorem ipsum
</template>


<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      //
    };
  }
};
</script>
