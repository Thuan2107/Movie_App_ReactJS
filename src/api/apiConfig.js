const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '47c2c68e5840f6a077adb91d82b40a8e',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;