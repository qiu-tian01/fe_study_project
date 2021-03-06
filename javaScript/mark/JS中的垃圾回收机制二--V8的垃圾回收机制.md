### 关于V8
V8是一款主流的js执行引擎。它是为JS在浏览器执行而打造的。因此不会遇到大量使用内存的场景。所以它申请的内存在64位系统不超过1.5G，32位系统不超过800M

### V8中的内存管理和垃圾回收
​程序使用过程中会用到很多数据，这些数据可分为原始数据和对象类型数据，对于原始数据都是由语言自身来控制的。所以回收指的是堆区里面的对象类型数据。

V8中采用分代回收的思想，主要讲内存分为新生代和老生代，针对不同的分代采用不同的GC算法。其中新生代在64位系统下大约是32M，32位系统下约为16M，而老生代在64位系统下约为1400M，32位系统下对半，约为700M。
####  新生代垃圾回收机制
新生代指的是存活时间较短的对象，回收的过程采用了复制算法+标记整理的模式。新生代内存被区分为两个等大小的空间，一个空间是使用的From空间，一个是空间的To空间。

当From空间占满时就会启动新生代的GC算法，开始垃圾回收时开始检查From空间内的存活对象，并把From中的存活对象复制给To空间。From空间内失活的对象就会被销毁。复制完成后From空间和To空间互换。这里如果To空间的使用率超过了25%，就需要把一轮GC后还存活的新生代代行晋升到老生代。

#### 老生代垃圾回收机制
老生代中存放着的对象存活时间较长，且空间庞大，所以不再适合复制算法。老生代采用的是标记清除，标记整理，增量标记算法。
首先使用标记清除算法完成垃圾垃圾空间的回收，再采用标记清理进行空间优化，最后采用增量标记进行效率优化。

采用增量标记来优化效率主要是因为在执行GC时程序是要暂停运行的，要等待GC完成后才继续执行，完成一轮标记清除和整理需要大量时间。所以需要增量标记将原来的一次性标记改成分很多步去标记，代码执行一会标记会，标记和程序执行交替执行。直到标记阶段结束。

#### 新生代与老生代回收机制对比
- 新生代区域垃圾回收使用空间换时间
- 老生代区域垃圾回收不合适复制算法