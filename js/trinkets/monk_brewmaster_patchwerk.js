Highcharts.chart('monk_brewmaster_patchwerk', 
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
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category + ': ' + Intl.NumberFormat().format(this.stackY),                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
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
            color: "#fdbf6f",
            data: [
                22544,
                25422,
                27531,
                26916,
                25498,
                25350,
                22554,
                0,
                22356,
                148217,
                21785,
                145766,
                0,
                0,
                138395,
                23378,
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
                98694,
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
            name: "1000"
        },
        {
            color: "#cab2d6",
            data: [
                8961,
                12183,
                10754,
                11743,
                12820,
                7668,
                11222,
                12398,
                10389,
                0,
                9098,
                0,
                10533,
                12572,
                0,
                10616,
                9874,
                11103,
                10759,
                11604,
                10358,
                10267,
                10462,
                9088,
                10090,
                11091,
                10096,
                9534,
                10119,
                10118,
                9652,
                9960,
                7361,
                9749,
                8215,
                9125,
                10003,
                10306,
                6887,
                9660,
                0,
                5928,
                5247,
                3233,
                5104,
                7175,
                5019,
                0,
                5250,
                4009,
                6669,
                4730,
                3713,
                5336,
                3086,
                2488,
                2269,
                2453,
                2908,
                3275,
                2952,
                5188,
                2770,
                2462,
                1780
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                151813,
                126604,
                12860,
                10251,
                9994,
                8810,
                7536,
                12407,
                8305,
                0,
                9647,
                0,
                10904,
                11387,
                0,
                8165,
                9149,
                9025,
                9912,
                10267,
                8199,
                6789,
                8703,
                8145,
                9658,
                7303,
                10164,
                9315,
                8957,
                7054,
                7124,
                9316,
                10035,
                8444,
                10044,
                8336,
                5310,
                8768,
                7683,
                7614,
                0,
                8035,
                5857,
                4547,
                6567,
                4189,
                6121,
                0,
                4710,
                5435,
                4429,
                4058,
                2202,
                1388,
                3956,
                3492,
                2689,
                3690,
                2668,
                1694,
                2464,
                6905,
                1943,
                1045,
                0
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                0,
                0,
                9164,
                10978,
                10503,
                8877,
                8557,
                12519,
                8597,
                0,
                7695,
                0,
                7675,
                12119,
                0,
                8942,
                7910,
                7657,
                8917,
                9651,
                7693,
                9410,
                7021,
                8998,
                8653,
                7142,
                8219,
                9316,
                8594,
                8822,
                6877,
                9353,
                6684,
                6645,
                7588,
                8004,
                8597,
                5455,
                6834,
                7194,
                0,
                6554,
                6858,
                3198,
                4144,
                5038,
                3351,
                0,
                3893,
                3264,
                5010,
                3716,
                4292,
                4585,
                3825,
                2882,
                2733,
                3195,
                3180,
                4799,
                4635,
                8028,
                3012,
                3919,
                1486
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                0,
                0,
                10029,
                8971,
                8442,
                7291,
                8007,
                9783,
                7436,
                0,
                7332,
                0,
                8917,
                8110,
                0,
                7088,
                7879,
                8676,
                9796,
                8738,
                8200,
                7069,
                8069,
                8156,
                8360,
                9540,
                8468,
                8536,
                8626,
                7583,
                8669,
                6165,
                6955,
                7990,
                8365,
                6047,
                7258,
                7781,
                4938,
                6722,
                0,
                6010,
                6304,
                2752,
                5879,
                4991,
                5959,
                0,
                3938,
                5557,
                3713,
                4599,
                3551,
                2836,
                1725,
                1852,
                1665,
                1419,
                1442,
                3328,
                2138,
                4756,
                1171,
                1383,
                766
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                0,
                0,
                92733,
                91223,
                87600,
                91463,
                90735,
                9452,
                91477,
                0,
                91692,
                0,
                7173,
                10662,
                0,
                78352,
                6462,
                5524,
                7259,
                6828,
                6816,
                6619,
                6908,
                6377,
                6949,
                6955,
                7257,
                6085,
                5766,
                6233,
                4411,
                7354,
                6758,
                6460,
                6403,
                7137,
                6874,
                6389,
                5915,
                6520,
                0,
                4801,
                3983,
                4737,
                3206,
                4737,
                3996,
                0,
                5541,
                2955,
                3318,
                2769,
                2265,
                3009,
                2774,
                2454,
                2641,
                2873,
                2602,
                2153,
                2721,
                4509,
                1722,
                1893,
                204
            ],
            name: "940"
        },
        {
            color: "#33a02c",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                8239,
                0,
                0,
                0,
                0,
                7766,
                6327,
                0,
                0,
                7851,
                7082,
                6699,
                7262,
                6063,
                6869,
                5389,
                5960,
                5352,
                6120,
                5665,
                7895,
                8217,
                6590,
                7582,
                5924,
                5479,
                4172,
                6620,
                5203,
                5765,
                5833,
                6156,
                6492,
                0,
                4740,
                4244,
                418,
                3780,
                3456,
                2460,
                5619,
                1589,
                2117,
                3130,
                4138,
                2908,
                2208,
                2467,
                3472,
                2681,
                1216,
                1909,
                3328,
                4011,
                5418,
                4325,
                2647,
                722
            ],
            name: "930"
        },
        {
            color: "#a6cee3",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                6166,
                0,
                0,
                0,
                0,
                5602,
                6564,
                0,
                0,
                5631,
                5828,
                6168,
                6228,
                5178,
                5409,
                5971,
                5793,
                4761,
                6962,
                6278,
                4359,
                4828,
                6007,
                4956,
                6172,
                5097,
                6843,
                4838,
                6549,
                5039,
                5190,
                4019,
                3716,
                0,
                2737,
                4629,
                2987,
                3075,
                3372,
                3152,
                5512,
                4109,
                4249,
                45023,
                44600,
                2408,
                2566,
                1788,
                37757,
                1922,
                2247,
                2204,
                1420,
                2087,
                3906,
                1415,
                22158,
                375
            ],
            name: "920"
        },
        {
            color: "#1f78b4",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                77600,
                0,
                0,
                0,
                0,
                84413,
                74701,
                0,
                0,
                74129,
                73549,
                67190,
                65691,
                73730,
                70379,
                68955,
                68775,
                66598,
                63981,
                61098,
                61667,
                59879,
                62242,
                63079,
                57474,
                62592,
                59496,
                57601,
                58445,
                59259,
                58353,
                61393,
                52065,
                0,
                59510,
                57206,
                69174,
                50488,
                49235,
                51136,
                66661,
                46255,
                45323,
                0,
                0,
                40144,
                38027,
                37848,
                0,
                36344,
                34973,
                33691,
                29796,
                28468,
                8657,
                23095,
                0,
                20262
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-12-13 21:45 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/2143d84bc98dd1d780b61e851198f81cf756e317\" target=\"blank\">2143d84</a>",
        useHTML: true
    },
    title: {
        text: "Monk - Brewmaster - Patchwerk",
        useHTML: true
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<div style=\"background-color:#eee; padding:12px;\"><b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + Intl.NumberFormat().format(cumulative_amount);            }        }        s += '</div>';        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "<a href=\"http://www.wowhead.com/item=144249\">Archimonde's Hatred Reborn</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +20</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +15</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +10</a>",
            "<a href=\"http://www.wowhead.com/item=154173\">Aggramar's Conviction</a>",
            "<a href=\"http://www.wowhead.com/item=154173\">Aggramar's Conviction +15</a>",
            "<a href=\"http://www.wowhead.com/item=141585\">Six-Feather Fan</a>",
            "<a href=\"http://www.wowhead.com/item=154173\">Aggramar's Conviction +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=154173\">Aggramar's Conviction +10</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=142167\">Eye of Command</a>",
            "<a href=\"http://www.wowhead.com/item=151190\">Specter of Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=137537\">Tirathon's Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=142159\">Bloodstained Handkerchief</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=142773\">PVP Badge of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=133647\">Gift of Radiance</a>",
            "<a href=\"http://www.wowhead.com/item=133644\">Memento of Angerboda</a>",
            "<a href=\"http://www.wowhead.com/item=141537\">Thrice-Accursed Compass</a>",
            "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>",
            "<a href=\"http://www.wowhead.com/item=137373\">Tempered Egg of Serpentrix</a>",
            "<a href=\"http://www.wowhead.com/item=140806\">Convergence of Fates</a>",
            "<a href=\"http://www.wowhead.com/item=147011\">Vial of Ceaseless Toxins</a>",
            "<a href=\"http://www.wowhead.com/item=137459\">Chaos Talisman</a>",
            "<a href=\"http://www.wowhead.com/item=139329\">Bloodthirsty Instinct</a>",
            "<a href=\"http://www.wowhead.com/item=140794\">Arcanogolem Digit</a>",
            "<a href=\"http://www.wowhead.com/item=144477\">Splinters of Agronax</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=151307\">Void Stalker's Contract</a>",
            "<a href=\"http://www.wowhead.com/item=137312\">Nightmare Egg Shell</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=140796\">Entwined Elemental Foci</a>",
            "<a href=\"http://www.wowhead.com/item=142662\">PVP Insignia of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=140802\">Nightblooming Frond</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=140026\">The Devilsaur's Bite</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=139325\">Spontaneous Appendages</a>",
            "<a href=\"http://www.wowhead.com/item=147015\">Engine of Eradication</a>",
            "<a href=\"http://www.wowhead.com/item=137539\">Faulty Countermeasure</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=147012\">Umbral Moonglaives</a>",
            "<a href=\"http://www.wowhead.com/item=137406\">Terrorbound Nexus</a>",
            "<a href=\"http://www.wowhead.com/item=151968\">Shadow-Singed Fang</a>",
            "<a href=\"http://www.wowhead.com/item=151964\">Seeping Scourgewing</a>",
            "<a href=\"http://www.wowhead.com/item=137357\">Mark of Dargrul</a>",
            "<a href=\"http://www.wowhead.com/item=137439\">Tiny Oozeling in a Jar</a>",
            "<a href=\"http://www.wowhead.com/item=147009\">Infernal Cinders</a>",
            "<a href=\"http://www.wowhead.com/item=151963\">Forgefiend's Fabricator</a>",
            "<a href=\"http://www.wowhead.com/item=139334\">Nature's Call</a>",
            "<a href=\"http://www.wowhead.com/item=137369\">Giant Ornamental Pearl</a>",
            "<a href=\"http://www.wowhead.com/item=137486\">Windscar Whetstone</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=136715\">Spiked Counterweight</a>",
            "<a href=\"http://www.wowhead.com/item=140808\">Draught of Souls</a>",
            "<a href=\"http://www.wowhead.com/item=139320\">Ravaged Seed Pod</a>",
            "<a href=\"http://www.wowhead.com/item=152093\">Gorshalach's Legacy</a>",
            "<a href=\"http://www.wowhead.com/item=140027\">Ley Spark</a>"
        ],
        labels: {
            useHTML: true
        }
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        plotLines: [
            {
                color: "#0973DA",
                label: {
                    align: "left",
                    rotation: 0,
                    style: {
                        color: "#0973DA"
                    },
                    text: 'mean: ' + Intl.NumberFormat().format(105211),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 105211.32307692307,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: true,
            formatter: function() {          return Intl.NumberFormat().format(this.total);        },
            style: {
                textOutline: false
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});