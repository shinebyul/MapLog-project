//폴더 데이터
var folderdata=[
    {
        id : 0,
        name : '폴더1',
        place_id : [7949668, 21801734]//location
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

//폴더 데이터
var newfolderdata=[
    {
        id : 0,
        name : '폴더1',
        place_id : [7949668, 21801734, 22730592]//이태원 경리단길
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

function updateFolderData(newData) {
  folderdata = newData;
}

//저장된 모든 장소 
var savedlocation=[
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
    },
    {
        place_id : 8424960,
        place_name : '수생식물원',
        place_address : '서울 용산구 한남동 772-1',
        place_road_address : '',
        place_phone : '',
        place_x : 126.994405600326,
        place_y : 37.543524398034
    },
    {
        place_id : 15155364,
        place_name : '서해대교',
        place_address : '경기 평택시 포승읍 신영리',
        place_road_address : '',
        place_phone : '',
        place_x : 126.83267533693,
        place_y : 36.9479493146109
    },
    {
        place_id : 11081458,
        place_name : '망상해변',
        place_address : '강원특별자치도 동해시 망상동 393-100',
        place_road_address : '강원특별자치도 동해시 동해대로 6270-10',
        place_phone : '033-530-2232',
        place_x : 129.090473530107,
        place_y : 37.5933739406532
    },
    {
        place_id : 8100113,
        place_name : '천곡황금박쥐동굴',
        place_address : '강원특별자치도 동해시 천곡동 1003',
        place_road_address : '강원특별자치도 동해시 동굴로 50',
        place_phone : '033-539-3630',
        place_x : 129.1101638324846,
        place_y : 37.51734570193119
    },
    {
        place_id : 22730592,
        place_name : '경리단길',
        place_address : '서울 용산구 이태원동 210-5',
        place_road_address : '',
        place_phone : '',
        place_x : 126.991721972247,
        place_y : 37.5397580614249
    },
    ////
]

var userdata=[
    {
        name : '한별',
        id : 'qufdl8382@gmail.com',
        pw : '12345678'
    }
]


var mypostdata=[
    {
        id:0,
        date: '20210730',
        title: '제목1',
        content: '세종대학교에서',
        usermail: 'nuni1110@gmail.com',
        place_id : 7949668
    },
    {
        id:1,
        date: '20210811',
        title: '제목2 ',
        content: '수생식물원에서',
        usermail: 'nuni1110@gmail.com',
        place_id : 8424960
    },
    {
        id:2,
        date: '20220630',
        title: '제목3',
        content: '세종대학교에서 2',
        usermail: 'nuni1110@gmail.com',
        place_id : 7949668
    },
    {
        id:3,
        date: '20220711',
        title: '제목4 ',
        content: '수생식물원에서2',
        usermail: 'nuni1110@gmail.com',
        place_id : 8424960
    },
    {
        id:4,
        date: '20220811',
        title: '제목5 ',
        content: '수생식물원에서3',
        usermail: 'nuni1110@gmail.com',
        place_id : 8424960
    },
    {
        id:5,
        date: '20230211',
        title: '제목6 ',
        content: '동해 - 망상해변에서 ',
        usermail: 'nuni1110@gmail.com',
        place_id : 11081458
    },
    {
        id:6,
        date: '20230311',
        title: '제목7 ',
        content: '동해 - 박쥐동굴에서 ',
        usermail: 'nuni1110@gmail.com',
        place_id : 8100113
    },

    
]



export {folderdata, userdata, mypostdata,  savedlocation, updateFolderData, newfolderdata};
