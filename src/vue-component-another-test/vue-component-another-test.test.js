import { shallowMount } from '@vue/test-utils'
import VueComponentAnotherTest from './vue-component-another-test.vue'

test('Renders', () => {
  const wrapper = shallowMount(VueComponentAnotherTest)
  expect(wrapper.exists()).toBe(true)
})
