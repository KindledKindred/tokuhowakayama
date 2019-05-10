<template lang="pug">
	v-container
		h1 採用情報
		TwRecruitJob(v-for="(job, i) in jobs" :key="i")
			template(v-slot:job-title) {{ job.title }}
			template(v-slot:job-content) {{ job.content }}
			template(v-slot:job-salary) {{ job.salary }}
			template(v-slot:job-workingform) {{ job.workingform }}
			template(v-slot:job-skill) {{ job.skill }}
			template(v-slot:job-recruit) {{ job.recruit }}
</template>

<script>
import TwRecruitJob from "@/components/TwRecruitJob";

export default {
  name: "TwRecruit",

  components: {
    TwRecruitJob
  },

  data() {
    return {
      jobs: [
        {
          title: "未経験",
          content: "志望業種についていただきます．",
          salary: "志望業種の7割ほど",
          workingform: "志望業種による",
          skill: "なし",
          recruit: "デザイナー志望のみ募集中"
        },
        {
          title: "デザイナー",
          content: "紙面構成，掲載写真の選定，広告の作成",
          salary: "30万円",
          workingform: "平日8時間",
          skill: "InDesignの使用経験1年以上",
          recruit: "募集中"
        },
        {
          title: "記者",
          content: "取材および記事の執筆",
          salary: "25万円",
          workingform: "不定",
          skill: "一眼レフによる撮影，可能ならば和歌山の道に詳しいこと",
          recruit: "現在募集を終了しています"
        },
        {
          title: "集金員",
          content: "各クライアントへ赴いての集金業務",
          salary: "件数によりXX円",
          workingform: "不定",
          skill: "可能ならば和歌山の道に詳しいこと",
          recruit: "現在募集を終了しています"
        },
        {
          title: "発送手伝い",
          content: "新聞発送時の手伝い",
          salary: "固定給XX円",
          workingform: "月3回数時間",
          skill: "なし",
          recruit: "現在募集を終了しています"
        }
      ]
    };
  }
};
</script>

