<template lang="pug">
	v-toolbar(app dark)
		v-toolbar-title.headline
			span 和歌山特報
		v-spacer
		v-toolbar-items
			v-btn(
				flat
				href="/"
			) 企業ポリシー
			v-btn(
				flat
				href="/"
			) 採用情報
			v-btn(
				flat
				href="/"
			) お問い合わせ
</template>

<script>
export default {
  name: "TwGlobalNavigation"
};
</script>
