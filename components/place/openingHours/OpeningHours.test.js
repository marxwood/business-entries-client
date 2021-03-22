import { shallowMount } from '@vue/test-utils'
import OpeningHours from './OpeningHours.vue'
import { fixture, expectedResult } from './reducer.test'

describe('OpeningHours', () => {
  it('displays prettified day ranges', () => {
    const propsData = {
      openingHours: fixture
    }
    const wrapper = shallowMount(OpeningHours, {
      propsData
    })

    expect(wrapper.findAll('[data-test-dayrange]').length).toBe(expectedResult.length)
  })

  it('returns correct value for computed ranges property', () => {
    const localThis = { openingHours: fixture }
    expect(OpeningHours.computed.ranges.call(localThis)).toStrictEqual(expectedResult)
  })
})
