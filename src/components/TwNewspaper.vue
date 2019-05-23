<template lang="pug">
#Newspaper
	#News01
		v-container
			v-layout.mt-4.py-4.mt-20vh.fade-in(row justify-center data-delighter v-scroll-reveal)
				v-flex(sm5 mt-10vh pa-4 shrink)
					p.headline 和歌山，海南，有田，岩出，田辺……各地域に根差した報道は地元紙ならでは．中小企業であるがゆえ読者の声が直接記者に届きやすく，編集過程で余計なバイアスが掛かりにくくなっています．
				v-flex(sm7 pa-4)
					h1.display-4.ml-4.py-4 地域の声を
					h1.display-4.ml-4 届ける
	#News02
		v-container
			v-layout.my-20vh.px-4.fade-in(row justify-center wrap data-delighter v-scroll-reveal)
				h1.display-4.py-4 中立の精神
				p.headline.py-4 偏りを意識して記事を読む．新聞社は読者のそんな姿勢に甘えているだけではいけません．わたしたちも，利権にとらわれず「是は是，非は非」の精神で記事を書いています．真の中立とは難しいものですが，読者と新聞社，両方が目指していれば，中立からそう遠くなり場所に立てるはず．少なくとも，そう信じています．
	#News03
		v-container
			v-layout.my-20vh.fade-in(row justify-center data-delighter v-scroll-reveal)
				v-flex(sm7 pa-4)
					h1.display-4 そして，
					h1.display-4 ユニークに
				v-flex(sm5 mt-10vh pa-4 shrink)
					p.headline 和歌山特報なら，新聞を読むときだって楽しめます．紙面の構成から文章に至るまで，和歌山の気さくさがぎゅっと詰まったような面白さ．日常に寄り添う，そんな一紙がここにあります．
</template>

<script>
export default {
  name: "TwNewspaper"
};
</script>

<style lang="stylus" scoped>
#News02 {
	clip-path polygon(0 10%, 60% 0, 100% 5%, 100% 90%, 45% 100%, 0 85%)
	color rgba(235, 235, 235, .9)
  background-color rgb(35, 35, 35)
}
</style>


