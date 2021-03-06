Highcharts.chart('hunter_marksmanship_beastlord', 
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
                582954,
                581305,
                564049,
                0,
                484428,
                83708,
                71372,
                0,
                0,
                68157,
                68336,
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
                49869,
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
            name: "1000"
        },
        {
            color: "#cab2d6",
            data: [
                0,
                0,
                0,
                25473,
                0,
                25944,
                28839,
                20523,
                24834,
                32741,
                25234,
                28836,
                17354,
                11333,
                10960,
                15343,
                15352,
                19999,
                21437,
                15286,
                21782,
                26744,
                8766,
                6953,
                20637,
                16380,
                18483,
                20371,
                19959,
                9433,
                18048,
                16798,
                495,
                15972,
                21036,
                20511,
                21744,
                20703,
                15978,
                3856,
                23694,
                11713,
                14020,
                9789,
                3400,
                17875,
                1483,
                5637,
                8925,
                0,
                0,
                8862,
                0,
                3174,
                21933,
                17104,
                0,
                11248,
                4023,
                5866
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                0,
                0,
                0,
                4021,
                0,
                41555,
                35078,
                16452,
                31004,
                29469,
                326078,
                16274,
                33472,
                22642,
                23568,
                30251,
                30789,
                26693,
                12496,
                24938,
                29371,
                19318,
                27252,
                21181,
                16604,
                25226,
                27497,
                30621,
                9855,
                15915,
                26787,
                15976,
                22570,
                11502,
                10833,
                20770,
                7145,
                7676,
                32124,
                3032,
                21570,
                27181,
                15915,
                19467,
                11511,
                13892,
                16894,
                7564,
                10246,
                3224,
                19813,
                20853,
                0,
                19303,
                5572,
                6579,
                11455,
                8587,
                4866,
                4257
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                0,
                0,
                0,
                23778,
                0,
                19955,
                31941,
                24965,
                36978,
                31572,
                0,
                24010,
                35908,
                28592,
                12473,
                11160,
                6042,
                18586,
                24035,
                18639,
                15897,
                21035,
                16717,
                19147,
                20929,
                7875,
                7781,
                13091,
                26129,
                33611,
                9306,
                22510,
                10211,
                8866,
                11179,
                14436,
                18338,
                21599,
                10620,
                10171,
                11804,
                10515,
                12664,
                8415,
                22718,
                14318,
                11455,
                27655,
                25711,
                12385,
                3133,
                9318,
                0,
                0,
                2085,
                8944,
                6034,
                1317,
                5471,
                0
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                0,
                0,
                0,
                23478,
                0,
                31265,
                21470,
                2161,
                18475,
                12424,
                0,
                17397,
                19794,
                10856,
                16749,
                16666,
                26313,
                7239,
                18382,
                10559,
                8951,
                15576,
                22677,
                10440,
                11332,
                27006,
                18411,
                18600,
                5000,
                10850,
                21966,
                14256,
                12075,
                15256,
                13875,
                15876,
                13106,
                2898,
                8025,
                11239,
                9917,
                13072,
                6407,
                7386,
                0,
                14843,
                9297,
                0,
                12109,
                10676,
                13351,
                12954,
                0,
                13471,
                12995,
                12756,
                0,
                16285,
                4312,
                11978
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                0,
                0,
                0,
                9688,
                0,
                276365,
                265947,
                20977,
                23141,
                246103,
                0,
                27322,
                29004,
                26035,
                22954,
                17478,
                10663,
                25584,
                21905,
                16191,
                17684,
                170994,
                7005,
                14476,
                26059,
                16227,
                12218,
                25603,
                17459,
                16025,
                12029,
                14800,
                24197,
                11190,
                18905,
                15834,
                16580,
                12488,
                14061,
                13442,
                17190,
                19425,
                3343,
                7801,
                17901,
                12805,
                11652,
                13165,
                18439,
                0,
                1780,
                9333,
                0,
                6273,
                5377,
                16188,
                16045,
                0,
                6759,
                2277
            ],
            name: "940"
        },
        {
            color: "#33a02c",
            data: [
                0,
                0,
                0,
                15263,
                0,
                0,
                0,
                26001,
                15989,
                0,
                0,
                20272,
                13478,
                3901,
                16532,
                6659,
                24389,
                7743,
                10791,
                20785,
                16767,
                0,
                15203,
                17473,
                2598,
                9112,
                13206,
                15450,
                7814,
                6691,
                18741,
                710,
                3431,
                3415,
                11781,
                8286,
                0,
                1097,
                17086,
                10348,
                10599,
                2319,
                18917,
                18373,
                19077,
                9670,
                2087,
                3688,
                0,
                7462,
                16916,
                9762,
                4410,
                6324,
                10300,
                3748,
                4508,
                3508,
                6230,
                1263
            ],
            name: "930"
        },
        {
            color: "#a6cee3",
            data: [
                0,
                0,
                0,
                3661,
                0,
                0,
                0,
                12951,
                287816,
                0,
                0,
                19019,
                20260,
                28497,
                18097,
                18784,
                7638,
                7596,
                5907,
                17425,
                23084,
                0,
                11633,
                9825,
                19278,
                187521,
                8616,
                16049,
                7466,
                14087,
                7593,
                28864,
                8164,
                19330,
                17717,
                23503,
                16077,
                7107,
                14239,
                171402,
                13735,
                16425,
                14027,
                4808,
                0,
                13032,
                22263,
                13505,
                21305,
                14563,
                134345,
                16381,
                9867,
                11478,
                5581,
                15050,
                0,
                9339,
                0,
                1940
            ],
            name: "920"
        },
        {
            color: "#1f78b4",
            data: [
                0,
                0,
                0,
                455395,
                0,
                0,
                0,
                322537,
                0,
                0,
                0,
                261879,
                239430,
                237327,
                227691,
                208835,
                202759,
                208037,
                201795,
                188462,
                171807,
                0,
                193015,
                202756,
                180130,
                0,
                181980,
                147178,
                187374,
                166186,
                155922,
                153922,
                184902,
                169579,
                140659,
                123862,
                142872,
                158279,
                113138,
                0,
                110141,
                117575,
                132842,
                139371,
                146203,
                108344,
                125232,
                130439,
                100469,
                153575,
                0,
                96213,
                157741,
                115147,
                106005,
                84821,
                132608,
                106162,
                102766,
                80924
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-12-13 21:45 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/2143d84bc98dd1d780b61e851198f81cf756e317\" target=\"blank\">2143d84</a>",
        useHTML: true
    },
    title: {
        text: "Hunter - Marksmanship - Beastlord",
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
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=140806\">Convergence of Fates</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +20</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +15</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=151963\">Forgefiend's Fabricator</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +10</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=139329\">Bloodthirsty Instinct</a>",
            "<a href=\"http://www.wowhead.com/item=147018\">Spectral Thurible</a>",
            "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=140801\">Fury of the Burning Sky</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=142157\">Aran's Relaxing Ruby</a>",
            "<a href=\"http://www.wowhead.com/item=140796\">Entwined Elemental Foci</a>",
            "<a href=\"http://www.wowhead.com/item=147015\">Engine of Eradication</a>",
            "<a href=\"http://www.wowhead.com/item=140798\">Icon of Rot</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=137541\">Moonlit Prism</a>",
            "<a href=\"http://www.wowhead.com/item=141537\">Thrice-Accursed Compass</a>",
            "<a href=\"http://www.wowhead.com/item=151968\">Shadow-Singed Fang</a>",
            "<a href=\"http://www.wowhead.com/item=137367\">Stormsinger Fulmination Charge</a>",
            "<a href=\"http://www.wowhead.com/item=142165\">Deteriorated Construct Core</a>",
            "<a href=\"http://www.wowhead.com/item=147017\">Tarnished Sentinel Medallion</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=147019\">Tome of Unraveling Sanity</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=137433\">Obelisk of the Void</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=142773\">PVP Badge of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Twisting Wind</a>",
            "<a href=\"http://www.wowhead.com/item=142662\">PVP Insignia of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=136716\">Caged Horror</a>",
            "<a href=\"http://www.wowhead.com/item=141585\">Six-Feather Fan</a>",
            "<a href=\"http://www.wowhead.com/item=151962\">Prototype Personnel Decimator</a>",
            "<a href=\"http://www.wowhead.com/item=137537\">Tirathon's Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=151307\">Void Stalker's Contract</a>",
            "<a href=\"http://www.wowhead.com/item=147016\">Terror From Below</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=137301\">Corrupted Starlight</a>",
            "<a href=\"http://www.wowhead.com/item=140802\">Nightblooming Frond</a>",
            "<a href=\"http://www.wowhead.com/item=133641\">Eye of Skovald</a>",
            "<a href=\"http://www.wowhead.com/item=140026\">The Devilsaur's Bite</a>",
            "<a href=\"http://www.wowhead.com/item=137373\">Tempered Egg of Serpentrix</a>",
            "<a href=\"http://www.wowhead.com/item=140027\">Ley Spark</a>",
            "<a href=\"http://www.wowhead.com/item=151969\">Terminus Signaling Beacon</a>",
            "<a href=\"http://www.wowhead.com/item=144477\">Splinters of Agronax</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=137446\">Elementium Bomb Squirrel Generator</a>",
            "<a href=\"http://www.wowhead.com/item=137306\">Oakheart's Gnarled Root</a>",
            "<a href=\"http://www.wowhead.com/item=140794\">Arcanogolem Digit</a>",
            "<a href=\"http://www.wowhead.com/item=138224\">Unstable Horrorslime</a>",
            "<a href=\"http://www.wowhead.com/item=142160\">Mrrgria's Favor</a>",
            "<a href=\"http://www.wowhead.com/item=137349\">Naraxas' Spiked Tongue</a>",
            "<a href=\"http://www.wowhead.com/item=137329\">Figurehead of the Naglfar</a>"
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
                    text: 'mean: ' + Intl.NumberFormat().format(293858),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 293858.65,
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