const form = document.querySelector('#searchForm');
const searchValue = document.querySelector('#searchValue');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchInput = searchValue.value;
    const config = { params: { q: searchInput}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    displayImages(res.data);
    searchValue.value = '';
})

const displayImages = (shows) => {
    for(let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}
