import {mount} from "@vue/test-utils";
import Header from "../../../src/components/Header.vue"

const createWrapper = () => {
    return mount(Header);
};

describe("Header", () => {
    it("should render without a problem", () =>{
        const wrapper = createWrapper();
        expect(wrapper.exists()).toBe(true);
    })
})