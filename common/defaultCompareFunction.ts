import {CompareFunction} from "./CompareFunction";

export const defaultCompareFunction: CompareFunction<number> = (a: number, b: number) => {

    if (a === b) {
        return 0;
    }
    else if (a < b) {
        return -1;
    }
    else {
        return 1;
    }
};