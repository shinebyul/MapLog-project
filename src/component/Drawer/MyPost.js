import { useEffect, useState } from "react";
import { postData } from "../Api/PostData";
import { uniqBy, filter } from "lodash";

function MyPost(){
    
    const[PostData,setPostData]=useState([]);
    const[type,setType]=useState(0);
    const[postList,setPostList]=useState(null);
    const[postDetail,setPostDetail]=useState(null);
    const[prePage,setPrePage]=useState(0);

    //내기록 data import
    useEffect(()=>{
        async function fetchData(){
            const data=await postData();
            setPostData(data);
        }
        fetchData();
    },[]);

    //장소별 보기를 위해 중복값 제거한 배열
    const viewByPlace = uniqBy(PostData,'userId');

    function PlaceClick(data){//data = click한 data
        const list = filter(PostData,{userId:data.userId}) 
        setPostList(list);
        setPrePage(type);
        setType(1);
    }

    function PostClick(data){
        setPostDetail(data);
        setPrePage(type);
        setType(2);
    }


    function MyPostView(data){
        // type=0 이면 전체보기 or 장소별로 보기
        if(type===0){
            return <div>
                    <h5 style={{marginLeft:'45px'}}>전체 기록 목록</h5>
                    <button style={{marginLeft:'350px', border:'none', background:'transparent', fontWeight:'bold'}} onClick={()=>setType(3)}>장소별로 보기</button>
                    <div style={{height:'83.5vh'}}>
                        <ul style={{listStyle:'none'}}>
                            {PostData.map(post =>(
                                <li 
                                    key={post.id} 
                                    style={{borderBottom:'solid 1px black', 
                                    width:'90%', paddingBottom:'5px'}}>
                                    <button
                                        onClick={()=>PostClick(post)} 
                                        style={{background:'transparent', 
                                        border:'none'}}>{post.title}</button></li>
                            ))}
                        </ul> 
                    </div>
                </div>;
        }
        else if(type===3){
            return <div>
                    <h5 style={{marginLeft:'45px'}}>장소별 기록 목록</h5>
                    <button style={{marginLeft:'390px', border:'none', background:'transparent', fontWeight:'bold'}} onClick={()=>setType(0)}>전체 보기</button>
                    <div style={{height:'83.5vh'}}> 
                        <ul style={{listStyle:'none'}}>
                            {viewByPlace.map(post =>(
                                <li 
                                    key={post.id} 
                                    style={{borderBottom:'solid 1px black', 
                                    width:'90%', paddingBottom:'5px'}}>
                                    <button
                                        onClick={()=>PlaceClick(post)} 
                                        style={{background:'transparent', 
                                        border:'none'}}>{post.userId}</button></li>
                            ))}
                        </ul>        
                    </div>
                </div>;
        }
        // type =1이면 장소에 저장된 기록 목록
        else if(type===1){
            setPrePage(3);
            return <div>
                <h5 style={{marginLeft:'45px'}}>선택한 장소에 저장된 기록 목록</h5>
                <div style={{height:'83.5vh'}}>
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
                <h5>상세 기록 내용</h5>
                <div style={{height:'83.5vh'}}>
                    <h3>{postDetail? postDetail.title:''}</h3>
                    <p>{postDetail? postDetail.body:''}</p>
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
            <h2 style={{paddingLeft:'45px'}}>내 기록</h2>
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