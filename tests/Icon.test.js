import { mount } from "@vue/test-utils";
import Icon from "../Icon.vue";

describe("Icon", () => {
  it("should an icon", async () => {
    const wrapper = mount(Icon, {
      props: {
        name: "fpdashboard",
      },
    });

    expect(wrapper.isVisible()).toBe(true);
  });
});
