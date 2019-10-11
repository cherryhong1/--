import Vue from 'vue';
import MessageBox from './MessageBox';
export var messageBox =(function () {
    var defaults = {//默认值
        title:'',
        content:'',
        cancel:'',
        yes:'',
        handleCancel:null,
        handleYes:null
    };
    var MyComponent = Vue.extend(MessageBox);
    return function (opts) {//配置参数
        for(var attr in opts){
            defaults[attr] = opts[attr]
        }
 
        var vm = new MyComponent({
            el:document.createElement('div'),
            data:{
                title:defaults.title,
                content:defaults.content,
                cancel:defaults.cancel,
                yes:defaults.yes,
            },
            methods:{
                handleCancel(){
                    defaults.handleCancel && defaults.handleCancel.call(this);
                    document.body.removeChild(vm.$el);
                },
                handleYes(){
                    defaults.handleYes && defaults.handleYes.call(this);
                    document.body.removeChild(vm.$el);
                }
            }
        });
        document.body.appendChild(vm.$el);
    }
})()