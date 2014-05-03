var totalweeklySpending = 0; 
var totalmonthlySpending = 0;
var totalmonthlySpendingLast = 0;
var totalyearlySpending = 0;
var weeklySpending = [0,0,0,0,0,0,0];
var monthlySpending = [0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0]; //each day 
var lastmonthSpending = [0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,
                       0,0,0,0,0,0,0,0,0,0,0];
var yearlySpending = [0,0,0,0,0,0,0,0,0,0,0,0]; //for each month
var daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var hora = new Date(); //time 
var day = hora.getDate();
var dayOfWeek = hora.getUTCDay();
var month = hora.getMonth() + 1;
var year = hora.getUTCFullYear();
var totalmonth = [day];
var totallastmonth = [31];
if(year%4 == 0){
    daysPerMonth[1] = 29;   //account for leap year
}

var totalmonth = [day];

//creates smooth scrolling effect when clicking navBar icons
function scrollWeek(){
    $('html, body').animate({scrollTop:$('#weeklyChartDiv').offset().top -250}, 'slow');
}
function scrollMonth(){
    $('html, body').animate({scrollTop:$('#monthlyChartDiv').offset().top -300}, 'slow');
}
function scrollYear(){
    $('html, body').animate({scrollTop:$('#yearlyChartDiv').offset().top -250}, 'slow');
}
function scrollTable(){
    $('html, body').animate({scrollTop:$('#tableDiv').offset().top -200}, 'slow');
}       


//creates plot on body load using jqplot 
//edited to include 3 charts as an example
function createWeekChart(){
    //gathers JSON data - edit by Corey R
    
    var url = "http://morning-fortress-2412.herokuapp.com/userData.json";
 
    $.getJSON(url, function(data) {
        mainfunction(data);
    })
 
function mainfunction(data) {
    //console.log(data[3]["Date"][1]);
    var tempMonth = month;   //for calculating yearly data
    for(var i = 0; i < data.length; ++i){ //IS data.length CORRECT? //////**************************///////////////
        if (data[i]["Date"][0] ==year && data[i]["Date"][1] == month){ //checks to see if april (or may depending)
            //console.log(data[3]["Date"][2]);
            var day = data[i]["Date"][2]; 
            if (data[i]["Amount"] != "undefined"){
                //console.log(data[i]["Amount"]);
                monthlySpending[day-1] += parseInt(data[i]["Amount"]);
                //console.log(monthlySpending[day]);
            }
        }

        if (data[i]["Date"][0] ==year && data[i]["Date"][1] == (month -1)){ //one month behind other
            //console.log(data[3]["Date"][2]);
            var day = data[i]["Date"][2]; 
            if (data[i]["Amount"] != "undefined"){
                //console.log(data[i]["Amount"]);
                lastmonthSpending[day-1] += parseInt(data[i]["Amount"]);
                //console.log(monthlySpending[day]);
    }
}
}


    var tempYear = year;
    for(var i = 11; i >=0; i--){
        for(var j = 0; j < data.length; j++){
            if(data[j]["Date"][0]== tempYear && data[j]["Date"][1]==tempMonth){
                yearlySpending[i] += parseInt(data[j]["Amount"]);
            }
        }
        tempMonth--;
        if(tempMonth==0){
            tempMonth = 12;
            tempYear--;
        }
    }

    var tempDay = day;
    tempMonth = month;
    tempYear = year;
    while(dayOfWeek >= 0){
        for(var p = 0; p < data.length; p++){
            if(data[p]["Date"][0]==tempYear&&data[p]["Date"][1]==tempMonth&&data[p]["Date"][2]==tempDay){
                weeklySpending[dayOfWeek] += parseInt(data[p]["Amount"]);
            }
        }
        tempDay--;
            if(tempDay == 0){
                tempMonth--;
                if(tempMonth==0){
                    tempYear --;
                    tempMonth = 12;
                }
                tempDay = daysPerMonth[tempMonth-1];
            }
        dayOfWeek--;
    }

    $.each(weeklySpending,function() {
        totalweeklySpending += this;
    });

    $.each(monthlySpending,function() {
        totalmonthlySpending += this;
    });


    $.each(yearlySpending,function() {
        totalyearlySpending += this;
    });

    document.getElementById("week").innerHTML = "Total Spending : $" + totalweeklySpending;
    document.getElementById("thismonth").innerHTML = "Total Spending [this month] : $" + totalmonthlySpending;
        document.getElementById("year").innerHTML = "Total Spending : $" + totalyearlySpending;
    
    makeChart(month);  
    makeTable(data);   
}
}
function makeChart(month){
    //scrolls to top on page refresh
 $(document).ready(function(){
    console.log("function runs");

    
    
    totalmonth[0] = monthlySpending[0];
    totallastmonth[0] = lastmonthSpending[0];
    //console.log(totalmonth[0]);
    for (var i = 1; i<day; ++i) {
        totalmonth[i]=monthlySpending[i]+totalmonth[i-1];
    }
    for (var i = 1; i<31; ++i) {
        totallastmonth[i]=lastmonthSpending[i]+totallastmonth[i-1];
    }
    document.getElementById("lastmonth").innerHTML = "Total Spending [last month] : $" + totallastmonth[30];

   
    // Can specify a custom tick Array.
    // Ticks should match up one for each y value (category) in the series.
    var ticks = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var monthticks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    var monthTitles = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var yearTicks = ["","","","","","","","","","","",""];
    var i = 11; var tempMonth = month-1;
    while(i>=0){
        console.log(monthTitles[tempMonth]);
        yearTicks[i] = monthTitles[tempMonth];
        tempMonth--;
        if(tempMonth == -1){
            tempMonth = 11;
            console.log("tempMonth changed " + tempMonth);
        }
        i--;
    }
     
    var plot1 = $.jqplot('weeklyChartDiv', [weeklySpending], {

        // The "seriesDefaults" option is an options object that will
        // be applied to all series in the chart.
        seriesDefaults:{
            renderer:$.jqplot.BarRenderer,
            rendererOptions: {fillToZero: true}
        },
        // Custom labels for the series are specified with the "label"
        // option on the series option.  Here a series option object
        // is specified for each series.
        series:[
            {label:'Food Expenses'}
           
        ],
        
        axes: {
            // Use a category axis on the x axis and use our custom ticks.
            xaxis: {
                renderer: $.jqplot.CategoryAxisRenderer,
                ticks: ticks,
                label: 'Day of the Week'

            },
            // Pad the y axis just a little so bars can get close to, but
            // not touch, the grid boundaries.  1.2 is the default padding.
            yaxis: {
                pad: 1,
                tickOptions: {formatString: '$%d'},
                label: 'Dollars Spent',

            }
        }
    });


    var plot2 = $.jqplot('monthlyChartDiv', [totalmonth, totallastmonth], {
        // The "seriesDefaults" option is an options object that will
        // be applied to all series in the chart.
        
        // Custom labels for the series are specified with the "label"
        // option on the series option.  Here a series option object
        // is specified for each series.
        series:[
            {label:'Total Spending This Month'},
            {label: 'Total Spending Last Month'}

           
        ],
legend: {
        show: true,
        location: 'nw',     // compass direction, nw, n, ne, e, se, s, sw, w.
        xoffset: 12,        // pixel offset of the legend box from the x (or x2) axis.
        yoffset: 12,        // pixel offset of the legend box from the y (or y2) axis.
    },
        
        axes: {
            // Use a category axis on the x axis and use our custom ticks.
            xaxis: {
                renderer: $.jqplot.CategoryAxisRenderer,
                ticks: monthticks,
                label: 'Day of the Month'
            },
            // Pad the y axis just a little so bars can get close to, but
            // not touch, the grid boundaries.  1.2 is the default padding.
            yaxis: {
                pad: 1,
                tickOptions: {formatString: '$%d'},
                label: 'Dollars Spent'
            }
        }
    });


    var plot3 = $.jqplot('yearlyChartDiv', [yearlySpending], {
        // The "seriesDefaults" option is an options object that will
        // be applied to all series in the chart.
        seriesDefaults:{
            renderer:$.jqplot.BarRenderer,
            rendererOptions: {fillToZero: true}
        },
        // Custom labels for the series are specified with the "label"
        // option on the series option.  Here a series option object
        // is specified for each series.
        series:[
            {label:'Food Expenses'}
           
        ],
        
        axes: {
            // Use a category axis on the x axis and use our custom ticks.
            xaxis: {
                renderer: $.jqplot.CategoryAxisRenderer,
                ticks: yearTicks,
                label: 'Month of the Year'
            },
            // Pad the y axis just a little so bars can get close to, but
            // not touch, the grid boundaries.  1.2 is the default padding.
            yaxis: {
                pad: 1,
                tickOptions: {formatString: '$%d'},
                label: 'Dollars Spent'
            }
        }
    });
});
}


function makeTable(data){
    var tbl = document.getElementById("expenseTable");

    for(var p = 0; p < data.length; p++){
        var row = tbl.insertRow(0);
        if(p%2 == 0){
            row.setAttribute("id", "evenRow");
        }
        else{
            row.setAttribute("id", "oddRow");
        }
        var cell1 = row.insertCell();
        cell1.appendChild(document.createTextNode(data[p]["Date"][0]+"-"+data[p]["Date"][1]+"-"+data[p]["Date"][2]));
        var cell2 = row.insertCell();
        cell2.appendChild(document.createTextNode('$'+data[p]["Amount"]));
        var cell3 = row.insertCell();
        cell3.appendChild(document.createTextNode(data[p]["Location"]));
    }
    var row = tbl.insertRow(0);
    row.setAttribute("id", "titleRow");
    var cell1 = row.insertCell();
    cell1.appendChild(document.createTextNode("Date"));
    var cell2 = row.insertCell();
    cell2.appendChild(document.createTextNode("Amount"));
    var cell3 = row.insertCell();
    cell3.appendChild(document.createTextNode("Location"));    

}
