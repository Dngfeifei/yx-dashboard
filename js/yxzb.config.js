// 柱图配置
var arrPie = {
    gcs_bar:[
        {
            data: [{
                value:1643,
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
                value:6980,
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
                value:869,
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
                value:2151,
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
                value:12,
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
                    color: '#3399cc'
                  },
                  {
                    offset: 1,
                    color: '#33cc99'
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
            data: [{value:1643,itemStyle:{color:'#33cccc'}}, {value:6980,itemStyle:{color:'#33cccc'}}, {value:869,itemStyle:{color:'#33cccc'}}, {value:2151,itemStyle:{color:'#33cccc'}}, {value:12,itemStyle:{color:'#33cccc'}}],
            type: 'pictorialBar',
            barMaxWidth: '20',
            itemStyle: {
              color: '#33cccc'
            },
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [30, 15]
          },
          {
            data: [{value:1643,itemStyle:{color:'#33cccc'}}, {value:6980,itemStyle:{color:'#33cccc'}}, {value:869,itemStyle:{color:'#33cccc'}}, {value:2151,itemStyle:{color:'#33cccc'}}, {value:12,itemStyle:{color:'#33cccc'}}],
            type: 'pictorialBar',
            barMaxWidth: '20',
            itemStyle: {
              color: '#33cccc'
            },
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [30, 12],
            zlevel: 2
          },
          {
            data: [{value:1643,itemStyle:{color:'#33cccc'}}, {value:6980,itemStyle:{color:'#33cccc'}}, {value:869,itemStyle:{color:'#33cccc'}}, {value:2151,itemStyle:{color:'#33cccc'}}, {value:12,itemStyle:{color:'#33cccc'}}],
            type: 'pictorialBar',
            barMaxWidth: '20',
            itemStyle: {
              color: '#33cccc'
            },
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [30, 15],
            zlevel: -2
          },
    ],
    kh_bar:[
        {
            name: '柱顶部',
            type: 'pictorialBar',
            symbolSize: [1, 20],
            symbolOffset: [0, -20],
            z: 12,
            itemStyle: {
                normal: {
                    color: '#333366',
                },
            },
            label: {
                show: false,
                position: 'top',
                fontSize: 16,
            },
            symbolPosition: 'end',
            data: [24,5,8,41,169],
        },
        {
		    name: '客户',
		    type: 'bar',
		    barWidth: 15, //柱子宽度
		    // barGap: 0.3, //柱子之间间距
            // yAxisIndex:1,
		    itemStyle: {
		        // normal: {
		        //     color: '#00FFFF',
		        //     opacity: 1,
		        // },
				normal: {
		            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                offset: 0,
		                color: '#33ffff'
		            }, {
		                offset: 1,
		                color: '#6666ff'
		            }]),
		            opacity: 1,
                    borderRadius: 15
		        }
		    },
			label:{
				normal: {
					show: true,
					position: "top",
                    offset:[0,-16],
                    width:42,
                    height:16,
                    lineHeight:16,
                    borderRadius: 14,
                    backgroundColor:'#333366',
					color:'#66ccff',
                    padding: [0, 8],
                    formatter: function(value,a,b){
                        // console.log(value,a,b)
                        return '{b|}{a|' + value.value + '}';
                    },
                      // 为标签内容指定样式，只能设置series-pie.label支持的样式
                      rich: {
                        a: {
                        width:22,
                        padding: [3, 0,0,15],
                          color:'#66ccff',
                        },
                        b:{
                            width:3,
                            height:3,
                            borderRadius:3,
                            backgroundColor:'#33ffff'
                        }
                      }
				}
			},
		    data: [24,5,8,41,169],
		    // animationDuration: function (idx) {
		    //     return idx * 1500 + 1000;
		    // }
		},
    ],
    xm_bar:[
        {
            name:'项目数量',
            type: 'bar',
            barWidth: 22,
            itemStyle: {
              // @ts-ignore
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#ffcc99',
                  },
                  {
                    offset: 0.7,
                    color: '#ffff99',
                  },
                  {
                    offset: 1,
                    color: '#ccff99',
                  },
                ]),
              },
            },
            data: [47, 46, 41, 46, 44],
            z: 10,
            zlevel: 0,
          },
          {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
              normal: {
                color: 'rgba(24, 27, 36, 0.63)',
              },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 4,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [22, 5],
            symbolPosition: 'start',
            symbolOffset: [1, 1],
            data: [47, 46, 41, 46, 44],
            width: 2,
            z: 0,
            zlevel: 1,
          },
          {
            name: '外框',
            type: 'bar',
            barGap: '-110%', // 设置外框粗细
            barWidth: 22,
            itemStyle: {
              normal: {
                color: 'transparent', // 填充色
                // barBorderRadius: 0, //圆角半径
                label: {
                  // 标签显示位置
                  show: false,
                  position: 'top', // insideTop 或者横向的 insideLeft
                },
              },
            },
            z: 0,
          },
    ],
    gd_bar:[
        {
            name: '柱顶部',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [10, 5],
            symbolOffset: [0, -5],
            z: 12,
            itemStyle: {
                normal: {
                    color: '#ffffcc',
                },
            },
            label: {
                show: false,
                position: 'top',
                fontSize: 16,
            },
            symbolPosition: 'end',
            data: [47, 46, 41, 46, 44],
        },
        {
            type: 'bar',
            barWidth: 10,
            data: [47, 46, 41, 46, 44],
            itemStyle: {
               normal: {
                //   barBorderRadius: [0, 20, 20, 0],
                  color: new echarts.graphic.LinearGradient(
                     0,
                     0,
                     0,
                     1,
                     [
                        {
                           offset: 0,
                           color: 'rgba(204, 102, 102, .8)', // 0% 处的颜色
                        },
                        {
                           offset: 1,
                           color: 'rgba(204, 102, 102, 0.2)', // 100% 处的颜色
                        },
                     ],
                     false
                  ),
               },
            },
         },
    ]
}
// 3d柱图配置
var pie3 = {
    bank:{name:'银行',color:'#3399ff'},
    government:{name:'政府',color:'#ff9966'},
    manufacture:{name:'制造',color:'#ffcc33'},
    securities:{name:'证券和基金',color:'#66ff99'},
    telecom:{name:'电信',color:'#ff99ff'},
    other:{name:'其他',color:'#999999'}
}
// 柱图
function getBar(obj) {
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
      show:false,
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
      bottom: '8%',
      top: '25%'
    },
    xAxis: {
      nameTextStyle: {
        color: '#c0c3cd',
        padding: [0, 0, -10, 0],
        fontSize: 14
      },
      axisLabel: {
        color: '#fff',
        fontSize: 15,
        interval: 0,
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
      data: ['小型机大区','服务器','存储','网络设备','软件'],
      type: 'category'
    },
    yAxis: {
      nameTextStyle: {
        color: '#c0c3cd',
        padding: [0, 0, -10, 0],
        fontSize: 14
      },
      axisLabel: {
        color: '#88caf4',
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
    series: arrPie[obj] || [],
    tooltip: {
      // trigger: 'axis',
      show: true
    }};
    // kh_bar.setOption(option);
    return option;
}

//横向柱图
function getBar2(obj) {
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
  // color: ['#66cc99'],
  grid: {
    containLabel: true,
    left: '3%',
    right: '5%',
    bottom: '0%',
    top: '2%'
  },
  yAxis: {
    nameTextStyle: {
      color: '#c0c3cd',
      padding: [0, 0, -10, 0],
      fontSize: 16
    },
    axisLabel: {
      color: '#99ccff',
      fontFamily: 'Myfont',
      fontSize: 15,
      interval: 0,
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
    data: ['华东大区','华北大区','华南大区','新疆大区','西北大区','西南大区'],
    type: 'category'
  },
  xAxis: {
    nameTextStyle: {
      color: '#c0c3cd',
      padding: [0, 0, -10, 0],
      fontSize: 14
    },
    axisLabel: {
      color: '#88caf4',
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
      name: '在途',
      type: 'bar',
      barWidth: 8, // 柱子宽度
      itemStyle: {
        normal: {
          barBorderRadius: [10, 10, 10, 10],
          color: '#cc6666'
        }
      },
      "data": [98, 64, 68, 136, 96, 156],
    },
    {
      name: '库存',
      type: 'bar',
      barWidth: 8, // 柱子宽度
      barGap: 0.5, //柱间距离
      itemStyle: {
        normal: {
          barBorderRadius: [10, 10, 10, 10],
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: 'rgba(13,213,236,1)'
          },
          {
            offset: 1,
            color: "rgba(0,121,254,0.7)"
          }
          ])
        }
      },
      "data": [98, 64, 68, 136, 96, 156],
    },
    {
      name: '领用',
      type: 'bar',
      barWidth: 8, // 柱子宽度
      itemStyle: {
        normal: {
          barBorderRadius: [10, 10, 10, 10],
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
            offset: 0,
            color: 'rgba(255,153,51,.7)'
          },
          {
            offset: 1,
            color: "rgba(255,255,51,1)"
          }
          ])
        }
      },
      "data": [98, 64, 68, 136, 96, 156],
    },
    {
      name: '整机',
      type: 'bar',
      barWidth: 8, // 柱子宽度
      itemStyle: {
        normal: {
          barBorderRadius: [10, 10, 10, 10],
          color: '#33ff99'
        }
      },
      "data": [98, 64, 68, 136, 96, 156],
    }
  ],
  tooltip: {
    // trigger: 'axis',
    show: true
  }};
  bj_bar.setOption(option);
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
        data: ['工单总数', '事件单数量', '服务请求单数', '巡检单数'],
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
        interval: 0,
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
      data: ['2022-06','2023-06','2024-06','2025-06','2026-06','2027-06','2028-06'],
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
            data: [28, 27, 35, 34, 24],
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

            data: [20, 13, 17, 23, 12],
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

            data: [8, 14, 18, 11, 12],
        }
    ]};
    gd_line.setOption(option);
    return option;
}

// 工单明细数据
var tableData = [
  {a:'INCTD0010111',b:'中国移动通信集团有限公司',c:'刘欢',d:'事件流程',e:'变更审核',f:'2022-02-09 12:21:44'},
  {a:'INCTD0010111',b:'中国移动通信集团有限公司',c:'刘欢',d:'事件流程',e:'变更审核',f:'2022-02-09 12:21:44'},
  {a:'INCTD0010111',b:'中国移动通信集团有限公司',c:'刘欢',d:'事件流程',e:'变更审核',f:'2022-02-09 12:21:44'},
]
// 行业金额统计数据
var moneyData = {
    "bank":111,
    "government":222,
    "manufacture":333,
    "securities":444,
    "telecom":555,
    "other":666,
    "total":2331
  }
