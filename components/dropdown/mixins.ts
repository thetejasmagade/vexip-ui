import { ref, watch, onMounted, nextTick } from 'vue'

import type { Ref } from 'vue'

export function useLabel(rawLabel: Ref<string | number | null>, element: Ref<HTMLElement | null>) {
  const label = ref(rawLabel.value)

  function setLabel(value: string | number | null) {
    if (element.value) {
      label.value = value ?? element.value.textContent?.trim() ?? null
    } else {
      label.value = value
    }
  }

  watch(rawLabel, value => {
    setLabel(value)
  })

  onMounted(() => {
    nextTick(() => {
      setLabel(rawLabel.value)
    })
  })

  return label
}
