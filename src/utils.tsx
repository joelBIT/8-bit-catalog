
export function createGame(game: any) {
    return {
        id: game.id,
        title: game.title,
        category: game.category,
        cover: game.cover ? game.cover : "notavailable.jpg",
        publisher: game.publisher,
        developer: game.developer,
        players: 1,
        releaseYear: game.releaseYear
    }
}