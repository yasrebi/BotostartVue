<template>

  <section>
    <div class="container-comments mx-auto">
      <div class="row-root" v-for="(student,index) in students" :key="index">
        <CardStudentComment :student="student"/>
      </div>
    </div>
  </section>


</template>

<script>

import {useTitle} from '@vueuse/core';
import {reactive} from "vue";
import CardStudentComment from "@/components/Other/CardStudentComment.vue";

export default {
  name: "StudentComments",
  components: {
    CardStudentComment
  },
  setup() {
    const title = useTitle();
    title.value = 'نظرات دانشجویان بوتواستارت';


    const students = reactive([
      {
        userName: "سارا رحیمی",
        typeOfCourse: "دانشجوی HTML&CSS و جاوااسکریپت",
        commentOfStudent: "من دوره HTML&CSS و جاوااسکریپت استاد عظمی رو تهیه کردم و به نظرم علاوه بر اینکه خیلی ساده و قابل فهم توضیح دادن، پشتیبانی خیلی خوب و قوی داره، ینی هر وقت که سوالی برامون پیش بیاد میتونیم بپرسیم و در کمترین زمان ممکن جواب رو میگیریم",
        // videoStudent: require("@/assets/img/student-comments/video/sara-rahimi.mov"),
        posterVideo: require("@/assets/img/student-comments/sara-rahimi.png"),
        userIcon: require("@/assets/img/student-comments/user.png"),
        video: "<video src=\"src/assets/video/students-comments/sara-rahimi.mov.crdownload\" width=\"100%\" height=\"100%\" style='border-radius: 10px;' poster='src/assets/img/student-comments/sara-rahimi.png' controls>\n" +
            "        </video>",
      },
      {
        userName: "کیان بابان(ساکن کانادا)",
        typeOfCourse: "دانشجوی جاوااسکریپت و ریکت",
        commentOfStudent: "من در دوره های HTML&CSS و جاوااسکریپت و ریکت سایت بوتواستارت شرکت کردم و تونستم تو کمتر از چهار ماه بدون هیچ پیشینه‌ای در زمینه فرانت اند به تسلط خوبی برسم. ",
        // videoStudent: require("@/assets/img/student-comments/video/sara-rahimi.mov"),
        posterVideo: require("@/assets/img/student-comments/sara-rahimi.png"),
        userIcon: require("@/assets/img/student-comments/user.png"),
        video: "<video src=\"src/assets/video/students-comments/sara-rahimi.mov.crdownload\" width=\"100%\" height=\"100%\" style='border-radius: 10px;' poster='src/assets/img/student-comments/sara-rahimi.png' controls>\n" +
            "        </video>",
      },
      {
        userName: "مهدی احسانی",
        typeOfCourse: "دانشجوی جاوااسکریپت و ریکت",
        commentOfStudent: "این دوره قطعا یکی از بهترین دوره هایی بود که من تا الان دیده بودم و همه چی داخلش توضیح داده شده و یکی از امکانات خوبی که این دوره داره اینه که پشتیبانی آنلاین داره و میتونیم هر سوالی راجب هر مبحثی رو بپرسیم.",
        // videoStudent: require("@/assets/img/student-comments/video/sara-rahimi.mov"),
        posterVideo: require("@/assets/img/student-comments/sara-rahimi.png"),
        userIcon: require("@/assets/img/student-comments/user.png"),
        video: "<video src=\"src/assets/video/students-comments/sara-rahimi.mov.crdownload\" width=\"100%\" height=\"100%\" style='border-radius: 10px;' poster='src/assets/img/student-comments/sara-rahimi.png' controls>\n" +
            "        </video>",
      },
      {
        userName: "سمیرا فرخ نژاد(ساکن استرالیا)",
        typeOfCourse: "دانشجوی جاوااسکریپت و ریکت",
        commentOfStudent: "من سه ماه پیش دوره های ریکت و جاوااسکریپت سایت بوتواستارت رو شرکت کردم، پشتیبانی دوره واقعا عالی بود. از لحظه به لحظه دوره لذت بردم و الانم منجر به کار پیدا کردن من شد.",
        // videoStudent: require("@/assets/img/student-comments/video/sara-rahimi.mov"),
        posterVideo: require("@/assets/img/student-comments/sara-rahimi.png"),
        userIcon: require("@/assets/img/student-comments/user.png"),
        video: "<video src=\"src/assets/video/students-comments/sara-rahimi.mov.crdownload\" width=\"100%\" height=\"100%\" style='border-radius: 10px;' poster='src/assets/img/student-comments/sara-rahimi.png' controls>\n" +
            "        </video>",
      },
      {
        userName: "کسری اخوان",
        typeOfCourse: "دانشجوی ریکت و گیت",
        commentOfStudent: "ریکت آقا میلاد حرف نداره، صفر تا صد کارو خیلی سلیس و روون توضیح داده. در مورد پشتیبانی هم اینکه هر وقت پیام بدین تو کوتاه ترین زمان ممکن جوابتون رو میده.",
        // videoStudent: require("@/assets/img/student-comments/video/sara-rahimi.mov"),
        posterVideo: require("@/assets/img/student-comments/sara-rahimi.png"),
        userIcon: require("@/assets/img/student-comments/user.png"),
        video: "<video src=\"src/assets/video/students-comments/sara-rahimi.mov.crdownload\" width=\"100%\" height=\"100%\" style='border-radius: 10px;' poster='src/assets/img/student-comments/sara-rahimi.png' controls>\n" +
            "        </video>",
      },
      {
        userName: "امیر خسروشاهی",
        typeOfCourse: "دانشجوی جاوااسکریپت و ریکت",
        commentOfStudent: "من بعد از مشاهده دوره ها و پشت سر گذاشتن یه سری مصاحبه های فنی تونستم استخدام بشم. تموم نکاتی رو که دوره گفتی تو مصاحبه پرسیدن و تونستم به خوبی قبول بشم.",
        // videoStudent: require("@/assets/img/student-comments/video/sara-rahimi.mov"),
        posterVideo: require("@/assets/img/student-comments/sara-rahimi.png"),
        userIcon: require("@/assets/img/student-comments/user.png"),
        video: "<video src=\"src/assets/video/students-comments/sara-rahimi.mov.crdownload\" width=\"100%\" height=\"100%\" style='border-radius: 10px;' poster='src/assets/img/student-comments/sara-rahimi.png' controls>\n" +
            "        </video>",
      },
    ]);


    return {students}
  }
};
</script>

<style scoped>


.container-comments {
  max-width: 1200px;
  padding: 0 1rem;
  margin: 3rem auto;
}


@media (max-width: 900px) {
  .container-comments {
    max-width: 860px;
    margin: auto;
  }
}


</style>