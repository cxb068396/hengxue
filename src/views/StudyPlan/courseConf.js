const AP_COURSE = [
  {
    value: "艺术",
    label: "艺术",
    children: [
      {
        value: "艺术史",
        label: "艺术史"
      },
      {
        value: "音乐理论",
        label: "音乐理论"
      },
      {
        value: "工作室艺术-2D设计",
        label: "工作室艺术-2D设计"
      },
      {
        value: "工作室艺术-3D设计",
        label: "工作室艺术-3D设计"
      },
      {
        value: "工作室艺术-绘画艺术",
        label: "工作室艺术-绘画艺术"
      }
    ]
  },
  {
    value: "英语",
    label: "英语",
    children: [
      {
        value: "英语语言与写作",
        label: "英语语言与写作"
      },
      {
        value: "英语文学与写作",
        label: "英语文学与写作"
      }
    ]
  },
  {
    value: "历史与社会科学",
    label: "历史与社会科学",
    children: [
      {
        value: "比较政府与政治",
        label: "比较政府与政治"
      },
      {
        value: "欧洲历史",
        label: "欧洲历史"
      },
      {
        value: "人文地理",
        label: "人文地理"
      },
      {
        value: "宏观经济学",
        label: "宏观经济学"
      },
      {
        value: "微观经济学",
        label: "微观经济学"
      },
      {
        value: "心理学",
        label: "心理学"
      },
      {
        value: "美国政府与政治",
        label: "美国政府与政治"
      },
      {
        value: "美国历史",
        label: "美国历史"
      },
      {
        value: "世界历史",
        label: "世界历史"
      }
    ]
  },
  {
    value: "数学与计算机科学",
    label: "数学与计算机科学",
    children: [
      {
        value: "微积分AB",
        label: "微积分AB"
      },
      {
        value: "微积分BC",
        label: "微积分BC"
      },
      {
        value: "计算机科学",
        label: "计算机科学"
      },
      {
        value: "统计学",
        label: "统计学"
      }
    ]
  },

  {
    value: "世界语言与文化",
    label: "世界语言与文化",
    children: [
      {
        value: "汉语语言文化",
        label: "汉语语言文化"
      },
      {
        value: "法语语言文化",
        label: "法语语言文化"
      },
      {
        value: "德语语言文化",
        label: "德语语言文化"
      },
      {
        value: "意大利语言文化",
        label: "意大利语言文化"
      },
      {
        value: "日语语言文化",
        label: "日语语言文化"
      },
      {
        value: "拉丁语",
        label: "拉丁语"
      },
      {
        value: "西班牙语言文化",
        label: "西班牙语言文化"
      },
      {
        value: "西班牙语文学与文化",
        label: "西班牙语文学与文化"
      }
    ]
  },

  {
    value: "科学",
    label: "科学",
    children: [
      {
        value: "生物",
        label: "生物"
      },
      {
        value: "化学",
        label: "化学"
      },
      {
        value: "环境科学",
        label: "环境科学"
      },
      {
        value: "物理1",
        label: "物理1"
      },
      {
        value: "物理2",
        label: "物理2"
      },
      {
        value: "物理C：电磁学",
        label: "物理C：电磁学"
      },
      {
        value: "物理C：力学",
        label: "物理C：力学"
      }
    ]
  }
];

const A_LEVEL_COURSE = [
  { nos: "1", beyond: "A-Level", value: "Accounting 会计学 ", label: "" },
  { nos: "2", beyond: "A-Level", value: "Archaeology 考古学 ", label: "" },
  { nos: "3", beyond: "A-Level", value: "Arts & Crafts 工艺品", label: "" },
  { nos: "4", beyond: "A-Level", value: "Art: Interior Design 艺术: 室内装修设计 ", label: "" },
  { nos: "5", beyond: "A-Level", value: "Art: Pottery 艺术：制陶", label: "" },
  { nos: "6", beyond: "A-Level", value: "Arabic 阿拉伯语 Art 艺术 ", label: "" },
  { nos: "7", beyond: "A-Level", value: "Art: Embroidery 艺术: 刺绣", label: "" },
  { nos: "8", beyond: "A-Level", value: "Art & Design 美术与设计 ", label: "" },
  { nos: "9", beyond: "A-Level", value: "History of Art 艺术史 ", label: "" },
  { nos: "10", beyond: "A-Level", value: "Ancient History 古代史", label: "" },
  { nos: "11", beyond: "A-Level", value: "Biology 生物 ", label: "" },
  { nos: "12", beyond: "A-Level", value: "Bengali 孟加拉语 ", label: "" },
  { nos: "13", beyond: "A-Level", value: "Business Studies 商学", label: "" },
  { nos: "14", beyond: "A-Level", value: "Business & Law 商业和法律", label: "" },
  { nos: "15", beyond: "A-Level", value: "Chinese 汉语", label: "" },
  { nos: "16", beyond: "A-Level", value: "Chemistry 化学 ", label: "" },
  { nos: "17", beyond: "A-Level", value: "Computing 电脑", label: "" },
  { nos: "18", beyond: "A-Level", value: "Classical civilization 古典文明 ", label: "" },
  { nos: "19", beyond: "A-Level", value: "Computer Science 计算机科学", label: "" },
  { nos: "20", beyond: "A-Level", value: "Classical Greek 古希腊语 ", label: "" },
  { nos: "21", beyond: "A-Level", value: "Communication Studies 交流及表达研究", label: "" },
  { nos: "22", beyond: "A-Level", value: "Drama 戏剧", label: "" },
  { nos: "23", beyond: "A-Level", value: "Dutch 荷兰语", label: "" },
  { nos: "24", beyond: "A-Level", value: "Dance 舞蹈", label: "" },
  { nos: "25", beyond: "A-Level", value: "Drawing & Painting 绘画", label: "" },
  { nos: "26", beyond: "A-Level", value: "Data/Word processing 数据/文字处理", label: "" },
  { nos: "27", beyond: "A-Level", value: "Electronics 电子学", label: "" },
  { nos: "28", beyond: "A-Level", value: "Economics 经济学 ", label: "" },
  { nos: "29", beyond: "A-Level", value: "English literature 英国文学", label: "" },
  { nos: "30", beyond: "A-Level", value: "English language 英语语言学 ", label: "" },
  { nos: "31", beyond: "A-Level", value: "Europe History 欧洲史", label: "" },
  { nos: "32", beyond: "A-Level", value: "Environmental Studies 环境学 ", label: "" },
  { nos: "33", beyond: "A-Level", value: "Economic and social history 经济和社会史", label: "" },
  { nos: "34", beyond: "A-Level", value: "European Studies 欧洲研究 ", label: "" },
  { nos: "35", beyond: "A-Level", value: "Economics and public affairs 经济学和公共事务", label: "" },
  { nos: "36", beyond: "A-Level", value: "French 法语 Film studies电影研究", label: "" },
  { nos: "37", beyond: "A-Level", value: "Fashion and textiles时装和纺织品学", label: "" },
  { nos: "38", beyond: "A-Level", value: "Further mathematics进阶数学", label: "" },
  { nos: "39", beyond: "A-Level", value: "Geography 地理", label: "" },
  { nos: "40", beyond: "A-Level", value: "Greek 希腊语(古代和现代)", label: "" },
  { nos: "41", beyond: "A-Level", value: "Geology 地质学", label: "" },
  { nos: "42", beyond: "A-Level", value: "German 德语", label: "" },
  { nos: "43", beyond: "A-Level", value: "General Studies 通识学(一般研究)", label: "" },
  { nos: "44", beyond: "A-Level", value: "General Principles of English Law英国法律基本原则", label: "" },
  { nos: "45", beyond: "A-Level", value: "Government & politics 政府与政治", label: "" },
  { nos: "46", beyond: "A-Level", value: "History of Art 美术史 ", label: "" },
  { nos: "47", beyond: "A-Level", value: "History 历史 ", label: "" },
  { nos: "48", beyond: "A-Level", value: "Human biology 人类生物学", label: "" },
  { nos: "49", beyond: "A-Level", value: "Home economics 国内经济学 ", label: "" },
  { nos: "50", beyond: "A-Level", value: "Human Physiology 人体生理学", label: "" },
  { nos: "51", beyond: "A-Level", value: "I Italian 意大利语 ", label: "" },
  { nos: "52", beyond: "A-Level", value: "Industrial Design 工业设计", label: "" },
  { nos: "53", beyond: "A-Level", value: "Instrumental Music 器乐 ", label: "" },
  { nos: "54", beyond: "A-Level", value: "Information Technology 信息技术", label: "" },
  { nos: "55", beyond: "A-Level", value: "Japanese 日本语", label: "" },
  { nos: "56", beyond: "A-Level", value: "Latin 拉丁语 ", label: "" },
  { nos: "57", beyond: "A-Level", value: "Law 法律 ", label: "" },
  { nos: "58", beyond: "A-Level", value: "Law and constitutional law 法律和宪法", label: "" },
  { nos: "59", beyond: "A-Level", value: "Modern Greek 现代希腊语 ", label: "" },
  { nos: "60", beyond: "A-Level", value: "Modern History 现代史", label: "" },
  { nos: "61", beyond: "A-Level", value: "Mathematics 数学 ", label: "" },
  { nos: "62", beyond: "A-Level", value: "Media studies 传媒学 ", label: "" },
  { nos: "63", beyond: "A-Level", value: "Mechanics 机械学", label: "" },
  { nos: "64", beyond: "A-Level", value: "Music 音乐 ", label: "" },
  { nos: "65", beyond: "A-Level", value: "Music technology 音乐技术", label: "" },
  { nos: "66", beyond: "A-Level", value: "Politics 政治学 ", label: "" },
  { nos: "67", beyond: "A-Level", value: "Philosophy 哲学 ", label: "" },
  { nos: "68", beyond: "A-Level", value: "Photography 摄影学", label: "" },
  { nos: "69", beyond: "A-Level", value: "Physics 物理 ", label: "" },
  { nos: "70", beyond: "A-Level", value: "Physical education 体育 ", label: "" },
  { nos: "71", beyond: "A-Level", value: "Psychology 心理学", label: "" },
  { nos: "72", beyond: "A-Level", value: "Public Affairs 公共事务 ", label: "" },
  { nos: "73", beyond: "A-Level", value: "Portuguese 葡萄牙语", label: "" },
  { nos: "74", beyond: "A-Level", value: "Performance Art 表演艺术 ", label: "" },
  { nos: "75", beyond: "A-Level", value: "Punjab 旁遮普语", label: "" },
  { nos: "76", beyond: "A-Level", value: "Religious studies 宗教学 ", label: "" },
  { nos: "77", beyond: "A-Level", value: "Russian 俄语", label: "" },
  { nos: "78", beyond: "A-Level", value: "Social biology 社会生物学 ", label: "" },
  { nos: "79", beyond: "A-Level", value: "Sociology 社会学", label: "" },
  { nos: "80", beyond: "A-Level", value: "Spanish 西班牙语 ", label: "" },
  { nos: "81", beyond: "A-Level", value: "Statistics 统计学", label: "" },
  { nos: "82", beyond: "A-Level", value: "Sports studies 运动学 ", label: "" },
  { nos: "83", beyond: "A-Level", value: "Social and Environmental Biology 社会及环境生物学", label: "" },
  { nos: "84", beyond: "A-Level", value: "Theology 神学 ", label: "" },
  { nos: "85", beyond: "A-Level", value: "Technology 技术 ", label: "" },
  { nos: "86", beyond: "A-Level", value: "Theatre Studies 戏剧学 ", label: "" },
  { nos: "87", beyond: "A-Level", value: "Turkish 土耳其语", label: "" },
  { nos: "88", beyond: "A-Level", value: "Urdu 乌尔都语", label: "" }
];

const IB_COURSE = [
  { nos: "119", beyond: "IB", value: "企业管理学SL", label: "" },
  { nos: "120", beyond: "IB", value: "经济学SL", label: "" },
  { nos: "121", beyond: "IB", value: "地理学SL", label: "" },
  { nos: "122", beyond: "IB", value: "历史SL", label: "" },
  { nos: "123", beyond: "IB", value: "全球社会中的信息科技SL", label: "" },
  { nos: "124", beyond: "IB", value: "伊斯兰历史SL", label: "" },
  { nos: "125", beyond: "IB", value: "哲学SL", label: "" },
  { nos: "126", beyond: "IB", value: "心理学SL", label: "" },
  { nos: "127", beyond: "IB", value: "社会SL", label: "" },
  { nos: "128", beyond: "IB", value: "文化人类学SL", label: "" },
  { nos: "129", beyond: "IB", value: "企业管理学HL", label: "" },
  { nos: "130", beyond: "IB", value: "经济学HL", label: "" },
  { nos: "131", beyond: "IB", value: "地理学HL", label: "" },
  { nos: "132", beyond: "IB", value: "历史HL", label: "" },
  { nos: "133", beyond: "IB", value: "全球社会中的信息科技HL", label: "" },
  { nos: "134", beyond: "IB", value: "伊斯兰历史HL", label: "" },
  { nos: "135", beyond: "IB", value: "哲学HL", label: "" },
  { nos: "136", beyond: "IB", value: "心理学HL", label: "" },
  { nos: "137", beyond: "IB", value: "社会HL", label: "" },
  { nos: "138", beyond: "IB", value: "文化人类学HL", label: "" },
  { nos: "139", beyond: "IB", value: "物理SL", label: "" },
  { nos: "140", beyond: "IB", value: "化学SL", label: "" },
  { nos: "141", beyond: "IB", value: "生物SL", label: "" },
  { nos: "142", beyond: "IB", value: "设计SL", label: "" },
  { nos: "143", beyond: "IB", value: "环境系统SL", label: "" },
  { nos: "144", beyond: "IB", value: "物理HL", label: "" },
  { nos: "145", beyond: "IB", value: "化学HL", label: "" },
  { nos: "146", beyond: "IB", value: "生物HL", label: "" },
  { nos: "147", beyond: "IB", value: "设计HL", label: "" },
  { nos: "148", beyond: "IB", value: "数学SL", label: "" },
  { nos: "149", beyond: "IB", value: "数学HL", label: "" },
  { nos: "150", beyond: "IB", value: "高等数学SL", label: "" },
  { nos: "151", beyond: "IB", value: "数学研究", label: "" },
  { nos: "152", beyond: "IB", value: "数学法", label: "" },
  { nos: "153", beyond: "IB", value: "计算机科学", label: "" },
  { nos: "154", beyond: "IB", value: "电影SL", label: "" },
  { nos: "155", beyond: "IB", value: "音乐SL", label: "" },
  { nos: "156", beyond: "IB", value: "戏剧SL", label: "" },
  { nos: "157", beyond: "IB", value: "视觉艺术SL", label: "" },
  { nos: "158", beyond: "IB", value: "电影HL", label: "" },
  { nos: "159", beyond: "IB", value: "音乐HL", label: "" },
  { nos: "160", beyond: "IB", value: "戏剧HL", label: "" },
  { nos: "161", beyond: "IB", value: "视觉艺术HL", label: "" }
];

const GAOKAO_COURSE = [
  { nos: "162", beyond: "高考", value: "义务教育	语文", label: "语文" },
  { nos: "163", beyond: "高考", value: "义务教育	数学", label: "数学" },
  { nos: "164", beyond: "高考", value: "义务教育	外语", label: "外语" },
  { nos: "165", beyond: "高考", value: "义务教育	思想政治", label: "思想政治" },
  { nos: "166", beyond: "高考", value: "义务教育	历史", label: "历史" },
  { nos: "167", beyond: "高考", value: "义务教育	地理", label: "地理" },
  { nos: "168", beyond: "高考", value: "义务教育	物理", label: "物理" },
  { nos: "169", beyond: "高考", value: "义务教育	化学", label: "化学" },
  { nos: "170", beyond: "高考", value: "义务教育	生物", label: "生物" },
  { nos: "171", beyond: "高考", value: "义务教育	体育", label: "体育" },
  { nos: "172", beyond: "高考", value: "义务教育	信息技术", label: "信息技术" },
  { nos: "173", beyond: "高考", value: "义务教育	通用技术", label: "通用技术" }
];

const province = [
  {
      "id": "110000",
      "name": "北京市"
  },
  {
      "id": "120000",
      "name": "天津市"
  },
  {
      "id": "130000",
      "name": "河北省"
  },
  {
      "id": "140000",
      "name": "山西省"
  },
  {
      "id": "150000",
      "name": "内蒙古自治区"
  },
  {
      "id": "210000",
      "name": "辽宁省"
  },
  {
      "id": "220000",
      "name": "吉林省"
  },
  {
      "id": "230000",
      "name": "黑龙江省"
  },
  {
      "id": "310000",
      "name": "上海市"
  },
  {
      "id": "320000",
      "name": "江苏省"
  },
  {
      "id": "330000",
      "name": "浙江省"
  },
  {
      "id": "340000",
      "name": "安徽省"
  },
  {
      "id": "350000",
      "name": "福建省"
  },
  {
      "id": "360000",
      "name": "江西省"
  },
  {
      "id": "370000",
      "name": "山东省"
  },
  {
      "id": "410000",
      "name": "河南省"
  },
  {
      "id": "420000",
      "name": "湖北省"
  },
  {
      "id": "430000",
      "name": "湖南省"
  },
  {
      "id": "440000",
      "name": "广东省"
  },
  {
      "id": "450000",
      "name": "广西壮族自治区"
  },
  {
      "id": "460000",
      "name": "海南省"
  },
  {
      "id": "500000",
      "name": "重庆市"
  },
  {
      "id": "510000",
      "name": "四川省"
  },
  {
      "id": "520000",
      "name": "贵州省"
  },
  {
      "id": "530000",
      "name": "云南省"
  },
  {
      "id": "540000",
      "name": "西藏自治区"
  },
  {
      "id": "610000",
      "name": "陕西省"
  },
  {
      "id": "620000",
      "name": "甘肃省"
  },
  {
      "id": "630000",
      "name": "青海省"
  },
  {
      "id": "640000",
      "name": "宁夏回族自治区"
  },
  {
      "id": "650000",
      "name": "新疆维吾尔自治区"
  },
  {
      "id": "710000",
      "name": "台湾省"
  },
  {
      "id": "810000",
      "name": "香港特别行政区"
  },
  {
      "id": "820000",
      "name": "澳门特别行政区"
  }
]

export { A_LEVEL_COURSE, AP_COURSE, IB_COURSE, GAOKAO_COURSE,province };
