$(function(){
	//初始化图表
    window.oChartTrend = new drawTrendChart({
		lotteryType: lotteryType,
		trendType: trendType,
		periodNum: queryCount,
		isFloat: true,
        indent: trendType == 'AreaAfter' ? {'x':19,'y':9} : '',
		hasBet: trendType == 'AreaBefore' || trendType == 'AreaAfter'  ? false : true,
        defShape: trendType == 'AreaAfter' ? 'none' : '',
		callbackfun: callBackFun
	});
	//选择显示期数
	$('a', $('#select_period')).click(function(){
		oChartTrend.nPeriodNum = $(this).attr('no') * 1;
		oChartTrend.bIsInit = false;
        oChartTrend.fCallback = showNumByUserSel;
		oChartTrend._init();
		$('#order_period').attr('order', 'NO').removeClass('selected');
        initLocateSel();
	});
	//按期号排序
	$('#order_period').click(function(){
		if($(this).attr('order') == 'YES'){
			$(this).attr('order', 'NO').removeClass('selected');
			oChartTrend.bOrderFlag = false;
		}else{
			$(this).attr('order', 'YES').addClass('selected');
			oChartTrend.bOrderFlag = true;
		}
		oChartTrend.bIsInit = false;
        oChartTrend.fCallback = showNumByUserSel;
		oChartTrend._init();
        initLocateSel();
	});
    //显示隐藏直连号
	$('#ctrl_direct_num').click(function(){
		showHideZlNum();
	});
    //显示隐藏斜连号
	$('#ctrl_oblique_num').click(function(){
		showHideXlNum();
	});
	//显示隐藏重号
	$('#ctrl_repeat_num').click(function(){
		showHideCfNum();
	});
    //显示隐藏连号
	$('#ctrl_conti_num').click(function(){
		showHideLhNum();
	});
    //显示隐藏边号
    $('#ctrl_side_num').click(function(){
		showHidePbNum();
	});
    //显示隐藏遗漏
    $('#ctrl_miss_num').click(function(){
        showHideMissNum();
    });
    //遗漏柱
    $('#ctrl_yilou_shape').click(function(){
        showHideMissShape();
    });
    //定位
    $('#qianqu_dingwei').click(function(){
        $('#qianqu_dingwei_main').toggle();
    });
    $('#qianqu_dingwei_close').click(function(){
        $('#qianqu_dingwei_main').hide();
    });
    //分区
    $('#part_type_first a').click(function(){
        $('a.selected',  $('#part_type_first')).removeClass('selected');
        $(this).addClass('selected');
        var sPart = $(this).attr('part');
        oChartTrend.showPartResult(['D1'], sPart);
    });
    $('#part_type_second a').click(function(){
        $('a.selected',  $('#part_type_second')).removeClass('selected');
        $(this).addClass('selected');
        var sPart = $(this).attr('part');
        oChartTrend.showPartResult(['D2'], sPart);
    });
    //切换号码形态
    if($('#change_num_shape').length){
        $('#change_num_shape').change(function(){
            var sVal = $(this).val();
            var aShowShape = oChartTrend.oStoreNumShape[sVal], aHideShape = oChartTrend.oStoreNumShape[oChartTrend.sDefaultShape];
            for(var i=0; i<aShowShape.length; i++){
                aHideShape[i].hide();
                aShowShape[i].show();
            }
            $('.ctrl_' + oChartTrend.sDefaultShape, oChartTrend.oSkipData).hide();
            $('.ctrl_' + sVal, oChartTrend.oSkipData).show();
            if(sVal == '012'){
                $('#chart_trend_wrapper').addClass('chtContssqBefore012');
            }else{
                $('#chart_trend_wrapper').removeClass('chtContssqBefore012');
            }
            oChartTrend.sDefaultShape = sVal
        });
    }
	//改变倍数
	var bet_inputobj = $('#buy_note_num');
	bet_inputobj.keyup(function(){
		var n_val = $(this).val();
		$(this).val(n_val.replace(/[^\d]/g, ''));
		if(n_val < 0){$(this).val(1);}
		if(n_val > 0){
			calSelectedNumMoney();
		}
	}).blur(function(){
		var n_val = $(this).val();
		$(this).val(n_val.replace(/[^\d]/g, ''));
		if(n_val <= 0){$(this).val(1);}
		calSelectedNumMoney();
	});
    if(trendType != '09trend'){
        //号码定位操作对象初始化
        window.num_pos_arr = {'1': [], '2': []};
        window.oLoacteInput = {'1': [], '2': []};
        for(var i=0; i<=6; i++){
            var oLocateInput = document.getElementById('r'+ i), olineInput = '';
            if(!oLocateInput){continue;}
            oLocateInput.checked = true;
            if(i<=5){
                num_pos_arr[1].push(oLocateInput);
                olineInput = document.getElementById('l1_'+ i);
            }else{
                num_pos_arr[2].push(oLocateInput);
                olineInput = document.getElementById('l2_0');
            }
            oLoacteInput[1].push(oLocateInput);
            oLoacteInput[2].push(olineInput);
        }
        //初始化折线chk
        for(var k in num_pos_arr){
            for(var i=0; i<num_pos_arr[k].length; i++){
                document.getElementById('l'+ k +'_'+ i).disabled = false;
            }
        }
        window['selectOrClearAll']	= function(bool){
            bool = bool || false;
            for(var k in num_pos_arr){
                for(var i=0; i<num_pos_arr[k].length; i++){
                    num_pos_arr[k][i].checked	= bool;
                    dwoper(num_pos_arr[k][i].checked, num_pos_arr[k][i].value, k);
                }
            }
        }
    }
	//提交
	$('#trend_buy_btn').click(function(){
		var res = selectModelCodeNum();
		var zhushu = res[0];
		var list_str = res[1].join(',') + '|' + res[2].join(',');
		if(!zhushu){
			alert('选单错误提示：请至少选择6个红球和1个蓝球！');
			return false;
		}
		if(zhushu > 100000){
			alert("投注最大注数为100000注");
			return false;
		}
		var add = Number($('#buy_note_num').val());
		var domain	= window.location.protocol +'//'+ (window.location.host || 'www.okooo.com');
		var betf = document.trendChartBetForm;
		betf.LotteryNo.value = lotteryNo;
		betf.MultiNum.value = add;
		betf.w.value = list_str;
		betf.WagerCount.value = zhushu;
		betf.method	= 'GET';
		betf.target = '_blank';
		betf.ConsignType.value = '';
		betf.SubmitType.value = '';
		betf.manner.value = '5';
		betf.action	= domain +'/Lottery06/SSQ7LC/dbuy.php';
		betf.submit();
	});
	//过滤
	$('#trend_filter_btn').click(function(){
		var res = selectModelCodeNum();
		var zhushu = res[0];
		var list_str = '';
		var comType = 'Single';
		if(!zhushu){
			alert('选单错误提示：请至少选择6个红球和1个蓝球！');
			return false;
		}
		if(zhushu > 500000){
			alert("过滤最大注数为500000注");
			return false;
		}
		if(zhushu > 1){
			comType = 'Common';
			list_str = '[{"'+ comType +'":{"wc":'+ zhushu +',"wager":"复式 | '+ res[1].join(',') +' | '+ res[2].join(',') +'"}}]';
		}else{
			list_str = '[{"'+ comType +'":{"wc":'+ zhushu +',"wager":"单式 | '+ res[1].join(',') +' | '+ res[2] +'"}}]';
		}
		var add = Number($('#buy_note_num').val());
		var domain	= window.location.protocol +'//'+ (window.location.host || 'www.okooo.com');
		var betf = document.trendChartBetForm;
		betf.LotteryNo.value = lotteryNo;
		betf.MultiNum.value = add;
		betf.w.value = '';
		betf.WagerStore.value = encodeURI(list_str);
		betf.ConsignType.value = 'FilterShrink';
		betf.SubmitType.value = 'CommonP';
		betf.WagerCount.value = zhushu;
		betf.method = 'POST';
		betf.target = 'WagerWindow';
		betf.action	= domain +'/Lottery06/SSQ7LC/SSQ7LCProcess.php';
		betf.submit();
	});
	//追号
	$('#trend_append_btn').click(function(){
		var res = selectModelCodeNum();
		var zhushu = res[0];
		var list_str = '';
		var comType = 'Single';
		if(!zhushu){
			alert('选单错误提示：请至少选择6个红球和1个蓝球！');
			return false;
		}
		if(zhushu > 100000){
			alert("追号最大注数为100000注");
			return false;
		}
		if(zhushu > 1){
			comType = 'Common';
			list_str = '[{"'+ comType +'":{"wc":'+ zhushu +',"wager":"复式 | '+ res[1].sort(function(a, b){return a - b;}).join(',') +' | '+ res[2].join(',') +'"}}]';
		}else{
			list_str = '[{"'+ comType +'":{"wc":'+ zhushu +',"wager":"单式 | '+ res[1].sort(function(a, b){return a - b;}).join(',') +' | '+ res[2] +'"}}]';
		}
		var add = Number($('#buy_note_num').val());
		var domain	= window.location.protocol +'//'+ (window.location.host || 'www.okooo.com');
		var betf = document.trendChartBetForm;
		betf.LotteryNo.value = lotteryNo;
		betf.MultiNum.value = add;
		betf.WagerStore.value = encodeURI(list_str);
		betf.ConsignType.value = 'SeriesPlan';
		betf.SubmitType.value = 'CommonP';
		betf.WagerCount.value = zhushu;
		betf.method = 'POST';
		betf.target = '_blank';
		betf.manner.value = '5,10';
		betf.action	= domain +'/Lottery06/SeriesSet.php';
		betf.submit();
	});
})

function calSelectedNumMoney(){
	var res = selectModelCodeNum();
	var zhushu = res[0], totalmoney = 0;
	totalmoney = zhushu * 2;
	var add = Number($('#buy_note_num').val());	//倍数
	if(add > 1) totalmoney = totalmoney * add;
	$('#buy_totalmoney').text(totalmoney);
}

//选择号码
function selectModelCodeNum(){
	var red_num = [], blue_num = [];
	$('em.redBall', $('#chart_bet_wrap')).each(function(i, e){ red_num.push($(e).text()); });
	$('em.blueBall', $('#chart_bet_wrap')).each(function(i, e){ blue_num.push($(e).text()); });
	var red_count = red_num.length, blue_count = blue_num.length, zhushu = 0;
	if(red_count >= 6 && blue_count >= 1){
		var red_zushu = zuHeCal(6, red_count);
		var blue_zushu = zuHeCal(1, blue_count);
		zhushu = red_zushu * blue_zushu;
	}
	var result = [zhushu, red_num, blue_num];
	return result;
}

//一个数的阶乘
function jieChengCal(m){
	if(m < 0){
		alert('阶乘数据错误');
		return;
	}
	if(m == 0 || m == 1) return 1;
	var jc = 1;
	for(var i = 1; i <= m; i++){
		jc = jc * i;
	}
	return jc;
}
//排列数
function paiLieCal(m, n){
	var pl = jieChengCal(n)/jieChengCal(n-m);
    return parseInt(pl);
}
//组合数
function zuHeCal(m, n){
	var cl = paiLieCal(m, n)/jieChengCal(m);
	return parseInt(cl);
}

//直连
function showHideZlNum(){
    var bSel = $('#ctrl_direct_num').attr('checked');
    if(bSel){
        for(var i=0; i<oChartTrend.aZlNum.length; i++){
            oChartTrend.aZlNum[i].removeClass('redBall').addClass('grayBall');
        }
    }else{
        for(var i=0; i<oChartTrend.aZlNum.length; i++){
            if(oChartTrend.aZlNum[i].attr('numtype') != 'a' || !$('#ctrl_oblique_num').attr('checked')){
                oChartTrend.aZlNum[i].removeClass('grayBall').addClass('redBall');
            }
        }
    } 
}

//斜连
function showHideXlNum(){
    var bSel = $('#ctrl_oblique_num').attr('checked');
    if(bSel){
        for(var i=0; i<oChartTrend.aXlNum.length; i++){
            oChartTrend.aXlNum[i].removeClass('redBall').addClass('grayBall');
        }
    }else{
        for(var i=0; i<oChartTrend.aXlNum.length; i++){
            if(oChartTrend.aXlNum[i].attr('numtype') != 'a' || !$('#ctrl_direct_num').attr('checked')){
                oChartTrend.aXlNum[i].removeClass('grayBall').addClass('redBall');
            }
        }
    } 
}

//重号
function showHideCfNum(){
    var bSel = $('#ctrl_repeat_num').attr('checked');
    if(bSel){
        for(var i=0; i<oChartTrend.aCfNum.length; i++){
            oChartTrend.aCfNum[i].addClass('greenBall');
        }
    }else{
        for(var i=0; i<oChartTrend.aCfNum.length; i++){
            oChartTrend.aCfNum[i].removeClass('greenBall');
        }
    } 
}

//连号
function showHideLhNum(){
    var bSel = $('#ctrl_conti_num').attr('checked');
    if(bSel){
        for(var i=0; i<oChartTrend.aLhNum.length; i++){
            oChartTrend.aLhNum[i].addClass('redBall2');
        }
    }else{
        for(var i=0; i<oChartTrend.aLhNum.length; i++){
            oChartTrend.aLhNum[i].removeClass('redBall2');
        }
    }    
}

//边号
function showHidePbNum(){
    var bSel = $('#ctrl_side_num').attr('checked');
    if(bSel){
        for(var i=0; i<oChartTrend.aPbNum.length; i++){
            oChartTrend.aPbNum[i].addClass('orangeBall');
        }
    }else{
        for(var i=0; i<oChartTrend.aPbNum.length; i++){
            oChartTrend.aPbNum[i].removeClass('orangeBall');
        }
    }    
}

//遗漏号
function showHideMissNum(){
    var bSel = $('#ctrl_miss_num').attr('checked');
    if(bSel){
        oChartTrend.oChartMain.addClass('chtMainColor');
    }else{
        oChartTrend.oChartMain.removeClass('chtMainColor');
    }
}

//遗漏柱
function showHideMissShape(flag){
    flag = flag || false;
    var bSel = $('#ctrl_yilou_shape').attr('checked');
    if(bSel){
        for(var key in oChartTrend.oMissData){
            for(var i=0; i<oChartTrend.oMissData[key].length; i++){
                var nMissCount = oChartTrend.oMissData[key][i].length, sBgCls = 'mbg1';
                if(nMissCount > 5){sBgCls = 'mbg2';}
                if(nMissCount > 10){sBgCls = 'mbg3';}
                for(var j=0; j<nMissCount; j++){
                    oChartTrend.oMissData[key][i][j].addClass(sBgCls);
                }
            }
        }
    }else{
        if(!flag){
            for(var key in oChartTrend.oMissData){
                for(var i=0; i<oChartTrend.oMissData[key].length; i++){
                    var nMissCount = oChartTrend.oMissData[key][i].length, sBgCls = 'mbg1';
                    if(nMissCount > 5){sBgCls = 'mbg2';}
                    if(nMissCount > 10){sBgCls = 'mbg3';}
                    for(var j=0; j<oChartTrend.oMissData[key][i].length; j++){
                        oChartTrend.oMissData[key][i][j].removeClass(sBgCls);
                    }
                }
            }
        }
        // $('#nowskip_shape').hide();
        // $('#nowskip_text').show();
    }
}

//分区
function showHidePart(){
    if(trendType == '09trend'){return;}
    if($('#part_type_first').length){$('a.selected',  $('#part_type_first')).trigger('click');}
    if($('#part_type_second').length){$('a.selected',  $('#part_type_second')).trigger('click');}
}

//连线初始化
function drawLineInit(){
    if(trendType == '09trend'){return;}
    //线色
    var color_arr = {'D1': ['#AD67CF', '#2E4F0A', '#4E2F7F', '#8F5D23', '#7F5FFF'], 'D2': ['blue', 'blue']};
    if(trendType == 'AreaAfter'){color_arr = {'D1': ['blue', 'blue']}}
    //折线实例化
    for(var k in oChartTrend.okjNumData){
        for(var i=0; i<oChartTrend.okjNumData[k].length; i++){
            initLine(k+'_'+i, oChartTrend.okjNumData[k][i], color_arr[k][i]);
        }
    }
    function initLine(index,arr,color,auto){
        auto = auto || false;
        window['zline'+index] = new drawChartLine({
            color: color,
            auto: auto,
            pointsXYArr: oChartTrend.getXY(arr)
        });
    }
    window['dwoper'] = function(chk, val, key, bool){
        key	= key || 1;
        // oChartTrend.numberLocation(chk, val, key, bool);
        var obj	= document.getElementById('l'+ key +'_'+ val);
        if(!chk){
            eval('zline'+ key +'_'+ val +'.showLine(false)');
            obj.checked	= chk;
            obj.disabled = true;
        }else{
            obj.disabled = false;
        }
    }
    // if(trendType == 'AreaAfter'){zline1_0.showLine(true);}
    zlineD2_0.showLine(true);
}

//初始化定位
function initLocateSel(){
    if(trendType == '09trend'){return;}
    for(var key in oLoacteInput){
        for(var i=0; i<oLoacteInput[key].length; i++){
            if(key == '1'){
                oLoacteInput[key][i].checked = true;
            }else{
                oLoacteInput[key][i].disabled = false;
                oLoacteInput[key][i].checked = false;
            }
        }
    }
}

//根据用户选择显示号码
function showNumByUserSel(){
    showHideCfNum();
    showHideLhNum();
    showHidePbNum();
    showHideMissShape(true);
    showHidePart();
}
//回调函数
function callBackFun(){
    showHideCfNum();
    showHideLhNum();
    showHidePbNum();
}