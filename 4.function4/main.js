//判断字符和空格有多少次隔断就行
var countSegments = function(s) {

    var status=0, s=s+' ' ,count=0, len=s.length

    for(var i=0;i<len;i++){
        if(s[i]!=' '){
            status=1
        }else{ 
           if(status==1) count+=1
            status=0
        }
    }

    return count;
}
