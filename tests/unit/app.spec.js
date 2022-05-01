import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('Tic Tac Tow App', () => {
  it('Main App Root Component Testing', () => {
        const appWrapper = shallowMount(App);
        // 1. Instance Verification
        expect(appWrapper.exists()).toBeTruthy();
        // 2. Div Tag - Visiblity, count, attribute
        expect(appWrapper.html().includes("div")).toBe(true);
        expect(appWrapper.attributes().id).toBe("app");
        expect(appWrapper.find("div").isVisible()).toBe(true);
        let divarray = appWrapper.findAll("div");
        expect(divarray.length).toBe(2);
        expect(divarray.at(1).classes("container")).toBe(true);
        // 3. Paragraph Tag - Visibilty, count, attribute and content
        expect(appWrapper.html().includes("p")).toBe(true);
        let parray = appWrapper.findAll("p");
        expect(parray.length).toBe(5);
        // Validate each paragraph
        expect(parray.at(0).selector).toBe("p");
        expect(parray.at(0).classes("h1")).toBe(true);
        expect(parray.at(0).text()).toBe("Welcome to Tic Tac Toe Game");
        expect(parray.at(1).selector).toBe("p");
        expect(parray.at(1).classes("h3")).toBe(true);
        expect(parray.at(1).text()).toBe("1st Player is X");
        expect(parray.at(2).selector).toBe("p");
        expect(parray.at(2).classes("h3")).toBe(true);
        expect(parray.at(2).text()).toBe("2nd Player is O");
        expect(parray.at(3).selector).toBe("p");
        expect(parray.at(3).classes("h5")).toBe(true);
        expect(parray.at(3).text()).toBe("You are 1st player (X)");
        expect(parray.at(4).selector).toBe("p");
        expect(parray.at(4).classes("h6")).toBe(true);
        expect(parray.at(4).text()).toBe("Lets the game begin");
        // 4. Board layout
        expect(appWrapper.html().includes("board-stub")).toBe(true);
        let mainboard = appWrapper.find("board-stub"); 
        expect(mainboard.isVisible()).toBe(true);
        divarray = appWrapper.findAll("board-stub");
        expect(divarray.length).toBe(1);
  })
})
