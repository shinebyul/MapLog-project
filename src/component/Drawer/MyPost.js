import { useEffect, useState } from "react";
import { postData } from "../Api/PostData";
import { uniqBy, filter } from "lodash";
//this
import { mypostdata } from "../../data";//new
import { savedlocation } from "../../data";//new

function MyPost(){
    
    const[PostData,setPostData]=useState([]); //post api에서 불러온 데이터
    const[type,setType]=useState(0); //페이지 type - 전체보기, 장소별로 보기, 장소에 저장된 기록 목록, 상세 기록 내용
    const[postList,setPostList]=useState(null); //장소 리스트(장소별로 보기) 저장 
    const[postDetail,setPostDetail]=useState(null); //상세 기록 내용 저장
    const[prePage,setPrePage]=useState(0); // 목록으로 돌아갈 때 이전 목록이 어떤 목록이었는지 저장할 state



    //내기록 data import
    useEffect(()=>{
        async function fetchData(){
            const data=await postData();
            setPostData(data);
        }
        fetchData();
    },[]);

    //장소별 보기를 위해 중복값 제거한 배열
    //const viewByPlace = uniqBy(PostData,'userId'); //pre
    
    
    const [placeLists,setPlaceLists]=useState([]);
    function ViewByPlace(){
        // place_id 중복값 제거
        const placeID = uniqBy(mypostdata, 'place_id'); // mypostdata에서 place_id 중복 제거

        // savedlocation에서 place_id와 일치하는 데이터를 찾아서 placeLists에 추가
        const filteredPlaceLists = [];
        for (let i = 0; i < placeID.length; i++) {
            const currentPlaceID = placeID[i].place_id;
            const matchingLocation = savedlocation.find(location => location.place_id === currentPlaceID);
            if (matchingLocation) {
                filteredPlaceLists.push(matchingLocation);
            }
        }

        setPlaceLists(filteredPlaceLists);
        setType(3);
    }

    //장소별 보기에서 장소 클릭했을 때
    function PlaceClick(data){//data = click한 data
        //const list = filter(PostData,{userId:data.userId}) //pre
        const list = filter(mypostdata,{place_id:data}); //new
        setPostList(list);
        setPrePage(type);
        setType(1);
    }

    //기록 제목 눌렀을 때 (기록 상세 보기)
    function PostClick(data){
        setPostDetail(data);
        setPrePage(type);
        setType(2);
    }


    function MyPostView(data){
        // type=0 이면 전체보기
        if(type===0){
            return <div>
                    {/* <button style={{marginLeft:'350px', border:'none', background:'transparent', fontWeight:'bold'}} onClick={()=>ViewByPlace()}>장소별로 보기</button> onClick={()=>setType(3) */}
                    <div style={{height:'88vh'}}>
                        <ul style={{listStyle:'none'}}>
                            {console.log(PostData)}
                            {/* {PostData.map(post =>( //PostData.map(post =>(
                                <li 
                                    key={post.id} 
                                    style={{borderBottom:'solid 1px black', 
                                    width:'90%', paddingBottom:'5px'}}>
                                    <div
                                        onClick={()=>PostClick(post)} 
                                        style={{background:'transparent', 
                                        border:'none',
                                        whiteSpace:'nowrap',
                                        overflow:'hidden',
                                        textOverflow:'ellipsis'
                                        }}>{post.title}</div></li>
                            ))} */}
                        </ul> 
                    </div>
                </div>;
        }
        // type=3 이면 장소별로 보기
        else if(type===3){
            return <div>
                    <button style={{marginLeft:'390px', border:'none', background:'transparent', fontWeight:'bold'}} onClick={()=>setType(0)}>전체 보기</button>   {/* onClick={()=>setType(0) */}
                    <div style={{height:'88vh'}}> 
                        <ul style={{listStyle:'none'}}>
                            {placeLists.map(data =>( //viewByPlace.map(post =>(
                                <li 
                                    key={data.place_id} 
                                    style={{borderBottom:'solid 1px black', 
                                    width:'90%', paddingBottom:'5px'}}>
                                    <button
                                        onClick={()=>PlaceClick(data.place_id)} 
                                        style={{background:'transparent', 
                                        border:'none'}}>{data.place_name}</button></li>//border:'none'}}>{post.userId}</button></li>
                            ))}
                        </ul>        
                    </div>
                </div>;
        }
        // type =1이면 장소에 저장된 기록 목록
        else if(type===1){
            setPrePage(3);
            return <div>
                <div style={{height:'90vh'}}>
                    <ul style={{listStyle:'none'}}>
                        {postList.map((data)=>(
                            <li 
                                style={{borderBottom:'solid 1px black', 
                                width:'90%', paddingBottom:'5px'}}>
                                <button 
                                    onClick={()=>PostClick(data)}
                                    style={{background:'transparent', 
                                    border:'none'}}>{data.title}</button></li>
                        ))}
                    </ul>
                    <div style={{display:'flex', marginTop:'30px', width:'85%', marginLeft:'35px'}}>
                        <button style={{marginRight:'auto',border:'none', background:'transparent', fontWeight:'bold'}}>삭제</button>
                        <button style={{border:'none', background:'transparent', fontWeight:'bold'}} onClick={()=>setType(prePage)}>목록으로</button>
                    </div>
                </div>
            </div>
        }
        // type =2 이면 상세 기록 내용
        else{
            return <div style={{padding:'45px'}}>
                <div style={{height:'80.5vh'}}>
                    <h3>{postDetail? postDetail.title:''}</h3>
                    <p>{postDetail? postDetail.content:''}</p>{/* <p>{postDetail? postDetail.body:''}</p>*/}
                    <div style={{display:'flex', marginTop:'30px'}}>
                        <button style={{marginRight:'auto',border:'none', background:'transparent', fontWeight:'bold'}}>삭제</button>
                        <button style={{border:'none', background:'transparent', fontWeight:'bold'}} onClick={()=>setType(prePage)}>목록으로</button>
                    </div>
                </div>
            </div>
        }
    }

    

    return(
         <div style={{width:'500px', overflow:'auto', backgroundColor:'#FCF7EC'}}>
             <h2 style={{marginLeft:'200px', marginTop:'40px'}}>My Post</h2>
             <MyPostView/>
         </div>
    );
}
export default MyPost;




{
    /*
        geo뭐시기 사용 관련
        addLister 사용 관련 -> 카카오 딥 질문에 답
        스크롤만들기
        컴포넌트 넓이 높이 지정
        filter함수
    */
}



{
    /*
    
    <button onClick={()=>setViewType(!viewType)}>{viewType ? '장소별로 보기' : '전체 보기'}</button>
            <div style={{height:'87.5vh'}}> { 높이문제 해결하기!!!!!! }
            {viewType?
                (
                    <ul style={{listStyle:'none'}}>
                        {myPost.map(post =>(
                            <li 
                                key={post.id} 
                                style={{borderBottom:'solid 1px black', 
                                width:'90%', paddingBottom:'5px'}}>
                                <button 
                                    style={{background:'transparent', 
                                    border:'none'}}>{post.title}</button></li>
                        ))}
                    </ul>
                 ):(
                    <ul style={{listStyle:'none'}}>
                        {viewByPlace.map(post =>(
                            <li 
                                key={post.id} 
                                style={{borderBottom:'solid 1px black', 
                                width:'90%', paddingBottom:'5px'}}>
                                <button 
                                    style={{background:'transparent', 
                                    border:'none'}}>{post.userId}</button></li>
                        ))}
                    </ul>
                )}
        </div>
     */
}