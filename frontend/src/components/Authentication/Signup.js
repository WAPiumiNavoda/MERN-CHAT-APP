import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {

    //use status
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();

    const [picLoading, setPicLoading] = useState(false);
    const handleClick = () => setShow(!show)

    const postDetails = (pics) => {
         console.log();
    }
  
    const submitHandler = async () => {}

  return (
    <VStack spacing={'5px'} color={'black'}>
        <FormControl id='first-name' isRequired>
            <FormLabel>Name</FormLabel>
            <Input 
                    placeholder='Enter Your Name'
                    onChange={(e)=>setName(e.target.value)}
                />
        </FormControl>

        <FormControl id='first-name' isRequired>
            <FormLabel>Email</FormLabel>
            <Input 
                    type='email'
                    placeholder='Enter Your Email'
                    onChange={(e)=>setEmail(e.target.value)}
                />
        </FormControl>

        <FormControl id='password' isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input 
                    type={ show? "text": "password"}
                    placeholder='Enter Your Password'
                    onChange={(e)=>setPassword(e.target.value)}
                />

            <InputRightElement width={'4.5rem'}>
             <Button h='1.75rem' size={'sm'} onClick={handleClick}>
                {show ? "Hide" : "Show"}
             </Button>
            </InputRightElement>
            </InputGroup>
        </FormControl>

        <FormControl id='password' isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input 
                    type={ show? "text": "password"}
                    placeholder='Confirm Password'
                    onChange={(e)=>setConfirmpassword(e.target.value)}
                />

            <InputRightElement width={'4.5rem'}>
             <Button h='1.75rem' size={'sm'} onClick={handleClick}>
                {show ? "Hide" : "Show"}
             </Button>
            </InputRightElement>
            </InputGroup>
        </FormControl>

        <FormControl id="pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={picLoading}
      >
        Sign Up
      </Button>
    </VStack>
  )
}

export default Signup