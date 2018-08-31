相关的记录点
===
1.重新渲染触发
---
```javascript
onClick={() => alert('click')}
//正常触发
onClick={ alert('click')}
//每次重新渲染都会触发
```
2.子类构造函数的super
---
```
在JavaScript类中，需要在定义子类的构造函数时始终调用super。所有具有构造函数的React组件类都应该使用super（props）调用启动它。
```
3.this.setState() 
---
```
设置this.state的相关属性
```
4.父子组件,兄弟组件通信
---
```
要从多个子级收集数据，或者让两个子组件相互通信，需要在其父组件中声明共享状态。父组件可以使用props将状态传递回子节点;这使子组件彼此保持同步并与父组件保持同步
子向父传值,用父向子传递的函数来间接的控制
```
5.数组的fill方法
---
```
fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引
```
6.rerutn()
---
```
在return后面添加括号,以便在js后面不插入分号破坏代码
```
7.事件的命名
```
事件的名称采用的是on[Event]的形式,不管是在标签还是自定义的标签上面都可以使用
```
8.可读性
---
```
为了便于阅读，将返回的元素拆分为多行，并添加了括号，以便JavaScript在返回后不插入分号并破坏我们的代码。
```
9.保持数据的不变性,可以拷贝一次来使用
---
```
//直接操作数据
var player1={score:1,name:'jkeff'}
player1.score=2;
//player1={score:2,name:'jkeff'}
//没有直接操作数据
var player2={score:1,name:'jkeff'}
var newPlayer=Object.assign({},player2,{score:2})
//player2没有发生变化,不修改底层的东西
//newPlayer={score:2,name:'jkeff'}
//相关资料:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
不变性的主要好处是它可以在React中构建纯组件。不可变数据可以很容易地确定是否已经进行了更改，这有助于确定组件何时需要重新render。
```
10.功能组件
---
```
只包含一个render方法,不包含自身的state属性,可以写成一个function形式
传参为输入,返回为render方法
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
//注意:onClick={()=>{this.props.onClick()}} 变换为 onClick={props.onClick} //没有括号
//在这里可有不用加this
```
11.concat方法
---
```
concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
```
12.react元素数组
---
```
map方法将会返回一个新的数组
地址:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map
```
13.key的重要性
---
```
key:作为react的添加,删除,重新渲染的一种判断依据.类似于每个组件的id(唯一性),因此在遍历的时候也强力建议附有唯一性的属性.key不需要全局唯一,只需要在组件和它们的兄弟组件之间是唯一的。
```
14.slice
---
```
地址:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(0,animals.length+1));//复制数组,返回新的,原来的不会改变
console.log(animals.slice());//复制数组,返回新的,原来的不会改变
```
