var IP = "192.168.1.10";

var floorNumber = 0;
var roomNumber = "001";
var systemNumber = 0;
var deviceNumber = 0;
var _semafor = true;
var state = [];
var SingleLoad = "001D 0 1 0\n\
002D 0 1 1\n\
003D 0 1 2\n\
004S 0 1 3\n\
005D 0 1 4\n\
006S 0 1 5\n\
0061S 0 1 6\n\
007S 0 1 7\n\
008S 0 1 8\n\
009D 0 1 9\n\
010D 0 1 10\n\
011D 0 1 11\n\
012D 0 1 12\n\
0121D 0 1 13\n\
013S 0 1 14\n\
014D 0 1 15\n\
015D 0 1 16\n\
016D 0 1 17\n\
017S 0 1 18\n\
018D 0 1 19\n\
019D 0 1 20\n\
020S 0 1 21\n\
021D 0 1 22\n\
022D 0 1 23\n\
023D 0 1 24\n\
024D 0 1 25\n\
025S 0 1 26\n\
026S 0 1 27\n\
0261S 0 1 28\n\
027S 0 1 29\n\
028D 0 1 30\n\
r 0 1 31\n\
104S 0 2 0\n\
1013S 0 2 1\n\
L01S 0 2 2\n\
L02S 0 2 3\n\
L03S 0 2 4\n\
1011D 0 2 5\n\
1012D 0 2 6\n\
102S 0 2 7\n\
1051D 0 2 8\n\
107D 0 2 9\n\
108D 0 2 10\n\
109D 0 2 11\n\
110D 0 2 12\n\
111D 0 2 13\n\
112D 0 2 14\n\
113D 0 2 15\n\
114D 0 2 16\n\
116D 0 2 17\n\
138D 0 2 18\n\
139D 0 2 19\n\
140D 0 2 20\n\
142D 0 2 21\n\
143S 0 2 22\n\
117D 0 2 23\n\
118D 0 2 24\n\
120S 0 2 25\n\
121S 0 2 26\n\
144S 0 2 27\n\
119D 0 2 28\n\
141D 0 2 29\n\
104D 0 2 30\n\
105D 0 2 31\n\
106D 0 3 0\n\
125S 0 3 1\n\
126S 0 3 2\n\
1261S 0 3 3\n\
128S 0 3 4\n\
127D 0 3 5\n\
1311S 0 3 6\n\
134S 0 3 7\n\
131D 0 3 8\n\
132D 0 3 9\n\
130S 0 3 10\n\
1301S 0 3 11\n\
136S 0 3 12\n\
1351S 0 3 13\n\
124S 0 3 14\n\
1241S 0 3 15\n\
135D 0 3 16\n\
137D 0 3 17\n\
1231S 0 3 18\n\
124S 0 3 19\n\
1241S 0 3 20\n\
122D 0 3 21\n\
123D 0 3 22\n\
201D 0 3 23\n\
224S 0 3 24\n\
220S 0 3 25\n\
221S 0 3 26\n\
216D 0 3 27\n\
217D 0 3 28\n\
218D 0 3 29\n\
219D 0 3 30\n\
222S 0 3 31\n\
2221S 0 4 0\n\
223S 0 4 1\n\
214S 0 4 2\n\
211D 0 4 3\n\
212D 0 4 4\n\
2121S 0 4 5\n\
202S 0 4 6\n\
207S 0 4 7\n\
2071S 0 4 8\n\
205D 0 4 9\n\
206D 0 4 10\n\
208D 0 4 11\n\
209S 0 4 12\n\
2091S 0 4 13\n\
204D 0 4 14\n\
203D 0 4 15\n\
301D 0 4 16\n\
3011S 0 4 17\n\
303D 0 4 18\n\
3031S 0 4 19\n\
306S 0 4 20\n\
307D 0 4 21\n\
302S 0 4 22\n\
305S 0 4 23\n\
3051S 0 4 24\n\
304D 0 4 25\n\
308S 0 4 26\n\
3081S 0 4 27\n\
309S 0 4 28\n\
401D 0 4 29\n\
4011D 0 4 30\n\
402D 0 4 31\n\
4021D 0 5 0\n\
403D 0 5 1\n\
4031D 0 5 2\n\
404D 0 5 3\n\
4041D 0 5 4\n\
405D 0 5 5\n\
406D 0 5 6\n\
4061D 0 5 7\n\
407D 0 5 8\n\
4071D 0 5 9\n\
408D 0 5 10\n\
4081D 0 5 11\n\
409D 0 5 12\n\
4091D 0 5 13\n\
410D 0 5 14\n\
4101D 0 5 15\n\
r 0 5 16\n\
r 0 5 17\n\
r 0 5 18\n\
r 0 5 19\n\
r 0 5 20\n\
r 0 5 21\n\
r 0 5 22\n\
r 0 5 23\n\
r 0 5 24\n\
r 0 5 25\n\
r 0 5 26\n\
r 0 5 27\n\
r 0 5 28\n\
r 0 5 29\n\
r 0 5 30\n\
r 0 5 31\n\
DU0-01 0 8 0\n\
DU0-02 0 8 1\n\
DU0-03 0 8 2\n\
DU0-04 0 8 3\n\
DU1-01 0 8 4\n\
DU1-02 0 8 5\n\
DU1-03 0 8 6\n\
DU2-01 0 8 7\n\
DU2-02 0 8 8\n\
DU2-03 0 8 9\n\
DD0-01 0 8 10\n\
DD0-02 0 8 11\n\
DD0-03 0 8 12\n\
DD0-04 0 8 13\n\
DD0-05 0 8 14\n\
DD0-06 0 8 15\n\
DD0-07 0 8 16\n\
DD0-08 0 8 17\n\
DD1-01 0 8 18\n\
DD1-02 0 8 19\n\
DD1-03 0 8 20\n\
DD1-04 0 8 21\n\
DD1-05 0 8 22\n\
DD1-06 0 8 23\n\
DD1-07 0 8 24\n\
DD1-08 0 8 25\n\
DD1-09 0 8 26\n\
DD1-10 0 8 27\n\
DD2-01 0 8 28\n\
DD2-02 0 8 29\n\
DD2-03 0 8 30\n\
DD2-04 0 8 31\n\
DD2-05 0 9 0\n\
DD2-06 0 9 1\n\
DD2-07 0 9 2\n\
MKD0-01 0 9 3\n\
MKD0-02 0 9 4\n\
MKD0-03 0 9 5\n\
MKD0-04 0 9 6\n\
MKD0-05 0 9 7\n\
MKD0-06 0 9 8\n\
MKD0-07 0 9 9\n\
MKD0-08 0 9 10\n\
MKD0-09 0 9 11\n\
MKD0-10 0 9 12\n\
MKD0-11 0 9 13\n\
MKD0-12 0 9 14\n\
MKD0-13 0 9 15\n\
MKD0-14 0 9 16\n\
MKD1-01 0 9 17\n\
MKD1-02 0 9 18\n\
MKD1-03 0 9 19\n\
MKD1-04 0 9 20\n\
MKD1-05 0 9 21\n\
MKD1-06 0 9 22\n\
MKD1-07 0 9 23\n\
MKD1-08 0 9 24\n\
MKD1-09 0 9 25\n\
MKD1-10 0 9 26\n\
MD1-01 0 9 27\n\
MD1-02 0 9 28\n\
MD1-03 0 9 29\n\
MKD2-01 0 9 30\n\
MKD2-02 0 9 31\n\
MKD2-03 0 10 0\n\
MKD2-04 0 10 1\n\
MKD2-05 0 10 2\n\
MKD2-06 0 10 3\n\
MKD2-07 0 10 4\n\
MKD2-08 0 10 5\n\
MKD2-09 0 10 6\n\
MKD3-01 0 10 7\n\
MKD3-02 0 10 8\n\
MKD3-03 0 10 9\n\
ACT_TEMP_Z1 0 10 10\n\
SET_TEMP_Z1 0 10 11\n\
ACT_TEMP_Z2 0 10 12\n\
SET_TEMP_Z2 0 10 13\n\
ACT_TEMP_Z3 0 10 14\n\
SET_TEMP_Z3 0 10 15\n\
ACT_TEMP_Z4 0 10 16\n\
SET_TEMP_Z4 0 10 17\n\
ACT_TEMP_Z5 0 10 18\n\
SET_TEMP_Z5 0 10 19\n\
ACT_TEMP_Z6 0 10 20\n\
SET_TEMP_Z6 0 10 21\n\
ACT_TEMP_Z7 0 10 22\n\
SET_TEMP_Z7 0 10 23\n\
ACT_TEMP_Z8 0 10 24\n\
SET_TEMP_Z8 0 10 25\n\
ACT_TEMP_Z9 0 10 26\n\
SET_TEMP_Z9 0 10 27\n\
ACT_TEMP_Z10 0 10 28\n\
SET_TEMP_Z10 0 10 29\n\
ACT_TEMP_Z11 0 10 30\n\
SET_TEMP_Z11 0 10 31\n\
ACT_TEMP_Z12 0 11 0\n\
SET_TEMP_Z12 0 11 1\n\
ACT_TEMP_Z13 0 11 2\n\
SET_TEMP_Z13 0 11 3\n\
ACT_TEMP_Z14 0 11 4\n\
SET_TEMP_Z14 0 11 5\n\
ACT_TEMP_Z15 0 11 6\n\
SET_TEMP_Z15 0 11 7\n\
ACT_TEMP_Z16 0 11 8\n\
SET_TEMP_Z16 0 11 9\n\
ACT_TEMP_Z17 0 11 10\n\
SET_TEMP_Z17 0 11 11\n\
ACT_TEMP_Z18 0 11 12\n\
SET_TEMP_Z18 0 11 13\n\
ACT_TEMP_Z19 0 11 14\n\
SET_TEMP_Z19 0 11 15\n\
ACT_TEMP_Z20 0 11 16\n\
SET_TEMP_Z20 0 11 17\n\
ACT_TEMP_Z21 0 11 18\n\
SET_TEMP_Z21 0 11 19\n\
ACT_TEMP_Z22 0 11 20\n\
SET_TEMP_Z22 0 11 21\n\
ACT_TEMP_Z23 0 11 22\n\
SET_TEMP_Z23 0 11 23\n\
ACT_TEMP_Z24 0 11 24\n\
SET_TEMP_Z24 0 11 25\n\
ACT_TEMP_Z25 0 11 26\n\
SET_TEMP_Z25 0 11 27\n\
ACT_TEMP_Z26 0 11 28\n\
SET_TEMP_Z26 0 11 29\n\
FP 0 0 0\n\
FP_AVR 0 0 1\n\
".split('\n');

var Masters = "1 001D 002D 003D 018D 021D\n\
2 020S\n\
3 017S\n\
4 025S\n\
5 009D\n\
6 010D 012D 0121D 028D\n\
7 013S\n\
8 006S 0061S 007S 008S\n\
9 004S 005D\n\
10 014D 016D 019D 022D 023D 024D\n\
11 104S\n\
12 027S\n\
13 026S 0261S\n\
".split('\n');

var SwitchLoads = ['D001', 'D002', 'D003', 'S004', 'D005', 'S006', 'S0061', 'S007', 'S008', 'D009', 'D010', 'D011', 'D012', 'D0121', 'S013', 'D014', 'D015', 'D016', 'S017', 'D018', 'D019', 'S020', 'D021', 'D022', 'D023', 'D024', 'S025', 'S026', 'S0261', 'S027', 'D028','S104',
'S1013','SL01','SL02','SL03','D1011','D1012','S102','D1051','D107','D108','D109','D110','D111','D112','D113','D114','D116','D138','D139','D140','D142','S143','D117','D118','S120','S121','S144','D119','D141','D104','D105','D106','S125','S126','S1261','S128','D127','S1311','S134','D131',
'D132','S130','S1301','S136','S1351','S124','S1241','D135','D137','S1231','S124','S1241','D122','D123','D201','S224','S220','S221','D216','D217','D218','D219','S222','S2221','S223','S214','D211','D212','S2121','S202','S207','S2071','D205','D206','D208','S209','S2091','D204','D203','D301',
'S3011','D303','S3031','S306','D307','S302','S305','S3051','D304','S308','S3081','S309','D401','D4011','D402','D4021','D403','D4031','D404','D4041','D405','D406','D4061','D407','D4071','D408','D4081','D409','D4091','D410','D4101'];
var DimmerLoads = ['D001', 'D002', 'D003', 'D005', 'D009', 'D010', 'D011', 'D012', 'D0121', 'D014', 'D015', 'D016', 'D018', 'D019', 'D021', 'D022', 'D023', 'D024', 'D028','D1011','D1012','D1051','D107','D108','D109','D110','D111','D112','D113','D114','D116','D138','D139','D140','D142','D117','D118','D119','D141','D104','D105','D106','D127','D131',
'D132','D135','D137','D122','D123','D201','D216','D217','D218','D219','D211','D212','D205','D206','D208','D204','D203','D301',
'D303','D307','D304','D401','D4011','D402','D4021','D403','D4031','D404','D4041','D405','D406','D4061','D407','D4071','D408','D4081','D409','D4091','D410','D4101'];
var Temp = ['ACT_TEMP_Z1', 'ACT_TEMP_Z2', 'ACT_TEMP_Z3', 'ACT_TEMP_Z4', 'ACT_TEMP_Z5', 'ACT_TEMP_Z6', 'ACT_TEMP_Z7', 'ACT_TEMP_Z8', 'ACT_TEMP_Z9', 'ACT_TEMP_Z10'
, 'ACT_TEMP_Z11', 'ACT_TEMP_Z12', 'ACT_TEMP_Z13', 'ACT_TEMP_Z14', 'ACT_TEMP_Z15', 'ACT_TEMP_Z16', 'ACT_TEMP_Z17', 'ACT_TEMP_Z18', 'ACT_TEMP_Z19', 'ACT_TEMP_Z20', 'ACT_TEMP_Z21', 'ACT_TEMP_Z22'
, 'ACT_TEMP_Z23', 'ACT_TEMP_Z24', 'ACT_TEMP_Z25', 'ACT_TEMP_Z26', 'SET_TEMP_Z1', 'SET_TEMP_Z2', 'SET_TEMP_Z3', 'SET_TEMP_Z4', 'SET_TEMP_Z5', 'SET_TEMP_Z6', 'SET_TEMP_Z7'
, 'SET_TEMP_Z8', 'SET_TEMP_Z9', 'SET_TEMP_Z10', 'SET_TEMP_Z11', 'SET_TEMP_Z12', 'SET_TEMP_Z13', 'SET_TEMP_Z14', 'SET_TEMP_Z15', 'SET_TEMP_Z16', 'SET_TEMP_Z17', 'SET_TEMP_Z18'
, 'SET_TEMP_Z19', 'SET_TEMP_Z20', 'SET_TEMP_Z21', 'SET_TEMP_Z22', 'SET_TEMP_Z23', 'SET_TEMP_Z24', 'SET_TEMP_Z25', 'SET_TEMP_Z26'];
var bool = true;
var count = 0;

function getIndex(Name) {
	if(Name != undefined)
	{
		for (var i = 0; i < SingleLoad.length; i++) {
			if (SingleLoad[i].indexOf(Name) + 1) {
				var arr = SingleLoad[i].split(' ');
				return (parseInt(arr[1]) * 256 + parseInt(arr[2]) * 32 + parseInt(arr[3]));
			}
		}
		alert("SingleLoad ERROR -> " + Name);
	}
}

function initControl() {
        if (state[0] > 0)
            $("#ButtonFire").stop().fadeTo(1000, 0).fadeTo(100, 1);
        if (state[1] > 0)
            $("#ButtonLock").stop().fadeTo(1000, 0).fadeTo(100, 1);
        if (state[2] > 0)
            $("#ButtonWater").stop().fadeTo(1000, 0).fadeTo(100, 1);

        if (bool == true) {
            count = 0;

            for (var i = 0; i < SwitchLoads.length -1; i++)
            {
				//if(getIndex($("#" + SwitchLoads[i]).attr('title')) == 0) alert("#" + SwitchLoads[i]);
                state[getIndex($("#" + SwitchLoads[i]).attr('title'))] > 0 ? $("img", $("#" + SwitchLoads[i])).prop("src", "Image/LightON.png") : $("img", $("#" + SwitchLoads[i])).prop("src", "Image/LightOFF.png");
            }
            for (var i = 0; i < DimmerLoads.length -1; i++) {
                state[getIndex($("#" + DimmerLoads[i]).attr('title'))] > 0 ? $("input", $("#" + DimmerLoads[i])).val(state[getIndex($("#" + DimmerLoads[i]).attr('title'))]) : $("input", $("#" + DimmerLoads[i])).val(state[getIndex($("#" + DimmerLoads[i]).attr('title'))]);
            }
			for (var i = 0; i < Temp.length -1; i++) {
                $("#" + Temp[i]).html(state[getIndex($("#" + Temp[i]).attr('title'))]);
			}

            state[256] > 0 ? $("#DU0-01").prop("src", "Image/WaterIconActive.png") : $("#DU0-01").prop("src", "Image/WaterIconDeactive.png");
            state[257] > 0 ? $("#DU0-02").prop("src", "Image/WaterIconActive.png") : $("#DU0-02").prop("src", "Image/WaterIconDeactive.png");
            state[258] > 0 ? $("#DU0-03").prop("src", "Image/WaterIconActive.png") : $("#DU0-03").prop("src", "Image/WaterIconDeactive.png");
            state[259] > 0 ? $("#DU0-04").prop("src", "Image/WaterIconActive.png") : $("#DU0-04").prop("src", "Image/WaterIconDeactive.png");
            state[260] > 0 ? $("#DU1-01").prop("src", "Image/WaterIconActive.png") : $("#DU1-01").prop("src", "Image/WaterIconDeactive.png");
            state[261] > 0 ? $("#DU1-02").prop("src", "Image/WaterIconActive.png") : $("#DU1-02").prop("src", "Image/WaterIconDeactive.png");
            state[262] > 0 ? $("#DU1-03").prop("src", "Image/WaterIconActive.png") : $("#DU1-03").prop("src", "Image/WaterIconDeactive.png");
            state[263] > 0 ? $("#DU2-01").prop("src", "Image/WaterIconActive.png") : $("#DU2-01").prop("src", "Image/WaterIconDeactive.png");
            state[264] > 0 ? $("#DU2-02").prop("src", "Image/WaterIconActive.png") : $("#DU2-02").prop("src", "Image/WaterIconDeactive.png");
            state[265] > 0 ? $("#DU2-03").prop("src", "Image/WaterIconActive.png") : $("#DU2-03").prop("src", "Image/WaterIconDeactive.png");

            state[266] > 0 ? $("#DD0-01").prop("src", "Image/DDActive.png") : $("#DD0-01").prop("src", "Image/DDDeactive.png");
            state[267] > 0 ? $("#DD0-02").prop("src", "Image/DDActive.png") : $("#DD0-02").prop("src", "Image/DDDeactive.png");
            state[268] > 0 ? $("#DD0-03").prop("src", "Image/DDActive.png") : $("#DD0-03").prop("src", "Image/DDDeactive.png");
            state[269] > 0 ? $("#DD0-04").prop("src", "Image/DDActive.png") : $("#DD0-04").prop("src", "Image/DDDeactive.png");
            state[270] > 0 ? $("#DD0-05").prop("src", "Image/DDActive.png") : $("#DD0-05").prop("src", "Image/DDDeactive.png");
            state[271] > 0 ? $("#DD0-06").prop("src", "Image/DDActive.png") : $("#DD0-06").prop("src", "Image/DDDeactive.png");
            state[272] > 0 ? $("#DD0-07").prop("src", "Image/DDActive.png") : $("#DD0-07").prop("src", "Image/DDDeactive.png");
            state[273] > 0 ? $("#DD0-08").prop("src", "Image/DDActive.png") : $("#DD0-08").prop("src", "Image/DDDeactive.png");
            state[274] > 0 ? $("#DD1-01").prop("src", "Image/DDActive.png") : $("#DD1-01").prop("src", "Image/DDDeactive.png");
            state[275] > 0 ? $("#DD1-02").prop("src", "Image/DDActive.png") : $("#DD1-02").prop("src", "Image/DDDeactive.png");
            state[276] > 0 ? $("#DD1-03").prop("src", "Image/DDActive.png") : $("#DD1-03").prop("src", "Image/DDDeactive.png");
            state[277] > 0 ? $("#DD1-04").prop("src", "Image/DDActive.png") : $("#DD1-04").prop("src", "Image/DDDeactive.png");
            state[278] > 0 ? $("#DD1-05").prop("src", "Image/DDActive.png") : $("#DD1-05").prop("src", "Image/DDDeactive.png");
            state[279] > 0 ? $("#DD1-06").prop("src", "Image/DDActive.png") : $("#DD1-06").prop("src", "Image/DDDeactive.png");
            state[280] > 0 ? $("#DD1-07").prop("src", "Image/DDActive.png") : $("#DD1-07").prop("src", "Image/DDDeactive.png");
            state[281] > 0 ? $("#DD1-08").prop("src", "Image/DDActive.png") : $("#DD1-08").prop("src", "Image/DDDeactive.png");
            state[282] > 0 ? $("#DD1-09").prop("src", "Image/DDActive.png") : $("#DD1-09").prop("src", "Image/DDDeactive.png");
            state[283] > 0 ? $("#DD1-10").prop("src", "Image/DDActive.png") : $("#DD1-10").prop("src", "Image/DDDeactive.png");
            state[284] > 0 ? $("#DD2-01").prop("src", "Image/DDActive.png") : $("#DD2-01").prop("src", "Image/DDDeactive.png");
            state[285] > 0 ? $("#DD2-02").prop("src", "Image/DDActive.png") : $("#DD2-02").prop("src", "Image/DDDeactive.png");
            state[286] > 0 ? $("#DD2-03").prop("src", "Image/DDActive.png") : $("#DD2-03").prop("src", "Image/DDDeactive.png");
            state[287] > 0 ? $("#DD2-04").prop("src", "Image/DDActive.png") : $("#DD2-04").prop("src", "Image/DDDeactive.png");
            state[288] > 0 ? $("#DD2-05").prop("src", "Image/DDActive.png") : $("#DD2-05").prop("src", "Image/DDDeactive.png");
            state[289] > 0 ? $("#DD2-06").prop("src", "Image/DDActive.png") : $("#DD2-06").prop("src", "Image/DDDeactive.png");
            state[290] > 0 ? $("#DD2-07").prop("src", "Image/DDActive.png") : $("#DD2-07").prop("src", "Image/DDDeactive.png");

            state[291] > 0 ? $("#MKD0-01").prop("src", "Image/MKDActive.png") : $("#MKD0-01").prop("src", "Image/MKDDeactive.png");
            state[292] > 0 ? $("#MKD0-02").prop("src", "Image/MKDActive.png") : $("#MKD0-02").prop("src", "Image/MKDDeactive.png");
            state[293] > 0 ? $("#MKD0-03").prop("src", "Image/MKDActive.png") : $("#MKD0-03").prop("src", "Image/MKDDeactive.png");
            state[294] > 0 ? $("#MKD0-04").prop("src", "Image/MKDActive.png") : $("#MKD0-04").prop("src", "Image/MKDDeactive.png");
            state[295] > 0 ? $("#MKD0-05").prop("src", "Image/MKDActive.png") : $("#MKD0-05").prop("src", "Image/MKDDeactive.png");
            state[296] > 0 ? $("#MKD0-06").prop("src", "Image/MKDActive.png") : $("#MKD0-06").prop("src", "Image/MKDDeactive.png");
            state[297] > 0 ? $("#MKD0-07").prop("src", "Image/MKDActive.png") : $("#MKD0-07").prop("src", "Image/MKDDeactive.png");
            state[298] > 0 ? $("#MKD0-08").prop("src", "Image/MKDActive.png") : $("#MKD0-08").prop("src", "Image/MKDDeactive.png");
            state[299] > 0 ? $("#MKD0-09").prop("src", "Image/MKDActive.png") : $("#MKD0-09").prop("src", "Image/MKDDeactive.png");
            state[300] > 0 ? $("#MKD0-10").prop("src", "Image/MKDActive.png") : $("#MKD0-10").prop("src", "Image/MKDDeactive.png");
            state[301] > 0 ? $("#MKD0-11").prop("src", "Image/MKDActive.png") : $("#MKD0-11").prop("src", "Image/MKDDeactive.png");
            state[302] > 0 ? $("#MKD0-12").prop("src", "Image/MKDActive.png") : $("#MKD0-12").prop("src", "Image/MKDDeactive.png");
            state[303] > 0 ? $("#MKD0-13").prop("src", "Image/MKDActive.png") : $("#MKD0-13").prop("src", "Image/MKDDeactive.png");
            state[304] > 0 ? $("#MKD0-14").prop("src", "Image/MKDActive.png") : $("#MKD0-14").prop("src", "Image/MKDDeactive.png");
            state[305] > 0 ? $("#MKD1-01").prop("src", "Image/MKDActive.png") : $("#MKD1-01").prop("src", "Image/MKDDeactive.png");
            state[306] > 0 ? $("#MKD1-02").prop("src", "Image/MKDActive.png") : $("#MKD1-02").prop("src", "Image/MKDDeactive.png");
            state[307] > 0 ? $("#MKD1-03").prop("src", "Image/MKDActive.png") : $("#MKD1-03").prop("src", "Image/MKDDeactive.png");
            state[308] > 0 ? $("#MKD1-04").prop("src", "Image/MKDActive.png") : $("#MKD1-04").prop("src", "Image/MKDDeactive.png");
            state[309] > 0 ? $("#MKD1-05").prop("src", "Image/MKDActive.png") : $("#MKD1-05").prop("src", "Image/MKDDeactive.png");
            state[310] > 0 ? $("#MKD1-06").prop("src", "Image/MKDActive.png") : $("#MKD1-06").prop("src", "Image/MKDDeactive.png");
            state[311] > 0 ? $("#MKD1-07").prop("src", "Image/MKDActive.png") : $("#MKD1-07").prop("src", "Image/MKDDeactive.png");
            state[312] > 0 ? $("#MKD1-08").prop("src", "Image/MKDActive.png") : $("#MKD1-08").prop("src", "Image/MKDDeactive.png");
            state[313] > 0 ? $("#MKD1-09").prop("src", "Image/MKDActive.png") : $("#MKD1-09").prop("src", "Image/MKDDeactive.png");
            state[314] > 0 ? $("#MKD1-10").prop("src", "Image/MKDActive.png") : $("#MKD1-10").prop("src", "Image/MKDDeactive.png");
            state[315] > 0 ? $("#MD1-01").prop("src", "Image/MKDActive.png") : $("#MD1-01").prop("src", "Image/MKDDeactive.png");
            state[316] > 0 ? $("#MD1-02").prop("src", "Image/MKDActive.png") : $("#MD1-02").prop("src", "Image/MKDDeactive.png");
            state[317] > 0 ? $("#MD1-03").prop("src", "Image/MKDActive.png") : $("#MD1-03").prop("src", "Image/MKDDeactive.png");
            state[318] > 0 ? $("#MKD2-01").prop("src", "Image/MKDActive.png") : $("#MKD2-01").prop("src", "Image/MKDDeactive.png");
            state[319] > 0 ? $("#MKD2-02").prop("src", "Image/MKDActive.png") : $("#MKD2-02").prop("src", "Image/MKDDeactive.png");
            state[320] > 0 ? $("#MKD2-03").prop("src", "Image/MKDActive.png") : $("#MKD2-03").prop("src", "Image/MKDDeactive.png");
            state[321] > 0 ? $("#MKD2-04").prop("src", "Image/MKDActive.png") : $("#MKD2-04").prop("src", "Image/MKDDeactive.png");
            state[322] > 0 ? $("#MKD2-05").prop("src", "Image/MKDActive.png") : $("#MKD2-05").prop("src", "Image/MKDDeactive.png");
            state[323] > 0 ? $("#MKD2-06").prop("src", "Image/MKDActive.png") : $("#MKD2-06").prop("src", "Image/MKDDeactive.png");
            state[324] > 0 ? $("#MKD2-07").prop("src", "Image/MKDActive.png") : $("#MKD2-07").prop("src", "Image/MKDDeactive.png");
            state[325] > 0 ? $("#MKD2-08").prop("src", "Image/MKDActive.png") : $("#MKD2-08").prop("src", "Image/MKDDeactive.png");
            state[326] > 0 ? $("#MKD2-09").prop("src", "Image/MKDActive.png") : $("#MKD2-09").prop("src", "Image/MKDDeactive.png");
            state[327] > 0 ? $("#MKD3-01").prop("src", "Image/MKDActive.png") : $("#MKD3-01").prop("src", "Image/MKDDeactive.png");
            state[328] > 0 ? $("#MKD3-02").prop("src", "Image/MKDActive.png") : $("#MKD3-02").prop("src", "Image/MKDDeactive.png");
            state[329] > 0 ? $("#MKD3-03").prop("src", "Image/MKDActive.png") : $("#MKD3-03").prop("src", "Image/MKDDeactive.png");

            

            if (state[0] > 0) {
                $("#FP").prop("src", "Image/Error.png");
                $("#FP_State").css("color", "#FF0000");
            }
            else {
                $("#FP").prop("src", "Image/Checked.png");
                $("#FP_State").css("color", "#00FF5A");
            }
            if (state[1] > 0) {
                $("#FP_AVR").prop("src", "Image/Error.png");
                $("#FP_AVR_State").css("color", "#FF0000");
            }
            else {
                $("#FP_AVR").prop("src", "Image/Checked.png");
                $("#FP_AVR_State").css("color", "#00FF5A");
            }
        }
        else {
            if (++count > 2) bool = true;
        }
  
}

$(document).ready(function () {
	
    resizeHTML();
    document.addEventListener("touchstart", function () { }, false);
    InitDate();
    InitWeather();


    setInterval(function () { InitState() }, 1000);

    setInterval(initControl, 1200);

    $("#tempDec001").on({
        'click': function () {
            $("#SET_TEMP_Z1").html(parseInt($("#SET_TEMP_Z1").html()) - 1);
            SetTemp(001, parseInt($("#tempSet001").html()));
        }
    });
    $("#tempInc001").on({
        'click': function () {
            $("#SET_TEMP_Z1").html(parseInt($("#SET_TEMP_Z1").html()) + 1);
            SetTemp(001, parseInt($("#SET_TEMP_Z1").html()));
        }
    });

    $("#EP-150_O").on({
        'click': function () {
            EP($(this).attr('id'));
        }
    });
    $("#EP-150_C").on({
        'click': function () {
            EP($(this).attr('id'));
        }
    });
    $("#EP-150_S").on({
        'click': function () {
            EP($(this).attr('id'));
        }
    });

    $("#save").on({
        'click': function () {
            if (confirm("Вы хотите изменить сценарий ?")) {
                Master(1, prompt("Введите номер сценария!", ""), true);
            }
        }
    });
 
    for (var i = 0; i < SwitchLoads.length; i++) {
        $('img', "#" + SwitchLoads[i]).on({
            'click': function () {
                var value = 0;
                var index = getIndex($(this).parent().attr('title'));
                if (state[index] > 0) {
                    state[index] = value = 0;
                    $(this).prop("src", "Image/LightOFF.png");
			  
                }
                else {
                    state[index] = value = 100;
                    $(this).prop("src", "Image/LightON.png");
			  
                }
                Control(index, value);
            }
        });
    }

    for (var i = 0; i < DimmerLoads.length; i++) {
        $('input', '#' + DimmerLoads[i]).on({
            'input': function () {
		    var div = $(this).parent();
                var index = getIndex($(div).attr('title'));
                //$('label', $(div)).html($('input', $(div)).val());
                if ($('input', $(div)).val() > 0) {
                    $('img', $(div)).prop("src", "Image/LightON.png");
                }
                else {
                    $('img',  $(div)).prop("src", "Image/LightOFF.png");
                }
                state[index] = $('input',  $(div)).val();
                ControlDimm(index, $('input',  $(div)).val());
            }
        });
    }

    for (var i = 0; i < DimmerLoads.length; i++) {
        $('input', '#' + DimmerLoads[i]).on({
            'touchend': function () {
                var div = $(this).parent();
                var index = getIndex($(div).attr('title'));
                if ($('input', $(div)).val() > 0) {
                    $('img', $(div)).prop("src", "Image/LightON.png");
                }
                else {
                    $('img', $(div)).prop("src", "Image/LightOFF.png");
                }
                state[index] = $('input', $(div)).val();
                ControlDimm(index, $('input', $(div)).val());
            }
        });
    }


    $("#m1-1").on({
        'click': function () {
            Master(1, 1, false);
        }
    });
    $("#m1-2").on({
        'click': function () {
            Master(1, 2, false);
        }
    });
    $("#m1-3").on({
        'click': function () {
            Master(1, 3, false);
        }
    });
    $("#m1-0").on({
        'click': function () {
            Master(1, 0, false);
        }
    });

    $("#ButtonLock").on({
        'click': function () {
            HiddePage();
            MenuReset();
            $("#SecurityGeneral").trigger('click');
            $(".SecurityPage").css("display", "block");
        }
    });

    $("#ButtonWater").on({
        'click': function () {
            HiddePage();
            MenuReset();
            $("#WaterGeneral").trigger('click');
            $(".WaterPage").css("display", "block");
        }
    });

    $("#ButtonFire").on({
        'click': function () {
            HiddePage();
            MenuReset();
            $(".FirePage").css("display", "block");
        }
    });

	$("#videoSelect").on({
        'change': function () {
          var optionSelected = $("option:selected", this);
			var valueSelected = this.value;
			switch(valueSelected)
			{
				case "1": { $("#videoImage").prop('src', "http://192.168.1.52/mjpg/1/video.mjpg"); break;}
				case "2": { $("#videoImage").prop('src', "http://192.168.1.52/mjpg/2/video.mjpg"); break;}
				case "3": { $("#videoImage").prop('src', "http://192.168.1.52/mjpg/3/video.mjpg"); break;}
				case "4": { $("#videoImage").prop('src', "http://192.168.1.52/mjpg/4/video.mjpg"); break;}
			}
        }
    });
	
    $("#LightingGeneral").on({
        'click': function () {
            ResetSecondMenu();
            $(this).find('img').prop("src", "Image/SceneActive.png");
            $(this).find('label').css("color", "#00ff50");

	$(".Room").css("display", "none");
	$(".Details").css("display", "none");

	$(".Room"+roomNumber).css("display", "block");
	$(".General").css("display", "block");
            
        }
    });

    $("#LightingDetails").on({
        'click': function () {
            ResetSecondMenu();
            $(this).find('img').prop("src", "Image/DetailsActive.png");
            $(this).find('label').css("color", "#00ff50");

	$(".Room").css("display", "none");
	$(".General").css("display", "none");
	
	$(".Room"+roomNumber).css("display", "block");
	$(".Details").css("display", "block");
                    }
    });

	$("#ClimateGeneral").on({
        'click': function () {
            ResetSecondMenu();
            $(this).find('img').prop("src", "Image/TempActive.png");
            $(this).find('label').css("color", "#00ff50");

	$(".Room").css("display", "none");
	$(".Details").css("display", "none");

	$(".Room"+roomNumber).css("display", "block");
	$(".General").css("display", "block");
            
        }
    });

    $("#ClimateDetails").on({
        'click': function () {
            ResetSecondMenu();
            $(this).find('img').prop("src", "Image/HeatingRoomActive.png");
            $(this).find('label').css("color", "#00ff50");

	$(".Room").css("display", "none");
	$(".General").css("display", "none");
	
	$(".Room"+roomNumber).css("display", "block");
	$(".Details").css("display", "block");
                    }
    });
	
	$("#SystemGeneral").on({
        'click': function () {
            ResetSecondMenu();
            $(this).find('img').prop("src", "Image/CameraActive.png");
            $(this).find('label').css("color", "#00ff50");

	$(".Room").css("display", "none");
	$(".Details").css("display", "none");

	$(".Room"+roomNumber).css("display", "block");
	$(".General").css("display", "block");
            
        }
    });

    $("#SystemDetails").on({
        'click': function () {
            ResetSecondMenu();
            $(this).find('img').prop("src", "Image/HeatingRoomActive.png");
            $(this).find('label').css("color", "#00ff50");

	$(".Room").css("display", "none");
	$(".General").css("display", "none");
	
	$(".Room"+roomNumber).css("display", "block");
	$(".Details").css("display", "block");
                    }
    });
	
    $("#WaterGeneral").on({
        'click': function () {
            ResetSecondMenu();
            $(this).find('img').prop("src", "Image/WaterDUActive.png");
            $(this).find('label').css("color", "#00ff50");
            $(".General001").css("display", "block");
            $(".Details001").css("display", "none");
        }
    });

    $("#WaterDetails").on({
        'click': function () {
            ResetSecondMenu();
            $(this).find('img').prop("src", "Image/PlumbingActive.png");
            $(this).find('label').css("color", "#00ff50");
            $(".Details001").css("display", "block");
            $(".General001").css("display", "none");
        }
    });

    $("#SecurityGeneral").on({
        'click': function () {
            ResetSecondMenu();
            $(this).find('img').prop("src", "Image/SecurityIconActive.png");
            $(this).find('label').css("color", "#00ff50");
            $(".General001").css("display", "block");
            $(".Details001").css("display", "none");
            $(".Center001").css("display", "none");
        }
    });

    $("#SecurityDetails").on({
        'click': function () {
            ResetSecondMenu();
            $(this).find('img').prop("src", "Image/SecurityDetailsActive.png");
            $(this).find('label').css("color", "#00ff50");
            $(".Details001").css("display", "block");
            $(".General001").css("display", "none");
            $(".Center001").css("display", "none");
        }
    });

    $("#SecurityCenter").on({
        'click': function () {
            ResetSecondMenu();
            $(this).find('img').prop("src", "Image/SecurityCenterActive.png");
            $(this).find('label').css("color", "#00ff50");
            $(".Details001").css("display", "none");
            $(".General001").css("display", "none");
            $(".Center001").css("display", "block");
        }
    });

    $("#BlindGeneral").on({
        'click': function () {
            ResetSecondMenu();
            $(this).find('img').prop("src", "Image/CurtainsActive.png");
            $(this).find('label').css("color", "#00ff50");
            $(".General").css("display", "block");
            $(".Details").css("display", "none");
        }
    });

    $("#BlindDetails").on({
        'click': function () {
            ResetSecondMenu();
            $(this).find('img').prop("src", "Image/BlindIconActive.png");
            $(this).find('label').css("color", "#00ff50");
            $(".Details").css("display", "block");
            $(".General").css("display", "none");
        }
    });

    $("#MenuLighting").on({
        'click': function () {
            MenuReset();
            $(this).find('img').prop("src", "Image/LightActive.png");
            $(this).find('label').css("color", "#00ff50");

            HiddePage();
            $(".LightingPage").css("display", "block");
            $("#LightingGeneral").trigger('click');

        }
    });

    $("#MenuBlind").on({
        'click': function () {
            MenuReset();
            $(this).find('img').prop("src", "Image/BlindActive.png");
            $(this).find('label').css("color", "#00ff50");

            HiddePage();
            $(".BlindPage").css("display", "block");
            $("#BlindGeneral").trigger('click');
        }
    });

    $("#MenuClimate").on({
        'click': function () {
            MenuReset();
            $(this).find('img').prop("src", "Image/ClimateActive.png");
            $(this).find('label').css("color", "#00ff50");

            HiddePage();
            $(".ClimatePage").css("display", "block");
            $("#ClimateGeneral").trigger('click');
        }
    });

    $("#MenuSystem").on({
        'click': function () {
            MenuReset();
            $(this).find('img').prop("src", "Image/SecurityActive.png");
            $(this).find('label').css("color", "#00ff50");

            HiddePage();
            $(".SystemPage").css("display", "block");
            $("#SystemGeneral").trigger('click');
        }
    });

    $("#ButtonHome").on({
        'click': function () {
            MenuReset();
            HiddePage();
            $(".HomePage").css("display", "inline");
        }
    });

    $("#ButtonSettings").on({
        'click': function () {
            $(".HomePage").css("display", "none");
            $(".Page").css("display", "none");
            $(".CameraPage").css("display", "none");
            $(".SystemPage").css("display", "block");
        }
    });

    $("#ButtonRoom").on({
        'click': function () {
            if ($(".RoomPage").css("display") === "none") {
                $(".RoomPage").css("display", "block");
            }
            else {
                $(".RoomPage").css("display", "none");
            }
        }
    });

function Refresh()
{
	$(".Room").css("display", "none");
	$(".Room"+roomNumber).css("display", "block");

}

$("#floor0").on({
    'click': function () {
        if ($("#floor0Img").prop("src").indexOf("Plus.png") + 1) {
            $("#RoomsOfFloor0").css("display", "block");
            $("#floor0Img").prop("src", "Image//Minus.png");
        } else {
            $("#RoomsOfFloor0").css("display", "none");
            $("#floor0Img").prop("src", "Image//Plus.png");
        }
    }
});
$("#floor1").on({
    'click': function () {
        if ($("#floor1Img").prop("src").indexOf("Plus.png") + 1) {
            $("#RoomsOfFloor1").css("display", "block");
            $("#floor1Img").prop("src", "Image//Minus.png");
        } else {
            $("#RoomsOfFloor1").css("display", "none");
            $("#floor1Img").prop("src", "Image//Plus.png");
        }
    }
});
$("#floor2").on({
    'click': function () {
        if ($("#floor2Img").prop("src").indexOf("Plus.png") + 1) {
            $("#RoomsOfFloor2").css("display", "block");
            $("#floor2Img").prop("src", "Image//Minus.png");
        } else {
            $("#RoomsOfFloor2").css("display", "none");
            $("#floor2Img").prop("src", "Image//Plus.png");
        }
    }
});
$("#floor3").on({
    'click': function () {
        if ($("#floor3Img").prop("src").indexOf("Plus.png") + 1) {
            $("#RoomsOfFloor3").css("display", "block");
            $("#floor3Img").prop("src", "Image//Minus.png");
        } else {
            $("#RoomsOfFloor3").css("display", "none");
            $("#floor3Img").prop("src", "Image//Plus.png");
        }
    }
});

	$("#room400").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "400";
		Refresh();
        }
    });
    $("#room001").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "001";
		Refresh();
        }
    });
    $("#room002").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "002";
		Refresh();

        }
    });
    $("#room003").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "003";
		Refresh();

        }
    });
    $("#room004").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "004";
		Refresh();

        }
    });
    $("#room005").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "005";
		Refresh();

        }
    });
    $("#room006").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "006";
		Refresh();

        }
    });
    $("#room007").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "007";
		Refresh();
        }
    });
	$("#room008").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "008";
		Refresh();
        }
    });
	$("#room009").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "009";
		Refresh();
        }
    });
	$("#room010").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "010";
		Refresh();
        }
    });
	$("#room011").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "011";
		Refresh();
        }
    });
	$("#room012").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "012";
		Refresh();
        }
    });
	$("#room013").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "013";
		Refresh();
        }
    });
	$("#room101").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "101";
		Refresh();
        }
    });
	$("#room102").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "102";
		Refresh();
        }
    });
	$("#room103").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "103";
		Refresh();
        }
    });
	$("#room104").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "104";
		Refresh();
        }
    });
	$("#room105").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "105";
		Refresh();
        }
    });
	$("#room106").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "106";
		Refresh();
        }
    });
	$("#room107").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "107";
		Refresh();
        }
    });
	$("#room108").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "108";
		Refresh();
        }
    });
	$("#room109").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "109";
		Refresh();
        }
    });
	$("#room110").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "110";
		Refresh();
        }
    });
	$("#room111").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "111";
		Refresh();
        }
    });
	$("#room112").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "112";
		Refresh();
        }
    });
	$("#room113").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "113";
		Refresh();
        }
    });
	$("#room201").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "201";
		Refresh();
        }
    });
	$("#room202").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "202";
		Refresh();
        }
    });
	$("#room203").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "203";
		Refresh();
        }
    });
	$("#room204").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "204";
		Refresh();
        }
    });
	$("#room205").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "205";
		Refresh();
        }
    });
	$("#room206").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "206";
		Refresh();
        }
    });
	$("#room207").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "207";
		Refresh();
        }
    });
	$("#room208").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "208";
		Refresh();
        }
    });
	$("#room209").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "209";
		Refresh();
        }
    });
	$("#room210").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "210";
		Refresh();
        }
    });
	$("#room211").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "211";
		Refresh();
        }
    });
	$("#room301").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "301";
		Refresh();
        }
    });
	$("#room302").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "302";
		Refresh();
        }
    });
	$("#room303").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "303";
		Refresh();
        }
    });
	$("#room304").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "304";
		Refresh();
        }
    });
	$("#room305").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "305";
		Refresh();
        }
    });
	$("#room306").on({
        'click': function () {
            $(".RoomPage").css("display", "none");
            roomNumber = "306";
		Refresh();
        }
    });

});

function HiddePage() {
    $(".LightingPage").css("display", "none");
    $(".BlindPage").css("display", "none");
    $(".ClimatePage").css("display", "none");
    $(".SystemPage").css("display", "none");

    $(".SecurityPage").css("display", "none");
    $(".WaterPage").css("display", "none");
    $(".FirePage").css("display", "none");

    $(".HomePage").css("display", "none");
    $(".RoomPage").css("display", "none");

}

function HiddeFloor(){
	$(".Floor0").css("display", "none");
	$(".Floor1").css("display", "none");
	$(".Floor2").css("display", "none");
	$(".Floor3").css("display", "none");
	
	$(".Floor4").css("display", "none");
	$(".Floor5").css("display", "none");
	
	$(".Floor6").css("display", "none");
}

function MenuReset() {
    $("#MenuLighting").find('img').prop("src", "Image/LightDeactive.png");
    $("#MenuLighting").find('label').css("color", "#00FFFF");
    $("#MenuBlind").find('img').prop("src", "Image/BlindDeactive.png");
    $("#MenuBlind").find('label').css("color", "#00FFFF");
    $("#MenuClimate").find('img').prop("src", "Image/ClimateDeactive.png");
    $("#MenuClimate").find('label').css("color", "#00FFFF");
    $("#MenuSystem").find('img').prop("src", "Image/SecurityDeactive.png");
    $("#MenuSystem").find('label').css("color", "#00FFFF");
}

function ResetSecondMenu() {
    $("#LightingGeneral").find('img').prop("src", "Image/SceneDeactive.png");
    $("#LightingGeneral").find('label').css("color", "#ff6a00");
    $("#LightingDetails").find('img').prop("src", "Image/DetailsDeactive.png");
    $("#LightingDetails").find('label').css("color", "#ff6a00");

    $("#WaterGeneral").find('img').prop("src", "Image/WaterDUDeactive.png");
    $("#WaterGeneral").find('label').css("color", "#ff6a00");
    $("#WaterDetails").find('img').prop("src", "Image/PlumbingDeactive.png");
    $("#WaterDetails").find('label').css("color", "#ff6a00");
	
	$("#ClimateGeneral").find('img').prop("src", "Image/TempDeactive.png");
    $("#ClimateGeneral").find('label').css("color", "#ff6a00");
    $("#ClimateDetails").find('img').prop("src", "Image/HeatingRoomDeactive.png");
    $("#ClimateDetails").find('label').css("color", "#ff6a00");

    $("#BlindGeneral").find('img').prop("src", "Image/CurtainsDeactive.png");
    $("#BlindGeneral").find('label').css("color", "#ff6a00");
    $("#BlindDetails").find('img').prop("src", "Image/BlindIconDeactive.png");
    $("#BlindDetails").find('label').css("color", "#ff6a00");

    $("#SecurityGeneral").find('img').prop("src", "Image/SecurityIconDeactive.png");
    $("#SecurityGeneral").find('label').css("color", "#ff6a00");
    $("#SecurityDetails").find('img').prop("src", "Image/SecurityDetailsDeactive.png");
    $("#SecurityDetails").find('label').css("color", "#ff6a00");
    $("#SecurityCenter").find('img').prop("src", "Image/SecurityCenterDeactive.png");
    $("#SecurityCenter").find('label').css("color", "#ff6a00");
	
	$("#SystemGeneral").find('img').prop("src", "Image/CameraDeactive.png");
    $("#SystemGeneral").find('label').css("color", "#ff6a00");
    $("#SystemDetails").find('img').prop("src", "Image/HeatingRoomDeactive.png");
    $("#SystemDetails").find('label').css("color", "#ff6a00");
}

function InitState() {
    if(bool)
        $.getJSON("http://" + IP + ":10001?" + "callback=?");

}

function InitDate() {
    setTime();

    setInterval(function () {
        setTime();
    }, 30000);

    function setTime() {
        var d = new Date();
        var timeArr = d.toLocaleTimeString().split(':');
        var time;
        time = timeArr[0] + " : " + timeArr[1];
        $("#Time").html(time);

        $("#Date").html(d.toLocaleDateString());
    }
}

function InitWeather() {
    var Weather = new Object;
    Weather.Day = new Array(3);
    Weather.Symbol = new Array(3);
    Weather.WindDirection = new Array(3);
    Weather.WindSpeed = new Array(3);
    Weather.TemperatureDay = new Array(3);
    Weather.TemperatureNight = new Array(3);
    Weather.Pressure = new Array(3);
    Weather.Humidity = new Array(3);

    var time = 0;

    var jqxhr = $.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=Moscow,RU&mode=xml&units=metric&cnt=7")
  .success(function () { })
  .error(function () { alert("Не могу загрузить погоду. Проверьте подключение к интернету"); })
  .complete(function () {
      var xmlDoc = $.parseXML(jqxhr.responseText);
      $xml = $(xmlDoc);
      $xml.find("weatherdata").each(function () {
          $(this).find("forecast").each(function () {
              $(this).find("time").each(function () {
                  Weather.Day[time] = $(this).attr("day");

                  $(this).find("symbol").each(function () {
                      Weather.Symbol[time] = $(this).attr("var");
                  });
                  $(this).find("windDirection").each(function () {
                      Weather.WindDirection[time] = $(this).attr("name");
                  });
                  $(this).find("windSpeed").each(function () {
                      Weather.WindSpeed[time] = $(this).attr("mps");
                  });
                  $(this).find("temperature").each(function () {
                      Weather.TemperatureDay[time] = $(this).attr("day");
                      Weather.TemperatureNight[time] = $(this).attr("night");
                  });
                  $(this).find("pressure").each(function () {
                      Weather.Pressure[time] = $(this).attr("value") * 0.750;
                  });
                  $(this).find("humidity").each(function () {
                      Weather.Humidity[time] = $(this).attr("value") / 2;
                  });
                  time++;
                  if (time == 2) {
                      $("#TemperatureValue").html(Math.floor(Weather.TemperatureDay[0]));
                      $("#SpeedWindValue").html(Math.floor(Weather.WindSpeed[0]));
                      $("#HumidityValue").html(Math.floor(Weather.Humidity[0]));
                      $("#PressureValue").html(Math.floor(Weather.Pressure[0]));
                      var src = "Image/" + Weather.Symbol[0] + ".png";
                      $("#WeatherSymbol").prop("src", src);

                  }
              });
          });
      });
  });



}

function resizeHTML() {
    $("html").css('width', $(window).width());
    $("html").css('height', $(window).height());
}

function ControlDimm(stateIndex, value) {
    state[stateIndex] = value;
    bool = false;

    var str = SingleLoad[stateIndex - 32].split(' ');
    var control32 = 249 << 8;
    control32 = control32 | 8;
    control32 = control32 << 16;
    control32 = control32 | str[1];
    
    var control64 = str[2] << 8;
    control64 = control64 | str[3];
    control64 = control64 << 16;
    control64 = control64 | value;

    if (_semafor == true) {
        $.get("http://" + IP + ":10002/&control&" + control32 + "&" + control64 + "&");
        _semafor = false;
        setTimeout(function () { _semafor = true; }, 50);
    }
}

function DisplayPopUp(content) {
    show("#divPopUp");
    $("#h1PopUp").html(content);
}

function DisplayDivInPopUp(id) {
    hide("#divPopUp > div");
    show("#" + id);
}

function Control(stateIndex, value) {
    state[stateIndex] = value;
    bool = false;

    var str = SingleLoad[stateIndex - 32].split(' ');
    var control32 = 249 << 8;
    control32 = control32 | 8;
    control32 = control32 << 16;
    control32 = control32 | str[1];
    
    var control64 = str[2] << 8;
    control64 = control64 | str[3];
    control64 = control64 << 16;
    control64 = control64 | value;

    $.get("http://" + IP + ":10002/&control&" + control32 + "&" + control64 + "&");
}

function EP(name) {
    $.get("http://" + IP + ":10002/&EP&" + name + "&");
}

function SetTemp(zone, temp) {
    $.get("http://" + IP + ":10002/&setTemp&" + zone + "&" + temp + "&");
}

function Master(masterNumber, scene, save) {
    var str = Masters[masterNumber].split(' ');
    var control32 = masterNumber << 8;
    control32 = control32 | scene;
    control32 = control32 | (save?128:64);

    $.get("http://" + IP + ":10002/&masters&" + control32 + "&");
}




//========================================================PAD=======================



