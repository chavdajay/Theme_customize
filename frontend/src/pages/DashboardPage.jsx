import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function DashboardPage() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [users, setUsers] = useState([]);
  const [userThemes, setUserThemes] = useState({}); // userEmail: true/false (dark/light)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email) return;
    setUsers([...users, formData]);

    // default theme light (false)
    if (!userThemes[formData.email]) {
      setUserThemes({ ...userThemes, [formData.email]: false });
    }

    setFormData({ name: "", email: "" });
  };

  const toggleTheme = (email) => {
    setUserThemes({ ...userThemes, [email]: !userThemes[email] });
  };

  return (
    <div style={{ padding: 20 }}>
      <Grid container spacing={3}>
        {/* FORM SECTION */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <h2>User Form</h2>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={handleSubmit}
                  style={{ height: "100%" }}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* TABLE SECTION */}
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Name</b>
                  </TableCell>
                  <TableCell>
                    <b>Email</b>
                  </TableCell>
                  <TableCell>
                    <b>Theme</b>
                  </TableCell>
                  <TableCell>
                    <b>Action</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow
                    key={index}
                    style={{
                      background: userThemes[user.email] ? "#c02323ff" : "#fff",
                      color: userThemes[user.email] ? "#fff" : "#000",
                    }}
                  >
                    <TableCell
                      style={{
                        color: userThemes[user.email] ? "#fff" : "#000",
                      }}
                    >
                      {user.name}
                    </TableCell>
                    <TableCell
                      style={{
                        color: userThemes[user.email] ? "#fff" : "#000",
                      }}
                    >
                      {user.email}
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={userThemes[user.email] || false}
                            onChange={() => toggleTheme(user.email)}
                          />
                        }
                        label={userThemes[user.email] ? "Dark" : "Light"}
                      />
                    </TableCell>
                    <TableCell>
                      <Button size="small" variant="outlined">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}
