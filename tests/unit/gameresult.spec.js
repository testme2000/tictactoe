import { shallowMount,mount } from '@vue/test-utils'
import GameResult from '@/components/gameresult';

describe('GameResult Component', () => {
    it('GameResult Component Basic Verification', () => {
        const GameResultWrapper = new shallowMount(GameResult);
        // 1. Instance Verification
        expect(GameResultWrapper.exists()).toBeTruthy();
        // 2. h2 Tag - Visibilty, count and attributes
        expect(GameResultWrapper.html().includes("h2")).toBe(true);
        expect(GameResultWrapper.find("h2").isVisible()).toBe(true);
        let h2array = GameResultWrapper.findAll("h2");
        expect(h2array.length).toBe(1);
        // 3. h2 Text Tag
        expect(h2array.at(0).text()).toBe("Game Over, Winner is");
    });

    it('GameResult Mount Verification', () => {
        const GameResultWrapper = new shallowMount(GameResult);

        expect(GameResultWrapper.vm.WinningMsg).toBe('Winner is ');
    });

    it('GameResult Props Verification', () => {
        const GameResultWrapper = new shallowMount(GameResult, {
            propsData: {
                Player: 'X'
            }
        });
        expect(GameResultWrapper.props().Player).toBe('X');
        expect(GameResultWrapper.props('Player')).toBe('X');
    });

    it('GameResult Created lifecycle hook Verification', () => {
        const GameResultWrapper = new shallowMount(GameResult);

        GameResult.created.call(GameResultWrapper.vm);
        expect(GameResultWrapper.vm.WinningMsg).toBe('Winner is ');
    });
});

