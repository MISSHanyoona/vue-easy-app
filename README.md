# 基于vue的简单移动端项目开发过程

### 尝试使用vs code 提交代码到GitHub

## 制作首页Appz组件
1. 完成Header区域,使用Mint-UI的Header组件
2. 制作底部Tabbar, 使用MUI的Tabbar
    + 在底部Tabbar遇到一个问题 使用mui-extra的图标 要引入相应css 以及字体
3. 中间<router-view/> 放置路由匹配到的组件

## 制作轮播图问题
1. 放入mint-ui的轮播图组件 轮播图没有展示出来 检查元素 因为没有高度 此时要设置高度即可

## Tabbar切换的动画制作
1. 给router-view 外包一层 transition
2. 添加两组样式 .v-enter .v-leave-to   .v-enter-active .v-leave-active
3. 解决出现的问题(滚动条,动画效果等). 给外层盒子加overflowX:hidden;解决滚动条问题
4. 想要的动画效果是: 一个页面离开的同时,另一个页面进来 离开的界面要去往-100% 进来的页面在100%处准备 所以要把.v-enter和.v-leave-to分开,同时在            .v-leave-to里加入position:absolute,以解决内容位移的问题.


