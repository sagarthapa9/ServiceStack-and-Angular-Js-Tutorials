
function drawPieChart() {

    var data = google.visualization.arrayToDataTable([
            ['Course','Attendees'],
            ['MVC', 25],
            ['ServiceStack', 20],
            ['Angular jS', 15],
            ['javascript', 10],
            ['HTML', 8],
    ]);

    var options = {

        backgroundColor: { stroke: '#000', strokeWidth: 4, fill: '#bbb' },
        title: 'Most Popular Courses',
        titleTextStyle: { fontSize: 18 },
        tooltip: { showColorCode: true },
        //sliceVisibilityThreshold: .13,
        //pieResidueSliceColor: '#109618',
        //pieResidueSliceLabel: 'Other Courses',
        is3D:true

    };


    var chart = new google.visualization.PieChart(document.getElementById('chart'));
    chart.draw(data, options);
}

function drawBarChart() {

    var data = google.visualization.arrayToDataTable([
            ['Course', 'Online','Classroom'],
            ['MVC', 25,15],
            ['ServiceStack', 20, 13],
            ['Angular jS', 15, 10],
            ['javascript', 10, 5],
            ['HTML', 8, 20],
    ]);

    var options = {

        backgroundColor: { stroke: '#000', strokeWidth: 4, fill: '#bbb' },
        hAxis:{
            title: 'No of Attendees',
            titleTextStyle: { fontSize: 16 },
            gridlines:{count:8}
        },
        series:[{color:'#f81'}],
        title: 'Most Popular Courses',
        titleTextStyle: { fontSize: 18 },
        tooltip: { showColorCode: true },
        vAxis: {
            title: 'Type of Course',
            titleTextStyle: { fontSize: 16 },
           

        },
    };


    var chart = new google.visualization.BarChart(document.getElementById('chart'));
    chart.draw(data, options);
}

function drawColumnChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Type of Attendee');
    data.addColumn('number', 'MVC');
    data.addColumn('number', 'ServiceStack');
    data.addColumn('number', 'AngularJs');
    data.addColumn('number', 'Javascript');
    data.addColumn('number', 'HTML');

    data.addRows([
             ['Student', 25, 15, 23, 12, 10],
            ['.net Developer', 50, 34, 30, 10, 13],
            ['php Developer', 15, 5, 25, 34 ,23],
            ['web developer', 10, 5, 40, 24, 10],
            ['Programmer', 48, 40, 12, 10, 2]
    ]);

    var options = {

        backgroundColor: { stroke: '#000', strokeWidth: 4, fill: '#bbb' },
        title: 'Most Popular Courses',
        titleTextStyle: { fontSize: 18 },
        focusTarget:'category',
        tooltip: { showColorCode: true },
        isStacked:true,
        hAxis: {
            title: 'Type of Attendees',
            titleTextStyle: { fontSize: 16 },
        },
        vAxis: {
            title: 'No of Course taken',
            titleTextStyle: { fontSize: 16 },
            gridlines: { count: 8 }
        },
    };


    var chart = new google.visualization.ColumnChart(document.getElementById('chart'));
    chart.draw(data, options);
}

function drawLineChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('timeofday', 'Time of Day');
    data.addColumn('number', 'No of Attendees');
    data.addColumn({ type: 'string', role: 'annotation' });
    data.addColumn({ type: 'string', role: 'annotationText' });
    data.addRows([
                [[08, 00, 0, 0], 40, null, null],
                [[09, 00, 0, 0], 55, null, null],
                [[10, 00, 0, 0], 70, null, null],
                [[11, 00, 0, 0], 35, null, null],
                [[12, 00, 0, 0], 20, 'A', 'Lunch Break'],
                [[14, 00, 0, 0], 15, null, null],
                [[15, 00, 0, 0], 45, null, null],
                [[16, 00, 0, 0], 34, null, null],
                [[17, 00, 0, 0], 87, 'b', 'Most Busy Hour'],
                [[18, 00, 0, 0], 54, null, null]
    ]);

    var options = {

        backgroundColor: { stroke: '#000', strokeWidth: 4, fill: '#bbb' },
        title: 'Daily Engagement Rate',
        titleTextStyle: { fontSize: 18 },
        tooltip: { showColorCode: true },
        pointSize: 10,
        curveType:'function',
        hAxis: {
            title: 'Time of Day',
            titleTextStyle: { fontSize: 16 },
            gridlines: { count: 10 },format:'hh:mm a'
        },
        vAxis: {
            title: 'No of Attendees',
            titleTextStyle: { fontSize: 16 },
            gridlines: { count: 20 }
        },
    };


    var chart = new google.visualization.LineChart(document.getElementById('chart'));
    chart.draw(data, options);
}


function drawAreaChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('timeofday', 'Time of Day');
    data.addColumn('number', 'No of Attendees');
    data.addColumn({ type: 'string', role: 'annotation' });
    data.addColumn({ type: 'string', role: 'annotationText' });
    data.addRows([
                [[08, 00, 0, 0], 40, null, null],
                [[09, 00, 0, 0], 55, null, null],
                [[10, 00, 0, 0], 70, null, null],
                [[11, 00, 0, 0], 35, null, null],
                [[12, 00, 0, 0], 20, 'A', 'Lunch Break'],
                [[14, 00, 0, 0], 15, null, null],
                [[15, 00, 0, 0], 45, null, null],
                [[16, 00, 0, 0], 34, null, null],
                [[17, 00, 0, 0], 87, 'b', 'Most Busy Hour'],
                [[18, 00, 0, 0], 54, null, null]
    ]);

    var options = {

        backgroundColor: { stroke: '#000', strokeWidth: 4, fill: '#bbb' },
        title: 'Daily Engagement Rate',
        titleTextStyle: { fontSize: 18 },
        tooltip: { showColorCode: true },
        areaOpacity:0.2,
        pointSize: 10,
        hAxis: {
            title: 'Time of Day',
            titleTextStyle: { fontSize: 16 },
            gridlines: { count: 10 }, format: 'hh:mm a'
        },
        vAxis: {
            title: 'No of Attendees',
            titleTextStyle: { fontSize: 16 },
            gridlines: { count: 20 }
        },
    };


    var chart = new google.visualization.AreaChart(document.getElementById('chart'));
    chart.draw(data, options);
}


google.load('visualization', '1.0', {
    'packages': ['corechart'],
    'callback': drawAreaChart
});