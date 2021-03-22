import { shallowMount } from '@vue/test-utils'
import Map from './Map.vue'

describe('Map', () => {
  it('displays and centers map by geolocation latlon data', () => {
    const propsData = {
      latlong: '46.232943,7.358963'
    }
    const wrapper = shallowMount(Map, {
      propsData
    })

    expect(wrapper.find('iframe').attributes('src')).toContain(propsData.latlong)
  })
})
