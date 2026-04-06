import { useSyncExternalStore } from 'react'

const emptySubscribe = () => () => {}

function getServerSnapshot() {
  return false
}

function getClientSnapshot() {
  return true
}

export function useClientMounted() {
  return useSyncExternalStore(emptySubscribe, getClientSnapshot, getServerSnapshot)
}
