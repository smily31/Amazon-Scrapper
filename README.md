
# Amazon-Scraper API

Amazon Data Scraper is the easiest way to get access to product details, reviews, offers and search rank data from Amazon.com in JSON format.

## Requirement

Get your ***api_key*** from [Scraper Api](https://www.scraperapi.com/).


## API Reference

### Get Amazon Product Detail

```http
  GET /api/product/${productId}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `productId` | `string` | **Required**. Id of product to fetch details |

Takes productId and returns its details.
***

### Get Amazon Product Reviews

```http
  GET /api/product/${productId}/reviews
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `productId` | `string` | **Required**. Id of product to fetch reviews |

Takes productId and returns the reviews.
***
### Get Amazon Product Offers

```http
  GET /api/product/${productId}/offers
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `productId` | `string` | **Required**. Id of product to fetch offers |

Takes productId and returns the available offer on it.
***

### Get Amazon Product Offers

```http
  GET /api/search/${searchQuery}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `searchQuery` | `string` | **Required**. User value for search |

Takes text and returns search results of that product from Amazon.
***
**You can use this api from [here](https://rapidapi.com/ritikabhatt3110/api/amazon-data-scraper93)**


