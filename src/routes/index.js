import axios from "axios";
const BASEURL = "https://gitconnected.com/v1/portfolio/jrtwheeler";

export default {
    getResume: function () {
        return axios.get(BASEURL);
     }
}