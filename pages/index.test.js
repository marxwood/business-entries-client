import { shallowMount } from '@vue/test-utils'
import index from './index.vue'

export const mockPlaceIds = ['x123', 'y456', 'z789']

describe('_id', () => {
  const wrapper = shallowMount(index, {
    mocks: {
      places: mockPlaceIds
    }
  })

  it('is rendered', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders an anchor for each item ', () => {
    expect(wrapper.findAll('a').length).toBe(3)
  })
})
