var Tree = (function () {
    function Tree() {
    }
    Tree.prototype.draw = function (line) {
        var space = " ";
        var spacefin;
        var star = "*";
        var starfin;
        var linefin;
        for (var i = 1; i <= line; i++) {
            spacefin = ""; //初始化空格数
            starfin = ""; //初始化星号数
            linefin = "";
            for (var j = 0; j <= (line - (i - 1)); j++) {
                spacefin = spacefin + space;
            }
            for (var k = 0; k < (i * 2 - 1); k++) {
                starfin = starfin + star;
            }
            linefin = spacefin + starfin;
            console.log(linefin);
        }
    };
    return Tree;
}());
var line = process.argv[2]; //给line赋值
var tree = new Tree(); //调用tree里的draw来打印树
tree.draw(+line);
