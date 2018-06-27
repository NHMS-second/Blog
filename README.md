# Blog
## 1. JavaScript
### 1.1 思维导图
### 1.2 学习笔记
  1. [Array.prototype.filter实现数组去重](./Notes/JavaScript/Array.prototype.filter实现数组去重.js)
  2. [实现Promise.prototype.finally()](./Notes/JavaScript/实现Promise.prototype.finally().js)  
  3. [实现Promise/A+](./Notes/JavaScript/实现Promise_A+.js)  
### 1.3 参考文献
  1. [V8引擎怎样对属性进行快速访问](https://github.com/xitu/gold-miner/blob/master/TODO/fast-properties-in-v8.md)   
  2. [六个字符构建JavaScript世界](https://mp.weixin.qq.com/s/9Qb9rEc3aTi7wj49vIkUTg)  
  > 三条黄金法则：（1）通过 ! 转换为布尔(Boolean)类型；（2）通过 + 转换为数值(Number)类型；（3）与 [ ] 相加转换为字符(String)类型。   
  3. [关于JavaScript单线程的一些事](https://github.com/JChehe/blog/blob/master/posts/%E5%85%B3%E4%BA%8EJavaScript%E5%8D%95%E7%BA%BF%E7%A8%8B%E7%9A%84%E4%B8%80%E4%BA%9B%E4%BA%8B.md)  
  4. [史上最易读懂的 Promise/A+ 完全实现](https://zhuanlan.zhihu.com/p/21834559)      
  5. **REST API：**[(1) 理解RESTful架构;](http://www.ruanyifeng.com/blog/2011/09/restful.html)  [(2) RESTful API 设计指南;](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)  [(3) 30秒无需编码完成一个REST API服务](https://juejin.im/post/5b2b49d151882574b1588dd7?utm_source=gold_browser_extension)      
  6. **定时器：**[(1) JS忍者秘籍中的定时器机制详解;](https://juejin.im/post/5b25f190f265da595e3cc1ab?utm_source=gold_browser_extension)     

## 2. Java
### 2.1 思维导图
  1. [Java的面向对象特征](./MindMap/Java/Java的面向对象特征.png)
  2. [Java数据类型和运算符](./MindMap/Java/Java数据类型和运算符.png)
  3. [类和对象：类定义、static](./MindMap/Java/[类和对象]之类定义、static.png)
  4. [类和对象：方法详解](./MindMap/Java/[类和对象]之方法详解.png)

## 3. [趣谈网络协议](https://time.geekbang.org/column/intro/85)
### 3.1 思维导图
##### 1. 通信协议综述
  1. [为什么要学习网络协议：从输入URL到下单成功的简单流程分析](./MindMap/网络协议/为什么要学网络协议.png)    
    （1）[网络协议分析：电商购物](./MindMap/网络协议/网络协议例子-电商购物.jpg)   
    （2）当网络包到达一个城关的时候，可以通过路由表得到下一个城关的IP地址，直接通过IP地址找就可以了，为什么还要通过本地的MAC地址呢？
      > 评论留言精选，仅供参考。（1）局域网内IP地址是动态分配的，假如我是192.168.2.100，如果我下线了，可能IP就分配给另一台电脑。IP和设备并不总是对应的，这就对通信产生了影响，但是MAC地址不同，MAC地址和设备是一一对应且全球唯一的。所以局域网内使用MAC地址通信是没有问题的。（2）历史遗留问题：早期的以太网只有交换机，没有路由器，以太网内通过MAC地址通信。后来才有了互联网，为了兼容原本的模式，采用了IP+MAC地址通信的方式，所以先是有MAC地址后有的IP，IP的提出主要还是因为MAC地址本身的缺陷，这个问题就换成了有了MAC地址为何还要IP地址也很有意思。（3）MAC地址本身的缺陷：因为MAC地址是硬件提供商写在网卡中的，MAC地址虽然是唯一但是不能表明用户在整个互联网中的位置，除非维护一个超级大MAC地址对应表，那寻址效率肯定爆炸。但是IP地址解决了这个问题，因为IP地址是网络提供商提供给你的，所以你在哪里整个网络都是知道的。安全问题：获取MAC地址是通过ARP协议来完成的，如果只用MAC地址通信，那么广播风暴是个难题。（4）如果未来每个一个固定的IPv6地址，那么MAC+IPv4的模式是否可以被替换？

  2. [网络分层的真实含义：解密层与层之间的关系](./MindMap/网络协议/网络分层的真实含义.png)   
    （1）[程序是如何工作的](./MindMap/网络协议/程序是如何工作的.jpg)   
##### 2. 从第二层到第三层
  8. [网关Gateway](./MindMap/网络协议/网关Gateway.png)
  9. [路由协议](./MindMap/网络协议/路由协议.png)
##### 3. 最重要的传输层
  10. [UDP协议](./MindMap/网络协议/UDP协议.png)
  11. [TCP协议:三次握手、四次挥手、状态机](./MindMap/网络协议/TCP协议(上).png)    
    （1）[TCP三次握手状态时序图](./MindMap/网络协议/TCP三次握手状态时序图.jpg)
    （2）[TCP四次挥手状态时序图](./MindMap/网络协议/TCP四次挥手状态时序图.jpg)
    （3）[TCP状态机](./MindMap/网络协议/TCP状态机.jpg)
  12. [TCP协议:实现靠谱的协议、顺序问题、丢包问题、流量控制、拥塞控制](./MindMap/网络协议/TCP协议(下).png)    
    （1）[TCP BBR拥塞算法](./MindMap/网络协议/TCP_BBR拥塞算法.jpg)   
  13. [套接字Socket: 基于TCP/UDP协议的Socket、服务器如何连更多项目](./MindMap/网络协议/套接字Socket.png)    
    （1）[基于TCP协议的Socket程序函数调用过程](./MindMap/网络协议/基于TCP协议的Socket程序函数调用过程.jpg)  
    （2）[基于UDP协议的Socket程序函数调用过程](./MindMap/网络协议/基于UDP协议的Socket程序函数调用过程.jpg)  
    （3）[Linux进程复制过程](./MindMap/网络协议/Linux进程复制过程.jpg)  
    （4）[Linux下创建线程](./MindMap/网络协议/Linux下创建线程.jpg)  
##### 4. 最常用的应用层

##### 5. 陌生的数据中心

##### 6. 云计算中的网络

##### 7. 容器技术中的网络

##### 8. 微服务相关协议

##### 9. 总结与未来

## 4. 程序是怎样跑起来的
### 4.1 思维导图
  1. [CPU内部结构、寄存器、函数的调用机制、程序计数器、地址、CPU的处理](./MindMap/程序是怎样跑起来的/对程序员来说CPU是什么.png)
  2. [数据是用二进制数表示、补数、移位运算和乘除运算的关系](./MindMap/程序是怎样跑起来的/数据是用二进制数表示的.png)
  3. [计算机进行小数运算时出错的原因](./MindMap/程序是怎样跑起来的/计算机进行小数运算时出错的原因.png)
  4. [内存物理机制、内存逻辑模型、指针、数组、栈、队列、链表、二叉查找树](./MindMap/程序是怎样跑起来的/熟练使用有棱有角的内存.png)
  5. [不读入内存无法执行、磁盘缓存、虚拟内存、磁盘物理结构、节约内存的编程方法](./MindMap/程序是怎样跑起来的/内存和磁盘的亲密关系.png)
  6. [数据压缩、哈夫曼编码](./MindMap/程序是怎样跑起来的/数据压缩、哈夫曼编码.png)
  7. [中断机制、DMA机制、应用与硬件](./MindMap/程序是怎样跑起来的/硬件控制方法.png)