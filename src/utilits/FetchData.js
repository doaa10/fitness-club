
export const exerciseOptions= {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '083ef0c929mshc82036b99a1827dp1625a8jsna7f2e88b7ad2',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  export const bmiOptions={
     
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '083ef0c929mshc82036b99a1827dp1625a8jsna7f2e88b7ad2',
          'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
  
  }


export const FetchDate =async(url,options)=>{
    const response=await fetch(url,options);
    const data=await response.json();

    return data;
}