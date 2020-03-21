import { defineGetters } from 'direct-vuex'
import { Channel } from '@/lib/api'
import { S } from './state'
import { moduleGetterContext } from '@/store'
import { channelTree } from './index'

const getterContext = (args: [any, any, any, any]) =>
  moduleGetterContext(args, channelTree)

export const getters = defineGetters<S>()({
  topLevelChannels(...args): Channel[] {
    const { rootState } = getterContext(args)
    return Object.values(rootState.entities.channels).filter(
      channel => channel.parentId === undefined || channel.parentId === null
    )
  }
})