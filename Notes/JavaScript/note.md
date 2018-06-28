# arrow function
### 1. 箭头函数有几个注意点：   
  1.1 函数体内的<font color="#c7254e">this</font>对象，就是定义时所在的对象，而不是使用时候所在的对象。this对象是可变的，但是在箭头函数中，它是<font color="#c7254e">固定</font>的。   
  1.2 不可以当做构造函数，也就是说，不可以使用<font color="#c7254e">new</font>命令，否则会抛出一个错误。   
  1.3 不可以使用<font color="#c7254e">arguments</font>对象，该对象在函数体内不存在。如果要用，可以使用<font color="#c7254e">rest</font>参数代替。   
  1.4 不可以使用<font color="#c7254e">yield</font>命令，因此箭头函数不能用作Generator函数。
