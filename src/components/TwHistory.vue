<template lang="pug">
v-container
	v-layout(justify-center py-4 v-scroll-reveal)
		h1.display-3 社歴
	v-layout(justify-center v-scroll-reveal)
		v-timeline
			v-timeline-item(
				v-for="(year, i) in years"
				:key="i"
				color="grey darken-2"
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
          year: "1900",
          title: "黒潮新聞創立",
          text: "社長 桝井陽造，社員X名とともに，？？市で創立"
        },
        {
          year: "1990",
          title: "海南・海草版",
          text: "吾輩は猫である．名前はまだない．"
        },
        {
          year: "1990",
          title: "田辺・田夷版",
          text: "トンネルを抜けると，雪国だった．"
        },
        {
          year: "1990",
          title: "紀州版",
          text: "このサラダおいしいね，と君がいったから．"
        },
        {
          year: "1990",
          title: "和歌山本社",
          text: "そうかそうか，君はそういうやつなんだな"
        }
      ]
    };
  }
};
</script>

