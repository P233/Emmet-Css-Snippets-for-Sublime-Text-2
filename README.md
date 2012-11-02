# Zen Css Snippets for Sublime Text 2

Zen Css is a great tool to increase css input speed, but the property aliases are not easy to remeber. Fortunately, Sublime Text 2 has a very powerful snippets feature can turn these syntaxes into autocomplete hints. So, I organized Zen Css syntaxes into Sublime Text 2 snippets. It can work with Css, Less, Scss and Sass. I also made a few changes and added some additional snippets which you will see from below. Now it significantly increased my coding speed. Hope you will like it.

I would be very happy to hear your feedbacks and suggestions for improvement.

<br/>
## Zen Css
If you haven't used Zen Css before, please check the link below:

http://code.google.com/p/zen-coding/wiki/ZenCSSPropertiesEn


<br/>
## Installation
Rename the downloaded folder as you like, and then move it into the Packages folder of Subliem Text 2


<br/>
## Explanation
##### 1. The snippets will automatically add a carriage return after autocomplete.

##### 2. If the alias is only one character in Zen Css, now it should be the first three characters of the property it represented. In addition, the alias of widows property is full spelling now. This is in order to increase the accuracy of autocomplete hints.
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

##### 3. Snippets canot begain with a symbol. Here are the changes：
* <del>@i</del> imp => @import url()
* <del>@m</del> mp => @media print {}
* <del>@f</del> ffa => @font-face {}
* <del>!</del> imt => !important

For this reason, alias contains "+" need to be selected manually in the autocompelte pupup window.

##### 4. Removed all properties begin with prefix -webkit- and -moz-
* <del>bdim   =>   -moz-border-image:</del>
* <del>bdim+  =>   -moz-border-image:url() 0 repeat</del>
* <del>bdiw   =>   -webkit-border-image:</del>
* <del>bdiw+  =>   -moz-border-image:url() 0 repeat</del>
* <del>bdrmw  =>   -moz-border-radius:</del>
* <del>bdrsw  =>   -webkit-border-radius: </del>
* <del>bxshm  =>   -moz-box-shadow:</del>
* <del>bxshm+ =>   -moz-box-shadow: 0 0 0 #000</del>
* <del>bxshw  =>   -webkit-box-shadow:</del>
* <del>bxshw+ =>   -webkit-box-shadow: 0 0 0 #000</del>

##### 5. In some snippets, pressing Tab key can move cursor position. For instance, once you finished editing comment, press the Tab key, cursor will jump out of the comment line and advance to a new line. Pressing Shift + Tab will move the cursor backwards.

##### 6. The remaining snippets have no different from Zen Css.

<br/>
## Supplements
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
##### * There are two versions of pseudo class snippets in Less, Scss and Sass. In the first version, selector is replaced with "&". In the second version, it is better to type out selector after triggering snippet.


<br/>
## Sublime Text 2 Key Bindings
Here are a few key bindings may help you to write css conveniently. Just copy and paste the following code to “Preferences menu => Key Bindings - User”
##### 1. input "{}" with auto carriage return and indent inside <br/>
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
##### 2. input ":" with a space behind<br/>
```
{ "keys": [":"], "command": "insert", "args": {"characters": ": "} },
```
##### 3. input ";" with auto carriage return <br/>
```
{ "keys": [";"], "command": "insert", "args": {"characters": ";\n"} },
```
###### "Ctrl + ;" input ";" without auto carriage return
```
{ "keys": ["ctrl+;"], "command": "insert", "args": {"characters": ";"} },
```


<br/>
## Credit
Zen Css -- http://code.google.com/p/zen-coding/wiki/ZenCSSPropertiesEn

Eric Meyer's Reset CSS 2.0 -- http://meyerweb.com/eric/tools/css/reset/

<br/><br/>

---

<br/><br/>
# Zen Css Snippets for Sublime Text 2

Zen Css 可以显著提高 css 的书写速度，但是比较难记、也没有提示，好在 Sublime Text 2 的自定义 snippets  功能非常强大，可以将其法将其转化为自动补完功能，因此整理了一下，兼容 Css，Less，Scss 以及 Sass。同时做了一些修改，比如补完后自动换行，Tab 键切换光标位置等等。

疏漏、错误的地方请大家多提醒，好建议也请一起交流，QQ: 40132147，谢谢关注！！


<br/>
## Zen Css
如果还未用过 Zen Css，请先查看下面的链接：

http://code.google.com/p/zen-coding/wiki/ZenCSSPropertiesEn


<br/>
## 安装
将下载的文件夹重命名，然后移动到 Sublime Text 2 的 Packages 文件夹下即可


<br/>
## 说明
##### 1. 自动补完后自动换行

##### 2. Zen Css 中只用到一个字母的缩写改为使用前三个字母作为缩写，widows 属性使用完整拼写（这样做是为了提高自动提示的准确度）：
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

##### 4. 去掉了所有包含 -webkit- 与 -moz- 前缀的属性
* <del>bdim   =>   -moz-border-image:</del>
* <del>bdim+  =>   -moz-border-image:url() 0 repeat</del>
* <del>bdiw   =>   -webkit-border-image:</del>
* <del>bdiw+  =>   -moz-border-image:url() 0 repeat</del>
* <del>bdrmw  =>   -moz-border-radius:</del>
* <del>bdrsw  =>   -webkit-border-radius: </del>
* <del>bxshm  =>   -moz-box-shadow:</del>
* <del>bxshm+ =>   -moz-box-shadow: 0 0 0 #000</del>
* <del>bxshw  =>   -webkit-box-shadow:</del>
* <del>bxshw+ =>   -webkit-box-shadow: 0 0 0 #000</del>

##### 5. 部分 snippets 可用 Tab 键切换光标位置，例如编辑完注释后，按下 Tab 键，光标跳出注释进入新的一行。Shift + Tab 返回上一位置。

##### 6. 其他与 Zen Css 一致，如果对上述修改有不同想法，我们可以一起交流


<br/>
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
##### * 在 Less, Scss 和 Sass 中，伪类的 snippets 各有两个版本：第一个版本中选择器被 "&" 替换；第二个版本，请先激活 snippet 再输入选择器。


<br/>
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


<br/>
## Credit - 感谢
Zen Css -- http://code.google.com/p/zen-coding/wiki/ZenCSSPropertiesEn

Eric Meyer's Reset CSS 2.0 -- http://meyerweb.com/eric/tools/css/reset/