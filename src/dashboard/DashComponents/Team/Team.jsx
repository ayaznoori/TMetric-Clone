import React, { useEffect, useState } from "react";
import styles from "./team.module.css";
import { Input, InputGroup, InputLeftAddon, Select,Box } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import { SearchIcon } from "@chakra-ui/icons";

const Team = () => {
  const [data, setData] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const handleChange = (value) => {
    if (value == "all") {
      console.log(value);
      fetch("http://localhost:8080/teamMembers")
        .then((res) => res.json())
        .then((data) => setData(data));
    } else {
      console.log(value);
      fetch(`http://localhost:8080/teamMembers?teamId=${value}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  };
  const handleInputChange = (value) => {
    console.log(value);
    fetch(`http://localhost:8080/teamMembers?text=${value}`)
      .then((res) => res.json())
      .then((user) => console.log("user", user));
  };
  useEffect(() => {
    fetch("http://localhost:8080/teamMembers")
      .then((res) => res.json())
      .then((users) => setData(users));
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
