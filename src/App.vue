<script setup>
import UseAnimations from './components/useanimations/UseAnimations.vue';
import { ref, onMounted } from "vue"
const jsonData = ref(null)

// const jsons = import.meta.glob(["../packages/useanimations/jsons/*.json"])
const jso =()=>  import("./alertCircle.json")
const isOk = ref(false)

onMounted(async () => {

  const res = await jso()
    console.log(777)
  console.log(res.default)
  jsonData.value = res.default
  isOk.value = true

})


const Alert = ref([
  "alertCircle", "alertOctagon", "alertTriangle", "arrowDown", "arrowUp"
])
const Notification = ref([
  'notification', "notification2"
])
const Content = ref([
  "archive"
])
const Action = ref([
  "bookmark", "download", "heart", "lock", "maximizeMinimize", "maximizeMinimize2", "plusToX", "searchToX", "settings", "settings2", "star", "trash", "trash2", "visibility", "visibility2"
])
const Toggling = ref([
  "checkBox", "radioButton", "toggle"
])
const socialMedia = ref([
  "codepen", "facebook", "github", "instagram", "linkedin", "playPauseCircle", "pocket", "twitter"
])
const Loading = ref([
  "infinity", "loading", "loading2"
])
const Navigation = ref([
  "menu", "menu2", "menu3", "menu4"
])
const Media = ref([
  "microphone", "microphone2", "playPause", "skipForward", "skipBack", "video", "video2", "volume"
])
const animsData = ref([
  "activity",
  "airplay",
  "alertCircle",
  "alertOctagon",
  "alertTriangle",
  "archive",
  "arrowDown",
  "arrowDownCircle",
  "arrowLeftCircle",
  "arrowRightCircle",
  "arrowUp",
  "arrowUpCircle",
  "bookmark",
  "behance",
  "calendar",
  "checkBox",
  'checkmark',
  "codepen",
  "copy",
  "download",
  "dribbble",
  "edit",
  "error",
  "explore",
  "facebook",
  "folder",
  "github",
  "help",
  "heart",
  "home",
  "infinity",
  "info",
  "instagram",
  "linkedin",
  "loading",
  "loading2",
  "loading3",
  "lock",
  "mail",
  "maximizeMinimize",
  "maximizeMinimize2",
  "menu",
  "menu2",
  "menu3",
  "menu4",
  "microphone",
  "microphone2",
  "notification",
  "notification2",
  'playPause',
  "playPauseCircle",
  "plusToX",
  "pocket",
  "radioButton",
  "scrollDown",
  "searchToX",
  "settings",
  "settings2",
  "skipForward",
  "skipBack",
  "share",
  "star",
  "toggle",
  "trash",
  "trash2",
  "thumbUp",
  "twitter",
  "userMinus",
  "userPlus",
  "userX",
  "video",
  "video2",
  "visibility",
  "visibility2",
  "volume",
  "youtube",
  "youtube2",
  "zoomIn",
  "zoomOut",
])

</script>

<template>
  <!-- <div v-for="(item,index) in jsonData" >
    {{ index }}.
    {{ item }}
    <UseAnimations  :name="item"></UseAnimations>
  </div> -->
  <div class="demo">

    <div class="demo-zone">
      <h3 class="name">
        Alert
      </h3>
      <div class="icons">
        <use-animations v-if="isOk" :speed="1" :customJson="jsonData" :size=50>
        </use-animations>
        <!-- <div class="ico" v-for="item in Alert">
      <use-animations :speed="1" :name="item" :size=50>
      </use-animations>
      <div class="icon-name">
        {{item}}
      </div>
    </div> -->
      </div>
    </div>

    <!-- <div class="demo-zone">
  <h3 class="name">
    Notification
  </h3>
  <div class="icons" >
    <div class="ico" v-for="item in Notification">
      <use-animations :speed="1" :name="item" :size=50>
      </use-animations>
      <div class="icon-name">
        {{item}}
      </div>
    </div>
  </div>
</div> -->

    <!-- <div class="demo-zone">
  <h3 class="name">
    Content
  </h3>
  <div class="icons" >
    <div class="ico" v-for="item in Content">
      <use-animations :speed="1" :name="item" :size=50>
      </use-animations>
      <div class="icon-name">
        {{item}}
      </div>
    </div>
  </div>
</div>

<div class="demo-zone">
  <h3 class="name">
    Action
  </h3>
  <div class="icons" >
    <div class="ico" v-for="item in Action">
      <use-animations :speed="1" :name="item" :size=50>
      </use-animations>
      <div class="icon-name">
        {{item}}
      </div>
    </div>
  </div>
</div>


<div class="demo-zone">
  <h3 class="name">
    Toggling
  </h3>
  <div class="icons" >
    <div class="ico" v-for="item in Toggling">
      <use-animations :speed="1" :name="item" :size=50>
      </use-animations>
      <div class="icon-name">
        {{item}}
      </div>
    </div>
  </div>
</div>


<div class="demo-zone">
  <h3 class="name">
    socialMedia
  </h3>
  <div class="icons" >
    <div class="ico" v-for="item in socialMedia">
      <use-animations :speed="1" :name="item" :size=50>
      </use-animations>
      <div class="icon-name">
        {{item}}
      </div>
    </div>
  </div>
</div>

<div class="demo-zone">
  <h3 class="name">
    Loading
  </h3>
  <div class="icons" >
    <div class="ico" v-for="item in Loading">
      <use-animations :speed="1" :name="item" :size=50>
      </use-animations>
      <div class="icon-name">
        {{item}}
      </div>
    </div>
  </div>
</div>

<div class="demo-zone">
  <h3 class="name">
    Navigation
  </h3>
  <div class="icons" >
    <div class="ico" v-for="item in Navigation">
      <use-animations :speed="1" :name="item" :size=50>
      </use-animations>
      <div class="icon-name">
        {{item}}
      </div>
    </div>
  </div>
</div>

<div class="demo-zone">
  <h3 class="name">
    Media
  </h3>
  <div class="icons" >
    <div class="ico" v-for="item in Media">
      <use-animations :speed="1" :name="item" :size=50>
      </use-animations>
      <div class="icon-name">
        {{item}}
      </div>
    </div>
  </div>
</div>



 -->
 <div class="demo-zone">
  <h3 class="name">
    ...
  </h3>
  <div class="icons" >
    <div class="ico" v-for="item in animsData">
    <use-animations   strokeColor="#b10040" fillColor="#ff0000" :speed="1"
      :name="item" :size=50>
    </use-animations>
      <div class="icon-name">
        {{item}}
      </div>
    </div>
  </div>
</div>

    <div class="demo-zone"></div>




  </div>
</template>

<style>
.demo {

  width: 70%;
  margin: auto;


}

.name {
  margin-top: 50px;
  margin-bottom: 25px;
}

.icons {
  display: flex;
  width: 90%;
  height: 100%;
  margin: 0;
  align-content: flex-start;
  padding: 0;
  flex-wrap: wrap;
  /* ul盒子里面的内容水平居中 */
  margin: 0 auto;

}

.icon-name {
  color: black;
}

.ico {
  padding: 6rpx 24px;
  margin-right: 32px;
  margin-bottom: 20px;
  width: 130px;
  border-radius: 10%;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>./components/useanimations/UseAnimations.vue
