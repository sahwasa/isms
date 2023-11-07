const data = {
  labels: ['2018','2019','2020','2021','2022','2023'],
  datasets: [
    {
      label: '도시산불',
      data: [80, 80, 80, 95, 30, 100],
      backgroundColor:'rgba(255, 99, 132, 0.7)',
      borderColor:'rgb(255, 99, 132)',
      datalabels:{display: false}
    },
    {
      label: '도시침수',
      data:[80, 80, 80, 95, 85, 100],
      backgroundColor:'rgba(201, 203, 207, 0.7)',
      borderColor:'rgb(201, 203, 207)',
      datalabels:{display: false}
    },
    {
      label: '유해화학',
      data:[80, 80, 80, 95, 140, 100],
      backgroundColor:'rgba(255, 205, 86, 0.7)',
      borderColor:'rgb(255, 205, 86)',
      datalabels:{display: false}
    },
    {
      label: '감염병',
      data:[80, 80, 80, 95, 90, 100],
      backgroundColor:'rgba(75, 192, 192, 0.7)',
      borderColor:'rgb(75, 192, 192)',
      datalabels:{display: false}
    },
    {
      label: '다중화재',
      data:[80, 80, 80, 95, 140, 100],
      backgroundColor:'rgba(153, 102, 255, 0.7)',
      borderColor:'rgb(153, 102, 255)',
      datalabels:{display: false}
    }    
  ]
};
const ctx = document.getElementById('barchart');
const options= { 
  layout:{ padding:{top:30}},     
  title: {
    display: true,
    text: '재난 발생 통계',
    fontSize:20,
    fontStyle:'normal',
    fontFamily:'"Malgun Gothic","맑은고딕","Apple SD Gothic Neo","AppleSDGothic","Nanum Barun Gothic","NanumGothic","AppleGothic","Dotum","Arial",sans-serif'
  },
  legend:{
    position:'bottom',
    align:'center',
    labels:{boxWidth:10,boxHeight:10,padding:15,color:'#838383',font:{size:11}}
  },
  plugins: {
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true, // Ensure the y-axis starts at 0
        suggestedMin: 0,    // Force the minimum value to be 0
      }
    }]
  }
};
const myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options:options
});