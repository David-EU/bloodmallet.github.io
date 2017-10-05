Highcharts.chart('hunter_marksmanship_patchwerk', 
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
                178731,
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
                7652,
                10215,
                6495,
                8441,
                10334,
                9322,
                8533,
                8235,
                9580,
                9664,
                7657,
                7467,
                7854,
                7781,
                8183,
                7396,
                7964,
                9798,
                4933,
                6495,
                6424,
                6095,
                0,
                5894,
                8280,
                5181,
                6955,
                9424,
                5884,
                5565,
                8599,
                5610,
                8522,
                7871,
                5147,
                6322,
                7345,
                5501,
                0,
                4394,
                2924,
                2019,
                5778,
                2844,
                2638,
                1796,
                3049
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                5429,
                9939,
                6753,
                6822,
                6954,
                7436,
                6757,
                7508,
                6511,
                8807,
                6840,
                7566,
                9281,
                8117,
                7523,
                8461,
                7731,
                9018,
                7862,
                6554,
                8103,
                7930,
                7096,
                6241,
                8011,
                6588,
                6040,
                8279,
                4470,
                3498,
                8236,
                5830,
                6264,
                6447,
                4477,
                6888,
                6324,
                3309,
                0,
                5059,
                4643,
                3759,
                6570,
                2726,
                1945,
                1952,
                407
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                4841,
                8582,
                3343,
                7310,
                5966,
                8256,
                8499,
                7315,
                8703,
                7813,
                7469,
                6137,
                8666,
                7547,
                4578,
                5112,
                6529,
                6982,
                3130,
                6216,
                5803,
                4811,
                6850,
                5644,
                7845,
                5135,
                4472,
                6570,
                6194,
                4186,
                3589,
                3586,
                6187,
                5704,
                3345,
                6838,
                5388,
                3282,
                0,
                3073,
                2362,
                4108,
                4034,
                2139,
                3449,
                3064,
                1577
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                4472,
                10097,
                6002,
                7470,
                4999,
                5283,
                6818,
                7199,
                5963,
                4729,
                5981,
                7204,
                5765,
                5594,
                7069,
                5600,
                3968,
                7958,
                4758,
                2819,
                4360,
                6807,
                3923,
                5539,
                6026,
                5029,
                5498,
                5063,
                1750,
                4312,
                7219,
                5047,
                4730,
                5787,
                4024,
                5625,
                1892,
                3053,
                0,
                3660,
                3445,
                2321,
                5892,
                3708,
                1344,
                1975,
                885
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                6270,
                8697,
                3397,
                4276,
                7484,
                8293,
                5710,
                4165,
                5785,
                6434,
                6211,
                4990,
                83196,
                6281,
                5501,
                5198,
                6355,
                6093,
                5969,
                3070,
                5382,
                5376,
                5631,
                4619,
                4584,
                3631,
                3398,
                6375,
                5463,
                2968,
                5985,
                2199,
                5877,
                6655,
                3653,
                4372,
                6373,
                3171,
                4318,
                1412,
                2914,
                3072,
                4054,
                151,
                1266,
                0,
                1796
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                3359,
                113332,
                4307,
                6369,
                5013,
                88693,
                90912,
                6568,
                5075,
                84400,
                4721,
                5138,
                0,
                4581,
                4048,
                6232,
                4624,
                5833,
                6669,
                6396,
                2292,
                1374,
                73213,
                4312,
                5812,
                4407,
                66696,
                5815,
                4070,
                3249,
                4021,
                4910,
                5776,
                5267,
                2928,
                2816,
                2641,
                4015,
                5127,
                4365,
                2449,
                2565,
                5131,
                3698,
                1553,
                2325,
                2942
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                137066,
                0,
                110839,
                89174,
                87027,
                0,
                0,
                85525,
                81757,
                0,
                79202,
                79363,
                0,
                74488,
                76795,
                71847,
                69523,
                58759,
                70903,
                69631,
                65904,
                65713,
                0,
                62778,
                54257,
                63841,
                0,
                51196,
                61849,
                64469,
                50209,
                59144,
                48307,
                46442,
                58510,
                48603,
                50242,
                57648,
                67914,
                51850,
                52711,
                53360,
                35043,
                49712,
                50728,
                46577,
                38900
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-09-22 18:32 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/241e09d6aeb2f51f8b24e2b7038b7dc580223b38\" target=\"blank\">241e09d</a>"
    },
    title: {
        text: "Hunter - Marksmanship - Patchwerk"
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
            "Unstable Arcanocrystal",
            "Tarnished Sentinel Medallion",
            "Convergence of Fates",
            "Bloodthirsty Instinct",
            "Thrice-Accursed Compass",
            "Terror From Below",
            "Engine of Eradication",
            "Stat Stick (Mastery)",
            "Entwined Elemental Foci",
            "Cradle of Anguish",
            "Stormsinger Fulmination Charge",
            "Stat Stick (Crit)",
            "Tome of Unraveling Sanity",
            "Stat Stick (Haste)",
            "Chrono Shard",
            "Stat Stick (Versatility)",
            "PVP Badge of Conquest",
            "Six-Feather Fan",
            "Naraxas' Spiked Tongue",
            "Fury of the Burning Sky",
            "Moonlit Prism",
            "Obelisk of the Void",
            "Astral Alchemist Stone",
            "Horn of Valor",
            "Tirathon's Betrayal",
            "PVP Insignia of Conquest",
            "Spectral Thurible",
            "Nightblooming Frond",
            "Icon of Rot",
            "Aran's Relaxing Ruby",
            "Void Stalker's Contract",
            "Oakheart's Gnarled Root",
            "Deteriorated Construct Core",
            "Tempered Egg of Serpentrix",
            "Mrrgria's Favor",
            "Twisting Wind",
            "Splinters of Agronax",
            "Caged Horror",
            "Infernal Alchemist Stone",
            "Toe Knee's Promise",
            "Eye of Skovald",
            "Corrupted Starlight",
            "Arcanogolem Digit",
            "Elementium Bomb Squirrel Generator",
            "Unstable Horrorslime",
            "Ley Spark",
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
                    text: "mean at 100881",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 100881.25,
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