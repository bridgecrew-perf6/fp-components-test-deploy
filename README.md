# FP Components

### Table of contents

- [Installation](#installation)
- [Icon](#icon)
- [Dropdown](#dropdown)
- [Typography](#typography)

## Installation

1. Add this line in your `package.json`:

    ```sh
    {
      ...
      "dependencies": {
        ...
        "fp-components": "git+https://gitlab.com/firstpromoter/fp-components.git#master"
        ...
      }
      ...
    }
    ```

2. Run `yarn` or `npm install`
3. Download icon files
4. Extract icon files and paste in a the public root directory `fonts/`

## Icon

Usage:

```javascript
import { FPIcon } from "fp-components";
```

```javascript
<FPIcon name="fpdashboard" class="text-red-500 text-3xl mr-4" />
```

Props:

| Name | Type   | Required |
| ---- | ------ | -------- |
| name | string | Yes      |

## Dropdown

Usage:

```javascript
import { FPDropdown } from "fp-components";

const dropdownItems = [{
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
}]
```

```javascript
<FPDropdown :items="dropdownItems">
  <span class="bg-red-400 rounded px-4 py-2 text-white font-bold">
    More
  </span>
</FPDropdown>
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
import { FPHeading, FPText } from "fp-components";
```

```javascript
// Heading
<FPHeading size="1" as="h1" class="text-red-500"> Heading 1 </FPHeading>
<FPHeading size="2" as="h2" class="text-red-500"> Heading 2 </FPHeading>
<FPHeading size="3" as="h3" class="text-red-500"> Heading 3 </FPHeading>
<FPHeading size="4" as="h4" class="text-red-500"> Heading 4 </FPHeading>
<FPHeading size="5" as="h5" class="text-red-500"> Heading 5 </FPHeading>
<FPHeading size="6" as="h6" class="text-red-500"> Heading 6 </FPHeading>
// Text
<FPText size="1" class="text-red-500"> Text 1 </FPText>
<FPText size="2" class="text-red-500"> Text 2 </FPText>
<FPText size="3" class="text-red-500"> Text 3 </FPText>
<FPText size="4" class="text-red-500"> Text 4 </FPText>
<FPText size="5" class="text-red-500"> Text 5 </FPText>
<FPText size="6" class="text-red-500"> Text 6 </FPText>
```

## Development

1. Clone this repo
2. Run:

```sh
cd fp-components/
yarn
yarn dev
```

To build, just run:

```sh
yarn build
```