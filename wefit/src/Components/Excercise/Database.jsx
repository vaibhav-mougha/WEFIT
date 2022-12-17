import React from 'react'
import { Flex, Text, Box } from '@chakra-ui/react';
import styles from "../../Styles/Excercise.module.css";

const Database = () => {
  return (
    <Flex display={{base:"none", md:"none", lg:"flex"}} mt="20px" flexDirection="column" border="1px solid rgb(222, 226, 230)">
        <Box color="rgb(128, 95, 105)" padding="5px" borderBottom="1px solid rgb(222, 226, 230)" fontSize="18px" fontWeight={600} textAlign="left" >Exercise Database</Box>
        <Flex color="rgb(128, 95, 105)" flexDirection="column" padding="15px" className={styles.text}>
            <Flex >
                <Text >Abs</Text>
                <Text fontSize="13px">(284)</Text>
            </Flex>
            <Flex>
                <Text>Back</Text>
                <Text fontSize="13px">(138)</Text>
            </Flex>
            <Flex>
                <Text>Biceps</Text>
                <Text fontSize="13px">(116)</Text>
            </Flex>
            <Flex>
                <Text>Chest</Text>
                <Text fontSize="13px">(139)</Text>
            </Flex>
            <Flex>
                <Text>Forearm</Text>
                <Text fontSize="13px">(51)</Text>
            </Flex>
            <Flex>
                <Text>Glutes</Text>
                <Text fontSize="13px">(26)</Text>
            </Flex>
            <Flex>
                <Text>Shoulders</Text>
                <Text fontSize="13px">(207)</Text>
            </Flex>
            <Flex>
                <Text>Triceps</Text>
                <Text fontSize="13px">(109)</Text>
            </Flex>
            <Flex>
                <Text>Upper Legs</Text>
                <Text fontSize="13px">(176)</Text>
            </Flex>
            <Flex>
                <Text>Lower Legs</Text>
                <Text fontSize="13px">(43)</Text>
            </Flex>
            <Flex>
                <Text>Cardio</Text>
                <Text fontSize="13px">(19)</Text>
            </Flex>
            <Flex>
                <Text>All</Text>
                <Text fontSize="13px">(1309)</Text>
            </Flex> 
        </Flex>
    </Flex>
  )
}

export default Database