import {mount} from "@vue/test-utils";
import Home from "../../../src/components/Home.vue"

const createWrapper = () => {
    return mount(Home);
};

describe("Header", () => {
    it("should render without a problem", () =>{
        const wrapper = createWrapper();
        expect(wrapper.exists()).toBe(true);
    })
})