<template lang="pug">
.clip
	v-container
		v-layout.my-20vh(row)
			v-flex(md-7)
				h1.display-4.slope-2.py-4 Tokuho
				h1.display-4.slope-2 Wakayama
				p.headline.slope-1.mt-10vh.ml-4.pa-4 徹底した地元主義
</template>

<script>
export default {
  name: "TwTop"
};
</script>

<style lang="stylus" scoped>
@keyframes slope {
  100% {
    transform: rotate(-4deg);
  }
}

.slope-1 {
  animation: fadeIn 3s, slope 0.2s 4s ease-in-out forwards;
}

.slope-2 {
  animation: fadeIn 3s, slope 0.2s 6.5s ease-in-out forwards;
}
</style>

