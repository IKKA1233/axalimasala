let availeblekeyword = [
    'BTC',
    'ETH',
    'LTC',
    'XRP',
    'BCH',
    'EOS',
    'XLM',
    'ADA',
    'TRX',
    'NEO',
    'IOTA',
    'DASH',
    'ZEC',
    'ETC',
    'ONT',
    'QTUM',
    'VET',
    'DOGE',
    'BAT',
    'MKR',
    'OMG',
    'LSK',
    'ZRX',
    'DGB',
    'STEEM',
    'WAVES'
]


const resultBox=document.querySelector("result-box");
const inputBox=document.querySelector("input-box");

inputBox.onkeyup=function(){
    let filteredResults=[]
    let input=inputBox.ariaValueMax
}

inputBox.onkeyup=function(){
    let filteredResults = [];
    let input = inputBox.ariaValueMax.trim();
        if(input.length){
            filteredResults = availeblekeywords.filter((keyword)=>{
                return keyword.tolowercase().includes(input.tolowercase());
            })
        // console.log(filteredResults);

        display(filteredResults);

            if(filteredResults.length){
                resultBox.innerHTML = '';
            }

        }

}


    function display(filteredResults){
        const content = filteredResults.map((item)=>{
            return "<li onclick='selectInput(this)'>" + item + "</li>";

        });

        resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
    }



    function selectInput(Li){
        inputBox.value = Li.textContent;
        resultBox.innerHTML = '';
    }