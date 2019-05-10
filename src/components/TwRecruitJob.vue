<template lang="pug">
		.job.py-4
			h4.headline.pb-3
				slot(name="job-title")
			p
				slot(name="job-content")
			v-layout(row).background-grey.pa-2
				v-flex(md4) 月給
				v-flex(md8)
					slot(name="job-salary")
			v-layout(row).pa-2
				v-flex(md4) 勤務形態
				v-flex(md8)
					slot(name="job-workingform")
			v-layout(row).background-grey.pa-2
				v-flex(md4) 技能
				v-flex(md8)
					slot(name="job-skill")
			v-layout(row).pa-2
				v-flex(md4) 募集状況
				v-flex(md8)
					slot(name="job-recruit")
</template>

<script>
export default {
  name: "TwRecruitJob"
};
</script>

<style lang="stylus" scoped>
.job {
  font-size: 1.2rem;
}

.background-grey {
  background-color: rgba(215, 215, 215, 0.2);
}
</style>

