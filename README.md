# FP Components

### Table of contents

- [Icon](#icon)
- [Dropdown](#dropdown)
- [Typography](#typography)

## Icon

Usage:

```javascript
<Icon name="fpdashboard" class="text-red-500 text-3xl mr-4" />
```

Props:

| Name | Type   | Required |
| ---- | ------ | -------- |
| name | string | Yes      |

## Dropdown

Usage:

```javascript
<Dropdown :items="[{
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
}]">
  <span class="bg-red-400 rounded px-4 py-2 text-white font-bold">
    More
  </span>
</Dropdown>
```

Props:

| Name    | Type               | Required |
| ------- | ------------------ | -------- |
| items[] | DropdownItemsTypes | Yes      |

Types:

```ts
interface DropdownItemsTypes {
  id: string | number;
  label: string;
  icon?: string;
  disabled?: boolean;
  onItemClicked?: (item, event) => any;
  activeClass?: string;
  link?: string;
  items: DropdownItemsTypes[];
}
```

## Typography

Usage:

```javascript
// Heading
<Heading size="1" as="h1" class="text-red-500"> Heading 1 </Heading>
<Heading size="2" as="h2" class="text-red-500"> Heading 2 </Heading>
<Heading size="3" as="h3" class="text-red-500"> Heading 3 </Heading>
<Heading size="4" as="h4" class="text-red-500"> Heading 4 </Heading>
<Heading size="5" as="h5" class="text-red-500"> Heading 5 </Heading>
<Heading size="6" as="h6" class="text-red-500"> Heading 6 </Heading>
// Text
<Text size="1" class="text-red-500"> Text 1 </Text>
<Text size="2" class="text-red-500"> Text 2 </Text>
<Text size="3" class="text-red-500"> Text 3 </Text>
<Text size="4" class="text-red-500"> Text 4 </Text>
<Text size="5" class="text-red-500"> Text 5 </Text>
<Text size="6" class="text-red-500"> Text 6 </Text>
```
