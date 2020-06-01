import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const SuggestionFix = (props) => {
  return (
    <div style={{ position: "fixed", marginTop: "80px" }}>
      <Card
        style={{
          backgroundColor: "#fafafa",
          boder: "none",
          boxShadow: "none",
        }}
      >
        <CardContent>
          <Grid container spacing={3}>
            <Grid item>
              <Avatar></Avatar>
            </Grid>
            <Grid item>
              <Typography style={{ marginRight: "auto" }}>
                abdullahromli11
              </Typography>
              <Typography style={{ marginRight: "auto" }}>
                abdullah romli mubarrok
              </Typography>
            </Grid>
          </Grid>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell style={{ border: "none" }}>
                  Suggestion For You
                </TableCell>
                <TableCell style={{ border: "none" }}> See All</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ border: "none" }}>
                  <div style={{ display: "flex" }}>
                    <Avatar></Avatar>{" "}
                    <div>
                      {" "}
                      <span>username</span>
                      <br />
                      <span>Name</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ border: "none" }}> Follow</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
export default SuggestionFix;
