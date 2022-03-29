# 笔记

## 脚手架文件架构
    |- node_modules
    |- public
    |   |- favicon.ico :页面图标
    |   |- index.html :主页面
    |
    |- src
    |   |- assets :存放静态资源
    |   |   |- logo.png
    |   |- component :存放组件
    |   |   |- HelloWorld.vue
    |   |- App.vue :汇总所有组件
    |   |- main.js :入口文件
    |
    |- .gitignore :git版本管制忽略的配置
    |- babel.config.js :babel的配置文件
    |- package.json :应用包配置文件
    |- README.md :应用描述文件
    |- package-lock.json :包版本控制文件

## 关于不同版本Vue
- Vue.js和vue.runtime.xxx.js的区别：
    (1).vue.js是完整版Vue,包含：核心功能+模版解析器。
    (2).vue.runtime.xxx.js是运行版的Vue,只包含：核心功能；没有模版解析器。
- 因为vue.runtime.xxx.js没有模版解析器，所以不能使用template配置项，需要使用
    render函数接收到的createElement函数区指定具体内容。

## vue.config.js配置文件
> 使用vue inspect > output.js可以查看到Vue脚手架的默认配置。
> 使用vue.config.js可以对脚手架进行个性化定制，详情见https://cli.vuejs.org/zh/config/

## ref属性
1. 被用来给元素或子组件注册引用信息（id的替代者）
2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象(vc)
3. 使用方式：
    - 打标识：<h1 ref="xxx">...</h1> 或 <School ref="xxx"></School>
    - 获取：this.$refs.xxx

## 配置项props
功能:让组件接收外部传过来的数据
1. 传递数据:<Demo name="xxx">
2. 接收数据:
    第一种方式（只接收）props:['name']
    第二种方式（限制类型）
        props:{
            name:Number
        }
    第三种方式（限制类型、限制必要性、指定默认值）
        props:{
            name:{
                type:String, //类型
                required:true, //必要性
                default:'老王' //默认值
            }
        }
    备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，
    若业务需要修改，那么请复制props的内容到data中一份，然后取修改data中的数据。

## mixin(混入)
功能：可以多个组件共用的配置提取成一个混入对象
使用方法：
    第一步定义混合，例如：
        {
            data(){
                ...
            },
            methos:{

            }
        }
    第二步使用混入，例如：
        (1). 全局混入：Vue.mixin(xxx)
        (2). 局部混入：mixins:['xxx']

## 插件
功能：用于增强Vue
本质：包含install方法的一个对象，install的第一个参数是Vue,第二个以后的参数是插件使用者传递的数据。
定义插件：
    对象.install = function(Vue,options){
        //1.添加全局过滤器
        Vue.filter(...)
        //2.添加全局指令
        Vue.directive(...)
        //3.配置全局混入
        Vue.mixin(...)
        //4.添加实例方法
        Vue.prototype.$myMethod = function(){...}
        Vue.prototype.$myProperty = xxx
    }
使用插件：Vue.use()

## scoped样式
作用：让样式在局部生效，防止冲突。
写法：<style scoped>

## 总结TodoList案例
1. 组件化编码流程：
    (1). 拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。
    (2). 实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：
    
    ​	1).  一个组件在用：放在组件自身即可。
    
    ​	2). 一些组件在用：放在他们共同的父组件上（**状态提升**）。
    
    (3).实现交互：从绑定事件开始。

2. props适用于：

   (1).父组件 ==> 子组件 通信

   (2).子组件 ==> 父组件 通信（要求父先给子一个函数）

3. 使用v-model时要切记：v-model绑定的值不能时props传过来的值，因为props是不可修改的！
4. props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。

## webStorage

1. 存储内容大小一般5MB左右（不同浏览器不一样）

2. 浏览器端通过Window.sessionStorage和Window.loclStorage属性来实现本地存储机制。

3. 相关API:

   (1). xxxStorage.setItem('key','value');

   ​	该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。

   (2). xxxStorage.getItem('key');

   ​	该方法接受一个键名作为参数，返回键名对应的值。

   (3). xxxStorage.removeItem('key');

   ​	该方法接受一个键名作为参数，并把该键名从存储中删除。

   (4). xxxStorage.clear()

   ​	该方法会清空存储中的所有数据。

4. 备注：

   (1). sessionStorage存储的内容会随着浏览器关闭而消失

   (2). LocalStorage存储的内容，需要手动清除才会消失

## 组件的自定义事件

1. 一种组件间通信的方式，适用于：<strong style="color:red">子组件 ===> 父组件</strong>

2. 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（<span style="color:red">事件的回调在A中</span>）。

3. 绑定自定义事件：

   1. 第一种方式，在父组件中：```<Demo @atguigu="test"/>```  或 ```<Demo v-on:atguigu="test"/>```

   2. 第二种方式，在父组件中：

      ```js
      <Demo ref="demo"/>
      ......
      mounted(){
         this.$refs.xxx.$on('atguigu',this.test)
      }
      ```

   3. 若想让自定义事件只能触发一次，可以使用```once```修饰符，或```$once```方法。

4. 触发自定义事件：```this.$emit('atguigu',数据)```		

5. 解绑自定义事件```this.$off('atguigu')```

6. 组件上也可以绑定原生DOM事件，需要使用```native```修饰符。

7. 注意：通过```this.$refs.xxx.$on('atguigu',回调)```绑定自定义事件时，回调<span style="color:red">要么配置在methods中</span>，<span style="color:red">要么用箭头函数</span>，否则this指向会出问题！

## 全局事件总线（GlobalEventBus）

1. 一种组件间通信的方式，适用于<span style="color:red">任意组件间通信</span>。

2. 安装全局事件总线：

   ```js
   new Vue({
   	......
   	beforeCreate() {
   		Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
   	},
       ......
   }) 
   ```

3. 使用事件总线：

   1. 接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的<span style="color:red">回调留在A组件自身。</span>

      ```js
      methods(){
        demo(data){......}
      }
      ......
      mounted() {
        this.$bus.$on('xxxx',this.demo)
      }
      ```

   2. 提供数据：```this.$bus.$emit('xxxx',数据)```

4. 最好在beforeDestroy钩子中，用$off去解绑<span style="color:red">当前组件所用到的</span>事件。