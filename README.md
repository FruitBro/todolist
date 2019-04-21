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

React ：英文原意（响应）

React 中的响应式设计思想和事件绑定

思路：
    1.输入框的值
    2，list的值 push
    3. map list中的值

二、

注释的写法
 {/* 下面是一个input框 */}

让我们的某些标签不被转义，但存在xss风险
 dangerouslySetInnerHTML={{__html: item}}


  <label htmlFor="insertArea">输入内容</label>
   <input id="insertArea"/>
 html中label的作用一般是扩大点击区域，与input的id进行绑定，label要用htmlFor,防止与for循环冲突

 三、 拆分组件与组件之间的传值

 父组件向子组件传值： 通过属性的形式，既可以传递数据，也可以传递方法
 子组件接收父组件的值：props
 子组件调用父组件方法改变父组件的数据：this.props.deleteItem，deleteItem函数一定要绑定this,对父组件的数据进行改变
 子组件操作父组件的数据：1.从父组件向子组件传递一个方法 2.子组件去调用这个方法，间接操作父组件的数据，从而实现子组件和父组件的通信
 
 四、TodoList代码优化

this.setState((prevState) => {
    const list = [...prevState.list]
    list.splice(index, 1)
    return {list}
})
setState可以传入回调函数，prevState代表this.state修改之前的数据

五、围绕React衍生出的思考

1. 声名式开发方式：（减少大量dom操作的代码量） 可以理解为图纸，react会自动结合图纸构建dom，帮我们节约了大量dom操作代码
你只要把数据构建好就可以了，react会根据你的数据自动构建网站


2. 可以与其他框架并存

3. 组件化：首字母大写，树状结构

4. 单向数据流: 只能传递，不能修改数据
和之前做秒杀项目的思路类似，把所有数据的处理放在一个地方，子节点只能使用数据，不允许修改数据

5. 是视图层框架：多层传递数据的时候会异常复杂，需要借助redux、flux等来辅助开发

6. 函数式编程：写的都是一个个函数，维护起来比较容易。面向测试的开发流程，输入值看输出是否符合预期，给测试带来非常大的便捷性,更容易前端自动化测试。
