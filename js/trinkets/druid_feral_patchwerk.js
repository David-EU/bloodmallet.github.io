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
                157797,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                12296,
                6129,
                8956,
                10938,
                9257,
                10683,
                9795,
                10327,
                7776,
                9093,
                8292,
                7919,
                8405,
                9838,
                7903,
                7126,
                7850,
                8692,
                10856,
                8470,
                6584,
                10992,
                0,
                8566,
                7053,
                9019,
                3738,
                7384,
                9658,
                9094,
                7037,
                7699,
                5269,
                0,
                0,
                7063,
                5299,
                3469,
                4619,
                1346,
                3519,
                4392,
                2144,
                2472,
                2641,
                2400,
                2195,
                3027,
                709
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                11910,
                8020,
                8147,
                9590,
                7247,
                9569,
                7491,
                6193,
                9375,
                8625,
                8319,
                9006,
                9024,
                9128,
                7618,
                8463,
                7657,
                8064,
                7893,
                7507,
                8613,
                6116,
                7494,
                8297,
                7438,
                8617,
                3422,
                5365,
                6408,
                7685,
                7053,
                5118,
                6038,
                0,
                0,
                7709,
                3155,
                5050,
                2111,
                2006,
                3422,
                1892,
                2261,
                1623,
                2359,
                857,
                1803,
                3195,
                402
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                8575,
                5564,
                8116,
                8103,
                8490,
                7674,
                6635,
                10212,
                6761,
                6977,
                8858,
                7121,
                6859,
                7672,
                7840,
                6512,
                7587,
                6264,
                6932,
                6440,
                6410,
                8581,
                6378,
                6947,
                5901,
                7167,
                2426,
                5125,
                8015,
                5846,
                3928,
                4915,
                5449,
                0,
                0,
                6192,
                2859,
                2073,
                3449,
                2371,
                1663,
                2701,
                1750,
                1781,
                2714,
                2609,
                2942,
                527,
                1721
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                10551,
                5522,
                5553,
                8224,
                6593,
                8314,
                8037,
                5686,
                8383,
                7377,
                5530,
                6250,
                5620,
                7839,
                6772,
                6563,
                6186,
                5970,
                8071,
                6586,
                6921,
                6455,
                7947,
                7601,
                7458,
                5065,
                4496,
                6294,
                7200,
                6052,
                4381,
                5260,
                5580,
                0,
                0,
                6782,
                4719,
                4528,
                3933,
                1926,
                5148,
                1697,
                2375,
                1899,
                3356,
                2627,
                391,
                1885,
                1751
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                93600,
                4740,
                8698,
                7340,
                5975,
                7023,
                5191,
                5454,
                4523,
                8101,
                4773,
                6132,
                5687,
                6680,
                3983,
                6724,
                5237,
                6413,
                5398,
                6111,
                4971,
                6366,
                5158,
                5439,
                4490,
                7306,
                3848,
                5619,
                5398,
                5873,
                5637,
                4543,
                4381,
                7331,
                5584,
                7085,
                1494,
                1340,
                2077,
                1966,
                0,
                1777,
                2207,
                3128,
                2392,
                1625,
                2539,
                2062,
                0
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                0,
                5401,
                6137,
                6824,
                4955,
                73901,
                6597,
                6682,
                78861,
                74774,
                6610,
                5488,
                5881,
                5079,
                7630,
                4863,
                5405,
                5396,
                6826,
                3631,
                5495,
                5478,
                73709,
                6437,
                5681,
                5383,
                1104,
                4044,
                4714,
                5463,
                62391,
                3510,
                59524,
                5680,
                4629,
                4721,
                3337,
                3204,
                1619,
                2011,
                2612,
                2110,
                1579,
                456,
                744,
                3166,
                1536,
                2143,
                426
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                93989,
                81624,
                67052,
                75032,
                0,
                72702,
                71258,
                0,
                0,
                71231,
                70477,
                69442,
                64258,
                68535,
                69709,
                69806,
                64854,
                58667,
                64103,
                62370,
                56771,
                0,
                57101,
                61430,
                56095,
                79322,
                63040,
                54073,
                54961,
                0,
                59180,
                0,
                73134,
                69277,
                31750,
                43725,
                40207,
                39479,
                41793,
                36615,
                32243,
                33466,
                33768,
                30005,
                30667,
                29807,
                26089,
                31817
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "2017-09-08 02:02 SimC build: 43201b2"
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
            "Convergence of Fates",
            "Eye of Command",
            "Nightblooming Frond",
            "Stat Stick (Versatility)",
            "Vial of Ceaseless Toxins",
            "PVP Badge of Conquest",
            "Chaos Talisman",
            "Engine of Eradication",
            "Cradle of Anguish",
            "Stat Stick (Crit)",
            "Stat Stick (Mastery)",
            "Bloodthirsty Instinct",
            "Six-Feather Fan",
            "Entwined Elemental Foci",
            "Memento of Angerboda",
            "Thrice-Accursed Compass",
            "Stat Stick (Haste)",
            "Tirathon's Betrayal",
            "Gift of Radiance",
            "Chrono Shard",
            "Void Stalker's Contract",
            "Astral Alchemist Stone",
            "Arcanogolem Digit",
            "Nightmare Egg Shell",
            "Bloodstained Handkerchief",
            "Unstable Arcanocrystal",
            "PVP Insignia of Conquest",
            "Tempered Egg of Serpentrix",
            "Splinters of Agronax",
            "Umbral Moonglaives",
            "Horn of Valor",
            "Infernal Cinders",
            "Darkmoon Deck: Dominion",
            "Infernal Alchemist Stone",
            "Draught of Souls",
            "The Devilsaur's Bite",
            "Faulty Countermeasure",
            "Spontaneous Appendages",
            "Nature's Call",
            "Terrorbound Nexus",
            "Spiked Counterweight",
            "Mark of Dargrul",
            "Giant Ornamental Pearl",
            "Toe Knee's Promise",
            "Tiny Oozeling in a Jar",
            "Windscar Whetstone",
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
                    text: "mean at 91581",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 91581.06,
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