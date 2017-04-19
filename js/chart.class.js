/**
*  走势图表类
*/

//各彩种相关配置
var okChartConfig = {
    //样式配置
    oChartClsConfig: {
        'SuperLotto': {
            '09trend': {'1': ['box1', 'box1', 'box1', 'box1', 'box1', 'box3', 'box3', 'box3', 'box3', 'box3'], '2': ['box2'], 'nobr': ['2', 0]},
            '1': {'1': ['box1'], '2': ['box2'], 'nobr': ['2', 0]},
            'NumTrend': {'1': ['box1'], '2': ['box2'], 'nobr': ['2', 0]},
            'AreaBefore': {'1': ['box1'], 's': ['box2', 'box2', 'box2', 'box2', 'box3'], 'nobr': ['s', 4]},
            'AreaAfter': {'1': ['box1'], 's': ['box2', 'box3', 'box3', 'box3', 'box3', 'box4', 'box5'], 'nobr': ['s', 6]},
            'OddEven': {'1': ['box1', 'box3'], '2': ['box2', 'box2'], 'nobr': ['2', 1]},
            'PrimeComp': {'1': ['box1', 'box3'], '2': ['box2', 'box2'], 'nobr': ['2', 1]},
            '012Trend': {'1': ['box1', 'box3', 'box3'], '2': ['box2', 'box2', 'box2'], 'nobr': ['2', 2]}
        },
        'SSQ': {
            '09trend': {'1': ['box1', 'box1', 'box1', 'box3', 'box3', 'box3', 'box3', 'box3', 'box3', 'box3'], '2': ['box2'], 'nobr': ['2', 0]},
            '0': {'1': ['box1'], '2': ['box2'], 'nobr': ['2', 0]},
            'NumTrend': {'D1': ['box1'], 'D2': ['box2'], 'nobr': ['D2', 0]},
            'AreaBefore': {'1': ['box1'], 's': ['box2', 'box2', 'box2', 'box2', 'box2', 'box2'], 'nobr': ['s', 5]},
            'AreaAfter': {'1': ['box1'], 's': ['box2', 'box2', 'box3'], 'nobr': ['s', 2]},
            'OddEven': {'1': ['box1', 'box3'], '2': ['box2', 'box2'], 'nobr': ['2', 1]},
            'PrimeComp': {'1': ['box1', 'box3'], '2': ['box2', 'box4'], 'nobr': ['2', 1]},
            '012Trend': {'1': ['box1', 'box1', 'box1'], '2': ['box2', 'box3', 'box2'], 'nobr': ['2', 2]}
        },
        '7LC': {
            '09trend': {'1': ['box1', 'box1', 'box1', 'box1', 'box1', 'box1', 'box1', 'box1', 'box1', 'box1'], 'nobr': ['1', 9]},
            '1': {'1': ['box1'], 'nobr': ['1', 0]},
            'NumTrend': {'1': ['box1'], 'nobr': ['1', 0]},
            'OddEven': {'1': ['box1', 'box2'], 'nobr': ['1', 1]},
            'PrimeComp': {'1': ['box1', 'box2'], 'nobr': ['1', 1]},
            '012Trend': {'1': ['box1', 'box1', 'box1'], 'nobr': ['1', 2]}
        },
        '3D': {
            'PNumTrend': {'1': ['box1'], '2': ['box1'], '3': ['box1'], 'nobr': ['3', 0]},
            'OddEven': {'1': ['box1'], '2': ['box1'], '3': ['box1'],  'nobr': ['3', 0]},
            'PrimeComp':  {'1': ['box1'], '2': ['box1'], '3': ['box1'],  'nobr': ['3', 0]},
            '012Trend':  {'1': ['box1'], '2': ['box1'], '3': ['box1'],  'nobr': ['3', 0]},
            'CNumTrend': {'1': ['box1'], 's': ['box2', 'box2', 'box2'], 'nobr': ['s', 2], 'r': 'box4', 'h': 'box3', 'k': 'box3'}
        },
        'P3': {
            'PNumTrend': {'1': ['box1'], '2': ['box1'], '3': ['box1'], 'nobr': ['3', 0]},
            'OddEven': {'1': ['box1'], '2': ['box1'], '3': ['box1'],  'nobr': ['3', 0]},
            'PrimeComp':  {'1': ['box1'], '2': ['box1'], '3': ['box1'],  'nobr': ['3', 0]},
            '012Trend':  {'1': ['box1'], '2': ['box1'], '3': ['box1'],  'nobr': ['3', 0]},
            'CNumTrend': {'1': ['box1'], 's': ['box2', 'box2', 'box2'], 'nobr': ['s', 2], 'r': 'box4', 'h': 'box3', 'k': 'box3'}
        },
        'P5': {
            'PNumTrend': {'1': ['box1'], '2': ['box1'], '3': ['box1'], '4': ['box1'], '5': ['box1'], 'nobr': ['5', 0]},
            'OddEven': {'1': ['box1'], '2': ['box1'], '3': ['box1'], '4': ['box1'], '5': ['box1'], 'nobr': ['5', 0]},
            'PrimeComp':  {'1': ['box1'], '2': ['box1'], '3': ['box1'], '4': ['box1'], '5': ['box1'], 'nobr': ['5', 0]},
            '012Trend':  {'1': ['box1'], '2': ['box1'], '3': ['box1'], '4': ['box1'], '5': ['box1'], 'nobr': ['5', 0]}
        },
        'P7': {
            'PNumTrend': {'1': ['box1'], '2': ['box1'], '3': ['box1'], '4': ['box1'], '5': ['box1'], '6': ['box1'], '7': ['box1'], 'nobr': ['7', 0]},
            '1': {'1': ['box1'], '2': ['box1'], '3': ['box1'], '4': ['box1'], '5': ['box1'], '6': ['box1'], '7': ['box1'], 'nobr': ['7', 0]},
            'OddEven': {'1': ['box1'], '2': ['box1'], '3': ['box1'], '4': ['box1'], '5': ['box1'], '6': ['box1'], '7': ['box1'], 'nobr': ['7', 0]},
            'PrimeComp':  {'1': ['box1'], '2': ['box1'], '3': ['box1'], '4': ['box1'], '5': ['box1'], '6': ['box1'], '7': ['box1'], 'nobr': ['7', 0]},
            '012Trend':  {'1': ['box1'], '2': ['box1'], '3': ['box1'], '4': ['box1'], '5': ['box1'], '6': ['box1'], '7': ['box1'], 'nobr': ['7', 0]}
        }
    },
    //表头数据配置
    oTitleDataConfig: {
        'SuperLotto': {
            '09trend': {'1': [[1,11,21,31],[2,12,22,32],[3,13,23,33],[4,14,24,34],[5,15,25,35],[6,16,26],[7,17,27],[8,18,28],[9,19,29],[10,20,30]], '2': [[1,2,3,4,5,6,7,8,9,10,11,12]]},
            '1': {'1': [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]], '2': [[1,2,3,4,5,6,7,8,9,10,11,12]]},
            'NumTrend': {'1': [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]], '2': [[1,2,3,4,5,6,7,8,9,10,11,12]]},
            'AreaBefore': {'1': [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]], 's': [['第一位'], ['第二位'], ['第三位'], ['第四位'], ['第五位']]},
            'AreaAfter': {'1': [[1,2,3,4,5,6,7,8,9,10,11,12]], 's': [[1,2,3,4,5,6,7,8,9,10,11], ['第一位'], ['第二位'], ['第一位'], ['第二位'], ['第一位'], ['第二位']]},
            'OddEven': {'1': [[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35], [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34]], '2': [[1,3,5,7,9,11], [2,4,6,8,10,12]]},
            'PrimeComp': {'1': [[1,2,3,5,7,11,13,17,19,23,29,31], [4,6,8,9,10,12,14,15,16,18,20,21,22,24,25,26,27,28,30,32,33,34,35]], '2': [[1,2,3,5,7,11], [4,6,8,9,10,12]]},
            '012Trend': {'1': [[3,6,9,12,15,18,21,24,27,30,33], [1,4,7,10,13,16,19,22,25,28,31,34], [2,5,8,11,14,17,20,23,26,29,32,35]], '2': [[3,6,9,12], [1,4,7,10], [2,5,8,11]]}
        },
        'SSQ': {
            '09trend': {'1': [[1,11,21,31],[2,12,22,32],[3,13,23,33],[4,14,24],[5,15,25],[6,16,26],[7,17,27],[8,18,28],[9,19,29],[10,20,30]], '2': [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]]},
            '0': {'1': [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]], '2': [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]]},
            'NumTrend': {'D1': [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]], 'D2': [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]]},
            'AreaBefore': {'1': [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]], 's': [['第一位'], ['第二位'], ['第三位'], ['第四位'], ['第五位'], ['第六位']]},
            'AreaAfter': {'1': [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]], 's': [['大', '小'], ['奇', '偶'], ['0', '1', '2']]},
            'OddEven': {'1': [[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33], [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32]], '2': [[1,3,5,7,9,11,13,15], [2,4,6,8,10,12,14,16]]},
             'PrimeComp': {'1': [[1,2,3,5,7,11,13,17,19,23,29,31], [4,6,8,9,10,12,14,15,16,18,20,21,22,24,25,26,27,28,30,32,33]], '2': [[1,2,3,5,7,11,13], [4,6,8,9,10,12,14,15,16]]},
             '012Trend': {'1': [[3,6,9,12,15,18,21,24,27,30,33], [1,4,7,10,13,16,19,22,25,28,31], [2,5,8,11,14,17,20,23,26,29,32]], '2': [[3,6,9,12,15], [1,4,7,10,13,16], [2,5,8,11,14]]}
        },
        '7LC': {
            '09trend': {'1': [[1,11,21],[2,12,22],[3,13,23],[4,14,24],[5,15,25],[6,16,26],[7,17,27],[8,18,28],[9,19,29],[10,20,30]]},
            '1': {'1': [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]]},
            'NumTrend': {'1': [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]]},
            'AreaBefore': {'1': [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]], 's': [['第一位'], ['第二位'], ['第三位'], ['第四位'], ['第五位'], ['第六位']]},
            'OddEven': {'1': [[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]]},
            'PrimeComp': {'1': [[1,2,3,5,7,11,13,17,19,23,29], [4,6,8,9,10,12,14,15,16,18,20,21,22,24,25,26,27,28,30]]},
             '012Trend': {'1': [[3,6,9,12,15,18,21,24,27,30], [1,4,7,10,13,16,19,22,25,28], [2,5,8,11,14,17,20,23,26,29]]}
        },
        '3D': {
            'PNumTrend': {'1': [[0,1,2,3,4,5,6,7,8,9]], '2': [[0,1,2,3,4,5,6,7,8,9]], '3': [[0,1,2,3,4,5,6,7,8,9]]},
            'OddEven': {'1': [[0,2,4,6,8,1,3,5,7,9]], '2': [[0,2,4,6,8,1,3,5,7,9]], '3': [[0,2,4,6,8,1,3,5,7,9]]},
            'PrimeComp': {'1': [[1,2,3,5,7,0,4,6,8,9]], '2': [[1,2,3,5,7,0,4,6,8,9]], '3': [[1,2,3,5,7,0,4,6,8,9]]},
            '012Trend': {'1': [[0,3,6,9,1,4,7,2,5,8]], '2': [[0,3,6,9,1,4,7,2,5,8]], '3': [[0,3,6,9,1,4,7,2,5,8]]},
            'CNumTrend': {'1': [[0,1,2,3,4,5,6,7,8,9]], 's':[['3:0', '2:1', '1:2', '0:3'], ['3:0', '2:1', '1:2', '0:3'], ['3:0', '2:1', '1:2', '0:3']]}
        },
        'P3': {
            'PNumTrend': {'1': [[0,1,2,3,4,5,6,7,8,9]], '2': [[0,1,2,3,4,5,6,7,8,9]], '3': [[0,1,2,3,4,5,6,7,8,9]]},
            'OddEven': {'1': [[0,2,4,6,8,1,3,5,7,9]], '2': [[0,2,4,6,8,1,3,5,7,9]], '3': [[0,2,4,6,8,1,3,5,7,9]]},
            'PrimeComp': {'1': [[1,2,3,5,7,0,4,6,8,9]], '2': [[1,2,3,5,7,0,4,6,8,9]], '3': [[1,2,3,5,7,0,4,6,8,9]]},
            '012Trend': {'1': [[0,3,6,9,1,4,7,2,5,8]], '2': [[0,3,6,9,1,4,7,2,5,8]], '3': [[0,3,6,9,1,4,7,2,5,8]]},
            'CNumTrend': {'1': [[0,1,2,3,4,5,6,7,8,9]], 's':[['3:0', '2:1', '1:2', '0:3'], ['3:0', '2:1', '1:2', '0:3'], ['3:0', '2:1', '1:2', '0:3']]}
        },
        'P5': {
            'PNumTrend': {'1': [[0,1,2,3,4,5,6,7,8,9]], '2': [[0,1,2,3,4,5,6,7,8,9]], '3': [[0,1,2,3,4,5,6,7,8,9]], '4': [[0,1,2,3,4,5,6,7,8,9]], '5': [[0,1,2,3,4,5,6,7,8,9]]},
            'OddEven': {'1': [[0,2,4,6,8,1,3,5,7,9]], '2': [[0,2,4,6,8,1,3,5,7,9]], '3': [[0,2,4,6,8,1,3,5,7,9]], '4': [[0,2,4,6,8,1,3,5,7,9]], '5': [[0,2,4,6,8,1,3,5,7,9]]},
            'PrimeComp': {'1': [[1,2,3,5,7,0,4,6,8,9]], '2': [[1,2,3,5,7,0,4,6,8,9]], '3': [[1,2,3,5,7,0,4,6,8,9]], '4': [[1,2,3,5,7,0,4,6,8,9]], '5': [[1,2,3,5,7,0,4,6,8,9]]},
            '012Trend': {'1': [[0,3,6,9,1,4,7,2,5,8]], '2': [[0,3,6,9,1,4,7,2,5,8]], '3': [[0,3,6,9,1,4,7,2,5,8]], '4': [[0,3,6,9,1,4,7,2,5,8]], '5': [[0,3,6,9,1,4,7,2,5,8]]}
        },
        'P7': {
            'PNumTrend': {'1': [[0,1,2,3,4,5,6,7,8,9]], '2': [[0,1,2,3,4,5,6,7,8,9]], '3': [[0,1,2,3,4,5,6,7,8,9]], '4': [[0,1,2,3,4,5,6,7,8,9]], '5': [[0,1,2,3,4,5,6,7,8,9]], '6': [[0,1,2,3,4,5,6,7,8,9]], '7': [[0,1,2,3,4,5,6,7,8,9]]},
            '1': {'1': [[0,1,2,3,4,5,6,7,8,9]], '2': [[0,1,2,3,4,5,6,7,8,9]], '3': [[0,1,2,3,4,5,6,7,8,9]], '4': [[0,1,2,3,4,5,6,7,8,9]], '5': [[0,1,2,3,4,5,6,7,8,9]], '6': [[0,1,2,3,4,5,6,7,8,9]], '7': [[0,1,2,3,4,5,6,7,8,9]]},
            'OddEven': {'1': [[0,2,4,6,8,1,3,5,7,9]], '2': [[0,2,4,6,8,1,3,5,7,9]], '3': [[0,2,4,6,8,1,3,5,7,9]], '4': [[0,2,4,6,8,1,3,5,7,9]], '5': [[0,2,4,6,8,1,3,5,7,9]], '6': [[0,2,4,6,8,1,3,5,7,9]], '7': [[0,2,4,6,8,1,3,5,7,9]]},
            'PrimeComp': {'1': [[1,2,3,5,7,0,4,6,8,9]], '2': [[1,2,3,5,7,0,4,6,8,9]], '3': [[1,2,3,5,7,0,4,6,8,9]], '4': [[1,2,3,5,7,0,4,6,8,9]], '5': [[1,2,3,5,7,0,4,6,8,9]], '6': [[1,2,3,5,7,0,4,6,8,9]], '7': [[1,2,3,5,7,0,4,6,8,9]]},
            '012Trend': {'1': [[0,3,6,9,1,4,7,2,5,8]], '2': [[0,3,6,9,1,4,7,2,5,8]], '3': [[0,3,6,9,1,4,7,2,5,8]], '4': [[0,3,6,9,1,4,7,2,5,8]], '5': [[0,3,6,9,1,4,7,2,5,8]], '6': [[0,3,6,9,1,4,7,2,5,8]], '7': [[0,3,6,9,1,4,7,2,5,8]]}
        }
    },
    //普通号码背景
    oBallClsConfig: {
        'SuperLotto': {'1': 'redBall', '2': 'blueBall'},
        'SSQ': {'D1': 'redBall', 'D2': 'blueBall'},
        '7LC': {'1': 'redBall', 't': 'blueBall'},
        '3D': {'1': 'redBall', '2': 'redBall', '3': 'redBall'},
        'P3': {'1': 'redBall', '2': 'redBall', '3': 'redBall'},
        'P5': {'1': 'redBall', '2': 'redBall', '3': 'redBall', '4': 'redBall', '5': 'redBall'},
        'P7': {'1': 'redBall', '2': 'redBall', '3': 'redBall', '4': 'redBall', '5': 'redBall', '6': 'redBall', '7': 'redBall'}
    },
    //特别号码背景
    oSpecBallClsConfig: {
        'SuperLotto': {'a': 'grayBall', 'x': 'grayBall', 'z': 'grayBall'},
        'SSQ': {'a': 'grayBall', 'x': 'grayBall', 'z': 'grayBall'},
        '7LC': {'a': 'grayBall', 'x': 'grayBall', 'z': 'grayBall'},
        '3D': {'a': 'grayBall', 'x': 'grayBall', 'z': 'grayBall'},
        'P3': {'a': 'grayBall', 'x': 'grayBall', 'z': 'grayBall'},
        'P5': {'a': 'grayBall', 'x': 'grayBall', 'z': 'grayBall'},
        'P7': {'a': 'grayBall', 'x': 'grayBall', 'z': 'grayBall'}
    },
    //选号器号码背景
    oBetBallClsConfig: {
        'SuperLotto': {
            '09trend': ['redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'blueBall'],
            '1': ['redBall', 'blueBall'],
            '3': ['redBall', 'blueBall'],
            '6': ['redBall', 'blueBall'],
            'NumTrend': ['redBall', 'blueBall'],
            'OddEven': ['redBall', 'redBall', 'blueBall', 'blueBall'],
            'PrimeComp': ['redBall', 'redBall', 'blueBall', 'blueBall'],
            '012Trend': ['redBall', 'redBall', 'redBall', 'blueBall', 'blueBall', 'blueBall']
        },
        'SSQ': {
            '09trend': ['redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'blueBall'],
            '0': ['redBall', 'blueBall'],
            '2': ['redBall', 'blueBall'],
            '4': ['redBall', 'blueBall'],
            'NumTrend': ['redBall', 'blueBall'],
            'OddEven': ['redBall', 'redBall', 'blueBall', 'blueBall'],
            'PrimeComp': ['redBall', 'redBall', 'blueBall', 'blueBall'],
            '012Trend': ['redBall', 'redBall', 'redBall', 'blueBall', 'blueBall', 'blueBall']
        },
        '7LC': {
            '09trend': ['redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'blueBall'],
            '1': ['redBall', 'blueBall'],
            '3': ['redBall', 'blueBall'],
            '5': ['redBall', 'blueBall'],
            'NumTrend': ['redBall'],
            'OddEven': ['redBall', 'redBall', 'blueBall', 'blueBall'],
            'PrimeComp': ['redBall', 'redBall', 'blueBall', 'blueBall'],
            '012Trend': ['redBall', 'redBall', 'redBall', 'blueBall', 'blueBall', 'blueBall']
        },
        '3D': {
            'PNumTrend': ['redBall', 'redBall', 'redBall'],
            'OddEven': ['redBall', 'redBall', 'redBall'],
            'PrimeComp': ['redBall', 'redBall', 'redBall'],
            '012Trend': ['redBall', 'redBall', 'redBall'],
            'CNumTrend': ['redBall']
        },
        'P3': {
            'PNumTrend': ['redBall', 'redBall', 'redBall'],
            'OddEven': ['redBall', 'redBall', 'redBall'],
            'PrimeComp': ['redBall', 'redBall', 'redBall'],
            '012Trend': ['redBall', 'redBall', 'redBall'],
            'CNumTrend': ['redBall']
        },
        'P5': {
            'PNumTrend': ['redBall', 'redBall', 'redBall', 'redBall', 'redBall'],
            'OddEven': ['redBall', 'redBall', 'redBall', 'redBall', 'redBall'],
            'PrimeComp': ['redBall', 'redBall', 'redBall', 'redBall', 'redBall'],
            '012Trend': ['redBall', 'redBall', 'redBall', 'redBall', 'redBall']
        },
        'P7': {
            'PNumTrend': ['redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall'],
            '0': ['redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall'],
            '2': ['redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall'],
            '5': ['redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall'],
            'OddEven':  ['redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall'],
            'PrimeComp':  ['redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall'],
            '012Trend':  ['redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall', 'redBall']
        }
    },
    //分区配置  key: value 对应 分区数: 号码个数/分区数
    oPartConfig: {
        'SuperLotto': {
            '1': {'1': {'3': 12, '4': 9, '7': 5, 'def': '4'}, '2': {'2': 6, '3': 4, 'def': '2'}},
            'AreaBefore': {'1': {'3': 12, '4': 9, '7': 5, 'def': '4'}},
            'NumTrend': {'1': {'3': 12, '4': 9, '7': 5, 'def': '4'}, '2': {'2': 6, '3': 4, 'def': '2'}}
        },
        'SSQ': {
            '0': {'1': {'3': 11, '4': 9, '7': 5, 'def': '0'}, '2': {'2': 8, '3': 6, 'def': '2'}},
            'AreaBefore': {'1': {'3': 11, '4': 9, '7': 5, 'def': '0'}},
            'NumTrend': {'D1': {'3': 11, '4': 9, '7': 5, 'def': '0'}, 'D2': {'2': 8, '3': 6, 'def': '2'}}
        },
        '7LC': {
            '1': {'1': {'3': 10, '4': 8, '7': 5, 'def': '0'}},
            'AreaBefore': {'1': {'3': 10, '4': 8, '7': 5, 'def': '0'}},
            'NumTrend': {'1': {'3': 10, '4': 8, '7': 5, 'def': '0'}}
        },
        '3D': {
            'PNumTrend': {'1': {'2': 5, 'def': '0'}, '2': {'2': 5, 'def': '0'}, '3': {'2': 5, 'def': '0'}}
        },
        'P3': {
            'PNumTrend': {'1': {'2': 5, 'def': '0'}, '2': {'2': 5, 'def': '0'}, '3': {'2': 5, 'def': '0'}}
        },
        'P5': {
            'PNumTrend': {'1': {'2': 5, 'def': '0'}, '2': {'2': 5, 'def': '0'}, '3': {'2': 5, 'def': '0'}, '4': {'2': 5, 'def': '0'}, '5': {'2': 5, 'def': '0'}}
        },
        'P7': {
            'PNumTrend': {'1': {'2': 5, 'def': '0'}, '2': {'2': 5, 'def': '0'}, '3': {'2': 5, 'def': '0'}, '4': {'2': 5, 'def': '0'}, '5': {'2': 5, 'def': '0'}, '6': {'2': 5, 'def': '0'}, '7': {'2': 5, 'def': '0'}},
            '1': {'1': {'2': 5, 'def': '0'}, '2': {'2': 5, 'def': '0'}, '3': {'2': 5, 'def': '0'}, '4': {'2': 5, 'def': '0'}, '5': {'2': 5, 'def': '0'}, '6': {'2': 5, 'def': '0'}, '7': {'2': 5, 'def': '0'}}
        }
    },
    //是否号码分区
    oHasPartConfig: {
        'SuperLotto': {'09trend': false, '1': true, '3': true, '6': true, 'NumTrend': true, 'AreaBefore': true, 'AreaAfter': false, 'OddEven': false, 'PrimeComp': false, '012Trend': false},
        'SSQ': {'09trend': false, '0': true, '2': true, '4': true, 'NumTrend': true, 'AreaBefore': true, 'AreaAfter': false, 'OddEven': false, 'PrimeComp': false, '012Trend': false},
        '7LC': {'09trend': false, '1': true, '3': true, '5': true, 'NumTrend': true, 'AreaBefore': true, 'AreaAfter': false, 'OddEven': false, 'PrimeComp': false, '012Trend': false},
        '3D': {'PNumTrend': true, 'OddEven': false, 'PrimeComp': false, '012Trend': false, 'CNumTrend': false},
        'P3': {'PNumTrend': true, 'OddEven': false, 'PrimeComp': false, '012Trend': false, 'CNumTrend': false},
        'P5': {'PNumTrend': true, 'OddEven': false, 'PrimeComp': false, '012Trend': false, 'CNumTrend': false},
        'P7': {'PNumTrend': true, 'OddEven': false, 'PrimeComp': false, '012Trend': false, '0': true, '2': true, '5': true}
    },
    //号码形态Key
    aShapeKeyMapping: {
        'SuperLotto': {
            'AreaBefore': ['OddEven', '012'],
            'AreaAfter': ['Distance', 'BigSmall', 'OddEven', '012']
        },
        'SSQ': {
            'AreaBefore': ['OddEven', '012'],
            'AreaAfter': ['BigSmall', 'OddEven', '012']
        },
        '3D': {
            'CNumTrend': ['BigSmall', 'OddEven', 'PrimeComp']
        },
        'P3': {
            'CNumTrend': ['BigSmall', 'OddEven', 'PrimeComp']
        }
    }
};    

/**
* 绘制走势图表
* param 参数对象
* param.lotteryType 彩种名
* param.periodNum 期数
* param.trendType 走势类型
*/

function drawTrendChart(param){
    var self = this;
    if(!param){param = {};}
    this.sLotteryType = param.lotteryType || 'SuperLotto';
    this.nPeriodNum = param.periodNum || 10;
    this.sTrendType = param.trendType || '09trend';
    this.bIsFloat = param.isFloat || false; //头尾是否要浮动
    this.bHasBet = param.hasBet || false;   //是否有投注区
    this.sMainId = param.mainid || 'chart_main';    //走势主体ID
    this.radius = param.radius || 9;      //中奖号码背景球半径
    this.indent = param.indent || {'x':10,'y':9};
    this.sDefaultShape = param.defShape || 'OddEven';  //默认号码形态
    this.fCallback = param.callbackfun || false;     //回调函数
    
    this.oChartTitle = $('#chart_title');   //表头
    this.oChartMain = $('#' + this.sMainId);        //走势主体
    this.oLoadingLayer = $('#loading_data_layer'); //加载中
    this.oSkipData = $('#data_count_list');     //遗漏数据
    this.bIsInit = true;    //是否是第一次初始化
    this.bIsIE = window.navigator.userAgent.indexOf('MSIE')>-1 ? true : false;   //是否IE内核浏览器
    (this.oChartMain[0].style.position != 'relative' || this.oChartMain[0].style.position != 'absolute') && (this.oChartMain[0].style.position = 'relative');
    
    //初始化存储对象
    this.initStoreDataObject = function(){
        self.aLhNum = [];   //连号号码
        self.aCfNum = [];   //重复号码
        self.aPbNum = [];   //旁边号码
        self.aZlNum = [];   //直连号码
        self.aXlNum = [];   //斜连号码
        self.oStoreSkip = {};   //存放统计数据
        self.oStorePartData = {};   //存放分层对象
        self.sHistoryPart = {}; //记录当前分区
        self.oMissData = {};    //遗漏分层数据
        self.oReverseMissData = {}; //反向排序后的遗漏标识
        self.okjNumData = {};   //所有开奖号码
        self.oDefMissNumData = {};  //默认显示的遗漏号码（即开奖号上面的数字）
        self.oPartData = {};    //分区数据
        self.oStoreNumShape = {}; //号码形态
        if((self.sLotteryType == 'SuperLotto' || self.sLotteryType == 'SSQ') && self.sTrendType == 'AreaAfter'){
            okChartConfig.oBallClsConfig.SuperLotto = {'1': 'blueBall'};
            okChartConfig.oBallClsConfig.SSQ = {'1': 'blueBall'};
        }
    };
    
    //获取数据
    this.getTrendData = function(){
        if(self.bIsInit){
            self.oChartTitle.hide();
        }
        self.oChartMain.hide();
        self.oSkipData.hide();
        self.oLoadingLayer.show();
        var sUrlTrendType = self.sTrendType;
        if(self.sTrendType == 'NumTrend'){
            sUrlTrendType = 'trend';
        }else if(self.sTrendType == 'OddEven' || self.sTrendType == 'PrimeComp' || self.sTrendType == '012Trend' || self.sTrendType == 'PNumTrend' || self.sTrendType == 'CNumTrend'){
             sUrlTrendType = self.sTrendType.toLowerCase();
        }
        // var url = '/ajax/zoushitu/'+ self.sLotteryType +'/'+ self.nPeriodNum +'/'+ sUrlTrendType +'/';
        var url = "./json/"+ self.sTrendType +".json"
        if(self.bOrderFlag){
            url += '?order_by=1';
        }
        $.ajax({
            url: url,
            type: 'get',
            // dataType: 'json',
            dataType: 'text',
            success: function(res){
                // res = eval(res);
                res = JSON.parse(res);
                self.processChartData(res.trend);
            }
        });
    };
    //数据处理
    this.processChartData = function(data){
        if(!data.length){alert('获取数据失败！');return;}
        var oChartList = $('<div></div>'), oBoxCls = '', nNumCount = 0, oPartConfData = ''; //nNumCount 期数计数
        if(self.sLotteryType == 'SuperLotto' && (self.sTrendType == '1' || self.sTrendType == '3' || self.sTrendType == '6')){
            oBoxCls = okChartConfig.oChartClsConfig[self.sLotteryType]['1'];
            oPartConfData = okChartConfig.oPartConfig[self.sLotteryType]['1'];
        }else if(self.sLotteryType == 'SSQ' && (self.sTrendType == '0' || self.sTrendType == '2' || self.sTrendType == '4')){
            oBoxCls = okChartConfig.oChartClsConfig[self.sLotteryType]['0'];
            oPartConfData = okChartConfig.oPartConfig[self.sLotteryType]['0'];
        }else if(self.sLotteryType == '7LC' && (self.sTrendType == '1' || self.sTrendType == '3' || self.sTrendType == '5')){
            oBoxCls = okChartConfig.oChartClsConfig[self.sLotteryType]['1'];
            oPartConfData = okChartConfig.oPartConfig[self.sLotteryType]['1'];
        }else if(self.sLotteryType == 'P7' && (self.sTrendType == '2' || self.sTrendType == '5' || self.sTrendType == '0')){
            oBoxCls = okChartConfig.oChartClsConfig[self.sLotteryType]['1'];
            oPartConfData = okChartConfig.oPartConfig[self.sLotteryType]['1'];
        }else{
            oBoxCls = okChartConfig.oChartClsConfig[self.sLotteryType][self.sTrendType];
            oPartConfData = okChartConfig.oPartConfig[self.sLotteryType][self.sTrendType];
        }
        var aDistanceShape = [], aOddEvenShape = [], a012Shape = [], aBigSmallShape = [], aPrimeCompShape = [];
        for(var index=0; index<data.length; index++){
            var sPeriodHtml = '';
            if(data[index].p == 'MaxSkip'){     //最大遗漏
                self.oStoreSkip['ms']  = data[index].d;
                if(data[index].s){
                    self.oStoreSkip.ms.s = data[index].s;
                }
            }else if(data[index].p == 'NowSkip'){   //当前遗漏
                self.oStoreSkip['ns']  = data[index].d;
                self.oStoreSkip['mn']  = {'1': Number(data[index].red_max), '2': Number(data[index].blue_max)};
                if(self.sTrendType == 'AreaAfter'){
                    self.oStoreSkip['mn']  = {'1': Number(data[index].blue_max)};
                }else if(self.sLotteryType == '3D' || self.sLotteryType == 'P3'){
                    if(self.sTrendType == 'PNumTrend' || self.sTrendType == 'OddEven' || self.sTrendType == 'PrimeComp' || self.sTrendType == '012Trend'){
                        self.oStoreSkip['mn']  = {'1': Number(data[index].redH_max), '2': Number(data[index].redT_max), '3': Number(data[index].redB_max)};
                    }else if(self.sTrendType == 'CNumTrend'){
                        self.oStoreSkip['mn']  = {'1': Number(data[index].red_max)};
                    }
                }else if(self.sLotteryType == 'P5'){
                     self.oStoreSkip['mn']  = {'1': Number(data[index].redH_max), '2': Number(data[index].redT_max), '3': Number(data[index].redB_max), '4': Number(data[index].redM_max), '5': Number(data[index].redN_max)};
                }else if(self.sLotteryType == 'P7'){
                     self.oStoreSkip['mn']  = {'1': Number(data[index].redH_max), '2': Number(data[index].redT_max), '3': Number(data[index].redB_max), '4': Number(data[index].redM_max), '5': Number(data[index].redN_max), '6': Number(data[index].redO_max), '7': Number(data[index].redP_max)};
                }
                if(data[index].s){
                    self.oStoreSkip.ns.s = data[index].s;
                    self.oStoreSkip.mn.s = {'012': Number(data[index].max_012), 'OddEven': Number(data[index].max_OddEven), 'BigSmall': Number(data[index].max_BigSmall), 'Distance': Number(data[index].max_Dis)};
                    if(self.sLotteryType == '3D' || self.sLotteryType == 'P3'){
                        if(self.sTrendType == 'CNumTrend'){
                            self.oStoreSkip.mn.s = {'OddEven': Number(data[index].max_jo), 'BigSmall': Number(data[index].max_dx), 'PrimeComp': Number(data[index].max_zh)};
                        }
                    }
                }
            }else if(data[index].p == 'HistorySeriesCount'){    //最大连号
                self.oStoreSkip['hsc']  = data[index].d;
                if(data[index].s){
                    self.oStoreSkip.hsc.s = data[index].s;
                }
            }else if(data[index].p == 'NumApperCount'){ //出现次数
                self.oStoreSkip['nac']  = data[index].d;
                if(data[index].s){
                    self.oStoreSkip.nac.s = data[index].s;
                }
            }else{
                var oSubWrap = $('<div class="clearfix chartList'+ (nNumCount == 4 ? ' bdbtm2' : '') +'"></div>');
                // $('<p class="qihao">'+ data[index].p +'</p>').appendTo(oSubWrap);
                oSubWrap[0].appendChild($('<p class="qihao">'+ data[index].lotteryNO +'</p>')[0]);
                var oTrendData = data[index].data, oSingleNum = '', oListHtml = '';
                if((self.sLotteryType == '3D' || self.sLotteryType == 'P3') && self.sTrendType == 'CNumTrend'){
                    oListHtml = $('<div class="'+ oBoxCls.r +' bdr2"><em class="bg1">'+ data[index].r +'</em></div><div class="'+ oBoxCls.h +' bdr2"><em class="bg1">'+ data[index].h +'</em></div><div class="'+ oBoxCls.k +' bdr2"><em class="bg1">'+ data[index].k +'</em></div>');
                    oSubWrap[0].appendChild(oListHtml[0]);
                    oSubWrap[0].appendChild(oListHtml[1]);
                    oSubWrap[0].appendChild(oListHtml[2]);
                }
                for(var key in oTrendData){
                    var nCountNum = 0;
                    if(!self.oPartData[key]){self.oPartData[key] = {};}
                    if(!self.oStorePartData[key]){self.oStorePartData[key] = {};}
                    self.oPartData[key].num = 0;
                    var  nKjNumCount = 0;
                    for(var i=0; i<oTrendData[key].length; i++){
                        var sBlockCls = oBoxCls[key][i] +' bdr2';
                        if(key == oBoxCls.nobr[0] && i == oBoxCls.nobr[1]){
                            sBlockCls = oBoxCls[key][i];
                        }
                        oListHtml = $('<div class="'+ sBlockCls +'"></div>');
                        for(var j=0; j<oTrendData[key][i].length; j++){
                            if(!oTrendData[key][i][j]){oTrendData[key][i][j] = '&nbsp;';}
                            if(!self.oMissData[key]){self.oMissData[key] = [];}
                            if(!self.oReverseMissData[key]){self.oReverseMissData[key] = [];}
                            if(!self.oMissData[key][nCountNum]){self.oMissData[key][nCountNum] = [];}
                            if(!self.oReverseMissData[key][nCountNum]){self.oReverseMissData[key][nCountNum] = false;}
                            if(/^[axzlcbHgmjyt-]/.test(oTrendData[key][i][j])){
                                var sNumType = oTrendData[key][i][j].substr(0, 1), sNumVal = oTrendData[key][i][j].substr(1);
                                if(sNumType == 'a' || sNumType == 'x' || sNumType == 'z'){
                                    oSingleNum = $('<em numtype="'+ sNumType +'" class="bg1 '+ okChartConfig.oSpecBallClsConfig[self.sLotteryType][sNumType] +'">'+ sNumVal +'</em>');
                                }else if(sNumType == 'H'){
                                    var nMissNum = sNumVal.indexOf('_') == -1 ? sNumVal : sNumVal.split('_')[1];
                                    oSingleNum = $('<em class="bg1 bg1Txt"'+ (Number(nMissNum) > 100 ? ' style="font-family: \'宋体\'"' : '') +'>'+ nMissNum +'</em>');
                                }else if(sNumType == 't'){
                                    oSingleNum = $('<em class="bg1 '+ okChartConfig.oBallClsConfig[self.sLotteryType]['t'] +'">'+ sNumVal +'</em>');
                                }else{
                                    oSingleNum = $('<em class="bg1 '+ okChartConfig.oBallClsConfig[self.sLotteryType][key] +'">'+ sNumVal +'</em>');
                                }
                                oListHtml[0].appendChild(oSingleNum[0]);
                                switch(sNumType){
                                    case 'l': 
                                        self.aLhNum.push(oSingleNum);
                                        break;
                                    case 'c':
                                        self.aCfNum.push(oSingleNum);
                                        break;
                                    case 'b':
                                        self.aPbNum.push(oSingleNum);
                                        break;
                                    case 'g':
                                        self.aLhNum.push(oSingleNum);
                                        self.aPbNum.push(oSingleNum);
                                        break;
                                    case 'm':
                                        self.aCfNum.push(oSingleNum);
                                        self.aPbNum.push(oSingleNum);
                                        break;
                                    case 'j':
                                        self.aLhNum.push(oSingleNum);
                                        self.aCfNum.push(oSingleNum);
                                        self.aPbNum.push(oSingleNum);
                                        break;
                                    case 'y':
                                        self.aLhNum.push(oSingleNum);
                                        self.aCfNum.push(oSingleNum);
                                        break;
                                    case 'a':
                                        self.aZlNum.push(oSingleNum);
                                        self.aXlNum.push(oSingleNum);
                                        break;
                                    case 'z':
                                        self.aZlNum.push(oSingleNum);
                                        break; 
                                    case 'x':
                                        self.aXlNum.push(oSingleNum);
                                        break;   
                                }
                                if(sNumType != 'H'){
                                    if(self.bOrderFlag){
                                        self.oReverseMissData[key][nCountNum] = true;
                                    }else{
                                        self.oMissData[key][nCountNum] = [];
                                    }
                                    if(sNumType != 't'){
                                        if(!self.okjNumData[key]){self.okjNumData[key] = [];}
                                        if(!self.okjNumData[key][nKjNumCount]){self.okjNumData[key][nKjNumCount] = [];}
                                        self.okjNumData[key][nKjNumCount].push(oSingleNum);
                                        nKjNumCount += 1;
                                    }else{
                                        if(!self.okjNumData['t']){self.okjNumData['t'] = [];}
                                        if(!self.okjNumData['t'][0]){self.okjNumData['t'][0] = [];}
                                        self.okjNumData['t'][0].push(oSingleNum);
                                    }
                                }else if(sNumType == 'H'){
                                    if(sNumVal.indexOf('_') != -1){
                                        var nKeyIndex = sNumVal.split('_')[0];
                                        if(!self.oDefMissNumData[key]){self.oDefMissNumData[key] = [];}
                                        if(!self.oDefMissNumData[key][nKeyIndex]){self.oDefMissNumData[key][nKeyIndex] = [];}
                                        self.oDefMissNumData[key][nKeyIndex].push(oSingleNum);
                                    }
                                    if(!self.oReverseMissData[key][nCountNum]){
                                        self.oMissData[key][nCountNum].push(oSingleNum);
                                    }
                                }
                            }else{
                                // $('<em class="bg1">'+ oTrendData[key][i][j] +'</em>').appendTo(oListHtml);
                                oSingleNum = $('<em class="bg1"'+ (Number(oTrendData[key][i][j]) > 100 ? ' style="font-family: \'宋体\'"' : '') +'>'+ oTrendData[key][i][j] +'</em>');
                                oListHtml[0].appendChild(oSingleNum[0]);
                                if(!self.oReverseMissData[key][nCountNum]){
                                    self.oMissData[key][nCountNum].push(oSingleNum);
                                }
                            }
                            if(okChartConfig.oHasPartConfig[self.sLotteryType][self.sTrendType]){
                                for(var pkey in oPartConfData[key]){
                                    if(pkey == 'def'){continue;}
                                    if(!self.oStorePartData[key][pkey]){
                                        self.oStorePartData[key][pkey] = [];
                                    }
                                    if(self.oPartData[key].num > 0 && self.oPartData[key].num % oPartConfData[key][pkey] == 0){
                                        self.oStorePartData[key][pkey].push(oSingleNum);
                                    }
                                }
                            }
                            self.oPartData[key].num += 1;
                            nCountNum += 1;
                        }
                        // oSubWrap.append(oListHtml);
                        oSubWrap[0].appendChild(oListHtml[0]);
                    }   
                }
                if(data[index].s){
                    var nShapeCount = 0;
                    if(data[index].s['Distance']){
                        for(var i=0; i<data[index].s['Distance'].length; i++){
                            oListHtml = self.getNumShapeHtml(oBoxCls, data[index].s['Distance'], i, 'Distance', nShapeCount);
                            aDistanceShape.push(oListHtml);
                            oSubWrap[0].appendChild(oListHtml[0]);
                            nShapeCount += 1;
                        }
                        self.oStoreNumShape['Distance'] = aDistanceShape;
                    }
                    if(data[index].s['BigSmall']){
                        for(var i=0; i<data[index].s['BigSmall'].length; i++){
                            oListHtml = self.getNumShapeHtml(oBoxCls, data[index].s['BigSmall'], i, 'BigSmall', nShapeCount);
                            aBigSmallShape.push(oListHtml);
                            oSubWrap[0].appendChild(oListHtml[0]);
                            nShapeCount += 1;
                        }
                        self.oStoreNumShape['BigSmall'] = aBigSmallShape;
                    }
                    if(data[index].s['OddEven']){
                        for(var i=0; i<data[index].s['OddEven'].length; i++){
                            oListHtml = self.getNumShapeHtml(oBoxCls, data[index].s['OddEven'], i, 'OddEven', nShapeCount);
                            aOddEvenShape.push(oListHtml);
                            oSubWrap[0].appendChild(oListHtml[0]);
                            nShapeCount += 1;
                        }
                        self.oStoreNumShape['OddEven'] = aOddEvenShape;
                    }
                    if(data[index].s['012']){
                        if(nShapeCount > oBoxCls.s.length - 1){nShapeCount = 0;}
                        for(var i=0; i<data[index].s['012'].length; i++){
                            oListHtml = self.getNumShapeHtml(oBoxCls, data[index].s['012'], i, '012', nShapeCount);
                            a012Shape.push(oListHtml);
                            oSubWrap[0].appendChild(oListHtml[0]);
                            nShapeCount += 1;
                        }
                        self.oStoreNumShape['012'] = a012Shape;
                    }
                    if(data[index].s['PrimeComp']){
                        if(nShapeCount > oBoxCls.s.length - 1){nShapeCount = 0;}
                        for(var i=0; i<data[index].s['PrimeComp'].length; i++){
                            oListHtml = self.getNumShapeHtml(oBoxCls, data[index].s['PrimeComp'], i, 'PrimeComp', nShapeCount);
                            aPrimeCompShape.push(oListHtml);
                            oSubWrap[0].appendChild(oListHtml[0]);
                            nShapeCount += 1;
                        }
                        self.oStoreNumShape['PrimeComp'] = aPrimeCompShape;
                    }
                }
                // oChartList.append(oSubWrap);
                oChartList[0].appendChild(oSubWrap[0]);
                if(nNumCount > 4){nNumCount = 0;}
                nNumCount += 1;
            }
        }
        $.each($('.chartList', oChartList), function(i, e){
            $('div:last', $(e)).removeClass('bdr2');
        });
        // self.oChartMain.html(oChartList.html());
        self.oChartMain.html('').append(oChartList.children());
        //表头
        if(self.bIsInit){
            var sTitleHtml = self.getTitleHtml();
            self.oChartTitle.append(sTitleHtml);
            // $('div:last', self.oChartTitle).removeClass('bdr2');
        }
        self.oLoadingLayer.hide();
        self.oChartTitle.show();
        self.oChartMain.show();
        //遗漏数据
        var sMaxSkip = '', sNowSkip = '', sNowSkipText = '', sHScountHtml = '', sNACountHtml = '', sAveHtml = '';
        if(self.oStoreSkip.ms){ 
            for(var key in self.oStoreSkip.ms){
                if(key != 's'){
                    for(var i=0; i<self.oStoreSkip.ms[key].length; i++){    //最大遗漏
                        var sMaxDetail = '';
                        for(var j=0; j<self.oStoreSkip.ms[key][i].length; j++){
                            sMaxDetail += '<em class="bg1"'+ (Number(self.oStoreSkip.ms[key][i][j]) > 100 ? ' style="font-family: \'宋体\'"' : '') +'>'+ self.oStoreSkip.ms[key][i][j] +'</em>';
                        }
                        var sBlockCls = oBoxCls[key][i] +' bdr2';
                        if(key == oBoxCls.nobr[0] && i == oBoxCls.nobr[1]){
                            sBlockCls = oBoxCls[key][i];
                        }
                        if(sMaxDetail){
                            sMaxSkip += '<div class="'+ sBlockCls +'">'+ sMaxDetail +'</div>';
                        }
                    }
                    if(self.oStoreSkip.nac){   //出现次数
                        for(var i=0; i<self.oStoreSkip.nac[key].length; i++){
                            var sNACountDetail = '', sAveDetail = '';
                            for(var j=0; j<self.oStoreSkip.nac[key][i].length; j++){
                                sNACountDetail += '<em class="bg1"'+ (Number(self.oStoreSkip.nac[key][i][j]) > 100 ? ' style="font-family: \'宋体\'"' : '') +'>'+ self.oStoreSkip.nac[key][i][j] +'</em>';
                                var nAveNum = self.oStoreSkip.nac[key][i][j] > 0 ? Math.floor(self.nPeriodNum/self.oStoreSkip.nac[key][i][j]) : 0;
                                sAveDetail += '<em class="bg1"'+ (nAveNum > 100 ? ' style="font-family: \'宋体\'"' : '') +'>'+ nAveNum +'</em>';
                            }
                            var sBlockCls = oBoxCls[key][i] +' bdr2';
                            if(key == oBoxCls.nobr[0] && i == oBoxCls.nobr[1]){
                                sBlockCls = oBoxCls[key][i];
                            }
                            if(sNACountDetail){
                                sNACountHtml += '<div class="'+ sBlockCls +'">'+ sNACountDetail +'</div>';
                            }
                            if(sAveDetail){
                                sAveHtml += '<div class="'+ sBlockCls +'">'+ sAveDetail +'</div>';
                            }
                        } 
                    }
                    if(self.oStoreSkip.hsc){    //最大连出
                        for(var i=0; i<self.oStoreSkip.hsc[key].length; i++){
                            var sHSCountDetail = '';
                            for(var j=0; j<self.oStoreSkip.hsc[key][i].length; j++){
                                sHSCountDetail += '<em class="bg1">'+ self.oStoreSkip.hsc[key][i][j] +'</em>';
                            }
                            var sBlockCls = oBoxCls[key][i] +' bdr2';
                            if(key == oBoxCls.nobr[0] && i == oBoxCls.nobr[1]){
                                sBlockCls = oBoxCls[key][i];
                            }
                            if(sHSCountDetail){
                                sHScountHtml += '<div class="'+ sBlockCls +'">'+ sHSCountDetail +'</div>';
                            }
                        } 
                    }
                    if(self.oStoreSkip.ns){     //当前遗漏
                        for(var i=0; i<self.oStoreSkip.ns[key].length; i++){
                            var sNowDetail = '', sNowTextDetail = '';
                            for(var j=0; j<self.oStoreSkip.ns[key][i].length; j++){
                                var nNowSkipNum = Number(self.oStoreSkip.ns[key][i][j]) > 0 ? Number(self.oStoreSkip.ns[key][i][j]) : 0;
                                sNowDetail += '<p class="bg1"><span class="lineBox" style="height:'+ (nNowSkipNum/self.oStoreSkip.mn[key]*80) +'%;"><em class="linetxt">'+ nNowSkipNum +'</em></span></p>';
                                sNowTextDetail += '<em class="bg1">'+ nNowSkipNum +'</em>';
                            }
                            var sBlockCls = oBoxCls[key][i] +' bdr2';
                            if(key == oBoxCls.nobr[0] && i == oBoxCls.nobr[1]){
                                sBlockCls = oBoxCls[key][i];
                            }
                            if(sNowDetail){
                                sNowSkip += '<div class="'+ sBlockCls +'">'+ sNowDetail +'</div>';
                            }
                            if(sNowTextDetail){
                                sNowSkipText += '<div class="'+ sBlockCls +'">'+ sNowTextDetail +'</div>';
                            }
                        } 
                    }
                }
            }
            if(self.oStoreSkip.ms.s){
                var oNumShapeData = self.oStoreSkip.ms.s, aShapeKey = okChartConfig.aShapeKeyMapping[self.sLotteryType][self.sTrendType], nKeyCount = 0;;
                for(var sk=0; sk<aShapeKey.length; sk++){
                    var skey = aShapeKey[sk];
                    if(nKeyCount > oBoxCls.s.length - 1){nKeyCount = 0;}
                    for(var i=0; i<oNumShapeData[skey].length; i++){
                        var sMaxDetail = '', sNowDetail = '', sNowTextDetail = '', sHSCountDetail = '', sNACountDetail = '', sAveDetail = '';
                        for(var j=0; j<oNumShapeData[skey][i].length; j++){
                            if(self.oStoreSkip.nac){
                                sNACountDetail += '<em class="bg1">'+ self.oStoreSkip.nac.s[skey][i][j] +'</em>';
                                sAveDetail += '<em class="bg1">'+ (self.oStoreSkip.nac.s[skey][i][j] > 0 ? Math.floor(self.nPeriodNum/self.oStoreSkip.nac.s[skey][i][j]) : 0) +'</em>';
                            }
                            if(self.oStoreSkip.hsc){
                                sHSCountDetail += '<em class="bg1">'+ self.oStoreSkip.hsc.s[skey][i][j] +'</em>';
                            }
                            sMaxDetail += '<em class="bg1">'+ oNumShapeData[skey][i][j] +'</em>';
                            if(self.oStoreSkip.ns){
                                var nNowSkipNum = Number(self.oStoreSkip.ns.s[skey][i][j]) > 0 ? Number(self.oStoreSkip.ns.s[skey][i][j]) : 0;
                                sNowDetail += '<p class="bg1"><span class="lineBox" style="height:'+ (nNowSkipNum/self.oStoreSkip.mn.s[skey]*80) +'%;"><em class="linetxt">'+ nNowSkipNum +'</em></span></p>';
                                sNowTextDetail += '<em class="bg1">'+ nNowSkipNum +'</em>';
                            }
                        }
                        var sBlockCls = oBoxCls.s[nKeyCount] +' bdr2';
                        if('s' == oBoxCls.nobr[0] && nKeyCount == oBoxCls.nobr[1]){
                            sBlockCls = oBoxCls.s[nKeyCount];
                        }
                        if(sNACountDetail){
                            sNACountHtml += '<div class="ctrl_'+ skey + ' ' + sBlockCls +'" '+ (self.sDefaultShape != 'none' && skey != self.sDefaultShape ? 'style="display: none;"' : '') +'>'+ sNACountDetail +'</div>';
                        }
                        if(sAveDetail){
                            sAveHtml += '<div class="ctrl_'+ skey + ' ' + sBlockCls +'" '+ (self.sDefaultShape != 'none' && skey != self.sDefaultShape ? 'style="display: none;"' : '') +'>'+ sAveDetail +'</div>';
                        }
                        if(sMaxDetail){
                            sMaxSkip += '<div class="ctrl_'+ skey + ' ' + sBlockCls +'" '+ (self.sDefaultShape != 'none' && skey != self.sDefaultShape ? 'style="display: none;"' : '') +'>'+ sMaxDetail +'</div>';
                        }
                        if(sHSCountDetail){
                            sHScountHtml += '<div class="ctrl_'+ skey + ' ' + sBlockCls +'" '+ (self.sDefaultShape != 'none' && skey != self.sDefaultShape ? 'style="display: none;"' : '') +'>'+ sHSCountDetail +'</div>';
                        }
                        if(sNowDetail){
                            sNowSkip += '<div class="ctrl_'+ skey + ' ' + sBlockCls +'" '+ (self.sDefaultShape != 'none' && skey != self.sDefaultShape ? 'style="display: none;"' : '') +'>'+ sNowDetail +'</div>';
                        }
                        if(sNowTextDetail){
                            sNowSkipText += '<div class="ctrl_'+ skey + ' ' + sBlockCls +'" '+ (self.sDefaultShape != 'none' && skey != self.sDefaultShape ? 'style="display: none;"' : '') +'>'+ sNowTextDetail +'</div>';
                        }
                        nKeyCount += 1;
                    }
                }
            }
        }
        var sTitleSpecial = '';
        /* if((self.sLotteryType == '3D' || self.sLotteryType == 'P3') && self.sTrendType == 'CNumTrend'){
            sTitleSpecial = '<div class="box4 bdr2"><em class="bg1"></em></div><div class="box3 bdr2"><em class="bg1"></em></div><div class="box3 bdr2"><em class="bg1"></em></div>';
        } */
        if(sNACountHtml){
            sNACountHtml = '<div class="chartList clearfix"><p class="qihao">出现总次数</p>' + sTitleSpecial + sNACountHtml + '</div>';
        } 
        if(sAveHtml){   
            sAveHtml = '<div class="chartList clearfix"><p class="qihao">平均遗漏值</p>' + sTitleSpecial +  sAveHtml + '</div>';
        }
        if(sMaxSkip){
            sMaxSkip = '<div class="chartList clearfix"><p class="qihao">最大遗漏值</p>' + sTitleSpecial +  sMaxSkip + '</div>';
        }
        if(sHScountHtml){
            sHSCountDetail = '<div class="chartList clearfix"><p class="qihao">最大连出值</p>' + sTitleSpecial +  sHScountHtml + '</div>';
        }
        if(sNowSkip){
            sNowSkip = '<div id="nowskip_shape" class="chartList clearfix chartListYil"><p class="qihao">当前遗漏</p>' + sTitleSpecial +  sNowSkip + '</div>';
        }
        if(sNowSkipText){
            sNowSkipText = '<div id="nowskip_text" style="display: none;" class="chartList clearfix"><p class="qihao">当前遗漏</p>' + sTitleSpecial +  sNowSkipText + '</div>';
        }
        
        self.oSkipData.html(sNACountHtml + sAveHtml + sMaxSkip + sHSCountDetail + sNowSkip + sNowSkipText);
        self.oSkipData.show();
        if(self.bIsFloat){self.checkTitleFooterFloat();}
        if(self.fCallback && typeof self.fCallback == 'function'){self.fCallback.call();}
        showHidePart();     //分区
        drawLineInit();     //连线
        self.bOrderFlag = false;
    };
    //表头Html结构
    this.getTitleHtml = function(){
        var oTitleData = '', oBoxCls = '', sTitleHtml = '';
        if(self.sLotteryType == 'SuperLotto' && (self.sTrendType == '1' || self.sTrendType == '3' || self.sTrendType == '6')){
            oTitleData = okChartConfig.oTitleDataConfig[self.sLotteryType]['1'];
            oBoxCls = okChartConfig.oChartClsConfig[self.sLotteryType]['1'];
        }else if(self.sLotteryType == 'SSQ' && (self.sTrendType == '0' || self.sTrendType == '2' || self.sTrendType == '4')){
            oTitleData = okChartConfig.oTitleDataConfig[self.sLotteryType]['0'];
            oBoxCls = okChartConfig.oChartClsConfig[self.sLotteryType]['0'];
        }else if(self.sLotteryType == '7LC' && (self.sTrendType == '1' || self.sTrendType == '3' || self.sTrendType == '5')){
            oTitleData = okChartConfig.oTitleDataConfig[self.sLotteryType]['1'];
            oBoxCls = okChartConfig.oChartClsConfig[self.sLotteryType]['1'];
        }else if(self.sLotteryType == 'P7' && (self.sTrendType == '2' || self.sTrendType == '5' || self.sTrendType == '0')){
            oTitleData = okChartConfig.oTitleDataConfig[self.sLotteryType]['1'];
            oBoxCls = okChartConfig.oChartClsConfig[self.sLotteryType]['1'];
        }else{
            oTitleData = okChartConfig.oTitleDataConfig[self.sLotteryType][self.sTrendType];
            oBoxCls = okChartConfig.oChartClsConfig[self.sLotteryType][self.sTrendType];
        }
        for(var key in oTitleData){
            for(var i=0; i<oTitleData[key].length; i++){
                var sBlockCls = oBoxCls[key][i] +' bdr2';
                if(key == oBoxCls.nobr[0] && i == oBoxCls.nobr[1]){
                    sBlockCls = oBoxCls[key][i];
                }
                sTitleHtml += '<div class="'+ sBlockCls +'">';
                for(var j=0; j<oTitleData[key][i].length; j++){
                    sTitleHtml += '<em class="bg1">'+ oTitleData[key][i][j] +'</em>';
                }
                sTitleHtml += '</div>';
            }   
        }
        if((self.sLotteryType == '3D' || self.sLotteryType == 'P3') && self.sTrendType == 'CNumTrend'){
            sTitleHtml = '<div class="box4 bdr2">&nbsp;</div><div class="box3 bdr2">&nbsp;</div><div class="box3 bdr2">&nbsp;</div>' + sTitleHtml;
        }
        return sTitleHtml;
    };
    //号码形态结构
    this.getNumShapeHtml = function(oBoxCls, oData, i, shape, num){
        var sBlockCls = oBoxCls.s[num] +' bdr2';
        if('s' == oBoxCls.nobr[0] && num == oBoxCls.nobr[1]){
            sBlockCls = oBoxCls.s[num];
        }
        var oList = $('<div class="'+ sBlockCls +'" '+ (self.sDefaultShape != 'none' && self.sDefaultShape != shape ? 'style="display: none;"' : '') +'></div>');
        if(!oData[i]){
            oList[0].appendChild($('<em>&nbsp;</em>')[0]);
            return oList;
        }
        var aDatailData = oData[i].split(','), sEmHtml = '', oEm = '';
        for(var j=0; j<aDatailData.length; j++){
            if(aDatailData[j].indexOf('-') != -1){
                sEmHtml = '<em class="bg1 '+ (num%2 == 0 ? 'bggr' : 'bgye') +'"'+ ((shape == '012' || shape == 'Distance' || ((self.sLotteryType == '3D' || self.sLotteryType == 'P3') && self.sTrendType == 'CNumTrend')) ? ' style="font-weight: bold;"' : '') +'>'+ aDatailData[j].substr(1) +'</em>';
            }else if(aDatailData[j].indexOf('H') != -1){
                sEmHtml = '<em class="bg1 bg1Txt">'+ aDatailData[j].substr(1) +'</em>';
            }else{
                sEmHtml = '<em class="bg1">'+ aDatailData[j] +'</em>';
            }
            oEm = $(sEmHtml);    
            oList[0].appendChild(oEm[0]);
        }
        return oList;
    };
    //头尾浮动计算
    this.checkTitleFooterFloat = function(){
        //头部
        var trendTitleObj = $('#chart_trend_title');
        var gpTitleTop = trendTitleObj.offset().top;
        var trenTitleHeight = trendTitleObj.height();
        //尾部
        var trendfooterObj = $('#chart_trend_footer');
        var trenFooterHeight = trendfooterObj.height();
        
        var trendMainObj = self.oChartMain;
        var trendMainTop = trendMainObj.offset().top;
        var trendMainHeight = trendMainObj.height();
        var scrollTop = Number($(document).scrollTop());
        
        //计算头部定位
        function getGpTitleLocate(scrollTop){
            if(!trendTitleObj.length){return;}
            if(scrollTop > gpTitleTop && scrollTop < trendMainTop + trendMainHeight - trenTitleHeight * 2){
                var titleLeft = Number($(document).scrollLeft());
                if(titleLeft > 0){
                    if($.browser.msie && $.browser.version == "6.0"){
                        titleLeft = 0;
                    }
                    trendTitleObj.css("left", -1 * titleLeft + "px");
                }else{
                    footerLeft = trendMainObj.offset().left;
                    trendTitleObj.css("left", footerLeft + "px");
                }
                if(trendTitleObj.hasClass('chtTopFloat')) return false;
                trendTitleObj.addClass('chtTopFloat');
            }else{
                if(!trendTitleObj.hasClass('chtTopFloat')) return false;
                trendTitleObj.removeClass('chtTopFloat');
            }           
        }
        
        //计算尾部定位
        function getGpFooterLocate(scrollTop){
            if(!trendfooterObj.length){return;}
            var nowClientHeigth = document.documentElement.clientHeight;
            var betTitleWidth = 0;
            if(scrollTop + nowClientHeigth - 50 < trendMainTop + trendMainHeight){
                var footerLeft = Number($(document).scrollLeft());
                if(footerLeft > 0){
                    if($.browser.msie && $.browser.version == "6.0"){
                        footerLeft = 0;
                    }
                    trendfooterObj.css("left", -1 * footerLeft + "px");
                }else{
                    footerLeft = trendMainObj.offset().left;
                    trendfooterObj.css("left", footerLeft + "px");
                }
                if(trendfooterObj.hasClass('chartBottomFloat')) return false;
                trendfooterObj.addClass('chartBottomFloat');
            }else{
                if(!trendfooterObj.hasClass('chartBottomFloat')) return false;
                trendfooterObj.removeClass('chartBottomFloat');
            }
        }

        $(window).unbind('scroll').scroll(function(){
            var scrollTop = Number($(document).scrollTop());
            getGpTitleLocate(scrollTop);
            getGpFooterLocate(scrollTop);
        });
        getGpTitleLocate(scrollTop);
        getGpFooterLocate(scrollTop);
        
        $('#goUp').click(function(){
            window.scrollTo('0','0');
        });
        $('#goDown').click(function(){
            var dis = $('#chart_notice').offset().top - ($(window).height()) * 0.85;
            window.scrollTo('0', dis);
        });
        
        //定位
        var goDivObj=$("#goDiv");
        var thisBodyHeight=document.body.scrollHeight;
        var thisBodyWidth=document.getElementById("chart_trend_wrapper").scrollWidth;
        function getGoDivOff(){
            var thisWidth=document.documentElement.clientWidth;
            if((thisWidth-thisBodyWidth)/2>18){
                var goDivRight=(thisWidth-thisBodyWidth)/2-18;
            }else{
                var goDivRight=0;
            }
            goDivObj.css("right", goDivRight+"px");
        }
        getGoDivOff();
        window.onresize=function(){
            getGoDivOff();
            var scrollTop = Number($(document).scrollTop());
            getGpTitleLocate(scrollTop);
            getGpFooterLocate(scrollTop);
        }
    };
    
    //显示分区
    this.showPartResult = function(akey, sPart){
        for(var pk=0; pk<akey.length; pk++){
            var oHisPartData = self.oStorePartData[akey[pk]][self.sHistoryPart[akey[pk]]];
            if(oHisPartData){
                for(var i=0; i<oHisPartData.length; i++){
                    oHisPartData[i].removeClass('fqborder');
                }
            }
        }
        if(sPart == '0'){return;}
        for(var pk=0; pk<akey.length; pk++){
            var oCurPartData = self.oStorePartData[akey[pk]][sPart];
            for(var i=0; i<oCurPartData.length; i++){
                oCurPartData[i].addClass('fqborder');
            }
            self.sHistoryPart[akey[pk]] = sPart;
        }    
    };
    
    //获取开奖号码坐标
    this.getXY = function(arr){
        var aXYValue = [];
        for(var i=0; i<arr.length; i++){
            var oNowNode = arr[i][0];
            if(self.bIsIE){
                var oNowOffset = {t:0, l:0}, oPar = oNowNode.parentNode;
                while(!oPar.id || oPar.id != self.sMainId){
                    oNowOffset.t += oPar.offsetTop;
                    oNowOffset.l += oPar.offsetLeft;
                    oPar = oPar.parentNode;
                }
                aXYValue.push((oNowNode.offsetLeft + oNowOffset.l + self.indent.x) +','+ (oNowNode.offsetTop + oNowOffset.t + self.indent.y));
            }else{
                aXYValue.push((oNowNode.offsetLeft + self.indent.x) +','+ (oNowNode.offsetTop + self.indent.y));
            }
        }
        return aXYValue;
    };
    
    //号码定位
    this.numberLocation = function(isShow, index, k, tbool){
        k = k || 1;
        index = index || 1;
        for(var i=0; i<self.okjNumData[k][index].length; i++){
            if(isShow){
                if(k == 't'){
                    self.okjNumData[k][index][i].removeAttr('style').addClass('blueBall');
                }else{
                    self.okjNumData[k][index][i].removeAttr('style').addClass('redBall');
                    if(self.oDefMissNumData[k][index][i]){self.oDefMissNumData[k][index][i].addClass('bg1Txt');}
                }
            }else{
                self.okjNumData[k][index][i].css({'backgroundImage':'none', 'color': '#F6F6F6'});
                if(k != 't'){
                    if(self.oDefMissNumData[k][index][i]){self.oDefMissNumData[k][index][i].removeClass('bg1Txt');}
                }    
            }
        }
        /* for(var i=0,ilong=this.wemo[k].length; i< ilong; i++){
            isShow ? sf.addClass(this.wemo[k][i][index], this.wBg[bg_k]):sf.mvClass(this.wemo[k][i][index], this.wBg[bg_k]);
            this.wemo[k][i][index].style.color  = isShow ? '':sf.getStyle(this.wemo[k][i][index], 'backgroundColor');
        } */
    };
    
    //投注初始化
    this.initNumBet = function(){
        $('.ctrl_selecter', $('#chart_bet_wrap')).each(function(i, e){
            $('em.betBall', $(e)).click(function(){
                $(this).toggleClass(okChartConfig.oBetBallClsConfig[self.sLotteryType][self.sTrendType][i]);
                calSelectedNumMoney();  //外部接口
            });
        });
    };
    
    //初始化
    this._init = function(){
        self.initStoreDataObject();
        self.getTrendData();
        if(self.bHasBet && self.bIsInit){self.initNumBet();}
    };
    
    this._init();
}

/**
* 绘制图表连线
* param.color：线条颜色
* param.weight： 线条粗细
* param.pointsXYArr：连线号码坐标
* param.auto：是否自动连线
*/

function drawChartLine(param){
    var self = this;
    this.bIsIE = window.navigator.userAgent.indexOf('MSIE')>-1 ? true : false;
    this.sColor = param.color || '#4F5DFF';
    this.nWeight = param.weight || 1;
    this.aPointsXY = param.pointsXYArr || [];
    this.bAuto = param.auto || false;
    this.sXmlns = param.xmlns || 'mok';
    this.nRadius = param.radius || 9;
    this.sMainId = param.mainid || 'chart_main';
    this.sVisibility = param.visible || param.visible == undefined ? 'visible' : 'hidden';  //线条是隐藏还是显示
    this.oChartMain = this.sMainId ? document.getElementById(this.sMainId) : document.body;
    this.oDocFrag = document.createDocumentFragment();
    this.aLineso = [];  //连线对象
    this.bAuto && this.paintLine();
    
    //显隐
    this.showLine = function(bool){
        bool = bool || false;
        if(bool){
            if(!self.aLineso.length){
                self.sVisibility = 'visible';
                self.paintLine();
            }else if(self.sVisibility == 'visible'){
                return;
            }else{
                self.sVisibility = 'visible';
            }
        }else if(!self.aLineso.length || self.sVisibility == 'hidden'){
            return;
        }else{
            self.sVisibility    = 'hidden';
        }
        for(var i=0; i<self.aLineso.length; i++){
            self.aLineso[i].style.visibility = self.sVisibility;
        }
    };
    //删除连线
    this.removeLine = function(){
        if(!self.aLineso.length){return;}
        for(var i=0; i<self.aLineso.length; i++){
            self.oChartMain.removeChild(self.aLineso[i]);
        }
        self.aLineso.length = 0;
    };
    //绘线
    this.paintLine = function(){
        var i = 0;
        while(self.aPointsXY[i+1]){
            var oLine = self.creatLine(i);
            self.aLineso.push(oLine);
            self.oDocFrag.appendChild(oLine);
            i++;
        }
        self.oChartMain.appendChild(self.oDocFrag);
    };
    //创建线条对象
    this.creatLine = function(k){
        var oPro = self.getLinePro(k);
        if(self.bIsIE){
            var sLabel = self.sXmlns +':line';
            var oLine = document.createElement('<'+ sLabel +'></'+ sLabel +'>');
            oLine.style.cssText = 'position:absolute; z-index:3; top:'+ oPro.top +'; left:'+ oPro.left +'; visibility:'+ self.sVisibility;
            oLine.strokeColor = self.sColor;
            oLine.strokeWeight = self.nWeight +'px';
            oLine.from = oPro.from.x +','+ oPro.from.y;
            oLine.to = oPro.to.x +','+ oPro.to.y;
            return oLine;
        }else{
            var oCvs = document.createElement('canvas');
            oCvs.width = oPro.width;
            oCvs.height = oPro.height;
            oCvs.style.cssText = 'position:absolute; z-index:3; top:'+ oPro.top +'; left:'+ oPro.left +'; visibility:'+ self.sVisibility;
            var cline = oCvs.getContext('2d');
            cline.strokeStyle = self.sColor;
            cline.lineCap = 'round';
            cline.lineWidth = self.nWeight;
            cline.beginPath();
            cline.moveTo(oPro.from.x, oPro.from.y);
            cline.lineTo(oPro.to.x, oPro.to.y);
            cline.closePath();
            cline.stroke();
            return oCvs;
        }
    };
    this.changeLineWeight = function(val, isVisibile){
        self.nWeight    = parseInt(val, 10) || 1;
        self.removeLine();
        self.paintLine();
        self.showLine(isVisibile);
    };
    //设置属性
    this.getLinePro = function(k){
        var obj = {}, fxy = self.aPointsXY[k].split(','), txy = self.aPointsXY[k+1].split(',');
        var a = Math.abs(fxy[0] - txy[0]),
            b = Math.abs(fxy[1] - txy[1]),
            c = Math.round(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
        var p_x = a ? Math.round(a*self.nRadius/c) : 0,
            p_y = a ? Math.round(b*self.nRadius/c) : self.nRadius;
        if(+fxy[0] <= +txy[0]){
            obj.left = +fxy[0] + p_x +'px';
            obj.top = +fxy[1] + p_y +'px';
            obj.from = {x:0, y:0};
            obj.to = {x:parseInt(txy[0], 10) - parseInt(fxy[0], 10) - 2*p_x, y:parseInt(txy[1], 10) - parseInt(fxy[1], 10) - 2*p_y};
            obj.width = obj.to.x || self.nWeight;
        }else{
            obj.left = +txy[0] + p_x +'px';
            obj.top = +fxy[1] + p_y +'px';
            obj.from = {x:parseInt(fxy[0], 10) - parseInt(txy[0], 10) - 2*p_x, y:0};
            obj.to = {x:0, y:parseInt(txy[1], 10) - parseInt(fxy[1], 10) - 2*p_y};
            obj.width = obj.from.x;
        }
        obj.height  = obj.to.y || self.nWeight;
        return obj;
    }
}