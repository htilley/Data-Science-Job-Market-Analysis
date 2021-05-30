let cheerio = require('cheerio')
let $ = cheerio.load('https://www.glassdoor.co.uk/Job/uk-data-jobs-SRCH_IL.0,2_IN2_KO3,7.htm')

let a_list = [];

var jobs={"roles":[],
     "companies":[],
     "locations":[],
     "experience":[],
     "skills":[]}

$('.list.items .item').each(function(index,element){
        a_list[index] = {};
        var header = $(element).find('[')
} )
