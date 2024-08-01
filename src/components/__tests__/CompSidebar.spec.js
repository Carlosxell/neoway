import { describe, it, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import CompSidebar from '../Layout/CompSidebar.vue';
import CompIcon from '@/components/Icon/CompIcon.vue';
import { RouterLink } from 'vue-router';

describe('CompIcon', async () => {
  const wrapper = await shallowMount(CompSidebar, {
    props: {}, CompIcon, RouterLink
  });

  it('renders properly', async () => {
    expect(wrapper.find('aside').exists()).toBe(true);
  });

  it('check if exists the right class name', async () => {
    expect(wrapper.find('.compSidebar').exists()).toBe(true);
    expect(wrapper.find('.menu').exists()).toBe(true);
  });
});
