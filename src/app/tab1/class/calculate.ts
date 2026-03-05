export class Calculate {
    private a: number;
    private b: number;
    private c: number;
    private d: number = 0;
    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    public D(): number {
        if (this.a % 3 == 0 && this.b % 3 == 0 && this.c % 3 == 0) {
            this.d = this.a + this.b + this.c;
        } else this.d = (this.a + this.b + this.c) ** 3;
        return this.d;
    }
}