//Bài 1 : tính tổng các số chẵn
var mang=[];

document.getElementById('themso').onclick= function(){
    var inputNum = document.getElementById('inputNum').value;
    mang.push(inputNum)

    document.getElementById('sochanhienco').innerHTML=mang
}
document.getElementById('tinhtong').onclick=function(){
   var  sum = 0;
    for(var i =0 ; i < mang.length;i++){
        var value = +mang[i]
        if(value %2 ===0){
        sum += value          
        }
    }
    document.getElementById('tongcacsochan').innerHTML=sum
}


//Bài 2 : Đếm có bao nhiêu số dương trong mảng
var mangsoduong = []
document.getElementById('themsoduong').onclick=function(){
    var inputnumduong = document.getElementById('inputNumduong').value;
    mangsoduong.push(inputnumduong)
    document.getElementById('soduonghienco').innerHTML=mangsoduong
}
document.getElementById('tinhsoduong').onclick=function(){
    var mangsoduongmoi = []
    for(var i =0 ;i<mangsoduong.length;i++){
        var value = +mangsoduong[i]
        
        if(value>0){
            mangsoduongmoi.push(value)
        }
    }
    document.getElementById('tongcacsoduong').innerHTML=mangsoduongmoi.length
}


//Bài 3 : Tìm số nhỏ nhất trong mảng
var mangsonhonhat = []
document.getElementById('themsonhonhat').onclick=function(){
    var inputsonhonhat = document.getElementById('inputNumnhonhat').value;
    mangsonhonhat.push(inputsonhonhat)
    document.getElementById('sohiencotrongmang').innerHTML=mangsonhonhat
}
document.getElementById('tinhsonhonhat').onclick=function(){
    var min = mangsonhonhat[0]
    for( var i =0 ; i < mangsonhonhat.length;i++){
        
        var value = +mangsonhonhat[i]
        if(min>value){
            min=value
        }
    }
    document.getElementById('sonhonhattrongmang').innerHTML=min
}



//Bài 4 : Tìm số dương nhỏ nhất trong mảng
var mangsoduongnhonhat  = []
document.getElementById('themsoduongnhonhat').onclick=function(){
    var inputNumduongnhonhat = document.getElementById('inputNumduongnhonhat').value;
    mangsoduongnhonhat.push(inputNumduongnhonhat)
    document.getElementById('soduongnhonhathiencotrongmang').innerHTML=mangsoduongnhonhat
}
document.getElementById('tinhsoduongnhonhat').onclick=function(){
    var min = mangsoduongnhonhat[0]
    for(var i = 0 ; i < mangsoduongnhonhat.length;i++){
        var value = mangsoduongnhonhat[i]
        if(min>value && value >0){
            min = value
        }
    }
    document.getElementById('soduongnhonhattrongmang').innerHTML=min
}


//Bài 5 : Tìm số chẵn cuối cùng có trong mảng
var mangsochancuoicung= []
document.getElementById('themsochancuoicung').onclick=function(){
    var inputNumsochancuoicung = document.getElementById('inputNumsochancuoicung').value;
    mangsochancuoicung.push(inputNumsochancuoicung)
    document.getElementById('sochancuoicunghiencotrongmang').innerHTML=mangsochancuoicung
}
document.getElementById('tinhsochancuoicung').onclick=function(){
    
    for(var i=0;i<mangsochancuoicung.length;i++){
        var sochancuoicung = -1
        var value = mangsochancuoicung[i]
        if(value%2===0){
            sochancuoicung=value
        }
    }
    document.getElementById('sochancuoicungcotrongmang').innerHTML=sochancuoicung
}
