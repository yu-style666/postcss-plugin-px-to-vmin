# postcss-plugin-px-to-vmin

postcss-plugin-px-to-vmin

示例：

输入

```css
.test {
  font-size: 13px;
  color: #1890ff;
}
.test a {
  font-size: 14px;
  background-color: #1890ff;
  color: #1890ff;
}
.test b {
  font-size: 15px;
  border: 20px solid #fff;
  margin: 30px -15px;
}
```

输出

```css
.test {
  font-size: calc(13vmin / 7.5);
  color: #1890ff;
}
.test a {
  font-size: calc(14vmin / 7.5);
  background-color: #1890ff;
  color: #1890ff;
}
.test b {
  font-size: calc(15vmin / 7.5);
  border: calc(20vmin / 7.5) solid #fff;
  margin: calc(30vmin / 7.5) calc(-15vmin / 7.5);
}
```
