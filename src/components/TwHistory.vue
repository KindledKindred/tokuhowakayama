<template lang="pug">
	v-timeline
		v-timeline-item(
			v-for="(year, i) in years"
			:key="i"
			small
		)
			template(v-slot:opposite)
				span.headline.font-weight-bold(
					v-text="year.year"
				)
			.py-3
				h2.headline.font-weight-light.mb-3 {{ year.title }}
				div {{ year.text || '' }}
</template>

<script>
export default {
  name: "TwHistory",

  data() {
    return {
      years: [
        {
          year: "",
          title: ""
        }
      ]
    };
  }
};
</script>

