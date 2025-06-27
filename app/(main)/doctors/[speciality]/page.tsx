import React from "react";

interface Props {
  params: {
    speciality: string;
  };
}

const SpecialityPage = async ({ params }: Props) => {
  const { speciality } =  params;

  return ( 
    <div>
      Speciality Page : {speciality}
    </div>
   );
}
 
export default SpecialityPage;