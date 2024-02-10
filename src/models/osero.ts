export class Board{
    public rows:Row[];

    constructor(){
        this.rows = [...Array(8).keys()].map(i=> new Row(i))
        console.log(this.rows)
    }
    private putBlack:string = "black"
    private putWhite:string = "white"
    private putColor:string = this.putBlack
    public change(){
        return this.putColor=="black"? this.putWhite: this.putBlack;
    }
    public put(){
        
    }
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