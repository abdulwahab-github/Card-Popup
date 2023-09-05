import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

import { Delete, Get, GetThePage } from "../config/ApiBaseMethods";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";
import { Box } from "@mui/material";

export default function MediaCard() {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currpage, setcurrpage] = useState(1);
  const [countpge, setcountpge] = useState(1);

  const navigate = useNavigate();
  const Getdata = (e) => {
    setcountpge(e?Number(e):1) 
      GetThePage("student/students",e?e:1).then((res)=>{
        setdata(res.data)
        setLoading(false);
        
      }).catch((err)=>{
        console.log(err)
        setLoading(false);

      })
  };
  useEffect(() => {
    Getdata();
  }, []);

  const edit = (e) => {
    // console.log(e)
    navigate("form", {
      state: e,
    });
  };
  const DeletetheStudent = (e) => {
    Delete("student", e._id)
      .then((res) => {
        const updatedData = data.filter((student) => student._id !== e._id);
        setdata(updatedData);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const GotoAnotherPage =(e)=>{
    Getdata(e)
    setcountpge(Number(e))
    // console.log(e)
  }
  return (
    <>
      <br />
      
      {loading ? (
        <Box
          sx={{
            textAlign: "center",
            marginTop: "40vh",
          }}
        >
          <Loader />
        </Box>
      ) : (
        data.map((x, i) => (
          <Card
            className="rounded shadow dark"
            sx={{
              paddingTop: "2vh",
              width: "100vh",
              maxWidth: 345,
              marginTop: "15vh",
              display: "inline-block",
              marginLeft: 20,
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="/img/student.png"
              title="green iguana"
            />
            <CardContent > 
              <Typography gutterBottom variant="h5" component="div">
                Student Name: <span className="text-muted">{x.firstName}</span>
              </Typography>
              <Typography variant="h6" color="text.dark">
                Father Name: <span className="text-muted">{x.lastName}</span>
              </Typography>
              <Typography variant="h6" color="text.dark">
                Email Address: <span className="text-muted">{x.email}</span>
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <Button
                variant="contained"
                className=" bg-success"
                size="small"
                onClick={() => edit(x, i)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                className="ms-2 bg-danger"
                size="small"
                onClick={() => DeletetheStudent(x, i)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
          )))}
      <br />
      <Box 
      sx={{
        textAlign:"center",
        marginTop:5
      }}>
      <Button variant="outlined" value="1" onClick={(e)=>GotoAnotherPage(e.target.value)}>1</Button>
      <Button variant="outlined" value="2" onClick={(e)=>GotoAnotherPage(e.target.value)}>2</Button>
      <Button variant="outlined" value="3" onClick={(e)=>GotoAnotherPage(e.target.value)}>3</Button>
      <Button variant="outlined" onClick={(e)=>Getdata(Number(countpge)+Number(1))}disabled={data == ""}>Next</Button>
      </Box>
      

    </>
  );
}
