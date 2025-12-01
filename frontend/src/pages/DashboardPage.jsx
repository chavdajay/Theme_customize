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
import { useLang } from "../context/LanguageContext"; // lagauge

export default function DashboardPage() {
  const { t } = useLang(); // lagauge

  const [formData, setFormData] = useState({ name: "", email: "" });
  const [users, setUsers] = useState([]);
  const [userThemes, setUserThemes] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email) return;
    setUsers([...users, formData]);

    if (!userThemes[formData.email]) {
      setUserThemes({ ...userThemes, [formData.email]: false });
    }

    setFormData({ name: "", email: "" });
  };

  return (
    <div style={{ padding: 20 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            {/* // lagauge */}
            <h2>{t("user_form")}</h2>

            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                {/* // lagauge */}
                <TextField
                  fullWidth
                  label={t("name")}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={5}>
                <TextField
                  fullWidth
                  label={t("email")}
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
                  {/* // lagauge */}
                  {t("add")}
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    {/* // lagauge */}
                    <b>{t("name")}</b>
                  </TableCell>
                  <TableCell>
                    <b>{t("email")}</b>
                  </TableCell>
                  <TableCell>
                    <b>{t("theme")}</b>
                  </TableCell>
                  <TableCell>
                    <b>{t("action")}</b>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {users.map((user, i) => (
                  <TableRow
                    key={i}
                    style={{
                      background: userThemes[user.email] ? "#222" : "#fff",
                      color: userThemes[user.email] ? "#fff" : "#000",
                    }}
                  >
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>

                    <TableCell>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={userThemes[user.email] || false}
                            onChange={() =>
                              setUserThemes({
                                ...userThemes,
                                [user.email]: !userThemes[user.email],
                              })
                            }
                          />
                        }
                        label={userThemes[user.email] ? t("dark") : t("light")}
                      />
                    </TableCell>

                    <TableCell>
                      <Button size="small" variant="outlined">
                        {t("view")}
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
