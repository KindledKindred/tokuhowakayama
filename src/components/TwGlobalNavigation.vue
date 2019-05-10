<template lang="pug">
	v-toolbar(app dark)
		v-toolbar-items
			v-btn(
				flat
				to="/"
			) 和歌山特報
		v-spacer
		v-toolbar-items
			v-btn(
				flat
				to="/"
			) 企業ポリシー
			v-btn(
				flat
				to="/recruit"
			) 採用情報
			v-btn(
				flat
				to="/"
			) お問い合わせ
</template>

<script>
export default {
  name: "TwGlobalNavigation"
};
</script>

<style lang="stylus" scoped></style>

