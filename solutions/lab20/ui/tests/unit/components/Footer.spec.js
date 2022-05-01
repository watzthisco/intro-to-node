import {mount} from "@vue/test-utils";
import Footer from "../../../src/components/Footer.vue"

const createWrapper = () => {
    return mount(Footer);
};

describe("Footer", () => {
    it("should render without a problem", () =>{
        const wrapper = createWrapper();
        expect(wrapper.exists()).toBe(true);
    })
})