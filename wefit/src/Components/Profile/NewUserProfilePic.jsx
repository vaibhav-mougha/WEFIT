import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
  
function ProfilePic() {
    const [file, setFile] = useState();
    const [flag,setFlag] = useState(false);

    function handleChange(e) {
       
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        setFlag(true);
    }


  
    return (
        <Box 
        w={{base:"5rem",lg:"13rem"}}
        bg="#B9B9C8"
        color="white"
        border="0.2rem solid #257CFF" 
         h="13rem" borderRadius="7rem" justify="center" align="center">
            
            
            <Box borderRadius="7rem"> <Image src={file} borderRadius="7rem" /></Box>
           
            <Text mt="9rem"  >PROFILE PICTURE</Text>

            {flag?true: <Box mt="3rem" color="black"><input type="file" onChange={handleChange}  /></Box>}
           
        </Box>
  
    );
}
  
export default ProfilePic;