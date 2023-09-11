/**
 * Custom version of 'clsx' utility migrated to TypeScript.
 */
function toVal(mix) {
    let str = '';
    if (typeof mix === 'string' || typeof mix === 'number') {
        str += mix;
    }
    else if (typeof mix === 'object') {
        if (Array.isArray(mix)) {
            for (let k = 0; k < mix.length; k++) {
                if (mix[k]) {
                    const y = toVal(mix[k]);
                    if (y) {
                        str && (str += ' ');
                        str += y;
                    }
                }
            }
        }
        else {
            for (const k in mix) {
                if (mix[k]) {
                    str && (str += ' ');
                    str += k;
                }
            }
        }
    }
    return str;
}
export function clsq(...inputs) {
    let i = 0;
    let tmp;
    let str = '';
    while (i < inputs.length) {
        tmp = inputs[i++];
        if (tmp) {
            const x = toVal(tmp);
            if (x) {
                str && (str += ' ');
                str += x;
            }
        }
    }
    return str;
}
export default clsq;
//# sourceMappingURL=clsq.js.map