import React, { useEffect, useState } from "react";
import styles from "./team.module.css";
import { Input, InputGroup, InputLeftAddon, Select,Box } from "@chakra-ui/react";
import { HiUserCircle } from "react-icons/hi";
import { SearchIcon } from "@chakra-ui/icons";
import db from "../../../db";
const Team = () => {
  const [data, setData] = useState([]);
  const handleChange = (value) => {
    if (value == "all") {
    setData(db().teamMembers);
    } else {
 
   setData([db().teamMembers[3],db().teamMembers[4],db().teamMembers[5]]);
    }
  };
  const handleInputChange = (value) => {
    setData(db().teamMembers);
   if(value!==""){
    let temp=data.filter((e)=>{
      let str=e.user;
       if(str.includes(value)){
       return e}});
     setData(temp);
   }
   
}
  useEffect(() => {
    setData(db().teamMembers);
  }, []);
  return (
    <Box w="80%" p="0.5rem">
      <div className={styles.team_container_main}>
        <div className={styles.team_all_dropdown_containter}>
          <Select
            variant="filled"
            bg="white"
            onChange={(e) => {
              handleChange(e.target.value);
            }}
            w="20%"
            fontSize="25px"
            fontWeight="500"
          >
            <option value="all">All</option>
            <option value="12345">Team Chandler</option>
            <option value="78910">Team Joey</option>
          </Select>
        </div>
        <div className={styles.team_members_detail_container}>
          <div className={styles.team_members_search_div}>
            <InputGroup>
              <InputLeftAddon children={<SearchIcon />} />
              <Input width="20%" className={styles.team_members_search_box}
                onChange={(e) => {
                  handleInputChange(e.target.value);
                }} type="text" placeholder="Search Member" />
            </InputGroup>
          </div>
          <div>
            <table className={styles.team_members_content_table}>
              <thead className={styles.team_members_table_header}>
                <tr className={styles.team_members_content_headings}>
                  <th>STATUS</th>
                  <th>USER</th>
                  <th>STARTED AT</th>
                  <th>FINISHED AT</th>
                  <th>TOTAL TIME TODAY</th>
                  <th>CURRENT TASK</th>
                </tr>
              </thead>
              <tbody className={styles.team_members_table_body}>
                {data.map((user) => (
                  <tr className={styles.team_members_table_row}>
                    {!user.status ? (
                      <td className={styles.setUserStatus}>
                        <p className={styles.setIdle}>Idle</p>
                      </td>
                    ) : (
                      <td className={styles.setUserStatus}>
                        <p className={styles.setWorking}>Working</p>
                      </td>
                    )}
                    <td className={styles.setUserRow}>
                      <HiUserCircle
                        size="35px"
                        style={{ display: "inline", paddingTop: "10px" }}
                      />
                      {user.user}
                    </td>
                    <td className={styles.setUserStartTime}>
                      {user.startedAt}
                    </td>
                    <td>{user.FinishedAt}</td>
                    <td>{user.currentTask}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Team;
