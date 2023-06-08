const strContains = (title, searchString) => {
    if(title.toLowerCase().includes(searchString.toLowerCase())){
        return true;
    }
};

export default strContains;