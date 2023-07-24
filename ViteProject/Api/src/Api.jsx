import axios from "axios";

const CallApi = async (term) => {
    
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {Authorization:'Client-ID hHGZtxgfQvcf7F8V8FdvBhq8kJOWqCT7Nw1v_Wuv9Hc'},
        params: {query:term}
      
    })
    return response.data.results;
  }
export default CallApi;


