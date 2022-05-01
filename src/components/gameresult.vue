<template>
    <h2>Game Over, {{WinningMsg}}{{Winner}}</h2>
</template>

<script>
    export default {
        name : 'GameResult',
        props: ['Player'],
        data() {
            return {
                Winner: this.Player,
                WinningMsg: 'Test'
            }
        },
        created() {
            console.log("Game over created");
            console.log("Player ",this.Winner);
            this.WinningMsg = "Winner is ";
            if(this.Winner == "NO WINNER")
            {
                this.WinningMsg = "The Game is draw :  ";
            }
        }
    }

</script>
