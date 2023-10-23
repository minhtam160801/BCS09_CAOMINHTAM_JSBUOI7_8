var mangSoK = [];
document.getElementById('themSoK').onclick = function() {
    var soK = document.getElementById('txt-soK').value * 1;
    mangSoK.push(soK);
    document.getElementById('mangSoK').innerHTML = mangSoK;
}
//cau 1
document.getElementById('btnKetQua1').onclick = function() {
    var tongSoDuong = 0;
    for (var i = 0; i < mangSoK.length; i++) {
        if (mangSoK[i] > 0) {
            tongSoDuong += mangSoK[i];
        }
    }
    document.getElementById('ketQua1').innerHTML = tongSoDuong;
}
//cau 2
document.getElementById('btnKetQua2').onclick = function() {
    var count = 0;
    for (var i = 0; i < mangSoK.length; i++) {
        if (mangSoK[i] > 0) {
            count++;
        }
    }
    document.getElementById('ketQua2').innerHTML = count;
}
//cau 3
document.getElementById('btnKetQua3').onclick = function() {
    var min = mangSoK[0];
    for (var i = 0; i < mangSoK.length; i++) {
        if (mangSoK[i] < min) {
            min = mangSoK[i];
        }
    }
    document.getElementById('ketQua3').innerHTML = min;
}
//cau 4
document.getElementById('btnKetQua4').onclick = function() {
    var soNguyenDuong = [];
    for (var i = 0; i < mangSoK.length; i++) {
        if (mangSoK[i] > 0) {
            soNguyenDuong.push(mangSoK[i]);
        }
    }
    var min = soNguyenDuong[0];
    for (var i = 0; i < soNguyenDuong.length; i++) {
        if (soNguyenDuong[i] < min) {
            min = soNguyenDuong[i];
        }
    }
    document.getElementById('ketQua4').innerHTML = min;
}
//cau 5
document.getElementById('btnKetQua5').onclick = function() {
    var soChanCuoi;
    for (var i = 0; i < mangSoK.length; i++) {
        if (mangSoK[i] % 2 == 0 && mangSoK[i] != 0) {
           soChanCuoi = mangSoK[i];
        } else {
            soChanCuoi = 'Không có số chẵn';
        }
    }
    document.getElementById('ketQua5').innerHTML = soChanCuoi;
}
//cau 6
document.getElementById('btnKetQua6').onclick = function() {
    var viTri1 = document.getElementById('txt-viTriThuNhat').value * 1;
    var viTri2 = document.getElementById('txt-viTriThuHai').value * 1;
    var tam;
    tam = mangSoK[viTri1];
    mangSoK[viTri1] = mangSoK[viTri2];
    mangSoK[viTri2] = tam;
    document.getElementById('ketQua6').innerHTML = mangSoK;
}
//cau 7
document.getElementById('btnKetQua7').onclick = function() {
    var newMangSoK = mangSoK.sort(function(a, b) {
        return a - b;
    });
    document.getElementById('ketQua7').innerHTML = newMangSoK;
}
//cau 8
document.getElementById('btnKetQua8').onclick = function() {
    var soNguyenTo;
    for (var i = 0; i < mangSoK.length; i++) {
        console.log(kiem_tra_snt(mangSoK[i]));
        if (kiem_tra_snt(mangSoK[i])) {
           soNguyenTo = mangSoK[i];
           break;
        } else {
            soNguyenTo = 'Không có số nguyên tố';
        }
    }
    document.getElementById('ketQua8').innerHTML = soNguyenTo;
}
function kiem_tra_snt(n)
{
    var flag = true;
    if (n < 2){
        flag = false;
    }
    else if (n == 2){
        flag = true;
    }
    else if (n % 2 == 0){
      flag = false;
    }
    else{
        for (var i = 3; i <= (n-0.1); i+=2)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
    return flag;
}
// cau 9
var mangSoZ = [];
document.getElementById('themSoZ').onclick = function() {
    var soZ = document.getElementById('txt-soZ').value * 1;
    mangSoZ.push(soZ);
    document.getElementById('mangSoZ').innerHTML = mangSoZ;
}
document.getElementById('btnKetQua9').onclick = function() {
    var count = 0;
    for (var i = 0; i < mangSoZ.length; i++) {
        if (Number.isInteger(mangSoZ[i])) {
            count++;
        }
    }
    document.getElementById('ketQua9').innerHTML = count;
}
//cau 10
document.getElementById('btnKetQua10').onclick = function() {
    var soDuong = 0;
    var soAm = 0;
    for (var i = 0; i < mangSoK.length; i++) {
        if (mangSoK[i] > 0) {
            soDuong++;
        } else if(mangSoK[i] < 0){
            soAm++;
        }
    }
    if (soDuong > soAm) {
        document.getElementById('ketQua10').innerHTML = 'Số dương > số âm';
    } else if (soDuong < soAm) {
        document.getElementById('ketQua10').innerHTML = 'Số dương < số âm';
    } else {
        document.getElementById('ketQua10').innerHTML = 'Số dương = số âm';
    }
    
}