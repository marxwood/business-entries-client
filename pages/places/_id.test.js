import { mount, shallowMount } from '@vue/test-utils'
import Header from '@/components/place/header/Header.vue'
import Footer from '@/components/place/footer/Footer.vue'
import Map from '@/components/place/map/Map.vue'
import OpeningHours from '@/components/place/openingHours/OpeningHours.vue'
import _id from './_id.vue'

export const mockPlace = {
  displayed_what: 'Casa Ferlin',
  displayed_where: 'Rue de Conthey 17, 1950 Sion',
  place_feedback_summary: {
    positive_recommendation_percentage: 97
  },
  addresses: [{
    where: {
      geography: {
        location: {
          latlon: '46.232943,7.358963'
        }
      }
    }
  }],
  opening_hours: {
    days: {
      tuesday: [
        { start: '11:30', end: '15:00', type: 'OPEN' },
        { start: '18:30', end: '00:00', type: 'OPEN' }
      ]
    }
  }
}

describe('places _id page', () => {
  it('is rendered', () => {
    const wrapper = shallowMount(_id, {
      mocks: {
        place: mockPlace
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })

  it('ensures core components are rendered', () => {
    const wrapper = mount(_id, {
      mocks: {
        place: mockPlace
      }
    })

    const header = wrapper.findComponent(Header)
    expect(header.is(Header)).toBe(true)

    const footer = wrapper.findComponent(Footer)
    expect(footer.is(Footer)).toBe(true)

    const map = wrapper.findComponent(Map)
    expect(map.is(Map)).toBe(true)

    const openingHours = wrapper.findComponent(OpeningHours)
    expect(openingHours.is(OpeningHours)).toBe(true)
  })

  it('returns correct value for computed latlon property', () => {
    const localThis = { place: mockPlace }
    expect(_id.computed.latlon.call(localThis)).toBe(mockPlace.addresses[0].where.geography.location.latlon)
  })
})
