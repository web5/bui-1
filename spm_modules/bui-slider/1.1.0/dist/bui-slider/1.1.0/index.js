define("bui-slider/1.1.0/index",["bui-common/1.1.0/common","jquery"],function(e,t,a){var n=e("bui-common/1.1.0/common"),i=n.namespace("Slider");n.mix(i,{Slider:e("bui-slider/1.1.0/src/slider")}),a.exports=i}),define("bui-slider/1.1.0/src/slider",["jquery","bui-common/1.1.0/common"],function(e,t,a){"use strict";function n(e,t){return e>t&&(e=t),0>e&&(e=0),e/t*100}var i=e("jquery"),l=document,r=e("bui-common/1.1.0/common"),s="x-slider-handle",u="x-slider-vertical",o="x-slider-horizontal",d="x-slider-back",c=s+"-start",f=s+"-end",g=r.Component.View.extend({renderUI:function(){var e=this,t=e.get("isVertical");e.get("el").addClass(t?u:o)},setRange:function(e,t,a){function n(e){return e+"%"}e>t&&(e=t);var l=this,r=l.get("backEl"),s=l.get("isVertical"),u=l.get("handleEl"),o=u.length,d=t-e,c=a?l.get("duration"):null,f=s?"height":"width",g=s?"bottom":"left",v=a?"animate":"css",h={},m={};r&&(h[f]=d+"%",h[g]=e+"%",r[v](h,c)),1===o?(m[g]=n(t),u[v](m,c)):2===o&&(m[g]=n(e),u[0].style[g]!==m[g]&&i(u[0])[v](m,c),m[g]=n(t),u[1].style[g]!==m[g]&&i(u[1])[v](m,c))},_uiSetBackTpl:function(e){var t=this,a=t.get("el"),n=i(e).appendTo(a);n.addClass(d),t.setInternal("backEl",n)},_uiSetHandleTpl:function(e){var t,a=this,n=a.get("el"),i=a.get("range");i?(a._createHandleEl(e,c),a._createHandleEl(e,f)):a._createHandleEl(e),t=n.find("."+s),a.setInternal("handleEl",t)},_createHandleEl:function(e,t){var a=this,n=a.get("el"),l=i(e).appendTo(n);l.addClass(s),l.attr("tabindex","0"),t&&l.addClass(t)}},{ATTRS:{backEl:{},handleEl:{}}}),v=r.Component.Controller.extend({slideTo:function(e){this.set("value",e)},bindUI:function(){var e=this,t=e.get("el");t.find(".x-slider-handle").on("click",function(e){e.preventDefault()}),t.on("mousedown",function(a){var n=i(a.target),l=t.offset();n.hasClass("x-slider-handle")?(a.preventDefault(),e._handleDrag(a)):(l={left:a.pageX-l.left,top:a.pageY-l.top},e._slideByOffset(l,!0))})},_slideByOffset:function(e,t){var a=this,n=a.get("value"),i=a._formatValue(e);n===i||r.isArray(i)&&r.Array.equals(i,n)||(t?a.set("value",i):(a.setInternal("value",i),a._setValue(i,!1)))},_handleDrag:function(e){function t(e){var t=s.get("draging");if(t){e.preventDefault();var a=e.pageX,n=e.pageY,i={};i.left=t.elX+(a-t.startX),i.top=t.elY+(n-t.startY),s._slideByOffset(i,!1)}}function a(){i(l).on("mousemove",t),i(l).on("mouseup",r)}function n(){i(l).off("mousemove",t),i(l).off("mouseup",r)}function r(e){1==e.which&&(s.set("draging",!1),n())}var s=this,u=s.get("isVertical"),o=i(e.target),d=o.position();1==e.which&&(s.set("draging",{elX:d.left,elY:u?d.top+o.height():d.top,startX:e.pageX,startY:e.pageY}),a())},_getCalcValue:function(e){var t,a,i=this,l=i.get("el"),r=i.get("max"),s=i.get("min"),u=i.get("step"),o=i.get("isVertical"),d=o?l.height():l.width();if(t=o?n(l.height()-e.top,d):n(e.left,d),a=(r-s)*t/100+s,u){a=parseInt(a,10);var c=a%u;c&&(a+=u-c)}return a},_formatValue:function(e){var t=this,a=t.get("value"),n=t._getCalcValue(e);if(r.isNumber(a))return n;if(r.isArray(a)){var i=Math.abs(a[0]-n),l=Math.abs(a[1]-n);return l>i?[n,a[1]]:[a[0],n]}return a},_uiSetValue:function(e){this._setValue(e,!0)},_setValue:function(e,t){var a,i,l=this,s=l.get("min"),u=l.get("max"),o=u-s;s==u?(a=0,i=100):r.isNumber(e)?(a=0,i=n(e-s,o)):r.isArray(e)&&(a=n(e[0]-s,o),i=n(e[1]-s,o)),l._setRange(a,i,t),l.fire("change",{value:e})},_setRange:function(e,t,a){this.get("view").setRange(e,t,a)}},{ATTRS:{min:{value:0},duration:{view:!0,value:400},max:{value:100},value:{view:!0},step:{value:1},handleTpl:{view:!0,value:"<span></span>"},isVertical:{view:!0,value:!1},range:{view:!0,value:!1},backTpl:{view:!0,value:"<div></div>"},xview:{value:g}}},{xclass:"slider"});a.exports=v});