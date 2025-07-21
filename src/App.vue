
<template>
  <div class="box">
    <div class="player">
      <VuePlayer ref="playerRef" v-bind="reactProps" />
    </div>
    <div class="textClip">
      <VueTextClip v-bind="textProps" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { applyPureReactInVue, setVeauryOptions } from 'veaury'
import { VmmlPlayer } from '@md_ai/vmml-player';
import { VmmlTextClip } from '@md_ai/vmml-textclip'
import { reactive, onMounted, useTemplateRef } from 'vue';
import { createRoot } from 'react-dom/client';
import vmml from './vmml.json'
import texts from './texts.json'

setVeauryOptions({
  react: {
    createRoot
  }
})

const VuePlayer  = applyPureReactInVue(VmmlPlayer);
const VueTextClip = applyPureReactInVue(VmmlTextClip);
const playerRef = useTemplateRef('playerRef');

const reactProps = reactive({
  vmml: vmml,
  amendmentFrame: true,
  controls: true,
  onPlayerReady: () => {
    playerRef.value?.play()
  }
})

const textProps = reactive({
  vmml: vmml,
  vmmlPlayer: null,
  texts: texts,
  onVmmlChange: (vmml) => {
    console.log('vmml修改了', vmml)
  }
})

onMounted(() => {
  setTimeout(() => {
    playerRef.value?.setVmml(vmml);
  }, 100);
})

</script>

<style scoped lang="scss">
.box {
  display: flex;
  .player {
    width: 400px;
    height: 700px;
  }
  .textClip {
    width: 400px;
    height: 700px;
  }
}
</style>
