import { shallowMount } from '@vue/test-utils'
import DayRange from './DayRange.vue'

describe('DayRange', () => {
  it('displays closed hours with a single day, and disabled icon', () => {
    const propsData = {
      range: { from: 'monday', to: undefined, hours: ['closed'] }
    }
    const wrapper = shallowMount(DayRange, {
      propsData
    })

    expect(wrapper.find('[data-test-days]').text()).toBe('monday')
    expect(wrapper.find('[data-test-closed]').text()).toBe('Closed')
    expect(wrapper.find('svg').attributes('stroke')).toBe('silver')
  })

  it('displays open hours with a day range', () => {
    const propsData = {
      range: { from: 'friday', to: 'saturday', hours: [{ start: '18:00', end: '00:00', type: 'OPEN' }] }
    }
    const wrapper = shallowMount(DayRange, {
      propsData
    })

    expect(wrapper.find('[data-test-days]').text()).toContain('friday')
    expect(wrapper.find('[data-test-days]').text()).toContain('saturday')
    expect(wrapper.find('[data-test-hours]').text()).toBe('18:00 - 00:00')
    expect(wrapper.find('svg').attributes('stroke')).toBe('currentColor')
  })

  it.todo('displays closed hours with a day range')
  it.todo('displays open hours with a single day')
})
