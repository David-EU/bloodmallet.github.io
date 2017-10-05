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
                136271,
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
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                0,
                8176,
                4811,
                6063,
                6359,
                7520,
                6815,
                6188,
                7285,
                5738,
                7386,
                7595,
                6114,
                5531,
                6937,
                6738,
                5488,
                7301,
                5976,
                5651,
                0,
                7302,
                4804,
                4666,
                5721,
                8489,
                6434,
                4794,
                4616,
                4312,
                5892,
                4991,
                5857,
                0,
                6036,
                4628,
                3404,
                3156,
                0,
                2877,
                4590,
                2535,
                2424,
                2293,
                3107,
                3292,
                2903,
                2750,
                1690,
                503
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                9300,
                3990,
                7349,
                5066,
                6536,
                6106,
                7130,
                7622,
                6294,
                6094,
                5166,
                6532,
                6207,
                5442,
                5893,
                6831,
                3848,
                6372,
                4683,
                6178,
                6730,
                5405,
                4529,
                4663,
                5226,
                5860,
                2910,
                4277,
                5654,
                5731,
                3474,
                6528,
                0,
                4980,
                4614,
                4564,
                3303,
                0,
                4593,
                3175,
                2977,
                1986,
                3571,
                3474,
                2928,
                2690,
                1928,
                1240,
                590
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                6440,
                4729,
                6317,
                5907,
                6099,
                6315,
                5588,
                6638,
                6602,
                5471,
                6566,
                5911,
                6085,
                5845,
                6060,
                5432,
                5517,
                5785,
                4774,
                4168,
                5269,
                4721,
                5696,
                4604,
                4682,
                6358,
                5151,
                4616,
                3243,
                5182,
                5221,
                4740,
                0,
                6673,
                4370,
                3747,
                3627,
                0,
                3395,
                2748,
                3109,
                3408,
                3158,
                1719,
                2112,
                1865,
                1950,
                1230,
                1606
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                7371,
                3733,
                4945,
                5307,
                5622,
                4014,
                4412,
                6352,
                4612,
                4708,
                4179,
                5277,
                4531,
                4798,
                3739,
                4551,
                5379,
                5279,
                4386,
                5963,
                4787,
                3432,
                3280,
                4237,
                5663,
                5055,
                3546,
                3673,
                3720,
                6065,
                2880,
                6078,
                0,
                3348,
                3292,
                3071,
                2797,
                0,
                2606,
                2574,
                1935,
                2761,
                1889,
                2343,
                2554,
                1984,
                2774,
                2130,
                978
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                7255,
                3709,
                5176,
                5179,
                5257,
                5595,
                5805,
                67951,
                4764,
                5065,
                4946,
                3962,
                5792,
                4368,
                4325,
                5559,
                3984,
                3302,
                4081,
                3374,
                5098,
                4788,
                4065,
                3525,
                5398,
                4134,
                3609,
                3457,
                4123,
                4191,
                3550,
                3381,
                4098,
                4174,
                2699,
                3324,
                2533,
                3779,
                2973,
                2392,
                1705,
                1710,
                2208,
                2150,
                2000,
                2475,
                1022,
                1336,
                1243
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                86133,
                3582,
                4459,
                3377,
                70251,
                4853,
                4142,
                0,
                4806,
                4594,
                3888,
                3880,
                3519,
                63488,
                5814,
                4178,
                3924,
                4465,
                3483,
                60597,
                5109,
                3596,
                3326,
                3792,
                4086,
                4834,
                3571,
                4398,
                2546,
                3481,
                51653,
                4362,
                5939,
                4733,
                2823,
                2968,
                2499,
                4861,
                2432,
                3430,
                2630,
                3678,
                2650,
                1992,
                2138,
                2212,
                1778,
                1976,
                889
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                95268,
                68120,
                70948,
                0,
                63841,
                64019,
                0,
                62777,
                61287,
                60806,
                60674,
                60139,
                0,
                57998,
                57146,
                58532,
                56685,
                59480,
                0,
                45237,
                51785,
                52518,
                51470,
                43386,
                44107,
                52785,
                50222,
                50211,
                41357,
                0,
                40797,
                61541,
                40403,
                47099,
                45308,
                47777,
                56010,
                43699,
                40555,
                44037,
                42460,
                38683,
                37413,
                37078,
                35497,
                34223,
                34440,
                25507
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-09-22 18:32 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/241e09d6aeb2f51f8b24e2b7038b7dc580223b38\" target=\"blank\">241e09d</a>"
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
            "Dreadstone of Endless Shadows",
            "Stormsinger Fulmination Charge",
            "Tome of Unraveling Sanity",
            "Padawsen's Unlucky Charm",
            "Erratic Metronome",
            "Stat Stick (Haste)",
            "Stat Stick (Versatility)",
            "Stat Stick (Crit)",
            "Charm of the Rising Tide",
            "Eyasu's Mulligan",
            "PVP Badge of Dominance",
            "Chrono Shard",
            "Infernal Writ",
            "Naraxas' Spiked Tongue",
            "Astral Alchemist Stone",
            "Star Gate",
            "PVP Insignia of Dominance",
            "Moonlit Prism",
            "Horn of Valor",
            "Deteriorated Construct Core",
            "Reality Breacher",
            "Fury of the Burning Sky",
            "Obelisk of the Void",
            "Devilsaur Shock-Baton",
            "Bough of Corruption",
            "Spectral Thurible",
            "Twisting Wind",
            "Darkmoon Deck: Hellfire",
            "Portable Manacracker",
            "Swarming Plaguehive",
            "Oakheart's Gnarled Root",
            "Aran's Relaxing Ruby",
            "Infernal Alchemist Stone",
            "Icon of Rot",
            "Mrrgria's Favor",
            "Caged Horror",
            "Corrupted Starlight",
            "Pharameres Forbidden Grimoire",
            "Toe Knee's Promise",
            "Wriggling Sinew",
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
                    text: "mean at 78900",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 78900.72,
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