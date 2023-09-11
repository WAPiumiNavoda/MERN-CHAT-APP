import React, { useState } from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightAddon, InputRightElement, VStack } from '@chakra-ui/react'


const Login = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleClick = () => setShow(!show)

    const submitHandler = () =>{}

  return (
    <div>
          <VStack spacing={'5px'} color={'black'}>
        <FormControl id='first-name' isRequired>
            <FormLabel>Email</FormLabel>
            <Input 
                    placeholder='Enter Your Name'
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

    
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}>
        Login
      </Button>

      <Button
        variant={'solid'}
        colorScheme="red"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={()=> {
            setEmail("piumi@gmail.com");
            setPassword("12345678");
        }}>
        Get Guest User Credentials
      </Button>
    </VStack>
    </div>
  )
}

export default Login