import { ChartType } from './dashboard.model';

const realTime:ChartType = {
    series: [
        {
        name: '2020',
        type: 'column',
        data: [20, 42, 35, 27, 43]
    },
     {
        name: '2019',
        type: 'column',
        data: [25, 32, 27, 38, 27]
    }],
    chart: {
        height: 280,
        type: 'line',
        toolbar: {
            show: false,
        }
    },
    stroke: {
        width: [0, 3],
        curve: 'smooth'
    },
    plotOptions: {
        bar: {
            horizontal: true,
            columnWidth: '30%',
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    colors: ['#5664d2', '#1cbb8c'],
    labels: [0,20,40,60,80],



}
const revenueChart: ChartType = {
    series: [{
        name: '2020',
        type: 'column',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }, {
        name: '2019',
        type: 'line',
        data: [23, 32, 27, 38, 27, 32, 27, 38, 22, 31, 21, 16]
    }],
    chart: {
        height: 260,
        type: 'line',
        toolbar: {
            show: false,
        }
    },
    stroke: {
        width: [0, 3],
        curve: 'smooth'
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '20%',
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    colors: ['#5664d2', '#1cbb8c'],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

const salesAnalytics: ChartType = {
    series: [
        {
        name: '2020',
        type: 'column',
        data: [23, 42, 35, 27, 43, 22]
    },
     {
        name: '2019',
        type: 'column',
        data: [23, 32, 27, 38, 27, 32]
    }],
    chart: {
        height: 280,
        type: 'line',
        toolbar: {
            show: false,
        }
    },
    // stroke: {
    //     width: [0, 3],
    //     curve: 'smooth'
    // },
    // plotOptions: {
    //     bar: {
    //         horizontal: false,
    //         columnWidth: '20%',
    //     },
    // },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    colors: ['#5664d2', '#1cbb8c'],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
};

const sparklineEarning: ChartType = {
    series: [72],
    chart: {
        type: 'radialBar',
        wight: 60,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#5664d2'],
    stroke: {
        lineCap: 'round'
    },
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: '70%'
            },
            track: {
                margin: 0,
            },

            dataLabels: {
                show: false
            }
        }
    }
};

const sparklineMonthly: ChartType = {
    series: [65],
    chart: {
        type: 'radialBar',
        wight: 60,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#1cbb8c'],
    stroke: {
        lineCap: 'round'
    },
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: '70%'
            },
            track: {
                margin: 0,
            },

            dataLabels: {
                show: false
            }
        }
    }
};

const chatData = [
    {
        id: 1,
        name: 'Frank Vickery',
        message: 'Hey! I am available',
        image: 'assets/images/users/avatar-2.jpg',
        time: '12:09'
    },
    {
        id: 2,
        align: 'right',
        name: 'Ricky Clark',
        message: 'Hi, How are you? What about our next meeting?',
        time: '10:02'
    },
    {
        text: 'Today'
    },
    {
        id: 3,
        name: 'Frank Vickery',
        message: 'Hello!',
        image: 'assets/images/users/avatar-2.jpg',
        time: '10:06'
    },
    {
        id: 4,
        name: 'Frank Vickery',
        message: '& Next meeting tomorrow 10.00AM',
        image: 'assets/images/users/avatar-2.jpg',
        time: '10:06'
    },
    {
        id: 5,
        align: 'right',
        name: 'Ricky Clark',
        message: 'Wow that\'s great',
        time: '10:07'
    }
];

const transactions = [
    {
        orderid: '#NZ1563',
        date: '28 Mar, 2020',
        billingname: 'Frank Dean',
        total: '$164',
        paymentstatus: 'Unpaid'
    },
    {
        orderid: '#NZ1564',
        date: '28 Mar, 2020',
        billingname: 'Eddy Torres',
        total: '$141',
        paymentstatus: 'Paid'
    },
    {
        orderid: '#NZ1565',
        date: '29 Mar, 2020',
        billingname: 'Jamison Clark',
        total: '$123',
        paymentstatus: 'Paid'
    },
    {
        orderid: '#NZ1566',
        date: '30 Mar, 2020',
        billingname: 'Jewel Buckley',
        total: '$112',
        paymentstatus: 'Paid'
    },
    {
        orderid: '#NZ1567',
        date: '31 Mar, 2020',
        billingname: 'Jeffrey Waltz',
        total: '$105',
        paymentstatus: 'Unpaid'
    },
    {
        orderid: '#NZ1568',
        date: '01 Apr, 2020',
        billingname: 'Jefferson Allen',
        total: '$160',
        paymentstatus: 'Chargeback'
    }
];

const statData = [
    {
        icon: 'ri-stack-line',
        title: 'CONVERSION RATE',
        value: '0.81%'
    }, {
        icon: 'ri-store-2-line',
        title: 'UNIQUE PURCHASES',
        value: '3,137'
    }, {
        icon: 'ri-briefcase-4-line',
        title: 'AVG. ORDER VALUE',
        value: '$ 306.20'
    },
    {
        icon: 'ri-briefcase-4-line',
        title: 'ORDER QUANTITY',
        value: '1,650'
    }
];
const map = [
    {
      states:'California',
      orders:12201,
      earnings:'$150,200.80'

    },
    {
        states:'Texas',
        orders:11950,
        earnings:'$138,910.20'
  
      },
      {
        states:'Wyoming',
        orders:11198,
        earnings:'$132,050.00'
  
      },
      {
        states:'Florida',
        orders:9805,
        earnings:'$127,762.10'
  
      },
      {
        states:'New York',
        orders:8560,
        earnings:'$117,087.50'
  
      }
    
   
];



export { revenueChart, salesAnalytics, sparklineEarning, sparklineMonthly, chatData, transactions, statData, map, realTime };
