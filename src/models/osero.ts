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
    private putBlack:string = "black"
    private putWhite:string = "white"
    private putColor:string = this.putBlack

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
    //
}
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