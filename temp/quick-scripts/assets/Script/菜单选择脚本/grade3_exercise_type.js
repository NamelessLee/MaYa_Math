(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/菜单选择脚本/grade3_exercise_type.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a90c73Q/mdHKqeozh3eRWGS', 'grade3_exercise_type', __filename);
// Script/菜单选择脚本/grade3_exercise_type.js

'use strict';

/***********************************************************************************************************************************
菜单列表：三年级的可练习的种类
**********************************************************************************************************************************/

cc.Class({
   extends: cc.Component,

   properties: {},

   onLoad: function onLoad() {
      //获取本地储存的错题序号信息，若无错题则无法进入错题本
      this.error_list = JSON.parse(cc.sys.localStorage.getItem('userData'));
      this.choose = 0;
   },
   start: function start() {},


   toGrd1: function toGrd1() {
      cc.director.loadScene("SetNum");
      this.choose = 31;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd2: function toGrd2() {
      cc.director.loadScene("SetNum");
      this.choose = 32;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd3: function toGrd3() {
      cc.director.loadScene("SetNum");
      this.choose = 33;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd4: function toGrd4() {
      cc.director.loadScene("SetNum");
      this.choose = 34;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd5: function toGrd5() {
      cc.director.loadScene("SetNum");
      this.choose = 35;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   },

   toGrd6: function toGrd6() {
      cc.director.loadScene("SetNum");
      this.choose = 36;
      cc.sys.localStorage.setItem('choose', JSON.stringify(this.choose)); //存储用户选择
   }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=grade3_exercise_type.js.map
        