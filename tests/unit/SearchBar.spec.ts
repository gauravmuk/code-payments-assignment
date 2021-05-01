import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import SearchBar from "@/components/SearchBar.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("SearchBar.vue", () => {
  let store: any;
  let actions: any;

  beforeEach(() => {
    actions = {
      filterProducts: jest.fn(),
      clearSearch: jest.fn(),
    };
    store = new Vuex.Store({
      modules: {
        product: {
          namespaced: true,
          actions,
        },
      },
    });
  });

  it("dispatch action when search is done by the user", () => {
    const wrapper = shallowMount(SearchBar, {
      store,
      localVue,
    });
    const input = wrapper.find("input");
    input.trigger("input");
    expect(actions.filterProducts).toHaveBeenCalled();
  });

  it("dispatch action when search is done by the user with a keyword", async () => {
    const wrapper = shallowMount(SearchBar, {
      store,
      localVue,
    });
    const input = wrapper.find("input");
    await wrapper.setData({ keyword: "hello" });
    input.trigger("input");
    expect(actions.filterProducts).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        keyword: "hello",
      })
    );
  });

  it("clear the search when component is destroyed", () => {
    const wrapper = shallowMount(SearchBar, {
      store,
      localVue,
    });
    wrapper.destroy();
    expect(actions.clearSearch).toHaveBeenCalled();
  });
});
