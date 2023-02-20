var colors = [
  {
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    type: 'linear',
    global: false,
    colorStops: [
      {
        offset: 0,
        color: '#33cc99'
      },
      {
        offset: 1,
        color: '#33cc66'
      }
    ]
  },{
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    type: 'linear',
    global: false,
    colorStops: [
      {
        offset: 0,
        color: '#3399cc'
      },
      {
        offset: 1,
        color: '#33cc99'
      }
    ]
  },{
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    type: 'linear',
    global: false,
    colorStops: [
      {
        offset: 0,
        color: '#ffcc66'
      },
      {
        offset: 1,
        color: '#ffcc66'
      }
    ]
  },{
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    type: 'linear',
    global: false,
    colorStops: [
      {
        offset: 0,
        color: '#3399cc'
      },
      {
        offset: 1,
        color: '#33cccc'
      }
    ]
  },{
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    type: 'linear',
    global: false,
    colorStops: [
      {
        offset: 0,
        color: '#3399cc'
      },
      {
        offset: 1,
        color: '#33cc99'
      }
    ]
  }
];
var colors2 = ['#66cc99','#33cccc','#ffff99','#3399cc','#33cccc'];
// 柱图
function getBar() {
    var option = {
    textStyle: {
      color: '#fff',
      fontSize: 14
    },
    toolbox: {
      show: false,
      feature: {
        saveAsImage: {
          backgroundColor: '#031245'
        },
        restore: {}
      },
      iconStyle: {
        borderColor: '#c0c3cd'
      }
    },
    legend: {
      top: 10,
      itemWidth: 8,
      itemHeight: 8,
      icon: 'circle',
      left: 'center',
      // padding: 0,
      // textStyle: {
      //   color: '#c0c3cd',
      //   fontSize: 14,
      //   padding: [2, 0, 0, 0]
      // }
    },
    // color: ['#66cc99'],
    grid: {
      containLabel: true,
      left: '3%',
      right: '5%',
      bottom: '3%',
      top: '10%'
    },
    xAxis: {
      nameTextStyle: {
        color: '#c0c3cd',
        padding: [0, 0, -10, 0],
        fontSize: 14
      },
      axisLabel: {
        color: '#fff',
        fontSize: 12,
        // rotate:8,
        padding: [10, 0, 0, 0],
      },
      axisTick: {
        lineStyle: {
          color: '#384267',
          width: 1
        },
        show: false
      },
      splitLine: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#333333',
          width: 1,
          type: 'solid'
        },
        show: false
      },
      data: [],
      type: 'category'
    },
    yAxis: {
      nameTextStyle: {
        color: '#c0c3cd',
        padding: [0, 0, -10, 0],
        fontSize: 14
      },
      axisLabel: {
        color: '#66cccc',
        fontWeight: 500,
        fontSize: '14'
      },
      axisTick: {
        lineStyle: {
          color: '#384267',
          width: 1
        },
        show: true
      },
      splitLine: {
        show: true,
        lineStyle: {
            color: '#333366',
            width: 1,
            type: 'solid'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#333333',
          width: 1,
          type: 'solid'
        },
        show: false
      },
      name: ''
    },
    series: [
      {
        data: [{
            value:0,
            itemStyle:{
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                      {
                        offset: 0,
                        color: '#33cc99'
                      },
                      {
                        offset: 1,
                        color: '#33cc66'
                      }
                    ]
                  }
            }
        }, {
            value:0,
            itemStyle:{
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                      {
                        offset: 0,
                        color: '#3399cc'
                      },
                      {
                        offset: 1,
                        color: '#33cc99'
                      }
                    ]
                  }
            }
        }, {
            value:0,
            itemStyle:{
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                      {
                        offset: 0,
                        color: '#ffcc66'
                      },
                      {
                        offset: 1,
                        color: '#ffcc66'
                      }
                    ]
                  }
            }
        }, {
            value:0,
            itemStyle:{
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                      {
                        offset: 0,
                        color: '#3399cc'
                      },
                      {
                        offset: 1,
                        color: '#33cccc'
                      }
                    ]
                  }
            }
        }, {
            value:0,
            itemStyle:{
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                      {
                        offset: 0,
                        color: '#3399cc'
                      },
                      {
                        offset: 1,
                        color: '#33cc99'
                      }
                    ]
                  }
            }
        }],
        type: 'bar',
        name:'',
        barMaxWidth: 'auto',
        barWidth: 30,
        itemStyle: {
          color: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            type: 'linear',
            global: false,
            colorStops: [
              {
                offset: 0,
                color: '#0b9eff'
              },
              {
                offset: 1,
                color: '#63caff'
              }
            ]
          }
        },
        label: {
          show: true,
          position: 'top',
          fontSize: '16',
          distance: 10,
          color: '#6699cc'
        }
      },
      {
        data: [{value:0,itemStyle:{color:'#66cc99'}}, {value:0,itemStyle:{color:'#33cccc'}}, {value:0,itemStyle:{color:'#ffff99'}}, {value:0,itemStyle:{color:'#3399cc'}}, {value:0,itemStyle:{color:'#33cccc'}}],
        type: 'pictorialBar',
        barMaxWidth: '20',
        symbol: 'diamond',
        symbolOffset: [0, '50%'],
        symbolSize: [30, 15]
      },
      {
        data: [{value:0,itemStyle:{color:'#66cc99'}}, {value:0,itemStyle:{color:'#33cccc'}}, {value:0,itemStyle:{color:'#ffff99'}}, {value:0,itemStyle:{color:'#3399cc'}}, {value:0,itemStyle:{color:'#33cccc'}}],
        type: 'pictorialBar',
        barMaxWidth: '20',
        symbolPosition: 'end',
        symbol: 'diamond',
        symbolOffset: [0, '-50%'],
        symbolSize: [30, 12],
        zlevel: 2
      },
      {
        data: [{value:0,itemStyle:{color:'#66cc99'}}, {value:0,itemStyle:{color:'#33cccc'}}, {value:0,itemStyle:{color:'#ffff99'}}, {value:0,itemStyle:{color:'#3399cc'}}, {value:0,itemStyle:{color:'#33cccc'}}],
        type: 'pictorialBar',
        barMaxWidth: '20',
        symbol: 'diamond',
        symbolOffset: [0, '50%'],
        symbolSize: [30, 15],
        zlevel: -2
      },
    ],
    tooltip: {
      // trigger: 'axis',
      show: true
    }};
    sb_bar.setOption(option);
    return option;
}
// 折线
function getLine(){
    var option = {
    textStyle: {
      color: '#fff',
      fontSize: 14
    },
    legend: {
        data: ['工单总数', '事件单数量', '服务请求单数', '巡检单数量'],
        textStyle: {
            align: 'center',
            color:'#fff'
        },
        itemStyle: {
            borderWidth: 0
        },
        itemWidth: 14,
        itemHeight: 5,
        icon: 'rect',
    },
    // color: ['#66cc99'],
    grid: {
      containLabel: true,
      left: '3%',
      right: '5%',
      bottom: '10%',
      top: '10%'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
      axisLabel: {
        color: '#fff',
        fontSize: 15,
        padding: [10, 0, 0, 0],
      },
      axisTick: {
        lineStyle: {
          color: '#fff',
          width: 1
        },
        show: false
      },
      splitLine: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#fff',
          width: 1,
          type: 'solid'
        },
        show: false
      },
      data: [0],
    },
    yAxis: {
      nameTextStyle: {
        color: '#c0c3cd',
        padding: [0, 0, -10, 0],
        fontSize: 14
      },
      axisLabel: {
        color: '#66cccc',
        fontWeight: 500,
        fontSize: '14'
      },
      axisTick: {
        lineStyle: {
          color: '#384267',
          width: 1
        },
        show: true
      },
      splitLine: {
        show: true,
        lineStyle: {
            color: '#333366',
            width: 1,
            type: 'solid'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#333333',
          width: 1,
          type: 'solid'
        },
        show: false
      },
      name: ''
    },
    series: [
        {
            name: '工单总数',
            type: 'line',
            smooth: true, //是否平滑
            symbolSize: 0,
            lineStyle: {
                normal: {
                    color: '#33ccff',
                },
            },
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(51,204,255,.3)"
    
    
                        },
                        {
                            offset: 1,
                            color: "rgba(25,163,223, 0)"
                        }
                    ], false),
                    shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
            itemStyle: {
                color: '#7AA1FF',
                borderWidth: 3,
                borderColor: '#f3f3f3',
            },
            tooltip: {
                formatter: '{a}人',
            },
            data: [0],
        },
        {
            name: '事件单数量',
            type: 'line',
            stack: 'Total',
            smooth: true, //是否平滑
            symbolSize: 0,
            lineStyle: {
                normal: {
                    color: '#66ff33',
                },
            },
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(102,255,51,.3)"
    
    
                        },
                        {
                            offset: 1,
                            color: "rgba(25,163,223, 0)"
                        }
                    ], false),
                    shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
            label: {
                show: false,
                position: 'top',
                textStyle: {
                    color: '#00ca95',
                },
                formatter: '{c} 人',
            },
            itemStyle: {
                color: '#00ca95',
                borderColor: '#fff',
                borderWidth: 3,
            },

            data: [0],
        },
        {
            name: '服务请求单数',
            type: 'line',
            stack: 'Total',
            smooth: true, //是否平滑
            symbolSize: 0,
            lineStyle: {
                normal: {
                    color: '#ffccff',
                },
            },
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(255,204,255,.3)"
    
    
                        },
                        {
                            offset: 1,
                            color: "rgba(25,163,223, 0)"
                        }
                    ], false),
                    shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
            label: {
                show: false,
                position: 'top',
                textStyle: {
                    color: '#C258F6',
                },
                formatter: '{c} 人',
            },

            itemStyle: {
                color: '#C258F6',
                borderColor: '#fff',
                borderWidth: 3,
            },

            data: [0],
        },
        {
          name: '巡检单数量',
          type: 'line',
          stack: 'Total',
          smooth: true, //是否平滑
          symbolSize: 0,
          lineStyle: {
              normal: {
                  color: '#ffcc33',
              },
          },
          areaStyle: { //区域填充样式
              normal: {
                  //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: "rgba(255,204,51,.3)"
  
  
                      },
                      {
                          offset: 1,
                          color: "rgba(25,163,223, 0)"
                      }
                  ], false),
                  shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
                  shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
          },
          label: {
              show: false,
              position: 'top',
              textStyle: {
                  color: '#C258F6',
              },
              formatter: '{c} 人',
          },

          itemStyle: {
              color: '#ffcc33',
              borderColor: '#fff',
              borderWidth: 3,
          },

          data: [0],
      }
    ]};
    gd_line.setOption(option);
    return option;
}
//仪表盘--客户满意度
function getGauge () {
  option = {
    series: [{
        type: 'gauge',
        name:'本年度满意度',
        center: ['25.7%', '54.4%'],
        range: [0, 100],
        min: 0,
        max: 100,
        startAngle: 200,
        endAngle: -20,
        splitNumber: 5,
        radius: '60.2',
        progress: {
            show: true,
            width: 10
        },
        itemStyle: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 1, 0, [{
                    offset: 0,
                    color: '#6699ff',
                },
                {
                    offset: 1,
                    color: '#33ff99',
                }
            ]
        )
        },
        axisLine: {
          show:false,
          lineStyle: {
              width: 8
          }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show:false,
            length: 15,
            lineStyle: {
                width: 2,
                color: '#999'
            }
        },
        axisLabel: {
            distance: -5,
            color: '#99ccff',
            fontSize: 12
        },
        pointer:{
          icon: 'triangle',
          itemStyle: {
            color: '#99ccff'
        }
        },
        anchor: {
            show: true,
            showAbove: true,
            size: 12,
            itemStyle: {
                borderWidth: 0,
                color: '#99ccff'
            }
        },
        title: {
            show: true,
            offsetCenter:[0, '92%'],
            fontStyleL: 'italic',
            color: '#ccffff',
            fontFamily: 'Myfont',
            fontSize: 15,
        },
        detail: {
            valueAnimation: true,
            color: '#66ffff',
            fontSize: 22,
            fontWeight: 400,
            offsetCenter: [0, '58%'],
            formatter: function (value) {
              return value + '%';
          }
        },
        data: [{
            value: 100,
            name: '本年度满意度'
        }]
    },
    {
      type: 'gauge',
      name:'本年度满意度',
      center: ['72.5%', '54.4%'],
      range: [0, 100],
      min: 0,
      max: 100,
      startAngle: 200,
      endAngle: -20,
      splitNumber: 5,
      radius: '60.2',
      progress: {
          show: true,
          width: 10
      },
      itemStyle: {
        color: new echarts.graphic.LinearGradient(
          0, 0, 1, 0, [{
                  offset: 0,
                  color: '#6699ff',
              },
              {
                  offset: 1,
                  color: '#33ff99',
              }
          ]
      )
      },
      axisLine: {
        show:false,
        lineStyle: {
            width: 8
        }
      },
      axisTick: {
          show: false
      },
      splitLine: {
          show:false,
          length: 15,
          lineStyle: {
              width: 2,
              color: '#999'
          }
      },
      axisLabel: {
          distance: -5,
          color: '#99ccff',
          fontSize: 12
      },
      pointer:{
        icon: 'triangle',
        itemStyle: {
          color: '#99ccff'
      }
      },
      anchor: {
          show: true,
          showAbove: true,
          size: 12,
          itemStyle: {
              borderWidth: 0,
              color: '#99ccff'
          }
      },
      title: {
        show: true,
        offsetCenter:[0, '92%'],
        fontStyleL: 'italic',
        fontFamily: 'Myfont',
        color: '#ccffff',
        fontSize: 15,
    },
      detail: {
          valueAnimation: true,
          color: '#66ffff',
          fontSize: 22,
          fontWeight: 400,
          offsetCenter: [0, '60%'],
          formatter: function (value) {
            return value + '%';
        }
      },
      data: [{
          value: 100,
          name: '上年度满意度'
      }]
  }]
};
  kh_gauge.setOption(option);
  return option;
}
//环形图--工程师忙碌比
function getPie () {
  option = {
    series: [{
        type: 'pie',
        startAngle:90,
        emphasis: {
          show:false
        },
        center: ['25%', '60%'],
        radius: ["48%", "55%"],
        itemStyle: {
          normal: {
              color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                  offset: 0, color: 'rgba(255, 159, 60, 1)'
              }, {
                  offset: 1, color: 'rgba(255, 202, 100, 1)'
              }],
              global: false
              }
          },
          emphasis: {
            show:false
          },
      },
      label: { // 设置图形标签样式
        show: true, // 未高亮时不显示标签，否则高亮时显示的标签会与静态的标签重叠
        position: 'center',
        // 设置标签展示内容,其中{d}、{b}为echarts标签内容格式器
        formatter: function(value,a,b){
          console.log(value)
          return '{a|' + value.value + '}{b|/' + totalAreaEngineer + '}\n{c|区域工程师}';
        },
        // 为标签内容指定样式，只能设置series-pie.label支持的样式
        rich: {
          a: {
            fontSize: 26,
            color:'#ffff99',
          },
          b: {
            fontSize: 22,
            color:'#99ccff',
          },
          c: {
            fontSize:  18,
            color: '#ccffff',
            fontFamily: 'Myfont',
          }
        }
      },
        labelLine: {
          show: false
        },
        data: [{
            value: 0,
            itemStyle: {
              normal: {
                  color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                      offset: 0, color: 'rgba(255, 255, 204, 1)'
                  }, {
                      offset: 1, color: 'rgba(255, 204, 102, 1)'
                  }],
                  global: false
                  },
                  borderRadius: 40,
              }
          }
        },
        {
          value: 100,
          label:{
            normal: {
              show: false,
            }
          },
          itemStyle: {
            normal: {
                color: 'rgba(204,204,204,.3)'
            }
        }
      }]
    },
    {
      type: 'pie',
      startAngle:90,
      center: ['71.2%', '60%'],
      radius: ["48%", "55%"],
      itemStyle: {
        normal: {
            color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'rgba(255, 159, 60, 1)'
            }, {
                offset: 1, color: 'rgba(255, 202, 100, 1)'
            }],
            global: false
            }
        }
    },
      labelLine: {
        show: false
      },
      label: { // 设置图形标签样式
        show: true, // 未高亮时不显示标签，否则高亮时显示的标签会与静态的标签重叠
        position: 'center',
        // 设置标签展示内容,其中{d}、{b}为echarts标签内容格式器
        formatter: function(value,a,b){
          return '{a|' + value.value + '}{b|/' + totalEngineerd + '}\n{c|全国工程师}';
        },
        // 为标签内容指定样式，只能设置series-pie.label支持的样式
        rich: {
          a: {
            fontSize: 26,
            color:'#ffff99',
          },
          b: {
            fontSize: 22,
            color:'#99ccff',
          },
          c: {
            fontSize:  18,
            color: '#ccffff',
            fontFamily: 'Myfont',
          }
        }
      },
      data: [{
          value: 0,
          itemStyle: {
            normal: {
                color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: 'rgba(255, 255, 204, 1)'
                }, {
                    offset: 1, color: 'rgba(102, 204, 255, 1)'
                }],
                global: false
                },
                borderRadius: 40,
            }
        }
      },
      {
        value: 100,
        label:{
          normal: {
            show: false,
          }
        },
        itemStyle: {
          normal: {
              color: 'rgba(204,204,204,.3)'
          }
      }
    }]
  },]
};
  gcs_pie.setOption(option);
  return option;
}
//3d图配置
var pie3 = {eventNum:{name:'事件工单',color:'#3399ff'},
            supportNum:{name:'内部支持',color:'#ff9966'},
            patrolNum:{name:'巡检工单',color:'#ffcc33'},
            callbackNum:{name:'问题工单',color:'#66ff99'},
            serviceNum:{name:'服务请求',color:'#ff99ff'},
            changeNum:{name:'变更工单',color:'#999999'}
          };