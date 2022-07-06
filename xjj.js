// [rule: 小姐姐]
// [rule: 扭一扭]
// [rule: 抖一抖]
function main() {
    var url = "http://api.qemao.com/api/douyin/"
    red = request({
        url: url,
        dataType: "location",
    })
    if (red.indexOf("./") != -1) {
        url = url + red.replace("./", "")
        sendVideo(url)
    }
}
main()
