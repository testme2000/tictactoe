import { shallowMount,mount } from '@vue/test-utils'
import PlayerMove from '@/components/playermove.vue'
import { BFormRow, BIconColumns } from 'bootstrap-vue';

describe('PlayerMove Component', () => {
    it('PlayerMove Component Basic Verification', () => {
        const PlayerMoveWrapper = new shallowMount(PlayerMove);
        // 1. Instance Verification
        expect(PlayerMoveWrapper.exists()).toBeTruthy();
    });

    it('PlayerMove Mount Verification', () => {
        const PlayerMoveWrapper = new shallowMount(PlayerMove);

        expect(PlayerMoveWrapper.vm.ActivePlayer).toBe('');
        expect(PlayerMoveWrapper.vm.ActivePlayer.length).toEqual(0);
        expect(PlayerMoveWrapper.vm.ActiveWinningPosition).toBeNull();
        expect(PlayerMoveWrapper.vm.TargetedMove).toBeUndefined();
        expect(PlayerMoveWrapper.vm.MoveSnapshot.length).toEqual(3);
        expect(PlayerMoveWrapper.vm.MoveSnapshot[0].length).toEqual(3);
        expect(PlayerMoveWrapper.vm.MoveSnapshot[0][0]).toEqual(0);
        expect(PlayerMoveWrapper.vm.MoveSnapshot[0][1]).toEqual(0);
        expect(PlayerMoveWrapper.vm.MoveSnapshot[0][2]).toEqual(0);
        expect(PlayerMoveWrapper.vm.MoveSnapshot[1].length).toEqual(3);
        expect(PlayerMoveWrapper.vm.MoveSnapshot[1][0]).toEqual(0);
        expect(PlayerMoveWrapper.vm.MoveSnapshot[1][1]).toEqual(0);
        expect(PlayerMoveWrapper.vm.MoveSnapshot[1][2]).toEqual(0);
        expect(PlayerMoveWrapper.vm.MoveSnapshot[2].length).toEqual(3);
        expect(PlayerMoveWrapper.vm.MoveSnapshot[2][0]).toEqual(0);
        expect(PlayerMoveWrapper.vm.MoveSnapshot[2][1]).toEqual(0);
        expect(PlayerMoveWrapper.vm.MoveSnapshot[2][2]).toEqual(0);
    });

    it('PlayerMove Props Verification', () => {
        const PlayerMoveWrapper = new shallowMount(PlayerMove, {
            propsData: {
                PositionMove: 'A0:X'
            }
        });
        expect(PlayerMoveWrapper.props().PositionMove).toBe('A0:X');
        expect(PlayerMoveWrapper.props('PositionMove')).toBe('A0:X');
    });

    it('PlayerMove - CanGameContinue Method Verification',() => {
        const PlayerMoveWrapper = new shallowMount(PlayerMove);
        
        // 1. Invoke CanGameContinue with Continue sceanrio
        var GamePos = [0,0,0];
        var Result = PlayerMoveWrapper.vm.CanGameContinue(GamePos)
        expect(Result).toBeTruthy();
        // 2. Invoke CanGameContinue with Not continue sceanrio
        GamePos = ["X","O","X"];
        Result = PlayerMoveWrapper.vm.CanGameContinue(GamePos);
        expect(Result).toBeFalsy();
    });

    it('PlayerMove - IsGameDraw Method Verification',() => {
        const PlayerMoveWrapper = new shallowMount(PlayerMove);
        
        // 1. Invoke IsGameDraw with Positive Scenario
        PlayerMoveWrapper.vm.MoveSnapshot = [['O','X','O'],
                                             ['O','X','X'],
                                             ['X','O','X']       
                                            ]
        var Result = PlayerMoveWrapper.vm.IsGameDraw();
        expect(Result).toBeTruthy();
        // 1. Invoke IsGameDraw with Negative Scenario
        PlayerMoveWrapper.vm.MoveSnapshot = [[0,'X','O'],
                                             ['O',0,'X'],
                                             ['X','O',0]       
                                            ]
        Result = PlayerMoveWrapper.vm.IsGameDraw();
        expect(Result).toBeFalsy();
    });

    it('PlayerMove - VerifyWinningPosition Method Verification',() => {
        const PlayerMoveWrapper = new shallowMount(PlayerMove);
        
        // 1. Invoke VerifyWinningPosition with Positive Scenario with Player O
        var GamePos = ['O','O','O'];
        var Result = PlayerMoveWrapper.vm.VerifyWinningPosition(GamePos);
        expect(Result).toBeTruthy();
        // 2. Invoke VerifyWinningPosition with Positive Scenario with Player X
        var GamePos = ['X','X','X'];
        var Result = PlayerMoveWrapper.vm.VerifyWinningPosition(GamePos);
        expect(Result).toBeTruthy();
        // 3. Invoke VerifyWinningPosition with Negative Scenario 
        var GamePos = ['X','O','X'];
        var Result = PlayerMoveWrapper.vm.VerifyWinningPosition(GamePos);
        expect(Result).toBeFalsy();
    });

    it('PlayerMove - DoWeHaveWinner Method Verification For Player X',() => {
        const PlayerMoveWrapper = new shallowMount(PlayerMove);

        // 1. Verify X Winning Position - First Row
        PlayerMoveWrapper.vm.MoveSnapshot = [['X','X','X'],
                                             ['O','X','X'],
                                             ['X','O','X']       
                                            ];
        var Result = PlayerMoveWrapper.vm.DoWeHaveWinner();
        expect(Result).toBeTruthy();
        // 2. Verify X Winning Position - Second Row
        PlayerMoveWrapper.vm.MoveSnapshot = [['O','X','X'],
                ['X','X','X'],
                ['X','O','X']       
               ];
        Result = PlayerMoveWrapper.vm.DoWeHaveWinner();
        expect(Result).toBeTruthy();
        // 3. Verify X Winning Position - Third Row
        PlayerMoveWrapper.vm.MoveSnapshot = [['O','X','X'],
                ['X','O','X'],
                ['X','X','X']       
               ];
        Result = PlayerMoveWrapper.vm.DoWeHaveWinner();
        expect(Result).toBeTruthy();
        // 4. Verify X Winning Position - First Column
        PlayerMoveWrapper.vm.MoveSnapshot = [['X','X','O'],
                                            ['X','O','X'],
                                            ['X','O','X']       
                                        ];
        Result = PlayerMoveWrapper.vm.DoWeHaveWinner();
        expect(Result).toBeTruthy();
        // 5. Verify X Winning Position - Second Column
        PlayerMoveWrapper.vm.MoveSnapshot = [['O','X','O'],
                                            ['X','X','O'],
                                            ['O','X','X']       
                                        ];
        Result = PlayerMoveWrapper.vm.DoWeHaveWinner();
        expect(Result).toBeTruthy();
        // 6. Verify X Winning Position - Thrid Column
        PlayerMoveWrapper.vm.MoveSnapshot = [['O','X','X'],
                                            ['X','O','X'],
                                            ['O','X','X']       
                                            ];
        Result = PlayerMoveWrapper.vm.DoWeHaveWinner();
        expect(Result).toBeTruthy();
        // 6. Verify X Winning Position - Front Dianogal Column
        PlayerMoveWrapper.vm.MoveSnapshot = [['X','O','O'],
                                            ['O','X','X'],
                                            ['O','X','X']       
                                            ];
        Result = PlayerMoveWrapper.vm.DoWeHaveWinner();
        expect(Result).toBeTruthy();
        // 7. Verify X Winning Position - Back Dianogal Column
        PlayerMoveWrapper.vm.MoveSnapshot = [['O','O','X'],
                                            ['O','X','O'],
                                            ['X','X','X']       
                                            ];
        Result = PlayerMoveWrapper.vm.DoWeHaveWinner();
        expect(Result).toBeTruthy();
    });

    it('PlayerMove - DoWeHaveWinner Method Verification For Player O',() => {
        const PlayerMoveWrapper = new shallowMount(PlayerMove);

        // 1. Verify O Winning Position - First Row
        PlayerMoveWrapper.vm.MoveSnapshot = [['O','O','O'],
                                             ['O','X','X'],
                                             ['X','O','X']       
                                            ];
        var Result = PlayerMoveWrapper.vm.DoWeHaveWinner();
        expect(Result).toBeTruthy();
        // 2. Verify O Winning Position - Second Row
        PlayerMoveWrapper.vm.MoveSnapshot = [['O','X','X'],
                                            ['O','O','O'],
                                            ['X','O','X']       
                                        ];
        Result = PlayerMoveWrapper.vm.DoWeHaveWinner();
        expect(Result).toBeTruthy();
        // 3. Verify O Winning Position - Third Row
        PlayerMoveWrapper.vm.MoveSnapshot = [['O','X','X'],
                                            ['X','O','X'],
                                            ['O','O','O']       
                                        ];
        Result = PlayerMoveWrapper.vm.DoWeHaveWinner();
        expect(Result).toBeTruthy();
        // 4. Verify O Winning Position - First Column
        PlayerMoveWrapper.vm.MoveSnapshot = [['O','X','O'],
                                            ['O','O','X'],
                                            ['O','O','X']       
                                        ];
        Result = PlayerMoveWrapper.vm.DoWeHaveWinner();
        expect(Result).toBeTruthy();
        // 5. Verify O Winning Position - Second Column
        PlayerMoveWrapper.vm.MoveSnapshot = [['X','O','O'],
                                            ['X','O','O'],
                                            ['O','O','X']       
                                        ];
        Result = PlayerMoveWrapper.vm.DoWeHaveWinner();
        expect(Result).toBeTruthy();
        // 6. Verify O Winning Position - Thrid Column
        PlayerMoveWrapper.vm.MoveSnapshot = [['O','X','X'],
                                            ['X','O','X'],
                                            ['O','X','X']       
                                            ];
        Result = PlayerMoveWrapper.vm.DoWeHaveWinner();
        expect(Result).toBeTruthy();
        // 6. Verify X Winning Position - Front Dianogal Column
        PlayerMoveWrapper.vm.MoveSnapshot = [['X','O','O'],
                                            ['O','X','X'],
                                            ['O','X','X']       
                                            ];
        Result = PlayerMoveWrapper.vm.DoWeHaveWinner();
        expect(Result).toBeTruthy();
        // 7. Verify X Winning Position - Back Dianogal Column
        PlayerMoveWrapper.vm.MoveSnapshot = [['O','O','X'],
                                            ['O','X','O'],
                                            ['X','O','X']       
                                            ];
        Result = PlayerMoveWrapper.vm.DoWeHaveWinner();
        expect(Result).toBeTruthy();
    });

    it('PlayerMove - DoWeHaveWinner Method Verification For No Player is Winner',() => {
        const PlayerMoveWrapper = new shallowMount(PlayerMove);

        // 1.Not Winning Position
        PlayerMoveWrapper.vm.MoveSnapshot = [['O','X','O'],
                                             ['O','X','X'],
                                             ['X','O','X']       
                                            ];
        var Result = PlayerMoveWrapper.vm.DoWeHaveWinner();
        expect(Result).toBeFalsy();
    });

    it('PlayerMove - updatePosition Method Verification For Player X',() => {
        const PlayerMoveWrapper = new shallowMount(PlayerMove);

        // 1.Player X - A1
        //PlayerMoveWrapper.vm.MoveSnapshot = [['O','X','O'],
        //                                     ['O','X','X'],
        //                                     ['X','O','X']       
        //                                    ];
        PlayerMoveWrapper.vm.updatePosition("A1:X");
        expect(PlayerMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(PlayerMoveWrapper.vm.MoveSnapshot[0][0]).toBe("X");
        // 2.Player X - A2
        PlayerMoveWrapper.vm.updatePosition("A2:X");
        expect(PlayerMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(PlayerMoveWrapper.vm.MoveSnapshot[1][0]).toBe("X");
        // 3.Player X - A3
        PlayerMoveWrapper.vm.updatePosition("A3:X");
        expect(PlayerMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(PlayerMoveWrapper.vm.MoveSnapshot[2][0]).toBe("X");
        // 4.Player X - B1
        PlayerMoveWrapper.vm.updatePosition("B1:X");
        expect(PlayerMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(PlayerMoveWrapper.vm.MoveSnapshot[0][1]).toBe("X");
        // 5.Player X - B2
        PlayerMoveWrapper.vm.updatePosition("B2:X");
        expect(PlayerMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(PlayerMoveWrapper.vm.MoveSnapshot[1][1]).toBe("X");
        // 6.Player X - B3
        PlayerMoveWrapper.vm.updatePosition("B3:X");
        expect(PlayerMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(PlayerMoveWrapper.vm.MoveSnapshot[2][1]).toBe("X");
        // 7.Player X - C1
        PlayerMoveWrapper.vm.updatePosition("C1:X");
        expect(PlayerMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(PlayerMoveWrapper.vm.MoveSnapshot[0][2]).toBe("X");
        // 8.Player X - C2
        PlayerMoveWrapper.vm.updatePosition("C2:X");
        expect(PlayerMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(PlayerMoveWrapper.vm.MoveSnapshot[1][2]).toBe("X");
        // 9.Player X - C3
        PlayerMoveWrapper.vm.updatePosition("C3:X");
        expect(PlayerMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(PlayerMoveWrapper.vm.MoveSnapshot[2][2]).toBe("X");
    });

    it('PlayerMove - updatePosition Method Verification For Player O',() => {
        const PlayerMoveWrapper = new shallowMount(PlayerMove);

        // 1.Player O - A1
        //PlayerMoveWrapper.vm.MoveSnapshot = [['O','X','O'],
        //                                     ['O','X','X'],
        //                                     ['X','O','X']       
        //                                    ];
        PlayerMoveWrapper.vm.updatePosition("A1:O");
        expect(PlayerMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(PlayerMoveWrapper.vm.MoveSnapshot[0][0]).toBe("O");
        // 2.Player X - A2
        PlayerMoveWrapper.vm.updatePosition("A2:O");
        expect(PlayerMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(PlayerMoveWrapper.vm.MoveSnapshot[1][0]).toBe("O");
        // 3.Player O - A3
        PlayerMoveWrapper.vm.updatePosition("A3:O");
        expect(PlayerMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(PlayerMoveWrapper.vm.MoveSnapshot[2][0]).toBe("O");
        // 4.Player O - B1
        PlayerMoveWrapper.vm.updatePosition("B1:O");
        expect(PlayerMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(PlayerMoveWrapper.vm.MoveSnapshot[0][1]).toBe("O");
        // 5.Player O - B2
        PlayerMoveWrapper.vm.updatePosition("B2:O");
        expect(PlayerMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(PlayerMoveWrapper.vm.MoveSnapshot[1][1]).toBe("O");
        // 6.Player O - B3
        PlayerMoveWrapper.vm.updatePosition("B3:O");
        expect(PlayerMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(PlayerMoveWrapper.vm.MoveSnapshot[2][1]).toBe("O");
        // 7.Player O - C1
        PlayerMoveWrapper.vm.updatePosition("C1:O");
        expect(PlayerMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(PlayerMoveWrapper.vm.MoveSnapshot[0][2]).toBe("O");
        // 8.Player O - C2
        PlayerMoveWrapper.vm.updatePosition("C2:O");
        expect(PlayerMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(PlayerMoveWrapper.vm.MoveSnapshot[1][2]).toBe("O");
        // 9.Player O - C3
        PlayerMoveWrapper.vm.updatePosition("C3:O");
        expect(PlayerMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(PlayerMoveWrapper.vm.MoveSnapshot[2][2]).toBe("O");
    });

    it('PlayerMove - handleMove Method Verification For Player X (Normal Move)', () => {
        const HandleMoveWrapper = new shallowMount(PlayerMove);

        // Verify any Move Except Winner/Draw
        HandleMoveWrapper.vm.handleMove("A1:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[0][0]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("A2:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[1][0]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("B1:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[0][1]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("B2:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[1][1]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
    });

    it('PlayerMove - handleMove Method Verification For Player O (Normal Move)', () => {
        const HandleMoveWrapper = new shallowMount(PlayerMove);

        // Verify any Move Except Winner/Draw
        HandleMoveWrapper.vm.handleMove("A1:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[0][0]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("A2:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[1][0]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("B1:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[0][1]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("B2:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[1][1]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        //ADD WINNER MOVE AND DRAW MOVE FOR BOTH PLAYER
    });

    it('PlayerMove - handleMove Method Verification For Player X (Winning Move 1st Row)', () => {
        const HandleMoveWrapper = new shallowMount(PlayerMove);

        // Verify any Move Except Winner/Draw
        HandleMoveWrapper.vm.handleMove("A1:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[0][0]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("B1:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[0][1]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("C1:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[0][2]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("gotWinner");
        // Grab the gotWinner event object and verify argument
        const Winner = HandleMoveWrapper.emitted('gotWinner');
        expect(Winner).toHaveLength(1);
        expect(Winner[0]).toHaveLength(1);
        expect(Winner[0][0]).toEqual('X');
    });

    it('PlayerMove - handleMove Method Verification For Player X (Winning Move 2st Row)', () => {
        const HandleMoveWrapper = new shallowMount(PlayerMove);

        // Verify any Move Except Winner/Draw
        HandleMoveWrapper.vm.handleMove("A2:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[1][0]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("B2:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[1][1]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("C2:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[1][2]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("gotWinner");
        // Grab the gotWinner event object and verify argument
        const Winner = HandleMoveWrapper.emitted('gotWinner');
        expect(Winner).toHaveLength(1);
        expect(Winner[0]).toHaveLength(1);
        expect(Winner[0][0]).toEqual('X');
    });
    it('PlayerMove - handleMove Method Verification For Player X (Winning Move 3st Row)', () => {
        const HandleMoveWrapper = new shallowMount(PlayerMove);

        // Verify any Move Except Winner/Draw
        HandleMoveWrapper.vm.handleMove("A3:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[2][0]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("B3:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[2][1]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("C3:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[2][2]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("gotWinner");
        // Grab the gotWinner event object and verify argument
        const Winner = HandleMoveWrapper.emitted('gotWinner');
        expect(Winner).toHaveLength(1);
        expect(Winner[0]).toHaveLength(1);
        expect(Winner[0][0]).toEqual('X');
    });
    it('PlayerMove - handleMove Method Verification For Player X (Winning Move 1st Column)', () => {
        const HandleMoveWrapper = new shallowMount(PlayerMove);

        // Verify any Move Except Winner/Draw
        HandleMoveWrapper.vm.handleMove("A1:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[0][0]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("B1:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[0][1]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("C1:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[0][2]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("gotWinner");
        // Grab the gotWinner event object and verify argument
        const Winner = HandleMoveWrapper.emitted('gotWinner');
        expect(Winner).toHaveLength(1);
        expect(Winner[0]).toHaveLength(1);
        expect(Winner[0][0]).toEqual('X');
    });
    it('PlayerMove - handleMove Method Verification For Player X (Winning Move 2nd Column)', () => {
        const HandleMoveWrapper = new shallowMount(PlayerMove);

        // Verify any Move Except Winner/Draw
        HandleMoveWrapper.vm.handleMove("A2:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[1][0]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("B2:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[1][1]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("C2:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[1][2]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("gotWinner");
        // Grab the gotWinner event object and verify argument
        const Winner = HandleMoveWrapper.emitted('gotWinner');
        expect(Winner).toHaveLength(1);
        expect(Winner[0]).toHaveLength(1);
        expect(Winner[0][0]).toEqual('X');
    });
    it('PlayerMove - handleMove Method Verification For Player X (Winning Move 3rd Column)', () => {
        const HandleMoveWrapper = new shallowMount(PlayerMove);

        // Verify any Move Except Winner/Draw
        HandleMoveWrapper.vm.handleMove("A3:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[2][0]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("B3:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[2][1]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("C3:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[2][2]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("gotWinner");
        // Grab the gotWinner event object and verify argument
        const Winner = HandleMoveWrapper.emitted('gotWinner');
        expect(Winner).toHaveLength(1);
        expect(Winner[0]).toHaveLength(1);
        expect(Winner[0][0]).toEqual('X');
    });
    it('PlayerMove - handleMove Method Verification For Player X (Winning Move Front Diagnoal)', () => {
        const HandleMoveWrapper = new shallowMount(PlayerMove);

        // Verify any Move Except Winner/Draw
        HandleMoveWrapper.vm.handleMove("A1:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[0][0]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("B2:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[1][1]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("C3:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[2][2]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("gotWinner");
        // Grab the gotWinner event object and verify argument
        const Winner = HandleMoveWrapper.emitted('gotWinner');
        expect(Winner).toHaveLength(1);
        expect(Winner[0]).toHaveLength(1);
        expect(Winner[0][0]).toEqual('X');
    });
    it('PlayerMove - handleMove Method Verification For Player X (Winning Move Back Diagnoal)', () => {
        const HandleMoveWrapper = new shallowMount(PlayerMove);

        // Verify any Move Except Winner/Draw
        HandleMoveWrapper.vm.handleMove("A3:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[2][0]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("B2:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[1][1]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("C1:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[0][2]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("gotWinner");
        // Grab the gotWinner event object and verify argument
        const Winner = HandleMoveWrapper.emitted('gotWinner');
        expect(Winner).toHaveLength(1);
        expect(Winner[0]).toHaveLength(1);
        expect(Winner[0][0]).toEqual('X');
    });

    it('PlayerMove - handleMove Method Verification For Player O (Winning Move 1st Row)', () => {
        const HandleMoveWrapper = new shallowMount(PlayerMove);

        // Verify any Move Except Winner/Draw
        HandleMoveWrapper.vm.handleMove("A1:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[0][0]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("B1:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[0][1]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("C1:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[0][2]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("gotWinner");
        // Grab the gotWinner event object and verify argument
        const Winner = HandleMoveWrapper.emitted('gotWinner');
        expect(Winner).toHaveLength(1);
        expect(Winner[0]).toHaveLength(1);
        expect(Winner[0][0]).toEqual('O');
    });

    it('PlayerMove - handleMove Method Verification For Player O (Winning Move 2st Row)', () => {
        const HandleMoveWrapper = new shallowMount(PlayerMove);

        // Verify any Move Except Winner/Draw
        HandleMoveWrapper.vm.handleMove("A2:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[1][0]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("B2:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[1][1]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("C2:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[1][2]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("gotWinner");
        // Grab the gotWinner event object and verify argument
        const Winner = HandleMoveWrapper.emitted('gotWinner');
        expect(Winner).toHaveLength(1);
        expect(Winner[0]).toHaveLength(1);
        expect(Winner[0][0]).toEqual('O');
    });

    it('PlayerMove - handleMove Method Verification For Player O (Winning Move 3st Row)', () => {
        const HandleMoveWrapper = new shallowMount(PlayerMove);

        // Verify any Move Except Winner/Draw
        HandleMoveWrapper.vm.handleMove("A3:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[2][0]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("B3:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[2][1]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("C3:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[2][2]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("gotWinner");
        // Grab the gotWinner event object and verify argument
        const Winner = HandleMoveWrapper.emitted('gotWinner');
        expect(Winner).toHaveLength(1);
        expect(Winner[0]).toHaveLength(1);
        expect(Winner[0][0]).toEqual('O');
    });

    it('PlayerMove - handleMove Method Verification For Player O (Winning Move 1st Column)', () => {
        const HandleMoveWrapper = new shallowMount(PlayerMove);

        // Verify any Move Except Winner/Draw
        HandleMoveWrapper.vm.handleMove("A1:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[0][0]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("B1:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[0][1]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("C1:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[0][2]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("gotWinner");
        // Grab the gotWinner event object and verify argument
        const Winner = HandleMoveWrapper.emitted('gotWinner');
        expect(Winner).toHaveLength(1);
        expect(Winner[0]).toHaveLength(1);
        expect(Winner[0][0]).toEqual('O');
    });
    it('PlayerMove - handleMove Method Verification For Player O (Winning Move 2nd Column)', () => {
        const HandleMoveWrapper = new shallowMount(PlayerMove);

        // Verify any Move Except Winner/Draw
        HandleMoveWrapper.vm.handleMove("A2:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[1][0]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("B2:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[1][1]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("C2:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[1][2]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("gotWinner");
        // Grab the gotWinner event object and verify argument
        const Winner = HandleMoveWrapper.emitted('gotWinner');
        expect(Winner).toHaveLength(1);
        expect(Winner[0]).toHaveLength(1);
        expect(Winner[0][0]).toEqual('O');
    });
    it('PlayerMove - handleMove Method Verification For Player X (Winning Move 3rd Column)', () => {
        const HandleMoveWrapper = new shallowMount(PlayerMove);

        // Verify any Move Except Winner/Draw
        HandleMoveWrapper.vm.handleMove("A3:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[2][0]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("B3:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[2][1]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("C3:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[2][2]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("gotWinner");
        // Grab the gotWinner event object and verify argument
        const Winner = HandleMoveWrapper.emitted('gotWinner');
        expect(Winner).toHaveLength(1);
        expect(Winner[0]).toHaveLength(1);
        expect(Winner[0][0]).toEqual('O');
    });

    it('PlayerMove - handleMove Method Verification For Player O (Winning Move Front Diagnoal)', () => {
        const HandleMoveWrapper = new shallowMount(PlayerMove);

        // Verify any Move Except Winner/Draw
        HandleMoveWrapper.vm.handleMove("A1:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[0][0]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("B2:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[1][1]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("C3:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[2][2]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("gotWinner");
        // Grab the gotWinner event object and verify argument
        const Winner = HandleMoveWrapper.emitted('gotWinner');
        expect(Winner).toHaveLength(1);
        expect(Winner[0]).toHaveLength(1);
        expect(Winner[0][0]).toEqual('O');
    });
    it('PlayerMove - handleMove Method Verification For Player O (Winning Move Back Diagnoal)', () => {
        const HandleMoveWrapper = new shallowMount(PlayerMove);

        // Verify any Move Except Winner/Draw
        HandleMoveWrapper.vm.handleMove("A3:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[2][0]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("B2:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[1][1]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("C1:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[0][2]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("gotWinner");
        // Grab the gotWinner event object and verify argument
        const Winner = HandleMoveWrapper.emitted('gotWinner');
        expect(Winner).toHaveLength(1);
        expect(Winner[0]).toHaveLength(1);
        expect(Winner[0][0]).toEqual('O');
    });

    it('PlayerMove - handleMove Method Verification (Game Draw)', () => {
        const HandleMoveWrapper = new shallowMount(PlayerMove);

        // Verify any Move Except Winner/Draw
        HandleMoveWrapper.vm.handleMove("A1:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[0][0]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("B1:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[0][1]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("C1:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[0][2]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        
        HandleMoveWrapper.vm.handleMove("A2:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[1][0]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("B2:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[1][1]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("C2:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[1][2]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer")

        HandleMoveWrapper.vm.handleMove("A3:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[2][0]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("B3:O");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("O");
        expect(HandleMoveWrapper.vm.MoveSnapshot[2][1]).toBe("O");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("nextPlayer");
        HandleMoveWrapper.vm.handleMove("C3:X");
        expect(HandleMoveWrapper.vm.ActivePlayer).toBe("X");
        expect(HandleMoveWrapper.vm.MoveSnapshot[2][2]).toBe("X");
        expect(HandleMoveWrapper.emitted()).toHaveProperty("gamedraw")
    });
});