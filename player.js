class Player
{
    constructor()
    {
        this.index = 0;
        this.distance = 0;
        this.flag = false;
        this.lane = 2;
    }

    update()
    {
        database.ref("players/player"+player.index).update({
            'lane': this.lane,
            'distance': this.distance,
            'flag': this.flag
        })
    }

    static getPlayerInfo()
    {
        database.ref("players").on("value", function(data){
            allPlayers = data.val();
        })
    }
}