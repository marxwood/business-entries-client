import { shallowMount } from '@vue/test-utils'
import Header from './Header.vue'

describe('Header', () => {
  it("displays item's name and address", () => {
    const propsData = {
      displayedWhat: 'Business Name',
      displayedWhere: 'Business Address'
    }
    const wrapper = shallowMount(Header, {
      propsData
    })

    expect(wrapper.find('[data-test-name]').text()).toBe(propsData.displayedWhat)
    expect(wrapper.find('[data-test-address]').text()).toBe(propsData.displayedWhere)
  })
})
