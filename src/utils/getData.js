const API = 'https://rickandmortyapi.com/api/character/';


const getData = async (id) => {
    const apiUrl = id ? `${API}${id}` : API; 
    try {                                    
        const response = await fetch(apiUrl);
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch Error: ', error);
    };                                        
};

export default getData;
