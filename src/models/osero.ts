// const max =(x:number,y:number)=>{
//     return x>=y?x:y;
// }

export class Board{
    public rows:Row[];
    public turnColor:CellState=CellState.Black;
    
    constructor(){
        this.rows = [...Array(8).keys()].map(i=> new Row(i))
        //初期設定
        this.rows[3].cells[3].state = CellState.White;
        this.rows[3].cells[4].state = CellState.Black;
        this.rows[4].cells[3].state = CellState.Black;
        this.rows[4].cells[4].state = CellState.White;

        console.log(this.rows)
    }
    public putBlack:string = "black"
    public putWhite:string = "white"
    public putColor:string = this.putBlack

    //色の変更（ひっくり返し）
    public change(){
        return this.putColor=="black"? this.putWhite: this.putBlack;
    }
    //石を置く
    public put(x:number,y:number){

        if(this.rows[y].cells[x].state!=="none") return
        this.rows[y].cells[x].state=this.turnColor
        if(this.turnColor=="black") {
            this.turnColor=CellState.White
        }
        else if (this.turnColor=="white"){
            this.turnColor=CellState.Black
        }
    }
    //ひっくり返し判定
    public serarch(x:number,y:number){
        //縦横
        console.log("設置場所(x:y)",x+":"+y)
        // const canTurn: [number, number][] = [];
        for(let i=-1;i<2;i++){
            for(let j=-1;j<2;j++){
                if(((j==0)&&(i==0))||(y+i>7)||(x+j>7)||(y+i<0)||(x+j<0)) continue
                console.log(i,j,this.rows[y+i].cells[x+j].cellState)
                if(this.rows[y+i].cells[x+j].cellState==='none')continue
                else if(this.rows[y+i].cells[x+j].cellState===this.rows[y].cells[x].cellState)continue
                else {
                    // canTurn.push([i,j])
                    let count=1
                    while((y+count*i<8)&&(y + count * i >= 0)&&(x + count * j < 8)&&(x + count * j >= 0)) {
                        if(this.rows[y+count*i].cells[x+count*j].cellState==CellState.Black){
                            // console.log(this.rows[y+count*canTurn[i][0]].cells[count*canTurn[i][1]])
                            while(!(count == 0)){
                                console.log("count",count)
                                console.log("前",this.rows[y+count*i].cells[x+count*j])
                                this.rows[y+count*i].cells[x+count*j].state=CellState.Black
                                console.log("後",this.rows[y+count*i].cells[x+count*j])
                                count--;
                            }
                            break
                        }
                        count++
                    }
                }
            }
        }
        // console.log("canTurn",canTurn)
        // // const result:[number,number][]=[];
        // for(let i=0;i<canTurn.length;i++){
        //     const finalStone:[number,number][]=[]
        //     let count=1
        //     // while((y+count*canTurn[i][0]<8)||(x+count*canTurn[i][1]<8)||(y+count*canTurn[i][0]>-1)||(x+count*canTurn[i][1]>-1)){
        //     while((y+count*canTurn[i][0]<8)&&(y + count * canTurn[i][0] >= 0)&&(x + count * canTurn[i][1] < 8)&&(x + count * canTurn[i][1] >= 0)) {
        //         console.log(x+count*canTurn[i][1],y+count*canTurn[i][0])

        //         if(this.rows[y+count*canTurn[i][0]].cells[x+count*canTurn[i][1]].cellState==CellState.Black){
        //             // console.log(this.rows[y+count*canTurn[i][0]].cells[count*canTurn[i][1]])
        //             finalStone.push([count*canTurn[i][0],count*canTurn[i][1]])
        //             break
        //         }
        //         count++
        //     }
        //     console.log("finalStone",finalStone)
        //     for(let i=0;i<finalStone.length;i++){
        //         let count=1
        //         while(!(y+count*finalStone[i][0]/Math.abs(finalStone[i][0]) == finalStone[i][0])||!(x+count*finalStone[i][1]/Math.abs(finalStone[i][1]) == finalStone[i][1])){
        //             count++
        //             console.log(y+count*finalStone[i][0]/Math.abs(finalStone[i][0]),x+count*finalStone[i][1]/Math.abs(finalStone[i][1]))
        //             this.rows[y+count*finalStone[i][0]/Math.abs(finalStone[i][0])].cells[x+count*finalStone[i][1]/Math.abs(finalStone[i][1])].state=CellState.Black
        //             console.log(this.rows)
        //         }
        //     }

            // for(let j=1;j<8;j++){
            //     if((x+j>7)||(y+j)>7) continue
            //     console.log(this.rows[y].cells[x].cellState+":"+this.rows[y+j*canTurn[i][0]].cells[x+j*canTurn[i][1]].cellState)
            //     if(this.rows[y].cells[x].cellState
            //         ===this.rows[y+j*canTurn[i][0]].cells[x+j*canTurn[i][1]].cellState){
            //         finalStone.push([y+j*canTurn[i][0], x+j*canTurn[i][1]]);
            //         console.log("finalStone")
            //     }
            // }
            // for(let k=0;k<finalStone.length;k++){
            //     let count=0
            //     while((x==finalStone[k][0])||(y==finalStone[k][1])){
            //         count++;
            //         this.rows[y+count*canTurn[k][0]].cells[x+count*canTurn[k][1]].cellState=CellState.Black
            //     }
            // }
        }
    }
    //ひっくり返し
// }
export class Row{
    public cells:Cell[];
    constructor(rowNumber:number){
        this.cells = [...Array(8).keys()].map(i => new Cell (i,rowNumber))
    }
}
export class Cell{
    public x:number;
    public y:number;
    public state:CellState = CellState.None

    constructor(x:number,y:number){
        this.x = x
        this.y = y
    }
    public get cellState():CellState{
        return this.state;
    }
    public putCell():void{
        this.state=CellState.Black
    }
}

// class Point{
//     public x:number;
//     public y:number;

//     constructor(x: number,y: number){
//         this.x=x;
//         this.y=y;
//     }
// }
export enum CellState{
    White='white',
    Black='black',
    None='none',
}