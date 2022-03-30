<template>
  <div
    id="icons"
    class="mb-24"
  >
    <h3 class="text-3xl font-bold">
      {{ title }}
    </h3>
    <div class="bg-gray-100 rounded my-4">
      <div class="flex-none min-w-full px-5 pt-5">
        <code>
          <slot name="snippet" />
        </code>
      </div>
    </div>
    <div class="mb-4">
      <div class="font-bold mb-4">
        Output:
      </div>

      <slot name="output" />
    </div>

    <div
      v-if="componentProps?.length"
      class="mb-24"
    >
      <div class="mb-4">
        <div class="font-bold mb-4">
          Props:
        </div>
      </div>

      <div>
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th class="text-left">
                Name
              </th>
              <th class="text-left">
                Type
              </th>
              <th class="text-left">
                Required
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(prop, i) in componentProps" 
              :key="`prop_${i}`"
            >
              <td>{{ prop.name }}</td>
              <td>
                <pre class="language-javascript">{{ prop.type }}</pre>
              </td>
              <td>{{ prop.required ? "Yes" : "No" }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ComponentPropsTypes {
  name: string;
  type: string;
  required: boolean;
}

defineProps<{
  title: string;
  componentProps?: [ComponentPropsTypes];
}>();
</script>
