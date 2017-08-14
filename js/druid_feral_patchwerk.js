Highcharts.chart('druid_feral_patchwerk', 
{
    chart: {
        type: "bar"
    },
    legend: {
        align: "right",
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: "#CCC",
        borderWidth: 1,
        floating: false,
        reversed: true,
        shadow: false,
        verticalAlign: "bottom",
        x: 0,
        y: 0
    },
    plotOptions: {
        bar: {
            dataLabels: {
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                enabled: false
            },
            point: {
                events: {
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category,                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
                }
            },
            stacking: "normal"
        },
        series: {
            borderColor: "#151515",
            events: {
                legendItemClick: function() { return false; }
            }
        }
    },
    series: [
        {
            color: "#ffeb3b",
            data: [
                151105,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                0,
                12889,
                9375,
                12312,
                11452,
                7620,
                8914,
                8337,
                9322,
                7365,
                8291,
                7616,
                8052,
                8656,
                7052,
                8194,
                7164,
                7231,
                9812,
                8199,
                8859,
                8232,
                8657,
                7489,
                5946,
                2324,
                6666,
                7327,
                5922,
                5510,
                7157,
                7802,
                0,
                5482,
                0,
                5307,
                3922,
                3874,
                3026,
                1418,
                3513,
                2769,
                2206,
                3056,
                3017,
                1847,
                1857,
                346
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                11023,
                7931,
                8237,
                8134,
                8751,
                8239,
                5048,
                8467,
                7967,
                6593,
                9064,
                7794,
                6974,
                7255,
                6626,
                8822,
                8633,
                6612,
                8662,
                7737,
                7284,
                8857,
                7912,
                7732,
                2981,
                5085,
                8428,
                6164,
                7582,
                6037,
                4370,
                0,
                5672,
                0,
                3513,
                4130,
                3641,
                2719,
                4019,
                2710,
                3112,
                2301,
                3121,
                3014,
                2975,
                2842,
                0
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                9108,
                8017,
                7909,
                10163,
                7622,
                6055,
                5203,
                8767,
                7550,
                9539,
                6390,
                5855,
                7807,
                6646,
                7179,
                5622,
                5691,
                6108,
                7757,
                7524,
                5873,
                6225,
                5890,
                5584,
                4428,
                6308,
                6074,
                6022,
                4473,
                5892,
                6005,
                0,
                4538,
                0,
                4352,
                3806,
                3727,
                3695,
                3010,
                1556,
                3032,
                2328,
                1837,
                1500,
                778,
                1625,
                1103
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                10221,
                7110,
                8651,
                7164,
                7286,
                7921,
                6624,
                7640,
                6504,
                4642,
                5895,
                6780,
                5459,
                6367,
                6585,
                7359,
                5722,
                5249,
                6529,
                7500,
                5680,
                6346,
                5778,
                6040,
                1480,
                5455,
                7138,
                4864,
                6597,
                6797,
                4681,
                0,
                5390,
                0,
                3298,
                3282,
                2094,
                1931,
                1676,
                2666,
                2328,
                3151,
                4436,
                2452,
                2156,
                530,
                1175
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                94608,
                6604,
                6650,
                7985,
                6813,
                5015,
                4165,
                5541,
                5906,
                6710,
                6564,
                5072,
                6317,
                6193,
                5306,
                6296,
                6154,
                5992,
                5855,
                5021,
                5403,
                6522,
                5626,
                5405,
                4548,
                4775,
                5418,
                4744,
                3580,
                4168,
                6178,
                7055,
                3657,
                5037,
                3887,
                3384,
                2557,
                3494,
                2147,
                2260,
                1555,
                2382,
                1480,
                2794,
                1514,
                3102,
                147
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                0,
                5263,
                74304,
                6237,
                78570,
                5110,
                5265,
                6135,
                4560,
                4377,
                6386,
                5579,
                71890,
                5588,
                4812,
                4916,
                4960,
                4923,
                5206,
                5991,
                6006,
                4883,
                4403,
                5649,
                3099,
                63691,
                4965,
                63398,
                5013,
                4829,
                4123,
                4966,
                4447,
                4153,
                3073,
                1439,
                3391,
                2311,
                0,
                2110,
                3071,
                0,
                2655,
                2080,
                1274,
                737,
                436
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                79477,
                0,
                66092,
                0,
                71356,
                74865,
                63426,
                69338,
                68620,
                66348,
                68960,
                0,
                67636,
                67617,
                65947,
                66884,
                64974,
                58523,
                56805,
                60022,
                55231,
                59423,
                59898,
                75541,
                0,
                52083,
                0,
                57194,
                54882,
                55139,
                71786,
                53235,
                64133,
                47981,
                43769,
                43918,
                40739,
                43594,
                35037,
                33507,
                35014,
                28915,
                30634,
                30855,
                27269,
                22432
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-08-14 17:52:32"
    },
    title: {
        text: "Druid - Feral - Patchwerk"
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + cumulative_amount;            }        }        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "Kil'jaeden's Burning Wish",
            "Specter of Betrayal",
            "Eye of Command",
            "Vial of Ceaseless Toxins",
            "Nightblooming Frond",
            "Engine of Eradication",
            "Stat Stick (Mastery)",
            "Convergence of Fates",
            "Six-Feather Fan",
            "Stat Stick (Crit)",
            "Entwined Elemental Foci",
            "Chaos Talisman",
            "Stat Stick (Versatility)",
            "Cradle of Anguish",
            "Memento of Angerboda",
            "Thrice-Accursed Compass",
            "Bloodthirsty Instinct",
            "PVP Badge of Conquest",
            "Gift of Radiance",
            "Tirathon's Betrayal",
            "Arcanogolem Digit",
            "Stat Stick (Haste)",
            "Bloodstained Handkerchief",
            "Nightmare Egg Shell",
            "Chrono Shard",
            "Unstable Arcanocrystal",
            "Umbral Moonglaives",
            "Tempered Egg of Serpentrix",
            "Infernal Cinders",
            "PVP Insignia of Conquest",
            "Splinters of Agronax",
            "Draught of Souls",
            "Darkmoon Deck: Dominion",
            "Horn of Valor",
            "Infernal Alchemist Stone",
            "The Devilsaur's Bite",
            "Faulty Countermeasure",
            "Spontaneous Appendages",
            "Terrorbound Nexus",
            "Nature's Call",
            "Tiny Oozeling in a Jar",
            "Mark of Dargrul",
            "Windscar Whetstone",
            "Toe Knee's Promise",
            "Spiked Counterweight",
            "Giant Ornamental Pearl",
            "Ravaged Seed Pod",
            "Ley Spark"
        ]
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        plotLines: [
            {
                color: "#1E90FF",
                label: {
                    align: "left",
                    rotation: -90,
                    style: {
                        color: "#1E90FF"
                    },
                    text: "mean at 89243",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 89243.27083333333,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: false,
            formatter: function() {            /* I need to figure out how to get the mean value here,            ** to allow the percent diff to mean as label            ** console.log(this); */            return;          },
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'white',
                fontWeight: "bold"
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});