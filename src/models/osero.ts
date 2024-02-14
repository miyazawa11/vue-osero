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
    }

    //色の変更（ひっくり返し）
    public change(){
        if(this.turnColor=="black") {
            this.turnColor=CellState.White
        }
        else if (this.turnColor=="white"){
            this.turnColor=CellState.Black
        }
        else{
            console.log("失敗")
        }
        console.log("")
    }
    //個数判定
    public get blackCount():number{
        let count=0
        this.rows.forEach(r => {
            count+=r.blackCount
        });
        return count
    }
    public get whiteCount():number{
        let count=0
        this.rows.forEach(r => {
            count +=r.whiteCount
        });
        return count
    }
    //石を置く
    public put(x:number,y:number){

        if(this.rows[y].cells[x].state!=="none") return
        this.rows[y].cells[x].state=this.turnColor
        
    }
    public changeColor(canTurn:[number,number][],x:number,y:number){
        for(let i=0;i<canTurn.length;i++){
            this.rows[canTurn[i][0]].cells[canTurn[i][1]].state=this.rows[y].cells[x].state
        }
    }
    //ひっくり返し判定
    public serarch(x:number,y:number):[number,number][]{
        //縦横
        const resultSerarch: [number, number][] = [];
        //周りに違う色の石があるか
        for(let i=-1;i<2;i++){
            for(let j=-1;j<2;j++){
                if(((j==0)&&(i==0))||(y+i>7)||(x+j>7)||(y+i<0)||(x+j<0)) continue
                if(this.rows[y+i].cells[x+j].cellState==='none')continue
                else if(this.rows[y+i].cells[x+j].cellState===this.turnColor)continue
                //同じ色の石が遠在するか
                else {
                    // canTurn.push([i,j])
                    let count=1
                    while((y+count*i<8)&&(y + count * i >= 0)&&(x + count * j < 8)&&(x + count * j >= 0)) {
                        if(this.rows[y+count*i].cells[x+count*j].cellState==this.turnColor){
                            // console.log(this.rows[y+count*canTurn[i][0]].cells[count*canTurn[i][1]])
                            while(!(count == 0)){
                                // this.rows[y+count*i].cells[x+count*j].state=this.rows[y].cells[x].state
                                resultSerarch.push([y+count*i,x+count*j])
                                count--;
                            }
                            break
                        }
                        count++
                    }
                }
            }
        }
    console.log(resultSerarch)
    return resultSerarch
    }
    public endCheck(): boolean {
        for (const r of this.rows) {
            if (r.endCheck()) {
                return false; // 一つでも false があれば false を返す
            }
        }
        return true; // すべての r.endCheck() が true の場合に true を返す
    }
}
    
export class Row{
    public cells:Cell[];
    constructor(rowNumber:number){
        this.cells = [...Array(8).keys()].map(i => new Cell (i,rowNumber))
    }
    public get blackCount():number{
        let count=0
        this.cells.forEach(r => {
            if(r.cellState==CellState.Black)count++
        });
        return count
    }
    public get whiteCount():number{
        let count=0
        this.cells.forEach(r => {
            if(r.cellState==CellState.White)count++
        });
        return count
    }
    public endCheck(){
        this.cells.forEach(r=>{
            if(r.cellState==CellState.None) return false
        })
        return true
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

export enum CellState{
    White='white',
    Black='black',
    None='none',
}