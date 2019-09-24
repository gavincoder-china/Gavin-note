<div>欢迎大家加入我的github项目,一起学习，一起发展</div>
<a href="https://github.com/xunyegege" style="text-decoration: none;color: white;font-weight: bolder">--->
全栈工程师进阶学习站</a><br>
<a href="https://github.com/xunyegege/New-JavaScript-in-2019" style="text-decoration: none;color: white;font-weight: bolder">--->
我的前端学习笔记</a><br>
<a href="https://github.com/xunyegege/report_gather" style="text-decoration: none;color: white;font-weight: bolder">--->行业内最新最群的报告，工作日每日更新</a><br>  

<a href="https://github.com/xunyegege/Super-practical-javascript-code-snippet-refactoring" style="text-decoration: none;color: white;font-weight: bolder">--->原生 js 训练计划</a><br>  




### 初识springboot

1为什么使用springboot

简单，效率高，约定大于配置,可以用java -jar的方式来启动，可以独立部署

#### pom文件

```java
spring-boot-starter-parent
定义：依赖的版本控制器
```

```
starter
定义：导入某个场景所需要的所有依赖
```

```java
spring-boot-maven-plugin
定义：使springboot可以打包成jar包，并且可以用java -jar 启动
```

```java
application.properties
定义：核心配置文件（端口号，数据库等等）
描述：有两种类型分别是properties和yml 当同时出现两者 springboot优先读取properties
```

```
@SpringBootApplication
定义：核心配置类 其中包含
-@SpringBootConfiguration
定义：通过@Component知道SpringBoot专用的 注入到spring容器 
-@EnableAutoConfiguration 其中包含
--@AutoConfigurationPackage 其中包含
定义：
---@Import({Registrar.class})
定义：spring底层注解表示导入类 这里导入Registrar类 
Registrar类中帮我们把 被@SpringBootApplication修饰的类所在路径以及其子路径注入到spring容器中

@Import({EnableAutoConfigurationImportSelector.class})
定义从META-INF/spring.factories路径下 以全类名的方式注入到容器中完成了自动配置 
@ComponentScan
定义：添加springboot扫描的路径，把我们需要注入的路径给添加进去
```



## IOC

> 控制反转,首先去考虑的是控制正转,我们平时使用的方法是控制正转,那么反转就是将对象的控制权交由Spring容器去管理

## DI

> 创建对象的过程中Spring可以依据配置对象的属性进行设置，这个过程称之为依赖注入,如注解@autowired
spring依赖注入说的是对象依赖spring容器帮你实例化(注入)，所以很多人会把spring当作一个大的实例工厂，它帮程序生成并注入对象





## springboot框架面试相关

1什么是springboot？ 

> springboot是一种能够零配置快速搭建spring项目运行环境的框架,他是对Spring的再度封装.

 2什么叫约定大于配置

>  开发逻辑任务重要性大于环境配置

 3springboot可以用什么命令来启动

> mvn package
>
> 进入jar包所在目录下
>
> java -jar xxx.jar

4springboot的核心配置文件是什么，有几种类型的写法，分别是哪两种，并解释下两种写法的语法区别

> application.properties
>
> properties   kv结构
>
> yml     目录结构

5springboot的核心类是哪个？

> xxxApplication.java

6核心类中有个什么注解，这个注解里有含有哪三个注解，分别解释下这三个注解的含义

> @SpringBootApplication
>
> > @SpringBootConfiguration
> >
> > --其中包含一个@component注解,是SpringBoot专用的注入Spring容器的注解
>
> > @EnableAutoConfiguration
> >
> > -@AutoConfigurationPackage
> >
> > > 将被@SpringBootApplication注解的类的所在路径及其子路径注入到spring容器中
> >
> > -@Import({EnableAutoConfigurationImportSelector.class})
> >
> > > 将我们所需要的配置文件以全类名的方式注入到spring容器中
>
> > @ComponentScan
> >
> > > 添加SpringBoot的扫描路径,将需要注入的路径添加进去

7在springboot中starter是什么

> 导入某个场景所需要的全部依赖,比如web环境,测试环境下所需要的依赖包

8在springboot中为什么可以不用写版本号

> 因为他有spring-boot-starter-parent ,也就是依赖版本控制器

9springboot默认打包成什么包

> 默认打成jar包,用java -jar xxx.jar方法启动

10 如何添加一个扫描spring组件的注解

> @componentScan({"路径","路径"})

11你认为springboot的优点是什么

> 简单，效率高，约定大于配置,可以用java -jar的方式来启动，可以独立部署



















```

```