export class Calculate3 {
    private n: number;
    private matrix: number[][]=[];
    private sum: number=0;

    constructor(n: number) {
        this.n = n;
        this.generateMatrix();
    }

    private generateMatrix() {
        for (let i = 0; i < this.n; i++) {
            let row: number[] = [];
            for (let j = 0; j < this.n; j++) {
                let value = Math.floor(Math.random() * 10);
                row.push(value);

                if (i === j) {
                    this.sum += value;
                }
            }
            this.matrix.push(row);
        }
    }
    
    getMatrix(): number[][] {
        return this.matrix;
    }

    getSum(): number {
        return this.sum;
    }
}