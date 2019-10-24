1 什么是springboot？ 

```java
springboot是一种能够零配置快速搭建spring项目的框架,它是对spring的再度封装.
```

2 什么叫约定大于配置

```java
开发逻辑任务重要性大于环境配置
```

3 springboot可以用什么命令来启动

```java
先用mvn package
java -jar xxx.jar
```

4 springboot的核心配置文件是什么，有几种类型的写法，分别是哪两种，并解释下两种写法的语法区别

```java
application.properties   它是kv结构
application.yml          它是目录树结构的
```

5 springboot的核心类是哪个？

```java
xxxApplication.java
```

6 核心类中有个什么注解，这个注解里有含有哪三个注解，分别解释下这三个注解的含义

```java
@SpringBootApplication
  @SpringBootConfiguration
    --其中包含一个@Component注解,是SpringBoot专用的注入spring容器的注解
  @EnableAutoConfiguration
      -@AutoConfigurationPackage
         --将被springbootaplication注解的类所在路径及其子路径全部注入到spring容器中
      -@Import({EnableAutoConfigurationImportSelector.class})
         --将我们所需要的配置文件以全类名的方式注入到spring容器中
  @ComponentScan
      -添加SpringBoot的扫描路径,将所需要注入的路径添加进去
           
```

7 在springboot中starter是什么

```java
导入某个场景所需要的全部依赖
```

8 在springboot中为什么可以不用写版本号

```java
因为有parent,它是依赖版本控制器
```

9 springboot默认打包成什么包

```java
jar包
```

10 如何添加一个扫描spring组件的注解

```java
@ComponentScan({"",""})
```

11 你认为springboot的优点是什么

```java
简单,效率高,约定大于配置,可以用java -jar的方式启动,可以独立部署
```

12 使用@value注解的语法

```java
@Value("${user.name}")
```

13 使用@ConfigurationProperties的语法

```java
@ConfigurationProperties(prefix=" ")
```

14 使用@ConfigurationProperties扫描yml配置文件中读取list与map时候，properties中分别应该怎么写？

```java
student:
  name: gavin
  age: 18
  gender: man
  list:
    - name: coder
    - age: 18
   map: {money: many,address: nanjing}    
```

15 @value与@configurationProperties注解分别在什么时候用

```java
当我们从配置文件中取出一两条数据的时候,选用@Value,因为方便快捷
当我们从配置文件中读取多个配置的时候,比如给对象赋值,选用@ConfigurationProperties  
```

16 多配置文件的写法

```java
application-dev.Properties
application-test.Properties  
```

17 多环境的切换命令

```java
spring.profiles.active=dev
```

18 简述mybatis中的mapper接口是如何找到 sql中的id的？

```java
Mapper接口的全限定名,就是xml映射文件的namespace
接口的方法名就是xml的statement的id
接口的参数就是xml传递给sql的参数  
```

19 mysql的默认端口号是什么？

```java
3306
```

20 @Configuration注解的含义？

```java
声明配置类,因为其中有@Component注解
```

21 @MapperScan注解的含义？

```java
指定要扫描的Mapper类的包的路径,能够让Mapper被引用
```

22 redis中一共有几种类型？

```java
字符串,列表,哈希,集合,有序集合
```

23 列表从列头插入用什么命令？从列尾插入用什么命令？

```java
lpush 头插 
rpush 尾插
```

24 你认为redis的几种类型数据分别合适用来做什么业务？

```java
string  缓存
list    粉丝列表/文章评论
set     去重
zset    去重排序
hash    缓存对象  
```

25 你认为redis是什么？

```java
Redis是一个高速的运行在内存上的kv非关系型缓存数据库
```

26 正常情况下idea全局搜索快捷键，当前页搜索快捷键，debug下一步快捷键，debug状态下放开断点快捷键 分别是什么？

```java
全局搜索       Ctrl+shift+f
当前页搜索      Ctrl+f
debug下一步    F8
放开断点       Ctrl+Alt+R  
```

27 写出你知道的分页算法与总页数算法？

```java
起始页:          startPage   
limit的起始条数: start= (startPage-1)*pageSize
每页条数:        pageSize
总条数:          totalRecord
总页数:          totalPage= (totalRecord + pageSize-1) / pageSize;
```

28 zookeeper默认端口号？

```java
2181
```

29 redis默认端口号？

```java
6379
```

30 为什么要使用自定义注解？

```java
可以简化代码
```

31 springcloud中如何定义这个项目是eureka-server？

```java
@EnableEurekaServer
```

32 springcloud中如何开启这个项目的eureka-client？

```java
@EnableEurekaClient
```

33 当代码出现问题时候的你的排查方式是什么？

```java
1:打断点一步步看输出的东西
2:对于mapper,使用logback看输入的东西  
```

34 redis中setnx命令是干什么用的他的现象是

```java
加锁
使用redis工具类的lock方法  
 如果有锁的话,就返回false
 没锁的话,就返回true   
若给定的 key 已经存在，则 SETNX 不做任何动作。
```

