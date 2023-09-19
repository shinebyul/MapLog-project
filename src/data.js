//폴더 데이터
var folderdata=[
    {
        id : 0,
        name : '폴더1',
        place_id : [7949668, 21801734]
    },
    {
        id : 1,
        name : '폴더2',
        place_id: [17884751,1451273565,1017964919]
    },
    {
        id : 2,
        name : '폴더3',
        place_id : [7949668, 634902312]
    }
]

//저장된 모든 장소 
const location=[
    {
        place_id : 7949668,
        place_name : '세종대학교',
        place_address : '서울 광진구 군자동 98',
        place_road_address : '서울 광진구 능동로 209',
        place_phone : '02-3408-3114',
        place_x : 127.07425954579499,
        place_y : 37.55060285303035

    },
    {
        place_id : 17884751,
        place_name : '스타벅스 구의역',
        place_address : '서울 광진구 구의동 246-15',
        place_road_address : '서울 광진구 아차산로 373',
        place_phone : '1522-3232',
        place_x : 127.084048976208,
        place_y : 37.5370002130577
    },
    {
        place_id : 21801734,
        place_name : '폼프리츠 세종대점',
        place_address : '서울 광진구 화양동 114-5',
        place_road_address : '서울 광진구 능동로19길 41',
        place_phone : '010-9177-9000',
        place_x : 127.071508669508,
        place_y : 37.5472474307592
    },
    {
        place_id : 1451273565,
        place_name : '오사이초밥 건대본점',
        place_address : '서울 광진구 화양동 1-16',
        place_road_address : '서울 광진구 군자로 14',
        place_phone : '02-6404-5420',
        place_x : 127.071519786932,
        place_y : 37.5446705671309
    },
    {
        place_id : 1017964919,
        place_name : '도쿄빙수 건대점',
        place_address : '서울 광진구 화양동 10-2',
        place_road_address : '서울 광진구 아차산로31길 45',
        place_phone : '02-466-2012',
        place_x : 127.070106062394,
        place_y : 37.5430424082844
    },
    {
        place_id : 634902312,
        place_name : '누데이크 성수점',
        place_address : '서울 성동구 성수동2가 309-59',
        place_road_address : '서울 성동구 성수이로7길 26',
        place_phone : '070-4128-4408',
        place_x : 127.054245261341,
        place_y : 37.5415875361892
    }
]

var userdata=[
    {
        name : '한별',
        id : 'qufdl8382@gmail.com',
        pw : '12345678'
    }
]


var memodata=[
    {
        id:0,
        postdate: '20230730',
        posttitle: '오늘 장소 일기1',
        postcontent: 'brbrbrbrbr',
        update: '00',
        userId: 'qufdl8382@gmail.com',
        _status : 'brbr', //로그인 상태
        area : '세종대학교'
    },
    {
        id:1,
        postdate: '20230728',
        posttitle: '오늘 장소 일기2',
        postcontent: 'brbrbrbrbr',
        update: '00',
        userId: 'qufdl8382@gmail.com',
        _status : 'brbr',
        area:'세종대학교'
    },
    {
        id:2,
        postdate: '20230623',
        posttitle: '오늘 장소 일기3',
        postcontent: 'brbrbrbrbr',
        update: '00',
        userId: 'qufdl8382@gmail.com',
        _status : 'brbr',
        area:'건국대학교'
    }
]

var postlocation=[
    {area : '세종대학교'}, {area: '건국대학교'}
]

export {folderdata, userdata, memodata, postlocation};
