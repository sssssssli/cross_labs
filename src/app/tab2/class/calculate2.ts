export class Calculate2 {
    private a: number;
    private b: number;
    private numbers: number[] = [];
    private product: number = 1;
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
        this.calculate();
    }
    private calculate() {
        for (let i = this.a; i <= this.b; i++) {
            if (i % 7 === 0 && i < 30) {
                this.numbers.push(i);
                this.product *= i;
            }
        }
    if (this.numbers.length === 0) {
        this.product = 0;
    }

    }
    public getNumbers(): number[] {
        return this.numbers;
    }
    public getProduct(): number {
        return this.product;
    }  
}