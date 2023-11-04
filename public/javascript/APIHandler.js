class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;

    this.api = axios.create({
      baseURL: this.BASE_URL,
    });
  }

  getAllCharacters = () => {
    return this.api.get("/characters").then(response =>{
    console.log(response.data)})
    };


  getOneCharacter = (id) => {
    return this.api.get(`/characters/${id}`).then(response =>{
      console.log(response.data)
    })
  };

  createCharacter = (characterInfo) => {
    return this.api.post(`/characters`, characterInfo);
    console.log(response.data)
  };

  editCharacter = (id, characterInfo) => {
    return this.api.put(`characters/${id}`, characterInfo);
    console.log(response.data)
  };

  deleteCharacter = (id) => {
    return this.api.delete(`characters/${id}`);
    console.log(response.data)
  };
}
