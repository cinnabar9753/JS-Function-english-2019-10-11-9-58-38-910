function f1 (line){
	//字符串切分为数组
    let s=line.split("");
    let box = [];
        //symbols数组非字母：每一项元素是数组，由索引和索引所在的数据组成
        let symbols = [];
        for (let i = 0; i < 26; i++) {
            box[i] = "";
        }
        //box数组收集26个数据：每一个数据是字母或字母大小写的组合串或空串（初始化没有值）
        for (let i = 0; i < s.length; i++) {
            let code = s[i].charCodeAt();
            
            if (code >= 97 && code < 123) {//小写字母：97-122
                box[code - 97] += s[i];           
            } else if (code >= 65 && code < 91) {//大写字母65-90
                box[code - 65] += s[i];
            } else {//非字母
                symbols.push([i, s[i]]);
            }
        }
 
        let res = "";
        box.forEach(item => {
            res += item;
        })

        symbols.forEach(item => {
            res = res.slice(0, item[0]) + item[1] + res.slice(item[0]);
        })
        console.log(res);
}


f1('hello')
