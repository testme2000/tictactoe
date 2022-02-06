<template>
    <div>
        <table class="table table-bordered" >
            <tbody>
                <tr id="1">
                    <td width="200" height="200" id="A1" v-on:click="handleMove('A1')"><img v-if=PlayResult[0][0] :src="PlayResult[0][0]" width="100"/></td>
                    <td width="200" height="200" id="B1" v-on:click="handleMove('B1')"><img v-if=PlayResult[0][1] :src="PlayResult[0][1]" width="100"/></td>
                    <td width="200" height="200" id="C1" v-on:click="handleMove('C1')"><img v-if=PlayResult[0][2] :src="PlayResult[0][2]" width="100"/></td>
                </tr>
                <tr id="2">
                    <td width="200" height="200" id="A2" v-on:click="handleMove('A2')"><img v-if=PlayResult[1][0] :src="PlayResult[1][0]" width="100"/></td>
                    <td width="200" height="200" id="B2" v-on:click="handleMove('B2')"><img v-if=PlayResult[1][1] :src="PlayResult[1][1]" width="100"/></td>
                    <td width="200" height="200" id="C2" v-on:click="handleMove('C2')"><img v-if=PlayResult[1][2] :src="PlayResult[1][2]" width="100"/></td>
                </tr>
                <tr id="3">
                    <td width="200" height="200" id="A3" v-on:click="handleMove('A3')"><img v-if=PlayResult[2][0] :src="PlayResult[2][0]" width="100"/></td>
                    <td width="200" height="200" id="B3" v-on:click="handleMove('B3')"><img v-if=PlayResult[2][1] :src="PlayResult[2][1]" width="100"/></td>
                    <td width="200" height="200" id="C3" v-on:click="handleMove('C3')"><img v-if=PlayResult[2][2] :src="PlayResult[2][2]" width="100"/></td>
                </tr>
            </tbody>
        </table>
        <PlayerMove :PositionMove="CurrentMove" @nextPlayer="switchPlayer" @gotWinner="ProcessWinner" @gamedraw="GameDraw" />
        <GameResult v-if=GameOver :Player="CurrentPlayer" />
    </div>
</template>
<script>
    import PlayerMove from './playermove.vue'
    import GameResult from './gameresult.vue'

    export default {
        name : 'Board',
        components: {
            PlayerMove,
            GameResult
        },
        data() {
            return {
                CurrentMove : '',
                CurrentPlayer : 'X',
                PlayResult : [['','',''],
                              ['','',''],
                              ['','','']],
                crossimg : require('../assets/cross.png'),
                oimg : require('../assets/o.png'),
                GameOver: false
            }
        },
        methods: {
            handleMove(msg) {
                if(!this.GameOver) {
                    this.CurrentMove = msg + ":" + this.CurrentPlayer;
                    if(this.CurrentMove.length != 0)
                    {
                        console.log("Current move : ",this.CurrentMove);
                        // Get Coordinates
                        let PlayData = this.CurrentMove.split(':');
                        console.log("This is Coordinates ",PlayData);
                        let Row = Number(PlayData[0][1]) - 1;
                        // 2. Column
                        let Column = -1;
                        switch(PlayData[0][0]) {
                            case 'A' : Column = 0; break;
                            case 'B' : Column = 1; break;
                            case 'C' : Column = 2; break;
                        }
                        console.log("Row and Column ",Row,Column);
                        // Get Player X or O
                        let FinishPlay = PlayData[1];
                        console.log("Finished Player : ",FinishPlay);
                        var image = (FinishPlay == 'X') ? this.crossimg : this.oimg;
                        // Set the Player move
                        this.setPlayer(Row,Column,image);
                        console.log(this.PlayResult);
                        console.log("Final Result ",this.PlayResult[Row][Column]);
                    }
                }
            },
            switchPlayer() {
                this.CurrentPlayer = (this.CurrentPlayer == 'X') ? 'O' : 'X';
                console.log("Player switched : " + this.CurrentPlayer);
            },
            setPlayer(Row,Column,image) {
                this.PlayResult[Row][Column] = image;
            },
            ProcessWinner(Winner) {
                console.log("Game Over, Winner Found : ",Winner);
                this.GameOver = true;
            },
            GameDraw() {
                console.log("Game draw, no winner");
                this.CurrentPlayer = "NO WINNER";
                this.GameOver = true;
            }
        }
    }
</script>
<style>
    table {
        width: 90%;
    }

    table {
        border: 10px solid black;
    }

    td {
        width:200;
        height:200;
        align:center;
    }

   
</style>
