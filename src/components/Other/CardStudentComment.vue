<template>

  <div class="row-comments">
    <div class="col-one">
      <div class="top-row">
        <div class="user-img">
          <img :src="student.userIcon" alt="user-icon">
        </div>
        <div class="user-info">
          <h5 dir="rtl">{{ student.userName }}</h5>
          <p dir="rtl">{{ student.typeOfCourse }}</p>
        </div>
      </div>
      <div class="bottom-row">
        <p dir="rtl">{{ student.commentOfStudent }}</p>
      </div>
    </div>
    <div class="col-two">
      <div class="box-video">
        <div class="video-div" v-html="student.video"></div>
        <!--        <img :src="student.posterVideo" alt="">-->
      </div>
    </div>
  </div>
  <hr>

</template>

<script>


export default {
  name: "CardStudentComment",
  props: {
    student: Object
  },
  setup() {

    return {}
  },
}
</script>

<style scoped>
.row-comments {
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  margin: 5rem 0;
}

.col-one, .col-two {
  width: 500px;
}

.top-row {
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.user-info h5 {
  font-size: 1rem;
  font-weight: bold;
}

.user-info p {
  margin-top: 8px;
  font-size: 0.8rem;
}

.bottom-row p {
  text-align: justify;
  font-weight: 500;
}

.user-img {
  margin-left: 1rem;
}

.col-one img {
  width: 60px;
  height: 60px;
}

.box-video img {
  border: 1px solid #ebebeb;
  border-radius: 8px;
  width: 420px;
  height: 280px;
}

.video-div {
  width: 420px;
  height: 280px;
}

@media (max-width: 900px) {
  .row-comments {
    flex-direction: column;
  }
}
</style>