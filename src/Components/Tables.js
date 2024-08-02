import React, { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Box, FormControl, FormHelperText, MenuItem, Select, Tab, Tabs, Typography } from "@mui/material";

import { grey } from "@mui/material/colors";
import TableParent from "./TableParent";
const rank = 12;
const PRank = "Tier 4";
const place = "Your Placement";

const data1 = [
  { Ranking: 1, Banker_Name: "Jerome Bell", Rewards_Earned: "$943.65" },
  { Ranking: 2, Banker_Name: "Marvin McKinney", Rewards_Earned: "$589.99" },
];
const data2 = [
  { Tier: "Tier1", Rewards_Range: "$1000+", Banker_Distribution: "5%" },
  { Tier: "Tier2", Rewards_Range: "$500-$1000", Banker_Distribution: "1%" },
];
const header1 = ["Ranking", "Banker_Name", "Rewards_Earned"];
const header2 = ["Tier", "Rewards_Range", "Banker_Distribution"];

const Tables = () => {
  const [selected, setSelected] = useState(0);
  const [option,setOption]=useState(0);
  //   const[option,setOption]=useState("All Promotions")
  const handleChange = (event, newValue) => {
    setSelected(newValue);
  };
  const handleOption = (event,newValue)=>{
    setOption(newValue)
  }
  //   const handleSelect=(text)=>{
  //     console.log(text)
  //   };
  return (
    <Box 
    className='table-section'
    sx={{ backgroundColor: grey[200], p: 2, width: 400 }}>
      <Typography variant="h5" sx={{ textAlign: "left" }}>
        Leader Board
      </Typography>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
        //   value={age}
          onChange={handleOption}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            All Promotions
          </MenuItem>
          <MenuItem >Option 2</MenuItem> 
        </Select>
      </FormControl>
      <Typography variant="body1" sx={{ textAlign: "left" }}>
        See how much you match up against you peers!
      </Typography>
      <Tabs
        sx={{ width: 400, p: 2 }}
        centered
        value={selected}
        onChange={handleChange}
      >
        <Tab  label="FI Ranking" />
        <Tab label="Promotion Ranking" />
      </Tabs>
      <TableParent
          rank={selected===0? rank:selected===1? PRank:rank}
          place={place}
          header= {selected===0? header1:selected===1? header2:header1}
          icon={selected===0? <ArrowUpwardIcon/>:selected===1? <ArrowDownwardIcon/>:<ArrowUpwardIcon/>}
          data={selected===0? data1:selected===1? data2:data1}
        />
    </Box>
  );
};

export default Tables;
