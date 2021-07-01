//event load
document.addEventListener("DOMContentLoaded", function(event) {
    eightOptions();
});
//bg round
function bgRoud(len){
  let color = [];
  for (var i = 0; i < len; i++) {
    if(color[i-1]==="#ffc000" || color[i-1]===undefined){
      color.push("#c00000");
    }else{
      color.push("#ffc000");
    }
  }
  return color;
}
//chart connect
var one = document.getElementById('oneChart').getContext('2d');
var two = document.getElementById('twoChart').getContext('2d');
var three = document.getElementById('threeChart').getContext('2d');
var four = document.getElementById('fourChart').getContext('2d');
var five = document.getElementById('fiveChart').getContext('2d');
var six = document.getElementById('sixChart').getContext('2d');
var seven = document.getElementById('sevenChart').getContext('2d');
var eight = document.getElementById('eightTable');
var nine = document.getElementById('nineChart').getContext('2d');
var ten = document.getElementById('tenChart').getContext('2d');
//data connect
var oneData = JSON.parse(document.getElementById('drawingOne').value);
var twoData = JSON.parse(document.getElementById('drawingTwo').value);
var threeData = JSON.parse(document.getElementById('drawingThree').value);
var fourData = JSON.parse(document.getElementById('drawingFour').value);
var fiveData = JSON.parse(document.getElementById('drawingFive').value);
var sixData = JSON.parse(document.getElementById('drawingSix').value);
var sevenData = JSON.parse(document.getElementById('drawingSeven').value);
var eightData = JSON.parse(document.getElementById('drawingEight').value);
var nineData = JSON.parse(document.getElementById('drawingNine').value);
var tenData = JSON.parse(document.getElementById('drawingTen').value);


const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

const labels = ['jan', 'Feb','Mar','Apr','May','June', 'July']
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1,2,3,4,5,6],
      borderColor: "#f00000",
      backgroundColor: "#f00000",
    },
    {
      label: 'Dataset 2',
      data: [2,5,6,7,8,9,6],
      borderColor: "#f00000",
      backgroundColor: "#f00000",
    }
  ]
};
//chart options
var oneOptions = new Chart(one, {
    type: 'horizontalBar',
    data: {
        labels: oneData.state,
        datasets: [{
            label: 'Клиенты',
            backgroundColor: ["#c00000","#ffc000",'#92d050'],
            borderColor: '#1ba5ff',
            data: oneData.count
        }]
    },
    options: {
      title: {
        display: true,
        text: '1. Количество обслуженных и необслуженных клиентов',
        position: 'top',
        fontSize: 22,
        fontColor: '#2f2e2e',
        fontFamily: 'Arial',
        lineHeight: 1.5,
        padding: 20
    },
      responsive: true,
      scales: {
           yAxes: [{
             display: true,
             ticks: {
               fontColor: "#000000",
               fontStyle: "bold",
               fontSize: 12
             }
           }],
           xAxes: [{
             ticks: {
               beginAtZero: true,
             }
           }]
       },
      legend: {
          labels: {
              fontColor: 'black'
          }
      },
      plugins: {
        datalabels: {
          color: '#000000',
          labels: {
              title: {
                  font: {
                      weight: 'normal',
                      size: 14
                  }
              },
              value: {
                font: {
                    weight: 'normal',
                    color: '#000000',
                    size: 14
                }

              }
          },
          anchor: 'start',
          clamp: false,
          align: 'end',
          formatter: function(value) {
              return  value;
          }
        }
      }
    }
});
var twoOptions = new Chart(two, {
    type: 'bar',
    data: {
        labels: twoData.month,
        datasets: [{
            label: 'Всего клиентов',
            backgroundColor: '#c00000',
            borderColor: '#1ba5ff',
            data: twoData.total
        },{
            label: 'Обслужено',
            backgroundColor: '#ffc000',
            borderColor: '#62d755',
            data: twoData.inservice
        }]
    },
    options: {
      title: {
        display: true,
        text: '2. Количество клиентов и обслуженных клиентов по месяцам',
        position: 'top',
        fontSize: 22,
        fontColor: '#2f2e2e',
        fontFamily: 'Arial',
        lineHeight: 1.5,
        padding: 20
    },
      responsive: true,
      scales: {
         xAxes: [{
           ticks: {
             fontColor: "#000000",
             fontSize: 12,
             fontStyle: 'bold'
           },
         }]
       },
      plugins: {
        datalabels: {
          color: '#000000',
          labels: {
              title: {
                  font: {
                      weight: 'normal',
                      size: 14
                  }
              },
              value: {
                font: {
                  color: 'black',
                  size: 14
                }

              }
          },
          anchor: 'end',
          clamp: false,
          align: 'top',
          formatter: function(value) {
              return  value;
          }
        }
      }
    }
});
var threeOptions = new Chart(three, {
    type: 'horizontalBar',
    data: {
        labels: threeData.queue,
        datasets: [{
            label: 'Услуги',
            backgroundColor: bgRoud(threeData.count.length),
            borderColor: '#1ba5ff',
            data: threeData.count
        }]
    },
    options: {
      title: {
        display: true,
        text: '3. Количество предоставленных услуг',
        position: 'top',
        fontSize: 22,
        fontColor: '#2f2e2e',
        fontFamily: 'Arial',
        lineHeight: 1.5,
        padding: 20
    },
      responsive: true,
      scales: {
        yAxes: [{
          display: true,
          ticks: {
            fontColor: "#000000",
            fontStyle: "bold",
            fontSize: 12
          }
        }],
        xAxes: [{
          ticks: {
            beginAtZero: true,
          }
        }]
       },
      legend: {
          labels: {
              fontColor: 'black'
          }
      },
      plugins: {
        datalabels: {
          color: '#000000',
          labels: {
              title: {
                  font: {
                      weight: 'normal',
                      size: 14
                  }
              },
              value: {
                font: {
                    weight: 'normal',
                    color: '#000000',
                    size: 14
                }

              }
          },
          anchor: 'start',
          clamp: false,
          align: 'end',
          formatter: function(value) {
              return  value;
          }
        }
      }
    }
});
var fourOptions = new Chart(four, {
    type: 'doughnut',
    data: {
      datasets: [{
          data: fourData.client,
          backgroundColor: ["#6ea9df","#f3a36c","#c00000","#ffcd28", "#92d050"]
      }],
      labels: fourData.time
    },
    options: {
      title: {
        display: true,
        text: '4. Среднее время ожидания клиентов по сегментам',
        position: 'top',
        fontSize: 22,
        fontColor: '#2f2e2e',
        fontFamily: 'Arial',
        lineHeight: 1.5,
        padding: 20
    },
        responsive: true,
        legend: {
          display: true,
          position: 'bottom',
          labels: {
              boxWidth: 20,
              fontColor: '#111',
              padding: 15
          }
        },
        tooltips: {
            enabled: false
        },
        plugins: {
          datalabels: {
              color: '#000000',
              labels: {
                  title: {
                      font: {
                          weight: 'normal',
                          size: 14
                      }
                  },
                  value: {
                    font:{
                      color: '#000000',
                      size: 14
                    }
                  }
              },
              textAlign: 'center',
              font: {
                  fontSize: 14,
                  fontWeight: 'normal'
              },
              formatter: function(value, ctx) {
                  return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
              }
          }
        }
    }
});
var fiveOptions = new Chart(five, {
    type: 'line',
    data:{
      labels:fiveData.monthDay,
      datasets:[
        {
          label:"Клинеты",
          data:fiveData.count,
          fill:false,
          borderColor:"#c00000",
          lineTension:0.1
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: '5. Нагрузка клиентов по дням (месяц)',
        position: 'top',
        fontSize: 22,
        fontColor: '#2f2e2e',
        fontFamily: 'Arial',
        lineHeight: 1.5,
        padding: 20
    },
      responsive: true,
      scales: {
         yAxes: [{
           stacked: true,
           gridLines: {
             display: true,
             color: "#e4e4e4"
           }
         }],
         xAxes: [{
           gridLines: {
             display: false
           },
           ticks: {
             fontColor: "#000000",
             fontSize: 12,
             fontStyle: 'normal'
           }
         }]
       },
      plugins: {
           datalabels: false
       }
    }
});
var sixOptions = new Chart(six, {
    type: 'line',
    data:{
      labels:sixData.clock,
      backgroundColor: '#e4e4e4',
      datasets:[
        {
          label:"Клинеты",
          data:sixData.count,
          fill:false,
          borderColor:"#c00000",
          lineTension:0.1
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: '6. Средняя нагрузка клиентов по часам',
        position: 'top',
        fontSize: 22,
        fontColor: '#2f2e2e',
        fontFamily: 'Arial',
        lineHeight: 1.5,
        padding: 20
    },
      responsive: true,
      scales: {
         yAxes: [{
           stacked: true,
           gridLines: {
             display: true,
             color: "#e4e4e4"
           }
         }],
         xAxes: [{
           ticks: {
             fontSize: 12,
             fontStyle: 'bold',
             fontColor: '#000000'
           },
           gridLines: {
             display: false
           }
         }]
       },
      plugins: {
            datalabels: {
                color: '#000000',
                anchor: 'end',
                clamp: false,
                align: 'top',
                labels: {
                    title: {
                        font: {
                            weight: 'normal',
                            size: 14
                        }
                    },
                    value: {
                      font: {
                          color: 'black',
                          size: 14
                      }

                    }
                },
                textAlign: 'center',
                font: {
                    fontWeight: 'bold'
                },
                formatter: function(value) {
                    return value;
                }
            }
        }
    }
});
var sevenOptions = new Chart(seven, {
  options: {
    title: {
      display: true,
      text: '7. Средняя статистика сотрудников',
      position: 'top',
      fontSize: 22,
      fontColor: '#2f2e2e',
      fontFamily: 'Arial',
      lineHeight: 1.5,
      padding: 20
  },
  scales: {
          
           yAxes: [{ barPercentage: 1.0,
            ticks: {
                           fontColor: "#000000",
                           fontSize: 10,
                           fontStyle: "bold"
                    },
          }],
          xAxes: [{
            ticks: {
              fontColor: "#000000",
              fontSize: 10,
              fontStyle: "bold"
                  },
          }],
          
    },
    legend: {
      position: 'bottom',
      labels: {
          fontColor: 'black'
      }
    },
    plugins: {
      datalabels: {
        color: '#000000',
        labels: {
            title: {
                font: {
                    weight: 'normal',
                    size: 10
                }
            },
            value: {
                font: {
                  color: '#000000',
                  size: 10
                }

            }
        },
        anchor: 'start',
        clamp: true,
        align: 'end',
        formatter: function(value) {
            return  value;
        }
      }
    },
tooltips: {
   callbacks: {
      label: function(tooltipItem, data) {
console.log(tooltipItem);
     return data.datasets[tooltipItem.datasetIndex].label +': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();
}
}
},          
    responsive: true,
    maintainAspectRatio: false,
    animation: {

              onComplete: function(animation) {
              }
          }
},
  type: 'horizontalBar',
  data:   {
      labels: sevenData.employee,
      datasets: [
      {
        label: 'Всего клиентов',
        borderColor: '#c00000',
        borderWidth: 1,
        backgroundColor: '#c00000',
        data: sevenData.total,
        fill: false,
      },
      {
        label: 'Обслужено',
        borderColor: '#ffc000',
        borderWidth: 1,
        backgroundColor: '#ffc000',
        data: sevenData.inservice,
        fill: false
      }
]
  }}
)
// var sevenOptions = new Chart(seven, {
  
//     type: 'horizontalBar',
//     data: {
//         labels: sevenData.employee,
//         datasets: [
//           {
//             barPercentage: 0.5,
//               label: 'Всего клиентов',
//               backgroundColor: '#c00000',
//               borderColor: '#1ba3fe',
//               data: sevenData.total
//           },
//           {
//             barPercentage: 0.5,
//               label: 'Обслужено',
//               backgroundColor: '#ffc000',
//               borderColor: '#61d855',

//               data: sevenData.inservice
//           }
//         ]
//     },
//     options: {
//       barValueSpacing: 50,

//       responsive: true,
//       scales: {
//          yAxes: [{
//           grid:{
//             offset: true,
//           },
//           barThickness: 5,
          
//            ticks: {
//              fontColor: "#000000",
//              fontSize: 12,
//              fontStyle: "bold"
//            },
//            stacked: false,
//            gridLines: {
//              display: false,
//              color: "#e4e4e4"
//            }
//          }],
//          xAxes: [{
//           maintainAspectRatio: true,
//            ticks: {
//             suggestedMax : 100
//            },

//            gridLines: {
//              display: true
//            }
//          }]
//        },
//       legend: {
//         position: 'bottom',
//         labels: {
//             fontColor: 'black'
//         }
//       },
//       plugins: {
//         datalabels: {
//           color: '#000000',
//           labels: {
//               title: {
//                   font: {
//                       weight: 'normal',
//                       size: 12
//                   }
//               },
//               value: {
//                   font: {
//                     color: '#000000',
//                     size: 12
//                   }

//               }
//           },
//           anchor: 'start',
//           clamp: true,
//           align: 'end',
//           formatter: function(value) {
//               return  value;
//           }
//         }
//       }
//     }
// });
function eightOptions(){
  let table = "";
  if(eightData==="" || eightData===undefined){
    return false;
  }
  if(eightData.data.length>0){
    for (var i = 0; i < eightData.data.length; i++) {
      table+= "<tr>";
      table += "<td>" + eightData.data[i].branchName + "</td>";
      table += "<td>" + eightData.data[i].fio + "</td>";
      table += "<td>" + eightData.data[i].position + "</td>";
      table += "<td>" + eightData.data[i].count + "</td>";
      table += "<td>" + eightData.data[i].limitations + "</td>";
      table+= "</tr>";
    }
    eight.innerHTML = table;
  }
}
var nineOptions = new Chart(nine, {
    type: 'horizontalBar',
    data: {
        labels: nineData.queue,
        datasets: [{
            label: 'Мин.',
            backgroundColor: '#c00000',
            borderColor: '#c00000',
            data: nineData.count
        }]
    },
    options: {
      title: {
        display: true,
        text: '9. Среднее время обслуживания (мин)',
        position: 'top',
        fontSize: 22,
        fontColor: '#2f2e2e',
        fontFamily: 'Arial',
        lineHeight: 1.5,
        padding: 20
    },
      responsive: true,
      scales: {
           yAxes: [{
             display: true,
             ticks: {
               fontColor: "#000000",
               fontStyle: "bold",
               fontSize: 12
             }
           }],
           xAxes: [{
             ticks: {
               beginAtZero: true,
             }
           }]
       },
      plugins: {
        datalabels: {
          color: '#ffffff',
          labels: {
            title: {
                font: {
                    weight: 'normal',
                    size: 14
                }
            },
            value: {
              font:{
                color: '#ffffff',
                size: 14
              }

            }
          },
          anchor: 'start',
          clamp: false,
          align: 'end',
          formatter: function(value) {
              return  value;
          }
        }
      }
    }
});
var tenOptions = new Chart(ten, {
    type: 'horizontalBar',
    data: {
        labels: tenData.queue,
        datasets: [{
            label: 'Мин.',
            backgroundColor: '#c00000',
            borderColor: '#c00000',
            data: tenData.count
        }]
    },
    options: {
      title: {
        display: true,
        text: '10. Среднее время ожидания (мин)',
        position: 'top',
        fontSize: 22,
        fontColor: '#2f2e2e',
        fontFamily: 'Arial',
        lineHeight: 1.5,
        padding: 20
    },
      responsive: true,
      scales: {
           yAxes: [{
             display: true,
             ticks: {
               fontColor: "#000000",
               fontStyle: "bold",
               fontSize: 12
             }
           }],
           xAxes: [{
             ticks: {
               beginAtZero: true,
             }
           }]
       },
      plugins: {
        datalabels: {
          color: '#ffffff',
          labels: {
            title: {
                font: {
                    weight: 'normal',
                    size: 14
                }
            },
            value: {
                font: {
                  color: '#ffffff',
                  size: 14
                }

            }
          },
          anchor: 'start',
          clamp: false,
          align: 'end',
          formatter: function(value) {
              return  value;
          }
        }
      }
    }
});
