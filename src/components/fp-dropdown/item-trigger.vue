<template>
  <Menu
    as="div"
    class="relative block"
  >
    <MenuButton
      v-slot="{ open }"
      :as="item.link ? 'a' : 'button'"
      class="w-full"
      :href="item.link"
      :disabled="isDisabled"
      @click="handleItemClick($event, item, isDisabled)"
    >
      <span
        class="w-full block text-left px-4 py-2 flex items-center justify-between"
        type="button"
        :class="{
          'bg-blue-500': isActive,
          'opacity-50 cursor-default': isDisabled,
          'opacity-50 cursor-default disabled': isDisabled,
        }"
      >
        <span>
          <span
            v-if="item.icon"
            class="mr-2"
          >
            <Icon :name="item.icon" />
          </span>
          <span class="leading-normal">{{ item.label }}</span>
        </span>
        <Icon
          v-if="item.items"
          :name="`caret-${open ? 'up' : 'down'}`"
          class="text-tiny ml-2"
        />
      </span>
    </MenuButton>
    <transition
      v-if="item.items?.length"
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute left-full top-0 w-56 origin-top-right bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <MenuItem
          v-for="subItem in item.items"
          v-slot="{ active, disabled }"
          :key="subItem.id"
          :disabled="subItem.isDisabled"
        >
          <div>
            <a
              v-if="subItem.link"
              class="w-full block text-left px-4 py-2 flex items-center"
              :class="{
                'bg-blue-500': active,
                'opacity-50 cursor-default': disabled,
              }"
              :href="subItem.link"
            >
              <span
                v-if="subItem.icon"
                class="mr-2"
              >
                <Icon :name="subItem.icon" />
              </span>
              <span class="leading-normal">{{ subItem.label }}</span>
            </a>
            <button
              v-else
              class="w-full block text-left px-4 py-2 flex items-center"
              type="button"
              :class="{
                'bg-blue-500': active,
                'opacity-50 cursor-default': disabled,
              }"
              @click="handleItemClick($event, subItem, disabled)"
            >
              <span
                v-if="subItem.icon"
                class="mr-2"
              >
                <Icon :name="subItem.icon" />
              </span>
              <span class="leading-normal">{{ subItem.label }}</span>
            </button>
          </div>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

import Icon from "../fp-icon";
import { DropdownItemsTypes } from "./types";

defineProps<{
  item: DropdownItemsTypes;
  isDisabled: boolean;
  isActive: boolean;
}>();

const handleItemClick = (
  e: MouseEvent | PointerEvent,
  item: DropdownItemsTypes,
  disabled: boolean
) => {
  if (item.onItemClicked && !disabled) return item.onItemClicked(item, e);
};
</script>
