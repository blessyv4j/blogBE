import { Paper, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import mask from "../assets/mask.png";
import reactimg from "../assets/reactimg.png";
import ss2 from "../assets/ss2.png";
import rythm from "../assets/rythm.png";
import share from "../assets/share.png";

function Start() {
  const [tit, setTit] = useState("");
  const [des3, setdes3] = useState("");
  const [title, setTitle] = useState("");
  const [title2, setTitle2] = useState("");
  const fetchData = async () => {
    const data = await axios.get("http://localhost:5000/api");
    const b = data?.data[2]?.title;
    const d = data?.data[2]?.description;
    const y = data?.data[0]?.title.split(" ").slice(0, 2).join(" ");
    const z = data?.data[0]?.title.split(" ").slice(2, 4).join(" ");
    setTitle(y);
    setTitle2(z);
    setTit(b);
    setdes3(d);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Paper className="appbar">
        <Grid container>
          <Grid item xs={6} md={9}>
            <Typography className="siren">
              <span className="title2">The</span>
              <span className="titleOne2">Siren</span>
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} className="siren2">
            <Typography className="get">GET STARTED</Typography>
          </Grid>
        </Grid>
      </Paper>
      <div style={{ backgroundColor: "#FAFAFA" }}>
        <Grid container>
          <Grid item xs={12} md={3}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "432px",
                marginLeft: "109px",
              }}
            >
              <img src={rythm} alt="rythm"></img>
              <span className="clap" style={{ marginLeft: "12px" }}>
                9.3K
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "32px",
                marginLeft: "109px",
              }}
            >
              <img src={share} alt="share"></img>
              <span className="clap" style={{ marginLeft: "18px" }}>
                Share this article
              </span>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <p className="ways">{tit}</p>
            <div style={{ display: "flex" }}>
              <img src={mask} alt="mask" height="103px" width="103px"></img>
              <p className="dmitry">
                Dmitry Nozhenko
                <br /> <span className="jan">Jan 28, 2019 · 10 min read</span>
              </p>
            </div>
            <img src={reactimg} alt="screenshot" className="ss"></img>
            <p className="anime">
              {des3}
              <br />
              <br />
              <br />
              Let’s talk about them
            </p>
            <img src={ss2} alt="screenshot2" className="ss"></img>
            <div style={{ display: "flex", marginTop: "32px" }}>
              <div className="js">React</div>
              <div className="js">Javascript</div>
              <div className="js">Animation</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "32px",
              }}
            >
              <img src={rythm} alt="rythm"></img>
              <span className="clap">9.3K claps</span>
            </div>
            <hr
              style={{
                background: "#F0F0F0 0% 0% no-repeat padding-box",
                opacity: "0.5",
                margin: "16px 0px",
              }}
            />
            <div style={{ display: "flex" }}>
              <img src={mask} alt="mask" height="103px" width="103px"></img>
              <p
                className="dmitry"
                style={{ marginTop: "12px", marginLeft: "32px" }}
              >
                <span className="clap">
                  WRITTEN BY <br />
                </span>
                Dmitry Nozhenko
                <br /> <span className="jan">Jan 28, 2019 · 10 min read</span>
              </p>
            </div>
            <hr
              style={{
                background: "#F0F0F0 0% 0% no-repeat padding-box",
                opacity: "0.5",
                margin: "16px 0px",
              }}
            />
          </Grid>
        </Grid>
        <div className="downdiv">
          <p className="more">More From The Siren</p>
          <hr
            style={{
              background: "#F0F0F0 0% 0% no-repeat padding-box",
              opacity: "0.5",
              margin: "16px 0px",
            }}
          />
          <br />
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={4}>
              <div>
                <p className="jan"> Also tagged Reactjs</p>
                <img
                  alt="landscape"
                  src="https://th.bing.com/th/id/OIP.pAcu7875Nl6e_M0tBXBzGQHaE5?pid=ImgDet&rs=1"
                  width="333"
                ></img>
                <p className="latest-title" style={{ paddingLeft: "0px" }}>
                  {title}
                  <br /> {title2}
                </p>
                <div style={{ display: "flex" }}>
                  <img src={mask} alt="mask" height="75px" width="75px"></img>
                  <p className="dmitry" style={{ marginTop: "10px" }}>
                    Dmitry Nozhenko
                    <br /> <span className="jan">Aug 10 · 4 min read</span>
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <div>
                <p className="jan">Related reads</p>
                <img
                  alt="landscape"
                  src="https://th.bing.com/th/id/OIP.pAcu7875Nl6e_M0tBXBzGQHaE5?pid=ImgDet&rs=1"
                  width="333"
                ></img>
                <p className="latest-title" style={{ paddingLeft: "0px" }}>
                  {title}
                  <br /> {title2}
                </p>
                <div style={{ display: "flex" }}>
                  <img src={mask} alt="mask" height="75px" width="75px"></img>
                  <p className="dmitry" style={{ marginTop: "10px" }}>
                    Dmitry Nozhenko
                    <br /> <span className="jan">Aug 10 · 4 min read</span>
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <div>
                <p className="jan"> Related reads</p>
                <img
                  alt="landscape"
                  src="https://th.bing.com/th/id/OIP.pAcu7875Nl6e_M0tBXBzGQHaE5?pid=ImgDet&rs=1"
                  width="333"
                ></img>
                <p className="latest-title" style={{ paddingLeft: "0px" }}>
                  {title}
                  <br /> {title2}
                </p>
                <div style={{ display: "flex" }}>
                  <img src={mask} alt="mask" height="75px" width="75px"></img>
                  <p className="dmitry" style={{ marginTop: "10px" }}>
                    Dmitry Nozhenko
                    <br /> <span className="jan">Aug 10 · 4 min read</span>
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
export default Start;
