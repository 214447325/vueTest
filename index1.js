/**
 * Created by User on 2017/7/25.
 */
var Vue = require('vue');
//var vu = new Vue({
//    el: '#de',
//    template:'<h2>haha</h2>'
//});

// Vue.component('chen', {
//    props:['name'],
//    template:'<h1>{{name}}</h1>'
//});
//var vu = new Vue({
//    el:'#de'
//});

//var child = Vue.extend({
//   template:'#chen',
//   data: function(){
//        return 8888;
//   }
//});

//var v = new Vue({
//    el: '#f',
//    data: {
//        ns:''
//    }
//})

//var _div = new Vue({
//    el:'#div'
//});
//
//console.log(JSON.stringify(_div.$els.ts.innerText))

Vue.directive('dir',{
    component:'<ddd></ddd>'
});

var _dir = new Vue({
    el:'#div',
    data: {
        die: 'hllo'
    }
});