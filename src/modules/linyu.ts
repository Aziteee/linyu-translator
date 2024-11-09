export class Linyu {
  /* 基础淋语词库 */
  public static readonly linyuBase = new Map<string, string | string[]>([
    // 多字词语
    ["笑死", "孝鼠"],
    ["真的?是", "珍素"],
    ["大胆", "Big胆"],
    ["喜欢", "洗翻"],
    ["蠢直", "春芝"],
    ["姐姐", "解解"],
    ["得到|获得", "阴到"],
    ["nobody cares|[没|无]人在意", "nbcs"],
    ["逼飞奶炸", "bfnz"],
    ["蔡依林", ["淋淋", "脚淋"]],
    ["天[哪|啊]", "天啦噜"],
    ["同性恋", "通讯录"],
    ["几把|鸡巴", "乌干达"],
    ["孩子", "孩柱"],
    ["样子", "样柱"],
    ["停止", "婷芷"],
    ["天才", "地才"],
    ["美人", "花蝴蝶"],
    ["丑[得|的|地]?要?死", "丑Die"],
    ["盯上", "锁定"],
    ["聆听", "淋听"],
    ["足控", "甜椒婆"],
    ["nmsl|你妈死了", "尼美舒利"],

    // 语气词
    ["了", "惹"],
    ["鼠惹", "鼠了"], // 校正
    ["嘻", "吸"],
    ["呵+[！|\!]", "厚！"],
    ["啊+[！|\!]", "厚！"],
    ["啊+。?$", "厚"],
    ["哦", "厚"],
    ["吗[？|\?]", "厚？"],

    // 称谓
    ["兄弟", "姐妹"],
    ["xdm|兄弟们", "姐妹们"],

    // 一些单字
    ["哭", "Cry"],
    ["死", "鼠"],
    ["是", "素"],
    ["停", "婷"],
    ["谢", "靴"],
    ["心", "熏"],
    ["我", "本可"],
    // ["逼", ["β", "贝塔"]]
  ]);

  /* 其他淋语词库 */

  // 王者淋耀词库
  public static readonly linyuWzry = new Map<string, string | string[]>([
    ["杨玉环", ["李华", "你华"]],
    ["貂蝉", "淋蝉"],
    ["西施", ["拉客妹", "吸虱"]],
    ["王昭君", "鸡菌"],
    ["(不知)?火舞", "东瀛女特务"],
    ["(上官)?婉儿", ["蒜姐", "飞天婆"]],
    ["武则天", "自控婆"],
    ["米莱迪", ["超生婆", "下蛋婆"]],
    ["安琪拉", "安嫔"],
    ["妲己", "狐臭女"],
    ["甄姬", "泔水婆"],
    ["公孙离", "驴姐"],
    ["小乔", "矮子乔"],
    ["沈梦溪", "阴猫"],
    ["妓芈", "妓芈"],
    ["孙尚香", "滚地婆"],
    ["虞姬", "🐟🐔"],
    ["艾琳", "蚊子婆"],
    ["伽罗", "长臂猿"],
    ["花木兰", "花铁t"],
    ["夏洛特", ["夏铁t", "西洋女特务"]],
    ["孙膑", "孙答应"],
    ["(百里)?守约", "阴约"],
    ["诸葛亮", "母亮"],
    ["韩信", "阴信"],
    ["李白", "母白"],
    ["元歌", "阴歌"],
    ["扁鹊", "下毒婆"],
    ["世隐", "明公公"],
    ["狄仁杰", "狄公公"],
    ["云缨", "孕婴"],
    ["司空震", "司空daddy"],
    ["孙策", "孙笨"],
    ["李信", "阴信"],
    ["暃", "母妃"],
    ["孙悟空|猴子", "阴🐒"],
    ["曜", ["臭脚曜", "🐭曜"]],
  ]);

  // 淋神词库
  public static readonly linyuGenshin = new Map<string, string | string[]>([
    ["(珊瑚宫)?心海", ["水母婆", "我❤"]],
    ["可莉", "炸弹婆"],
    ["七七", "僵尸婆"],
    ["夜兰", "我腋"],
  ]);

  // 街头霸淋词库
  public static readonly linyuStreetFighter = new Map<string, string | string[]>([
    ["春丽","春淋女士"],
    ["阿鬼", "我鬼"],
    ["曼侬", "我侬"],
    ["嘉米", "我咪"],
    ["维嘉", "维嘉大妈"],

    ["影罗", "阴罗"],
  ])

  // 瓦罗淋特词库
  public static readonly linyuValorant = new Map<string, string | string[]>([
     ["蝰蛇", "我🐍"],
     ["暮蝶", "我🦋"],
     ["钢索", "我🔒"],
     ["黑梦", "我梦"],
     ["奇乐", "🐔婆"],
  ])

  public static readonly linyuMap = new Map<string, string | string[]>([
    ...Linyu.linyuBase,
    ...Linyu.linyuWzry,
    ...Linyu.linyuGenshin,
    ...Linyu.linyuStreetFighter,
  ]);

  public static translate(text: string): string {
    for (const [key, value] of Linyu.linyuMap) {
      const regex = new RegExp(key, "g");

      let replaceValue: string;
      if (value instanceof Array) {
        replaceValue = value[Math.floor(Math.random() * value.length)];
      } else {
        replaceValue = value;
      }

      text = text.replace(regex, replaceValue);
    }
    return text;
  }
}
