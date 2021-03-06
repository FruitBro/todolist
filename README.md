This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

---------------
React ：英文原意（响应）

一、React 中的响应式设计思想和事件绑定
-
思路：
    1.输入框的值
    2，list的值 push
    3. map list中的值

---------------
二、注释
-
注释的写法
 {/* 下面是一个input框 */}

让我们的某些标签不被转义，但存在xss风险
 dangerouslySetInnerHTML={{__html: item}}


  <label htmlFor="insertArea">输入内容</label>
   <input id="insertArea"/>
 html中label的作用一般是扩大点击区域，与input的id进行绑定，label要用htmlFor,防止与for循环冲突

---------------
 三、 拆分组件与组件之间的传值(重点)
-
 父组件向子组件传值： 通过属性的形式，既可以传递数据，也可以传递方法
 子组件接收父组件的值：props
 子组件调用父组件方法改变父组件的数据：this.props.deleteItem，deleteItem函数一定要绑定this,对父组件的数据进行改变
 子组件操作父组件的数据：1.从父组件向子组件传递一个方法 2.子组件去调用这个方法，间接操作父组件的数据，从而实现子组件和父组件的通信
 
---------------
 四、TodoList代码优化
-
this.setState((prevState) => {
    const list = [...prevState.list]
    list.splice(index, 1)
    return {list}
})
setState可以传入回调函数，prevState代表this.state修改之前的数据

---------------
五、围绕React衍生出的思考
-
1. 声名式开发方式：（减少大量dom操作的代码量） 可以理解为图纸，react会自动结合图纸构建dom，帮我们节约了大量dom操作代码
你只要把数据构建好就可以了，react会根据你的数据自动构建网站


2. 可以与其他框架并存

3. 组件化：首字母大写，树状结构

4. 单向数据流: 只能传递，不能修改数据
和之前做秒杀项目的思路类似，把所有数据的处理放在一个地方，子节点只能使用数据，不允许修改数据

5. 是视图层框架：多层传递数据的时候会异常复杂，需要借助redux、flux等来辅助开发

6. 函数式编程：写的都是一个个函数，维护起来比较容易。面向测试的开发流程，输入值看输出是否符合预期，给测试带来非常大的便捷性,更容易前端自动化测试。

---------------
六、PropTypes与DefalutProps的应用
-
参数类型做校验 定义参数默认值

React最佳学习方式：读英文文档 https://reactjs.org/docs/typechecking-with-proptypes.html

---------------
七、props,state与render函数的关系
-
当组件的state或者props发生改变的时候，render函数就会重新执行
当父组件的render函数被运行时，他的自附件的render都将被重新运行一次
1.复杂页面，数据变更导致频繁的render，是否占用太多资源？2.如何控制数据变更后的render时机？
当使用immutable，并且配合pureComponent时，数据不变，render就不会执行

---------------
八、React中的虚拟DOM
-
1. state 数据
2. JSX 模板
3. 数据 + 模板 结合，生成真实的DOM，并显示
4. state 发生改变
5. 数据 + 模板 结合，生成真实的DOM，替换原始的DOM（自己模拟实现）
缺陷：第一次生成了完整的DOM片段，第二次生成了完整的DOM片段，第二次的DOM替换第一次的DOM，非常耗费性能

DOM(DocumentFragment)

优化
1. state 数据
2. JSX 模板
3. 数据 + 模板 生成虚拟DOM(虚拟DOM就是一个JS对象，用它来描述真实DOM)
<div id="abc"><span>hello world<span></div>用JS对象来表示
['div', {id: 'abc'}, ['span', {}, 'hello world']] 

4. 用虚拟DOM的结构生成真实的DOM，并显示
5. state 发生变化
6. 数据 + 模板 生成新的虚拟DOM（极大的提升了性能）
['div', {id: 'abc'}, ['span', {}, 'bye bye']]
7. 比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span中的内容（极大的提升了性能）
8. 然后直接操作DOM，改变span中的内容

用js生成一个js对象，它的性能损耗是极小的，但用js生成一个DOM元素，代价极高
原因：js创建一个js对象很简单，但js创建一个DOM对象，需要调用web application的API,性能损耗比较大

JSX先被转为JS对象，再变成真实的DOM
JSX --> createElment -->虚拟DOM（JS对象） ---> 真实的DOM
React.createElement('div', {}, 'item')

优点： （虚拟DOM）
1. 性能提升了
2. 它使得跨端应用得以实现。React Native


虚拟 DOM 中的 Diff 算法
1. 归根结底都是调用setState的时候数据发生了变化，setState是异步的（初衷，底层为了提高性能，如果有**多次调用，合并为一次，降低虚拟dom的比对频率**）
2. 同层比对  不同直接替换，同层比对算法简单，因此比对速度很快
3. with keys 极大的提升了DOM比对的性能
a 0   b 1   c 2 比对没有意义，key值变化，因此要使用一个稳定的内容作为key值
b 0   c 1

1. setState 可以把多次setState合并为一次执行，减少虚拟DOM比对的次数
2. 同层比对
3. 引入key值是为了提高虚拟DOM的性能，key值要保持稳定
4. 同层比对和key值比对都是diff算法的一部分

---------------
九、React中ref的使用
-
ref(reference)引用 使用ref来操作dom，直接获取DOM元素来使用的
尽量不要用ref。做动画的时候可能要用到。
一定要把获取DOM放在setState的第二个参数的回调函数中。
oneOfType
arrayOf 意味着数据类型为数组
setState 的第二个参数为异步回调函数
用e.target获取元素节点，也可以用ref（引用）来获取
ref={{input} => {this.input = input}}
this.input相当于input标签的实际元素
传进来的参数input相当于input标签的实际元素

---------------
十、react的生命周期函数
-
生命周期函数指在某一时刻组件会**自动调用执行**的函数

constructor是ES6带的函数

* Initizlization 初始化
    constructor
    setup props and state

* Mounting 挂载
    componentWillMount 组件即将挂载到页面(只执行一次，只在挂载的时候执行)
    render
    componentDidMount 挂载到页面(只执行一次，只在挂载的时候执行)
* Updation 

    states
    shouldComponentUpdate 组件更新之前执行,返回boolean值，true就更新，false就不更新
    componentWillUpdate
    render
    componentDidUpdate

    props
    componentWillReceiveProps
    shouldComponentUpdate 可以阻止下面周期函数的执行
    componentWillUpdate
    render
    componentDidUpdate

* Unmounting
    componentWillUnmount

---------------
十一、React 生命周期函数使用场景
-
每天过一遍这些生命周期函数
render 这个生命周期函数必须存在，因为继承自react中Component这个组件，其他生命周期函数都内置了，唯独没有内置render生命周期函数

React调试工具
Highlisht update 可以查看被render更新的组件

react提升代码性能的点
1. 使用bind  this.handleClick = this.handleClick.bind(this)
2. 归根结底都是调用setState的时候数据发生了变化，setState是异步的（初衷，底层为了提高性能，如果有**多次调用，合并为一次，降低虚拟dom的比对频率**）
3. 同层比对  不同直接替换，同层比对算法简单，因此比对速度很快
4. with keys 极大的提升了DOM比对的性能

componentDidMount 一般用于请求ajax，最合适
componentWillMount 请求ajax放在这里也没有问题，但可能还有冲突，在用于React Native或用React做服务端的同构可能会产生冲突
constructor ajax也行，但不要放，为了规范

axios 读音 埃克谢而思
借助 shouldComponentUpdate 提升性能
shouldComponentUpdate (nextProps, nextState) {
  console.log(nextProps, nextState)
if (nextProps.content !== this.props.content) {
    return true
} else {
    return false
}

}

使用 Charles 进行接口数据模拟mock

charles的 tools --> map local功能
switchOmega要改为 **系统代理** 模式

[...res.data]
React的 CSS 过渡动画

React 16中提供了 fiber 的 Fragment 占位符

React 中使用 CSS 动画效果


---------------
十二、使用 react-transition-group 实现动画
-
unmountOnExit移除dom
onEntered={(el) => {el.style.color='blue'}}

使用 TransitionGroup 和 CSSTransition 实现多个DOM元素的动画

为什么说react更适合大型项目
react没有过度封装，更加灵活，vue的很多语法都是固定的

---------------
十三、Redux
-
React本身是一个非常简单的视图层框架
组件间通信传值非常麻烦
配套使用数据层框架
store action reducer component
Redux = Reducer + Flux

Redux的工作流程（其实非常简单）
类似于图书馆
React Component（也面中的组件）类似于借书的人
Store （数据存储的公共区域）（图书管理员）
Action Creators 你说的要借书的话
Reducers （记录本，查询）

component --> action 说--> store 听到 --> reducer 查询

之前的逐级传递特别麻烦，效率低下，OK，现在有人说，我们建一个图书馆吧！把所有的图书由图书馆统一管理，这样就不用来回一级一级的询问了。思想都是相通的。


如何创建store（createStore(reducer)），如何使用store，如何在component中获取数据reducer
reducer必须是一个函数，传入两个参数state、action

redux 调试 https://github.com/zalmoxisus/redux-devtools-extension#usage

action 与 reducer
store.dispatch(action) 把要出发的指令告诉store
store
recucer (做相应的数据处理，然后再返回给store)
store.subscribe 注册一个监听对象，监听数据的变化
store.getState() 需要在获取数据的地方调用，一般赋值给state
之后完全按照这个套路实现就可以了

使用 Redux 完成 TodoList 删除功能

---------------
十三、ActionTypes 的拆分
-
意义：更加规范，易于调试

---------------
十四、使用actionCreator 统一创建 action
-
action分散在各个组件中，不利于管理
actionCreator 提高代码的可维护性

Redux 知识点复习补充
Redux 设计和使用的三项原则
1. store必须是唯一的
2. 只有 store 能够改变自己的内容
3. Reducer 必须是纯函数

Redux 的核心API
createStore
store.dispatch
store.getState
store.subscribe

---------------
十五、UI组件和容器组件的拆分
-
普通组件

UI组件来负责渲染，容器组件负责逻辑

无状态组件:实际上就是一个函数，无状态性能更高
普通组件中类，生命周期函数，render 执行的函数远比无状态组件这个函数要多，因此性能要差很多
无状态组件一般用于：定义UI组件的时候，没有任何逻辑操作的时候

---------------
十六、Redux中发送异步请求获取数据
-
其实就是在ajax获取到数据之后重新赋值数据
Redux-thunk是redux的中间件
使用 Redux-thunk 中间件实现ajax数据请求
ajax写在componentDidMount中，咋一看没什么问题，但是当业务逻辑比较多的时候就会显得比较臃肿。
因此像ajax这种异步的请求就可以移动到其他地方进行统一管理
Redux-thunk可以使我们将这些复杂的逻辑放入action中进行处理
步骤
1. 安装Redux-Thunk
2. 创建store时使用thunk中间件，这样就可以在组件中写异步代码了
3. thunk使得我们可以在aciton中写异步代码了，action之前只能是一个对象，现在可以是函数了
4. 此时store.dispath(action)传入了action函数，自动执行action函数，这样就获取到了异步数据
5. 获取的异步数据，然后改变store中的数据： 先创建一个新的action，再调用dispatch方法。相当于包装了一层。
这样就把复杂的业务逻辑，或异步函数拆分到actionCreator中进行管理
写五遍，足以应付复杂的开发业务

---------------
十七、什么是Redux的中间件
-
要清楚redux-thunk和redux-saga的使用流程

redux-thunk中间件可以帮助我们在action中使用函数
中间：指的是action和store之间，其实就是dispatch方法
中间件实际上就是对disaptch方法的封装,也就是对dispatch的升级
原始的情况是直接传递对象
传递函数会让函数先执行，然后再执行传递action

有助于我们做自动化的测试和代码的拆分管理

中间件非常多：如
redux-logger： 记录action每一次派发的日志
redux-saga： 单独把异步的逻辑拆分到一个单独的文件中进行管理

---------------
十八、Redux-saga中间件
-
中间：指的是action和store的中间
Redux-saga可以完全代替redux-thunk

在Redux-saga中异步逻辑会放到一个单独的文件中去管理

看官方文件进行相关配置 https://github.com/redux-saga/redux-saga
1. 在store的index.js中引入 createSagaMiddleware，然后创建sagaMiddleware,再通过applyMiddleware使用这个中间件
2. 创建sagas文件，运行这个文件 sagaMiddleware.run(todoSages)
3. sagas文件中创建generator函数

redux-saga比redux-thunk复杂的多

redux-saga,有非常多的api,将异步的代码完全拆分到一个文件中，单独进行管理，在处理非常大型的项目时优于redux-thunk
redux-thunk基本没有api,只是在action里返回的不仅仅可以是对象，还可以是一个函数，就这么简单（判断的标准为是不是一个函数）

---------------
十九、如何使用 React-redux（非常重要）
-
React-redux是什么？是一个第三方的模块，可以帮助我们在react之中更加方便的使用redux

reducer是一个纯函数

react-redux提供的第一个核心API： Provider
Provider: 提供器连接了store，那么Provider里面的所有组件都有能力获取到store里的内容(提供器)
connect: 通过connect获取到里面的数据，关联，重点理解connect中的两个参数
写5遍，其实都是一个套路

使用 React-redux 完成 TodoList 功能