import { shallowMount } from '@vue/test-utils'
import Logo from '@/components/logo/Logo.vue'

describe('Logo', () => {
  it('is rendered', () => {
    const wrapper = shallowMount(Logo)
    expect(wrapper.vm).toBeTruthy()
  })
})
