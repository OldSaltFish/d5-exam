<script setup lang="ts">
import { ref } from 'vue';
import decoImg from './assets/deco.png';
let step = ref(2);
const FIRST_STEP = 0;
const LAST_STEP = 2;

const execUpload = (file: File) => {
  return new Promise((resolve, __) => {
    resolve({ status: 'success', files: [{ url: 'https://xxx.png', name: file.name }] });
  });
};
const handleStepNext = () => {
  if (step.value < LAST_STEP) {
    step.value += 1;
  } else {
    step.value = FIRST_STEP;
  }
}
// current 表示已经完成的步骤，current+1为当前步骤
const handleStepChange = (current: number) => {
  step.value = current;
};
</script>

<template>
  <div class="relative flex flex-col md:flex-row h-100vh bg-#F8FBF9 pt-16px md:pt-100px">

    <section class="relative z-0">
      <div class="md:w-36vw w-full px-16px md:px-5vw pt-21px">
        <h1 class="text-2rem md:text-40px">Finish!<br />Upload your resume</h1>
        <p class="md:text-20px text-#A5A5A5">Upload your resume, the platform will help you parse and optimize, you can
          also skip this step</p>
      </div>
    </section>
    <img class="absolute top-0 right-0 md:inset-auto w-30vw md:w-auto md:top-auto md:bottom-0 md:h-52%" :src="decoImg"
      alt=""></img>
    <section class="pb-55px mx-16px xl:pl-102px md:pl-24px flex-grow">
      <div
        class="flex flex-col items-center justify-between h-full pt-30px px-8px xl:px-4vw md:px-24px shadow-[0_2px_20px_0_#13437026] rounded-32px bg-#FFFFFF ">
        <div class="w-full flex-grow flex flex-col" v-if="step === 0">
          <h2 class="text-center text-2rem md:text-36px">第一步</h2>
        </div>
        <div class="w-full flex-grow flex flex-col" v-if="step === 1">
          <h2 class="text-center text-2rem md:text-36px">第二步</h2>
        </div>
        <div class="w-full flex-grow flex flex-col" v-if="step === 2">
          <h2 class="text-center text-2rem md:text-36px">Upload file</h2>
          <div class="upload my-8px md:mt-53px flex-grow">
            <!-- <t-upload action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo" autoUpload
              :requestMethod="execUpload" draggable /> -->
            <t-upload action="#" autoUpload
              :requestMethod="execUpload" draggable />
          </div>
        </div>
        <div class="step-control flex flex-col items-center pb-16px md:pb-86px">
          <div class="flex gap-4px md:gap-49px">
            <button
              :class="`${step === LAST_STEP ? 'bg-#75ACFF' : 'bg-#1B5AFF'} w-40vw md:w-272px px-8px h-48px text-24px text-#FFFFFF rounded-8px`"
              :disabled="step === LAST_STEP" @click="handleStepNext">{{ step === LAST_STEP ? 'Last Step' : 'Next' }}</button>
            <button v-if="step === LAST_STEP"
              class="w-40vw md:w-272px px-8px h-48px bg-#1B5AFF text-24px text-#FFFFFF rounded-8px hover:bg-blue-500 active:bg-blue-700">Finish</button>
          </div>

          <div class="step mt-8px md:mt-104px">
            <div class="step-left"></div>
            <t-steps :current="step" :default-current="3" :onChange="handleStepChange">
              <!-- <t-step-item title="步骤1" />
            <t-step-item title="步骤2" />
            <t-step-item title="步骤3" /> -->
              <t-step-item />
              <t-step-item />
              <t-step-item />
            </t-steps>
            <div class="step-right"></div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<style scoped>
/* #region 修改上传组件以满足要求 */
.upload {
  width: 100%;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.upload :deep(.t-upload) {
  width: 100%;
  height: 100%;
}

.upload :deep(.t-upload__dragger) {
  width: 100%;
  height: 100%;
}

/* #endregion 修改上传组件以满足要求 */
/* #region 修改步骤条以满足要求 */
.step {
  position: relative;
  width: 343px;
  padding: 0 20px;
}

.step-left {
  position: absolute;
  width: 20px;
  border-bottom: 4px solid #85A7FF;
  left: 0;
  top: 40%;
  transform: translateY(-50%);
}

.step-right {
  position: absolute;
  width: 20px;
  border-bottom: 4px solid #DCDFE5;
  right: 0;
  top: 40%;
  transform: translateY(-50%);
}

.step :deep(.t-steps-item) {
  margin: 0;
}

.step :deep(.t-steps-item__icon) {
  margin: 0;
}

.step :deep(.t-steps-item__icon--number) {
  background-color: #8DA4FE;
}

.step :deep(.t-steps-item--default) .t-steps-item__icon--number {
  background-color: #DCDFE5 !important;
}

.step :deep(.t-steps-item--process) {
  margin: 0;
}

.step :deep(.t-steps-item) .t-steps-item__title::after {
  border-bottom-color: #DCDFE5 !important;
  border-bottom-width: 4px !important;
}

.step :deep(.t-steps-item__title) {
  height: 24px;
  width: 0;
  padding: 0;
}

.step :deep(.t-steps-item--finish) .t-steps-item__title::after {
  border-bottom-color: #85A7FF !important;

}

/* #endregion 修改步骤条以满足要求 */
</style>
