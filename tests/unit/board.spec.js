import { shallowMount } from '@vue/test-utils'
import Board from '@/components/board.vue'

describe('Board Component', () => {
    it('Board Component Testing', () => {
        const BoardWrapper = new shallowMount(Board);
        // 1. Instance Verification
        expect(BoardWrapper.exists()).toBeTruthy();
        // 2. Div Tag - Visibilty, count and attributes
        expect(BoardWrapper.html().includes("div")).toBe(true);
        expect(BoardWrapper.find("div").isVisible()).toBe(true);
        let divarray = BoardWrapper.findAll("div");
        expect(divarray.length).toBe(1);
        // 2. Table Tag - Visibilty, count and attributes
        expect(BoardWrapper.html().includes("table")).toBe(true);
        expect(BoardWrapper.find("table").isVisible()).toBe(true);
        let tablearray = BoardWrapper.findAll("table");
        expect(tablearray.length).toBe(1);
        expect(tablearray.at(0).classes("table")).toBe(true);
        expect(tablearray.at(0).classes("table-bordered")).toBe(true);
        // 3. Table Body Tag - Visibility, Count and attributes
        expect(BoardWrapper.html().includes("tbody")).toBe(true);
        expect(BoardWrapper.find("tbody").isVisible()).toBe(true);
        let bodyarray = BoardWrapper.findAll("tbody");
        expect(bodyarray.length).toBe(1);
        // 3. Table Row Tag - Visibility, Count and attributes
        expect(BoardWrapper.html().includes("tr")).toBe(true);
        expect(BoardWrapper.find("tr").isVisible()).toBe(true);
        let trarray = BoardWrapper.findAll("tr");
        expect(trarray.length).toBe(3);
        expect(trarray.at(0).attributes("id")).toBe("1");
        expect(trarray.at(1).attributes("id")).toBe("2");
        expect(trarray.at(2).attributes("id")).toBe("3");
        // 4. Table Column Tag - Visibility, Count and attributes
        expect(BoardWrapper.html().includes("td")).toBe(true);
        expect(BoardWrapper.find("td").isVisible()).toBe(true);
        let tdarray = BoardWrapper.findAll("td");
        expect(tdarray.length).toBe(9);
        expect(tdarray.at(0).attributes("id")).toBe("A1");
        expect(tdarray.at(0).attributes("width")).toBe("200");
        expect(tdarray.at(0).attributes("height")).toBe("200");
        expect(tdarray.at(1).attributes("id")).toBe("B1");
        expect(tdarray.at(1).attributes("width")).toBe("200");
        expect(tdarray.at(1).attributes("height")).toBe("200");
        expect(tdarray.at(2).attributes("id")).toBe("C1");
        expect(tdarray.at(2).attributes("width")).toBe("200");
        expect(tdarray.at(2).attributes("height")).toBe("200");
        expect(tdarray.at(3).attributes("id")).toBe("A2");
        expect(tdarray.at(3).attributes("width")).toBe("200");
        expect(tdarray.at(3).attributes("height")).toBe("200");
        expect(tdarray.at(4).attributes("id")).toBe("B2");
        expect(tdarray.at(4).attributes("width")).toBe("200");
        expect(tdarray.at(4).attributes("height")).toBe("200");
        expect(tdarray.at(5).attributes("id")).toBe("C2");
        expect(tdarray.at(5).attributes("width")).toBe("200");
        expect(tdarray.at(5).attributes("height")).toBe("200");
        expect(tdarray.at(6).attributes("id")).toBe("A3");
        expect(tdarray.at(6).attributes("width")).toBe("200");
        expect(tdarray.at(6).attributes("height")).toBe("200");
        expect(tdarray.at(7).attributes("id")).toBe("B3");
        expect(tdarray.at(7).attributes("width")).toBe("200");
        expect(tdarray.at(7).attributes("height")).toBe("200");
        expect(tdarray.at(8).attributes("id")).toBe("C3");
        expect(tdarray.at(8).attributes("width")).toBe("200");
        expect(tdarray.at(8).attributes("height")).toBe("200");
        // 5. Player Move layout
        expect(BoardWrapper.html().includes("playermove-stub")).toBe(true);
        let mainboard = BoardWrapper.find("playermove-stub"); 
        expect(mainboard.isVisible()).toBe(true);
        expect(mainboard.attributes("positionmove")).toBe("");
        divarray = BoardWrapper.findAll("playermove-stub");
        expect(divarray.length).toBe(1);
    });

    it('Board Mount Verification', () => {
        const BoardWrapper = new shallowMount(Board);

        // Validate Data Property of Board Component
        expect(BoardWrapper.vm.CurrentMove).toBe('');
        expect(BoardWrapper.vm.CurrentPlayer).toBe('X');
        expect(BoardWrapper.vm.GameOver).toBeFalsy();
        expect(BoardWrapper.vm.PlayResult.length).toEqual(3);
        expect(BoardWrapper.vm.PlayResult[0].length).toEqual(3);
        expect(BoardWrapper.vm.PlayResult[0][0]).toBe('');
        expect(BoardWrapper.vm.PlayResult[0][1]).toBe('');
        expect(BoardWrapper.vm.PlayResult[0][2]).toBe('');
        expect(BoardWrapper.vm.PlayResult[1].length).toEqual(3);
        expect(BoardWrapper.vm.PlayResult[1][0]).toBe('');
        expect(BoardWrapper.vm.PlayResult[1][1]).toBe('');
        expect(BoardWrapper.vm.PlayResult[1][2]).toBe('');
        expect(BoardWrapper.vm.PlayResult[2].length).toEqual(3);
        expect(BoardWrapper.vm.PlayResult[2][0]).toBe('');
        expect(BoardWrapper.vm.PlayResult[2][1]).toBe('');
        expect(BoardWrapper.vm.PlayResult[2][2]).toBe('');
    });

    it('Board - HandleMove Method Verification',() => {
        const BoardWrapper = new shallowMount(Board);
        BoardWrapper.vm.crossimg = "Cross";
        BoardWrapper.vm.oimg = "O";

        // 1. Invoke HandleMove with Parameter A1
        BoardWrapper.vm.handleMove('A1');
        // Current Player Changes
        expect(BoardWrapper.vm.CurrentPlayer).toBe('X');
        expect(BoardWrapper.vm.CurrentMove).toBe('A1:X');
        expect(BoardWrapper.vm.PlayResult[0][0]).toBe("Cross");
        // 2. Invoke HandleMove with Parameter B1
        BoardWrapper.vm.switchPlayer();
        BoardWrapper.vm.handleMove('B1');
        // Current Player Changes
        expect(BoardWrapper.vm.CurrentPlayer).toBe('O');
        expect(BoardWrapper.vm.CurrentMove).toBe('B1:O');
        expect(BoardWrapper.vm.PlayResult[0][1]).toBe("O");
        // 3. Invoke HandleMove with Parameter C1
        BoardWrapper.vm.switchPlayer();
        BoardWrapper.vm.handleMove('C1');
        // Current Player Changes
        expect(BoardWrapper.vm.CurrentPlayer).toBe('X');
        expect(BoardWrapper.vm.CurrentMove).toBe('C1:X');
        expect(BoardWrapper.vm.PlayResult[0][2]).toBe("Cross");
        // 4. Invoke HandleMove with Parameter A2
        BoardWrapper.vm.switchPlayer();
        BoardWrapper.vm.handleMove('A2');
        // Current Player Changes
        expect(BoardWrapper.vm.CurrentPlayer).toBe('O');
        expect(BoardWrapper.vm.CurrentMove).toBe('A2:O');
        expect(BoardWrapper.vm.PlayResult[1][0]).toBe("O");
        // 5. Invoke HandleMove with Parameter B2
        BoardWrapper.vm.switchPlayer();
        BoardWrapper.vm.handleMove('B2');
        // Current Player Changes
        expect(BoardWrapper.vm.CurrentPlayer).toBe('X');
        expect(BoardWrapper.vm.CurrentMove).toBe('B2:X');
        expect(BoardWrapper.vm.PlayResult[1][1]).toBe("Cross");
        // 6. Invoke HandleMove with Parameter C2
        BoardWrapper.vm.switchPlayer();
        BoardWrapper.vm.handleMove('C2');
        // Current Player Changes
        expect(BoardWrapper.vm.CurrentPlayer).toBe('O');
        expect(BoardWrapper.vm.CurrentMove).toBe('C2:O');
        expect(BoardWrapper.vm.PlayResult[1][2]).toBe("O");
        // 7. Invoke HandleMove with Parameter A3
        BoardWrapper.vm.switchPlayer();
        BoardWrapper.vm.handleMove('A3');
        // Current Player Changes
        expect(BoardWrapper.vm.CurrentPlayer).toBe('X');
        expect(BoardWrapper.vm.CurrentMove).toBe('A3:X');
        expect(BoardWrapper.vm.PlayResult[2][0]).toBe("Cross");
        // 8. Invoke HandleMove with Parameter B3
        BoardWrapper.vm.switchPlayer();
        BoardWrapper.vm.handleMove('B3');
        // Current Player Changes
        expect(BoardWrapper.vm.CurrentPlayer).toBe('O');
        expect(BoardWrapper.vm.CurrentMove).toBe('B3:O');
        expect(BoardWrapper.vm.PlayResult[2][1]).toBe("O");
        // 9. Invoke HandleMove with Parameter C3
        BoardWrapper.vm.switchPlayer();
        BoardWrapper.vm.handleMove('C3');
        // Current Player Changes
        expect(BoardWrapper.vm.CurrentPlayer).toBe('X');
        expect(BoardWrapper.vm.CurrentMove).toBe('C3:X');
        expect(BoardWrapper.vm.PlayResult[2][2]).toBe("Cross");

    });


    it('Board - SwitchPlayer Method Verification',() => {
        const BoardWrapper = new shallowMount(Board);
        
        // 1. Invoke switchPlayer 
        BoardWrapper.vm.switchPlayer();
        expect(BoardWrapper.vm.CurrentPlayer).toBe('O');
        BoardWrapper.vm.switchPlayer();
        expect(BoardWrapper.vm.CurrentPlayer).toBe('X');
    });

    it('Board - setPlayer Method Verification',() => {
        const BoardWrapper = new shallowMount(Board);
        
        // 1. Invoke setPlayer 
        BoardWrapper.vm.setPlayer(0,0,"Cross");
        expect(BoardWrapper.vm.PlayResult[0][0]).toBe('Cross');
    });

    it('Board - processWinner Method Verification',() => {
        const BoardWrapper = new shallowMount(Board);
        
        // 1. Invoke setPlayer 
        BoardWrapper.vm.ProcessWinner("X");
        expect(BoardWrapper.vm.GameOver).toBeTruthy();
    });

    it('Board - gameDraw Method Verification',() => {
        const BoardWrapper = new shallowMount(Board);
        
        // 1. Invoke gameDraw 
        BoardWrapper.vm.GameDraw();
        expect(BoardWrapper.vm.GameOver).toBeTruthy();
        expect(BoardWrapper.vm.CurrentPlayer).toBe("NO WINNER");
    });

    it('Board - nextPlayer emit event Verification', () => {
        const BoardWrapper = new shallowMount(Board);

        BoardWrapper.vm.$emit('nextPlayer');
        BoardWrapper.vm.$nextTick();
        expect(BoardWrapper.emitted().nextPlayer).toBeTruthy();
        expect(BoardWrapper.emitted().nextPlayer.length).toBe(1);
    });

    it('Board - gotWinner emit event Verification', () => {
        const BoardWrapper = new shallowMount(Board);

        BoardWrapper.vm.$emit('gotWinner');
        BoardWrapper.vm.$nextTick();
        expect(BoardWrapper.emitted().gotWinner).toBeTruthy();
        expect(BoardWrapper.emitted().gotWinner.length).toBe(1);
    });

    it('Board - gameDraw emit event Verification', () => {
        const BoardWrapper = new shallowMount(Board);

        BoardWrapper.vm.$emit('gamedraw');
        BoardWrapper.vm.$nextTick();
        expect(BoardWrapper.emitted().gamedraw).toBeTruthy();
        expect(BoardWrapper.emitted().gamedraw.length).toBe(1);
    });
});

