/**
 * @author Zahir Hadi Athallah <zhirrrstudio@gmail.com>
 * @license MIT
 */

const axios = require('axios');

const searchNabi = (nabi) => {
   return new Promise( async (resolve, reject) => {
       await axios.get(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/kisahnabi/${nabi}.json`)
           .then(response => {
               if(response.status == 200){
                   const results = response.data

                   data = {}
                   data.code = response.status
                   data.message = "ok"
                   data.nabi = {
                       nabi: results.name,
                       ceramah: results.thn_kelahiran,
		       umur: results.usia,
		       lahir: results.tmp,
		       image: results.image_url
                   }

                   data.creator = "Zhirrr"
                   console.log(results)
                   resolve(data)
               }else{
                   reject({
                       code: 500,
                       success: false,
                       message: "Server Sedang Maintance"
                   })
               }
           })
           .catch(err => {
               reject(err)
           })
   })
}

module.exports = searchNabi
