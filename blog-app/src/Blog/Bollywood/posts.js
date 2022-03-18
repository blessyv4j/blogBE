import React, { useState, useEffect } from "react";
import { Grid, Link } from "@mui/material";
import down from "../assets/downArrow.svg";
import axios from "axios";

function Posts() {
  const [cat, setCat] = useState("");
  const [cat2, setCat2] = useState("");
  const [des2, setdes2] = useState("");
  const fetchData = async () => {
    const data = await axios.get("http://localhost:5000/api");
    const b = data?.data[1]?.title.split(" ").slice(0, 3).join(" ");
    const c = data?.data[1]?.title.split(" ").slice(3, 6).join(" ");
    const d = data?.data[1]?.description;
    setCat(b);
    setCat2(c);
    setdes2(d);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Link href="/tech" underline="none">
      <Grid container className="container" spacing={2}>
        <Grid item xs={12} md={9} lg={9}>
          <p className="latest">Bollywood</p>
          <Grid container className="flex">
            <Grid item xs={12} md={5} lg={5}>
              <img
                src="https://www.bing.com/th?id=OIP.Sczccq5XMKE75KT_9aQr2gHaEI&w=334&h=186&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                alt="tree"
                width="320px"
                height="210px"
              ></img>
            </Grid>
            <Grid item xs={12} md={7} lg={7}>
              <p className="catch-two">
                {cat} <br />
                {cat2}
              </p>
              <p
                className="latest-desc"
                style={{ paddingBottom: "32px", paddingRight: "112px" }}
              >
                {des2}
              </p>
              <p className="travel">
                TECH<span className="aug">/ TODAY AT 11:54</span>
              </p>
            </Grid>
          </Grid>
          <hr
            style={{
              background: "#F0F0F0 0% 0% no-repeat padding-box",
              opacity: "0.5",
              margin: "32px 0px",
            }}
          />
          <Grid container className="flex">
            <Grid item xs={12} md={5} lg={5}>
              <img
                src="https://www.bing.com/th?id=OIP.Sczccq5XMKE75KT_9aQr2gHaEI&w=334&h=186&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                alt="tree"
                width="320px"
                height="210px"
              ></img>
            </Grid>
            <Grid item xs={12} md={7} lg={7}>
              <p className="catch-two">
                {cat} <br />
                {cat2}
              </p>
              <p
                className="latest-desc"
                style={{ paddingBottom: "32px", paddingRight: "112px" }}
              >
                {des2}
              </p>
              <p className="travel">
                TECH<span className="aug">/ TODAY AT 11:54</span>
              </p>
            </Grid>
          </Grid>
          <hr
            style={{
              background: "#F0F0F0 0% 0% no-repeat padding-box",
              opacity: "0.5",
              margin: "32px 0px",
            }}
          />
          <Grid container className="flex">
            <Grid item xs={12} md={5} lg={5}>
              <img
                src="https://www.bing.com/th?id=OIP.Sczccq5XMKE75KT_9aQr2gHaEI&w=334&h=186&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                alt="tree"
                width="320px"
                height="210px"
              ></img>
            </Grid>
            <Grid item xs={12} md={7} lg={7}>
              <p className="catch-two">
                {cat} <br />
                {cat2}
              </p>
              <p
                className="latest-desc"
                style={{ paddingBottom: "32px", paddingRight: "112px" }}
              >
                {des2}
              </p>
              <p className="travel">
                TECH<span className="aug">/ TODAY AT 11:54</span>
              </p>
            </Grid>
          </Grid>
          <hr
            style={{
              background: "#F0F0F0 0% 0% no-repeat padding-box",
              opacity: "0.5",
              margin: "32px 0px",
            }}
          />
          <Grid container className="flex">
            <Grid item xs={12} md={5} lg={5}>
              <img
                src="https://www.bing.com/th?id=OIP.Sczccq5XMKE75KT_9aQr2gHaEI&w=334&h=186&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                alt="tree"
                width="320px"
                height="210px"
              ></img>
            </Grid>
            <Grid item xs={12} md={7} lg={7}>
              <p className="catch-two">
                {cat} <br />
                {cat2}
              </p>
              <p
                className="latest-desc"
                style={{ paddingBottom: "32px", paddingRight: "112px" }}
              >
                {des2}
              </p>
              <p className="travel">
                TECH<span className="aug">/ TODAY AT 11:54</span>
              </p>
            </Grid>
          </Grid>
          <hr
            style={{
              background: "#F0F0F0 0% 0% no-repeat padding-box",
              opacity: "0.5",
              margin: "32px 0px",
            }}
          />
          <Grid container className="flex">
            <Grid item xs={12} md={5} lg={5}>
              <img
                src="https://www.bing.com/th?id=OIP.Sczccq5XMKE75KT_9aQr2gHaEI&w=334&h=186&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                alt="tree"
                width="320px"
                height="210px"
              ></img>
            </Grid>
            <Grid item xs={12} md={7} lg={7}>
              <p className="catch-two">
                {cat} <br />
                {cat2}
              </p>
              <p
                className="latest-desc"
                style={{ paddingBottom: "32px", paddingRight: "112px" }}
              >
                {des2}
              </p>
              <p className="travel">
                TECH<span className="aug">/ TODAY AT 11:54</span>
              </p>
            </Grid>
          </Grid>
          <hr
            style={{
              background: "#F0F0F0 0% 0% no-repeat padding-box",
              opacity: "0.5",
              margin: "32px 0px",
            }}
          />
          <Grid container className="flex">
            <Grid item xs={12} md={5} lg={5}>
              <img
                src="https://www.bing.com/th?id=OIP.Sczccq5XMKE75KT_9aQr2gHaEI&w=334&h=186&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                alt="tree"
                width="320px"
                height="210px"
              ></img>
            </Grid>
            <Grid item xs={12} md={7} lg={7}>
              <p className="catch-two">
                {cat} <br />
                {cat2}
              </p>
              <p
                className="latest-desc"
                style={{ paddingBottom: "32px", paddingRight: "112px" }}
              >
                {des2}
              </p>
              <p className="travel">
                TECH<span className="aug">/ TODAY AT 11:54</span>
              </p>
            </Grid>
          </Grid>
          <hr
            style={{
              background: "#F0F0F0 0% 0% no-repeat padding-box",
              opacity: "0.5",
              margin: "32px 0px",
            }}
          />
          <Grid container className="flex">
            <Grid item xs={12} md={5} lg={5}>
              <img
                src="https://www.bing.com/th?id=OIP.Sczccq5XMKE75KT_9aQr2gHaEI&w=334&h=186&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                alt="tree"
                width="320px"
                height="210px"
              ></img>
            </Grid>
            <Grid item xs={12} md={7} lg={7}>
              <p className="catch-two">
                {cat} <br />
                {cat2}
              </p>
              <p
                className="latest-desc"
                style={{ paddingBottom: "32px", paddingRight: "112px" }}
              >
                {des2}
              </p>
              <p className="travel">
                TECH<span className="aug">/ TODAY AT 11:54</span>
              </p>
            </Grid>
          </Grid>
          <div style={{ display: "flex", margin: "32px 0px" }}>
            <img src={down} alt="down"></img>
            <span className="view">&nbsp;&nbsp;LOAD MORE</span>
          </div>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <p className="latest">Top Posts</p>
          <img
            src="https://www.bing.com/th?id=OIP.Sczccq5XMKE75KT_9aQr2gHaEI&w=334&h=186&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            alt="tree"
            width="282"
          ></img>
          <div style={{ display: "flex", width: "282px" }}>
            <div>
              <p className="catch-two no-margin-left">
                {cat} <br />
                {cat2}
              </p>
              <p className="travel no-padding-left">
                TECH<span className="aug">/ TODAY AT 11:54</span>
              </p>
            </div>
            <p className="number">1</p>
          </div>
          <hr
            style={{
              background: "#F0F0F0 0% 0% no-repeat padding-box",
              opacity: "0.5",
            }}
          />
          <div style={{ display: "flex", width: "282px" }}>
            <img
              src="https://www.bing.com/th?id=OIP.Sczccq5XMKE75KT_9aQr2gHaEI&w=334&h=186&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              alt="tree"
              width="84px"
              height="108px"
            ></img>
            <div>
              <p
                className="catch-two"
                style={{ fontSize: "16px", marginLeft: "8px" }}
              >
                {cat} <br />
                {cat2}
              </p>
              <p
                className="travel"
                style={{ fontSize: "10px", paddingLeft: "8px" }}
              >
                TECH
                <span className="aug" style={{ fontSize: "10px" }}>
                  / TODAY AT 11:54
                </span>
              </p>
            </div>
            <p className="number">2</p>
          </div>
          <hr
            style={{
              background: "#F0F0F0 0% 0% no-repeat padding-box",
              opacity: "0.5",
            }}
          />
          <div style={{ display: "flex", width: "282px" }}>
            <img
              src="https://www.bing.com/th?id=OIP.Sczccq5XMKE75KT_9aQr2gHaEI&w=334&h=186&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              alt="tree"
              width="84px"
              height="108px"
            ></img>
            <div>
              <p
                className="catch-two"
                style={{ fontSize: "16px", marginLeft: "8px" }}
              >
                {cat} <br />
                {cat2}
              </p>
              <p
                className="travel"
                style={{ fontSize: "10px", paddingLeft: "8px" }}
              >
                TECH
                <span className="aug" style={{ fontSize: "10px" }}>
                  / TODAY AT 11:54
                </span>
              </p>
            </div>
            <p className="number">3</p>
          </div>
          <hr
            style={{
              background: "#F0F0F0 0% 0% no-repeat padding-box",
              opacity: "0.5",
            }}
          />
          <div
            style={{ display: "flex", width: "282px", marginBottom: "112px" }}
          >
            <img
              src="https://www.bing.com/th?id=OIP.Sczccq5XMKE75KT_9aQr2gHaEI&w=334&h=186&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              alt="tree"
              width="84px"
              height="108px"
            ></img>
            <div>
              <p
                className="catch-two"
                style={{ fontSize: "16px", marginLeft: "8px" }}
              >
                {cat} <br />
                {cat2}
              </p>
              <p
                className="travel"
                style={{ fontSize: "10px", paddingLeft: "8px" }}
              >
                TECH
                <span className="aug" style={{ fontSize: "10px" }}>
                  / TODAY AT 11:54
                </span>
              </p>
            </div>
            <p className="number">4</p>
          </div>
          <div className="add">Advertisement</div>
        </Grid>
      </Grid>
    </Link>
  );
}
export default Posts;
