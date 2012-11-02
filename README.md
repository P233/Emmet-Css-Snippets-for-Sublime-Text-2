# Zen Css Snippets for Sublime Text 2

Zen Css 可以显著提高 css 的书写速度，但是比较难记、也没有提示，于是按照 Sublime Text 2 Snippets 的写法将其整理为自动补完功能，兼容 css，less，scss 以及 sass。同时做了一点修改，比如补完后自动换行，tab 键切换光标位置等等。

疏漏、错误的地方请大家多提醒，好建议也请一起交流，QQ: 40132147，谢谢关注！！


<br/>
## Zen Css
如果还不了解 Zen Css，请先访问以下地址：

http://code.google.com/p/zen-coding/wiki/ZenCSSPropertiesEn


<br/>
## 安装
下载后，将文件夹移动到 Sublime Text 2 的 Packages 文件夹下即可


<br/>
## 说明
##### 1. 提示中的 “:” 只用于醒目，不必输入，补完后自动换行

##### 2. Zen Css 中只用到一个字母的改为使用前三个字母，widows 属性使用完整拼写（只使用一个字母提示不够准确）：
* <del>t</del> top => top:
* <del>r</del> rig => right:
* <del>b</del> bot => bottom:
* <del>l</del> lef => left:
* <del>z</del> zin => z-index:
* <del>d</del> dis => display:
* <del>v</del> vis => visibility:
* <del>m</del> mar => margin:
* <del>p</del> pad => padding:
* <del>w</del> wid => width:
* <del>h</del> hei => height:
* <del>o</del> out => outline:
* <del>c</del> col => color:
* <del>q</del> quo => quotes:
* <del>f</del> fon => font:
* <del>f+</del> fon+ => font: 1em Arial,sans-serif;
* <del>wid</del> widows => widows

##### 3. 以符号开头的 snippets 无效，所以修改为：
* <del>@i</del> imp => @import url()
* <del>@m</del> mp => @media print {}
* <del>@f</del> ffa => @font-face {}
* <del>!</del> imt => !important

同理，包含“+”的不能直接输入，需要手动选择

##### 4. 去掉了包含 -webkit- 与 -moz- 前缀的属性

##### 5. 部分 snippets 可用 tab 键切换光标位置，例如编辑完注释后，按下 tab 键，光标跳出注释进入新的一行

##### 6. 其他与 Zen Css 一致，如果对上述修改有不同想法，我们可以一起交流


<br/><br/>
## Supplements - 补充内容
### General

	act   =>   &:active {}

	aft   =>   &:after { content: ""; }

	bef   =>   &:before { content: ""; }

	com   =>   /* --------- comment -----------*/

	fc    =>   &:first-child {}

	foc   =>   &:focus {}

	hov   =>   &:hover {}

	hsl   =>   hsl(359, 100%, 100%)
	
	hsla  =>   hsla(359, 100%, 100%, 0.5)

	in    =>   inherit;

	lc    =>   &:last-child {}

	nth   =>   &:nth-child() {}

	reset =>   Eric Meyer's Reset CSS 2.0

	rgb   =>   rgb(255, 255, 255)
	
	rgba  =>   rgba(255, 255, 255, 0.5)
	
### Scss / Sass

	ext   =>   @extend

	inc   =>   @include

	mix   =>   @mixin
##### 1. 以上包含 “&” 的在 css 下，先输入 snippet 再输入选择器；
##### 2. 更多 css3 自动补完正在整理中，有兴趣大家一起交流


<br/><br/>
## Sublime Text 2 Key Bindings
分享几个按键设置，复制代码到 设置菜单中的 “Key Bindings - User” 中即可
##### 1. "{" + 自动换行 + 缩进 + "}"<br/>
```
{ "keys": ["{"], "command": "insert_snippet", "args": {"contents": " {\n\t$0\n}"}, "c"ontext":
    [
        { "key": "setting.auto_match_enabled", "operator": "equal", "operand": true },
        { "key": "selection_empty", "operator": "equal", "operand": true, "match_all": true },
        { "key": "following_text", "operator": "regex_contains", "operand": "^(?:\t| |\\)|]|\\}|$)", "match_all": true }
    ]
},
{ "keys": ["{"], "command": "insert_snippet", "args": {"contents": " {\n\t${0:$SELECTION}\n}"}, "context":
    [
        { "key": "setting.auto_match_enabled", "operator": "equal", "operand": true },
        { "key": "selection_empty", "operator": "equal", "operand": false, "match_all": true }
    ]
},
```
##### 2. ":" + 自动空格 <br/>
```
{ "keys": [":"], "command": "insert", "args": {"characters": ": "} },
```
##### 3. ";" + 自动换行 <br/>
```
{ "keys": [";"], "command": "insert", "args": {"characters": ";\n"} },
```
###### "Ctrl + ;" 组合键取消自动换行
```
{ "keys": ["ctrl+;"], "command": "insert", "args": {"characters": ";"} },
```


<br/><br/>
## Credit - 感谢
Zen Css -- http://code.google.com/p/zen-coding/wiki/ZenCSSPropertiesEn

Eric Meyer's Reset CSS 2.0 -- http://meyerweb.com/eric/tools/css/reset/