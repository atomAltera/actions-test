

export interface Sum {
    a: number;
    b: number;
    sum: number;
}

export function sum(a: number, b: number): Sum {
    return {
        a, 
        b, 
        sum: a+b,
    }
}