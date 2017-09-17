// jq中的建造者模式
// 发送一个请求  白富美
// $.ajax 建造者模式 包工头
//  工人 完成完整的工程
// $.ajax({
//     url:'a.php',
//     success:function(argument){

//     }
// });
// $("<a></a>") 
// 建造者模式完成复杂项目的时候使用；

// 产生的东西是房子；
// baogongtou 调用工人进行开工，而且他很清楚工人们的具体某一大项
//工人是盖房子的，工人可以建造卧室，客厅 厨房；
function Fangzi(){ //客户对房子的要求
    this.woshi = '',
    this.keding = '',
    this.chufang = '';
}
function Baogongtou(){//包工头
    this.gaifangzi = function(gongren){
        gongren.jian_woshi();
        gongren.jian_keting();
        gongren.jian_chufang();
    }
}
function Gongren(){//工人
    this.jian_woshi = function(){
        console.log('卧室我完成了')
    }
    this.jian_keting = function(){
        console.log('客厅我完成了')
    }
    this.jian_chufang = function(){
        console.log('厨房我完成了')
    }
    this.jiaogong = function(){
        var _fangzi = new Fangzi();
        _fangzi.woshi ='ok';
        _fangzi.keding ='ok';
        _fangzi.chufang = 'ok';
        return _fangzi;
    }
}
var gognren = new Gongren;
var baogongtou =new Baogongtou();
baogongtou.gaifangzi(gongren)
var myfangzi = gongren.jiaogong()

