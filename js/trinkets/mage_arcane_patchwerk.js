Highcharts.chart('mage_arcane_patchwerk', 
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
                0,
                138666,
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
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                14335,
                0,
                8512,
                4577,
                9069,
                11134,
                6997,
                6858,
                6789,
                7114,
                5714,
                7452,
                5281,
                6391,
                5916,
                6449,
                5781,
                6629,
                5670,
                6365,
                6796,
                5747,
                4852,
                0,
                7354,
                5027,
                2816,
                7914,
                5049,
                6860,
                5876,
                5381,
                6846,
                7554,
                8453,
                0,
                4673,
                4582,
                7130,
                0,
                4155,
                3486,
                3149,
                2838,
                4014,
                2386,
                3272,
                3109,
                3717,
                206
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                12068,
                0,
                6690,
                2861,
                7727,
                6920,
                8285,
                6350,
                6119,
                6801,
                6275,
                6221,
                7040,
                6893,
                5896,
                6956,
                7265,
                5449,
                4641,
                6132,
                6940,
                6550,
                6227,
                7126,
                7317,
                6959,
                6977,
                6819,
                5050,
                4595,
                5342,
                6255,
                7989,
                5469,
                5405,
                0,
                3767,
                4673,
                1852,
                0,
                4038,
                3718,
                4951,
                3716,
                4314,
                3725,
                2830,
                2100,
                0,
                2414
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                10156,
                0,
                6375,
                5680,
                6986,
                8353,
                4064,
                6771,
                6573,
                5438,
                6326,
                5322,
                5329,
                4569,
                7840,
                5432,
                7804,
                6198,
                7453,
                5082,
                6382,
                5400,
                4198,
                4439,
                4670,
                4392,
                3924,
                5365,
                5029,
                5591,
                3766,
                4000,
                5084,
                4553,
                6402,
                0,
                5004,
                3820,
                5595,
                0,
                3574,
                5561,
                1165,
                4947,
                2464,
                3942,
                2852,
                1520,
                2992,
                465
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                9028,
                0,
                6808,
                3687,
                7098,
                6378,
                6937,
                2750,
                6973,
                5130,
                3688,
                5499,
                6013,
                6937,
                3904,
                5131,
                5433,
                4898,
                4919,
                4537,
                4758,
                2407,
                5219,
                5696,
                6850,
                3758,
                5872,
                6732,
                4274,
                4204,
                4886,
                3597,
                4671,
                5204,
                4034,
                0,
                3942,
                4100,
                5222,
                0,
                3016,
                1744,
                6073,
                1750,
                2925,
                2348,
                2986,
                3272,
                1833,
                2528
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                9787,
                0,
                6096,
                4806,
                5239,
                75178,
                3870,
                5625,
                3690,
                7341,
                6044,
                6179,
                5185,
                3373,
                3985,
                5440,
                3624,
                4515,
                5949,
                5712,
                7038,
                4557,
                3808,
                4536,
                4116,
                4231,
                3367,
                4359,
                3841,
                3702,
                4421,
                2871,
                5323,
                5857,
                4568,
                5067,
                4277,
                2968,
                1236,
                5517,
                3195,
                3378,
                2167,
                2435,
                2043,
                3786,
                931,
                2482,
                1962,
                293
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                112820,
                0,
                88187,
                2794,
                79230,
                0,
                3061,
                4455,
                6480,
                3419,
                5085,
                3849,
                4038,
                6977,
                5912,
                3611,
                5238,
                4573,
                3306,
                3506,
                5133,
                3353,
                61774,
                63511,
                6319,
                3987,
                4846,
                5829,
                2261,
                3749,
                4066,
                4434,
                5005,
                4921,
                3589,
                4701,
                3804,
                4217,
                2358,
                2324,
                2647,
                3241,
                2202,
                3027,
                2688,
                1312,
                3411,
                1953,
                1289,
                1884
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                0,
                91937,
                0,
                0,
                71997,
                71188,
                63010,
                64028,
                63680,
                62006,
                63375,
                60786,
                61217,
                61624,
                57815,
                57879,
                58125,
                55418,
                49293,
                58190,
                0,
                0,
                47334,
                55130,
                54543,
                44810,
                55508,
                52133,
                52273,
                52646,
                43619,
                44188,
                43119,
                64887,
                48452,
                49513,
                48033,
                61053,
                46323,
                45345,
                44693,
                39481,
                39082,
                38770,
                39655,
                34768,
                36960,
                25382
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-09-22 18:32 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/241e09d6aeb2f51f8b24e2b7038b7dc580223b38\" target=\"blank\">241e09d</a>"
    },
    title: {
        text: "Mage - Arcane - Patchwerk"
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
            "Tarnished Sentinel Medallion",
            "Kil'jaeden's Burning Wish",
            "Charm of the Rising Tide",
            "Unstable Arcanocrystal",
            "Terror From Below",
            "Tome of Unraveling Sanity",
            "PVP Badge of Dominance",
            "Whispers in the Dark",
            "Moonlit Prism",
            "Dreadstone of Endless Shadows",
            "Stat Stick (Versatility)",
            "Stat Stick (Crit)",
            "Stat Stick (Mastery)",
            "Padawsen's Unlucky Charm",
            "Eyasu's Mulligan",
            "Erratic Metronome",
            "Stat Stick (Haste)",
            "Infernal Writ",
            "Chrono Shard",
            "Stormsinger Fulmination Charge",
            "Star Gate",
            "Horn of Valor",
            "Spectral Thurible",
            "Astral Alchemist Stone",
            "Reality Breacher",
            "PVP Insignia of Dominance",
            "Naraxas' Spiked Tongue",
            "Deteriorated Construct Core",
            "Oakheart's Gnarled Root",
            "Obelisk of the Void",
            "Devilsaur Shock-Baton",
            "Fury of the Burning Sky",
            "Twisting Wind",
            "Bough of Corruption",
            "Portable Manacracker",
            "Darkmoon Deck: Hellfire",
            "Wriggling Sinew",
            "Icon of Rot",
            "Swarming Plaguehive",
            "Infernal Alchemist Stone",
            "Aran's Relaxing Ruby",
            "Toe Knee's Promise",
            "Mrrgria's Favor",
            "Eye of Skovald",
            "Corrupted Starlight",
            "Pharameres Forbidden Grimoire",
            "Caged Horror",
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
                    text: "mean at 85211",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 85211.9,
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