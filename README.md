# Emmet CSS Snippets for Sublime Text 2

**Update:** Sass functions autocompletion has been moved to [Syntax Highlighting for Sass](https://github.com/P233/Syntax-highlighting-for-Sass). This is in order to increase the accuracy. If you miss this feature you can manually download [the file](https://github.com/P233/Emmet-Css-Snippets-for-Sublime-Text-2/blob/gh-pages/Sass_Functions.sublime-completions) and place it into the User folder of Sublime Text. I do apologise for the inconvenience!

Zen CSS (now has been updated to [Emmet](http://docs.emmet.io)) is a great tool to increase CSS workflow, but the property aliases are not easy to remember. Therefore I turned Zen CSS syntaxes into sublime text 2 snippets, so we can use Zen CSS through autocomplete hints. It can work with CSS, LESS, SCSS and Sass. I also made a few changes and added some additional snippets which you will see from below.

If you have any problems with this plugin or suggestions for improvement, please feel free to [fill an issue](https://github.com/P233/Emmet-CSS-Snippets-for-Sublime-Text-2/issues).

*This repo has been updated accordingly from "Zen CSS Snippets" to "Emmet CSS Snippets".*

## Installation
Strongly recommend to install this repo through Package Control.


## Explanation
1. If snippet contains CSS value, it will automatically insert a new line after semicolon. However, if you write a CSS property before existing one, it will also insert a needless new line in the middle. To deal with this problem, you may try to write CSS properties top-down and use the [CSScomb tool](http://CSScomb.com) to rearrange the order.

2. If snippet contains "{ }" , it will automatically insert a new line after "}". So it's easier to make the cursor jump out of '{ }' by pressing the <kbd>Command</kbd> + <kbd>Down_Arrow</kbd> keys or sometimes the <kbd>Tab</kbd> key, and start to write a new piece of CSS.

3. Because of the fuzzy search function of Sublime Text 2, it is no need to type the "colon" of property aliases or the full spelling of *some* aliases. Please see the simplified aliases list in [Snippets List](http://p233.github.com/Emmet-Css-Snippets-for-Sublime-Text-2/).

4. If property alias is only one character in Emmet, now it should be the first three characters of the property it represented (e.g., "mar" => "margin:", wid" => "width:"). In addition, the alias of "widows" property is full spelling now. This is in order to increase the accuracy of autocomplete hints. There are also some other changes, please see the [Snippets List](http://p233.github.com/Emmet-Css-Snippets-for-Sublime-Text-2/) for more details.

5. Property alias cannot contain symbols in Sublime Text 2 snippets. Here are the changes：

	```
	imp    =>    @import url()
	mp     =>    @media print {}
	ffa    =>    @font-face {}
	ffa+   =>    @font-face {}
	ipt    =>    !important
	*For this reason, property alias contains "+" need to be selected manually in the autocompelte pupup window.
	```

6. You can move cursor position by pressing the Tab key in some snippets. For instance, once you finished editing comment, press the <kbd>Tab</kbd> key, cursor will jump out of the comment line and advance to a new line. Pressing the <kbd>Shift</kbd> + <kbd>Tab</kbd> keys will move the cursor backwards.

7. Added vendor prefixes for some properties. 

8. **Added additional snippets, please see the [Snippets List](http://p233.github.com/Emmet-Css-Snippets-for-Sublime-Text-2/) for more details.**

9. Added Sass functions autocomplete hints, for more information please see [the official Sass Functions page](http://sass-lang.com/docs/yardoc/Sass/Script/Functions.html).

## Sublime Text 2 Key Bindings
Here are a few key bindings may help you to write CSS conveniently. Copy and paste the following code to "Key Bindings - User" of Preferences menu.

<br>
Pressing the <kbd>{</kbd> key to input "{ }" with a new line with indent inside and a new line after "}"

```
{ "keys": ["{"], "command": "insert_snippet", "args": {"contents": " {\n\t$0\n}\n"}, "context":
    [
        { "key": "setting.auto_match_enabled", "operator": "equal", "operand": true },
        { "key": "selection_empty", "operator": "equal", "operand": true, "match_all": true },
        { "key": "following_text", "operator": "regex_contains", "operand": "^(?:\t| |\\)|]|\\}|$)", "match_all": true }
    ]
},
{ "keys": ["{"], "command": "insert_snippet", "args": {"contents": " {\n\t${0:$SELECTION}\n}\n"}, "context":
    [
        { "key": "setting.auto_match_enabled", "operator": "equal", "operand": true },
        { "key": "selection_empty", "operator": "equal", "operand": false, "match_all": true }
    ]
},
```

Pressing the <kbd>:</kbd> key to input colon with a space behind

```
{ "keys": [":"], "command": "insert", "args": {"characters": ": "} },
```

Pressing the <kbd>;</kbd> key to input semicolon with a new line behind

```
{ "keys": [";"], "command": "insert", "args": {"characters": ";\n"} },
```

Pressing the <kbd>Ctrl</kbd> + <kbd>;</kbd> keys to input semicolon without a new line behind

```
{ "keys": ["ctrl+;"], "command": "insert", "args": {"characters": ";"} },
```

## Credit
**Emmet** -- http://docs.emmet.io

**Eric Meyer's Reset CSS 2.0** -- http://meyerweb.com/eric/tools/CSS/reset/

<br/><br/>

---

<br/><br/>
# Emmet CSS Snippets for Sublime Text 2 中文说明

**最近更新:** 增加了 Sass 函数自动完成提示，更多信息请查看 [Sass 函数列表](http://sass-lang.com/docs/yardoc/Sass/Script/Functions.html)

Zen CSS（已升级为 [Emmet](http://docs.emmet.io)）可以显著提高 CSS 的书写速度，但是缩写比较难记、也没有提示。于是通过 Sublime Text 2 的自定义 snippets 功能将其整理为自动补完，兼容 CSS，LESS，SCSS 以及 Sass。同时做了一些修改，添加了额外的 snippets 等等。

如果在使用中遇到任何问题或修改建议, 请 [填写 issue](https://github.com/P233/Emmet-CSS-Snippets-for-Sublime-Text-2/issues)

## 安装
强烈建议您通过 Package Control 安装


## 说明
1. 包含 CSS 值的 snippet 都会在“分号”后自动换行，但如果在几个属性之间插入 CSS 属性，也会在后面添加多余的一行。建议自上而下书写 CSS 属性，然后用 [CSScomb 工具](http://CSScomb.com) 重新排列顺序

2. 如果 snippet 中包含 "{ }" , 会在 "}" 后自动换行，通过 <kbd>Command</kbd> + <kbd>Down_Arrow</kbd> 快捷键（有时 <kbd>Tab</kbd> 键）让光标跳出 "{ }"，然后开始书写新的一段 CSS

3. 基于 Sublime Text 2 的模糊搜索功能，不需要输入缩写中的“冒号”，部分缩写可以不用输入完整拼写。请查看 [Snippets List](http://p233.github.com/Emmet-Css-Snippets-for-Sublime-Text-2/) 中的简化缩写列表

4. Emmet 中只用到一个字母的缩写改为使用前三个字母作为缩写(例如, "mar" => "margin:", wid" => "width:")，widows 属性使用完整拼写，这样做是为了提高自动提示的准确度。更多变更请查看 [Snippets List](http://p233.github.com/Emmet-Css-Snippets-for-Sublime-Text-2/)

5. 缩写不能包含符号，所以做出以下更改：

	```
	imp    =>    @import url()
	mp     =>    @media print {}
	ffa    =>    @font-face {}
	ffa+   =>    @font-face {}
	ipt    =>    !important
	*同理，包含 "+" 的缩写不能直接输入，需要手动选择
	```

6. 某些 snippets 中可用 <kbd>Tab</kbd> 键切换光标位置。例如，编辑完注释后按下 <kbd>Tab</kbd> 键，光标跳出注释进入新的一行。按下 <kbd>Shift</kbd> + <kbd>Tab</kbd> 组合键，光标返回上一位置

7. 部分 CSS 属性添加了浏览器前缀

8. **添加了额外的 snippets, 详情请查看 [Snippets List](http://p233.github.com/Emmet-Css-Snippets-for-Sublime-Text-2/)**

9. 增加了 Sass 函数自动完成提示，更多信息请查看 [Sass 函数列表](http://sass-lang.com/docs/yardoc/Sass/Script/Functions.html)

## Sublime Text 2 按键设置
几个按键设置也许能让书写 CSS 更方便，复制以下代码到设置菜单中的 “Key Bindings - User” 中

<br>
输入 "{" + 自动换行 + 缩进 + "}" + 自动换行

```
{ "keys": ["{"], "command": "insert_snippet", "args": {"contents": " {\n\t$0\n}\n"}, "context":
    [
        { "key": "setting.auto_match_enabled", "operator": "equal", "operand": true },
        { "key": "selection_empty", "operator": "equal", "operand": true, "match_all": true },
        { "key": "following_text", "operator": "regex_contains", "operand": "^(?:\t| |\\)|]|\\}|$)", "match_all": true }
    ]
},
{ "keys": ["{"], "command": "insert_snippet", "args": {"contents": " {\n\t${0:$SELECTION}\n}\n"}, "context":
    [
        { "key": "setting.auto_match_enabled", "operator": "equal", "operand": true },
        { "key": "selection_empty", "operator": "equal", "operand": false, "match_all": true }
    ]
},
```

输入 ":" + 自动空格

```
{ "keys": [":"], "command": "insert", "args": {"characters": ": "} },
```

输入 ";" + 自动换行

```
{ "keys": [";"], "command": "insert", "args": {"characters": ";\n"} },
```

"Ctrl" + ";" 组合键输入 ";" 无自动换行

```
{ "keys": ["ctrl+;"], "command": "insert", "args": {"characters": ";"} },
```

## 感谢
**Emmet** -- http://docs.emmet.io

**Eric Meyer's Reset CSS 2.0** -- http://meyerweb.com/eric/tools/CSS/reset/