import { shallowMount } from '@vue/test-utils'
import Footer from './Footer.vue'

describe('Footer', () => {
  it('displays recommendation sentiment', () => {
    const propsData = {
      positiveRecommendation: 97
    }
    const wrapper = shallowMount(Footer, {
      propsData
    })

    expect(wrapper.find('[data-test-recommendation]').text()).toBe(`${propsData.positiveRecommendation}%`)
  })
})
