### Loading 选项

| 名称        | 类型   | 说明                                                                                         | 默认值    |
| ----------- | ------ | -------------------------------------------------------------------------------------------- | --------- |
| percent     | Number | 设置进度条的当前进度，取值范围为 0 ~ 100                                                     | -         |
| strokeWidth | Number | 设置进度条的纵宽（高度）px，在一轮的加载中需要每次调用 open 方法时都传入一样的值保持纵宽一致 | 2         |
| state       | String | 设置进度条的状态，可选值 `default`、`success`、`error`、`warning`                            | 'default' |
| position    | String | 设置进度条的位置，可选值 `top`、`bottom`                                                     | 'top'     |
| maxPercent  | Number | 设置进度条本次加载的中间值，进度到达该值后会等待下一次调用                                   | 95        |