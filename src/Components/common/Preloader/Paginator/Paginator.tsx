import React from "react";

type PropsType ={
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number)=> void
}

let Paginator: React.FC<PropsType> = ({totalUsersCount, pageSize,currentPage,onPageChanged}) =>{
    let pagesCount = Math.ceil((totalUsersCount / pageSize)/1000);
        let pages:Array<number>=[];
        for (let i=1; i <= pagesCount; i++){
            pages.push(i);
        }
        return <div>
            {pages.map(p=>{
            return <span onClick={()=>{onPageChanged(p)}}>{p}</span>})

        }
        </div>
}
export default Paginator;