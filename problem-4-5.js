function findTarget(target, array) {
    let terminated = false;
    let targetIndex = -1;
    let index = 0;
    while (!terminated) {
        if(array[index] === undefined) {
            terminated = true;
        } else if(array[index] === target) {
            targetIndex = index;
            terminated = true;
        }
        index++;
    }

    return targetIndex;
}

function findTargetV2(target, array) {
    let currentIndex = 0;
    while(arr[currentIndex] !== undefined) {
        if(arr[currentIndex] === target) return currentIndex;
        currentIndex++;
    }
    
    return -1;
}

function sayIt(first) {
    let msg = first;
    console.log(arguments.length);
    return function (second, third) {
        console.log(arguments.length);
        msg += ` ${second} ${third} `;
        return function (forth) {
            msg += `${forth}`;
            return function () {
                return msg;
            }
        }
    }
}

let msg = '';
function sayItV2() {
    if(arguments.length === 0) return msg;

    for (const key in arguments) {
        msg += arguments[key] + ' ';
    }

    return sayItV2;
}

const arr = [-15, -5, 3, 5 ,12, 15, 36];
const target = 36;
console.log(findTargetV2(target, arr));

console.log(sayItV2('my')('name', 'is')('Waleed')('Hesham')());