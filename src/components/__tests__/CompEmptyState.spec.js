import { describe, it, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import CompEmptyState from '../EmptyState/CompEmptyState.vue';

describe('CompIcon', async () => {
  const wrapper = await shallowMount(CompEmptyState, { props: { title: 'Título', subtitle: 'Subtítulo' } })

  it('renders properly', async () => {
    expect(wrapper.vm.title).toBe('Título');
    expect(wrapper.vm.subtitle).toBe('Subtítulo');
  });
});
