import React from "react";
import "./index.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <Grid container p={4} spacing={3}>
        <Grid item xs={12} sm={12}>
          <Box>
            <Typography component="span" sx={{ color: "#f2672e" }}>
              Portfolio
            </Typography>
            <Typography variant="h1" sx={{ fontSize: "22px", fontWeight: 600 }}>
              Each Project is Unique Piece of Development
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={4}>
          <Typography
            component="span"
            sx={{ fontSize: "18px", fontWeight: 600 }}
          >
            1. Project - Eazy Vc Votechain Project
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            width={"100%"}
            src={process.env.PUBLIC_URL + "/portfolio1.png"}
            alt="eazy-vc-project"
          />
        </Grid>
        <Grid item xs={12} sm={6} display={"flex"} alignItems={"center"}>
          <Typography variant="p">
            EazyVC, a Product of Votechain Private Limited, is determined to
            build tech backed secured voting platform that can bring
            revolutionary changes in how elections happen. We enable
            organizations and establishments to experience a seamless election
            process that is accurate and trustworthy.
            <br />
            <br />
            We take the load off your shoulders by creating a tailored voting
            platform in the digital environment where people can access their
            right to vote safely with ease while we ensure flawless nitty-gritty
            of your elections, their tabulation and statistics with guaranteed
            privacy and protection.
            <br />
            <br />
            <Box>
              <Link
                target="_blank"
                to="https://eazyvc.com/"
                style={{ textDecoration: "none", color: "skyblue" }}
              >
                Eazyvc.com
              </Link>
            </Box>
          </Typography>
        </Grid>
      </Grid>

      <Grid container p={4} spacing={3}>
        <Grid item xs={12} mt={4}>
          <Typography
            component="span"
            sx={{ fontSize: "18px", fontWeight: 600 }}
          >
            2. Project - Docsutra
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} display={"flex"} alignItems={"center"}>
          <Typography variant="p">
            Scan, Share & Protect Your Documents
            <br />
            <br />
            Docsutra is the best document management platform where you can scan
            the documents, share the documents with other users with end-to-end
            data protection.
            <br />
            <br />
            <Box>
              <Link
                target="_blank"
                to="https://docsutra.com/"
                style={{ textDecoration: "none", color: "skyblue" }}
              >
                Docsutra.com
              </Link>
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} display={"flex"} alignItems={"center"}>
          <img
            width={"100%"}
            src={process.env.PUBLIC_URL + "/project2.png"}
            alt="eazy-vc-project"
          />
        </Grid>
      </Grid>
    </div>
  );
}
