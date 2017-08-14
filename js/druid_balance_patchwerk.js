Highcharts.chart('druid_balance_patchwerk', 
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
                136141,
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
                8694,
                4683,
                7662,
                7180,
                7417,
                6836,
                6353,
                7748,
                7000,
                6125,
                6633,
                6185,
                7409,
                6140,
                6466,
                6272,
                6345,
                5110,
                5269,
                6787,
                5334,
                5504,
                5483,
                4042,
                6362,
                4489,
                4765,
                4447,
                0,
                5842,
                6646,
                6468,
                4719,
                3911,
                3677,
                0,
                4644,
                3049,
                2687,
                2777,
                4093,
                2498,
                3000,
                2714,
                1656,
                603,
                559
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                8882,
                4325,
                7162,
                4770,
                6070,
                5963,
                6508,
                6299,
                7349,
                5570,
                6189,
                6520,
                6135,
                5679,
                5977,
                4892,
                5584,
                6476,
                5341,
                7987,
                5215,
                4441,
                3316,
                5284,
                6244,
                3654,
                5874,
                4087,
                0,
                5979,
                4330,
                5216,
                3624,
                3754,
                3442,
                0,
                2245,
                2998,
                2913,
                3082,
                2315,
                2259,
                2533,
                3242,
                1304,
                1838,
                1882
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                6861,
                4372,
                5443,
                5948,
                6797,
                6278,
                6187,
                5461,
                5841,
                6925,
                5471,
                5119,
                6103,
                6063,
                6348,
                6049,
                5602,
                5657,
                3443,
                4277,
                4821,
                4816,
                6007,
                3988,
                5625,
                4275,
                3008,
                4357,
                0,
                4729,
                6076,
                5036,
                3696,
                2876,
                4671,
                0,
                4065,
                2551,
                2722,
                3795,
                2098,
                4269,
                2564,
                1183,
                3599,
                442,
                1194
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                7302,
                3818,
                5326,
                5493,
                5988,
                4294,
                4508,
                3867,
                5886,
                4080,
                5363,
                4510,
                4922,
                5721,
                3976,
                4451,
                4117,
                4857,
                4940,
                5327,
                3818,
                4040,
                3498,
                3442,
                4796,
                4689,
                4364,
                4769,
                0,
                5745,
                3990,
                4727,
                4189,
                3028,
                3214,
                0,
                3037,
                2665,
                3017,
                2769,
                4248,
                1717,
                2290,
                3098,
                1262,
                2634,
                870
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                6027,
                4379,
                5651,
                3705,
                4373,
                5964,
                5271,
                5384,
                68766,
                5008,
                4790,
                5914,
                4834,
                3597,
                4878,
                3504,
                5136,
                3678,
                3786,
                5090,
                3780,
                3920,
                4486,
                3206,
                5262,
                4605,
                3805,
                3375,
                5101,
                3795,
                4878,
                4428,
                3130,
                4140,
                3145,
                3503,
                2771,
                1515,
                2031,
                2895,
                1758,
                2388,
                2830,
                1809,
                2713,
                1064,
                1124
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                87150,
                3636,
                4785,
                5151,
                70564,
                3869,
                4793,
                5119,
                0,
                4766,
                4573,
                4012,
                3719,
                2980,
                4552,
                64238,
                2643,
                4961,
                4204,
                4307,
                3949,
                2964,
                3476,
                2521,
                3848,
                2852,
                2662,
                50437,
                4288,
                3643,
                3784,
                4631,
                3255,
                1066,
                3737,
                5220,
                2883,
                2002,
                1390,
                1726,
                1491,
                1238,
                1273,
                1609,
                1249,
                1092,
                701
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                94410,
                67450,
                70238,
                0,
                64125,
                63700,
                62139,
                0,
                60968,
                59271,
                59888,
                58297,
                61062,
                57265,
                0,
                59196,
                56145,
                58849,
                45484,
                51780,
                52630,
                50542,
                53441,
                43617,
                50074,
                49422,
                0,
                61742,
                41388,
                41115,
                39974,
                46031,
                47665,
                44069,
                55488,
                43489,
                44087,
                43700,
                41026,
                38823,
                37300,
                37070,
                36349,
                33884,
                34904,
                25669
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-08-14 17:37:59"
    },
    title: {
        text: "Druid - Balance - Patchwerk"
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
            "Tarnished Sentinel Medallion",
            "Unstable Arcanocrystal",
            "Stat Stick (Mastery)",
            "Whispers in the Dark",
            "Terror From Below",
            "Stormsinger Fulmination Charge",
            "Dreadstone of Endless Shadows",
            "Padawsen's Unlucky Charm",
            "Tome of Unraveling Sanity",
            "Erratic Metronome",
            "Stat Stick (Crit)",
            "Stat Stick (Haste)",
            "Eyasu's Mulligan",
            "Stat Stick (Versatility)",
            "PVP Badge of Dominance",
            "Charm of the Rising Tide",
            "Chrono Shard",
            "Infernal Writ",
            "Naraxas' Spiked Tongue",
            "Star Gate",
            "Moonlit Prism",
            "PVP Insignia of Dominance",
            "Horn of Valor",
            "Fury of the Burning Sky",
            "Deteriorated Construct Core",
            "Obelisk of the Void",
            "Devilsaur Shock-Baton",
            "Spectral Thurible",
            "Darkmoon Deck: Hellfire",
            "Bough of Corruption",
            "Twisting Wind",
            "Portable Manacracker",
            "Swarming Plaguehive",
            "Aran's Relaxing Ruby",
            "Oakheart's Gnarled Root",
            "Infernal Alchemist Stone",
            "Icon of Rot",
            "Caged Horror",
            "Corrupted Starlight",
            "Mrrgria's Favor",
            "Pharameres Forbidden Grimoire",
            "Wriggling Sinew",
            "Toe Knee's Promise",
            "Eye of Skovald",
            "Elementium Bomb Squirrel Generator",
            "Unstable Horrorslime",
            "Figurehead of the Naglfar"
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
                    text: "mean at 78635",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 78635.625,
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