<template>
  <div class="md:w-8/12 w-full mx-auto py-12">
    <h1 class="text-4xl font-bold mb-12">
      FirstPromoter Elements Docs
    </h1>

    <ElementDoc title="Icons">
      <template #snippet>
        <pre class="language-html">
&lt;Icon name="fpdashboard" class="text-red-500 text-3xl mr-4"/&gt;
&lt;Icon name="fpdashboard" class="text-blue-500 text-3xl mr-4"/&gt;
        </pre>
      </template>
      <template #output>
        <div>
          <Icon
            name="fpdashboard"
            class="text-red-500 text-3xl mr-4"
          />
          <Icon
            name="fpdashboard"
            class="text-blue-500 text-3xl mr-4"
          />
        </div>
      </template>
    </ElementDoc>

    <ElementDoc
      title="Dropdown"
      :component-props="[
        {
          name: 'items[]',
          type: `interface DropdownItemsTypes{
  id: string | number;
  label: string;
  icon?: string;
  isDisabled?: boolean;
  onItemClicked?: (item, event) => any;
  activeClass?: string;
  link?: string;
  items: DropdownItemsTypes[];
}`,
          required: true,
        },
      ]"
    >
      <template #snippet>
        <pre class="language-html">
&lt;Dropdown :items=&quot;[{
  id: 1,
  label: "Item 1",
  icon: "award",
  items: [
    {
      id: 1,
      label: "Sub-Item 1",
      onItemClicked: (item: any) => {
        console.log("subitem", item);
      },
    },
  ],
}]&quot;&gt;
  &lt;span class="bg-red-400 rounded px-4 py-2 text-white font-bold"&gt;
    More
  &lt;/span&gt;
&lt;/Dropdown&gt;
        </pre>
      </template>
      <template #output>
        <div>
          <Dropdown
            :items="dropdownItems"
            trigger-class="bg-red-400 rounded px-4 py-2 text-white font-bold flex items-center"
          >
            <span>More</span>
          </Dropdown>
        </div>
      </template>
    </ElementDoc>

    <ElementDoc title="Typography">
      <template #snippet>
        <pre class="language-html">
<span class="text-gray-500">
  // Heading
</span>
&lt;Heading size="1" as="h1" class="text-red-500"&gt; Heading 1 &lt;/Heading&gt;
&lt;Heading size="2" as="h2" class="text-red-500"&gt; Heading 2 &lt;/Heading&gt;
&lt;Heading size="3" as="h3" class="text-red-500"&gt; Heading 3 &lt;/Heading&gt;
&lt;Heading size="4" as="h4" class="text-red-500"&gt; Heading 4 &lt;/Heading&gt;
&lt;Heading size="5" as="h5" class="text-red-500"&gt; Heading 5 &lt;/Heading&gt;
&lt;Heading size="6" as="h6" class="text-red-500"&gt; Heading 6 &lt;/Heading&gt;
<span class="text-gray-500">
  // Text
</span>
&lt;Text size="1" class="text-red-500"&gt; Text 1 &lt;/Text&gt;
&lt;Text size="2" class="text-red-500"&gt; Text 2 &lt;/Text&gt;
&lt;Text size="3" class="text-red-500"&gt; Text 3 &lt;/Text&gt;
&lt;Text size="4" class="text-red-500"&gt; Text 4 &lt;/Text&gt;
&lt;Text size="5" class="text-red-500"&gt; Text 5 &lt;/Text&gt;
&lt;Text size="6" class="text-red-500"&gt; Text 6 &lt;/Text&gt;
        </pre>
      </template>
      <template #output>
        <div>
          <Heading
            size="1"
            as="h1"
            class="text-red-500"
          >
            Heading 1
          </Heading>
          <Heading
            size="2"
            as="h2"
            class="text-blue-500"
          >
            Heading 2
          </Heading>
          <Heading
            size="3"
            as="h3"
            class="text-blue-500"
          >
            Heading 3
          </Heading>
          <Heading
            size="4"
            as="h4"
            class="text-blue-500"
          >
            Heading 4
          </Heading>
          <Heading
            size="5"
            as="h5"
            class="text-blue-500"
          >
            Heading 5
          </Heading>
          <Heading
            size="6"
            as="h6"
            class="text-blue-500"
          >
            Heading 6
          </Heading>
        </div>
        <div class="mt-12">
          <Text
            size="1"
            as="h1"
            class="text-red-500"
          >
            Text 1
          </Text>
          <Text
            size="2"
            as="h2"
            class="text-blue-500"
          >
            Text 2
          </Text>
          <Text
            size="3"
            as="h3"
            class="text-blue-500"
          >
            Text 3
          </Text>
          <Text
            size="4"
            as="h4"
            class="text-blue-500"
          >
            Text 4
          </Text>
          <Text
            size="5"
            as="h5"
            class="text-blue-500"
          >
            Text 5
          </Text>
          <Text
            size="6"
            as="h6"
            class="text-blue-500"
          >
            Text 6
          </Text>
        </div>
      </template>
    </ElementDoc>
  </div>
</template>

<script setup lang="ts">
import Icon from "./../src/components/fp-icon";
import Heading from "./../src/components/fp-heading";
import Text from "./../src/components/fp-text";
import Dropdown from "./../src/components/fp-dropdown";
import ElementDoc from "./Docs/Element.vue";
import { DropdownItemsTypes } from "../src/components/fp-dropdown/types";

const dropdownItems: DropdownItemsTypes[] = [
  {
    id: 1,
    label: "Item 1",
    icon: "fpdashboard",
    onItemClicked: (item: any) => {
      console.log(item);
    },
  },
  {
    id: 2,
    label: "Item 2",
    icon: "award",
    onItemClicked: (item: any) => {
      console.log(item);
    },
    isDisabled: true,
  },
  {
    id: 3,
    label: "Item 3",
    icon: "award",
    items: [
      {
        id: 1,
        label: "Sub-Item 1",
        onItemClicked: (item: any) => {
          console.log("subitem", item);
        },
      },
    ],
  },
];
</script>
