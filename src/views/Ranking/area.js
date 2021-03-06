var provinces = {
    // 23个省
    台湾: "taiwan",
    河北: "hebei",
    山西: "shanxi",
    辽宁: "liaoning",
    吉林: "jilin",
    黑龙江: "heilongjiang",
    江苏: "jiangsu",
    浙江: "zhejiang",
    安徽: "anhui",
    福建: "fujian",
    江西: "jiangxi",
    山东: "shandong",
    河南: "henan",
    湖北: "hubei",
    湖南: "hunan",
    广东: "guangdong",
    海南: "hainan",
    四川: "sichuan",
    贵州: "guizhou",
    云南: "yunnan",
    陕西: "shanxi1",
    甘肃: "gansu",
    青海: "qinghai",
    // 5个自治区
    新疆: "xinjiang",
    广西: "guangxi",
    内蒙古: "neimenggu",
    宁夏: "ningxia",
    西藏: "xizang",
    // 4个直辖市
    北京: "beijing",
    天津: "tianjin",
    上海: "shanghai",
    重庆: "chongqing",
    // 2个特别行政区
    香港: "xianggang",
    澳门: "aomen"
  };

  // 市
  var cityMap = {
    北京市: "110100",
    天津市: "120100",
    上海市: "310100",
    重庆市: "500100",
    崇明县: "310200",
    湖北省直辖县市: "429000",
    铜仁市: "522200",
    毕节市: "522400",
    石家庄市: "130100",
    唐山市: "130200",
    秦皇岛市: "130300",
    邯郸市: "130400",
    邢台市: "130500",
    保定市: "130600",
    张家口市: "130700",
    承德市: "130800",
    沧州市: "130900",
    廊坊市: "131000",
    衡水市: "131100",
    太原市: "140100",
    大同市: "140200",
    阳泉市: "140300",
    长治市: "140400",
    晋城市: "140500",
    朔州市: "140600",
    晋中市: "140700",
    运城市: "140800",
    忻州市: "140900",
    临汾市: "141000",
    吕梁市: "141100",
    呼和浩特市: "150100",
    包头市: "150200",
    乌海市: "150300",
    赤峰市: "150400",
    通辽市: "150500",
    鄂尔多斯市: "150600",
    呼伦贝尔市: "150700",
    巴彦淖尔市: "150800",
    乌兰察布市: "150900",
    兴安盟: "152200",
    锡林郭勒盟: "152500",
    阿拉善盟: "152900",
    沈阳市: "210100",
    大连市: "210200",
    鞍山市: "210300",
    抚顺市: "210400",
    本溪市: "210500",
    丹东市: "210600",
    锦州市: "210700",
    营口市: "210800",
    阜新市: "210900",
    辽阳市: "211000",
    盘锦市: "211100",
    铁岭市: "211200",
    朝阳市: "211300",
    葫芦岛市: "211400",
    长春市: "220100",
    吉林市: "220200",
    四平市: "220300",
    辽源市: "220400",
    通化市: "220500",
    白山市: "220600",
    松原市: "220700",
    白城市: "220800",
    延边朝鲜族自治州: "222400",
    哈尔滨市: "230100",
    齐齐哈尔市: "230200",
    鸡西市: "230300",
    鹤岗市: "230400",
    双鸭山市: "230500",
    大庆市: "230600",
    伊春市: "230700",
    佳木斯市: "230800",
    七台河市: "230900",
    牡丹江市: "231000",
    黑河市: "231100",
    绥化市: "231200",
    大兴安岭地区: "232700",
    南京市: "320100",
    无锡市: "320200",
    徐州市: "320300",
    常州市: "320400",
    苏州市: "320500",
    南通市: "320600",
    连云港市: "320700",
    淮安市: "320800",
    盐城市: "320900",
    扬州市: "321000",
    镇江市: "321100",
    泰州市: "321200",
    宿迁市: "321300",
    杭州市: "330100",
    宁波市: "330200",
    温州市: "330300",
    嘉兴市: "330400",
    湖州市: "330500",
    绍兴市: "330600",
    金华市: "330700",
    衢州市: "330800",
    舟山市: "330900",
    台州市: "331000",
    丽水市: "331100",
    合肥市: "340100",
    芜湖市: "340200",
    蚌埠市: "340300",
    淮南市: "340400",
    马鞍山市: "340500",
    淮北市: "340600",
    铜陵市: "340700",
    安庆市: "340800",
    黄山市: "341000",
    滁州市: "341100",
    阜阳市: "341200",
    宿州市: "341300",
    六安市: "341500",
    亳州市: "341600",
    池州市: "341700",
    宣城市: "341800",
    福州市: "350100",
    厦门市: "350200",
    莆田市: "350300",
    三明市: "350400",
    泉州市: "350500",
    漳州市: "350600",
    南平市: "350700",
    龙岩市: "350800",
    宁德市: "350900",
    南昌市: "360100",
    景德镇市: "360200",
    萍乡市: "360300",
    九江市: "360400",
    新余市: "360500",
    鹰潭市: "360600",
    赣州市: "360700",
    吉安市: "360800",
    宜春市: "360900",
    抚州市: "361000",
    上饶市: "361100",
    济南市: "370100",
    青岛市: "370200",
    淄博市: "370300",
    枣庄市: "370400",
    东营市: "370500",
    烟台市: "370600",
    潍坊市: "370700",
    济宁市: "370800",
    泰安市: "370900",
    威海市: "371000",
    日照市: "371100",
    莱芜市: "371200",
    临沂市: "371300",
    德州市: "371400",
    聊城市: "371500",
    滨州市: "371600",
    菏泽市: "371700",
    郑州市: "410100",
    开封市: "410200",
    洛阳市: "410300",
    平顶山市: "410400",
    安阳市: "410500",
    鹤壁市: "410600",
    新乡市: "410700",
    焦作市: "410800",
    濮阳市: "410900",
    许昌市: "411000",
    漯河市: "411100",
    三门峡市: "411200",
    南阳市: "411300",
    商丘市: "411400",
    信阳市: "411500",
    周口市: "411600",
    驻马店市: "411700",
    省直辖县级行政区划: "469000",
    武汉市: "420100",
    黄石市: "420200",
    十堰市: "420300",
    宜昌市: "420500",
    襄阳市: "420600",
    鄂州市: "420700",
    荆门市: "420800",
    孝感市: "420900",
    荆州市: "421000",
    黄冈市: "421100",
    咸宁市: "421200",
    随州市: "421300",
    恩施土家族苗族自治州: "422800",
    长沙市: "430100",
    株洲市: "430200",
    湘潭市: "430300",
    衡阳市: "430400",
    邵阳市: "430500",
    岳阳市: "430600",
    常德市: "430700",
    张家界市: "430800",
    益阳市: "430900",
    郴州市: "431000",
    永州市: "431100",
    怀化市: "431200",
    娄底市: "431300",
    湘西土家族苗族自治州: "433100",
    广州市: "440100",
    韶关市: "440200",
    深圳市: "440300",
    珠海市: "440400",
    汕头市: "440500",
    佛山市: "440600",
    江门市: "440700",
    湛江市: "440800",
    茂名市: "440900",
    肇庆市: "441200",
    惠州市: "441300",
    梅州市: "441400",
    汕尾市: "441500",
    河源市: "441600",
    阳江市: "441700",
    清远市: "441800",
    东莞市: "441900",
    中山市: "442000",
    潮州市: "445100",
    揭阳市: "445200",
    云浮市: "445300",
    南宁市: "450100",
    柳州市: "450200",
    桂林市: "450300",
    梧州市: "450400",
    北海市: "450500",
    防城港市: "450600",
    钦州市: "450700",
    贵港市: "450800",
    玉林市: "450900",
    百色市: "451000",
    贺州市: "451100",
    河池市: "451200",
    来宾市: "451300",
    崇左市: "451400",
    海口市: "460100",
    三亚市: "460200",
    三沙市: "460300",
    成都市: "510100",
    自贡市: "510300",
    攀枝花市: "510400",
    泸州市: "510500",
    德阳市: "510600",
    绵阳市: "510700",
    广元市: "510800",
    遂宁市: "510900",
    内江市: "511000",
    乐山市: "511100",
    南充市: "511300",
    眉山市: "511400",
    宜宾市: "511500",
    广安市: "511600",
    达州市: "511700",
    雅安市: "511800",
    巴中市: "511900",
    资阳市: "512000",
    阿坝藏族羌族自治州: "513200",
    甘孜藏族自治州: "513300",
    凉山彝族自治州: "513400",
    贵阳市: "520100",
    六盘水市: "520200",
    遵义市: "520300",
    安顺市: "520400",
    黔西南布依族苗族自治州: "522300",
    黔东南苗族侗族自治州: "522600",
    黔南布依族苗族自治州: "522700",
    昆明市: "530100",
    曲靖市: "530300",
    玉溪市: "530400",
    保山市: "530500",
    昭通市: "530600",
    丽江市: "530700",
    普洱市: "530800",
    临沧市: "530900",
    楚雄彝族自治州: "532300",
    红河哈尼族彝族自治州: "532500",
    文山壮族苗族自治州: "532600",
    西双版纳傣族自治州: "532800",
    大理白族自治州: "532900",
    德宏傣族景颇族自治州: "533100",
    怒江傈僳族自治州: "533300",
    迪庆藏族自治州: "533400",
    拉萨市: "540100",
    昌都地区: "542100",
    山南地区: "542200",
    日喀则地区: "542300",
    那曲地区: "542400",
    阿里地区: "542500",
    林芝地区: "542600",
    西安市: "610100",
    铜川市: "610200",
    宝鸡市: "610300",
    咸阳市: "610400",
    渭南市: "610500",
    延安市: "610600",
    汉中市: "610700",
    榆林市: "610800",
    安康市: "610900",
    商洛市: "611000",
    兰州市: "620100",
    嘉峪关市: "620200",
    金昌市: "620300",
    白银市: "620400",
    天水市: "620500",
    武威市: "620600",
    张掖市: "620700",
    平凉市: "620800",
    酒泉市: "620900",
    庆阳市: "621000",
    定西市: "621100",
    陇南市: "621200",
    临夏回族自治州: "622900",
    甘南藏族自治州: "623000",
    西宁市: "630100",
    海东地区: "632100",
    海北藏族自治州: "632200",
    黄南藏族自治州: "632300",
    海南藏族自治州: "632500",
    果洛藏族自治州: "632600",
    玉树藏族自治州: "632700",
    海西蒙古族藏族自治州: "632800",
    银川市: "640100",
    石嘴山市: "640200",
    吴忠市: "640300",
    固原市: "640400",
    中卫市: "640500",
    乌鲁木齐市: "650100",
    克拉玛依市: "650200",
    吐鲁番地区: "652100",
    哈密地区: "652200",
    昌吉回族自治州: "652300",
    博尔塔拉蒙古自治州: "652700",
    巴音郭楞蒙古自治州: "652800",
    阿克苏地区: "652900",
    克孜勒苏柯尔克孜自治州: "653000",
    喀什地区: "653100",
    和田地区: "653200",
    伊犁哈萨克自治州: "654000",
    塔城地区: "654200",
    阿勒泰地区: "654300",
    自治区直辖县级行政区划: "659000",
    台湾省: "710000",
    香港特别行政区: "810100",
    澳门特别行政区: "820000"
  };
   
    //国家名称中英文对应关系
 var nameMap = {
        'Singapore Rep.':'新加坡',
        'Dominican Rep.':'多米尼加共和国',
        'Palestine':'巴勒斯坦',
        'Bahamas':'巴哈马',
       'Afghanistan':'阿富汗',
       'Guinea-Bissau':'几内亚比绍',
       "Côte d'Ivoire":'科特迪瓦',
       'Angola':'安哥拉',
       'Albania':'阿尔巴尼亚',
       'United Arab Emirates':'阿联酋',
       'Argentina':'阿根廷',
       'Armenia':'亚美尼亚',
       'French Southern and Antarctic Lands':'法属南半球和南极领地',
       'Australia':'澳大利亚',
       'Austria':'奥地利',
       'Azerbaijan':'阿塞拜疆',
       'Burundi':'布隆迪',
       'Belgium':'比利时',
       'Benin':'贝宁',
       'Burkina Faso':'布基纳法索',
       'Bangladesh':'孟加拉国',
       'Bulgaria':'保加利亚',
       'Bosnia and Herz.':'波斯尼亚和黑塞哥维那',
       'Belarus':'白俄罗斯',
       'Belize':'伯利兹',
       'Bermuda':'百慕大',
       'Bolivia':'玻利维亚',
       'Brazil':'巴西',
       'Brunei':'文莱',
       'Bhutan':'不丹',
       'Botswana':'博茨瓦纳',
       'Central African Rep.':'中非',
       'Canada':'加拿大',
       'Switzerland':'瑞士',
       'Chile':'智利',
       'China':'中国',
       'Ivory Coast':'象牙海岸',
       'Cameroon':'喀麦隆',
       'Dem. Rep. Congo':'刚果民主共和国',
       'Congo':'刚果',
       'Colombia':'哥伦比亚',
       'Costa Rica':'哥斯达黎加',
       'Cuba':'古巴',
       'N. Cyprus':'北塞浦路斯',
       'Cyprus':'塞浦路斯',
       'Czech Rep.':'捷克',
       'Germany':'德国',
       'Djibouti':'吉布提',
       'Denmark':'丹麦',
       'Algeria':'阿尔及利亚',
       'Ecuador':'厄瓜多尔',
       'Egypt':'埃及',
       'Eritrea':'厄立特里亚',
       'Spain':'西班牙',
       'Estonia':'爱沙尼亚',
       'Ethiopia':'埃塞俄比亚',
       'Finland':'芬兰',
       'Fiji':'斐济',
       'Falkland Islands':'福克兰群岛',
       'France':'法国',
       'Gabon':'加蓬',
       'United Kingdom':'英国',
       'Georgia':'格鲁吉亚',
       'Ghana':'加纳',
       'Guinea':'几内亚',
       'Gambia':'冈比亚',
       'Eq. Guinea':'赤道几内亚',
       'Greece':'希腊',
       'Greenland':'格陵兰',
       'Guatemala':'危地马拉',
       'French Guiana':'法属圭亚那',
       'Guyana':'圭亚那',
       'Honduras':'洪都拉斯',
       'Croatia':'克罗地亚',
       'Haiti':'海地',
       'Hungary':'匈牙利',
       'Indonesia':'印度尼西亚',
       'India':'印度',
       'Ireland':'爱尔兰',
       'Iran':'伊朗',
       'Iraq':'伊拉克',
       'Iceland':'冰岛',
       'Israel':'以色列',
       'Italy':'意大利',
       'Jamaica':'牙买加',
       'Jordan':'约旦',
       'Japan':'日本',
       'Kazakhstan':'哈萨克斯坦',
       'Kenya':'肯尼亚',
       'Kyrgyzstan':'吉尔吉斯斯坦',
       'Cambodia':'柬埔寨',
       'Korea':'韩国',
       'Kosovo':'科索沃',
       'Kuwait':'科威特',
       'Lao PDR':'老挝',
       'Lebanon':'黎巴嫩',
       'Liberia':'利比里亚',
       'Libya':'利比亚',
       'Sri Lanka':'斯里兰卡',
       'Lesotho':'莱索托',
       'Lithuania':'立陶宛',
       'Luxembourg':'卢森堡',
       'Latvia':'拉脱维亚',
       'Morocco':'摩洛哥',
       'Moldova':'摩尔多瓦',
       'Madagascar':'马达加斯加',
       'Mexico':'墨西哥',
       'Macedonia':'马其顿',
       'Mali':'马里',
       'Myanmar':'缅甸',
       'Montenegro':'黑山',
       'Mongolia':'蒙古',
       'Mozambique':'莫桑比克',
       'Mauritania':'毛里塔尼亚',
       'Malawi':'马拉维',
       'Malaysia':'马来西亚',
       'Namibia':'纳米比亚',
       'New Caledonia':'新喀里多尼亚',
       'Niger':'尼日尔',
       'Nigeria':'尼日利亚',
       'Nicaragua':'尼加拉瓜',
       'Netherlands':'荷兰',
       'Norway':'挪威',
       'Nepal':'尼泊尔',
       'New Zealand':'新西兰',
       'Oman':'阿曼',
       'Pakistan':'巴基斯坦',
       'Panama':'巴拿马',
       'Guam':'关岛',
       'Peru':'秘鲁',
       'Philippines':'菲律宾',
       'Papua New Guinea':'巴布亚新几内亚',
       'Poland':'波兰',
       'Puerto Rico':'波多黎各',
       'Dem. Rep. Korea':'朝鲜',
       'Portugal':'葡萄牙',
       'Paraguay':'巴拉圭',
       'Qatar':'卡塔尔',
       'Romania':'罗马尼亚',
       'Russia':'俄罗斯',
       'Rwanda':'卢旺达',
       'W. Sahara':'西撒哈拉',
       'Saudi Arabia':'沙特阿拉伯',
       'Sudan':'苏丹',
       'S. Sudan':'南苏丹',
       'Senegal':'塞内加尔',
       'Solomon Is.':'所罗门群岛',
       'Sierra Leone':'塞拉利昂',
       'El Salvador':'萨尔瓦多',
       'Somaliland':'索马里兰',
       'Somalia':'索马里',
       'Serbia':'塞尔维亚',
       'Suriname':'苏里南',
       'Slovakia':'斯洛伐克',
       'Slovenia':'斯洛文尼亚',
       'Sweden':'瑞典',
       'Swaziland':'斯威士兰',
       'Syria':'叙利亚',
       'Chad':'乍得',
       'Togo':'多哥',
       'Thailand':'泰国',
       'Tajikistan':'塔吉克斯坦',
       'Turkmenistan':'土库曼斯坦',
       'Timor-Leste':'东帝汶',
       'Trinidad and Tobago':'特里尼达和多巴哥',
       'Tunisia':'突尼斯',
       'Turkey':'土耳其',
       'Tanzania':'坦桑尼亚',
       'Uganda':'乌干达',
       'Ukraine':'乌克兰',
       'Uruguay':'乌拉圭',
       'United States':'美国',
       'Uzbekistan':'乌兹别克斯坦',
       'Venezuela':'委内瑞拉',
       'Vietnam':'越南',
       'Vanuatu':'瓦努阿图共和国',
       'West Bank':'西岸',
       'Yemen':'也门',
       'South Africa':'南非',
       'Zambia':'赞比亚',
       'Zimbabwe':'津巴布韦',
       'Comoros':'科摩罗',
       'Cape Verde':'佛得角',
       'Mauritius':'毛里求斯',
       'Palau':'帕劳共和国',
     }

export default {provinces,cityMap,nameMap}