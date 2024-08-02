import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box, CardContent, Chip, Typography } from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { blue, lightBlue } from "@mui/material/colors";

const boldText = {
  fontWeight: "bold",
};
const percentage = 35;
const TableParent = (props) => {
  const { header, data, rank, place, icon } = props;
  return (
    <TableContainer sx={{ backgroundColor: "white" }}>
      <React.Fragment>
        <CardContent sx={{ backgroundColor: blue["900"] }}>
          <Box sx={{ display: "flex" }}>
            <MilitaryTechIcon
              sx={{ color: blue[50], fontSize: 60 }}
            ></MilitaryTechIcon>
            <Typography sx={{ fontSize: 30, width: 400 }} color="white">
              {rank}
            </Typography>
            <Chip
              sx={{ backgroundColor: "white" }}
              //   icon={<ArrowDownwardIcon sx={{ color: red[500] }}/>}
              icon={icon}
              label={`${percentage}%`}
              variant="outlined"
            />
          </Box>
          <Typography color="white">{place}</Typography>
        </CardContent>
      </React.Fragment>
      <Table sx={{ width: 400, p: 2 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: lightBlue[100] }}>
            {header.map((item, index) => (
              <TableCell key={index}>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {header.map((header, colIndex) => (
                <TableCell key={colIndex} sx={{ ...boldText }}>
                  {row[header]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableParent;
