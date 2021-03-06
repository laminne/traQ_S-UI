<template>
  <div :class="$style.container">
    <router-link
      v-if="ancestorsPath.length > 0"
      :to="buildChannelLink(ancestorsPath[0].path)"
      :class="$style.ancestorHash"
      >#</router-link
    >
    <span v-else :class="$style.currentHash">#</span>
    <span v-for="(ancestor, i) in ancestorsPath" :key="i">
      <router-link
        :to="buildChannelLink(ancestor.path)"
        :class="$style.ancestor"
        >{{ isMobile ? ancestor.name[0] : ancestor.name }}</router-link
      >
      <span
        :class="$style.ancestorSeparator"
        :data-is-primary="pathInfoList.length <= 1"
        >/</span
      >
    </span>
    <span :class="$style.current">{{ pathInfo.name }}</span>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  reactive,
  PropType
} from '@vue/composition-api'
import { ChannelId } from '@/types/entity-ids'
import store from '@/store'
import useChannelPath from '@/use/channelPath'
import { constructChannelPath } from '@/router'
import useIsMobile from '@/use/isMobile'

type Props = {
  channelId: ChannelId
}

type ChannelPathInfo = {
  name: string
  path: string[]
}

const usePathInfo = (props: Props) => {
  const { channelIdToPath } = useChannelPath()

  /** 現在のチャンネルに至るまでのフルパスたち */
  const pathInfoList = computed((): ChannelPathInfo[] =>
    channelIdToPath(props.channelId).reduce(
      (acc, cur, idx) => [
        ...acc,
        { name: cur, path: idx === 0 ? [cur] : [...acc[idx - 1].path, cur] }
      ],
      [] as ChannelPathInfo[]
    )
  )

  return { pathInfoList }
}

export default defineComponent({
  name: 'ChannelViewHeaderChannelName',
  props: {
    channelId: {
      type: String as PropType<ChannelId>,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      channels: computed(() => store.state.entities.channels)
    })
    const { isMobile } = useIsMobile()
    const { pathInfoList } = usePathInfo(props)
    const ancestorsPath = computed(() =>
      pathInfoList.value.slice(0, pathInfoList.value.length - 1)
    )
    const pathInfo = computed(
      () => pathInfoList.value[pathInfoList.value.length - 1]
    )
    const buildChannelLink = (path: string[]) =>
      constructChannelPath(path.join('/'))
    return {
      state,
      ancestorsPath,
      pathInfo,
      pathInfoList,
      buildChannelLink,
      isMobile
    }
  }
})
</script>

<style lang="scss" module>
.container {
  @include color-ui-primary;
  height: 100%;
  word-break: keep-all;
  white-space: nowrap;
}
.ancestor {
  @include color-ui-secondary;
  @include size-body1;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
}
.ancestorSeparator {
  @include color-ui-secondary;
  &[data-is-primary] {
    @include color-ui-primary;
  }
  @include size-body1;
  opacity: 0.5;
  margin: 0 0.125rem;
  user-select: none;
}
.current {
  @include size-h1;
  margin: 0 0.125rem;
}
.currentHash {
  @include size-h1;
  user-select: none;
  margin-right: 0.125rem;
}
.ancestorHash {
  @include size-h1;
  opacity: 0.5;
  margin-right: 0.125rem;
  user-select: none;
  &:hover {
    opacity: 1;
  }
}
</style>
