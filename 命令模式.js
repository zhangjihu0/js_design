var  lian = {}//连级别的单位建制
lian.paobing = function(pao_num){
    // 炮兵的执行
    alert(pao_num+'炮'+'开始战斗')
}
lian.bubing = function(bu_bing){
    //步兵执行任务
    alert(bu_bing+'人'+'开始战斗')
}
lian.lianzhang = function(mingling){
    // 由连长去配置参数去调用具体单位执行
    lian[mingling.type](mingling.num);

}
// 传达命令给lianzhang
lian.lianzhang({
    type:'paobing',
    num:100
});
lianlianzhang({
    type:'paobing',
    num:100
})