Highcharts.chart('monk_windwalker_patchwerk', 
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
                50166,
                47194,
                44887,
                267018,
                260108,
                38901,
                246817,
                43553,
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
                186921,
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
                23146,
                21475,
                21563,
                0,
                0,
                16707,
                0,
                19450,
                16951,
                18023,
                16502,
                15632,
                16640,
                16313,
                12197,
                18396,
                17368,
                13413,
                16981,
                15546,
                15628,
                16258,
                15118,
                16531,
                0,
                16440,
                10716,
                14608,
                13312,
                13106,
                13278,
                11913,
                17006,
                14826,
                6313,
                13807,
                13458,
                15440,
                17411,
                11365,
                12942,
                7665,
                7801,
                0,
                10707,
                8864,
                6432,
                5444,
                3314,
                3329,
                2103,
                3679,
                4113,
                4018,
                4723,
                9713,
                6994,
                4643,
                4515,
                0
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                16633,
                18084,
                17265,
                0,
                0,
                195161,
                0,
                14467,
                14785,
                20344,
                13532,
                16060,
                13263,
                14064,
                17563,
                15309,
                11467,
                15607,
                13648,
                15889,
                13932,
                14464,
                14138,
                14852,
                0,
                13786,
                14557,
                11465,
                14731,
                13093,
                12862,
                11182,
                13415,
                13929,
                7094,
                8412,
                16806,
                15609,
                12298,
                11557,
                11796,
                12461,
                10446,
                0,
                6016,
                10064,
                5496,
                3815,
                7182,
                5539,
                8136,
                4874,
                2869,
                1379,
                3496,
                10053,
                3779,
                2435,
                3776,
                2160
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                18456,
                18592,
                15995,
                0,
                0,
                0,
                0,
                14420,
                11018,
                14902,
                15506,
                13122,
                14817,
                11176,
                14351,
                14177,
                14416,
                13938,
                12495,
                12089,
                12099,
                12885,
                12243,
                13221,
                0,
                14193,
                12285,
                10933,
                11439,
                13724,
                11964,
                10333,
                13833,
                12173,
                7979,
                11526,
                12380,
                9182,
                11907,
                15259,
                10610,
                6026,
                7382,
                0,
                9414,
                3977,
                5617,
                6771,
                5117,
                2587,
                1859,
                4689,
                4987,
                5513,
                4271,
                11807,
                3235,
                1062,
                3036,
                5400
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                16150,
                16144,
                15053,
                0,
                0,
                0,
                0,
                15062,
                15370,
                16819,
                10203,
                12259,
                11259,
                15585,
                9305,
                13397,
                10804,
                12048,
                13134,
                11621,
                11498,
                13074,
                10751,
                12331,
                0,
                13889,
                9327,
                9970,
                11464,
                10852,
                9991,
                10091,
                11732,
                12829,
                4509,
                10917,
                11437,
                14219,
                13012,
                10616,
                8641,
                7006,
                6573,
                0,
                6974,
                6454,
                3730,
                2102,
                1605,
                4127,
                4404,
                1647,
                3462,
                3778,
                3160,
                7678,
                3166,
                5592,
                2705,
                0
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                164754,
                161829,
                157116,
                0,
                0,
                0,
                0,
                139112,
                11783,
                11228,
                11945,
                11525,
                9314,
                9436,
                11222,
                12270,
                12517,
                9247,
                7794,
                11678,
                11259,
                12014,
                14290,
                10260,
                0,
                10702,
                12073,
                5959,
                12203,
                9809,
                14357,
                11892,
                10115,
                12234,
                7205,
                7618,
                8959,
                9905,
                7790,
                8175,
                11284,
                6817,
                4846,
                0,
                6171,
                6317,
                5668,
                3163,
                5911,
                4453,
                2972,
                3154,
                2372,
                3415,
                3015,
                9095,
                5691,
                2722,
                4123,
                5613
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
                0,
                10424,
                15328,
                11175,
                11262,
                11646,
                10586,
                10402,
                12978,
                9452,
                11246,
                11310,
                10354,
                13051,
                8650,
                10724,
                11389,
                0,
                10940,
                7967,
                10408,
                5506,
                10760,
                7987,
                7493,
                10236,
                5072,
                5264,
                10225,
                9787,
                7626,
                11897,
                11046,
                9750,
                5007,
                6765,
                11122,
                5762,
                5913,
                5767,
                6418,
                3908,
                2769,
                4717,
                5244,
                3344,
                988,
                600,
                7247,
                155,
                3232,
                2558,
                0
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
                0,
                10189,
                10320,
                135363,
                8371,
                9967,
                9582,
                7766,
                8963,
                7747,
                7377,
                8486,
                5937,
                6709,
                10793,
                9513,
                8484,
                0,
                8571,
                9114,
                6527,
                7487,
                7786,
                7812,
                112524,
                8295,
                11520,
                3775,
                3600,
                6876,
                10218,
                8260,
                7727,
                7062,
                3500,
                4926,
                6471,
                83789,
                66044,
                3017,
                2482,
                4386,
                1945,
                3279,
                323,
                2470,
                3352,
                3822,
                6620,
                4716,
                3357,
                940,
                2332
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
                0,
                137660,
                118276,
                0,
                121106,
                119332,
                118671,
                121145,
                103329,
                114582,
                114847,
                113757,
                112397,
                110739,
                106620,
                107651,
                107323,
                0,
                96601,
                105137,
                106288,
                99993,
                96777,
                97229,
                0,
                87858,
                89665,
                130034,
                105154,
                89646,
                87108,
                85373,
                85125,
                86160,
                85907,
                83259,
                112954,
                0,
                0,
                68284,
                64223,
                62747,
                68267,
                59338,
                55850,
                54970,
                52929,
                51802,
                11402,
                38394,
                34922,
                32334,
                38182
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-12-13 21:45 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/2143d84bc98dd1d780b61e851198f81cf756e317\" target=\"blank\">2143d84</a>",
        useHTML: true
    },
    title: {
        text: "Monk - Windwalker - Patchwerk",
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
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +20</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +15</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +10</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality</a>",
            "<a href=\"http://www.wowhead.com/item=142167\">Eye of Command</a>",
            "<a href=\"http://www.wowhead.com/item=151190\">Specter of Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=151968\">Shadow-Singed Fang</a>",
            "<a href=\"http://www.wowhead.com/item=147015\">Engine of Eradication</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=147011\">Vial of Ceaseless Toxins</a>",
            "<a href=\"http://www.wowhead.com/item=133644\">Memento of Angerboda</a>",
            "<a href=\"http://www.wowhead.com/item=140796\">Entwined Elemental Foci</a>",
            "<a href=\"http://www.wowhead.com/item=142773\">PVP Badge of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=141537\">Thrice-Accursed Compass</a>",
            "<a href=\"http://www.wowhead.com/item=139329\">Bloodthirsty Instinct</a>",
            "<a href=\"http://www.wowhead.com/item=140806\">Convergence of Fates</a>",
            "<a href=\"http://www.wowhead.com/item=137459\">Chaos Talisman</a>",
            "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=141585\">Six-Feather Fan</a>",
            "<a href=\"http://www.wowhead.com/item=133647\">Gift of Radiance</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=137312\">Nightmare Egg Shell</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=151964\">Seeping Scourgewing</a>",
            "<a href=\"http://www.wowhead.com/item=140794\">Arcanogolem Digit</a>",
            "<a href=\"http://www.wowhead.com/item=137537\">Tirathon's Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=142662\">PVP Insignia of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=142159\">Bloodstained Handkerchief</a>",
            "<a href=\"http://www.wowhead.com/item=151307\">Void Stalker's Contract</a>",
            "<a href=\"http://www.wowhead.com/item=140802\">Nightblooming Frond</a>",
            "<a href=\"http://www.wowhead.com/item=137373\">Tempered Egg of Serpentrix</a>",
            "<a href=\"http://www.wowhead.com/item=144477\">Splinters of Agronax</a>",
            "<a href=\"http://www.wowhead.com/item=147012\">Umbral Moonglaives</a>",
            "<a href=\"http://www.wowhead.com/item=147009\">Infernal Cinders</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=151963\">Forgefiend's Fabricator</a>",
            "<a href=\"http://www.wowhead.com/item=152093\">Gorshalach's Legacy</a>",
            "<a href=\"http://www.wowhead.com/item=140026\">The Devilsaur's Bite</a>",
            "<a href=\"http://www.wowhead.com/item=137539\">Faulty Countermeasure</a>",
            "<a href=\"http://www.wowhead.com/item=139325\">Spontaneous Appendages</a>",
            "<a href=\"http://www.wowhead.com/item=139334\">Nature's Call</a>",
            "<a href=\"http://www.wowhead.com/item=137406\">Terrorbound Nexus</a>",
            "<a href=\"http://www.wowhead.com/item=137357\">Mark of Dargrul</a>",
            "<a href=\"http://www.wowhead.com/item=137369\">Giant Ornamental Pearl</a>",
            "<a href=\"http://www.wowhead.com/item=137439\">Tiny Oozeling in a Jar</a>",
            "<a href=\"http://www.wowhead.com/item=137486\">Windscar Whetstone</a>",
            "<a href=\"http://www.wowhead.com/item=140808\">Draught of Souls</a>",
            "<a href=\"http://www.wowhead.com/item=136715\">Spiked Counterweight</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=139320\">Ravaged Seed Pod</a>",
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
                    text: 'mean: ' + Intl.NumberFormat().format(167245),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 167245.43333333332,
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