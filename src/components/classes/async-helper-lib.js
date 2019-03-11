class AsyncHelperLib {
    // AsyncHelperLib -- simple get data with try catch
    // Date: 2019-01-11
    // Author: M.Carbone
    // Release: 0.1.0

    name = 'asyncHelperLib';
    url = 'nutravel.com';

    constructor(length) {
  
    // console.log ('asyncHelperLib loaded Axios...'); 
    // not needed but if class is extending calls parent:
    // super(length, length);
       
    }
  
    // Getter/setter methods are supported in classes,
    // similar to their ES5 equivalents
    get url() {
      return this.url;
    }
  
    set url(value) {
      this.url = value;
      // console.log ('Async-helper.... url: ' +url);
    }
      
    loadDataFromServerByURL = async (url) => {
      try {
        const response = await axios.get(`${url}`);
             // console.log ('response....', response);
              return response.data;
      } catch (error) {
        throw new Error(`@error at loadDataFromServerByURL ${url}`);
      }
    };

  }

  export default AsyncHelperLib