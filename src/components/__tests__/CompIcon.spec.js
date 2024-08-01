import { describe, it, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import CompIcon from '../Icon/CompIcon.vue';

describe('CompIcon', async () => {
  const wrapper = await shallowMount(CompIcon, { props: { name: 'home', size: 'small' } })

  it('renders properly', async () => {
    expect(wrapper.find('svg').exists());
  });

  it('check if exists the right class name', async () => {
    expect(wrapper.find('.compIcon--small').exists()).toBe(true);
  });
});
