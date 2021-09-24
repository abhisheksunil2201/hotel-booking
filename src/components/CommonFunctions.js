import gql from "graphql-tag";

export const getHotelById = (hotels, id) => {
  return hotels.filter((hotel) => hotel.id === String(id))[0];
};

export const listHotels = gql`
  {
    listHotels {
      items {
        id
        name
        image
        price
        rating
        address
        location
        landmark
      }
    }
  }
`;

const sortByRating = (products) => {
  return products.sort((a, b) => b.rating - a.rating);
};

const lowToHighSort = (products) => {
  return products.sort((a, b) => a.price - b.price);
};

const highToLowSort = (products) => {
  return products.sort((a, b) => b.price - a.price);
};

export const sortFunction = (arrayToBeSorted, sortByType) => {
  switch (sortByType) {
    case "rating":
      return sortByRating(arrayToBeSorted);
    case "highToLow":
      return highToLowSort(arrayToBeSorted);
    case "lowToHigh":
      return lowToHighSort(arrayToBeSorted);
    default:
      return arrayToBeSorted;
  }
};
