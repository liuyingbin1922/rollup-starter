<p align="center">
    <img src="https://si.geilicdn.com/img-1ede0000017d3c3cf95e0a20e2c5-unadjust_249_250.png" style="position:relative;left:50%;">
    <h1 align="center"> rollup-starter</h1>
</p>


初始化造轮子的rollup打包工具，打造一款开箱即用的造轮子基础设施。**Vue3** 已经通过ts 进行了重构，所以使用ts打造轮子可以看作是一种趋势了，那么对应的造轮子的基础设施也是不可少的。因为笔者利用空余时间打造写ts轮子的打包工程。


## 技术栈

```shell
ts + rollup + eslint[husky] + jest
```

## 使用

使用非常简单，src目录是源码位置，打包的时候使用rollup将ts代码打包成cjs方式的代码，在lib文件夹中，发布npm 包的时候main入口直接指向lib 文件夹。

## [MIT LICENSE](https://opensource.org/licenses/MIT)


