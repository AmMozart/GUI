var IP = "192.168.1.10";
var responseObject;
var ColorPreview;
var floorNumber = 0;
var roomNumber = "001";
var systemNumber = 0;
var deviceNumber = 0;
var System = {
  Lighting: {value:0, name:"Lighting"},
  Blind: {value:1, name:"Blind"},
  Climate: {value:2, name:"Climate"}
};
var _semafor = true;
var state = [];
var SingleLoad;
var Masters;
var area = 1;
var lastCommand = 0;
var count = 0;
var SwitchLoads = [
'S115', 'S026', 'S0261', 'S006','D001', 'D002', 'D003', 'S004', 'D005',
'D104', 'S0061', 'S007', 'S008', 'D009', 'D010', 'D011', 'D012', 'D0121', 'S013', 'D014',
'D015', 'D016', 'S017', 'D018', 'D019', 'S020', 'D021', 'D022', 'D023', 'D024', 'S025',
'S027', 'D028','SL01','SL02','SL03','D1011','S102','D1051','D107','D109','D110','D111',
'D112','D113','D114','D116','D138','D139','D140','D142','S143','D117','D118','S120','S121',
'S144','D119','D141','D105','D106','S126','S1261','S128','D127','S1311','S134','D131',
'D132','S130','S1301','S136','S1351','S124','S1241','D135', 'D125', 'D137', 'D1013', 'S1012',
'S1231','S124','S1241','D122','D123','D201','S224','S220','S221','D216','D217','D218','D219',
'S222','S2221','S223','S214','D211','D212','S202','S207','S2071','D205','D206','D208','S209',
'S2091','D204','D203','D301','S3011','D302', 'D303','S3031','S306','D307','S305','S3051','D304',
'S308','S3081','D4101'];
var DimmerLoads = [
'D001', 'D002', 'D003', 'D005', 'D009', 'D010', 'D011', 'D012', 'D0121',
'D014','D015', 'D016', 'D018', 'D019', 'D021', 'D022', 'D023', 'D024', 'D028','D1011','D1051',
'D107', 'D104','D109','D110','D111','D112','D113','D114','D116','D138','D139','D140','D142',
'D117','D118','D119','D141','D105','D106','D127','D131','D132','D135','D137','D122','D123',
'D1013', 'D125', 'D201','D216','D217','D218','D219','D211','D212','D205','D206','D208','D204',
'D203','D301','D303','D307', 'D302', 'D304','D4101'];
var Temp = [
'ACT_TEMP_Z1', 'ACT_TEMP_Z2', 'ACT_TEMP_Z3', 'ACT_TEMP_Z4', 'ACT_TEMP_Z5', 'ACT_TEMP_Z6',
'ACT_TEMP_Z7', 'ACT_TEMP_Z8', 'ACT_TEMP_Z9', 'ACT_TEMP_Z10', 'ACT_TEMP_Z11', 'ACT_TEMP_Z12',
'ACT_TEMP_Z13', 'ACT_TEMP_Z14', 'ACT_TEMP_Z15', 'ACT_TEMP_Z16', 'ACT_TEMP_Z17', 'ACT_TEMP_Z18',
'ACT_TEMP_Z19', 'ACT_TEMP_Z20', 'ACT_TEMP_Z21', 'ACT_TEMP_Z22', 'ACT_TEMP_Z23', 'ACT_TEMP_Z24',
'ACT_TEMP_Z25', 'ACT_TEMP_Z26', 'SET_TEMP_Z1', 'SET_TEMP_Z2', 'SET_TEMP_Z3', 'SET_TEMP_Z4',
'SET_TEMP_Z5', 'SET_TEMP_Z6', 'SET_TEMP_Z7', 'SET_TEMP_Z8', 'SET_TEMP_Z9', 'SET_TEMP_Z10', 'SET_TEMP_Z11',
'SET_TEMP_Z12', 'SET_TEMP_Z13', 'SET_TEMP_Z14', 'SET_TEMP_Z15', 'SET_TEMP_Z16', 'SET_TEMP_Z17',
'SET_TEMP_Z18', 'SET_TEMP_Z19', 'SET_TEMP_Z20', 'SET_TEMP_Z21', 'SET_TEMP_Z22', 'SET_TEMP_Z23',
'SET_TEMP_Z24', 'SET_TEMP_Z25', 'SET_TEMP_Z26'];
var MasterArray = [
'm013-0', 'm013-1', 'm013-2', 'm013-3', 'm013-0d', 'm013-1d', 'm013-2d', 'm013-3d',
'm008-0d', 'm008-1d', 'm008-2d', 'm008-3d', 
'm001-0', 'm001-1', 'm001-2', 'm001-3', 'm001-0d', 'm001-1d', 'm001-2d', 'm001-3d',
'm006-0', 'm006-1', 'm006-2', 'm006-3', 'm006-0d', 'm006-1d', 'm006-2d', 'm006-3d',
'm010-0', 'm010-1', 'm010-2', 'm010-3', 'm010-0d', 'm010-1d', 'm010-2d', 'm010-3d',
'm012-0d', 'm012-1d', 'm012-2d', 'm012-3d', 'm012-0',
'm008-0', 'm011-0', 'm009-0', 'm004-0', 'm003-0', 'm002-0', 'm007-0',
'm005-0',
'm110-0', 'm110-1', 'm110-2', 'm110-3', 'm110-0d', 'm110-1d', 'm110-2d', 'm110-3d',
'm112-0', 'm112-1', 'm112-2', 'm112-3', 'm112-0d', 'm112-1d', 'm112-2d', 'm112-3d',
'm113-0', 'm113-1', 'm113-2', 'm113-3', 'm113-0d', 'm113-1d', 'm113-2d', 'm113-3d',
'm104-0', 'm104-1', 'm104-2', 'm104-3', 'm104-0d', 'm104-1d', 'm104-2d', 'm104-3d',
'm105-0', 'm105-1', 'm105-2', 'm105-3', 'm105-0d', 'm105-1d', 'm105-2d', 'm105-3d',
'm106-0', 'm106-1', 'm106-2', 'm106-3', 'm106-0d', 'm106-1d', 'm106-2d', 'm106-3d',
'm107-0d', 'm107-1d', 'm107-2d', 'm107-3d','m107-0',
'm109-0d', 'm109-1d', 'm109-2d', 'm109-3d', 'm109-0',
'm101-0', 'm101-0d', 'm101-1d', 'm101-2d', 'm101-3d',
'm103-0', 'm103-0d', 'm103-1d', 'm103-2d', 'm103-3d',
'm111-0','m108-0', 'm102-0',
'm203-0', 'm203-1', 'm203-2', 'm203-3', 'm203-0d', 'm203-1d', 'm203-2d', 'm203-3d',
'm202-0', 'm202-1', 'm202-2', 'm202-3', 'm202-0d', 'm202-1d', 'm202-2d', 'm202-3d',
'm204-0', 'm204-1', 'm204-2', 'm204-3', 'm204-0d', 'm204-1d', 'm204-2d', 'm204-3d',
'm209-0', 'm209-1', 'm209-2', 'm209-3', 'm209-0d', 'm209-1d', 'm209-2d', 'm209-3d',
'm205-0', 'm205-1', 'm205-2', 'm205-3', 'm205-0d', 'm205-1d', 'm205-2d', 'm205-3d',
'm208-0', 'm208-1', 'm208-2', 'm208-3', 'm208-0d', 'm208-1d', 'm208-2d', 'm208-3d',
'm201-0', 'm210-0', 'm211-0', 'm206-0', 'm207-0',
'm302-0', 'm302-1', 'm302-2', 'm302-3', 'm302-0d', 'm302-1d', 'm302-2d', 'm302-3d',
'm305-0', 'm305-1', 'm305-2', 'm305-3', 'm305-0d', 'm305-1d', 'm305-2d', 'm305-3d',
'm306-0', 'm304-0', 'm303-0', ''];

function getDataFile() {
  $.get("/data/single_load.txt", function(data) {
    SingleLoad = data.split('\n');
  });
  $.get("/data/masters.txt", function(data) {
    Masters = data.split('\n');
  });
}

function getIndex(Name) {
  if(Name != undefined)
  {
    for (var i = 0; i < SingleLoad.length; i++) {
      if (SingleLoad[i].indexOf(Name) == 0) {
        var arr = SingleLoad[i].split(' ');
        return (parseInt(arr[1]) * 256 + parseInt(arr[2]) * 32 + parseInt(arr[3]));
      }
    }
    console.error("SingleLoad ERROR: " + Name);
  }
}

function initControl() {
  if (state[0] > 0)
    $("#ButtonFire").stop().fadeTo(1000, 0).fadeTo(100, 1);
  if (state[1] > 0)
    $("#ButtonLock").stop().fadeTo(1000, 0).fadeTo(100, 1);
  if (state[2] > 0)
    $("#ButtonWater").stop().fadeTo(1000, 0).fadeTo(100, 1);
  count = 0;
  for (var i = 0; i < SwitchLoads.length -1; i++)
  {
    state[getIndex($("#" + SwitchLoads[i]).attr('title'))] > 0 ? $("img", $("#" + SwitchLoads[i])).prop("src", "Image/LightSwControl_ON.png") : $("img", $("#" + SwitchLoads[i])).prop("src", "Image/LightSwControl_OFF.png");
  }
  for (var i = 0; i < DimmerLoads.length -1; i++) {
    $(".dimmer", $("#" + DimmerLoads[i])).roundSlider("setValue", (state[getIndex($("#" + DimmerLoads[i]).attr('title'))] / 2.55));
  }
  for (var i = 0; i < Temp.length -1; i++) {
    $("#" + Temp[i]).html(state[getIndex($("#" + Temp[i]).attr('title'))]);
  }
  state[getIndex("006S")] + state[getIndex("0061S")] + state[getIndex("007S")] + state[getIndex("008S")]> 0 ? $("#m008-0").attr("src", "Image/SceneON.png") : $("#m008-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("026S")] + state[getIndex("0261S")] > 0 ? $("#m013-0").attr("src", "Image/SceneON.png") : $("#m013-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("027S")] > 0 ? $("#m012-0").attr("src", "Image/SceneON.png") : $("#m012-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("104D")] > 0 ? $("#m011-0").attr("src", "Image/SceneON.png") : $("#m011-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("020S")] > 0 ? $("#m002-0").attr("src", "Image/SceneON.png") : $("#m002-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("025S")] > 0 ? $("#m004-0").attr("src", "Image/SceneON.png") : $("#m004-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("017S")] > 0 ? $("#m003-0").attr("src", "Image/SceneON.png") : $("#m003-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("013S")] > 0 ? $("#m007-0").attr("src", "Image/SceneON.png") : $("#m007-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("009D")] > 0 ? $("#m005-0").attr("src", "Image/SceneON.png") : $("#m005-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("004S")] + state[getIndex("005D")] > 0 ? $("#m009-0").attr("src", "Image/SceneON.png") : $("#m009-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("001D")] + state[getIndex("103D")] + state[getIndex("002D")] + state[getIndex("003D")] + state[getIndex("018D")] + state[getIndex("021D")] > 0 ? $("#m001-0").attr("src", "Image/SceneON.png") : $("#m001-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("010D")] + state[getIndex("011D")] + state[getIndex("028D")] + state[getIndex("012D")] + state[getIndex("0121D")] > 0 ? $("#m006-0").attr("src", "Image/SceneON.png") : $("#m006-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("014D")] + state[getIndex("015D")] + state[getIndex("016D")] + state[getIndex("019D")] + state[getIndex("022D")] + state[getIndex("023D")] + state[getIndex("024D")] > 0 ? $("#m010-0").attr("src", "Image/SceneON.png") : $("#m010-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("1013D")] + state[getIndex("1011D")] + state[getIndex("1012S")]  > 0 ? $("#m101-0").attr("src", "Image/SceneON.png") : $("#m101-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("1051D")] + state[getIndex("102S")]  > 0 ? $("#m102-0").attr("src", "Image/SceneON.png") : $("#m102-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("109D")] + state[getIndex("108S")] + state[getIndex("107D")]  > 0 ? $("#m103-0").attr("src", "Image/SceneON.png") : $("#m103-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("111D")] + state[getIndex("138D")] + state[getIndex("139D")] + state[getIndex("140D")] + state[getIndex("110D")] + state[getIndex("112D")] + state[getIndex("113D")] + state[getIndex("114D")] + state[getIndex("142D")] + state[getIndex("116D")] + state[getIndex("115S")]  > 0 ? $("#m104-0").attr("src", "Image/SceneON.png") : $("#m104-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("117D")] + state[getIndex("118D")] + state[getIndex("143S")]  > 0 ? $("#m105-0").attr("src", "Image/SceneON.png") : $("#m105-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("141D")] + state[getIndex("144S")] + state[getIndex("120S")] + state[getIndex("119D")] + state[getIndex("121S")]  > 0 ? $("#m106-0").attr("src", "Image/SceneON.png") : $("#m106-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("104D")] + state[getIndex("105D")] + state[getIndex("106D")]  > 0 ? $("#m107-0").attr("src", "Image/SceneON.png") : $("#m107-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("125D")] > 0 ? $("#m108-0").attr("src", "Image/SceneON.png") : $("#m108-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("126S")] + state[getIndex("1261S")] + state[getIndex("128S")] + state[getIndex("127D")]  > 0 ? $("#m109-0").attr("src", "Image/SceneON.png") : $("#m109-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("132D")] + state[getIndex("134S")] + state[getIndex("131D")] + state[getIndex("1311S")]  > 0 ? $("#m110-0").attr("src", "Image/SceneON.png") : $("#m110-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("130S")] + state[getIndex("1301S")]  > 0 ? $("#m111-0").attr("src", "Image/SceneON.png") : $("#m111-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("135D")] + state[getIndex("1351S")] + state[getIndex("136S")] + state[getIndex("137D")] + state[getIndex("124S")] + state[getIndex("1241S")] > 0 ? $("#m112-0").attr("src", "Image/SceneON.png") : $("#m112-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("122D")] + state[getIndex("1231S")] + state[getIndex("123D")] + state[getIndex("124S")] + state[getIndex("1241S")] > 0 ? $("#m113-0").attr("src", "Image/SceneON.png") : $("#m113-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("201D")] > 0 ? $("#m201-0").attr("src", "Image/SceneON.png") : $("#m201-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("216D")] + state[getIndex("218D")] + state[getIndex("217D")] + state[getIndex("219D")] + state[getIndex("224S")] + state[getIndex("220S")] + state[getIndex("221S")] > 0 ? $("#m202-0").attr("src", "Image/SceneON.png") : $("#m202-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("222S")] + state[getIndex("223S")] + state[getIndex("2221S")] > 0 ? $("#m203-0").attr("src", "Image/SceneON.png") : $("#m203-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("214S")] > 0 ? $("#m204-0").attr("src", "Image/SceneON.png") : $("#m204-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("211D")] + state[getIndex("212D")] > 0 ? $("#m205-0").attr("src", "Image/SceneON.png") : $("#m205-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("2121S")] > 0 ? $("#m206-0").attr("src", "Image/SceneON.png") : $("#m206-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("202S")] > 0 ? $("#m207-0").attr("src", "Image/SceneON.png") : $("#m207-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("205D")] + state[getIndex("206D")] + state[getIndex("207S")] + state[getIndex("2071S")] + state[getIndex("208D")] > 0 ? $("#m208-0").attr("src", "Image/SceneON.png") : $("#m208-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("209S")] + state[getIndex("2091S")] > 0 ? $("#m209-0").attr("src", "Image/SceneON.png") : $("#m209-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("204D")] > 0 ? $("#m210-0").attr("src", "Image/SceneON.png") : $("#m210-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("203D")] > 0 ? $("#m211-0").attr("src", "Image/SceneON.png") : $("#m211-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("301D")] + state[getIndex("3011S")] + state[getIndex("306S")] + state[getIndex("3031S")] + state[getIndex("303D")] > 0 ? $("#m302-0").attr("src", "Image/SceneON.png") : $("#m302-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("307D")] > 0 ? $("#m303-0").attr("src", "Image/SceneON.png") : $("#m303-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("302D")] > 0 ? $("#m304-0").attr("src", "Image/SceneON.png") : $("#m304-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("304D")] + state[getIndex("305S")] + state[getIndex("3051S")]> 0 ? $("#m305-0").attr("src", "Image/SceneON.png") : $("#m305-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("3081S")] + state[getIndex("308S")] > 0 ? $("#m306-0").attr("src", "Image/SceneON.png") : $("#m306-0").attr("src", "Image/SceneOFF.png");
  state[getIndex("DU0-01")] > 0 ? $("#DU0-01").prop("src", "Image/WaterIconActive.png") : $("#DU0-01").prop("src", "Image/WaterIconDeactive.png");
  state[getIndex("DU0-02")] > 0 ? $("#DU0-02").prop("src", "Image/WaterIconActive.png") : $("#DU0-02").prop("src", "Image/WaterIconDeactive.png");
  state[getIndex("DU0-03")] > 0 ? $("#DU0-03").prop("src", "Image/WaterIconActive.png") : $("#DU0-03").prop("src", "Image/WaterIconDeactive.png");
  state[getIndex("DU0-04")] > 0 ? $("#DU0-04").prop("src", "Image/WaterIconActive.png") : $("#DU0-04").prop("src", "Image/WaterIconDeactive.png");
  state[getIndex("DU1-01")] > 0 ? $("#DU1-01").prop("src", "Image/WaterIconActive.png") : $("#DU1-01").prop("src", "Image/WaterIconDeactive.png");
  state[getIndex("DU1-02")] > 0 ? $("#DU1-02").prop("src", "Image/WaterIconActive.png") : $("#DU1-02").prop("src", "Image/WaterIconDeactive.png");
  state[getIndex("DU1-03")] > 0 ? $("#DU1-03").prop("src", "Image/WaterIconActive.png") : $("#DU1-03").prop("src", "Image/WaterIconDeactive.png");
  state[getIndex("DU2-01")] > 0 ? $("#DU2-01").prop("src", "Image/WaterIconActive.png") : $("#DU2-01").prop("src", "Image/WaterIconDeactive.png");
  state[getIndex("DU2-02")] > 0 ? $("#DU2-02").prop("src", "Image/WaterIconActive.png") : $("#DU2-02").prop("src", "Image/WaterIconDeactive.png");
  state[getIndex("DU2-03")] > 0 ? $("#DU2-03").prop("src", "Image/WaterIconActive.png") : $("#DU2-03").prop("src", "Image/WaterIconDeactive.png");
  state[getIndex("DD0-01")] > 0 ? $("#DD0-01").prop("src", "Image/DDActive.png") : $("#DD0-01").prop("src", "Image/DDDeactive.png");
  state[getIndex("DD0-02")] > 0 ? $("#DD0-02").prop("src", "Image/DDActive.png") : $("#DD0-02").prop("src", "Image/DDDeactive.png");
  state[getIndex("DD0-03")] > 0 ? $("#DD0-03").prop("src", "Image/DDActive.png") : $("#DD0-03").prop("src", "Image/DDDeactive.png");
  state[getIndex("DD0-04")] > 0 ? $("#DD0-04").prop("src", "Image/DDActive.png") : $("#DD0-04").prop("src", "Image/DDDeactive.png");
  state[getIndex("DD0-05")] > 0 ? $("#DD0-05").prop("src", "Image/DDActive.png") : $("#DD0-05").prop("src", "Image/DDDeactive.png");
  state[getIndex("DD0-06")] > 0 ? $("#DD0-06").prop("src", "Image/DDActive.png") : $("#DD0-06").prop("src", "Image/DDDeactive.png");
  state[getIndex("DD0-07")] > 0 ? $("#DD0-07").prop("src", "Image/DDActive.png") : $("#DD0-07").prop("src", "Image/DDDeactive.png");
  state[getIndex("DD0-08")] > 0 ? $("#DD0-08").prop("src", "Image/DDActive.png") : $("#DD0-08").prop("src", "Image/DDDeactive.png");
  state[getIndex("DD1-01")] > 0 ? $("#DD1-01").prop("src", "Image/DDActive.png") : $("#DD1-01").prop("src", "Image/DDDeactive.png");
  state[getIndex("DD1-02")] > 0 ? $("#DD1-02").prop("src", "Image/DDActive.png") : $("#DD1-02").prop("src", "Image/DDDeactive.png");
  state[getIndex("DD1-03")] > 0 ? $("#DD1-03").prop("src", "Image/DDActive.png") : $("#DD1-03").prop("src", "Image/DDDeactive.png");
  state[getIndex("DD1-04")] > 0 ? $("#DD1-04").prop("src", "Image/DDActive.png") : $("#DD1-04").prop("src", "Image/DDDeactive.png");
  state[getIndex("DD1-05")] > 0 ? $("#DD1-05").prop("src", "Image/DDActive.png") : $("#DD1-05").prop("src", "Image/DDDeactive.png");
  state[getIndex("DD1-06")] > 0 ? $("#DD1-06").prop("src", "Image/DDActive.png") : $("#DD1-06").prop("src", "Image/DDDeactive.png");
  state[getIndex("DD1-07")] > 0 ? $("#DD1-07").prop("src", "Image/DDActive.png") : $("#DD1-07").prop("src", "Image/DDDeactive.png");
  state[getIndex("DD1-08")] > 0 ? $("#DD1-08").prop("src", "Image/DDActive.png") : $("#DD1-08").prop("src", "Image/DDDeactive.png");
  state[getIndex("DD1-09")] > 0 ? $("#DD1-09").prop("src", "Image/DDActive.png") : $("#DD1-09").prop("src", "Image/DDDeactive.png");
  state[getIndex("DD1-10")] > 0 ? $("#DD1-10").prop("src", "Image/DDActive.png") : $("#DD1-10").prop("src", "Image/DDDeactive.png");
  state[getIndex("DD2-01")] > 0 ? $("#DD2-01").prop("src", "Image/DDActive.png") : $("#DD2-01").prop("src", "Image/DDDeactive.png");
  state[getIndex("DD2-02")] > 0 ? $("#DD2-02").prop("src", "Image/DDActive.png") : $("#DD2-02").prop("src", "Image/DDDeactive.png");
  state[getIndex("DD2-03")] > 0 ? $("#DD2-03").prop("src", "Image/DDActive.png") : $("#DD2-03").prop("src", "Image/DDDeactive.png");
  state[getIndex("DD2-04")] > 0 ? $("#DD2-04").prop("src", "Image/DDActive.png") : $("#DD2-04").prop("src", "Image/DDDeactive.png");
  state[getIndex("DD2-05")] > 0 ? $("#DD2-05").prop("src", "Image/DDActive.png") : $("#DD2-05").prop("src", "Image/DDDeactive.png");
  state[getIndex("DD2-06")] > 0 ? $("#DD2-06").prop("src", "Image/DDActive.png") : $("#DD2-06").prop("src", "Image/DDDeactive.png");
  state[getIndex("DD2-07")] > 0 ? $("#DD2-07").prop("src", "Image/DDActive.png") : $("#DD2-07").prop("src", "Image/DDDeactive.png");
  state[getIndex("MKD0-01")] > 0 ? $("#MKD0-01").prop("src", "Image/MKDActive.png") : $("#MKD0-01").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD0-02")] > 0 ? $("#MKD0-02").prop("src", "Image/MKDActive.png") : $("#MKD0-02").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD0-03")] > 0 ? $("#MKD0-03").prop("src", "Image/MKDActive.png") : $("#MKD0-03").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD0-04")] > 0 ? $("#MKD0-04").prop("src", "Image/MKDActive.png") : $("#MKD0-04").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD0-05")] > 0 ? $("#MKD0-05").prop("src", "Image/MKDActive.png") : $("#MKD0-05").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD0-06")] > 0 ? $("#MKD0-06").prop("src", "Image/MKDActive.png") : $("#MKD0-06").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD0-07")] > 0 ? $("#MKD0-07").prop("src", "Image/MKDActive.png") : $("#MKD0-07").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD0-08")] > 0 ? $("#MKD0-08").prop("src", "Image/MKDActive.png") : $("#MKD0-08").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD0-09")] > 0 ? $("#MKD0-09").prop("src", "Image/MKDActive.png") : $("#MKD0-09").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD0-10")] > 0 ? $("#MKD0-10").prop("src", "Image/MKDActive.png") : $("#MKD0-10").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD0-11")] > 0 ? $("#MKD0-11").prop("src", "Image/MKDActive.png") : $("#MKD0-11").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD0-12")] > 0 ? $("#MKD0-12").prop("src", "Image/MKDActive.png") : $("#MKD0-12").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD0-13")] > 0 ? $("#MKD0-13").prop("src", "Image/MKDActive.png") : $("#MKD0-13").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD0-14")] > 0 ? $("#MKD0-14").prop("src", "Image/MKDActive.png") : $("#MKD0-14").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD1-01")] > 0 ? $("#MKD1-01").prop("src", "Image/MKDActive.png") : $("#MKD1-01").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD1-02")] > 0 ? $("#MKD1-02").prop("src", "Image/MKDActive.png") : $("#MKD1-02").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD1-03")] > 0 ? $("#MKD1-03").prop("src", "Image/MKDActive.png") : $("#MKD1-03").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD1-04")] > 0 ? $("#MKD1-04").prop("src", "Image/MKDActive.png") : $("#MKD1-04").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD1-05")] > 0 ? $("#MKD1-05").prop("src", "Image/MKDActive.png") : $("#MKD1-05").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD1-06")] > 0 ? $("#MKD1-06").prop("src", "Image/MKDActive.png") : $("#MKD1-06").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD1-07")] > 0 ? $("#MKD1-07").prop("src", "Image/MKDActive.png") : $("#MKD1-07").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD1-08")] > 0 ? $("#MKD1-08").prop("src", "Image/MKDActive.png") : $("#MKD1-08").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD1-09")] > 0 ? $("#MKD1-09").prop("src", "Image/MKDActive.png") : $("#MKD1-09").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD1-10")] > 0 ? $("#MKD1-10").prop("src", "Image/MKDActive.png") : $("#MKD1-10").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MD1-01")] > 0 ? $("#MD1-01").prop("src", "Image/MKDActive.png") : $("#MD1-01").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MD1-02")] > 0 ? $("#MD1-02").prop("src", "Image/MKDActive.png") : $("#MD1-02").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MD1-03")] > 0 ? $("#MD1-03").prop("src", "Image/MKDActive.png") : $("#MD1-03").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD2-01")] > 0 ? $("#MKD2-01").prop("src", "Image/MKDActive.png") : $("#MKD2-01").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD2-02")] > 0 ? $("#MKD2-02").prop("src", "Image/MKDActive.png") : $("#MKD2-02").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD2-03")] > 0 ? $("#MKD2-03").prop("src", "Image/MKDActive.png") : $("#MKD2-03").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD2-04")] > 0 ? $("#MKD2-04").prop("src", "Image/MKDActive.png") : $("#MKD2-04").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD2-05")] > 0 ? $("#MKD2-05").prop("src", "Image/MKDActive.png") : $("#MKD2-05").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD2-06")] > 0 ? $("#MKD2-06").prop("src", "Image/MKDActive.png") : $("#MKD2-06").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD2-07")] > 0 ? $("#MKD2-07").prop("src", "Image/MKDActive.png") : $("#MKD2-07").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD2-08")] > 0 ? $("#MKD2-08").prop("src", "Image/MKDActive.png") : $("#MKD2-08").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD2-09")] > 0 ? $("#MKD2-09").prop("src", "Image/MKDActive.png") : $("#MKD2-09").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD3-01")] > 0 ? $("#MKD3-01").prop("src", "Image/MKDActive.png") : $("#MKD3-01").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD3-02")] > 0 ? $("#MKD3-02").prop("src", "Image/MKDActive.png") : $("#MKD3-02").prop("src", "Image/MKDDeactive.png");
  state[getIndex("MKD3-03")] > 0 ? $("#MKD3-03").prop("src", "Image/MKDActive.png") : $("#MKD3-03").prop("src", "Image/MKDDeactive.png");
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

function drawEllipse(selector, x, y, a, b, angle) {
  var steps = $(selector).length;
  var i = 0;
  var beta = -angle * (Math.PI / 180);
  var sinbeta = Math.sin(beta);
  var cosbeta = Math.cos(beta);
  $(selector).each(function(index){
    i+= (360/steps);
    var alpha = i * (Math.PI / 180) ;
    var sinalpha = Math.sin(alpha);
    var cosalpha = Math.cos(alpha);
    var X = x + (a * cosalpha * cosbeta - b * sinalpha * sinbeta);
    var Y = y + (a * cosalpha * sinbeta + b * sinalpha * cosbeta);
    X = Math.floor(X);
    Y = Math.floor(Y);
    $(this).css('margin-top', X + 'px');
    $(this).css('margin-left', Y + 'px');
  });
}

function HiddePage() {
  $(".home-page").css("display", "none");
  $(".fire-page").css("display", "none");
  $(".camera-page").css("display", "none");
  $(".Details").css("display", "none");
  $(".color-box").css("display", "none");
  $(".turn-device-notification").css("display", "none");
}

function HiddeFloor() {
  $(".Floor0").css("display", "none");
  $(".Floor1").css("display", "none");
  $(".Floor2").css("display", "none");
  $(".Floor3").css("display", "none");
  $(".Floor4").css("display", "none");
  $(".Floor5").css("display", "none");
  $(".Floor6").css("display", "none");
}

function HiddeSystem() {
  $(".content-floor-climate").css("display", "none");
  $(".content-floor-blind").css("display", "none");
  $(".content-floor-light").css("display", "none");
  $(".content-floor-water").css("display", "none");
  $(".content-floor-security").css("display", "none");
}

function changeIcon() {
  if(isPhone()){
    $("#ButtonFloor").css("display", "inline");
    $("#ButtonArea").css("display", "none");
  }
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

function InitDate() {
  setTime();
  setInterval(function () {
    setTime();
  }, 30000);
}

function setTime() {
  var d = new Date();
  var timeArr = d.toLocaleTimeString().split(':');
  var time;
  time = timeArr[0] + " : " + timeArr[1];
  $("#Time").html(time);
  $("#Date").html(d.toLocaleDateString());
}

function InitWeather() {
  var Weather = new Object;
  Weather.Day = new Array(7);
  Weather.Symbol = new Array(7);
  Weather.WindDirection = new Array(7);
  Weather.WindSpeed = new Array(7);
  Weather.TemperatureDay = new Array(7);
  Weather.TemperatureNight = new Array(7);
  Weather.Pressure = new Array(7);
  Weather.Humidity = new Array(7);
  var time = 0;
  var jqxhr = $.get("http://api.openweathermap.org/data/2.5/forecast/daily?id=524901&mode=xml&units=metric&cnt=7&APPID=ac990bb7a04b7da7f7cd8dc1ba15f866")
  .success(function () { })
  .error(function () { console.log("Проблеммы с загрузкой погоды");})
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

function isPhone() {
  if(window.orientation === 90 || window.orientation === -90){
    return false;
  }
  else if(window.orientation === undefined && ($(window).width() > 640)){
    return false;
  }else{
    return true;
  }
}

function resizeHTML() {
  $("html").css('width', $(window).width());
  $("html").css('height', $(window).height());
  var xCord = parseInt($(window).height() / 100 * 30);
  var yCord = parseInt($(window).width() / 100 * 40);
  var aCord = parseInt($(window).height() / 100 * 23);
  var bCord = parseInt($(window).width() / 100 * 30);
  drawEllipse(".box", xCord, yCord, aCord, bCord, 360);
}

function ControlDimm(stateIndex, value) {
  state[stateIndex] = value;
  bool = false;
  var str = SingleLoad[stateIndex - 32].split(' ');
  var control32 = 240 << 8;
  control32 = control32 | 8;
  control32 = control32 << 16;
  control32 = control32 | str[1];
  var control64 = str[2] << 8;
  control64 = control64 | str[3];
  control64 = control64 << 16;
  control64 = control64 | value;
  if (_semafor == true) {
    if(lastCommand !== control64){
      $.get("http://" + IP + ":10002/&control&" + control32 + "&" + control64 + "&");
      lastCommand = control64;
    }
    _semafor = false;
    setTimeout(function () { _semafor = true; }, 50);
  }
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
  if(lastCommand !== control64){
    $.get("http://" + IP + ":10002/&control&" + control32 + "&" + control64 + "&");
    lastCommand = control64;
  } 
}

function EP(name) {
  $.get("http://" + IP + ":10002/&EP&" + name + "&");
}

function SetTemp(zone, temp) {
  $.get("http://" + IP + ":10002/&setTemp&" + zone + "&" + temp + "&");
}

function Master(masterNumber, scene, save) {
  var control32 = masterNumber << 16;
  control32 = control32 | scene;
  control32 = control32 | (save?128:64);
  $.get("http://" + IP + ":10002/&masters&" + control32 + "&");
}

function changeColor(instance) {
  $("label", "#big-home-floor0").css("color", "#fff");
  $("label", "#big-home-floor1").css("color", "#fff");
  $("label", "#big-home-floor2").css("color", "#fff");
  $("label", "#big-home-floor3").css("color", "#fff");
  $("label", "#small-home-floor1").css("color", "#fff");
  $("label", "#small-home-floor2").css("color", "#fff");
  $("label", "#garden").css("color", "#c0c0c0");
  $("label", instance).css("color", "#0ff");
}

$(document).ready(function (){
  getDataFile();
  resizeHTML();
  window.addEventListener("resize", resizeHTML);
  document.addEventListener("touchstart", function () { }, false);
  InitDate();
  InitWeather();
  setInterval(function () { InitWeather() }, 1800000);
  try {
   window.console.log("Setting up socket");
   ws = new WebSocket("ws://" + IP + ":10001");
   ws.onmessage = function(evt) {
     window.console.log('onmessage ' + evt.data);
     state = JSON.parse(evt.data);
     initControl();
    };
   ws.onerror = function(evt) {
      window.console.log('onerror ' + evt.data);
    };
    ws.onclose = function() {
        window.console.log("socket closed");
    };
    ws.onopen = function() {
        window.console.log("connected...");
    };
  } catch(exception) {
      window.console.log('Error '+exception);
  }
  var bCanPreview = false;
  var canvas = document.getElementById('picker');
  var ctx = canvas.getContext('2d');
  var image = new Image();
  image.onload = function () {
    ctx.drawImage(image, 0, 0, image.width, image.height);
  }
  var imageSrc = 'Image/colorwheel.png';
  image.src = imageSrc;
  function getValueRGB(e){
    var canvasOffset = $(canvas).offset();
    var canvasX = Math.floor(e.pageX - canvasOffset.left);
    var canvasY = Math.floor(e.pageY - canvasOffset.top);
    var imageData = ctx.getImageData(canvasX, canvasY, 1, 1);
    var pixel = imageData.data;
    var pixelColor = "rgb("+pixel[0]+", "+pixel[1]+", "+pixel[2]+")";
    $('.preview', "#" + ColorPreview).css('backgroundColor', pixelColor);
  }
  $('#picker').mousemove(function(e){
    if (bCanPreview) {
      getValueRGB(e);
    }
  });
  $('#picker').mousedown(function(e){
    bCanPreview = true;
  }); 
  $('#picker').mouseup(function(e){
    bCanPreview = false;
    getValueRGB(e);
  });
  $('.preview').click(function(e){
    var div = $(this).parent();
    ColorPreview = $(div).attr('id');
    $(".color-box").css("display", "block");
  });
  $("#LightGeneralBtn").on({
      'click':function(){
        systemNumber = System.Lighting.value;
        $(".content").css("display", "block");
        $(".home-page").css("display", "none");
        $(".FloorPage").css("display", "block");
        $("#MenuLighting").trigger('click');
        changeIcon();
      }
  });
  $("#BlindGeneralBtn").on({
      'click':function(){
        systemNumber = System.Blind.value;
        $(".content").css("display", "block");
        $(".home-page").css("display", "none");
        $(".FloorPage").css("display", "block");
        $("#MenuBlind").trigger('click');
        changeIcon();
      }
  });
  $("#ClimateGeneralBtn").on({
      'click':function(){
        systemNumber = System.Climate.value;
        $(".content").css("display", "block");
        $(".home-page").css("display", "none");
        $(".FloorPage").css("display", "block");
        $("#MenuClimate").trigger('click');
        changeIcon();
      }
  });
  $("#SecurityGeneralBtn").on({
      'click':function(){
        $(".content").css("display", "block");
        $(".home-page").css("display", "none");
        $(".FloorPage").css("display", "block");
        $("#ButtonLock").trigger('click');
        changeIcon();
      }
  });
  $("#WaterGeneralBtn").on({
      'click':function(){
        $(".content").css("display", "block");
        $(".home-page").css("display", "none");
        $(".FloorPage").css("display", "block");
        $("#ButtonWater").trigger('click');
        changeIcon();
      }
  }); 
  $("#CameraGeneralBtn").on({
      'click':function(){
        $(".content").css("display", "none");
        $(".camera-page").css("display", "block");
      }
  });
  $("#big-home-floor0").on({
    'click':function(){
      HiddeFloor();
      $(".FloorPage").css("display", "block");
      $(".Floor0").css("display", "block");
      changeColor(this);
      isPhone() ? $(".MenuFloor").css("display", "none") : $(".MenuFloor").css("display", "block");
    }
  });
  $("#big-home-floor1").on({
    'click':function(){
      HiddeFloor();
      $(".FloorPage").css("display", "block");
      $(".Floor1").css("display", "block");
      changeColor(this);
      isPhone() ? $(".MenuFloor").css("display", "none") : $(".MenuFloor").css("display", "block");
    }
  });
  $("#big-home-floor2").on({
    'click':function(){
      HiddeFloor();
      $(".FloorPage").css("display", "block");
      $(".Floor2").css("display", "block");
      changeColor(this);
      isPhone() ? $(".MenuFloor").css("display", "none") : $(".MenuFloor").css("display", "block");
    }
  });
  $("#big-home-floor3").on({
    'click':function(){
      HiddeFloor();
      $(".FloorPage").css("display", "block");
      $(".Floor3").css("display", "block");
      changeColor(this);
      isPhone() ? $(".MenuFloor").css("display", "none") : $(".MenuFloor").css("display", "block");
    }
  });
  $("#small-home-floor1").on({
    'click':function(){
      HiddeFloor();
      $(".FloorPage").css("display", "block");
      $(".Floor4").css("display", "block");
      changeColor(this);
      isPhone() ? $(".MenuFloor").css("display", "none") : $(".MenuFloor").css("display", "block");
    }
  });
  $("#small-home-floor2").on({
    'click':function(){
      HiddeFloor();
      $(".FloorPage").css("display", "block");
      $(".Floor5").css("display", "block");
      changeColor(this);
      isPhone() ? $(".MenuFloor").css("display", "none") : $(".MenuFloor").css("display", "block");
    }
  });
  $("#garden").on({
    'click':function(){
      HiddeFloor();
      $(".FloorPage").css("display", "block");
      $(".Floor6").css("display", "block");
      changeColor(this);
      isPhone() ? $(".MenuFloor").css("display", "none") : $(".MenuFloor").css("display", "block");
    }
  });
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
      if (confirm("Âû õîòèòå èçìåíèòü ñöåíàðèé ?")) {
        Master(1, prompt("Ââåäèòå íîìåð ñöåíàðèÿ!", ""), true);
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
          $(this).prop("src", "Image/LightSwControl_OFF.png");
        }
        else {
          state[index] = value = 100;
          $(this).prop("src", "Image/LightSwControl_ON.png");
        }
        Control(index, value);
      }
    });
  }
  $(".dimmer").roundSlider({
    step: 2,
    radius: 60,
    sliderType: "min-range",
    value: null,
    startAngle: 0,
    endAngle: "+270",
    handleSize: "+26",
    width: 10,
    handleShape: "dot"
  });
  var timeoutID;
  var indexDimmer;
  for (var i = 0; i < DimmerLoads.length; i++) {
    $(".dimmer").on({
      'stop': function(){
        var div = $(this).parent();
        var index = getIndex($(div).attr('title'));
        state[index] = $('input',  $(div)).val();
        Control(index,  ($(this).roundSlider("option", "value") * 2.55));
      },
      'drag': function () {
       // clearTimeout(timeoutID);
        var div = $(this).parent();
        var index = getIndex($(div).attr('title'));
        // for (var i = 0; i < DimmerLoads.length -1; i++) {
        //     if(DimmerLoads[i] === $(div).attr('id'))
        //     {
        //         DimmerLoads[i] = "";
        //         indexDimmer = i;
        //         break;
        //     }
        // }
        // timeoutID = setTimeout(
        //     function(){
        //         DimmerLoads[indexDimmer] = $(div).attr('id');
        //         console.log($(div).attr('id'));
        //     }, 2000);
        state[index] = $('input',  $(div)).val();
        ControlDimm(index,  ($(this).roundSlider("option", "value") * 2.55));
      },
      // 'change': function () {
      // var div = $(this).parent();
      //     var index = getIndex($(div).attr('title'));
      //     state[index] = $('input',  $(div)).val();
      //     ControlDimm(index,  ($(this).roundSlider("option", "value") * 2.55));
      // }
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
  $("#cross").on({
    'click': function(){
      $(".Details").css("display", "none");
    }
  });
  $("#cross-colorpicker").on({
    'click': function(){
      $(".color-box").css("display", "none");
    }
  });
  $(".area").on({
    'click': function(){
      var roomNumberTemp = $(this).attr('class').split(' ')[1].slice(4);
      $(".Details").css("display", "block");
      switch(systemNumber){
        case System.Lighting.value:{
            $(".DetailsContent").css("display", "none");
            $("#details-lighting" + roomNumberTemp).css("display", "block");
            break;
        }
        case System.Blind.value:{
            $(".DetailsContent").css("display", "none");
            $("#details-blind" + roomNumberTemp).css("display", "block");
            break;
        }
        case System.Climate.value:{
            $(".DetailsContent").css("display", "none");
            $("#details-climate" + roomNumberTemp).css("display", "block");
            break;
        }
      }
    }
  });
  var timerSaveScene;
  for (var i = 0; i < MasterArray.length; i++){
    $('#' + MasterArray[i]).on({
      'mouseup': function (){
        lastCommand = 0;
        clearTimeout(timerSaveScene);
        var temp = $(this).attr('id').split('-');
        var roomN = parseInt(temp[0].slice(1));
        var sceneN = parseInt(temp[1]);
        if($(this).attr('src') == "Image/SceneOFF.png")
        {
          Master(roomN, 3, false); 
        }else{
          Master(roomN, sceneN, false); 
        }
      },
      'mousedown': function (){
        var temp = $(this).attr('id').split('-');
        var roomN = parseInt(temp[0].slice(1));
        var sceneN = parseInt(temp[1]);
        timerSaveScene = setTimeout(function(){
        var answer = confirm("Сохранить Сценарий?");
        if(answer)
        {
          if(sceneN !== 0){
            Master(roomN, sceneN, true); 
          }
        }
        }, 3000);
      }
    });
  }
  $("#ButtonLock").on({
    'click': function () {
      HiddePage();
      MenuReset();
      changeIcon();
      $(".content").css("display", "block");
      $(".FloorPage").css("display", "block");
      HiddeSystem();
      $(".content-floor-security").css("display", "block");
    }
  });
  $("#ButtonWater").on({
    'click': function () {
      HiddePage();
      MenuReset();
      changeIcon();
      $(".content").css("display", "block");
      $(".FloorPage").css("display", "block");
      HiddeSystem();
      $(".content-floor-water").css("display", "block");
    }
  });
  $("#ButtonFire").on({
    'click': function () {
      HiddePage();
      MenuReset();
      $(".content").css("display", "none");
      $(".fire-page").css("display", "block");
    }
  });
  $("#MenuLighting").on({
    'click': function () {
      systemNumber = System.Lighting.value;
      MenuReset();
      $(this).find('img').prop("src", "Image/LightActive.png");
      $(this).find('label').css("color", "#00ff50");
      HiddeSystem();
      $(".content-floor-light").css("display", "block");
    }
  });
  $("#MenuBlind").on({
    'click': function () {
      systemNumber = System.Blind.value;
      MenuReset();
      $(this).find('img').prop("src", "Image/BlindActive.png");
      $(this).find('label').css("color", "#00ff50");
      HiddeSystem();
      $(".content-floor-blind").css("display", "block");
    }
  });
  $("#MenuClimate").on({
    'click': function () {
      systemNumber = System.Climate.value;
      MenuReset();
      $(this).find('img').prop("src", "Image/ClimateActive.png");
      $(this).find('label').css("color", "#00ff50");
      HiddeSystem();
      $(".content-floor-climate").css("display", "block");
    }
  });
  $("#MenuSystem").on({
    'click': function () {
      MenuReset();
      $(this).find('img').prop("src", "Image/SecurityActive.png");
      $(this).find('label').css("color", "#00ff50");
    }
  });
  $("#ButtonHome").on({
    'click': function () {
      MenuReset();
      HiddePage();
      $("#ButtonFloor").css("display", "none");
      $("#ButtonArea").css("display", "inline");
      $(".content").css("display", "none");
      $(".home-page").css("display", "block");
    }
  });
  $("#ButtonSettings").on({
    'click': function () {
    }
  });
  $("#ButtonArea").on({
    'click': function () {
      switch(area){
        case 1:{
          $(this).attr("src", "Image/Area2.png");
          $("#area1").css("display", "none");
          $("#area2").css("display", "block");
          changeColor($("#small-home-floor1"));
          HiddeFloor();
          $(".Floor4").css("display", "block");
          area = 2;
          break;
        }
        case 2:{
          $(this).attr("src", "Image/Area1.png");
          $("#area2").css("display", "none");
          $("#area1").css("display", "block");
          changeColor($("#big-home-floor1"));
          HiddeFloor();
          $(".Floor1").css("display", "block");
          area = 1;
          break;
        }
        default:{
          throw new Error("No identify variable \"area\"");
        }
      }
      MenuReset();
      HiddePage();
      $(".content").css("display", "none");
    }
  });
  $("#ButtonFloor").on({
    'click': function () {
      if ($(".MenuFloor").css("display") === 'none') {
        $(".MenuFloor").css("display", "inline");
      } else {
        $(".MenuFloor").css("display", "none");
      }
    }
  });
});