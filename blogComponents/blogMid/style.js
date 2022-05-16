import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  blog: {
    width: "100%",
    height: "auto",
    paddingTop: "100px",
    paddingBottom: "100px",
  },
  bigCont: {
    width: "100%",
    height: "auto",
  },
  gridCont: {
    width: "100%",
    height: "auto",
  },
  blogItem: {
    width: 750,
    height: 770,
    backgroundColor: (dark) => (dark ? "#222" : "rgb(245, 245, 245)"),
    position: "relative",
  },
  dateBox: {
    position: "absolute",
    top: "45px",
    left: "35px",
    display: "flex",
  },
  date: {
    padding: "5px 15px",
    backgroundColor: "#222",
    color: "white",
  },
  dateSpan: {
    color: "white",
    padding: "5px 15px",
    backgroundColor: "orange",
  },
  img: {
    width: "100%",
  },
  smCont: {
    marginTop: 30,
  },
  text: {
    lineHeight: 1.8,
  },

  /* Right Side*/
  searchBox: {
    width: "100%",
    height: 110,
    backgroundColor: (dark) => (dark ? "#222" : "rgb(245, 245, 245)"),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTop: (dark) => (dark ? "3px solid #fff" : "3px solid #222"),
  },
  field: {
    width: "80%",
    height: "auto",
  },
  mostRead: {
    backgroundColor: (dark) => (dark ? "#222" : "rgb(245, 245, 245)"),
    borderTop: (dark) => (dark ? "3px solid #fff" : "3px solid #222"),
    width: "100%",
    height: "auto",
    paddingBottom: 30,
    marginTop: 50,
  },
  underline: {
    backgroundColor: (dark) => (dark ? "#fff" : "#222"),
    width: "90%",
    height: 1,
    marginTop: 5,
  },
  linkIpsum: {
    transition: "color 0.3s ease-in",
    "&:hover": {
      color: "orange",
    },
  },
  author: {
    marginTop: 50,
    width: "100%",
  },
  underlineBig: {
    backgroundColor: (dark) => (dark ? "#fff" : "#222"),
    width: "93%",
    height: 1,
    marginTop: 5,
    marginBottom: 35,
  },
  authorBox: {
    width: "93%",
    height: 300,
    backgroundColor: (dark) => (dark ? "#222" : "rgb(245, 245, 245)"),
    display: "flex",
  },
  leftBox: {
    width: "250px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imgAut: {
    width: 120,
    height: 120,
    borderRadius: 60,
    border: (dark) => (dark ? "3px solid #fff" : "3px solid #222"),
  },
  authTitle: {
    fontWeight: 700,
    marginBottom: 20,
  },
  authBod: {
    lineHeight: 1.8,
    width: "95%",
  },
  rightBox: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  spreadBox: {
    width: "93%",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  inputF: {
    width: "47%",
  },
  multiline: {
    width: "93%",
  },
  subBtn: {
    width: 200,
    height: 50,
    borderRadius: 50,
    cursor: "pointer",
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 50,
    color: "white",
    background: "linear-gradient(to right, #fdc830, #f37335)",
    transition: "all 0.3s ease-in",
    marginTop: 30,
    "&:hover": {
      background: "linear-gradient(to left, #fdc830, #f37335)",
    },
  },
  cates: {
    margin: "20px",
  },
  event: {
    margin: "20px 0",
  },
  dateEve: {
    display: "flex",
  },
}));
