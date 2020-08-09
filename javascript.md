# 第一天

## 1.1浏览器执行js过程

​		浏览器非为两个部分：渲染引擎和js引擎（v8）。

​		浏览器本身并不会执行js代码，而是通过内置的js引擎来执行js代码。

## 1.2js组成

​		由三部分组成 ECMAScript（js语法） DOM（页面文档对象模型） BOM（浏览器对象模型）

​		

## 1.3js的书写位置

![image-20200530212259025](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200530212259025.png)

**还有引入外部式**

## 1.4基本输入输出

![image-20200530213014468](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200530213014468.png)

## 1.5变量



## 1.6循环语句



## 1.7数组



### **数组初始化**

![image-20200530220054525](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200530220054525.png)

### **获取元素**

![image-20200530221134796](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200530221134796.png)

### **遍历元素**

![image-20200530222812020](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200530222812020.png)



### **拆分拼接**

![image-20200530223720638](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200530223720638.png)

### **新增数组元素**

​	通过修改length

​	通过修改索引号

### 数组排序



## 1.8函数

#### **声明与调用与其他语言类似**

![image-20200531095012534](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200531095012534.png)



#### **实参个数与形参不匹配**

![image-20200531095049428](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200531095049428.png)



#### return返回值

函数没有return则返回undefined



#### arguments的使用

它是当前函数的一个内置对象，它存储了传递的所有实参。



#### 函数调用另外一个函数

与PHP一样



#### 函数的两种定义方式

​		function a(){}

​		var a = function(){}



## 1.9作用域

#### js的作用域（es5）：全局 局部

​		全局：整个script标签或者一个单独的js的文件。

​		局部：在函数内部就是局部作用域。

![image-20200531101856256](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200531101856256.png)

#### js中没有块级作用域（es5）es6才有

#### 作用域链（相对问题 内部能访问上一级外部变量）

![image-20200531102510181](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200531102510181.png)

## 1.10预解析

![image-20200531103435803](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200531103435803.png)

#### js引擎运行分两步：预解析 代码执行

​		域解析：把所有var 还有 function 提升到当前作用域的最前面

​				变量提升：把所有的变量声明提升到当前的作用域最前面 不提升赋值。

​				函数提升：把所有的函数声明提升到当前作用域的前面  不调用函数。

​		代码执行：从上往下执行

![image-20200531114507106](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200531114507106.png)

## 1.11js对象

#### 创建对象三个方式

![image-20200531121257917](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200531121257917.png)

![image-20200531121730029](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200531121730029.png)

![image-20200531122834312](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200531122834312.png)

#### 遍历对象属性

![image-20200601163906609](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200601163906609.png)

#### 内置对象

会去MDN查看内置对象的方法

#### 简单数据类型

又叫做基本数据类型或者值类型。在存储变量中存储的是值本身，如string，number，boolean，undefined，null（比较特殊返回的是一个空对象）

#### 复杂数据类型

又叫做引用类型，在存储变量时存储的仅仅是地址，因此叫做引用数据类型。

通过new关键字创建的对象（系统对象，自定义对象），如object、array、date

#### 堆和栈

简单数据类型是存放在栈里 复杂数据类型的内容存放在堆里，地址是存放在栈里

#### 简单类型传参

与c语言一样

#### 复杂类型传参

与c语言传递数组名一样的效果

# 第二天



## WEB API



## DOM（文档对象模型）



### 节点树

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200603211520371.png" style="zoom:80%;" />

### 获取元素

#### 根据ID

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200603212952438.png" alt="image-20200603212952438" style="zoom:80%;" />

#### 根据标签名

![image-20200603213059889](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200603213059889.png)

#### 通过HTML5新增的方法

![](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200603214747469.png)

#### 特殊元素获取

![image-20200603214729822](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200603214729822.png)



### 事件基础

#### **三部分组成 事件源 事件类型 事件处理程序**

事件源：事件被触发的对象

事件类型：如何触发比如鼠标点击等等

事件处理程序：通过一个函数赋值的方式完成



#### 常见的鼠标事件

| 鼠标事件    | 触发条件         |
| ----------- | ---------------- |
| onclick     | 鼠标点击触发     |
| onmouseover | 鼠标经过触发     |
| onmouseout  | 鼠标离开触发     |
| onfocus     | 获得鼠标焦点触发 |
| onblur      | 失去鼠标焦点触发 |
| onmousemove | 鼠标移动触发     |
| onmouseup   | 鼠标弹起触发     |
| onmousedown | 鼠标按下触发     |



### 操作元素

#### 修改元素内容

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200603222233899.png" alt="image-20200603222233899" style="zoom:80%;" />



#### 修改元素属性

​		只需要重新给它赋值就行

#### 表单修改内容比较特殊用value

​	disable = true 表示不能在修改了

​	this指向的是事件函数的调用者

​	常见的属性有type、checked、disabled等等

#### 样式属性操作

![image-20200605080846000](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200605080846000.png)



![](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200605082914367.png)



![image-20200605082817394](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200605082817394.png)





#### 常用案例

##### 全选按钮

![image-20200605094719271](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200605094719271.png)

![image-20200605094752634](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200605094752634.png)





#### Tab栏切换（重点）



























#### 两种获取属性的值

##### element.属性     

​		获取的是内置的属性

##### element.getAttribute(‘属性’)

​		可以获取到自定义的属性

#### 俩种设置属性的值

##### element.属性  = ‘值’   

​		获取的是内置的属性

##### element.setAttribute(‘属性’,'值') 

​		class比较特殊里面写的是class不是className 第二个参数是一个类名















