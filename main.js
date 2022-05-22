// BT1: Định nghĩa function sắp xếp mảng giảm dần
console.log("Bài tập 1: sắp xếp mảng giảm dần")

var A1 = [1, 4, 6, 73, 5, 6]
var B1 = []
var C1  = [1]

function descArray(array) {
    for ( i = 0 ; i < array.length -1 ; i++ ) {
        for ( j = i+1 ; j < array.length ; j++ ) {
            if (array[i] < array[j]) {
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}

descArray(A1)
console.log(A1)

descArray(B1)
console.log(B1)

descArray(C1)
console.log(C1)

// BT2: Định nghĩa function loại bỏ các phần tử trùng trong mảng
console.log("Bài tập 2: loại bỏ các phần tử trùng trong mảng")

var A2 = [1, 1, 2]
var B2 = []
var C2  = [1, 2, 3, 4]

function removeDuplicate(array) {
    for ( i = 0 ; i < array.length -1 ; i++ ) {
        for ( j = i+1 ; j < array.length ; j++ ) {
            if (array[i] === array[j]) {
                array.splice(j, 1)
            }
        }
    }
}

removeDuplicate(A2)
console.log(A2)

removeDuplicate(B2)
console.log(B2)

removeDuplicate(C2)
console.log(C2)

// BT3: Tìm số bé thứ nhì trong mảng - mảng luôn có lượng pt >= 2
console.log("Bài tập 3: Tìm số bé thứ nhì trong mảng")

var A3 = [1, 1, 2]
var B3 = [1, 2, 3, 4, 5]
var C3 = [1, 1, 1, 1, 1]

// Cách 1:
console.log("Cách 1: ")

function upperSort(array) {
    for ( i = 0 ; i < array.length -1 ; i++ ) {
        for ( j = i+1 ; j < array.length ; j++ ) {
            if (array[i] > array[j]) {
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}

function findSecondNumber(array) {
    upperSort(array)

    var flag = 0
    var secondMin = array[0]
    for ( i = 1 ; i < array.length ; i++ ) {
        if (array[i] > secondMin) {
            flag = 1
            secondMin = array[i]
            break
        }
    }
    if (flag === 0) {
        secondMin = 0
    }

    console.log(secondMin)
}

findSecondNumber(A3)
findSecondNumber(B3)
findSecondNumber(C3)

// Cách 2:
console.log("Cách 2: ")

function findSecondNumber2(array) {

    var min = array[0]
    var max = array[0]
    for ( i = 1 ; i < array.length ; i++ ) {
        if (array[i] < min) {
            min = array[i]
        }
        if (array[i] > max) {
            max = array[i]
        }
    }

    var secondMin = max
    for ( j = 1 ; j < array.length ; j++ ) {
        if (array[j] < secondMin && array[j] != min) {
            secondMin = array[j]
        }
    }

    if (max === min) {
        secondMin = 0
    }
    console.log(secondMin)
}

findSecondNumber2(A3)
findSecondNumber2(B3)
findSecondNumber2(C3)