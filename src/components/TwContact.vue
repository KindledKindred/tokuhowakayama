<template lang="pug">
	v-container
		.display-1.text-md-center.mt-20vh.pb-4 お問い合わせ
		v-layout(row).mt-4.pa-4
			v-btn(flat)
				v-icon.pr-4(x-large) phone
				.display-1 0737-52-5855
		v-layout(row).mt-4.pa-4
			v-btn(flat)
				v-icon.pr-4(x-large) mail
				.headline.v-btn-lowercase info@tokuhowakayama.com
</template>

<script>
export default {
  name: "TwContact"
};
</script>

