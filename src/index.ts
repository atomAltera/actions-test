

export interface Sum {
  a: number;
  b: number;
  sum: number;
}

export interface Sub {
  a: number;
  b: number;
  sub: number;
}

export interface Mul {
  a: number;
  b: number;
  sub: number;
}


export function sum(a: number, b: number): Sum {
    return {
        a, 
        b, 
        sum: a+b,
    }
}


export function sub(a: number, b: number): Sub {
  return {
    a,
    b,
    sub: a - b,
  };
}

export function mul(a: number, b: number): Mul {
  return {
    a,
    b,
    sub: a * b,
  };
}