import React,{useEffect,useState} from 'react'
import { Button, Stack ,HStack, Box, Text} from '@chakra-ui/react'
import {Input,Image} from '@chakra-ui/react';
import {v4} from "uuid";
 
import Menu_component from './Menu_component';
import Add from './Add';
import Work from "./Work"
let menu=["Client","Project","Status","Create","Souce"]

const Task = () => {
  let [users,setUsers] = useState([]);
  let [work,setWork] = useState([]);
  let [wrk,setWrk] = useState({
    name:""
  });
  
  let [ref,setRef]= useState(null);
  let [s,setS] = useState(false); 

  let handleclick=()=>{
    // if(ref.current!=null){
    //   let a= handlefun(wrk.name);
    //   setUsers([...users,])
    // }
    // ref.current=null;
   let ss=f();
   let b={
    id:v4(),
    iscompleted:false,
    goingon:false,
    name:"",
    user:ss,
    
   }
   setUsers([...users,b])
   
  //  let a=<Work wrk={hd(wrk)} /> 
   setWork([...work,wrk])
   let s= ref
   if(ref!=null) setRef(s+1)
   else setRef(0);
    
   
    
  }
  
  
  let handleclick1=(a)=>{
 
    setRef(a)
   
  }
  let handlered=(a)=>{
   
    let userwa = users.map((l,i)=>{
      if(a==l.id){
        l.goingon=!l.goingon
      }
      return l
    })
    setUsers(userwa);
  }
  let f = ()=>{
    return (
      <Add handlechange={handlechange} users={users} />
    )

  }

  let handlechange= (e)=>{
   
    let {name,value} = e.target;
    setWrk({...wrk,[name]:value});
    setS(true);
    
   
   
    
    
    
   
   
  }
  // let Changewa=()=>{
  //   users[ref].name=wrk.name;
  //   console.log(users[ref],"heeloo");
  // }
  let handletoggle=(a)=>{
    
   
    let userwa = users.map((l,i)=>{
      if(a==l.id){
        l.iscompleted=!l.iscompleted
      }
      return l
    })
    setUsers(userwa);
     
  }
  
  useEffect(()=>{
    // users.length!=0 ? "d" : null;
    
    setS(false);
  },[wrk])
  if(s===true){
    users[ref].name=wrk.name
  }

  return (
    <Box w='80%' p=".5rem" >
        <Stack>
          
            <HStack>
                <Text fontSize={"3xl"} fontWeight="500" >My Tasks </Text>
          <Box h="40px" mt={"10px"} ml={"13px"} borderLeft="2px solid"></Box>
                <Menu_component style='none' name={"Select Assignee"} />
                
            </HStack>
            <HStack>
              {menu.map((l)=>(
                <Menu_component key={`${l}`} name={l} users={users} />
              ))}
            </HStack>
        </Stack>

        <Stack h='500px' mt='20px' borderRadius={"10px"}   boxShadow=' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' >
          <HStack justifyContent={'space-between'} alignItems={'center'} p="0.5rem" borderRadius={"10px"}  boxShadow=' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' >
            
            <HStack  >
              <Button onClick={()=> {handleclick()}} _hover={{bg:"x"}}  bg='blue' color='white' ><i class="fa-solid fa-plus"></i> &nbsp; New Task</Button>
              <Menu_component name='Sort :Project' />
            </HStack>
            <Stack>
              <Input placeholder='Search'></Input>
            </Stack>
          </HStack>
          {users.length===0 ? (<Stack><Image w='100%' h='80px' src='https://app.tmetric.com/images/empty_table.svg' />;<h1 style={{textAlign:"center"}} >Nothing to show</h1></Stack>):(
          <HStack >
          
            <Stack w='50%' h='100%' >
              {/* <Add handlechange={handlechange} /> */}
              {/* {s==true && f()} */}
              
              {users.map((l,i)=>(
                <div key={i} onClick={()=>handleclick1(i)} >
                  {l.user}
                </div>
              ))}
              
            </Stack>
            <Stack  w='50%' h='100%' >
              {/* {handlefun()} */}
              {users.length!==0 &&<Work wrk={users[ref]} handletoggle={handletoggle} handlered={handlered} />}
              {/* {ref.current!=null&& work[ref.current]} */}
            </Stack>
          </HStack>)}
        </Stack>
    </Box>
  )
}

export default Task