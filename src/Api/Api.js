const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HsQggvvk6JE8utFql7Hk/books/';

export const getBooksFromServer = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    const books = Object.entries(data).map((keyValue) => ({
      ...keyValue[1][0],
      id: keyValue[0],
    }));
    return books;
  };

export const AddBookApi = async (book) => {
    const apiBook = { ...book };
    delete Object.assign(apiBook, { item_id: apiBook.id }).id;
    await fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify(apiBook),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

