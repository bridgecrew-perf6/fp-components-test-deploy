<template>
  <Menu
    as="div"
    class="relative inline-block"
  >
    <MenuButton
      v-slot="{ open }"
      :class="triggerClass"
    >
      <span>
        <slot />
        <Icon
          :name="`caret-${open ? 'up' : 'down'}`"
          class="text-tiny ml-2"
        />
      </span>
    </MenuButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <MenuItem
          v-for="item in items"
          v-slot="{ active, disabled }"
          :key="item.id"
          :disabled="item.isDisabled"
        >
          <ItemTrigger
            :item="item"
            :is-disabled="disabled"
            :is-active="active"
          />
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import ItemTrigger from "./item-trigger.vue";
import Icon from "../fp-icon";

import { DropdownItemsTypes } from "./types";

defineProps<{
  items: DropdownItemsTypes[];
  triggerClass?: string;
}>();
</script>
