# Snippets List

**This list is based on the offical [Cheat Sheet](http://docs.emmet.io/cheat-sheet/) of Emmet.**

* \* means the property alias is changed in order to increase the accuracy of autocomplete hints.

* \+ means this is an additional snippet.

* [Simplified alias] *This might be changed when adding new properties*

## Menu
* [Visual Formatting](#visual-formatting)
* [Margin & Padding](#margin--padding)
* [Box Sizing](#box-sizing)
* [Font](#font)
* [Text](#text)
* [Background](#background)
* [Color](#color)
* [Generated content](#generated-content)
* [Outline](#outline)
* [Table](#table)
* [Border](#border)
* [Lists](#lists)
* [Print](#print)
* [Others](#others)
* [Pseudo class](#-pseudo-class)
* [Scss & Sass](#-scss---sass)

## Visual Formatting
```
  pos        =>    position:;                         [ps]
  pos:s      =>    position:static;                   [ps:s]
  pos:a      =>    position:absolute;                 [ps:a]
  pos:r      =>    position:relative;                 [ps:r]
  pos:f      =>    position:fixed;                    [ps:f]

* top        =>    top:;
  t:a        =>    top:auto;

* rig        =>    right:;                            [ri]
  r:a        =>    right:auto;

* bot        =>    bottom:;
  b:a        =>    bottom:auto;

* lef        =>    left:;                             [le]
  l:a        =>    left:auto;

* zin        =>    z-index:;                          [zi]
  z:a        =>    z-index:auto;

  fl         =>    float:;
  fl:n       =>    float:none;
  fl:l       =>    float:left;
  fl:r       =>    float:right;

  cl         =>    clear:;
  cl:n       =>    clear:none;
  cl:l       =>    clear:left;
  cl:r       =>    clear:right;
  cl:b       =>    clear:both;

* dis        =>    display:;
  d:n        =>    display:none;
  d:b        =>    display:block;
  d:i        =>    display:inline;
  d:ib       =>    display:inline-block;
  d:li       =>    display:list-item;
  d:ri       =>    display:run-in;
  d:cp       =>    display:compact;
  d:tb       =>    display:table;
  d:itb      =>    display:inline-table;              [d:it]
  d:tbcp     =>    display:table-caption;             [d:tcp]
  d:tbcl     =>    display:table-column;              [d:cl]
  d:tbclg    =>    display:table-column-group;        [d:cg]
  d:tbhg     =>    display:table-header-group;        [d:hg]
  d:tbfg     =>    display:table-footer-group;        [d:fg]
  d:tbr      =>    display:table-row;                 [d:tr]
  d:tbrg     =>    display:table-row-group;           [d:trg]
  d:tbc      =>    display:table-cell;                [d:tc]
  d:rb       =>    display:ruby;
  d:rbb      =>    display:ruby-base;
  d:rbbg     =>    display:ruby-base-group;
  d:rbt      =>    display:ruby-text;
  d:rbtg     =>    display:ruby-text-group;

* vis        =>    visibility:;
  v:v        =>    visibility:visible;
  v:h        =>    visibility:hidden;
  v:c        =>    visibility:collapse;

  ov         =>    overflow:;
  ov:v       =>    overflow:visible;
  ov:h       =>    overflow:hidden;                   [o:h]
  ov:s       =>    overflow:scroll;
  ov:a       =>    overflow:auto;                     [o:a]

  ovx        =>    overflow-x:;                       [ox]
  ovx:v      =>    overflow-x:visible;                [ox:v]
  ovx:h      =>    overflow-x:hidden;                 [ox:h]
  ovx:s      =>    overflow-x:scroll;                 [ox:s]
  ovx:a      =>    overflow-x:auto;                   [ox:a]

  ovy        =>    overflow-y:;                       [oy]
  ovy:v      =>    overflow-y:visible;                [oy:v]
  ovy:h      =>    overflow-y:hidden;                 [oy:h]
  ovy:s      =>    overflow-y:scroll;                 [oy:s]
  ovy:a      =>    overflow-y:auto;                   [oy:v]

  ovs        =>    overflow-style:;
  ovs:a      =>    overflow-style:auto;               [os:a]
  ovs:s      =>    overflow-style:scrollbar;          [os:s]
  ovs:p      =>    overflow-style:panner;             [os:p]
  ovs:m      =>    overflow-style:move;               [os:m]
  ovs:mq     =>    overflow-style:marquee;            [os:q]

  zoo        =>    zoom:1;                            [zo]

  cp         =>    clip:;
  cp:a       =>    clip:auto;
  cp:r       =>    clip:rect();

  rz         =>    resize:;
  rz:n       =>    resize:none;                       [r:n]
  rz:b       =>    resize:both;
  rz:h       =>    resize:horizontal;                 [r:h]
  rz:v       =>    resize:vertical;                   [r:v]

  cur        =>    cursor:;
  cur:a      =>    cursor:auto;                       [cr:a]
  cur:d      =>    cursor:default;                    [cr:d]
  cur:c      =>    cursor:crosshair;                  [cr:c]
  cur:ha     =>    cursor:hand;                       [cr:ha]
  cur:he     =>    cursor:help;                       [cr:he]
  cur:m      =>    cursor:move;                       [cr:m]
  cur:p      =>    cursor:pointer;                    [cr:p]
  cur:t      =>    cursor:text;                       [cr:t]
```
**[Back to Top](#menu)**

## Margin & Padding
```
* mar        =>    margin:;
+ m:au       =>    margin: 0 auto;                    [m:u]

  mt         =>    margin-top:;
  mt:a       =>    margin-top:auto;

  mr         =>    margin-right:;
  mr:a       =>    margin-right:auto;

  mb         =>    margin-bottom:;
  mb:a       =>    margin-bottom:auto;

  ml         =>    margin-left:;
  ml:a       =>    margin-left:auto;

* pad        =>    padding:;
  pt         =>    padding-top:;
  pr         =>    padding-right:;
  pb         =>    padding-bottom:;
  pl         =>    padding-left:;
```
**[Back to Top](#menu)**

## Box Sizing
```
  bxz        =>    box-sizing:;
  bxz:cb     =>    box-sizing:content-box;            [bz:cb]
  bxz:bb     =>    box-sizing:border-box;             [bz:bb]

  bxsh       =>    box-shadow:;                       [bsh]
  bxsh:n     =>    box-shadow:none;                   [bsh:n]
+ bxsh+      =>    box-shadow:hoff voff radius color; [bsh+]

* wid        =>    width:;                            [wd]
  w:a        =>    width:auto;

* hei        =>    height:;                           [he]
  h:a        =>    height:auto;

  maw        =>    max-width:;
  maw:n      =>    max-width:none;

  mah        =>    max-height:;
  mah:n      =>    max-height:none;

  miw        =>    min-width:;
  mih        =>    min-height:;
```
**[Back to Top](#menu)**

## Font
```
* fon        =>    font:;
* fon+       =>    font:1em Arial,sans-serif;

  fw         =>    font-weight:;
  fw:n       =>    font-weight:normal;
  fw:b       =>    font-weight:bold;
  fw:br      =>    font-weight:bolder;
  fw:lr      =>    font-weight:lighter;

  fs         =>    font-style:;
  fs:n       =>    font-style:normal;
  fs:i       =>    font-style:italic;
  fs:o       =>    font-style:oblique;

  fv         =>    font-variant:;
  fv:n       =>    font-variant:normal;
  fv:sc      =>    font-variant:small-caps;

  fz         =>    font-size:;
  fza        =>    font-size-adjust:;
  fza:n      =>    font-size-adjust:none;

  ff         =>    font-family:;
  ff:s       =>    font-family:serif;
  ff:ss      =>    font-family:sans-serif;
  ff:c       =>    font-family:cursive;
  ff:f       =>    font-family:fantasy;
  ff:m       =>    font-family:monospace;

  fef        =>    font-effect:;
  fef:n      =>    font-effect:none;
  fef:eg     =>    font-effect:engrave;
  fef:eb     =>    font-effect:emboss;
  fef:o      =>    font-effect:outline;

  fem        =>    font-emphasize:;
  
  femp       =>    font-emphasize-position:;          [fp]
  femp:b     =>    font-emphasize-position:before;    [fp:b]
  femp:a     =>    font-emphasize-position:after;     [fp:a]

  fems       =>    font-emphasize-style:;             [fes]
  fems:n     =>    font-emphasize-style:none;         [fes:n]
  fems:ac    =>    font-emphasize-style:accent;       [fes:a]
  fems:dt    =>    font-emphasize-style:dot;          [fes:t]
  fems:c     =>    font-emphasize-style:circle;       [fes:c]
  fems:ds    =>    font-emphasize-style:disc;         [fes:s]

  fsm        =>    font-smooth:;
* fsm:au     =>    font-smooth:auto;
  fsm:n      =>    font-smooth:never;
* fsm:al     =>    font-smooth:always;

  fst        =>    font-stretch:;
  fst:n      =>    font-stretch:normal;
  fst:uc     =>    font-stretch:ultra-condensed;
  fst:ec     =>    font-stretch:extra-condensed;
  fst:c      =>    font-stretch:condensed;
  fst:sc     =>    font-stretch:semi-condensed;
  fst:se     =>    font-stretch:semi-expanded;
  fst:e      =>    font-stretch:expanded;
  fst:ee     =>    font-stretch:extra-expanded;
  fst:ue     =>    font-stretch:ultra-expanded;
```
**[Back to Top](#menu)**

## Text
```
  va         =>    vertical-align:;
  va:sup     =>    vertical-align:super;
  va:t       =>    vertical-align:top;
  va:tt      =>    vertical-align:text-top;
  va:m       =>    vertical-align:middle;
  va:bl      =>    vertical-align:baseline;
  va:b       =>    vertical-align:bottom;
  va:tb      =>    vertical-align:text-bottom;
  va:sub     =>    vertical-align:sub;

  ta         =>    text-align:;
* ta:le      =>    text-align:left;
  ta:c       =>    text-align:center;
  ta:r       =>    text-align:right;
+ ta:j       =>    text-align:justify;

  tal        =>    text-align-last:;
  tal:a      =>    text-align-last:auto;
  tal:l      =>    text-align-last:left;
  tal:c      =>    text-align-last:center;
  tal:r      =>    text-align-last:right;

  td         =>    text-decoration:;
  td:n       =>    text-decoration:none;
  td:u       =>    text-decoration:underline;
  td:o       =>    text-decoration:overline;
  td:l       =>    text-decoration:line-through;

  te         =>    text-emphasis:;
  te:n       =>    text-emphasis:none;
  te:ac      =>    text-emphasis:accent;
  te:dt      =>    text-emphasis:dot;
  te:c       =>    text-emphasis:circle;
  te:ds      =>    text-emphasis:disc;
  te:b       =>    text-emphasis:before;
  te:a       =>    text-emphasis:after;

  th         =>    text-height:;
  th:a       =>    text-height:auto;
  th:f       =>    text-height:font-size;
  th:t       =>    text-height:text-size;
  th:m       =>    text-height:max-size;

  ti         =>    text-indent:;
  ti:-       =>    text-indent:-9999px;

  tj         =>    text-justify:;
  tj:a       =>    text-justify:auto;
  tj:iw      =>    text-justify:inter-word;
  tj:ii      =>    text-justify:inter-ideograph;
  tj:ic      =>    text-justify:inter-cluster;
  tj:d       =>    text-justify:distribute;
  tj:k       =>    text-justify:kashida;
  tj:t       =>    text-justify:tibetan;

  to         =>    text-outline:;
  to+        =>    text-outline:0 0 #000;
  to:n       =>    text-outline:none;

  tr         =>    text-replace:;
  tr:n       =>    text-replace:none;

  tt         =>    text-transform:;
  tt:n       =>    text-transform:none;
  tt:c       =>    text-transform:capitalize;
  tt:u       =>    text-transform:uppercase;
  tt:l       =>    text-transform:lowercase;

  tw         =>    text-wrap:;
  tw:n       =>    text-wrap:normal;
  tw:no      =>    text-wrap:none;
  tw:u       =>    text-wrap:unrestricted;
  tw:s       =>    text-wrap:suppress;

  tsh        =>    text-shadow:hoff voff blur #000;
  tsh+       =>    text-shadow:0 0 0 #000;
  tsh:n      =>    text-shadow:none;

  lh         =>    line-height:;

  lts        =>    letter-spacing:;

  whs        =>    white-space:;
  whs:n      =>    white-space:normal;
  whs:p      =>    white-space:pre;
  whs:nw     =>    white-space:nowrap;
  whs:pw     =>    white-space:pre-wrap;
  whs:pl     =>    white-space:pre-line;

  whsc       =>    white-space-collapse:;             [wc]
  whsc:n     =>    white-space-collapse:normal;       [wc:n]
  whsc:k     =>    white-space-collapse:keep-all;     [wc:k]
  whsc:l     =>    white-space-collapse:loose;        [wc:l]
  whsc:bs    =>    white-space-collapse:break-strict; [wc:s]
  whsc:ba    =>    white-space-collapse:break-all;    [wc:a]

  wob        =>    word-break:;
  wob:n      =>    word-break:normal;                 [wb:n]
  wob:k      =>    word-break:keep-all;               [wb:k]
  wob:l      =>    word-break:loose;                  [wb:l]
  wob:bs     =>    word-break:break-strict;           [wb:s]
  wob:ba     =>    word-break:break-all;              [wb:a]

  wos        =>    word-spacing:;

  wow        =>    word-wrap:;
  wow:nm     =>    word-wrap:normal;                  [ww:m]
  wow:n      =>    word-wrap:none;                    [ww:n]
  wow:u      =>    word-wrap:unrestricted;            [ww:u]
  wow:s      =>    word-wrap:suppress;
```
**[Back to Top](#menu)**

## Background
```
  bg         =>    background:;
  bg+        =>    background:#fff url() 0 0 no-repeat;
  bg:n       =>    background:none;

  bgc        =>    background-color:#fff;
+ bgc:t      =>    background-color:transparent; 

  bgi        =>    background-image:url();
  bgi:n      =>    background-image:none;

  bgr        =>    background-repeat:;
+ bgr:r      =>    background-repeat:repeat;
  bgr:n      =>    background-repeat:no-repeat;
  bgr:x      =>    background-repeat:repeat-x;
  bgr:y      =>    background-repeat:repeat-y;

  bga        =>    background-attachment:;
  bga:f      =>    background-attachment:fixed;
  bga:s      =>    background-attachment:scroll;

  bgp        =>    background-position:0 0;
  bgpx       =>    background-position-x:;
  bgpy       =>    background-position-y:;

  bgbk       =>    background-break:;                 [bgk]
  bgbk:bb    =>    background-break:bounding-box;     [bk:bb]
  bgbk:eb    =>    background-break:each-box;         [bk:e]
  bgbk:c     =>    background-break:continuous;       [bgk:c]

  bgcp       =>    background-clip:;                  [bcp]
  bgcp:bb    =>    background-clip:border-box;        [bc:bb]
  bgcp:pb    =>    background-clip:padding-box;       [bc:p]
  bgcp:cb    =>    background-clip:content-box;       [bc:cb]
  bgcp:nc    =>    background-clip:no-clip;           [bc:n]

  bgo        =>    background-origin:;
  bgo:pb     =>    background-origin:padding-box;     [bo:p]
  bgo:bb     =>    background-origin:border-box;      [bo:bb]
  bgo:cb     =>    background-origin:content-box;     [bo:c]

  bgz        =>    background-size:;
  bgz:a      =>    background-size:auto;              [bz:a]
  bgz:ct     =>    background-size:contain;           [bz:t]
  bgz:cv     =>    background-size:cover;             [bz:v]
```
**[Back to Top](#menu)**

## Color
```
* col        =>    color:#000;
  op         =>    opacity:;
  
+ hsl        =>    hsl(359, 100%, 100%)
+ hsla       =>    hsla(359, 100%, 100%, 0.5)         [hsa]
+ rgb        =>    rgb(255, 255, 255)
+ rgba       =>    rgba(255, 255, 255, 0.5)           [rga]
```
**[Back to Top](#menu)**

## Generated content
```
* ct         =>    content:;
  ct:n       =>    content:normal;
  ct:oq      =>    content:open-quote;
  ct:noq     =>    content:no-open-quote;             [ct:no]
  ct:cq      =>    content:close-quote;
  ct:ncq     =>    content:no-close-quote;            [ct:nc]
  ct:a       =>    content:attr();
  ct:c       =>    content:counter();
  ct:cs      =>    content:counters();                [ct:s]

* quo        =>    quotes:;
  q:n        =>    quotes:none;
  q:ru       =>    quotes:'\00AB' '\00BB' '\201E' '\201C';
  q:en       =>    quotes:'\201C' '\201D' '\2018' '\2019';

  coi        =>    counter-increment:;                [ci]
  cor        =>    counter-reset:;
```
**[Back to Top](#menu)**

## Outline
```
* out        =>    outline:;
  o:n        =>    outline:none;

  oo         =>    outline-offset:;
  ow         =>    outline-width:;
  os         =>    outline-style:;

  oc         =>    outline-color:#000;
  oc:i       =>    outline-color:invert;
```
**[Back to Top](#menu)**

## Table
```
  tbl        =>    table-layout:;
  tbl:a      =>    table-layout:auto;
  tbl:f      =>    table-layout:fixed;

  cps        =>    caption-side:;                     [cs]
  cps:t      =>    caption-side:top;                  [cs:t]
  cps:b      =>    caption-side:bottom;               [cs:b]

  ec         =>    empty-cells:;                      [ec]
  ec:s       =>    empty-cells:show;                  [es]
  ec:h       =>    empty-cells:hide;                  [eh]
```
**[Back to Top](#menu)**

## Border
```
  bd         =>    border:;
  bd+        =>    border:1px solid #000;
  bd:n       =>    border:none;

  bdbk       =>    border-break:;
  bdbk:c     =>    border-break:close;

  bdcl       =>    border-collapse:;
  bdcl:c     =>    border-collapse:collapse;
  bdcl:s     =>    border-collapse:separate;

  bdc        =>    border-color:#000;

  bdi        =>    border-image:url();
  bdi:n      =>    border-image:none;

  bdti       =>    border-top-image:url();
  bdti:n     =>    border-top-image:none;

  bdri       =>    border-right-image:url();
  bdri:n     =>    border-right-image:none;

  bdbi       =>    border-bottom-image:url();
  bdbi:n     =>    border-bottom-image:none;

  bdli       =>    border-left-image:url();
  bdli:n     =>    border-left-image:none;

  bdci       =>    border-corner-image:url();         [bci]
  bdci:n     =>    border-corner-image:none;          [bci:n]
  bdci:c     =>    border-corner-image:continue;      [bci:c]

  bdtli      =>    border-top-left-image:url();       [btli]
  bdtli:n    =>    border-top-left-image:none;        [btl:n]
  bdtli:c    =>    border-top-left-image:continue;    [btl:c]

  bdtri      =>    border-top-right-image:url();      [btri]
  bdtri:n    =>    border-top-right-image:none;       [btr:n]
  bdtri:c    =>    border-top-right-image:continue;   [btr:c]

  bdbri      =>    border-bottom-right-image:url();   [bbri]
  bdbri:n    =>    border-bottom-right-image:none;    [bbr:n]
  bdbri:c    =>    border-bottom-right-image:continue;[bbr:c]

  bdbli      =>    border-bottom-left-image:url();    [bbli]
  bdbli:n    =>    border-bottom-left-image:none;     [bbl:n]
  bdbli:c    =>    border-bottom-left-image:continue; [bbl:c]

  bdf        =>    border-fit:;                       [bf]
  bdf:c      =>    border-fit:clip;                   [bf:c]
  bdf:r      =>    border-fit:repeat;                 [bf:r]
  bdf:sc     =>    border-fit:scale;                  [bf:sc]
  bdf:st     =>    border-fit:stretch;                [bf:t]
  bdf:ow     =>    border-fit:overwrite;              [bf:w]
  bdf:of     =>    border-fit:overflow;               [bf:f]
  bdf:sp     =>    border-fit:space;                  [bf:p]

+ bdlt       =>    border-length:;
* bdlt:a     =>    border-length:auto;

  bdsp       =>    border-spacing:;

  bds        =>    border-style:;
  bds:n      =>    border-style:none;
  bds:h      =>    border-style:hidden;
  bds:dt     =>    border-style:dotted;
  bds:ds     =>    border-style:dashed;
  bds:s      =>    border-style:solid;
  bds:db     =>    border-style:double;
* bds:dd     =>    border-style:dot-dash;
* bds:ddd    =>    border-style:dot-dot-dash;
  bds:w      =>    border-style:wave;
  bds:g      =>    border-style:groove;
  bds:r      =>    border-style:ridge;
  bds:i      =>    border-style:inset;
  bds:o      =>    border-style:outset;

  bdw        =>    border-width:;

  bdt        =>    border-top:;
  bdt+       =>    border-top:1px solid #000;
  bdt:n      =>    border-top:none;

  bdtw       =>    border-top-width:;

  bdts       =>    border-top-style:;
  bdts:n     =>    border-top-style:none;

  bdtc       =>    border-top-color:#000;

  bdr        =>    border-right:;
  bdr+       =>    border-right:1px solid #000;
  bdr:n      =>    border-right:none;

  bdrw       =>    border-right-width:;

  bdrs       =>    border-right-style:;
  bdrs:n     =>    border-right-style:none;

  bdrc       =>    border-right-color:#000;

  bdb        =>    border-bottom:;
  bdb+       =>    border-bottom:1px solid #000;
  bdb:n      =>    border-bottom:none;

  bdbw       =>    border-bottom-width:;

  bdbs       =>    border-bottom-style:;
  bdbs:n     =>    border-bottom-style:none;

  bdbc       =>    border-bottom-color:#000;

  bdl        =>    border-left:;
  bdl+       =>    border-left:1px solid #000;
  bdl:n      =>    border-left:none;

  bdlw       =>    border-left-width:;

  bdls       =>    border-left-style:;
  bdls:n     =>    border-left-style:none;

  bdlc       =>    border-left-color:#000;

* bdrsa      =>    border-radius:;                    [bra]
  bdtrrs     =>    border-top-right-radius:;          [btrr]
  bdtlrs     =>    border-top-left-radius:;           [btlr]
  bdbrrs     =>    border-bottom-right-radius:;       [bbrr]
  bdblrs     =>    border-bottom-left-radius:;        [bblr]
```
**[Back to Top](#menu)**

## Lists
```
  lis        =>    list-style:;
  lis:n      =>    list-style:none;

  lisp       =>    list-style-position:;              [lp]
  lisp:i     =>    list-style-position:inside;        [lp:i]
  lisp:o     =>    list-style-position:outside;       [lp:o]

  list       =>    list-style-type:;                  [lst]
  list:n     =>    list-style-type:none;              [lt:n]
  list:d     =>    list-style-type:disc;              [lt:d]
  list:c     =>    list-style-type:circle;            [lt:c]
  list:s     =>    list-style-type:square;            [lt:s]
  list:dc    =>    list-style-type:decimal;           [lt:dc]
  list:dclz  =>    list-style-type:decimal-leading-zero;  [lt:z]
  list:lr    =>    list-style-type:lower-roman;       [lt:l]
  list:ur    =>    list-style-type:upper-roman;       [lt:u]

  lisi       =>    list-style-image:;                 [lsi]
  lisi:n     =>    list-style-image:none;             [lsi:n]
```
**[Back to Top](#menu)**

## Print
```
  pgbb       =>    page-break-before:;
  pgbb:au    =>    page-break-before:auto;
  pgbb:al    =>    page-break-before:always;
  pgbb:l     =>    page-break-before:left;
  pgbb:r     =>    page-break-before:right;

  pgbi       =>    page-break-inside:;
  pgbi:au    =>    page-break-inside:auto;
  pgbi:av    =>    page-break-inside:avoid;

  pgba       =>    page-break-after:;
  pgba:au    =>    page-break-after:auto;
  pgba:al    =>    page-break-after:always;
  pgba:l     =>    page-break-after:left;
  pgba:r     =>    page-break-after:right;

  orp        =>    orphans:;                          [or]
* widows     =>    widows:;                           [wds]
```
**[Back to Top](#menu)**

## Others
```
* ipt        =>    !important                         [it]

* ffa
    =>
  @font-face {
     font-family:;
     src:url();
  }

* ffa+
  =>
  @font-face {
     font-family: 'FontName';
     src: url('FileName.eot');
     src: url('FileName.eot?#iefix') format('embedded-opentype'),
          url('FileName.woff') format('woff'),
          url('FileName.ttf') format('truetype'),
          url('FileName.svg#FontName') format('svg');
     font-style: normal;
     font-weight: normal;
  }


* imp        =>    @import url();
* mp         =>    @media print {}

  bg:ie      =>    filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='x.png',sizingMethod='crop');

  op:ie      =>    filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);

  op:ms      =>    -ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';
  
  trf        =>    transform:;                        [tf]
  trf:r      =>    transform: rotate(90deg);          [tf:r]
  trf:sc     =>    transform: scale(x, y);            [t:sc]
  trf:scx    =>    transform: scaleX(x);              [t:cx]
  trf:scy    =>    transform: scaleY(y);              [t:cy]
  trf:skx    =>    transform: skewX(90deg);           [t:kx]
  trf:sky    =>    transform: skewY(90deg);           [t:ky]
  trf:t      =>    transform: translate(x, y);        [tf:t]
  trf:tx     =>    transform: translateX(x);          [t:tx]
  trf:ty     =>    transform: translateY(y);          [t:ty]
  
  trs        =>    transition:;
  trsde      =>    transition-delay:;                 [tse]
  trsdu      =>    transition-duration:;              [tsdu]
  trsp       =>    transition-property:;              [tsp]
  trstf      =>    transition-timing-function:;       [tst]
  
  ani        =>    animation:;
  ann        =>    animation-name:;
  adu        =>    animation-duration:;
  atf        =>    animation-timing-function:;
  ade        =>    animation-delay:;
  aic        =>    animation-iteration-count:;
  adi        =>    animation-direction:;
  aps        =>    animation-play-state:;
  key        =>    @keyframes {}

* com        =>    /*--------- comment -----------*/
+ reset      =>    Eric Meyer's Reset CSS 2.0
+ in         =>    inherit;
+ tra        =>    transparent;
+ beh        =>    behavior: url();
+ cha        =>    @charset '';

```
**[Back to Top](#menu)**

## + Pseudo class

*"&:pseudo_class" snippets are only available in Less, Scss and Sass*

```
+ ac         =>    :active {}
+ ac:a       =>   &:active {}

+ af         =>    :after {}
+ af:a       =>   &:after {}

+ be         =>    :before {}
+ be:a       =>   &:before {}

+ ch         =>    :checked {}
+ ch:a       =>   &:checked {}

+ dsa        =>    :disabled {}                       [da]
+ dsa:a      =>   &:disabled {}                       [da:a]

+ en         =>    :enabled {}
+ en:a       =>   &:enabled {}

+ fc         =>    :first-child {}
+ fc:a       =>   &:first-child {}

+ fle        =>    :first-letter {}
+ fle:a      =>   &:first-letter {}

+ fli        =>    :first-line {}
+ fli:a      =>   &:first-line {}

+ foc        =>    :focus {}
+ foc:a      =>   &:focus {}

+ ho         =>    :hover {}
+ ho:a       =>   &:hover {}

+ ln         =>    :lang() {}
+ ln:a       =>   &:lang() {}

+ lc         =>    :last-child {}
+ lc:a       =>   &:last-child {}

+ li         =>    :link {}
+ li:a       =>   &:link {}

+ nc         =>    :nth-child() {}
+ nc:a       =>   &:nth-child() {}

+ pla        =>   ::-webkit-input-placeholder {}
                   :-moz-placeholder {}
                   :-ms-input-placeholder {}

+ vit        =>    :visited {}
+ vit:a      =>   &:visited {}

+ tgt        =>    :target {}                         [tg]
+ tgt:a      =>   &:target {}                         [tg:a]
```
**[Back to Top](#menu)**

## + Scss &  Sass
```
+ ext        =>    @extend                            [et]

+ inc        =>    @include                           [ic]

+ mix        =>    @mixin                             [mx]
```