
<script>
    export default {
        name : 'PlayerMove',
        props: ['PositionMove'],
        watch: {
            'PositionMove': function(arMsg) {
                this.handleMove(arMsg);
            }
        },
        data() {
            return {
                TargetedMove : this.PositionMove,
                MoveSnapshot : [[0,0,0],
                                [0,0,0],
                                [0,0,0]],
                ActivePlayer: '',
                ActiveWinningPosition: null
            }
        },
        methods: {
            handleMove(msg) {
                this.updatePosition(msg);
                if(this.DoWeHaveWinner()) {
                    // We found the WinnerFound
                    console.log("We got the Winer");
                    console.log(this.ActiveWinningPosition);
                    this.$emit('gotWinner',this.ActivePlayer);
                }
                else if(this.IsGameDraw()) {
                    // Game over, no Winner
                    console.log("FLASH WARNING: GAME IS OVER, ITS DRAW");
                    this.$emit('gamedraw');
                }
                else {
                    console.log("Board at the glance : ",this.MoveSnapshot);
                    this.$emit('nextPlayer');
                    
                }
            },
            updatePosition(moveData) {
                // Separate Move from player
                let playermove = moveData.split(':');
                // Determine Row and Column
                // 1. Row
                let RowColumnString = playermove[0]
                let Row = Number(RowColumnString[1]) - 1;
                // 2. Column
                let Column = -1;
                switch(RowColumnString[0]) {
                    case 'A' : Column = 0; break;
                    case 'B' : Column = 1; break;
                    case 'C' : Column = 2; break;
                }
                // Update the row and Column
                this.ActivePlayer = this.MoveSnapshot[Row][Column] = playermove[1];
            },
            DoWeHaveWinner() {
                var WinnerFound = false;
                // Scan the Player move by Row, Column and Diagnoal Row 
                // 1. Row Check
                for(let count = 0;count < this.MoveSnapshot.length;count++) {
                    var row = this.MoveSnapshot[count];
                    if(this.VerifyWinningPosition(row)) {
                        console.log("Remove it later: Winner found");
                        WinnerFound = true;
                        break;
                    }    
                }
                if(!WinnerFound)
                {
                    // 2 Column Check
                    // 1st Column
                    for(let count = 0;count < 3;count++) {
                        var column = this.MoveSnapshot.map((value) => { return value[count]})
                        if(this.VerifyWinningPosition(column)) {
                            WinnerFound = true;
                            break;
                        }
                    }
                }
                if(!WinnerFound) {
                    // 3. Check Front Diagnoal
                    let diagIndex = [0,1,2];
                    var finalArray = [];
                    var backdiagnoal = [];
                    for(let count = 0;count < 3;count++) {
                        let column = this.MoveSnapshot[count][diagIndex[count]];
                        finalArray.push(column);
                        column = this.MoveSnapshot[count][diagIndex[(diagIndex.length - 1) - count]];
                        backdiagnoal.push(column);
                    }
                    if(this.VerifyWinningPosition(finalArray)) {
                        WinnerFound = true;
                    }
                    else if(this.VerifyWinningPosition(backdiagnoal)) {
                        WinnerFound = true;
                    }
                }
                return WinnerFound;
            },
            VerifyWinningPosition(arrayvalue) {
                var Result = false;
                Result = arrayvalue.every(value => (value != 0) && value == arrayvalue[0]);
                if(Result && (this.ActivePlayer === arrayvalue[0])) {
                    // Mark Active Position
                    this.ActiveWinningPosition = arrayvalue;
                    Result = true; 
                }
                return Result;
            },
            CanGameContinue(arrayvalue) {
                var Result = false;
                Result = arrayvalue.some(value => {
                    console.log("Value verify ",value);
                    return (value == 0);
                } );
                if(Result) {
                    // Still some position available
                    Result = true; 
                }
                return Result;
            },
            IsGameDraw() {
                console.log("Checking game draw status");
                var DrawStatus = false;
                for(let count = 0;count < 3;count++) {
                    var column = this.MoveSnapshot.map((value) => { return value[count]})
                    console.log("Column for draw : ",column);
                    if(this.CanGameContinue(column)) {
                        DrawStatus = false;
                    }
                    else {
                        DrawStatus = true;
                    }
                }
                if(DrawStatus)
                {
                    console.log("No position available, game is over");
                }
                return DrawStatus;
            }

        },
        render() {
            return null
        }
    }
</script>