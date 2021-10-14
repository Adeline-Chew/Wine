// initialize the echarts instance
var myChart = echarts.init(document.getElementById("viz3"));
var option;

// Draw the chart
myChart.showLoading();
$.get("/json/sankey_data.json", function (data) {
    myChart.hideLoading();
    myChart.setOption(
        (option = {
            title: {
                text: "What's The Difference Between Wines?",
            },
            tooltip: {
                trigger: "item",
                triggerOn: "mousemove",
            },
            series: [
                {
                    type: "sankey",
                    data: data.nodes,
                    links: data.links,
                    emphasis: {
                        focus: "adjacency",
                    },
                    levels: [
                        {
                            depth: 0,
                            itemStyle: {
                                color: "#D5BFBF",
                            },
                            lineStyle: {
                                color: "source",
                                opacity: 0.6,
                            },
                        },
                        {
                            depth: 1,
                            itemStyle: {
                                color: "#8CA1A5",
                            },
                            lineStyle: {
                                color: "source",
                                opacity: 0.6,
                            },
                        },
                        {
                            depth: 2,
                            itemStyle: {
                                color: "#6D8299",
                            },
                            lineStyle: {
                                color: "source",
                                opacity: 0.6,
                            },
                        },
                        {
                            depth: 3,
                            itemStyle: {
                                color: "#316B83",
                            },
                            lineStyle: {
                                color: "source",
                                opacity: 0.6,
                            },
                        },
                    ],
                    lineStyle: {
                        curveness: 0.5,
                    },
                },
            ],
        })
    );
});

option && myChart.setOption(option);
