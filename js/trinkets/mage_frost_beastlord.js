Highcharts.chart('mage_frost_beastlord', 
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
                448496,
                427734,
                412564,
                0,
                42839,
                0,
                343363,
                49029,
                0,
                52880,
                61361,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                36020,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                35657,
                33485,
                25531,
                0,
                27923,
                23919,
                22791,
                19296,
                33473,
                3276,
                23925,
                14002,
                17227,
                25774,
                20104,
                28175,
                18576,
                13484,
                16822,
                31891,
                29727,
                29764,
                26451,
                12486,
                19759,
                19969,
                15569,
                24109,
                14319,
                19921,
                16401,
                12824,
                8968,
                14687,
                10000,
                7530,
                9399,
                12982,
                25946,
                17172,
                10323,
                21689,
                10029,
                5652,
                20165,
                8927,
                6249,
                0,
                9363,
                18350,
                2925,
                19982,
                5452,
                14300,
                12710,
                11415,
                858,
                0
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                0,
                0,
                0,
                21327,
                309028,
                21019,
                0,
                19193,
                12167,
                19203,
                16278,
                10929,
                13403,
                21724,
                29237,
                29873,
                20269,
                26392,
                7918,
                14352,
                21104,
                12793,
                7948,
                10160,
                17416,
                18946,
                17346,
                14528,
                16693,
                22342,
                15812,
                24098,
                12791,
                17053,
                23843,
                15123,
                29260,
                20664,
                5925,
                21811,
                19230,
                6792,
                16880,
                13390,
                11920,
                7905,
                10635,
                15111,
                12520,
                16843,
                0,
                10588,
                8773,
                7440,
                2652,
                3048,
                2041,
                975,
                9135,
                10147,
                9132
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                0,
                0,
                0,
                24496,
                0,
                17406,
                0,
                24285,
                24927,
                16943,
                26679,
                18827,
                18538,
                30652,
                28511,
                15079,
                7968,
                13195,
                14091,
                3796,
                3690,
                16924,
                17942,
                17486,
                16361,
                10218,
                13941,
                19381,
                14117,
                19615,
                12503,
                11439,
                20819,
                19703,
                20045,
                5822,
                14069,
                3209,
                10151,
                2473,
                6922,
                13997,
                10378,
                12413,
                7191,
                16983,
                9997,
                13624,
                6885,
                9354,
                0,
                9283,
                8829,
                2839,
                8186,
                8755,
                4894,
                14149,
                7149,
                1692,
                3497
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                0,
                0,
                0,
                20844,
                0,
                20089,
                0,
                5260,
                15504,
                16966,
                6505,
                21348,
                2798,
                22678,
                18292,
                6660,
                20408,
                12547,
                25031,
                22612,
                15527,
                14172,
                17342,
                12045,
                28217,
                8086,
                16667,
                16482,
                6743,
                10911,
                12800,
                12635,
                17984,
                4637,
                12896,
                16735,
                5466,
                16470,
                4826,
                22740,
                12796,
                4234,
                19427,
                11959,
                16438,
                6604,
                13491,
                10313,
                13610,
                0,
                0,
                19427,
                12512,
                13322,
                15379,
                4528,
                15885,
                4380,
                0,
                8634,
                5690
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                0,
                0,
                0,
                42041,
                0,
                24326,
                0,
                206005,
                18114,
                196476,
                191728,
                9605,
                12303,
                9808,
                13536,
                19933,
                13790,
                14855,
                1150,
                7595,
                22900,
                15185,
                14163,
                13290,
                4837,
                151187,
                24293,
                14679,
                11020,
                26565,
                14801,
                22979,
                6251,
                18592,
                17712,
                1798,
                25071,
                0,
                9435,
                4033,
                12461,
                12029,
                11114,
                16085,
                6407,
                8407,
                8094,
                17156,
                10530,
                14299,
                0,
                0,
                5298,
                7711,
                0,
                6016,
                0,
                12885,
                5505,
                5904,
                2110
            ],
            name: "940"
        },
        {
            color: "#33a02c",
            data: [
                0,
                0,
                0,
                7512,
                0,
                18262,
                0,
                0,
                21022,
                0,
                0,
                21090,
                15442,
                6957,
                16095,
                17677,
                16242,
                16245,
                14686,
                17406,
                11907,
                7044,
                22958,
                4229,
                15332,
                0,
                2677,
                17475,
                15961,
                10526,
                22393,
                4440,
                17391,
                22735,
                7778,
                9766,
                6989,
                12489,
                6327,
                18627,
                10064,
                13898,
                4914,
                11769,
                426,
                1274,
                0,
                9672,
                13664,
                12043,
                8531,
                3964,
                6337,
                3394,
                4722,
                10209,
                9347,
                4215,
                7418,
                0,
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
                11651,
                0,
                14523,
                0,
                0,
                6450,
                0,
                0,
                204133,
                4688,
                28904,
                16455,
                10862,
                7236,
                17879,
                14403,
                9338,
                12370,
                9424,
                10351,
                27562,
                18577,
                0,
                16344,
                5667,
                11180,
                4741,
                134524,
                7446,
                11612,
                0,
                13197,
                11665,
                19006,
                4098,
                4117,
                5829,
                8999,
                5452,
                17462,
                2195,
                129388,
                7464,
                2688,
                12071,
                169,
                116485,
                19069,
                7999,
                9304,
                0,
                4566,
                3206,
                5599,
                3083,
                0,
                54444,
                9639
            ],
            name: "920"
        },
        {
            color: "#1f78b4",
            data: [
                0,
                0,
                0,
                235919,
                0,
                211404,
                0,
                0,
                204859,
                0,
                0,
                0,
                245244,
                147706,
                147519,
                157520,
                157868,
                146090,
                161701,
                169617,
                160627,
                168663,
                137306,
                144795,
                124663,
                0,
                146910,
                137065,
                144691,
                129095,
                0,
                136094,
                125081,
                129356,
                112147,
                150523,
                105423,
                152074,
                164488,
                127806,
                122859,
                122349,
                101277,
                115916,
                0,
                129228,
                139397,
                87039,
                112106,
                0,
                131945,
                95437,
                80647,
                110001,
                90629,
                91804,
                70568,
                67536,
                73083,
                0,
                17432
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-12-13 21:45 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/2143d84bc98dd1d780b61e851198f81cf756e317\" target=\"blank\">2143d84</a>",
        useHTML: true
    },
    title: {
        text: "Mage - Frost - Beastlord",
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
            "<a href=\"http://www.wowhead.com/item=147018\">Spectral Thurible</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=140798\">Icon of Rot</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +20</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +15</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +10</a>",
            "<a href=\"http://www.wowhead.com/item=151955\">Acrid Catalyst Injector</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=140804\">Star Gate</a>",
            "<a href=\"http://www.wowhead.com/item=142165\">Deteriorated Construct Core</a>",
            "<a href=\"http://www.wowhead.com/item=147019\">Tome of Unraveling Sanity</a>",
            "<a href=\"http://www.wowhead.com/item=147002\">Charm of the Rising Tide</a>",
            "<a href=\"http://www.wowhead.com/item=141536\">Padawsen's Unlucky Charm</a>",
            "<a href=\"http://www.wowhead.com/item=137485\">Infernal Writ</a>",
            "<a href=\"http://www.wowhead.com/item=133641\">Eye of Skovald</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=147016\">Terror From Below</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=141584\">Eyasu's Mulligan</a>",
            "<a href=\"http://www.wowhead.com/item=151310\">Reality Breacher</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=140809\">Whispers in the Dark</a>",
            "<a href=\"http://www.wowhead.com/item=144480\">Dreadstone of Endless Shadows</a>",
            "<a href=\"http://www.wowhead.com/item=140792\">Erratic Metronome</a>",
            "<a href=\"http://www.wowhead.com/item=151971\">Sheath of Asara</a>",
            "<a href=\"http://www.wowhead.com/item=142779\">PVP Badge of Dominance</a>",
            "<a href=\"http://www.wowhead.com/item=142157\">Aran's Relaxing Ruby</a>",
            "<a href=\"http://www.wowhead.com/item=140801\">Fury of the Burning Sky</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Bough of Corruption</a>",
            "<a href=\"http://www.wowhead.com/item=137446\">Elementium Bomb Squirrel Generator</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Twisting Wind</a>",
            "<a href=\"http://www.wowhead.com/item=140030\">Devilsaur Shock-Baton</a>",
            "<a href=\"http://www.wowhead.com/item=138224\">Unstable Horrorslime</a>",
            "<a href=\"http://www.wowhead.com/item=142668\">PVP Insignia of Dominance</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=137541\">Moonlit Prism</a>",
            "<a href=\"http://www.wowhead.com/item=137367\">Stormsinger Fulmination Charge</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=151970\">Vitality Resonator</a>",
            "<a href=\"http://www.wowhead.com/item=139326\">Wriggling Sinew</a>",
            "<a href=\"http://www.wowhead.com/item=142160\">Mrrgria's Favor</a>",
            "<a href=\"http://www.wowhead.com/item=137398\">Portable Manacracker</a>",
            "<a href=\"http://www.wowhead.com/item=137433\">Obelisk of the Void</a>",
            "<a href=\"http://www.wowhead.com/item=151962\">Prototype Personnel Decimator</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=147017\">Tarnished Sentinel Medallion</a>",
            "<a href=\"http://www.wowhead.com/item=137329\">Figurehead of the Naglfar</a>",
            "<a href=\"http://www.wowhead.com/item=137306\">Oakheart's Gnarled Root</a>",
            "<a href=\"http://www.wowhead.com/item=139321\">Swarming Plaguehive</a>",
            "<a href=\"http://www.wowhead.com/item=137301\">Corrupted Starlight</a>",
            "<a href=\"http://www.wowhead.com/item=136716\">Caged Horror</a>",
            "<a href=\"http://www.wowhead.com/item=140800\">Pharameres Forbidden Grimoire</a>",
            "<a href=\"http://www.wowhead.com/item=151969\">Terminus Signaling Beacon</a>",
            "<a href=\"http://www.wowhead.com/item=137349\">Naraxas' Spiked Tongue</a>"
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
                    text: 'mean: ' + Intl.NumberFormat().format(239904),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 239904.6393442623,
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