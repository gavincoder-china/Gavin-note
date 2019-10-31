# Java8中Stream流式方法

## ⭐Lambda表达式的简单规则

```java
 lambda表达式的要求:

1.不改变原数据

2.不在内存中存数据

3.不可重复使用
```



## 💕stream流

### stream流的运行图

![image-20191007163337329](https://tva1.sinaimg.cn/large/006y8mN6gy1g7pq01tlv6j3160090q6b.jpg)



### 功能展示

### (0).filter过滤

> ```java
>  public static void main(String[] args) {
> 
> 
>         Student s1 = new Student(1L, "张三", 15, "浙江");
>         Student s2 = new Student(2L, "李四", 15, "湖北");
>         Student s3 = new Student(3L, "王五", 17, "北京");
>         Student s4 = new Student(4L, "田七", 17, "浙江");
>         List<Student> students = new ArrayList<>();
>         students.add(s1);
>         students.add(s2);
>         students.add(s3);
>         students.add(s4);
> 
> 
> 
>         //筛选年龄大于15岁的学生
>         List<Student> students1 = students.stream().filter(s -> s.getAge() > 15).collect(Collectors.toList());
> 
>         System.out.println("筛选年龄大于15岁的学生---------");
> 
>         students1.stream().forEach(list->{
>             System.out.println(list);
>         });
> 
>         //筛选住在浙江省的学生
>         List<Student> students2 = students.stream().filter(s -> "浙江".equals(s.getAddress())).collect(Collectors.toList());
>         System.out.println("筛选住在浙江省的学生-----------");
> 
>         students1.stream().forEach(list->{
>             System.out.println(list);
>         });
> 
>     }
> ```
>
> ![image-20191008184806123](https://tva1.sinaimg.cn/large/006y8mN6gy1g7qziakvs9j30gt047dgu.jpg)

### (1).Map转换/通过条件生成新的集合

> ```java
> public static void main(String[] args) {
> 
>         Student s1 = new Student(1L, "张三", 15, "浙江");
>         Student s2 = new Student(2L, "李四", 15, "湖北");
>         Student s3 = new Student(3L, "王五", 17, "北京");
>         Student s4 = new Student(4L, "田七", 17, "浙江");
>         List<Student> students = new ArrayList<>();
>         students.add(s1);
>         students.add(s2);
>         students.add(s3);
>         students.add(s4);
> 
> 
> 
>         //在地址前面加上部分信息，只获取地址
>         List<String> lists = students.stream().map(s -> "住址:" + s.getAddress()).collect(Collectors.toList());
> 
>         //循环输出
>         lists.forEach(list ->System.out.println(list));
>     }
> ```
>
> ![image-20191008184952173](https://tva1.sinaimg.cn/large/006y8mN6gy1g7qzk2zw7zj305k02wdfs.jpg)

### (2).mapToInt/long/float求和

> ```java
>  public static void main(String[] args) {
> 
> 
>         Student s1 = new Student(1L, "张三", 15, "浙江");
>         Student s2 = new Student(2L, "李四", 15, "湖北");
>         Student s3 = new Student(3L, "王五", 17, "北京");
>         Student s4 = new Student(4L, "田七", 17, "浙江");
>         List<Student> students = new ArrayList<>();
>         students.add(s1);
>         students.add(s2);
>         students.add(s3);
>         students.add(s4);
> 
>        //求所有学生的年龄和
>         int sum = students.stream().mapToInt(stu -> stu.getAge()).sum();
>         System.out.println(sum);
> 
> 
>     }
> ```
>
> ![image-20191008185127282](https://tva1.sinaimg.cn/large/006y8mN6gy1g7qzlqgnyej30ek04dmxp.jpg)

### (3).Sorted排序

> ```java
>  public static void main(String[] args) {
>         Student s1 = new Student(1L, "张三", 15, "浙江");
>         Student s2 = new Student(2L, "李四", 15, "湖北");
>         Student s3 = new Student(3L, "王五", 17, "北京");
>         Student s4 = new Student(4L, "田七", 17, "浙江");
>         Student s5 = new Student(4L, "田七", 16, "浙江");
>         List<Student> students = new ArrayList<>();
> 
>         students.add(s3);
>         students.add(s4);
>         students.add(s1);
>         students.add(s2);
>         students.add(s5);
> 
> 
>         //排序规则  双重规则 后面的规则权重高!!!!
>         //从小到大排序
>         List<Student> lists = students.stream()
>                                       .sorted(Comparator.comparingInt(Student::getAge))
>                                       .sorted(Comparator.comparingLong(Student::getId))
>                                       .collect(Collectors.toList());
> 
>         lists.stream().forEach(list -> {
>             System.out.println(list);
>         });
>     }
> ```
>
> ![image-20191008185210129](https://tva1.sinaimg.cn/large/006y8mN6gy1g7qzmh6wr8j30gm03r757.jpg)
>
> #### 上面那个是从小到大排序,现在展示从大到小排序
>
> ```java
>   //从大到小排序
>         List<Student> lists2 = students.stream().sorted((stu1, stu2) -> Integer.compare(stu2.getAge(), stu1.getAge())).collect(Collectors.toList());
>         lists2.stream().forEach(list -> {
>             System.out.println(list);
>         });
> ```
>
> ![image-20191008185543281](https://tva1.sinaimg.cn/large/006y8mN6gy1g7qzq66fhpj30g8043wfc.jpg)
>
> 

### (4).Match匹配/查询是否包含某条件

> ```java
> public static void main(String[] args) {
>         Student s1 = new Student(1L, "张三", 15, "浙江");
>         Student s2 = new Student(2L, "李四", 15, "湖北");
>         Student s3 = new Student(3L, "王五", 17, "北京");
>         Student s4 = new Student(4L, "田七", 17, "浙江");
>         List<Student> students = new ArrayList<>();
>         students.add(s1);
>         students.add(s2);
>         students.add(s3);
>         students.add(s4);
> 
> 
>      //   有一个满足      anyMatch：Stream 中任意一个元素符合传入的 predicate，返回 true
>         Boolean anyMatch = students.stream().anyMatch(s -> "南京".equals(s.getAddress()));
>         if (!anyMatch) {
>             System.out.println("没有南京人");
>         }
> 
>         //    全部满足       allMatch：Stream 中全部元素符合传入的 predicate，返回 true
>         Boolean allMatch = students.stream().allMatch(s -> s.getAge() >= 15);
>         if (allMatch) {
>             System.out.println("所有学生都满15周岁");
>         }
> 
>         //    没有一个满足     noneMatch：Stream 中没有一个元素符合传入的 predicate，返回 true
>         Boolean noneMatch = students.stream().noneMatch(s -> "王八".equals(s.getName()));
>         if (noneMatch) {
>             System.out.println("没有叫王八的同学");
>         }
> 
>     }
> ```
>
> ![image-20191008185920318](https://tva1.sinaimg.cn/large/006y8mN6gy1g7qztxzy6lj30ad02kjrn.jpg)

### (5).Min/Max 求最大最小值

> ```java
> public static void main(String[] args) {
> 
>         Student s1 = new Student(1L, "张三", 15, "浙江");
>         Student s2 = new Student(2L, "李四", 15, "湖北");
>         Student s3 = new Student(3L, "王五", 17, "北京");
>         Student s4 = new Student(4L, "田七", 17, "浙江");
>         List<Student> students = new ArrayList<>();
>         students.add(s1);
>         students.add(s2);
>         students.add(s3);
>         students.add(s4);
> 
>         //min 求最小值
>         Student student = students.stream().min(Comparator.comparingInt(Student::getAge)).get();
> 
>         //    传统写法    Student minS = students.stream().min((stu1,stu2) ->Integer.compare(stu1.getAge(),stu2.getAge())).get();
>         System.out.println(student);
> 
>         //max  求最大值
>         Student student2 = students.stream().max(Comparator.comparingInt(Student::getAge)).get();
>         System.out.println(student2);
>     }
> ```
>
> ![image-20191008190018676](https://tva1.sinaimg.cn/large/006y8mN6gy1g7qzuy2uzqj30hh026wev.jpg)

### (6).Distinct 去重

> ```java
>  public static void main(String[] args) {
>         Student s1 = new Student(1L, "张三", 15, "浙江");
>         Student s2 = new Student(2L, "李四", 15, "湖北");
>         Student s3 = new Student(3L, "王五", 17, "北京");
>         Student s4 = new Student(4L, "田七", 17, "浙江");
>         Student s5 = new Student(4L, "田七", 17, "浙江");
> 
>         List<Student> students = new ArrayList<>();
>         students.add(s1);
>         students.add(s2);
>         students.add(s3);
>         students.add(s4);
>         students.add(s5);
> 
>         //去重
>         List<Student> lists = students.stream().distinct().collect(Collectors.toList());
>         //便利输出
>         lists.stream().forEach(list -> {
>             System.out.println(list.getName());
>         });
> 
>     }
> ```
>
> ![image-20191008190141940](https://tva1.sinaimg.cn/large/006y8mN6gy1g7qzweeubqj30e505eaao.jpg)

### (7).Skip 删除前n个数据

> ```java
>   public static void main(String[] args) {
>         Student s1 = new Student(1L, "张三", 15, "浙江");
>         Student s2 = new Student(2L, "李四", 15, "湖北");
>         Student s3 = new Student(3L, "王五", 17, "北京");
>         Student s4 = new Student(4L, "田七", 17, "浙江");
>         Student s5 = new Student(4L, "田七", 16, "浙江");
>         List<Student> students = new ArrayList<>();
> 
>         students.add(s3);
>         students.add(s4);
>         students.add(s1);
>         students.add(s2);
>         students.add(s5);
> 
> 
>         //  skip，删除前n个元素
>         List<Student> lists = students.stream().skip(2).collect(Collectors.toList());
> 
>         lists.stream().forEach(list->{
>             System.out.println(list);
>         });
> 
>     }
> ```
>
> ![image-20191008190235939](https://tva1.sinaimg.cn/large/006y8mN6gy1g7qzxbmjuhj30mp042t9w.jpg)

### (8).Limit限制输出个数

> ```java
> public static void main(String[] args) {
>         Student s1 = new Student(1L, "张三", 15, "浙江");
>         Student s2 = new Student(2L, "李四", 15, "湖北");
>         Student s3 = new Student(3L, "王五", 17, "北京");
>         Student s4 = new Student(4L, "田七", 17, "浙江");
>         List<Student> students = new ArrayList<>();
>         students.add(s1);
>         students.add(s2);
>         students.add(s3);
>         students.add(s4);
> 
>       //限制返回个数
>         List<Student> lists = students.stream().limit(2).collect(Collectors.toList());
> 
>         lists.stream().forEach(list -> {
>             System.out.println(list);
>         });
> 
>     }
> ```
>
> 

![image-20191008190354387](https://tva1.sinaimg.cn/large/006y8mN6gy1g7qzyovu7jj30ia032q3o.jpg)

### (9).Reduce (聚合)转换成一条数据

> ```java
> public static void main(String[] args) {
> 
>         Student s1 = new Student(1L, "张三", 15, "浙江");
>         Student s2 = new Student(2L, "李四", 15, "湖北");
>         Student s3 = new Student(3L, "王五", 17, "北京");
>         Student s4 = new Student(4L, "田七", 17, "浙江");
>         Student s5 = new Student(4L, "田七", 16, "浙江");
>         List<Student> students = new ArrayList<>();
> 
>         students.add(s3);
>         students.add(s4);
>         students.add(s1);
>         students.add(s2);
>         students.add(s5);
> 
>       // 将他们的姓名聚合成一个字符串
>         String appendStr = students.stream().map(stu->stu.getName()).reduce("", (a, b)-> a + b);
>         System.out.println(appendStr);
> 
>     }
> ```
>
> ![image-20191008190522427](https://tva1.sinaimg.cn/large/006y8mN6gy1g7r0093ft6j30c204cq3h.jpg)

