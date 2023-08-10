import React from 'react';
import MemberCard from './MemberCard';
import members from "./members";


const TeamGrid = () => {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {members.map((el)=>{return <MemberCard 
        el={el}
      />})}

    </div>
  );
};

export default TeamGrid;
