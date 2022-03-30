import { mount } from "@vue/test-utils";
import Dropdown from "../fp-dropdown";
import Icon from "../fp-icon";

describe("Dropdown", () => {
  it("should show 1st level menu", async () => {
    const wrapper = mount(Dropdown, {
      props: {
        items: [
          {
            id: 1,
            label: "Item 1",
            icon: "fpdashboard",
            onItemClicked: (item: any) => {
              console.log(item);
            },
          },
        ],
      },
    });

    await wrapper.find("button").trigger("click");

    expect(wrapper.find('[role="menu"]').isVisible()).toBe(true);
  });

  it("should not be able to click disabled items", async () => {
    const mockCallBack = jest.fn();

    const wrapper = mount(Dropdown, {
      props: {
        items: [
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
            icon: "fpdashboard",
            disabled: true,
            onItemClicked: (item: any) => {
              console.log(item);
            },
          },
        ],
      },
    });

    await wrapper.find("button").trigger("click");

    wrapper
      .find('[role="menu"] [role="menuitem"]:nth-child(2) > button')
      .trigger("click");

    expect(mockCallBack.mock.calls.length).toEqual(0);
  });

  it("should have an icon on the first item", async () => {
    const wrapper = mount(Dropdown, {
      props: {
        items: [
          {
            id: 1,
            label: "Item 1",
            icon: "fpdashboard",
          },
        ],
      },
    });

    await wrapper.find("button").trigger("click");

    expect(wrapper.findComponent(Icon).exists()).toBe(true);
  });

  it("should have submenu", async () => {
    const mockCallBack = jest.fn();
    const wrapper = mount(Dropdown, {
      props: {
        items: [
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
            icon: "fpdashboard",
            items: [
              {
                id: 1,
                label: "SubItem 1",
                icon: "fpdashboard",
                onItemClicked: mockCallBack,
              },
            ],
          },
        ],
      },
    });

    await wrapper.find("button").trigger("click");
    await wrapper
      .find('[role="menu"] [role="menuitem"]:nth-child(2) > button')
      .trigger("click");

    expect(
      wrapper
        .find('[role="menu"] [role="menuitem"]:nth-child(2) [role="menu"]')
        .isVisible()
    ).toBe(true);
  });
});
